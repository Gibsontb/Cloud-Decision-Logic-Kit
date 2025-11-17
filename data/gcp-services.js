//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/13/2025
//Version 3.0
// gcp-services.js
// Google Cloud Platform services grouped by category,
// aligned with the Cloud Decision Kit structure.

window.CDK = window.CDK || {};
window.CDK.providers = window.CDK.providers || {};

window.CDK.providers.gcp = {
  id: "gcp",
  displayName: "Google Cloud Platform (GCP)",
  serviceCategories: {
    // ---------------------------
    // AI and Machine Learning
    // ---------------------------
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",          category: "AI CONTAINERS",                name: "Deep Learning Containers" },
        { id: "ai-powered-assistant",   category: "AI-POWERED ASSISTANT",         name: "Gemini for Google Cloud, Gemini Code Assist" },
        { id: "human-review",           category: "HUMAN REVIEW/MODERATION",      name: "Vertex AI Safety & Grounding tooling" },
        { id: "chatbot-builder",        category: "CHATBOT BUILDER",              name: "Dialogflow CX, Dialogflow ES" },
        { id: "data-labeling",          category: "DATA LABELING",                name: "Vertex AI Data Labeling" },
        { id: "document-extraction",    category: "DOCUMENT EXTRACTION",          name: "Document AI" },
        { id: "generative-platforms",   category: "GENERATIVE AI PLATFORMS",      name: "Vertex AI, Gemini APIs" },
        { id: "image-recognition",      category: "IMAGE RECOGNITION",            name: "Vision AI, AutoML Vision" },
        { id: "inference-acceleration", category: "INFERENCE ACCELERATION",       name: "Cloud TPU, NVIDIA GPU instances" },
        { id: "language-translation",   category: "LANGUAGE TRANSLATION",         name: "Translation AI" },
        { id: "ml-ai-chips",            category: "ML/AI CHIPS",                  name: "Cloud TPU, Trillium TPU" },
        { id: "managed-ml-platform",    category: "MANAGED ML PLATFORM",          name: "Vertex AI" },
        { id: "notebooks",              category: "NOTEBOOKS",                    name: "Vertex AI Workbench, Colab Enterprise" },
        { id: "online-fraud",           category: "ONLINE FRAUD DETECTION",       name: "reCAPTCHA Enterprise, Vertex AI anomaly examples" },
        { id: "preconfigured-ml-vms",   category: "PRECONFIGURED ML VMS",         name: "Deep Learning VM Images" },
        { id: "recommendation-engine",  category: "RECOMMENDATION ENGINE",        name: "Recommendations AI" },
        { id: "speech-services",        category: "SPEECH RECOGNITION/SYNTHESIS", name: "Speech-to-Text, Text-to-Speech" },
        { id: "text-analysis",          category: "TEXT ANALYSIS",                name: "Natural Language API, Vertex AI text models" },
        { id: "time-series-forecasting",category: "TIME-SERIES FORECASTING",      name: "Vertex AI Forecasting, TimesFM" },
        { id: "video-analysis",         category: "VIDEO ANALYSIS",               name: "Video Intelligence API" },
        { id: "visual-inspection",      category: "VISUAL INSPECTION",            name: "Visual Inspection AI" }
      ]
    },

    // ---------------------------
    // Analytics
    // ---------------------------
    "analytics": {
      label: "Analytics",
      services: [
        { id: "big-data-processing",    category: "BIG DATA PROCESSING",          name: "Dataproc (Hadoop/Spark), Dataflow" },
        { id: "business-analytics",     category: "BUSINESS ANALYTICS",           name: "BigQuery BI Engine, Looker, Looker Studio" },
        { id: "data-exploration",       category: "DATA EXPLORATION/CATALOG",     name: "Dataplex, Data Catalog, BigQuery" },
        { id: "data-lake-creation",     category: "DATA LAKE CREATION",           name: "Dataplex, Cloud Storage data lakes on BigQuery" },
        { id: "data-sharing",           category: "DATA SHARING/EXCHANGE",        name: "Analytics Hub, BigQuery data sharing" },
        { id: "data-streaming",         category: "DATA STREAMING",               name: "Pub/Sub, Dataflow (streaming), Pub/Sub Lite" },
        { id: "data-warehousing",       category: "DATA WAREHOUSING",             name: "BigQuery" },
        { id: "data-wrangling",         category: "DATA WRANGLING",               name: "Dataflow, Dataprep by Trifacta (now in Dataplex)" },
        { id: "etl",                    category: "ETL",                           name: "Data Fusion, Dataflow, BigQuery Data Transfer Service" },
        { id: "hosted-hadoop-spark",    category: "HOSTED HADOOP/SPARK",          name: "Dataproc" },
        { id: "managed-kafka",          category: "MANAGED KAFKA",                name: "Pub/Sub (Kafka-compatible patterns via connectors)" },
        { id: "managed-search",         category: "MANAGED SEARCH",               name: "Retail Search, Discovery Engine, Enterprise Search on Vertex AI" },
        { id: "query-service",          category: "QUERY SERVICE",                name: "BigQuery, BigQuery Omni" }
      ]
    },

    // ---------------------------
    // Application Integration
    // ---------------------------
    "app-integration": {
      label: "Application Integration",
      services: [
        { id: "api-management",         category: "API MANAGEMENT",               name: "Apigee API Management, API Gateway, Cloud Endpoints" },
        { id: "distributed-coordination",category: "DISTRIBUTED COORDINATION",    name: "Workflows, Cloud Tasks, Cloud Functions" },
        { id: "event-handling",         category: "EVENT HANDLING",               name: "Eventarc, Pub/Sub" },
        { id: "integration-service",    category: "INTEGRATION SERVICE",          name: "Application Integration, Workflows, Data Fusion" },
        { id: "messaging",              category: "MESSAGING",                    name: "Pub/Sub, Pub/Sub Lite, Cloud Tasks" },
        { id: "service-discovery",      category: "SERVICE DISCOVERY",            name: "Service Directory" },
        { id: "service-mesh",           category: "SERVICE MESH",                 name: "Traffic Director, Anthos Service Mesh" },
        { id: "workflow-orchestration", category: "WORKFLOW ORCHESTRATION",       name: "Cloud Composer (Airflow), Workflows" }
      ]
    },

    // ---------------------------
    // Business Applications
    // ---------------------------
    "business-apps": {
      label: "Business Applications",
      services: [
        { id: "collaboration-suite", category: "COLLABORATION SUITE",             name: "Google Workspace (Docs, Sheets, Slides, Drive)" },
        { id: "document-sharing",    category: "DOCUMENT SHARING",                name: "Google Docs, Google Drive" },
        { id: "email-calendar",      category: "EMAIL AND CALENDAR",              name: "Gmail, Google Calendar" },
        { id: "low-code",            category: "LOW-CODE/NO-CODE TOOLS",          name: "AppSheet" },
        { id: "video-calls-chat",    category: "VIDEO CALLS AND CHAT",            name: "Google Meet, Google Chat" },
        { id: "voice-assistant",     category: "VOICE ASSISTANT",                 name: "Dialogflow / Contact Center AI integrations" }
      ]
    },

    // ---------------------------
    // Compute
    // ---------------------------
    "compute": {
      label: "Compute",
      services: [
        { id: "autoscaling",        category: "AUTOSCALING",                     name: "Managed instance groups, autoscaling policies" },
        { id: "batch-processing",   category: "BATCH PROCESSING",                name: "Cloud Batch, Dataflow (batch)" },
        { id: "hybrid-extended",    category: "HYBRID/EXTENDED INFRA",           name: "Anthos, Bare Metal Solution, GKE On-Prem" },
        { id: "serverless-compute", category: "SERVERLESS COMPUTE",              name: "Cloud Functions, Cloud Run" },
        { id: "hpc-management",     category: "HPC MANAGEMENT",                  name: "HPC blueprints on Compute Engine, Batch, Cloud TPU" },
        { id: "dedicated-servers",  category: "DEDICATED SERVERS",               name: "Sole-tenant nodes (Compute Engine)" },
        { id: "paas-web-hosting",   category: "PAAS WEB HOSTING",                name: "App Engine, Cloud Run" },
        { id: "quantum-computing",  category: "QUANTUM COMPUTING",               name: "Cirq, Quantum AI partnerships" },
        { id: "virtual-machines",   category: "VIRTUAL MACHINES",                name: "Compute Engine" },
        { id: "vm-image-builder",   category: "VM IMAGE BUILDER",                name: "Image import/export tools, custom images" },
        { id: "vmware-integration", category: "VMWARE INTEGRATION",              name: "Google Cloud VMware Engine (GCVE)" }
      ]
    },

    // ---------------------------
    // Containers
    // ---------------------------
    "containers": {
      label: "Containers",
      services: [
        { id: "container-migration",   category: "CONTAINER MIGRATION",          name: "Migrate to Containers (M2C), Migrate for Anthos (legacy)" },
        { id: "container-registry",    category: "CONTAINER REGISTRY",           name: "Artifact Registry, Container Registry (gcr.io)" },
        { id: "managed-containers",    category: "MANAGED CONTAINERS",           name: "Cloud Run" },
        { id: "managed-kubernetes",    category: "MANAGED KUBERNETES",           name: "Google Kubernetes Engine (GKE), GKE Autopilot" },
        { id: "serverless-containers", category: "SERVERLESS CONTAINERS",        name: "Cloud Run jobs, Cloud Run services" }
      ]
    },

    // ---------------------------
    // Cost Controls
    // ---------------------------
    "cost-controls": {
      label: "Cost Controls",
      services: [
        { id: "architecture-review",   category: "ARCHITECTURE REVIEW",          name: "Architecture frameworks, Cloud Architecture Center" },
        { id: "billing-budgeting",     category: "BILLING AND BUDGETING TOOLS",  name: "Cloud Billing, Budgets & alerts" },
        { id: "optimization",          category: "OPTIMIZATION & RECOMMENDATIONS", name: "Recommender (CUDs, rightsizing, idle resources)" },
        { id: "commitment-discounts",  category: "COMMITMENT DISCOUNTS",         name: "Committed Use Discounts (CUDs), Flexible CUDs" },
        { id: "spot-vms",              category: "SPOT/PREEMPTIBLE VMS",         name: "Spot VMs, Preemptible VMs (older)" },
        { id: "cost-anomaly-detect",   category: "COST ANOMALY DETECTION",       name: "Cost anomaly detection via Billing reports / Recommender" }
      ]
    },

    // ---------------------------
    // Databases
    // ---------------------------
    "databases": {
      label: "Databases",
      services: [
        { id: "blockchain",        category: "BLOCKCHAIN",                       name: "Partner-led blockchain solutions on GCP" },
        { id: "in-memory-cache",   category: "IN-MEMORY CACHE",                  name: "Memorystore for Redis, Memorystore for Memcached" },
        { id: "nosql-column",      category: "NOSQL (COLUMN-FAMILY)",            name: "Cloud Bigtable" },
        { id: "nosql-document",    category: "NOSQL (DOCUMENT)",                 name: "Firestore (Datastore mode included)" },
        { id: "nosql-graph",       category: "NOSQL (GRAPH)",                    name: "Graph solutions on top of Bigtable / Neo4j on GCP Marketplace" },
        { id: "nosql-keyvalue",    category: "NOSQL (KEY-VALUE)",                name: "Firestore, Memorystore" },
        { id: "relational-rdbms",  category: "RELATIONAL (RDBMS)",               name: "Cloud SQL (MySQL/PostgreSQL/SQL Server), AlloyDB, Spanner" },
        { id: "time-series-db",    category: "TIME-SERIES",                      name: "Bigtable time-series, BigQuery time-series schemas" }
      ]
    },

    // ---------------------------
    // Developer Tools
    // ---------------------------
    "devtools": {
      label: "Developer Tools",
      services: [
        { id: "app-config",        category: "APP CONFIGURATION",                name: "Runtime Configurator, Secret Manager (for app config)" },
        { id: "artifact-mgmt",     category: "ARTIFACT MANAGEMENT",              name: "Artifact Registry, Container Registry" },
        { id: "ci-cd",             category: "CI/CD",                            name: "Cloud Build, Cloud Deploy" },
        { id: "cli-tools",         category: "CLI TOOLS",                        name: "Cloud SDK (gcloud, gsutil, bq)" },
        { id: "code-debugging",    category: "CODE DEBUGGING",                   name: "Cloud Debugger (legacy), Cloud Trace, Cloud Profiler, Error Reporting" },
        { id: "sdks-devkits",      category: "SDKS AND DEV KITS",                name: "Client Libraries, Cloud Client Libraries, Firebase SDKs" },
        { id: "git-repos",         category: "GIT REPOSITORIES",                 name: "Cloud Source Repositories, integrations with GitHub/GitLab" },
        { id: "web-mobile-dev",    category: "WEB/MOBILE APP DEV",               name: "Firebase, Cloud Run, App Engine, Flutter integrations" },
        { id: "powershell",        category: "POWERSHELL",                       name: "gcloud PowerShell via Cloud SDK (community modules)" },
        { id: "scheduling",        category: "SCHEDULING",                       name: "Cloud Scheduler" },
        { id: "testing",           category: "TESTING",                          name: "Firebase Test Lab, Cloud Build test pipelines" }
      ]
    },

    // ---------------------------
    // IoT
    // ---------------------------
    "iot": {
      label: "IoT",
      services: [
        { id: "iot-device-connectivity", category: "DEVICE CONNECTIVITY",        name: "Cloud IoT Core (legacy), Pub/Sub, Edge gateways" },
        { id: "iot-edge",                category: "EDGE COMPUTING",             name: "Edge TPU, GKE at the edge, Anthos" },
        { id: "iot-security",            category: "IOT SECURITY",               name: "BeyondCorp Enterprise, IAM, VPC SC around IoT endpoints" },
        { id: "virtual-modeling",        category: "VIRTUAL MODELING",           name: "Digital twins via partners & Vertex AI" },
        { id: "iot-gateways",            category: "IOT GATEWAYS",               name: "Partner gateways integrated with Pub/Sub" }
      ]
    },

    // ---------------------------
    // Management and Governance
    // ---------------------------
    "management-governance": {
      label: "Management and Governance",
      services: [
        { id: "mgmt-anomaly",       category: "ANOMALY DETECTION",               name: "Operations Suite metrics-based anomaly detection" },
        { id: "app-data-catalog",   category: "APP/DATA CATALOG",                name: "Dataplex, Data Catalog, Service Catalog" },
        { id: "automation-orch",    category: "AUTOMATION/ORCHESTRATION",        name: "Deployment Manager (legacy), Terraform on GCP, Config Controller" },
        { id: "config-management",  category: "CONFIG MANAGEMENT",               name: "Anthos Config Management, Config Connector" },
        { id: "monitoring",         category: "MONITORING",                      name: "Cloud Monitoring (Ops Suite)" },
        { id: "health-dashboards",  category: "HEALTH DASHBOARDS",               name: "Cloud Monitoring Uptime checks & SLO dashboards" },
        { id: "hybrid-multi-cloud", category: "HYBRID/MULTI-CLOUD MGMT",         name: "Anthos, Anthos Multi-Cloud, Config Controller" },
        { id: "logging",            category: "LOGGING",                         name: "Cloud Logging" },
        { id: "admin-console",      category: "ADMIN CONSOLE",                   name: "Google Cloud Console" },
        { id: "multi-account-mgmt", category: "MULTI-ACCOUNT MGMT",              name: "Resource Manager (Folders, Orgs, Projects)" },
        { id: "network-monitoring", category: "NETWORK MONITORING",              name: "Network Intelligence Center, VPC Flow Logs" },
        { id: "policy-enforcement", category: "POLICY ENFORCEMENT",              name: "Organization Policies, Policy Intelligence, IAM Conditions" }
      ]
    },

    // ---------------------------
    // Migration
    // ---------------------------
    "migration": {
      label: "Migration",
      services: [
        { id: "db-migration",       category: "DATABASE MIGRATION",              name: "Database Migration Service (DMS)" },
        { id: "data-transfer-appl", category: "DATA TRANSFER APPLIANCES",        name: "Transfer Appliance" },
        { id: "migration-accelerators", category: "MIGRATION ACCELERATORS",      name: "Migrate for Compute Engine (legacy), Rapid Migration Program" },
        { id: "online-transfer-sync", category: "ONLINE TRANSFER & SYNC",        name: "Storage Transfer Service, BigQuery Data Transfer Service" },
        { id: "on-prem-discovery",  category: "ON-PREMISE DISCOVERY",            name: "StratoZone (partner), Migration Center guidance" },
        { id: "vm-migration",       category: "VM MIGRATION",                    name: "Migrate for Compute Engine (Velostrata), Migrate to Containers" }
      ]
    },

    // ---------------------------
    // Miscellaneous
    // ---------------------------
    "misc": {
      label: "Miscellaneous",
      services: [
        { id: "customer-contact",   category: "CUSTOMER MULTICHANNEL CONTACT",   name: "Contact Center AI, Dialogflow CX for CCaaS" },
        { id: "marketing-notifs",   category: "MARKETING & NOTIFICATIONS",       name: "Firebase Cloud Messaging, Pub/Sub-based campaigns" },
        { id: "healthcare-fhir",    category: "HEALTHCARE (FHIR)",               name: "Cloud Healthcare API (FHIR/HL7/DICOM)" },
        { id: "gaming",             category: "GAMING",                          name: "Game Servers (Agones on GKE), Open Match" },
        { id: "genomics",           category: "GENOMICS",                        name: "Cloud Life Sciences (Genomics), BigQuery Omni for genomics" },
        { id: "geolocation",        category: "GEOLOCATION SERVICES",            name: "Google Maps Platform, Places API" },
        { id: "media-services",     category: "MEDIA SERVICES",                  name: "Transcoder API, Live Stream on GCP" },
        { id: "satellite-ground",   category: "SATELLITE GROUND STATIONS",       name: "Partner ground station integrations" },
        { id: "virtual-desktops",   category: "VIRTUAL DESKTOP INFRASTRUCTURE",  name: "Workspaces via partners, ChromeOS / VDI integrations" }
      ]
    },

    // ---------------------------
    // Networking and Content Delivery
    // ---------------------------
    "networking-cdn": {
      label: "Networking and Content Delivery",
      services: [
        { id: "5g-edge-infra",      category: "5G EDGE INFRA",                   name: "Google Distributed Cloud Edge, telecom partner 5G" },
        { id: "net-api-management", category: "API MANAGEMENT",                  name: "Apigee, API Gateway" },
        { id: "cdn",                category: "CDN",                             name: "Cloud CDN" },
        { id: "dedicated-connect",  category: "DEDICATED CONNECTION",            name: "Cloud Interconnect, Partner Interconnect" },
        { id: "dns",                category: "DNS",                             name: "Cloud DNS" },
        { id: "load-balancing",     category: "LOAD BALANCING",                  name: "Cloud Load Balancing (HTTP(S), TCP/SSL, UDP)" },
        { id: "global-acceleration",category: "GLOBAL TRAFFIC ACCELERATION",     name: "Global Anycast load balancing, Premium network tier" },
        { id: "nat",                category: "NAT",                             name: "Cloud NAT" },
        { id: "vpc-peering",        category: "VPC PEERING",                     name: "VPC Network Peering" },
        { id: "private-connectivity",category: "PRIVATE CONNECTIVITY",           name: "Private Service Connect" },
        { id: "svc-discovery-net",  category: "SERVICE DISCOVERY",               name: "Service Directory" },
        { id: "svc-mesh-net",       category: "SERVICE MESH",                    name: "Traffic Director, Anthos Service Mesh" },
        { id: "wan-vpn",            category: "WAN/VPN",                         name: "Cloud VPN, Network Connectivity Center" },
        { id: "vpc",                category: "VPC",                             name: "VPC Networks, Shared VPC" }
      ]
    },

    // ---------------------------
    // Security
    // ---------------------------
    "security": {
      label: "Security",
      services: [
        { id: "audit-compliance",   category: "AUDIT AND COMPLIANCE",            name: "Compliance reports, Assured Workloads" },
        { id: "central-security-mgmt", category: "CENTRALIZED SECURITY MGMT",    name: "Security Command Center" },
        { id: "cert-management",    category: "CERTIFICATE MANAGEMENT",          name: "Certificate Manager" },
        { id: "confidential-compute",category: "CONFIDENTIAL COMPUTING",         name: "Confidential VMs, Confidential GKE Nodes" },
        { id: "container-security", category: "CONTAINER SECURITY",              name: "Container Analysis, Binary Authorization, Artifact Analysis" },
        { id: "data-discovery",     category: "DATA DISCOVERY/CLASSIFICATION",   name: "Cloud Data Loss Prevention (DLP)" },
        { id: "ddos-protection",    category: "DDOS PROTECTION",                 name: "Cloud Armor" },
        { id: "iam",                category: "IDENTITY & ACCESS MGMT (IAM)",    name: "Cloud IAM, Cloud Identity" },
        { id: "key-management",     category: "CERTIFICATE/KEY MANAGEMENT",      name: "Cloud KMS, Cloud HSM" },
        { id: "microsoft-ad",       category: "MICROSOFT AD SUPPORT",            name: "Managed Microsoft AD" },
        { id: "regulated-cloud",    category: "REGULATED CLOUD ZONES",           name: "Assured Workloads (FedRAMP, CJIS, etc.)" },
        { id: "resource-access",    category: "RESOURCE ACCESS POLICIES",        name: "IAM Policies, Resource Manager, Policy Analyzer" },
        { id: "secrets-management", category: "SECRETS MANAGEMENT",              name: "Secret Manager" },
        { id: "context-access",     category: "CONTEXT-BASED ACCESS",            name: "BeyondCorp Enterprise, Identity-Aware Proxy (IAP)" },
        { id: "approval-workflows", category: "APPROVAL WORKFLOWS",              name: "Access Approval" },
        { id: "sso",                category: "SSO",                             name: "Cloud Identity, Identity Platform" },
        { id: "threat-detection",   category: "THREAT DETECTION",                name: "Security Command Center, Event Threat Detection, Chronicle" },
        { id: "vulnerability-scan", category: "VULNERABILITY SCANNING",          name: "Web Security Scanner, Container Analysis" }
      ]
    }
  }
};
