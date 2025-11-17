//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/16/2025
//Version 1.0
// ansible-options.js
// Ansible automation catalog for the Cloud Decision Kit.
// Structured like the other option files: categories -> services[].
// Each service has an id, category label, and human-readable name.
// This file is cloud- and platform-agnostic; you can map it to
// AWS/Azure/GCP/OCI/VMware in your decision logic.

window.CDK = window.CDK || {};
window.CDK.tools = window.CDK.tools || {};

window.CDK.tools.ansible = {
  id: "ansible",
  displayName: "Ansible Automation",
  serviceCategories: {
    // ---------------------------
    // Control Plane & Runtimes
    // ---------------------------
    "control-plane": {
      label: "Control Plane & Runtimes",
      services: [
        { id: "ansible-core",              category: "AUTOMATION RUNTIME",  name: "ansible-core (engine / CLI)" },
        { id: "ansible-automation-platform", category: "AUTOMATION CONTROL", name: "Red Hat Ansible Automation Platform" },
        { id: "awx",                       category: "AUTOMATION CONTROL",  name: "AWX (upstream Ansible UI / API)" }
      ]
    },

    // ---------------------------
    // OS Configuration & Patching
    // ---------------------------
    "os-config-patching": {
      label: "OS Configuration & Patching",
      services: [
        { id: "base-os-hardening",   category: "OS HARDENING",          name: "Base OS hardening (Linux/Windows)" },
        { id: "os-patching",         category: "PATCH MANAGEMENT",      name: "OS patching and reboot orchestration" },
        { id: "ad-domain-join",      category: "DIRECTORY INTEGRATION", name: "Domain join / directory integration (AD / LDAP)" }
      ]
    },

    // ---------------------------
    // Application Deployment
    // ---------------------------
    "app-deployment": {
      label: "Application Deployment",
      services: [
        { id: "web-app-deploy",      category: "WEB / API DEPLOYMENT",  name: "Web / API application deployment and configuration" },
        { id: "middleware-deploy",   category: "MIDDLEWARE",            name: "App server and middleware deployment (IIS, NGINX, Apache, JBoss, WebLogic)" },
        { id: "database-deploy",     category: "DATABASE DEPLOYMENT",   name: "Database installation, configuration, schema rollout" }
      ]
    },

    // ---------------------------
    // Cloud Provider Modules
    // ---------------------------
    "cloud-modules": {
      label: "Cloud Provider Modules",
      services: [
        { id: "ansible-aws",    category: "CLOUD MODULES", name: "Ansible collections for AWS (amazon.aws, community.aws)" },
        { id: "ansible-azure",  category: "CLOUD MODULES", name: "Ansible collections for Azure (azure.azcollection)" },
        { id: "ansible-gcp",    category: "CLOUD MODULES", name: "Ansible collections for GCP (google.cloud, community.google)" },
        { id: "ansible-oci",    category: "CLOUD MODULES", name: "Ansible collections for Oracle Cloud Infrastructure (oracle.oci)" }
      ]
    },

    // ---------------------------
    // VMware & Infra Automation
    // ---------------------------
    "vmware-automation": {
      label: "VMware & Infra Automation",
      services: [
        { id: "vsphere-automation", category: "VMWARE AUTOMATION",   name: "vSphere lifecycle automation (VMs, templates, clusters)" },
        { id: "nsx-automation",     category: "NETWORK VIRTUALIZATION", name: "NSX network and security automation" },
        { id: "vcsa-lifecycle",     category: "MANAGEMENT PLANE",     name: "vCenter Server Appliance (VCSA) deployment and lifecycle" }
      ]
    },

    // ---------------------------
    // Network Automation
    // ---------------------------
    "network-automation": {
      label: "Network Automation",
      services: [
        { id: "network-device-config",   category: "NETWORK CONFIG",      name: "Network device config (routers, switches, wireless)" },
        { id: "load-balancer-config",    category: "LOAD BALANCING",      name: "Load balancer configuration (F5, NGINX, HAProxy, cloud LBs)" },
        { id: "firewall-policy-config",  category: "FIREWALL / SECURITY", name: "Firewall policy and rulebase management" }
      ]
    },

    // ---------------------------
    // Security & Compliance
    // ---------------------------
    "security-compliance": {
      label: "Security & Compliance",
      services: [
        { id: "cis-hardening",            category: "SECURITY BASELINES",   name: "CIS / STIG hardening roles and baselines" },
        { id: "vuln-scan-orchestration",  category: "VULNERABILITY MGMT",   name: "Vulnerability scan orchestration (Nessus, Qualys, etc.)" },
        { id: "secrets-integration",      category: "SECRETS MGMT",         name: "Integration with secrets managers (Vault, Key Vault, etc.)" }
      ]
    },

    // ---------------------------
    // CI/CD & Pipeline Integration
    // ---------------------------
    "cicd-integration": {
      label: "CI/CD & Pipeline Integration",
      services: [
        { id: "pipeline-integration",   category: "PIPELINE INTEGRATION", name: "Ansible integration with CI/CD (GitHub Actions, GitLab CI, Azure DevOps, Jenkins)" },
        { id: "bluegreen-canary",      category: "DEPLOYMENT STRATEGIES", name: "Blue/green and canary deployment playbooks" },
        { id: "post-deploy-smoke",     category: "POST-DEPLOY TESTING",   name: "Post-deployment smoke tests and verification" }
      ]
    },

    // ---------------------------
    // Operations Runbooks
    // ---------------------------
    "ops-runbooks": {
      label: "Operations Runbooks",
      services: [
        { id: "incident-runbooks",   category: "INCIDENT RESPONSE",   name: "Incident response and remediation runbooks" },
        { id: "backup-jobs",         category: "BACKUP & MAINTENANCE",name: "Backup, housekeeping, and maintenance jobs" },
        { id: "dr-runbooks",         category: "DISASTER RECOVERY",   name: "Disaster recovery playbooks and failover drills" }
      ]
    }
  }
};
