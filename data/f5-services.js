//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/17/2025
//Version 1.0
// f5-services.js
// F5 BIG-IP, NGINX, and Distributed Cloud catalog for the Cloud Decision Kit.
// Structured like the other option files: categories -> services[].
// Each service has an id, category label, and human-readable name.

window.CDK = window.CDK || {};
window.CDK.tools = window.CDK.tools || {};

window.CDK.tools.f5 = {
  id: "f5",
  displayName: "F5 / BIG-IP / NGINX",
  serviceCategories: {
    // ---------------------------
    // Core BIG-IP ADC & Traffic
    // ---------------------------
    "adc-core": {
      label: "Core BIG-IP ADC & Traffic",
      services: [
        {
          id: "bigip-ltm",
          category: "ADC / TRAFFIC MANAGEMENT",
          name: "BIG-IP Local Traffic Manager (LTM)"
        },
        {
          id: "bigip-dns",
          category: "GLOBAL TRAFFIC / GSLB",
          name: "BIG-IP DNS / Global Traffic Manager (GTM)"
        },
        {
          id: "bigip-gtm-legacy",
          category: "GLOBAL TRAFFIC / GSLB",
          name: "BIG-IP Global Traffic Manager (legacy branding)"
        },
        {
          id: "bigip-gtm-ssl-offload",
          category: "TLS TERMINATION",
          name: "L7 SSL/TLS offload and re-encryption on BIG-IP"
        }
      ]
    },

    // ---------------------------
    // BIG-IP Security Modules
    // ---------------------------
    "bigip-security": {
      label: "BIG-IP Security Modules",
      services: [
        {
          id: "bigip-asm-advwaf",
          category: "WAF / APP SECURITY",
          name: "BIG-IP ASM / Advanced WAF (web app firewall)"
        },
        {
          id: "bigip-apm",
          category: "ACCESS CONTROL / SSO",
          name: "BIG-IP Access Policy Manager (APM)"
        },
        {
          id: "bigip-afm",
          category: "NETWORK FIREWALL / DDoS",
          name: "BIG-IP Advanced Firewall Manager (AFM)"
        },
        {
          id: "bigip-sslo",
          category: "TLS VISIBILITY",
          name: "BIG-IP SSL Orchestrator (SSLO)"
        },
        {
          id: "bigip-bot-defense",
          category: "BOT DEFENSE",
          name: "BIG-IP bot & fraud defense (via Advanced WAF / integration)"
        }
      ]
    },

    // ---------------------------
    // F5 Distributed Cloud (XC) Services
    // ---------------------------
    "distributed-cloud": {
      label: "F5 Distributed Cloud (XC) Services",
      services: [
        {
          id: "xc-waap",
          category: "WAAP / WAF",
          name: "F5 Distributed Cloud WAAP (WAF, bot, DDoS, API protection)"
        },
        {
          id: "xc-api-security",
          category: "API SECURITY",
          name: "F5 Distributed Cloud API Security"
        },
        {
          id: "xc-multi-cloud-networking",
          category: "MULTI-CLOUD NETWORKING",
          name: "F5 Distributed Cloud Multi-Cloud Transit / Network"
        },
        {
          id: "xc-global-lb",
          category: "GLOBAL LOAD BALANCING",
          name: "F5 Distributed Cloud Load Balancer & Kubernetes Gateway"
        },
        {
          id: "xc-ddos-mitigation",
          category: "DDoS MITIGATION",
          name: "F5 Distributed Cloud DDoS Mitigation"
        }
      ]
    },

    // ---------------------------
    // NGINX Application Services (F5)
    // ---------------------------
    "nginx": {
      label: "NGINX (F5)",
      services: [
        {
          id: "nginx-oss",
          category: "WEB SERVER / REVERSE PROXY",
          name: "NGINX Open Source"
        },
        {
          id: "nginx-plus",
          category: "REVERSE PROXY / ADC",
          name: "NGINX Plus (enterprise ADC / reverse proxy)"
        },
        {
          id: "nginx-app-protect-waf",
          category: "WAF",
          name: "NGINX App Protect WAF"
        },
        {
          id: "nginx-app-protect-dos",
          category: "L7 DDoS DEFENSE",
          name: "NGINX App Protect DoS"
        },
        {
          id: "nginx-ingress-controller",
          category: "KUBERNETES INGRESS",
          name: "NGINX Ingress Controller (F5)"
        }
      ]
    },

    // ---------------------------
    // Automation & Integrations
    // ---------------------------
    "automation-integration": {
      label: "Automation & Integrations",
      services: [
        {
          id: "f5-as3",
          category: "BIG-IP AUTOMATION",
          name: "AS3 (Application Services 3 Extension) for BIG-IP"
        },
        {
          id: "f5-do",
          category: "BIG-IP PROVISIONING",
          name: "Declarative Onboarding (DO) for BIG-IP"
        },
        {
          id: "f5-ts",
          category: "OBSERVABILITY / TELEMETRY",
          name: "Telemetry Streaming (TS) for BIG-IP"
        },
        {
          id: "f5-fast",
          category: "TEMPLATES",
          name: "F5 Application Services Templates (FAST)"
        },
        {
          id: "f5-terraform-providers",
          category: "INFRASTRUCTURE AS CODE",
          name: "Terraform providers for BIG-IP, Distributed Cloud, and NGINX"
        },
        {
          id: "f5-ansible-collections",
          category: "AUTOMATION",
          name: "F5 Ansible collections (BIG-IP, XC, NGINX)"
        }
      ]
    },

    // ---------------------------
    // Deployment Form Factors
    // ---------------------------
    "deployment": {
      label: "Deployment Form Factors",
      services: [
        {
          id: "bigip-hardware",
          category: "HARDWARE APPLIANCE",
          name: "BIG-IP hardware appliances"
        },
        {
          id: "bigip-ve",
          category: "VIRTUAL EDITION",
          name: "BIG-IP Virtual Edition (VE)"
        },
        {
          id: "bigip-cloud-marketplace",
          category: "CLOUD MARKETPLACE",
          name: "BIG-IP in AWS / Azure / GCP / OCI marketplaces"
        },
        {
          id: "xc-saas",
          category: "SAAS",
          name: "F5 Distributed Cloud SaaS platform"
        }
      ]
    }
  }
};
