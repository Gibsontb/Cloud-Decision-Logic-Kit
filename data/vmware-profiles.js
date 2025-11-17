//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/16/2025
//Version 2.0
// vmware-options.js
// VMware estate, cloud SDDC, and migration options for the Cloud Decision Kit.
// Structured similarly to the cloud service files: categories -> services[].
// Each service has an id, category label, and human-readable name. You can
// also add cloud mappings where it makes sense.

window.CDK = window.CDK || {};
window.CDK.tools = window.CDK.tools || {};

window.CDK.tools.vmware = {
  id: "vmware",
  displayName: "VMware Platform & SDDC",
  serviceCategories: {
    // ---------------------------
    // On-Prem VMware Core
    // ---------------------------
    "onprem-core": {
      label: "On-Prem VMware Core",
      services: [
        { id: "vsphere-esxi",        category: "VMWARE CORE / COMPUTE",     name: "vSphere / ESXi hosts" },
        { id: "vcenter-server",      category: "MANAGEMENT PLANE",          name: "vCenter Server" },
        { id: "vsan",                category: "SOFTWARE-DEFINED STORAGE",  name: "vSAN" },
        { id: "nsx-t-datacenter",    category: "SOFTWARE-DEFINED NETWORK",  name: "NSX-T Data Center" },
        { id: "vsphere-replication", category: "REPLICATION",               name: "vSphere Replication" },
        { id: "srm",                 category: "DISASTER RECOVERY",         name: "Site Recovery Manager (SRM)" },
        { id: "aria-suite",          category: "OPERATIONS & AUTOMATION",   name: "VMware Aria Suite (vRealize)" }
      ]
    },

    // ---------------------------
    // Cloud VMware SDDC (per hyperscaler)
    // ---------------------------
    "cloud-sddc": {
      label: "Cloud VMware SDDC",
      services: [
        {
          id: "vmc-aws",
          category: "CLOUD VMWare SDDC",
          name: "VMware Cloud on AWS",
          cloudProviders: ["aws"]
        },
        {
          id: "avs",
          category: "CLOUD VMWare SDDC",
          name: "Azure VMware Solution (AVS)",
          cloudProviders: ["azure"]
        },
        {
          id: "gcve",
          category: "CLOUD VMWare SDDC",
          name: "Google Cloud VMware Engine (GCVE)",
          cloudProviders: ["gcp"]
        },
        {
          id: "ocvs",
          category: "CLOUD VMWare SDDC",
          name: "Oracle Cloud VMware Solution (OCVS)",
          cloudProviders: ["oci"]
        }
      ]
    },

    // ---------------------------
    // Migration & HCX
    // ---------------------------
    "migration-hcx": {
      label: "Migration & HCX",
      services: [
        {
          id: "vmware-hcx-onprem",
          category: "MIGRATION / HCX",
          name: "VMware HCX (on-prem) for hybrid migration"
        },
        {
          id: "vmware-hcx-vmc-aws",
          category: "MIGRATION / HCX",
          name: "VMware HCX for VMware Cloud on AWS",
          cloudProviders: ["aws"]
        },
        {
          id: "vmware-hcx-avs",
          category: "MIGRATION / HCX",
          name: "VMware HCX for Azure VMware Solution",
          cloudProviders: ["azure"]
        },
        {
          id: "vmware-hcx-gcve",
          category: "MIGRATION / HCX",
          name: "VMware HCX for Google Cloud VMware Engine",
          cloudProviders: ["gcp"]
        },
        {
          id: "vmware-hcx-ocvs",
          category: "MIGRATION / HCX",
          name: "VMware HCX for Oracle Cloud VMware Solution",
          cloudProviders: ["oci"]
        },
        {
          id: "vsphere-vmotion",
          category: "LIVE MIGRATION",
          name: "vMotion / Storage vMotion"
        }
      ]
    },

    // ---------------------------
    // Management & Operations
    // ---------------------------
    "management-ops": {
      label: "Management & Operations",
      services: [
        { id: "aria-operations",  category: "OBSERVABILITY",           name: "VMware Aria Operations (vRealize Operations)" },
        { id: "aria-automation",  category: "CLOUD AUTOMATION",        name: "VMware Aria Automation (vRealize Automation)" },
        { id: "aria-operations-cloud", category: "SaaS MANAGEMENT",    name: "VMware Aria Operations for Applications / SaaS" },
        { id: "vrealize-log-insight",  category: "LOG MANAGEMENT",     name: "VMware Aria Operations for Logs (Log Insight)" },
        { id: "vcf",              category: "FULL STACK SDDC",         name: "VMware Cloud Foundation" }
      ]
    },

    // ---------------------------
    // Networking & Security
    // ---------------------------
    "network-security": {
      label: "Networking & Security",
      services: [
        { id: "nsx-distributed-fw", category: "MICRO-SEGMENTATION",      name: "NSX Distributed Firewall" },
        { id: "nsx-gateway-fw",     category: "EDGE SECURITY",           name: "NSX Gateway Firewall" },
        { id: "nsx-advanced-lb",    category: "LOAD BALANCING / ADC",    name: "NSX Advanced Load Balancer (Avi)" },
        { id: "nsx-vpn",            category: "VPN / TUNNELS",           name: "NSX IPsec / SSL VPN" }
      ]
    },

    // ---------------------------
    // Desktop & EUC
    // ---------------------------
    "desktop-euc": {
      label: "Virtual Desktop & EUC",
      services: [
        { id: "horizon",          category: "VIRTUAL DESKTOP",        name: "VMware Horizon" },
        { id: "horizon-cloud",    category: "CLOUD VDI",              name: "VMware Horizon Cloud" },
        { id: "app-volumes",      category: "APP LAYERING",           name: "VMware App Volumes" },
        { id: "dem",              category: "USER ENVIRONMENT MGMT",  name: "VMware Dynamic Environment Manager (DEM)" }
      ]
    }
  }
};
