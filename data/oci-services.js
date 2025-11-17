//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/16/2025
//Version 2.2
// oci-services.js
// Oracle Cloud Infrastructure services aligned to the Cloud Decision Kit taxonomy.
// Names follow Oracle's current portfolio and map to the same ids/categories
// used in the AWS, Azure, and GCP service files.

window.CDK = window.CDK || {};
window.CDK.providers = window.CDK.providers || {};

window.CDK.providers.oci = {
  id: "oci",
  displayName: "Oracle Cloud Infrastructure (OCI)",
  serviceCategories: {
    // ---------------------------
    // AI and Machine Learning
    // ---------------------------
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",          category: "AI CONTAINERS",                name: "OCI Data Science container images, AI infrastructure" },
        { id: "ai-powered-assistant",   category: "AI-POWERED ASSISTANT",         name: "OCI Generative AI Agents, Oracle Digital Assistant" },
        { id: "human-review",           category: "HUMAN REVIEW/MODERATION",      name: "Human-in-the-loop review using OCI AI Services workflows" },
        { id: "chatbot-builder",        category: "CHATBOT BUILDER",              name: "Oracle Digital Assistant" },
        { id: "data-labeling",          category: "DATA LABELING",                name: "OCI Data Labeling" },
        { id: "document-extraction",    category: "DOCUMENT EXTRACTION",          name: "OCI Document Understanding" },
        { id: "generative-platforms",   category: "GENERATIVE AI PLATFORMS",      name: "OCI Generative AI, OCI Generative AI Agents" },
        { id: "image-recognition",      category: "IMAGE RECOGNITION",            name: "OCI Vision" },
        { id: "inference-acceleration", category: "INFERENCE ACCELERATION",       name: "OCI AI infrastructure (GPU shapes, AI clusters)" },
        { id: "language-translation",   category: "LANGUAGE TRANSLATION",         name: "OCI Language (translation)" },
        { id: "ml-ai-chips",            category: "ML/AI CHIPS",                  name: "OCI GPU shapes (NVIDIA A10, A100, H100, etc.)" },
        { id: "managed-ml-platform",    category: "MANAGED ML PLATFORM",          name: "OCI Data Science" },
        { id: "notebooks",              category: "NOTEBOOKS",                    name: "OCI Data Science Notebooks" },
        { id: "online-fraud",           category: "ONLINE FRAUD DETECTION",       name: "OCI Anomaly Detection for fraud and risk use cases" },
        { id: "preconfigured-ml-vms",   category: "PRECONFIGURED ML VMS",         name: "Marketplace ML images on OCI Compute" },
        { id: "recommendation-engine",  category: "RECOMMENDATION ENGINE",        name: "Industry-specific recommendation solutions on OCI" },
        { id: "speech-services",        category: "SPEECH RECOGNITION/SYNTHESIS", name: "OCI Speech" },
        { id: "text-analysis",          category: "TEXT ANALYSIS",                name: "OCI Language (text analytics, sentiment, PII)" },
        { id: "time-series-forecasting",category: "TIME-SERIES FORECASTING",      name: "OCI Forecasting, OCI Anomaly Detection for time series" },
        { id: "video-analysis",         category: "VIDEO ANALYSIS",               name: "OCI Vision (video AI)" },
        { id: "visual-inspection",      category: "VISUAL INSPECTION",            name: "OCI Vision (defect detection, visual inspection)" }
      ]
    },

    // ---------------------------
    // Analytics
    // ---------------------------
    "analytics": {
      label: "Analytics",
      services: [
        { id: "big-data-processing",    category: "BIG DATA PROCESSING",          name: "OCI Data Flow (Apache Spark), Big Data Service" },
        { id: "business-analytics",     category: "BUSINESS ANALYTICS",           name: "Oracle Analytics Cloud" },
        { id: "data-exploration",       category: "DATA EXPLORATION/CATALOG",     name: "Oracle Analytics Cloud data exploration, OCI Data Catalog" },
        { id: "data-lake-creation",     category: "DATA LAKE CREATION",           name: "Data lakes on OCI Object Storage with Autonomous Data Warehouse" },
        { id: "data-sharing",           category: "DATA SHARING/EXCHANGE",        name: "OCI Data Catalog and Data Integration data sharing" },
        { id: "data-streaming",         category: "DATA STREAMING",               name: "OCI Streaming" },
        { id: "data-warehousing",       category: "DATA WAREHOUSING",             name: "Autonomous Data Warehouse" },
        { id: "data-wrangling",         category: "DATA WRANGLING",               name: "Oracle Data Integration, Oracle Analytics data preparation" },
        { id: "etl",                    category: "ETL",                           name: "OCI Data Integration" },
        { id: "hosted-hadoop-spark",    category: "HOSTED HADOOP/SPARK",          name: "OCI Big Data Service, OCI Data Flow" },
        { id: "managed-kafka",          category: "MANAGED KAFKA",                name: "OCI Streaming (Kafka-compatible APIs via connectors)" },
        { id: "managed-search",         category: "MANAGED SEARCH",               name: "OCI Search with OpenSearch" },
        { id: "query-service",          category: "QUERY SERVICE",                name: "Autonomous Data Warehouse, Oracle Analytics query engine" }
      ]
    },

    // ---------------------------
    // Application Integration
    // ---------------------------
    "app-integration": {
      label: "Application Integration",
      services: [
        { id: "api-management",         category: "API MANAGEMENT",               name: "OCI API Gateway" },
        { id: "distributed-coordination",category: "DISTRIBUTED COORDINATION",    name: "OCI Service Connector Hub, Events, Functions" },
        { id: "event-handling",         category: "EVENT HANDLING",               name: "OCI Events Service" },
        { id: "integration-service",    category: "INTEGRATION SERVICE",          name: "Oracle Integration Cloud" },
        { id: "messaging",              category: "MESSAGING",                    name: "OCI Streaming, OCI Notifications" },
        { id: "service-discovery",      category: "SERVICE DISCOVERY",            name: "Service discovery via OCI DNS, OCI Service Mesh, OKE" },
        { id: "service-mesh",           category: "SERVICE MESH",                 name: "OCI Service Mesh" },
        { id: "workflow-orchestration", category: "WORKFLOW ORCHESTRATION",       name: "Oracle Integration, Process Automation, OCI Resource Manager pipelines" }
      ]
    },

    // ---------------------------
    // Business Applications
    // ---------------------------
    "business-apps": {
      label: "Business Applications",
      services: [
        { id: "collaboration-suite", category: "COLLABORATION SUITE",             name: "Oracle Content Management and collaboration solutions" },
        { id: "document-sharing",    category: "DOCUMENT SHARING",                name: "Oracle Content Management (documents, files)" },
        { id: "email-calendar",      category: "EMAIL AND CALENDAR",              name: "Oracle Cloud CX and Fusion apps email integration" },
        { id: "low-code",            category: "LOW-CODE/NO-CODE TOOLS",          name: "Oracle APEX, Oracle Visual Builder" },
        { id: "video-calls-chat",    category: "VIDEO CALLS AND CHAT",            name: "3rd-party UC integrations (Zoom, Teams) on OCI" },
        { id: "voice-assistant",     category: "VOICE ASSISTANT",                 name: "Oracle Digital Assistant" }
      ]
    },

    // ---------------------------
    // Compute
    // ---------------------------
    "compute": {
      label: "Compute",
      services: [
        { id: "autoscaling",        category: "AUTOSCALING",                     name: "OCI Autoscaling for Compute instances" },
        { id: "batch-processing",   category: "BATCH PROCESSING",                name: "Oracle Cloud Infrastructure Batch / HPC batch solutions" },
        { id: "hybrid-extended",    category: "HYBRID/EXTENDED INFRA",           name: "Oracle Cloud@Customer, Dedicated Region, Exadata Cloud@Customer" },
        { id: "serverless-compute", category: "SERVERLESS COMPUTE",              name: "Oracle Functions" },
        { id: "hpc-management",     category: "HPC MANAGEMENT",                  name: "OCI HPC solutions on bare metal and GPU shapes" },
        { id: "dedicated-servers",  category: "DEDICATED SERVERS",               name: "Bare Metal Compute instances" },
        { id: "paas-web-hosting",   category: "PAAS WEB HOSTING",                name: "Oracle WebLogic Server for OCI, Java Cloud Service" },
        { id: "quantum-computing",  category: "QUANTUM COMPUTING",               name: "Quantum computing via partner integrations" },
        { id: "virtual-machines",   category: "VIRTUAL MACHINES",                name: "OCI Compute instances (VM shapes)" },
        { id: "vm-image-builder",   category: "VM IMAGE BUILDER",                name: "Custom images and image management in OCI Compute" },
        { id: "vmware-integration", category: "VMWARE INTEGRATION",              name: "Oracle Cloud VMware Solution (OCVS)" }
      ]
    },

    // ---------------------------
    // Containers
    // ---------------------------
    "containers": {
      label: "Containers",
      services: [
        { id: "container-migration",   category: "CONTAINER MIGRATION",          name: "Containerization of Oracle workloads to OKE, WebLogic on Kubernetes" },
        { id: "container-registry",    category: "CONTAINER REGISTRY",           name: "OCI Container Registry (OCIR)" },
        { id: "managed-containers",    category: "MANAGED CONTAINERS",           name: "OCI Container Instances" },
        { id: "managed-kubernetes",    category: "MANAGED KUBERNETES",           name: "OCI Container Engine for Kubernetes (OKE)" },
        { id: "serverless-containers", category: "SERVERLESS CONTAINERS",        name: "Oracle Functions with container images, OKE-based serverless patterns" }
      ]
    },

    // ---------------------------
    // Cost Controls
    // ---------------------------
    "cost-controls": {
      label: "Cost Controls",
      services: [
        { id: "architecture-review",   category: "ARCHITECTURE REVIEW",          name: "Oracle Cloud Lift Services, architecture best-practice reviews" },
        { id: "billing-budgeting",     category: "BILLING AND BUDGETING TOOLS",  name: "OCI Cost Analysis, Budgets, Cost Reports" },
        { id: "optimization",          category: "OPTIMIZATION & RECOMMENDATIONS", name: "OCI Cloud Advisor (cost and performance recommendations)" },
        { id: "commitment-discounts",  category: "COMMITMENT DISCOUNTS",         name: "Oracle Universal Credits, subscription discounts, BYOL" },
        { id: "spot-vms",              category: "SPOT/PREEMPTIBLE VMS",         name: "OCI preemptible instances" },
        { id: "cost-anomaly-detect",   category: "COST ANOMALY DETECTION",       name: "Cost anomaly dashboards and alerts in OCI Cost Management" }
      ]
    },

    // ---------------------------
    // Databases
    // ---------------------------
    "databases": {
      label: "Databases",
      services: [
        { id: "blockchain",        category: "BLOCKCHAIN",                       name: "Oracle Blockchain Platform" },
        { id: "in-memory-cache",   category: "IN-MEMORY CACHE",                  name: "Oracle Coherence, caching patterns on OCI" },
        { id: "nosql-column",      category: "NOSQL (COLUMN-FAMILY)",            name: "Oracle NoSQL Database Cloud Service (wide-column / key-value)" },
        { id: "nosql-document",    category: "NOSQL (DOCUMENT)",                 name: "Oracle NoSQL Database document APIs" },
        { id: "nosql-graph",       category: "NOSQL (GRAPH)",                    name: "Oracle Spatial and Graph on Oracle Database / Autonomous" },
        { id: "nosql-keyvalue",    category: "NOSQL (KEY-VALUE)",                name: "Oracle NoSQL Database Cloud Service" },
        { id: "relational-rdbms",  category: "RELATIONAL (RDBMS)",               name: "Autonomous Database (ATP/ADW), Exadata Cloud Service, MySQL HeatWave" },
        { id: "time-series-db",    category: "TIME-SERIES",                      name: "Time-series solutions on Autonomous Database and NoSQL" }
      ]
    },

    // ---------------------------
    // Developer Tools
    // ---------------------------
    "devtools": {
      label: "Developer Tools",
      services: [
        { id: "app-config",        category: "APP CONFIGURATION",                name: "App configuration via OCI Config, Parameters, and Vault" },
        { id: "artifact-mgmt",     category: "ARTIFACT MANAGEMENT",              name: "OCI Artifacts, OCI Container Registry" },
        { id: "ci-cd",             category: "CI/CD",                            name: "OCI DevOps (Code, Build, Deployment pipelines)" },
        { id: "cli-tools",         category: "CLI TOOLS",                        name: "OCI CLI" },
        { id: "code-debugging",    category: "CODE DEBUGGING",                   name: "OCI Logging, Application Performance Monitoring (APM)" },
        { id: "sdks-devkits",      category: "SDKS AND DEV KITS",                name: "OCI SDKs for Java, Python, .NET, Go, etc." },
        { id: "git-repos",         category: "GIT REPOSITORIES",                 name: "OCI DevOps Code Repository" },
        { id: "web-mobile-dev",    category: "WEB/MOBILE APP DEV",               name: "Oracle APEX, Oracle Visual Builder, Oracle Mobile Hub" },
        { id: "powershell",        category: "POWERSHELL",                       name: "OCI PowerShell modules" },
        { id: "scheduling",        category: "SCHEDULING",                       name: "Scheduling via OCI Events, Functions, and Automation" },
        { id: "testing",           category: "TESTING",                          name: "Testing with OCI DevOps pipelines and Oracle Application Testing Suite" }
      ]
    },

    // ---------------------------
    // IoT
    // ---------------------------
    "iot": {
      label: "IoT",
      services: [
        { id: "iot-device-connectivity", category: "DEVICE CONNECTIVITY",        name: "Oracle IoT Cloud (apps), device connectivity to OCI" },
        { id: "iot-edge",                category: "EDGE COMPUTING",             name: "IoT edge deployments integrated with OCI Streaming and Functions" },
        { id: "iot-security",            category: "IOT SECURITY",               name: "OCI IAM, network security, and IoT-specific controls" },
        { id: "virtual-modeling",        category: "VIRTUAL MODELING",           name: "Digital twin patterns using IoT applications and Autonomous Database" },
        { id: "iot-gateways",            category: "IOT GATEWAYS",               name: "IoT gateways connecting on-prem/field devices to OCI" }
      ]
    },

    // ---------------------------
    // Management and Governance
    // ---------------------------
    "management-governance": {
      label: "Management and Governance",
      services: [
        { id: "mgmt-anomaly",       category: "ANOMALY DETECTION",               name: "OCI Operations Insights, Logging Analytics anomaly detection" },
        { id: "app-data-catalog",   category: "APP/DATA CATALOG",                name: "OCI Data Catalog, Service Catalog patterns" },
        { id: "automation-orch",    category: "AUTOMATION/ORCHESTRATION",        name: "OCI Resource Manager (Terraform), automation via SDK/CLI" },
        { id: "config-management",  category: "CONFIG MANAGEMENT",               name: "Configuration via IAM, Resource Manager, tags, and policies" },
        { id: "monitoring",         category: "MONITORING",                      name: "OCI Monitoring" },
        { id: "health-dashboards",  category: "HEALTH DASHBOARDS",               name: "OCI Service Health Dashboard, alarms and metrics" },
        { id: "hybrid-multi-cloud", category: "HYBRID/MULTI-CLOUD MGMT",         name: "Oracle Cloud@Customer, Oracle Cloud VMware Solution, multi-cloud networking" },
        { id: "logging",            category: "LOGGING",                         name: "OCI Logging, Logging Analytics" },
        { id: "admin-console",      category: "ADMIN CONSOLE",                   name: "Oracle Cloud Console" },
        { id: "multi-account-mgmt", category: "MULTI-ACCOUNT MGMT",              name: "Tenancy, Compartments, Organizations for multi-account governance" },
        { id: "network-monitoring", category: "NETWORK MONITORING",              name: "OCI Network Monitoring, VCN Flow Logs, Network Path Analyzer" },
        { id: "policy-enforcement", category: "POLICY ENFORCEMENT",              name: "IAM policies, Security Zones, tag-based governance" }
      ]
    },

    // ---------------------------
    // Migration
    // ---------------------------
    "migration": {
      label: "Migration",
      services: [
        { id: "db-migration",       category: "DATABASE MIGRATION",              name: "Oracle Zero Downtime Migration (ZDM), OCI Database Migration" },
        { id: "data-transfer-appl", category: "DATA TRANSFER APPLIANCES",        name: "OCI Data Transfer Appliance" },
        { id: "migration-accelerators", category: "MIGRATION ACCELERATORS",      name: "Oracle Cloud Lift, Oracle Consulting migration accelerators" },
        { id: "online-transfer-sync", category: "ONLINE TRANSFER & SYNC",        name: "OCI Data Transfer Service (online), Object Storage replication" },
        { id: "on-prem-discovery",  category: "ON-PREMISE DISCOVERY",            name: "Discovery via Oracle Enterprise Manager, migration tooling" },
        { id: "vm-migration",       category: "VM MIGRATION",                    name: "OCI Application Migration, VM import/export to OCI Compute" }
      ]
    },

    // ---------------------------
    // Miscellaneous
    // ---------------------------
    "misc": {
      label: "Miscellaneous",
      services: [
        { id: "customer-contact",   category: "CUSTOMER MULTICHANNEL CONTACT",   name: "Oracle Fusion Service, Oracle Cloud CX contact center" },
        { id: "marketing-notifs",   category: "MARKETING & NOTIFICATIONS",       name: "Oracle Responsys, Oracle Eloqua, CX Marketing" },
        { id: "healthcare-fhir",    category: "HEALTHCARE (FHIR)",               name: "Oracle Health Data Intelligence and FHIR integrations" },
        { id: "gaming",             category: "GAMING",                          name: "Gaming workloads on OCI Compute, DB, Streaming (partner solutions)" },
        { id: "genomics",           category: "GENOMICS",                        name: "Genomics and life sciences workloads on OCI, partner solutions" },
        { id: "geolocation",        category: "GEOLOCATION SERVICES",            name: "Oracle Spatial Studio, location services on OCI" },
        { id: "media-services",     category: "MEDIA SERVICES",                  name: "OCI Media Flow, Media Streams" },
        { id: "satellite-ground",   category: "SATELLITE GROUND STATIONS",       name: "Satellite connectivity through OCI partners" },
        { id: "virtual-desktops",   category: "VIRTUAL DESKTOP INFRASTRUCTURE",  name: "Virtual desktop solutions on OCI via partners and DaaS providers" }
      ]
    },

    // ---------------------------
    // Networking and Content Delivery
    // ---------------------------
    "networking-cdn": {
      label: "Networking and Content Delivery",
      services: [
        { id: "5g-edge-infra",      category: "5G EDGE INFRA",                   name: "OCI edge services with telecom and 5G partners" },
        { id: "net-api-management", category: "API MANAGEMENT",                  name: "OCI API Gateway" },
        { id: "cdn",                category: "CDN",                             name: "Oracle Cloud Infrastructure CDN (Akamai/Cloudflare-backed)" },
        { id: "dedicated-connect",  category: "DEDICATED CONNECTION",            name: "Oracle Cloud Infrastructure FastConnect" },
        { id: "dns",                category: "DNS",                             name: "OCI DNS" },
        { id: "load-balancing",     category: "LOAD BALANCING",                  name: "OCI Load Balancing (public and private)" },
        { id: "global-acceleration",category: "GLOBAL TRAFFIC ACCELERATION",     name: "Global load balancing and traffic steering via Traffic Management" },
        { id: "nat",                category: "NAT",                             name: "OCI NAT Gateway" },
        { id: "vpc-peering",        category: "VPC PEERING",                     name: "VCN peering, Remote Peering Gateways" },
        { id: "private-connectivity",category: "PRIVATE CONNECTIVITY",           name: "Private endpoints to OCI services, private access to databases" },
        { id: "svc-discovery-net",  category: "SERVICE DISCOVERY",               name: "Service discovery via DNS, OCI Service Mesh, OKE" },
        { id: "svc-mesh-net",       category: "SERVICE MESH",                    name: "OCI Service Mesh" },
        { id: "wan-vpn",            category: "WAN/VPN",                         name: "OCI VPN Connect (site-to-site IPSec VPN), hub-and-spoke networking" },
        { id: "vpc",                category: "VPC",                             name: "Virtual Cloud Network (VCN)" }
      ]
    },

    // ---------------------------
    // Security
    // ---------------------------
    "security": {
      label: "Security",
      services: [
        { id: "audit-compliance",   category: "AUDIT AND COMPLIANCE",            name: "OCI Audit service, Oracle Cloud compliance reports" },
        { id: "central-security-mgmt", category: "CENTRALIZED SECURITY MGMT",    name: "OCI Cloud Guard" },
        { id: "cert-management",    category: "CERTIFICATE MANAGEMENT",          name: "Certificate management via OCI Certificates and Load Balancing" },
        { id: "confidential-compute",category: "CONFIDENTIAL COMPUTING",         name: "Confidential and shielded compute options on OCI" },
        { id: "container-security", category: "CONTAINER SECURITY",              name: "Security policies for OCIR, OKE, and container scanning via partners" },
        { id: "data-discovery",     category: "DATA DISCOVERY/CLASSIFICATION",   name: "Oracle Data Safe (data discovery and classification)" },
        { id: "ddos-protection",    category: "DDOS PROTECTION",                 name: "OCI WAF, built-in DDoS protections" },
        { id: "iam",                category: "IDENTITY & ACCESS MGMT (IAM)",    name: "Oracle Cloud Infrastructure Identity and Access Management (IAM)" },
        { id: "key-management",     category: "CERTIFICATE/KEY MANAGEMENT",      name: "OCI Vault (KMS), HSM" },
        { id: "microsoft-ad",       category: "MICROSOFT AD SUPPORT",            name: "Integration with Microsoft Active Directory, Oracle-managed AD options" },
        { id: "regulated-cloud",    category: "REGULATED CLOUD ZONES",           name: "Oracle Government Cloud, Oracle Sovereign Cloud regions" },
        { id: "resource-access",    category: "RESOURCE ACCESS POLICIES",        name: "IAM policies and compartment-based access control" },
        { id: "secrets-management", category: "SECRETS MANAGEMENT",              name: "OCI Vault (secrets and credentials)" },
        { id: "context-access",     category: "CONTEXT-BASED ACCESS",            name: "Dynamic groups, network source conditions, fine-grained policies" },
        { id: "approval-workflows", category: "APPROVAL WORKFLOWS",              name: "Governance and approvals via GRC and ticketing integrations" },
        { id: "sso",                category: "SSO",                             name: "Oracle Identity Cloud Service (IDCS) SSO, federation" },
        { id: "threat-detection",   category: "THREAT DETECTION",                name: "OCI Cloud Guard detectors, Threat Intelligence" },
        { id: "vulnerability-scan", category: "VULNERABILITY SCANNING",          name: "OCI Vulnerability Scanning Service" }
      ]
    }
  }
};
