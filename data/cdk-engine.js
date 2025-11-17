//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/11/2025
//Version 9.5
// cdk-engine.js
// Core brain for the Cloud Decision Kit.
// Uses the per-cloud catalogs (aws-services.js, azure-services.js, gcp-services.js, oci-services.js)
// and the cross-cutting tools catalogs (vmware-options.js, terraform-options.js, ansible-options.js,
// networking-options.js) to turn wizard answers into a concrete reference design.

(function (global) {
  const CDK = (global.CDK = global.CDK || {});
  CDK.providers = CDK.providers || {};
  CDK.tools = CDK.tools || {};

  const engine = {};

  function getProvider(cloudId) {
    return CDK.providers[cloudId] || null;
  }

  function labelForCloud(cloudId, provider) {
    if (provider && provider.displayName) return provider.displayName;
    switch (cloudId) {
      case "azure":
        return "Microsoft Azure";
      case "aws":
        return "Amazon Web Services (AWS)";
      case "gcp":
        return "Google Cloud Platform (GCP)";
      case "oci":
        return "Oracle Cloud Infrastructure (OCI)";
      default:
        return cloudId || "Cloud";
    }
  }

  function getCategory(source, key, labelKeyword) {
    if (!source || !source.serviceCategories) return null;
    const cats = source.serviceCategories;
    if (cats[key]) return cats[key];
    if (!labelKeyword) return null;
    const needle = labelKeyword.toLowerCase();
    for (const cat of Object.values(cats)) {
      if (cat && typeof cat.label === "string" && cat.label.toLowerCase().includes(needle)) {
        return cat;
      }
    }
    return null;
  }

  function pickService(category, keywords) {
    if (!category || !Array.isArray(category.services) || category.services.length === 0) {
      return null;
    }
    if (keywords && keywords.length) {
      const lowered = keywords.map((k) => k.toLowerCase());
      const found = category.services.find((svc) => {
        const name = (svc.name || "").toLowerCase();
        const cat = (svc.category || "").toLowerCase();
        return lowered.some((k) => name.includes(k) || cat.includes(k));
      });
      if (found) return found;
    }
    return category.services[0];
  }

  function listServiceNames(services) {
    if (!services || !services.length) return "";
    const names = services.map((s) => s.name || "").filter(Boolean);
    if (!names.length) return "";
    if (names.length === 1) return names[0];
    if (names.length === 2) return names[0] + " and " + names[1];
    return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
  }

  function buildComputePlan(cloudId, provider, state) {
    const {
      initiativeType = "",
      architectureType = "",
      trafficPattern = "",
      latencySensitivity = "",
      teamSkills = "",
      serviceModels = "",
      criticality = ""
    } = state;

    let pattern = "vms";
    if (serviceModels === "saas") {
      pattern = "saas";
    } else if (serviceModels === "ml-ai" || architectureType === "data-analytics") {
      pattern = "analytics";
    } else if (architectureType === "microservices") {
      pattern = "containers";
    } else if (architectureType === "event-driven") {
      pattern = "serverless";
    } else if (architectureType === "batch") {
      pattern = "batch";
    } else if (architectureType === "web-api" || architectureType === "") {
      if (trafficPattern === "spiky" || teamSkills === "serverless") {
        pattern = "serverless";
      } else if (teamSkills === "containers") {
        pattern = "containers";
      } else if (teamSkills === "paas") {
        pattern = "paas";
      } else {
        pattern = "vms";
      }
    }

    const patternLabelMap = {
      saas: "SaaS-first integration",
      serverless: "Serverless app / API",
      containers: "Containers / Kubernetes",
      paas: "Managed application PaaS",
      vms: "VM / IaaS",
      analytics: "Analytics / data platform",
      batch: "Batch & scheduled jobs"
    };

    const providerName = labelForCloud(cloudId, provider);

    const computeCat = getCategory(provider, "compute", "compute");
    const containerCat = getCategory(provider, "containers", "container");
    const analyticsCat = getCategory(provider, "analytics", "analytics");

    const serverlessKeywords = ["lambda", "functions", "function", "serverless"];
    const containerKeywords = ["kubernetes", "container", "eks", "aks", "gke", "ecs"];
    const paasKeywords = ["app service", "app engine", "app runner", "web apps", "elastic beanstalk"];
    const vmKeywords = ["virtual machine", "vm ", "ec2", "compute engine"];
    const analyticsKeywords = ["synapse", "bigquery", "redshift", "fabric", "databricks", "analytics"];
    const batchKeywords = ["batch", "data factory", "glue", "dataflow", "step functions"];

    let primarySvc = null;
    let secondarySvc = null;

    if (pattern === "serverless") {
      primarySvc = pickService(computeCat, serverlessKeywords) || pickService(containerCat, serverlessKeywords);
      secondarySvc = pickService(containerCat, containerKeywords);
    } else if (pattern === "containers") {
      primarySvc = pickService(containerCat, containerKeywords) || pickService(computeCat, containerKeywords);
      secondarySvc = pickService(computeCat, vmKeywords);
    } else if (pattern === "paas") {
      primarySvc = pickService(computeCat, paasKeywords);
      secondarySvc = pickService(computeCat, serverlessKeywords);
    } else if (pattern === "analytics") {
      primarySvc = pickService(analyticsCat, analyticsKeywords) || pickService(computeCat, analyticsKeywords);
      secondarySvc = pickService(computeCat, serverlessKeywords);
    } else if (pattern === "batch") {
      primarySvc = pickService(analyticsCat, batchKeywords) || pickService(computeCat, batchKeywords);
      secondarySvc = pickService(computeCat, vmKeywords);
    } else if (pattern === "saas") {
      primarySvc = null;
    } else {
      primarySvc = pickService(computeCat, vmKeywords);
      secondarySvc = pickService(containerCat, containerKeywords);
    }

    const services = [];
    if (primarySvc) services.push(primarySvc);
    if (secondarySvc && (!primarySvc || secondarySvc.name !== primarySvc.name)) {
      services.push(secondarySvc);
    }

    const patternLabel = patternLabelMap[pattern] || "Compute pattern";
    let summary = "";
    let notes = "";

    if (pattern === "saas") {
      summary =
        "Favor <strong>SaaS-first</strong> for this workload and keep custom compute minimal, focusing on integration into " +
        providerName +
        ".";
      notes =
        "Use IaaS/PaaS only where there is no suitable SaaS. The wizard will still recommend integration, data, and automation services to stitch the solution together.";
    } else {
      const svcList = listServiceNames(services);
      summary =
        "Primary compute pattern: <strong>" +
        patternLabel +
        "</strong> on <strong>" +
        providerName +
        "</strong>" +
        (svcList ? " anchored on <strong>" + svcList + "</strong>." : ".");
    }

    if (!notes) {
      notes =
        "Criticality: <strong>" +
        (criticality || "unspecified") +
        "</strong>. Align compute design with SLOs: multi-AZ / multi-region for Tier 0/1, simpler HA with backups for Tier 2/3. " +
        "Match the platform to team strengths (" +
        (teamSkills || "mixed skills") +
        ") so the solution is supportable.";
    }

    return {
      pattern,
      summary,
      notes,
      services
    };
  }

  function buildDataPlan(cloudId, provider, state) {
    const {
      dataType = "",
      dataSensitivity = "",
      writePattern = "",
      serviceModels = ""
    } = state;

    const providerName = labelForCloud(cloudId, provider);

    const dbCat = getCategory(provider, "databases", "database");
    const analyticsCat = getCategory(provider, "analytics", "analytics");

    const relationalKeywords = ["sql", "postgres", "mysql", "rds", "relational"];
    const nosqlKeywords = ["nosql", "cosmos", "dynamo", "firestore", "cassandra", "mongo"];
    const objectKeywords = ["blob", "object", "s3", "storage", "bucket", "file"];
    const streamingKeywords = ["stream", "event hubs", "kinesis", "pub/sub", "kafka"];
    const lakeKeywords = ["data lake", "lake", "synapse", "bigquery", "redshift", "fabric", "databricks"];

    let primaryStore = null;
    let secondaryStore = null;
    let patternLabel = "Relational";
    let summary = "";
    let notes = "";

    if (dataType === "nosql") {
      primaryStore = pickService(dbCat, nosqlKeywords) || pickService(analyticsCat, nosqlKeywords);
      secondaryStore = pickService(dbCat, relationalKeywords);
      patternLabel = "NoSQL / document / key-value";
    } else if (dataType === "files") {
      primaryStore = pickService(analyticsCat, objectKeywords) || pickService(dbCat, objectKeywords);
      patternLabel = "Object / file storage";
    } else if (dataType === "streaming") {
      primaryStore = pickService(analyticsCat, streamingKeywords);
      secondaryStore = pickService(analyticsCat, objectKeywords);
      patternLabel = "Streaming / telemetry";
    } else if (dataType === "analytics-lake") {
      primaryStore = pickService(analyticsCat, lakeKeywords) || pickService(analyticsCat, objectKeywords);
      secondaryStore = pickService(dbCat, relationalKeywords);
      patternLabel = "Lakehouse / analytics";
    } else {
      primaryStore = pickService(dbCat, relationalKeywords);
      secondaryStore = pickService(analyticsCat, objectKeywords);
      patternLabel = "Relational (OLTP)";
    }

    const services = [];
    if (primaryStore) services.push(primaryStore);
    if (secondaryStore && (!primaryStore || secondaryStore.name !== primaryStore.name)) {
      services.push(secondaryStore);
    }

    const svcList = listServiceNames(services);
    summary =
      "Primary data pattern: <strong>" +
      patternLabel +
      "</strong> on <strong>" +
      providerName +
      "</strong>" +
      (svcList ? " using <strong>" + svcList + "</strong> as core data services." : ".");

    const regulated =
      dataSensitivity === "regulated" ||
      dataSensitivity === "ps-l2" ||
      dataSensitivity === "ps-l4" ||
      dataSensitivity === "ps-l5" ||
      dataSensitivity === "ps-l6" ||
      dataSensitivity === "private-sector";

    notes =
      "Write pattern: <strong>" +
      (writePattern || "balanced") +
      "</strong>. Use tiered storage (hot vs. archive), built-in encryption-at-rest, " +
      "and private networking (endpoints / peering) for all sensitive data. ";

    if (regulated) {
      notes +=
        "Because the data is regulated (financial, PII, or public sector impact level), require encryption in transit, " +
        "strict key management (HSM / KMS / Key Vault), and data residency controls. Align the service selection with the " +
        "appropriate regulatory boundary (e.g., IL2/4/5/6, PCI, GLBA, SOX, FedRAMP).";
    } else {
      notes +=
        "For non-regulated datasets, still standardize on encryption and IAM guardrails, but you may relax some of the regional and service restrictions.";
    }

    if (serviceModels === "ml-ai") {
      notes +=
        " For ML/AI-heavy workloads, land data into a common lakehouse pattern so that analytics and model training use the same governed data foundation.";
    }

    return {
      summary,
      notes,
      services
    };
  }

  function buildIntegrationPlan(cloudId, provider, state) {
    const { integrations = "", architectureType = "" } = state;
    const providerName = labelForCloud(cloudId, provider);

    const appIntCat = getCategory(provider, "app-integration", "integration") ||
      getCategory(provider, "analytics", "analytics");

    const apiKeywords = ["api management", "api gateway", "gateway"];
    const mqKeywords = ["service bus", "queue", "sqs", "pub/sub", "kafka", "messaging"];
    const eventKeywords = ["event hubs", "eventbridge", "event grid", "pub/sub", "stream"];
    const orchKeywords = ["logic apps", "step functions", "orchestration", "workflow"];

    let primary = null;
    let secondary = null;
    let patternLabel = "Standard API & messaging";
    let summary = "";
    let notes = "";

    if (integrations === "simple-http" || integrations === "") {
      primary = pickService(appIntCat, apiKeywords);
      secondary = pickService(appIntCat, mqKeywords);
      patternLabel = "API gateway + basic messaging";
    } else if (integrations === "enterprise-messaging") {
      primary = pickService(appIntCat, mqKeywords);
      secondary = pickService(appIntCat, apiKeywords);
      patternLabel = "Enterprise messaging / queues / topics";
    } else if (integrations === "event-streaming") {
      primary = pickService(appIntCat, eventKeywords);
      secondary = pickService(appIntCat, apiKeywords);
      patternLabel = "Event streaming / telemetry";
    } else if (integrations === "orchestration") {
      primary = pickService(appIntCat, orchKeywords);
      secondary = pickService(appIntCat, apiKeywords);
      patternLabel = "Workflow / orchestration-led integration";
    }

    const services = [];
    if (primary) services.push(primary);
    if (secondary && (!primary || secondary.name !== primary.name)) {
      services.push(secondary);
    }

    const svcList = listServiceNames(services);
    summary =
      "Integration pattern: <strong>" +
      patternLabel +
      "</strong> on <strong>" +
      providerName +
      "</strong>" +
      (svcList ? " anchored on <strong>" + svcList + "</strong>." : ".");

    notes =
      "Use the cloud-native API gateway and messaging / eventing stack to decouple services. " +
      "Keep integration concerns (routing, auth, throttling, transformation) in the platform, not in each app. ";

    if (architectureType === "microservices") {
      notes +=
        "For microservices, favor async messaging and events to reduce coupling and improve resilience.";
    } else if (architectureType === "event-driven") {
      notes +=
        "For event-driven workloads, standardize on a single event bus / stream technology per domain to avoid fragmentation.";
    }

    return {
      summary,
      notes,
      services
    };
  }

  function buildOpsPlan(cloudId, provider, state) {
    const { criticality = "", opsMaturity = "", dataSensitivity = "" } = state;
    const providerName = labelForCloud(cloudId, provider);

    const mgmtCat = getCategory(provider, "management-governance", "management");
    const securityCat = getCategory(provider, "security", "security");
    const costCat = getCategory(provider, "cost-controls", "cost");
    const netTool = CDK.tools && CDK.tools.networking;

    const monitoringSvc = mgmtCat ? pickService(mgmtCat, ["monitor", "logging"]) : null;
    const secSvc = securityCat ? pickService(securityCat, ["defender", "security", "guard", "identity"]) : null;
    const costSvc = costCat ? pickService(costCat, ["cost", "advisor", "billing"]) : null;

    let networkSecuritySvc = null;
    if (netTool) {
      const netSecCat = getCategory(netTool, "network-security", "Security");
      networkSecuritySvc = netSecCat ? pickService(netSecCat, []) : null;
    }

    const services = [monitoringSvc, secSvc, costSvc, networkSecuritySvc].filter(Boolean);

    const svcList = listServiceNames(services);
    let summary =
      "Operations, resilience & governance for <strong>" +
      providerName +
      "</strong>" +
      (svcList ? " built around <strong>" + svcList + "</strong> and the platform’s native monitoring and policy engines." : ".");

    let notes =
      "Treat this workload as <strong>" +
      (criticality || "Tier not set") +
      "</strong> and define explicit SLOs (availability, latency, error budget). " +
      "Align alerting and runbooks to those SLOs. ";

    if (opsMaturity === "basic") {
      notes +=
        "Start with basic dashboards, on-call rotation, and monthly reviews; gradually introduce automation and standardized runbooks.";
    } else if (opsMaturity === "intermediate") {
      notes +=
        "Use infrastructure-as-code, CI/CD, and centralized logging; enforce tagging and service ownership for all resources.";
    } else if (opsMaturity === "advanced") {
      notes +=
        "Apply SRE practices (error budgets, blameless postmortems, chaos testing) and automation-first operations.";
    }

    const regulated =
      dataSensitivity === "regulated" ||
      dataSensitivity === "ps-l2" ||
      dataSensitivity === "ps-l4" ||
      dataSensitivity === "ps-l5" ||
      dataSensitivity === "ps-l6" ||
      dataSensitivity === "private-sector";

    if (regulated) {
      notes +=
        " For regulated financial / public sector workloads, integrate with your central SIEM, follow NIST 800-53 / FedRAMP / GLBA controls, " +
        "and ensure all logs and audit trails are immutable and retained per policy.";
    }

    return {
      summary,
      notes,
      services
    };
  }

  function buildMigrationPlan(cloudId, provider, state) {
    const {
      initiativeType = "",
      migrationScope = "",
      cutoverStrategy = "",
      sourceEnv = "",
      migrationApproach = "",
      iaCTools = ""
    } = state;

    const providerName = labelForCloud(cloudId, provider);
    const migrationCat = getCategory(provider, "migration", "migration");

    const migrationSvc = migrationCat ? pickService(migrationCat, []) : null;

    const vmwareTool = CDK.tools && CDK.tools.vmware;
    const terraformTool = CDK.tools && CDK.tools.terraform;
    const ansibleTool = CDK.tools && CDK.tools.ansible;

    const tfCat = terraformTool ? getCategory(terraformTool, "iac-tools", "IaC") : null;
    const tfSvc = tfCat ? pickService(tfCat, ["terraform"]) : null;

    const ansibleCat = ansibleTool ? getCategory(ansibleTool, "control-plane", "Automation") : null;
    const ansibleSvc = ansibleCat ? pickService(ansibleCat, ["ansible"]) : null;

    let vmwareSvc = null;
    if (vmwareTool && vmwareTool.serviceCategories) {
      const firstCat = Object.values(vmwareTool.serviceCategories)[0];
      vmwareSvc = firstCat && Array.isArray(firstCat.services) ? firstCat.services[0] : null;
    }

    const services = [migrationSvc, tfSvc, ansibleSvc, vmwareSvc].filter(Boolean);
    const svcList = listServiceNames(services);

    let summary = "Migration & onboarding focus for <strong>" + providerName + "</strong>.";
    if (svcList) {
      summary += " Use <strong>" + svcList + "</strong> as the core migration and automation toolchain.";
    }

    const scopeLabelMap = {
      "single-app": "single application",
      portfolio: "portfolio of applications",
      "dc-estate": "data center / infrastructure estate",
      "db-only": "database-only / data-only"
    };
    const scopeLabel = scopeLabelMap[migrationScope] || migrationScope || "workload";

    const approachLabelMap = {
      rehost: "rehost (lift & shift)",
      replatform: "replatform (minor modernization)",
      refactor: "refactor / modernize",
      repurchase: "repurchase (SaaS)",
      retain: "retain",
      retire: "retire",
      relocate: "relocate (VMware-as-a-Service)"
    };
    const approachLabel = approachLabelMap[migrationApproach] || migrationApproach || "mixed";

    let notes =
      "Scope: <strong>" +
      scopeLabel +
      "</strong>. Preferred 7R approach: <strong>" +
      approachLabel +
      "</strong>. ";

    if (initiativeType === "migration" || sourceEnv) {
      if (sourceEnv === "onprem-vmware" || migrationApproach === "relocate") {
        notes +=
          "For VMware-heavy estates, consider a staged approach: discovery and assessment, " +
          "landing zone build-out, then bulk migration using VMware and cloud-native migration tools (e.g., HCX, native migration services). ";
      } else if (sourceEnv === "existing-cloud") {
        notes +=
          "For cloud-to-cloud migrations, treat each move as a replatform / refactor opportunity, gradually aligning to the new provider’s managed services. ";
      } else if (sourceEnv === "hybrid") {
        notes +=
          "For hybrid estates, design network and identity integration first (connectivity, DNS, IAM) before moving workloads.";
      }
    }

    if (iaCTools === "terraform") {
      notes +=
        " Standardize on <strong>Terraform</strong> modules for landing zones, networking, and services, integrated with your CI/CD system.";
    } else if (iaCTools === "ansible") {
      notes +=
        " Use <strong>Ansible</strong> for OS configuration, app deployment, and runbook automation, combined with provider-native IaC for infrastructure.";
    } else if (iaCTools === "cloud-native") {
      notes +=
        " Use the provider’s native IaC (ARM/Bicep, CloudFormation/CDK, Deployment Manager, OCI Resource Manager) for full fidelity with the platform.";
    } else if (iaCTools === "jenkins-ado-gha") {
      notes +=
        " Treat CI/CD (Jenkins, Azure DevOps, GitHub Actions, etc.) as the central orchestration layer for both IaC and application deployments.";
    }

    return {
      summary,
      notes,
      services
    };
  }

  function buildHowTo(cloudId, provider, state, pieces) {
    const providerName = labelForCloud(cloudId, provider);
    const {
      workloadName = "",
      initiativeType = "",
      dataSensitivity = "",
      migrationScope = "",
      migrationApproach = "",
      iaCTools = "",
      serviceModels = ""
    } = state;

    const title =
      (workloadName ? "<strong>" + workloadName + "</strong> – " : "") +
      "Cloud solution implementation playbook for " +
      providerName;

    const pathLabelMap = {
      "new-service": "new service / greenfield",
      "existing-service": "change to existing service",
      maintenance: "maintenance / operations",
      migration: "migration"
    };
    const initLabel = pathLabelMap[initiativeType] || "cloud initiative";

    const regulated =
      dataSensitivity === "regulated" ||
      dataSensitivity === "ps-l2" ||
      dataSensitivity === "ps-l4" ||
      dataSensitivity === "ps-l5" ||
      dataSensitivity === "ps-l6" ||
      dataSensitivity === "private-sector";

    const scopeLabelMap = {
      "single-app": "single application",
      portfolio: "application portfolio",
      "dc-estate": "data center / estate",
      "db-only": "database-only / data-only"
    };
    const scopeLabel = scopeLabelMap[migrationScope] || migrationScope || "workload";

    const approachLabelMap = {
      rehost: "rehost (lift & shift)",
      replatform: "replatform (minor modernization)",
      refactor: "refactor / modernize",
      repurchase: "repurchase (SaaS)",
      retain: "retain",
      retire: "retire",
      relocate: "relocate (VMware-as-a-Service)"
    };
    const approachLabel = approachLabelMap[migrationApproach] || migrationApproach || "mixed";

    let iacLabel = iaCTools || "mixed";

    const bullets = [];

    bullets.push(
      "<li><strong>Phase 0 – Intake & classification.</strong> " +
        "Confirm scope ( " +
        initLabel +
        " for " +
        scopeLabel +
        " ) and capture stakeholders, business drivers, and success criteria. " +
        "Classify data sensitivity (" +
        (dataSensitivity || "not set") +
        ") and decide whether this is primarily IaaS, PaaS, SaaS, CI/CD, or ML/AI-led (currently: <strong>" +
        (serviceModels || "not set") +
        "</strong>).</li>"
    );

    bullets.push(
      "<li><strong>Phase 1 – Landing zone & network.</strong> " +
        "Ensure the target landing zone in " +
        providerName +
        " is ready: " +
        "baseline networking (hub/spoke, connectivity to DC/branches), identity (SSO/IAM), logging, tagging, and guardrails. " +
        "Re-use or extend your standard Terraform / native IaC modules and networking patterns selected in the decision kit.</li>"
    );

    bullets.push(
      "<li><strong>Phase 2 – Reference architecture selection.</strong> " +
        "Confirm the compute, data, and integration patterns from the recommendation (compute: <em>" +
        pieces.compute.pattern +
        "</em>). " +
        "Document a simple diagram with entry points, core services, data stores, and dependencies. " +
        "Validate non-functional requirements (availability, RTO/RPO, performance) against the chosen services.</li>"
    );

    bullets.push(
      "<li><strong>Phase 3 – Security, compliance & ATO.</strong> " +
        "Map platform controls to your security framework (e.g., NIST 800-53, CIS, FedRAMP, GLBA). " +
        (regulated
          ? "Because this is a regulated or public sector workload, use regulated regions/tenants, private connectivity, and full audit logging. "
          : "For non-regulated workloads, still apply baseline encryption, IAM least privilege, and central logging. ") +
        "Engage security and compliance early, and update your control matrix and risk register.</li>"
    );

    bullets.push(
      "<li><strong>Phase 4 – IaC, pipelines & automation.</strong> " +
        "Standardize on the automation stack (<strong>" +
        iacLabel +
        "</strong>) to build environments: landing zones, networks, compute, data services, and integration components. " +
        "Create or reuse reusable modules (Terraform / native IaC / Ansible roles) and wire them into CI/CD so environments are reproducible and auditable.</li>"
    );

    bullets.push(
      "<li><strong>Phase 5 – Migration / rollout plan.</strong> " +
        "Detail the migration plan using the selected 7R approach (<strong>" +
        approachLabel +
        "</strong>): " +
        "inventory objects to move, dependencies, and sequencing. " +
        "For each wave, define rehearsal, cutover steps, fallback plan, and validation checks. " +
        "Align with change management and communication plans.</li>"
    );

    bullets.push(
      "<li><strong>Phase 6 – Cutover, verification & stabilization.</strong> " +
        "Execute cutover or go-live by wave. " +
        "Run technical and business smoke tests, verify monitoring and alerts, and watch SLOs closely during the early days. " +
        "Address early issues via fast feedback loops with the product and operations teams.</li>"
    );

    bullets.push(
      "<li><strong>Phase 7 – Operate & continuously improve.</strong> " +
        "Hand off to steady-state operations with runbooks, on-call rotations, and agreed SLOs. " +
        "Use cost and performance telemetry to optimize the architecture over time and to identify candidates for further modernization or SaaS replacement.</li>"
    );

    const html =
      "<div class=\"result-main\">" +
      title +
      "</div>" +
      '<ol class="howto-list">' +
      bullets.join("") +
      "</ol>";

    return html;
  }

  engine.buildPlan = function (cloudId, state) {
    const provider = getProvider(cloudId);
    const compute = buildComputePlan(cloudId, provider, state);
    const data = buildDataPlan(cloudId, provider, state);
    const integration = buildIntegrationPlan(cloudId, provider, state);
    const ops = buildOpsPlan(cloudId, provider, state);
    const migration = buildMigrationPlan(cloudId, provider, state);
    const howToHtml = buildHowTo(cloudId, provider, state, { compute, data, integration, ops, migration });

    return {
      compute,
      data,
      integration,
      ops,
      migration,
      howToHtml
    };
  };

  CDK.engine = engine;
})(window);
