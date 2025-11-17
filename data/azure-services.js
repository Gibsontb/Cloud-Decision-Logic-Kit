//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/13/2025
//Version 5.1
// azure-services.js
// Azure services derived from "Master Reference Cloud Services 2025 v2.5"
// Grouped by category; names are exactly as in the reference.

window.CDK = window.CDK || {};
window.CDK.providers = window.CDK.providers || {};

window.CDK.providers.azure = {
  id: "azure",
  displayName: "Microsoft Azure",
  serviceCategories: {
    // ---------------------------
    // AI and Machine Learning
    // ---------------------------
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",          category: "AI CONTAINERS",                name: "GPU support on AKS" },
        { id: "ai-powered-assistant",   category: "AI-POWERED ASSISTANT",         name: "Azure OpenAI Service" },
        { id: "human-review",           category: "HUMAN REVIEW/MODERATION",      name: "Azure AI Content Safety" },
        { id: "chatbot-builder",        category: "CHATBOT BUILDER",              name: "Azure Bot Service, Health Bot" },
        { id: "data-labeling",          category: "DATA LABELING",                name: "Azure ML Data Labeling" },
        { id: "document-extraction",    category: "DOCUMENT EXTRACTION",          name: "Azure Document Intelligence" },
        { id: "generative-platforms",   category: "GENERATIVE AI PLATFORMS",      name: "Azure OpenAI" },
        { id: "image-recognition",      category: "IMAGE RECOGNITION",            name: "Azure AI Vision" },
        { id: "inference-acceleration", category: "INFERENCE ACCELERATION",       name: "GPU support on AKS" },
        { id: "language-translation",   category: "LANGUAGE TRANSLATION",         name: "Azure Translator" },
        { id: "ml-ai-chips",            category: "ML/AI CHIPS",                  name: "Maia 100" },
        { id: "managed-ml-platform",    category: "MANAGED ML PLATFORM",          name: "Azure Machine Learning" },
        { id: "notebooks",              category: "NOTEBOOKS",                    name: "Azure Notebooks" },
        { id: "online-fraud",           category: "ONLINE FRAUD DETECTION",       name: "Azure Anomaly Detector" },
        { id: "preconfigured-ml-vms",   category: "PRECONFIGURED ML VMS",         name: "Data Science VM" },
        { id: "recommendation-engine",  category: "RECOMMENDATION ENGINE",        name: "Azure AI Personalizer" },
        { id: "speech-services",        category: "SPEECH RECOGNITION/SYNTHESIS", name: "Azure Speech" },
        { id: "text-analysis",          category: "TEXT ANALYSIS",                name: "Azure AI Language" },
        { id: "time-series-forecasting",category: "TIME-SERIES FORECASTING",      name: "Azure AutoML Forecasting" },
        { id: "video-analysis",         category: "VIDEO ANALYSIS",               name: "Azure Video Indexer" },
        { id: "visual-inspection",      category: "VISUAL INSPECTION",            name: "Azure Custom Vision" }
      ]
    },

    // ---------------------------
    // Analytics
    // ---------------------------
    "analytics": {
      label: "Analytics",
      services: [
        { id: "big-data-processing",    category: "BIG DATA PROCESSING",          name: "Azure HDInsight, Data Lake Analytics" },
        { id: "business-analytics",     category: "BUSINESS ANALYTICS",           name: "Power BI, Azure Synapse Analytics, Graph Connect" },
        { id: "data-exploration",       category: "DATA EXPLORATION/CATALOG",     name: "Azure Data Explorer, Azure Data Catalog" },
        { id: "data-lake-creation",     category: "DATA LAKE CREATION",           name: "Azure Data Lake Storage Gen2" },
        { id: "data-sharing",           category: "DATA SHARING/EXCHANGE",        name: "Azure Data Share" },
        { id: "data-streaming",         category: "DATA STREAMING",               name: "Azure Stream Analytics, Event Hubs" },
        { id: "data-warehousing",       category: "DATA WAREHOUSING",             name: "Azure Synapse Analytics, Azure Databricks" },
        { id: "data-wrangling",         category: "DATA WRANGLING",               name: "Azure Data Factory" },
        { id: "etl",                    category: "ETL",                           name: "Azure Data Factory, Synapse Pipelines" },
        { id: "hosted-hadoop-spark",    category: "HOSTED HADOOP/SPARK",          name: "Azure HDInsight" },
        { id: "managed-kafka",          category: "MANAGED KAFKA",                name: "Azure Event Hubs for Kafka" },
        { id: "managed-search",         category: "MANAGED SEARCH",               name: "Azure Cognitive Search, Bing Web Search API" },
        { id: "query-service",          category: "QUERY SERVICE",                name: "Synapse Analytics, Azure Data Lake Analytics" }
      ]
    },

    // ---------------------------
    // Application Integration
    // ---------------------------
    "app-integration": {
      label: "Application Integration",
      services: [
        { id: "api-management",         category: "API MANAGEMENT",               name: "Azure API Management, Azure API Apps" },
        { id: "distributed-coordination",category: "DISTRIBUTED COORDINATION",    name: "Azure Logic Apps, Durable Functions" },
        { id: "event-handling",         category: "EVENT HANDLING",               name: "Azure Event Grid" },
        { id: "integration-service",    category: "INTEGRATION SERVICE",          name: "Azure Logic Apps, Data Factory" },
        { id: "messaging",              category: "MESSAGING",                    name: "Azure Service Bus, Queue Storage, Web PubSub" },
        { id: "service-discovery",      category: "SERVICE DISCOVERY",            name: "Azure DNS SD (Sphere), Azure App Configuration" },
        { id: "service-mesh",           category: "SERVICE MESH",                 name: "Open Service Mesh (OSM), AKS" },
        { id: "workflow-orchestration", category: "WORKFLOW ORCHESTRATION",       name: "Azure Data Factory, Logic Apps" }
      ]
    },

    // ---------------------------
    // Business Applications
    // ---------------------------
    "business-apps": {
      label: "Business Applications",
      services: [
        { id: "collaboration-suite", category: "COLLABORATION SUITE",             name: "Microsoft 365, Azure FluidRelay" },
        { id: "document-sharing",    category: "DOCUMENT SHARING",                name: "Microsoft Word (Office Online)" },
        { id: "email-calendar",      category: "EMAIL AND CALENDAR",              name: "Microsoft Outlook" },
        { id: "low-code",            category: "LOW-CODE/NO-CODE TOOLS",          name: "Microsoft Power Apps" },
        { id: "video-calls-chat",    category: "VIDEO CALLS AND CHAT",            name: "Microsoft Teams" },
        { id: "voice-assistant",     category: "VOICE ASSISTANT",                 name: "Azure AI Speech" }
      ]
    },

    // ---------------------------
    // Compute
    // ---------------------------
    "compute": {
      label: "Compute",
      services: [
        { id: "autoscaling",        category: "AUTOSCALING",                     name: "Virtual Machine Scale Sets, Autoscale" },
        { id: "batch-processing",   category: "BATCH PROCESSING",                name: "Azure Batch" },
        { id: "hybrid-extended",    category: "HYBRID/EXTENDED INFRA",           name: "Azure Stack" },
        { id: "serverless-compute", category: "SERVERLESS COMPUTE",              name: "Azure Functions" },
        { id: "hpc-management",     category: "HPC MANAGEMENT",                  name: "Azure CycleCloud" },
        { id: "dedicated-servers",  category: "DEDICATED SERVERS",               name: "Azure Dedicated Host" },
        { id: "paas-web-hosting",   category: "PAAS WEB HOSTING",                name: "Azure App Service" },
        { id: "quantum-computing",  category: "QUANTUM COMPUTING",               name: "Azure Quantum" },
        { id: "virtual-machines",   category: "VIRTUAL MACHINES",                name: "Azure Virtual Machines" },
        { id: "vm-image-builder",   category: "VM IMAGE BUILDER",                name: "Azure VM Image Builder" },
        { id: "vmware-integration", category: "VMWARE INTEGRATION",              name: "Azure VMware Solution" }
      ]
    },

    // ---------------------------
    // Containers
    // ---------------------------
    "containers": {
      label: "Containers",
      services: [
        { id: "container-migration",   category: "CONTAINER MIGRATION",          name: "Azure Migrate" },
        { id: "container-registry",    category: "CONTAINER REGISTRY",           name: "Azure Container Registry" },
        { id: "managed-containers",    category: "MANAGED CONTAINERS",           name: "Azure Container Apps" },
        { id: "managed-kubernetes",    category: "MANAGED KUBERNETES",           name: "Azure Kubernetes Service (AKS)" },
        { id: "serverless-containers", category: "SERVERLESS CONTAINERS",        name: "Azure Container Instances" }
      ]
    },

    // ---------------------------
    // Cost Controls
    // ---------------------------
    "cost-controls": {
      label: "Cost Controls",
      services: [
        { id: "architecture-review",   category: "ARCHITECTURE REVIEW",          name: "Azure Well-Architected Review" },
        { id: "billing-budgeting",     category: "BILLING AND BUDGETING TOOLS",  name: "Microsoft Cost Management" },
        { id: "optimization",          category: "OPTIMIZATION & RECOMMENDATIONS", name: "Azure Advisor" },
        { id: "commitment-discounts",  category: "COMMITMENT DISCOUNTS",         name: "Azure Reservations, Savings Plans" },
        { id: "spot-vms",              category: "SPOT/PREEMPTIBLE VMS",         name: "Azure Spot Virtual Machines" },
        { id: "cost-anomaly-detect",   category: "COST ANOMALY DETECTION",       name: "Microsoft Cost Management Alerts" }
      ]
    },

    // ---------------------------
    // Databases
    // ---------------------------
    "databases": {
      label: "Databases",
      services: [
        { id: "blockchain",        category: "BLOCKCHAIN",                       name: "Azure Confidential Ledger" },
        { id: "in-memory-cache",   category: "IN-MEMORY CACHE",                  name: "Azure Cache for Redis" },
        { id: "nosql-column",      category: "NOSQL (COLUMN-FAMILY)",            name: "Azure Cosmos DB" },
        { id: "nosql-document",    category: "NOSQL (DOCUMENT)",                 name: "Cosmos DB" },
        { id: "nosql-graph",       category: "NOSQL (GRAPH)",                    name: "Cosmos DB (Gremlin API)" },
        { id: "nosql-keyvalue",    category: "NOSQL (KEY-VALUE)",                name: "Cosmos DB" },
        { id: "relational-rdbms",  category: "RELATIONAL (RDBMS)",               name: "Azure SQL Database, PostgreSQL, MariaDB, Synapse" },
        { id: "time-series-db",    category: "TIME-SERIES",                      name: "Azure Time Series Insights" }
      ]
    },

    // ---------------------------
    // Developer Tools
    // ---------------------------
    "devtools": {
      label: "Developer Tools",
      services: [
        { id: "app-config",        category: "APP CONFIGURATION",                name: "Azure App Configuration" },
        { id: "artifact-mgmt",     category: "ARTIFACT MANAGEMENT",              name: "Azure Artifacts" },
        { id: "ci-cd",             category: "CI/CD",                            name: "Azure Pipelines, Azure DevOps" },
        { id: "cli-tools",         category: "CLI TOOLS",                        name: "Azure CLI" },
        { id: "code-debugging",    category: "CODE DEBUGGING",                   name: "Azure Monitor, App Insights" },
        { id: "sdks-devkits",      category: "SDKS AND DEV KITS",                name: "Azure SDKs" },
        { id: "git-repos",         category: "GIT REPOSITORIES",                 name: "Azure Repos" },
        { id: "web-mobile-dev",    category: "WEB/MOBILE APP DEV",               name: "Azure Static Web Apps, Xamarin, Power Apps" },
        { id: "powershell",        category: "POWERSHELL",                       name: "Azure PowerShell" },
        { id: "scheduling",        category: "SCHEDULING",                       name: "Azure Logic Apps" },
        { id: "testing",           category: "TESTING",                          name: "Azure DevTest Labs, Azure Test Plans" }
      ]
    },

    // ---------------------------
    // IoT
    // ---------------------------
    "iot": {
      label: "IoT",
      services: [
        { id: "iot-device-connectivity", category: "DEVICE CONNECTIVITY",        name: "Azure IoT Hub, Azure IoT Central" },
        { id: "iot-edge",                category: "EDGE COMPUTING",             name: "Azure IoT Edge" },
        { id: "iot-security",            category: "IOT SECURITY",               name: "Microsoft Defender for IoT" },
        { id: "virtual-modeling",        category: "VIRTUAL MODELING",           name: "Azure Digital Twins" },
        { id: "iot-gateways",            category: "IOT GATEWAYS",               name: "Azure IoT Hub" }
      ]
    },

    // ---------------------------
    // Management and Governance
    // ---------------------------
    "management-governance": {
      label: "Management and Governance",
      services: [
        { id: "mgmt-anomaly",       category: "ANOMALY DETECTION",               name: "Azure AI Anomaly Detector" },
        { id: "app-data-catalog",   category: "APP/DATA CATALOG",                name: "Azure Blueprints, Azure Managed Apps, Data Catalog" },
        { id: "automation-orch",    category: "AUTOMATION/ORCHESTRATION",        name: "Azure Resource Manager, Azure Automation, Bicep" },
        { id: "config-management",  category: "CONFIG MANAGEMENT",               name: "Azure App Configuration, Azure Policy" },
        { id: "monitoring",         category: "MONITORING",                      name: "Azure Monitor, Log Analytics" },
        { id: "health-dashboards",  category: "HEALTH DASHBOARDS",               name: "Azure Resource Health, Azure Service Health" },
        { id: "hybrid-multi-cloud", category: "HYBRID/MULTI-CLOUD MGMT",         name: "Azure Arc, Azure Stack" },
        { id: "logging",            category: "LOGGING",                         name: "Azure Monitor Logs" },
        { id: "admin-console",      category: "ADMIN CONSOLE",                   name: "Azure Portal" },
        { id: "multi-account-mgmt", category: "MULTI-ACCOUNT MGMT",              name: "Azure Lighthouse, Azure Management Groups" },
        { id: "network-monitoring", category: "NETWORK MONITORING",              name: "Azure Network Watcher" },
        { id: "policy-enforcement", category: "POLICY ENFORCEMENT",              name: "Azure Policy" }
      ]
    },

    // ---------------------------
    // Migration
    // ---------------------------
    "migration": {
      label: "Migration",
      services: [
        { id: "db-migration",       category: "DATABASE MIGRATION",              name: "Azure Database Migration Service" },
        { id: "data-transfer-appl", category: "DATA TRANSFER APPLIANCES",        name: "Azure Data Box" },
        { id: "migration-accelerators", category: "MIGRATION ACCELERATORS",      name: "Azure Migrate & Modernize, FastTrack for Azure" },
        { id: "online-transfer-sync", category: "ONLINE TRANSFER & SYNC",        name: "Azure Storage Mover" },
        { id: "on-prem-discovery",  category: "ON-PREMISE DISCOVERY",            name: "Azure Migrate" },
        { id: "vm-migration",       category: "VM MIGRATION",                    name: "Azure Migrate" }
      ]
    },

    // ---------------------------
    // Miscellaneous
    // ---------------------------
    "misc": {
      label: "Miscellaneous",
      services: [
        { id: "customer-contact",   category: "CUSTOMER MULTICHANNEL CONTACT",   name: "Azure Communication Services" },
        { id: "marketing-notifs",   category: "MARKETING & NOTIFICATIONS",       name: "Azure Notification Hubs" },
        { id: "healthcare-fhir",    category: "HEALTHCARE (FHIR)",               name: "Azure Health Data Services" },
        { id: "gaming",             category: "GAMING",                          name: "Azure PlayFab" },
        { id: "genomics",           category: "GENOMICS",                        name: "Microsoft Genomics" },
        { id: "geolocation",        category: "GEOLOCATION SERVICES",            name: "Azure Maps" },
        { id: "media-services",     category: "MEDIA SERVICES",                  name: "Azure Video Indexer, Azure Media Services" },
        { id: "satellite-ground",   category: "SATELLITE GROUND STATIONS",       name: "Azure Orbital" },
        { id: "virtual-desktops",   category: "VIRTUAL DESKTOP INFRASTRUCTURE",  name: "Azure Virtual Desktop" }
      ]
    },

    // ---------------------------
    // Networking and Content Delivery
    // ---------------------------
    "networking-cdn": {
      label: "Networking and Content Delivery",
      services: [
        { id: "5g-edge-infra",      category: "5G EDGE INFRA",                   name: "Azure Private 5G Core, Azure MEC" },
        { id: "net-api-management", category: "API MANAGEMENT",                  name: "Azure API Management" },
        { id: "cdn",                category: "CDN",                             name: "Azure Front Door, Azure CDN" },
        { id: "dedicated-connect",  category: "DEDICATED CONNECTION",            name: "Azure ExpressRoute" },
        { id: "dns",                category: "DNS",                             name: "Azure DNS" },
        { id: "load-balancing",     category: "LOAD BALANCING",                  name: "Azure Load Balancer, Traffic Manager" },
        { id: "global-acceleration",category: "GLOBAL TRAFFIC ACCELERATION",     name: "Azure Front Door" },
        { id: "nat",                category: "NAT",                             name: "Azure NAT Gateway" },
        { id: "vpc-peering",        category: "VPC PEERING",                     name: "Azure VNet Peering" },
        { id: "private-connectivity",category: "PRIVATE CONNECTIVITY",           name: "Azure Private Link" },
        { id: "svc-discovery-net",  category: "SERVICE DISCOVERY",               name: "Azure App Config, Azure Sphere (DNS-SD)" },
        { id: "svc-mesh-net",       category: "SERVICE MESH",                    name: "Open Service Mesh (OSM)" },
        { id: "wan-vpn",            category: "WAN/VPN",                         name: "Azure Virtual WAN, VPN Gateway" },
        { id: "vpc",                category: "VPC",                             name: "Azure Virtual Network" }
      ]
    },

    // ---------------------------
    // Security
    // ---------------------------
    "security": {
      label: "Security",
      services: [
        { id: "audit-compliance",   category: "AUDIT AND COMPLIANCE",            name: "Microsoft Service Trust Portal" },
        { id: "central-security-mgmt", category: "CENTRALIZED SECURITY MGMT",    name: "Microsoft Defender for Cloud" },
        { id: "cert-management",    category: "CERTIFICATE MANAGEMENT",          name: "Azure App Service Certificates" },
        { id: "confidential-compute",category: "CONFIDENTIAL COMPUTING",         name: "Azure Confidential Computing" },
        { id: "container-security", category: "CONTAINER SECURITY",              name: "Microsoft Defender for Containers" },
        { id: "data-discovery",     category: "DATA DISCOVERY/CLASSIFICATION",   name: "Azure Information Protection, Data Catalog" },
        { id: "ddos-protection",    category: "DDOS PROTECTION",                 name: "Azure DDoS Protection, Azure WAF" },
        { id: "iam",                category: "IDENTITY & ACCESS MGMT (IAM)",    name: "Azure AD, Microsoft Entra" },
        { id: "key-management",     category: "CERTIFICATE/KEY MANAGEMENT",      name: "Azure Key Vault, Azure Dedicated HSM" },
        { id: "microsoft-ad",       category: "MICROSOFT AD SUPPORT",            name: "Microsoft Entra Domain Services" },
        { id: "regulated-cloud",    category: "REGULATED CLOUD ZONES",           name: "Azure Government" },
        { id: "resource-access",    category: "RESOURCE ACCESS POLICIES",        name: "Azure Resource Manager" },
        { id: "secrets-management", category: "SECRETS MANAGEMENT",              name: "Azure Key Vault (Secrets)" },
        { id: "context-access",     category: "CONTEXT-BASED ACCESS",            name: "Microsoft Entra Application Proxy, Conditional Access" },
        { id: "approval-workflows", category: "APPROVAL WORKFLOWS",              name: "Customer Lockbox for Microsoft Azure" },
        { id: "sso",                category: "SSO",                             name: "Microsoft Entra Single Sign-On" },
        { id: "threat-detection",   category: "THREAT DETECTION",                name: "Microsoft Defender for Cloud, Sentinel" },
        { id: "vulnerability-scan", category: "VULNERABILITY SCANNING",          name: "Microsoft Defender for Cloud" }
      ]
    }
  }
};
