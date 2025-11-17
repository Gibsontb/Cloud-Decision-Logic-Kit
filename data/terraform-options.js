//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/16/2025
//Version 1.0
// terraform-options.js
// Terraform & IaC module catalog for the Cloud Decision Kit.
// Structured like the other option files: categories -> services[].
// Each service has an id, category label, and human-readable name.
// This file is cloud-agnostic but can be mapped to AWS/Azure/GCP/OCI
// in your decision logic.

window.CDK = window.CDK || {};
window.CDK.tools = window.CDK.tools || {};

window.CDK.tools.terraform = {
  id: "terraform",
  displayName: "Terraform & IaC Modules",
  serviceCategories: {
    // ---------------------------
    // IaC Tools & Runtimes
    // ---------------------------
    "iac-tools": {
      label: "IaC Tools & Runtimes",
      services: [
        { id: "terraform-oss",      category: "IAC TOOLING",      name: "Terraform (OSS CLI)" },
        { id: "terraform-cloud",    category: "IAC TOOLING",      name: "Terraform Cloud / Enterprise" },
        { id: "terragrunt",         category: "IAC WRAPPER",      name: "Terragrunt" },
        { id: "opentofu",           category: "IAC TOOLING",      name: "OpenTofu" }
      ]
    },

    // ---------------------------
    // Landing Zones & Org Baselines
    // ---------------------------
    "landing-zones": {
      label: "Landing Zones & Org Baselines",
      services: [
        { id: "aws-landing-zone",      category: "LANDING ZONES & ORG", name: "AWS multi-account landing zone modules (Control Tower / org structure)" },
        { id: "azure-caf-landing-zone",category: "LANDING ZONES & ORG", name: "Azure CAF landing zone modules (management groups, policies)" },
        { id: "gcp-org-foundation",    category: "LANDING ZONES & ORG", name: "GCP organization / folders / projects baseline" },
        { id: "oci-landing-zone",      category: "LANDING ZONES & ORG", name: "OCI tenancies, compartments, and baseline networking" }
      ]
    },

    // ---------------------------
    // Networking & Connectivity
    // ---------------------------
    "networking": {
      label: "Networking & Connectivity",
      services: [
        { id: "hub-spoke-network",     category: "NETWORK TOPOLOGY",       name: "Hub-and-spoke VPC/VNet/VCN layouts" },
        { id: "transit-connectivity",  category: "INTERCONNECT / TRANSIT", name: "Transit Gateway / Virtual WAN / Cloud Router connectivity" },
        { id: "vpn-private-circuits",  category: "DC CONNECTIVITY",        name: "Site-to-site VPN and private circuit (Direct Connect / ExpressRoute / Interconnect / FastConnect)" },
        { id: "app-entrypoints",       category: "APP ENTRYPOINTS",        name: "Application gateways, load balancers, API gateways, WAF" },
        { id: "dns-zones-records",     category: "DNS & NAMING",           name: "Public / private DNS zones and records" }
      ]
    },

    // ---------------------------
    // Compute & Container Platforms
    // ---------------------------
    "compute-containers": {
      label: "Compute & Container Platforms",
      services: [
        { id: "vm-baselines",          category: "COMPUTE",               name: "VM instance groups / scale sets / managed instance groups" },
        { id: "auto-scaling",          category: "COMPUTE",               name: "Auto-scaling policies and groups" },
        { id: "kubernetes-clusters",   category: "CONTAINERS",            name: "Managed Kubernetes clusters (EKS / AKS / GKE / OKE) modules" },
        { id: "serverless-runtimes",   category: "SERVERLESS",            name: "Serverless function platform modules (Lambda / Functions / Cloud Functions)" },
        { id: "bastion-hosts",         category: "ACCESS PATTERNS",       name: "Bastion hosts / jump boxes / secure admin entry" }
      ]
    },

    // ---------------------------
    // Data & Analytics Platform
    // ---------------------------
    "data-platform": {
      label: "Data & Analytics Platform",
      services: [
        { id: "object-storage-data-lake", category: "DATA LAKE STORAGE",  name: "Object storage data lake (S3 / ADLS / GCS / OCI Object Storage)" },
        { id: "relational-databases",    category: "RELATIONAL DATABASE", name: "Managed relational DBs (RDS, SQL DB, Cloud SQL, Autonomous DB)" },
        { id: "nosql-datastores",        category: "NOSQL",               name: "Managed NoSQL stores (DynamoDB, Cosmos DB, Firestore, etc.)" },
        { id: "streaming-kafka",         category: "STREAMING / KAFKA",   name: "Streaming platforms (Kafka / Event Hubs / Pub/Sub / Streaming)" },
        { id: "data-warehouse",          category: "DATA WAREHOUSE",      name: "Cloud data warehouse modules (Redshift, Synapse, BigQuery, ADW)" }
      ]
    },

    // ---------------------------
    // Security, Identity & Compliance
    // ---------------------------
    "security-compliance": {
      label: "Security, Identity & Compliance",
      services: [
        { id: "iam-baseline",           category: "IDENTITY & ACCESS",     name: "IAM baseline (roles, groups, policies)" },
        { id: "kms-key-vault",          category: "ENCRYPTION & KEYS",     name: "KMS / Key Vault / Cloud KMS / OCI Vault keys" },
        { id: "network-security",       category: "NETWORK SECURITY",      name: "Security groups, NSGs, firewalls, NACLs" },
        { id: "logging-audit",          category: "LOGGING & AUDIT",       name: "Audit logs, flow logs, centralized logging sinks" },
        { id: "guardrails-policies",    category: "POLICY GUARDRAILS",     name: "Guardrails (config rules, policies, security centers)" }
      ]
    },

    // ---------------------------
    // Operations & Shared Services
    // ---------------------------
    "operations": {
      label: "Operations & Shared Services",
      services: [
        { id: "monitoring-metrics",     category: "MONITORING",            name: "Metrics, dashboards, and alarms" },
        { id: "backup-restore",        category: "BACKUP & RECOVERY",      name: "Backup policies and restore plans (DB, VM, storage)" },
        { id: "observability-stack",   category: "OBSERVABILITY",          name: "Central observability stacks (Prometheus / Grafana / ELK, etc.)" },
        { id: "tagging-standards",     category: "TAGGING & METADATA",     name: "Tagging / labeling standards and enforcement" },
        { id: "service-catalog",       category: "SERVICE CATALOG",        name: "Pre-approved module catalog for self-service provisioning" }
      ]
    }
  }
};
