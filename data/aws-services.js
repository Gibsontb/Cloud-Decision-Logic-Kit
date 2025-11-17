
//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/14/2025
//Version 5.1
// AWS services derived from "Master Reference Cloud Services 2025 v2.5"
// Grouped by category; names are exactly as in the reference.
// This file wires AWS into the Cloud Decision Kit namespace.

window.CDK = window.CDK || {};
window.CDK.providers = window.CDK.providers || {};

window.CDK.providers.aws = {
  id: "aws",
  displayName: "Amazon Web Services (AWS)",
  serviceCategories: {
    // ---------------------------
    // AI and Machine Learning
    // ---------------------------
    "ai-ml": {
      label: "AI & Machine Learning",
      services: [
        { id: "ai-containers",          category: "AI CONTAINERS",                name: "Deep Learning Containers" },
        { id: "ai-powered-assistant",   category: "AI-POWERED ASSISTANT",         name: "Amazon Q" },
        { id: "human-review",           category: "HUMAN REVIEW/MODERATION",      name: "Amazon Augmented AI (A2I)" },
        { id: "chatbot-builder",        category: "CHATBOT BUILDER",              name: "Amazon Lex" },
        { id: "data-labeling",          category: "DATA LABELING",                name: "SageMaker Ground Truth" },
        { id: "document-extraction",    category: "DOCUMENT EXTRACTION",          name: "Amazon Textract" },
        { id: "generative-platforms",   category: "GENERATIVE AI PLATFORMS",      name: "Amazon Bedrock" },
        { id: "image-recognition",      category: "IMAGE RECOGNITION",            name: "Amazon Rekognition" },
        { id: "inference-acceleration", category: "INFERENCE ACCELERATION",       name: "AWS Inferentia, Elastic Inference" },
        { id: "language-translation",   category: "LANGUAGE TRANSLATION",         name: "Amazon Translate" },
        { id: "ml-ai-chips",            category: "ML/AI CHIPS",                  name: "Inferentia, Trainium" },
        { id: "managed-ml-platform",    category: "MANAGED ML PLATFORM",          name: "Amazon SageMaker" },
        { id: "notebooks",              category: "NOTEBOOKS",                    name: "EMR Notebooks" },
        { id: "online-fraud",           category: "ONLINE FRAUD DETECTION",       name: "Amazon Fraud Detector" },
        { id: "preconfigured-ml-vms",   category: "PRECONFIGURED ML VMS",         name: "Deep Learning AMIs" },
        { id: "recommendation-engine",  category: "RECOMMENDATION ENGINE",        name: "Amazon Personalize" },
        { id: "speech-services",        category: "SPEECH RECOGNITION/SYNTHESIS", name: "Amazon Transcribe, Polly" },
        { id: "text-analysis",          category: "TEXT ANALYSIS",                name: "Amazon Comprehend" },
        { id: "time-series-forecasting",category: "TIME-SERIES FORECASTING",      name: "Amazon Forecast" },
        { id: "video-analysis",         category: "VIDEO ANALYSIS",               name: "Rekognition Video" },
        { id: "visual-inspection",      category: "VISUAL INSPECTION",            name: "Lookout for Vision" }
      ]
    },

    // ---------------------------
    // Analytics
    // ---------------------------
    "analytics": {
      label: "Analytics",
      services: [
        { id: "big-data-processing",    category: "BIG DATA PROCESSING",          name: "Amazon EMR, AWS Glue" },
        { id: "business-analytics",     category: "BUSINESS ANALYTICS",           name: "Amazon QuickSight, Amazon FinSpace" },
        { id: "data-exploration",       category: "DATA EXPLORATION/CATALOG",     name: "Amazon Athena, AWS Glue Data Catalog" },
        { id: "data-lake-creation",     category: "DATA LAKE CREATION",           name: "AWS Lake Formation" },
        { id: "data-sharing",           category: "DATA SHARING/EXCHANGE",        name: "AWS Data Exchange, Lake Formation, AMB" },
        { id: "data-streaming",         category: "DATA STREAMING",               name: "Amazon Kinesis, Data Firehose, Kinesis Analytics" },
        { id: "data-warehousing",       category: "DATA WAREHOUSING",             name: "Amazon Redshift" },
        { id: "data-wrangling",         category: "DATA WRANGLING",               name: "AWS Glue DataBrew, SageMaker Data Wrangler" },
        { id: "etl",                    category: "ETL",                           name: "AWS Glue, AWS Data Pipeline" },
        { id: "hosted-hadoop-spark",    category: "HOSTED HADOOP/SPARK",          name: "Amazon EMR" },
        { id: "managed-kafka",          category: "MANAGED KAFKA",                name: "Amazon MSK (Managed Streaming for Kafka)" },
        { id: "managed-search",         category: "MANAGED SEARCH",               name: "Amazon OpenSearch, CloudSearch" },
        { id: "query-service",          category: "QUERY SERVICE",                name: "Amazon Athena, Redshift Spectrum" }
      ]
    },

    // ---------------------------
    // Application Integration
    // ---------------------------
    "app-integration": {
      label: "Application Integration",
      services: [
        { id: "api-management",         category: "API MANAGEMENT",               name: "Amazon API Gateway, AWS AppSync" },
        { id: "distributed-coordination",category: "DISTRIBUTED COORDINATION",    name: "AWS Step Functions, Simple Workflow (SWF)" },
        { id: "event-handling",         category: "EVENT HANDLING",               name: "Amazon EventBridge" },
        { id: "integration-service",    category: "INTEGRATION SERVICE",          name: "AWS AppFlow, Step Functions" },
        { id: "messaging",              category: "MESSAGING",                    name: "Amazon SQS, SNS, MQ" },
        { id: "service-discovery",      category: "SERVICE DISCOVERY",            name: "AWS Cloud Map" },
        { id: "service-mesh",           category: "SERVICE MESH",                 name: "AWS App Mesh" },
        { id: "workflow-orchestration", category: "WORKFLOW ORCHESTRATION",       name: "AWS Managed Workflows for Apache Airflow (MWAA), Step Functions" }
      ]
    },

    // ---------------------------
    // Business Applications
    // ---------------------------
    "business-apps": {
      label: "Business Applications",
      services: [
        // COLLABORATION SUITE: no AWS entry in the reference ("—"), so omitted.
        { id: "doc-sharing",        category: "DOCUMENT SHARING",                 name: "Amazon WorkDocs" },
        { id: "email-calendar",     category: "EMAIL AND CALENDAR",              name: "Amazon WorkMail" },
        { id: "low-code",           category: "LOW-CODE/NO-CODE TOOLS",          name: "AWS Amplify, App Runner, QuickSight" },
        { id: "video-calls-chat",   category: "VIDEO CALLS AND CHAT",            name: "Amazon Chime" },
        { id: "voice-assistant",    category: "VOICE ASSISTANT",                 name: "Amazon Alexa, Amazon Lex" }
      ]
    },

    // ---------------------------
    // Compute
    // ---------------------------
    "compute": {
      label: "Compute",
      services: [
        { id: "autoscaling",        category: "AUTOSCALING",                     name: "EC2 Auto Scaling, AWS Auto Scaling" },
        { id: "batch-processing",   category: "BATCH PROCESSING",                name: "AWS Batch" },
        { id: "hybrid-extended",    category: "HYBRID/EXTENDED INFRA",           name: "AWS Outposts, ECS Anywhere, EKS Anywhere" },
        { id: "serverless-compute", category: "SERVERLESS COMPUTE",              name: "AWS Lambda" },
        { id: "hpc-management",     category: "HPC MANAGEMENT",                  name: "AWS ParallelCluster" },
        { id: "dedicated-servers",  category: "DEDICATED SERVERS",               name: "EC2 Dedicated Hosts" },
        { id: "paas-web-hosting",   category: "PAAS WEB HOSTING",                name: "Elastic Beanstalk, Lightsail" },
        { id: "quantum-computing",  category: "QUANTUM COMPUTING",               name: "Amazon Braket" },
        { id: "virtual-machines",   category: "VIRTUAL MACHINES",                name: "EC2" },
        { id: "vm-image-builder",   category: "VM IMAGE BUILDER",                name: "EC2 Image Builder" },
        { id: "vmware-integration", category: "VMWARE INTEGRATION",              name: "VMware Cloud on AWS" }
      ]
    },

    // ---------------------------
    // Containers
    // ---------------------------
    "containers": {
      label: "Containers",
      services: [
        { id: "container-migration",   category: "CONTAINER MIGRATION",          name: "App2Container (A2C)" },
        { id: "container-registry",    category: "CONTAINER REGISTRY",           name: "Amazon ECR, AWS CodeArtifact" },
        { id: "managed-containers",    category: "MANAGED CONTAINERS",           name: "ECS, AWS Copilot" },
        { id: "managed-kubernetes",    category: "MANAGED KUBERNETES",           name: "Amazon EKS" },
        { id: "serverless-containers", category: "SERVERLESS CONTAINERS",        name: "AWS Fargate, App Runner" }
      ]
    },

    // ---------------------------
    // Cost Controls
    // ---------------------------
    "cost-controls": {
      label: "Cost Controls",
      services: [
        { id: "architecture-review",   category: "ARCHITECTURE REVIEW",          name: "AWS Well-Architected Tool" },
        { id: "billing-budgeting",     category: "BILLING AND BUDGETING TOOLS",  name: "AWS Budgets, AWS Cost and Usage Reports (CUR)" },
        { id: "optimization",          category: "OPTIMIZATION & RECOMMENDATIONS", name: "AWS Trusted Advisor, Compute Optimizer" },
        { id: "commitment-discounts",  category: "COMMITMENT DISCOUNTS",         name: "EC2 Reserved Instances, Compute Savings Plans" },
        { id: "spot-vms",              category: "SPOT/PREEMPTIBLE VMS",         name: "Amazon EC2 Spot Instances" },
        { id: "cost-anomaly-detect",   category: "COST ANOMALY DETECTION",       name: "AWS Cost Anomaly Detection" }
      ]
    },

    // ---------------------------
    // Databases
    // ---------------------------
    "databases": {
      label: "Databases",
      services: [
        { id: "blockchain",        category: "BLOCKCHAIN",                       name: "Amazon Managed Blockchain, QLDB" },
        { id: "in-memory-cache",   category: "IN-MEMORY CACHE",                  name: "Amazon ElastiCache, Amazon MemoryDB" },
        { id: "nosql-column",      category: "NOSQL (COLUMN-FAMILY)",            name: "Amazon Keyspaces (for Cassandra)" },
        { id: "nosql-document",    category: "NOSQL (DOCUMENT)",                 name: "Amazon DocumentDB" },
        { id: "nosql-graph",       category: "NOSQL (GRAPH)",                    name: "Amazon Neptune" },
        { id: "nosql-keyvalue",    category: "NOSQL (KEY-VALUE)",                name: "Amazon DynamoDB" },
        { id: "relational-rdbms",  category: "RELATIONAL (RDBMS)",               name: "RDS, Amazon Aurora, Amazon Redshift" },
        { id: "time-series-db",    category: "TIME-SERIES",                      name: "Amazon Timestream" }
      ]
    },

    // ---------------------------
    // Developer Tools
    // ---------------------------
    "devtools": {
      label: "Developer Tools",
      services: [
        { id: "app-config",        category: "APP CONFIGURATION",                name: "AWS AppConfig" },
        { id: "artifact-mgmt",     category: "ARTIFACT MANAGEMENT",              name: "AWS CodeArtifact" },
        { id: "ci-cd",             category: "CI/CD",                            name: "CodePipeline, CodeBuild, CodeDeploy" },
        { id: "cli-tools",         category: "CLI TOOLS",                        name: "AWS CLI" },
        { id: "code-debugging",    category: "CODE DEBUGGING",                   name: "AWS X-Ray" },
        { id: "sdks-devkits",      category: "SDKS AND DEV KITS",                name: "AWS SDKs, CDK, Corretto" },
        { id: "git-repos",         category: "GIT REPOSITORIES",                 name: "AWS CodeCommit" },
        { id: "web-mobile-dev",    category: "WEB/MOBILE APP DEV",               name: "AWS Amplify" },
        { id: "powershell",        category: "POWERSHELL",                       name: "AWS Tools for PowerShell" },
        { id: "scheduling",        category: "SCHEDULING",                       name: "Amazon EventBridge, CloudWatch Events" },
        { id: "testing",           category: "TESTING",                          name: "AWS Device Farm, AWS Fault Injection Service (FIS)" }
      ]
    },

    // ---------------------------
    // IoT
    // ---------------------------
    "iot": {
      label: "IoT",
      services: [
        { id: "iot-device-connectivity", category: "DEVICE CONNECTIVITY",        name: "AWS IoT Core, IoT Device Management, SiteWise" },
        { id: "iot-edge",                category: "EDGE COMPUTING",             name: "AWS IoT Greengrass" },
        { id: "iot-security",            category: "IOT SECURITY",               name: "AWS IoT Device Defender" },
        { id: "virtual-modeling",        category: "VIRTUAL MODELING",           name: "AWS IoT Things Graph, TwinMaker" },
        { id: "iot-gateways",            category: "IOT GATEWAYS",               name: "AWS IoT Core" }
      ]
    },

    // ---------------------------
    // Management and Governance
    // ---------------------------
    "management-governance": {
      label: "Management and Governance",
      services: [
        { id: "mgmt-anomaly",       category: "ANOMALY DETECTION",               name: "Amazon Lookout for Metrics, CloudWatch Anomaly" },
        { id: "app-data-catalog",   category: "APP/DATA CATALOG",                name: "AWS Service Catalog, AWS Glue Data Catalog" },
        { id: "automation-orch",    category: "AUTOMATION/ORCHESTRATION",        name: "AWS CloudFormation, OpsWorks, Proton" },
        { id: "config-management",  category: "CONFIG MANAGEMENT",               name: "AWS Config" },
        { id: "monitoring",         category: "MONITORING",                      name: "Amazon CloudWatch" },
        { id: "health-dashboards",  category: "HEALTH DASHBOARDS",               name: "AWS Health Dashboard" },
        { id: "hybrid-multi-cloud", category: "HYBRID/MULTI-CLOUD MGMT",         name: "AWS Outposts, ECS Anywhere, Control Tower" },
        { id: "license-mgmt",       category: "LICENSE MANAGEMENT",              name: "AWS License Manager" },
        { id: "logging",            category: "LOGGING",                         name: "AWS CloudTrail, CloudWatch Logs" },
        { id: "admin-console",      category: "ADMIN CONSOLE",                   name: "AWS Management Console" },
        { id: "multi-account-mgmt", category: "MULTI-ACCOUNT MGMT",              name: "AWS Organizations, Control Tower" },
        { id: "network-monitoring", category: "NETWORK MONITORING",              name: "AWS Network Manager" },
        { id: "policy-enforcement", category: "POLICY ENFORCEMENT",              name: "AWS Organizations, SCPs" }
      ]
    },

    // ---------------------------
    // Migration
    // ---------------------------
    "migration": {
      label: "Migration",
      services: [
        { id: "db-migration",       category: "DATABASE MIGRATION",              name: "AWS Database Migration Service (DMS)" },
        { id: "data-transfer-appl", category: "DATA TRANSFER APPLIANCES",        name: "AWS Snowball, Snowcone" },
        { id: "migration-accelerators", category: "MIGRATION ACCELERATORS",      name: "AWS Migration Acceleration Program (MAP)" },
        { id: "online-transfer-sync", category: "ONLINE TRANSFER & SYNC",        name: "AWS DataSync, AWS Transfer Family" },
        { id: "on-prem-discovery",  category: "ON-PREMISE DISCOVERY",            name: "AWS Migration Evaluator, Application Discovery" },
        { id: "vm-migration",       category: "VM MIGRATION",                    name: "AWS Application Migration Service (MGN)" }
      ]
    },

    // ---------------------------
    // Miscellaneous
    // ---------------------------
    "misc": {
      label: "Miscellaneous",
      services: [
        { id: "customer-contact",   category: "CUSTOMER MULTICHANNEL CONTACT",   name: "Amazon Connect, Contact Lens" },
        { id: "marketing-notifs",   category: "MARKETING & NOTIFICATIONS",       name: "Amazon Pinpoint, SES" },
        { id: "healthcare-fhir",    category: "HEALTHCARE (FHIR)",               name: "AWS HealthLake" },
        { id: "gaming",             category: "GAMING",                          name: "Amazon GameLift, Lumberyard" },
        { id: "genomics",           category: "GENOMICS",                        name: "Amazon Genomics CLI" },
        { id: "geolocation",        category: "GEOLOCATION SERVICES",            name: "Amazon Location Service" },
        { id: "media-services",     category: "MEDIA SERVICES",                  name: "AWS Elemental, IVS, Nimble Studio" },
        { id: "robotics",           category: "ROBOTICS",                        name: "AWS RoboMaker" },
        { id: "satellite-ground",   category: "SATELLITE GROUND STATIONS",       name: "AWS Ground Station" },
        { id: "virtual-desktops",   category: "VIRTUAL DESKTOP INFRASTRUCTURE",  name: "Amazon WorkSpaces, AppStream 2.0" }
      ]
    },

    // ---------------------------
    // Networking and Content Delivery
    // ---------------------------
    "networking-cdn": {
      label: "Networking and Content Delivery",
      services: [
        { id: "5g-edge-infra",      category: "5G EDGE INFRA",                   name: "AWS Wavelength, Private 5G" },
        { id: "net-api-management", category: "API MANAGEMENT",                  name: "Amazon API Gateway" },
        { id: "cdn",                category: "CDN",                             name: "Amazon CloudFront" },
        { id: "dedicated-connect",  category: "DEDICATED CONNECTION",            name: "AWS Direct Connect" },
        { id: "dns",                category: "DNS",                             name: "Amazon Route 53" },
        { id: "load-balancing",     category: "LOAD BALANCING",                  name: "ELB (ALB/NLB/CLB)" },
        { id: "global-acceleration",category: "GLOBAL TRAFFIC ACCELERATION",     name: "AWS Global Accelerator" },
        { id: "nat",                category: "NAT",                             name: "NAT Gateway" },
        { id: "vpc-peering",        category: "VPC PEERING",                     name: "VPC Peering" },
        { id: "private-connectivity",category: "PRIVATE CONNECTIVITY",           name: "AWS PrivateLink" },
        { id: "svc-discovery-net",  category: "SERVICE DISCOVERY",               name: "Cloud Map, VPC Lattice" },
        { id: "svc-mesh-net",       category: "SERVICE MESH",                    name: "App Mesh" },
        { id: "wan-vpn",            category: "WAN/VPN",                         name: "AWS Cloud WAN, AWS VPN" },
        { id: "vpc",                category: "VPC",                             name: "Amazon VPC" }
      ]
    },

    // ---------------------------
    // Security
    // ---------------------------
    "security": {
      label: "Security",
      services: [
        { id: "audit-compliance",   category: "AUDIT AND COMPLIANCE",            name: "AWS Artifact, AWS Audit Manager" },
        { id: "central-security-mgmt", category: "CENTRALIZED SECURITY MGMT",    name: "AWS Security Hub" },
        { id: "cert-management",    category: "CERTIFICATE MANAGEMENT",          name: "AWS Certificate Manager" },
        { id: "confidential-compute",category: "CONFIDENTIAL COMPUTING",         name: "AWS Nitro Enclaves" },
        { id: "container-security", category: "CONTAINER SECURITY",              name: "Amazon ECR, Inspector" },
        { id: "data-discovery",     category: "DATA DISCOVERY/CLASSIFICATION",   name: "Amazon Macie" },
        { id: "ddos-protection",    category: "DDOS PROTECTION",                 name: "AWS Shield, AWS WAF" },
        { id: "iam",                category: "IDENTITY & ACCESS MGMT (IAM)",    name: "AWS IAM" },
        { id: "key-management",     category: "CERTIFICATE/KEY MANAGEMENT",      name: "AWS KMS, CloudHSM" },
        { id: "microsoft-ad",       category: "MICROSOFT AD SUPPORT",            name: "AWS Directory Service for Microsoft AD" },
        { id: "regulated-cloud",    category: "REGULATED CLOUD ZONES",           name: "AWS GovCloud" },
        { id: "resource-access",    category: "RESOURCE ACCESS POLICIES",        name: "AWS Resource Access Manager" },
        { id: "secrets-management", category: "SECRETS MANAGEMENT",              name: "AWS Secrets Manager" },
        { id: "context-access",     category: "CONTEXT-BASED ACCESS",            name: "AWS Verified Access" },
        // APPROVAL WORKFLOWS: reference shows no AWS equivalent ("—"), so omitted.
        { id: "sso",                category: "SSO",                             name: "AWS IAM Identity Center" },
        { id: "threat-detection",   category: "THREAT DETECTION",                name: "Amazon GuardDuty, Detective" },
        { id: "vulnerability-scan", category: "VULNERABILITY SCANNING",          name: "Amazon Inspector" }
      ]
    }
  }
};
