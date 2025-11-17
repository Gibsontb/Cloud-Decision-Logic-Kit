//Copyright Theodore B C Gibson, Cloud Agnostic Architect
//11/16/2025
//Version 3.0
//networking-options.js
// Cross-cloud networking and connectivity options for the Cloud Decision Kit.
// Structured like the other option files: categories -> services[].
// Each service has an id, category label, and human-readable name.
// This focuses on patterns and building blocks you layer onto
// AWS/Azure/GCP/OCI and VMware designs.

window.CDK = window.CDK || {};
window.CDK.tools = window.CDK.tools || {};

window.CDK.tools.networking = {
  id: "networking",
  displayName: "Networking & Connectivity",
  serviceCategories: {
    // ---------------------------
    // Core Network Topologies
    // ---------------------------
    "topology": {
      label: "Core Network Topologies",
      services: [
        { id: "single-vpc-vnet",    category: "BASIC TOPOLOGY",     name: "Single VPC / VNet / VCN per environment" },
        { id: "hub-spoke",          category: "HUB-AND-SPOKE",      name: "Hub-and-spoke network (shared services hub + spokes)" },
        { id: "mesh-connectivity",  category: "MESH",               name: "Full or partial mesh connectivity between sites / regions" },
        { id: "multi-region",       category: "MULTI-REGION",       name: "Multi-region active/active or active/passive topology" }
      ]
    },

    // ---------------------------
    // Datacenter & Branch Connectivity
    // ---------------------------
    "dc-branch": {
      label: "Datacenter & Branch Connectivity",
      services: [
        { id: "site-to-site-vpn",   category: "VPN",                name: "IPsec site-to-site VPN from DC/branch to cloud" },
        { id: "client-vpn",         category: "REMOTE ACCESS VPN",  name: "Client VPN for users (SSL/IPsec)" },
        { id: "private-circuit",    category: "PRIVATE CIRCUIT",    name: "Private dedicated circuit (Direct Connect / ExpressRoute / Interconnect / FastConnect)" },
        { id: "sdwan-integration",  category: "SD-WAN",             name: "SD‑WAN integration with cloud gateways and branch devices" }
      ]
    },

    // ---------------------------
    // Inter-Cloud & Inter-Region Connectivity
    // ---------------------------
    "interconnect": {
      label: "Inter-Cloud & Inter-Region Connectivity",
      services: [
        { id: "intra-cloud-transit",   category: "CLOUD TRANSIT",       name: "Cloud-native transit (Transit Gateway / Virtual WAN / Cloud Router)" },
        { id: "inter-region-links",    category: "INTER-REGION",        name: "Encrypted private links between regions" },
        { id: "inter-cloud-vpn",       category: "INTER-CLOUD VPN",     name: "VPN-based connectivity between different cloud providers" },
        { id: "inter-cloud-private",   category: "INTER-CLOUD PRIVATE", name: "Private/cloud exchange peering between providers" }
      ]
    },

    // ---------------------------
    // Edge, Ingress & Egress
    // ---------------------------
    "edge-ingress-egress": {
      label: "Edge, Ingress & Egress",
      services: [
        { id: "global-load-balancer",  category: "GLOBAL ENTRY",     name: "Global load balancer / traffic manager" },
        { id: "regional-lb",          category: "REGIONAL ENTRY",   name: "Regional / zonal load balancers for apps and APIs" },
        { id: "api-gateway",          category: "API ENTRY",        name: "API gateways for north‑south API traffic" },
        { id: "egress-control",       category: "EGRESS CONTROL",   name: "Egress filtering (NAT, egress gateways, proxy tiers)" }
      ]
    },

    // ---------------------------
    // DNS, Naming & Service Discovery
    // ---------------------------
    "dns-service-discovery": {
      label: "DNS, Naming & Service Discovery",
      services: [
        { id: "public-dns-zones",   category: "PUBLIC DNS",         name: "Public DNS zones for customer‑facing domains" },
        { id: "private-dns-zones",  category: "PRIVATE DNS",        name: "Private DNS zones for internal services" },
        { id: "hybrid-dns",         category: "HYBRID DNS",         name: "Hybrid DNS resolution across DC and cloud" },
        { id: "service-discovery",  category: "SERVICE DISCOVERY",  name: "Service discovery (DNS‑SD, mesh registry, etc.)" }
      ]
    },

    // ---------------------------
    // Network Security & Zero Trust
    // ---------------------------
    "network-security": {
      label: "Network Security & Zero Trust",
      services: [
        { id: "segmentation",          category: "SEGMENTATION",        name: "Network segmentation (VPCs / VNets / VRFs / subnets)" },
        { id: "microsegmentation",     category: "MICRO‑SEGMENTATION",  name: "Micro‑segmentation (NSGs, SGs, distributed firewalls)" },
        { id: "perimeter-firewalls",   category: "PERIMETER SECURITY",  name: "Perimeter firewalls and WAF tiers" },
        { id: "zero-trust-access",     category: "ZERO TRUST",          name: "Zero‑trust access patterns (ZTNA, identity‑aware proxies)" },
        { id: "ddos-protection",       category: "DDOS PROTECTION",     name: "DDoS protection and traffic scrubbing services" }
      ]
    },

    // ---------------------------
    // Observability & Operations
    // ---------------------------
    "observability-ops": {
      label: "Observability & Operations",
      services: [
        { id: "netflow-logs",      category: "FLOW LOGGING",        name: "VPC/VNet flow logs and traffic analytics" },
        { id: "synthetic-probes",  category: "SYNTHETIC TESTS",     name: "Synthetic probes for availability and latency" },
        { id: "path-tracing",      category: "PATH ANALYSIS",       name: "Network path tracing and reachability analysis" },
        { id: "capacity-planning", category: "CAPACITY MGMT",       name: "Capacity planning and utilization dashboards" }
      ]
    }
  }
};
