import { NextResponse } from "next/server";

export async function GET(_request: Request) {
  const data = [
    {
      id: "singapore-institute-of-technology",
      category: "Education Technology",
      title:
        "Singapore Institute of Technology Real-time Interaction Monitoring",
      client: "Singapore Institute Of Technology",
      completed: "February 2025",
      location: "Singapore",
      website: "Internal System",
      thumbnail: "/work/sit/sit-1.png",
      strategicFocus: "Extreme-Scale Event Processing",
      businessChallenge:
        "SIT needed to capture millions of student micro-interactions in real time and turn them into actionable teaching insights without introducing latency during high-traffic academic periods.",
      projectDescription:
        "Singapore Institute of Technology engaged WiseOSC to build a real-time learning analytics system capable of ingesting, processing, and interpreting millions of learning events without disrupting student experience. The platform combines resilient event ingestion, cloud-native analytics, and actionable educator dashboards so teaching teams can move from hindsight reporting to immediate intervention. The result is a production-ready data backbone that supports evidence-led education decisions, faster curriculum adjustments, and sustained visibility into engagement signals across large cohorts.",
      serviceProvided: [
        "Event Pipeline Architecture",
        "Cloud Data Platform Engineering",
        "Predictive Intervention Workflows",
      ],
      aiEngineering: [
        "Built predictive classifiers to identify at-risk learner profiles based on engagement drop-offs and interaction latency.",
        "Created automated intervention triggers to notify educators and send student support nudges at the right time.",
      ],
      dataEngineering: [
        "Engineered a Kafka-backed streaming pipeline for xAPI learning events with high durability during exam spikes.",
        "Implemented BigQuery analytics models so teaching teams can query millions of records in seconds.",
        "Shipped live dashboards for engagement heatmaps and sentiment signals to support same-day teaching adjustments.",
      ],
      impactHighlights: [
        "Real-time visibility into student engagement at course and cohort level.",
        "Scalable telemetry foundation for curriculum optimization and intervention programs.",
      ],
      techStack: [
        "Kafka",
        "BigQuery",
        "AWS Lambda",
        "React",
        "xAPI",
        "Python (Scikit-learn)",
      ],
      images: [
        {
          title: "Family Wealth Dashboard Overview",
          subtitle:
            "Analytics, targets, asset list, valuations and family connections",
          url: "/work/sit/sit-1.png",
        },
        {
          title: "External Account Connectivity",
          subtitle: "Connecting bank and investment accounts with auto-update",
          url: "/work/sit/sit-2.png",
        },
        {
          title: "Asset Management and Detailed View",
          subtitle:
            "Asset list with detailed asset information and valuation charts",
          url: "/work/sit/sit-3.png",
        },
        {
          title: "Expression of Wish Feature",
          subtitle: "Video and notes messages for wealth transfer wishes",
          url: "/work/sit/sit-4.png",
        },
        {
          title: "Project Collaboration",
          subtitle: "Project collaboration between WiseOSC and client",
          url: "/work/sit/sit-5.png",
        },
        {
          title: "Project Collaboration",
          subtitle: "Project collaboration between WiseOSC and client",
          url: "/work/sit/sit-6.png",
        },
      ],
    },
    {
      id: "cash-d",
      category: "Fintech · On-demand Wages",
      title: "CashD Real-time Wage Access Platform",
      client: "CashD",
      completed: "November 2024",
      location: "Australia",
      website: "Confidential",
      thumbnail: "/work/cashd/cashd-1.png",
      strategicFocus: "Fintech Resilience & Automated Financial Guardrails",
      businessChallenge:
        "CashD needed precise real-time wage calculations from fragmented payroll systems while preserving transactional integrity under high-concurrency payout requests.",
      projectDescription:
        "CashD required a fintech-grade platform where wage access calculations are accurate in real time, compliant with Australian payroll standards, and resilient under transaction concurrency. We delivered a cloud-native orchestration layer that integrates with payroll and HRM systems, continuously reconciles available balances, and protects payouts with automated checks before disbursement. This gave CashD a robust operating core for scaling early wage access while preserving trust, auditability, and financial precision.",
      serviceProvided: [
        "Fintech Platform Architecture",
        "Payroll and HRM Integrations",
        "Risk & Reconciliation Automation",
      ],
      aiEngineering: [
        "Implemented digital-auditor agents to cross-check timesheets against payout requests before disbursement.",
        "Added anomaly detection logic to flag suspicious payout patterns for manual review.",
      ],
      dataEngineering: [
        "Built microservice-based synchronization pipelines to process approved timesheet data and tax withholding logic in near real time.",
        "Isolated third-party integration latency (Xero, MYOB) to protect core payout availability.",
        "Applied encryption and compliance-grade data handling across PII and transaction records.",
      ],
      impactHighlights: [
        "Reliable real-time wage visibility for employees and employers.",
        "Lower fraud risk through pre-disbursement automated controls.",
      ],
      techStack: [
        "Node.js",
        "AWS",
        "PostgreSQL",
        "Xero API",
        "MYOB API",
        "Redis",
      ],
      images: [
        {
          title: "CashD Dashboard",
          subtitle: "Overview of earned wage access and utilization metrics",
          url: "/work/cashd/cashd-1.png",
        },
        {
          title: "Wage Access Flows",
          subtitle: "Employee flows to access and manage earned wages",
          url: "/work/cashd/cashd-2.png",
        },
        {
          title: "Payroll Integration",
          subtitle: "Configuration of payroll and employer settings",
          url: "/work/cashd/cashd-3.png",
        },
        {
          title: "Compliance & Reporting",
          subtitle: "Regulatory reporting and reconciliation views",
          url: "/work/cashd/cashd-4.png",
        },
      ],
    },
    {
      id: "sell-blue-ai",
      category: "AI Sales Enablement",
      title: "Sell Blue AI Revenue Intelligence Assistant",
      client: "Sell Blue AI",
      completed: "September 2024",
      location: "Global",
      website: "Confidential",
      thumbnail: "/work/sellblueai/sell-blue-ai-1.png",
      strategicFocus: "Production-Ready LLMOps & Autonomous Execution",
      businessChallenge:
        "SellBlueAI needed to move beyond FAQ automation into an assistant that could handle objections, product context, and conversion workflows in real-time iOS conversations.",
      projectDescription:
        "SellBlueAI needed to evolve from generic chat automation into a conversion-oriented AI sales system that can reason across catalog, logistics, and campaign context in real time. We built a production conversational orchestration platform that uses multi-agent delegation, rigorous prompt safety constraints, and deep LLMOps visibility to maintain both reliability and commercial impact. The solution enables faster, context-aware customer interactions while keeping response quality, latency, and model spend under operational control.",
      serviceProvided: [
        "Agentic Orchestration Design",
        "iOS + Realtime Backend Engineering",
        "LLMOps Observability & Guardrails",
      ],
      aiEngineering: [
        "Implemented a Supervisor-Worker architecture to delegate user intent across catalog, logistics, and sales-support agents.",
        "Built LLM-as-a-judge evaluation loops to prevent hallucinated pricing or off-policy promises.",
        "Deployed live model monitoring for latency, token cost, and answer quality drift.",
      ],
      dataEngineering: [
        "Engineered a Node.js/TypeScript backend handling high concurrency WebSocket conversations.",
        "Optimized end-to-end pipeline performance for low-latency iOS interactions.",
        "Secured conversation payloads with encryption and production-grade access controls.",
      ],
      impactHighlights: [
        "Faster sales response time during peak traffic windows.",
        "Improved reliability and cost visibility for GenAI operations in production.",
      ],
      techStack: [
        "OpenAI GPT-4o",
        "LangChain",
        "Phoenix",
        "Node.js",
        "Swift (iOS)",
        "AWS",
      ],
      images: [
        {
          title: "Pipeline Overview",
          subtitle: "AI-scored opportunities and pipeline stages",
          url: "/work/sellblueai/sell-blue-ai-1.png",
        },
        {
          title: "Account Insights",
          subtitle: "Prioritized accounts with AI-driven insights",
          url: "/work/sellblueai/sell-blue-ai-2.png",
        },
        {
          title: "Playbooks",
          subtitle: "Configurable plays and workflows for sales teams",
          url: "/work/sellblueai/sell-blue-ai-3.png",
        },
        {
          title: "Reporting",
          subtitle: "Revenue analytics dashboards and cohort analysis",
          url: "/work/sellblueai/sell-blue-ai-4.png",
        },
        {
          title: "Team Performance",
          subtitle: "Productivity insights across reps and teams",
          url: "/work/sellblueai/sell-blue-ai-5.png",
        },
      ],
    },
    {
      id: "zapiio",
      category: "Property Investment",
      title: "Zapiio Smart Property Investment Platform",
      client: "Zapiio",
      completed: "June 2024",
      location: "Australia",
      website: "Confidential Platform",
      thumbnail: "/work/zapiio/zapiio-1.png",
      strategicFocus: "Agentic Intelligence + Big Data Property Analytics",
      businessChallenge:
        "Zapiio needed to automate due diligence across a fragmented property market where decisions require combining live listings, historical trends, and infrastructure context.",
      projectDescription:
        "Zapiio’s mission was to remove manual, error-prone due diligence from property investing workflows. WiseOSC designed and engineered an intelligent investment ecosystem that continuously ingests property, registry, and market context data, then applies agentic analysis to produce faster, explainable assessments before users even begin manual review. This architecture gave brokers and investors a materially stronger decision-support layer, combining speed, freshness, and strategic context in a single operating environment.",
      serviceProvided: [
        "AI Product and Workflow Design",
        "High-Scale Data Platform Engineering",
        "Search, Analytics, and Cost Optimization",
      ],
      aiEngineering: [
        "Built autonomous analyst agents to monitor listings and trigger preliminary yield assessments before manual review.",
        "Implemented GraphRAG workflows to model relationships between infrastructure plans and suburb-level growth potential.",
        "Integrated external valuation and registry context via custom MCP connectors.",
      ],
      dataEngineering: [
        "Processed 500,000+ daily data points from property sources with freshness-focused ingestion pipelines.",
        "Optimized high-frequency querying on Aurora and low-latency filtering on Elasticsearch.",
        "Introduced cache strategies that reduced external API spend by roughly 60%.",
      ],
      impactHighlights: [
        "Faster, more structured property shortlisting for advisors and investors.",
        "Material reduction in data acquisition cost while preserving freshness.",
      ],
      techStack: [
        "GraphRAG",
        "MCP Connectors",
        "AWS Aurora",
        "Elasticsearch",
        "Node.js",
        "Python",
      ],
      images: [
        {
          title: "Investment Opportunities",
          subtitle:
            "Curated list of residential and commercial investment opportunities",
          url: "/work/zapiio/zapiio-1.png",
        },
        {
          title: "Property Detail View",
          subtitle:
            "Detailed property metrics, yield projections, and risk profile",
          url: "/work/zapiio/zapiio-2.png",
        },
        {
          title: "Portfolio Overview",
          subtitle:
            "Portfolio allocation, distributions, and performance over time",
          url: "/work/zapiio/zapiio-3.png",
        },
        {
          title: "Transaction Workflow",
          subtitle:
            "Guided investment and settlement workflow for new investors",
          url: "/work/zapiio/zapiio-4.png",
        },
        {
          title: "Investor Reporting",
          subtitle: "Statements, tax reporting, and property-level analytics",
          url: "/work/zapiio/zapiio-5.png",
        },
      ],
    },
    {
      id: "lisa-training-manager",
      category: "Learning & Development",
      title: "LISA Training Manager Platform",
      client: "LISA",
      completed: "August 2024",
      location: "Global",
      website: "Confidential",
      thumbnail: "/work/lisatrainingmanager/lisa-training-manager-1.png",
      strategicFocus: "Global Scheduling Orchestration at Enterprise Scale",
      businessChallenge:
        "LISA needed to coordinate coaches, facilities, and student levels across regions while supporting high booking concurrency and offline-first operational workflows.",
      projectDescription:
        "Lisa Training Manager needed to support global academy operations where scheduling depends on multiple constraints: coach availability, facility rotation, student level, and regional time zones. We built a high-scale platform with mobile-first synchronization, distributed cloud deployment, and intelligent scheduling support that can operate reliably across regions and connectivity conditions. The resulting system helped teams coordinate complex programs with significantly better operational consistency and visibility.",
      serviceProvided: [
        "Mobile-first Platform Engineering",
        "Global Infrastructure Design",
        "Scheduling Optimization Workflows",
      ],
      aiEngineering: [
        "Built scheduling orchestrators that recommend coach/court assignments from historical attendance and utilization patterns.",
        "Added agentic conflict-resolution logic to reduce manual schedule reshuffling.",
      ],
      dataEngineering: [
        "Implemented offline-first sync so coaches can operate reliably in low-connectivity environments.",
        "Architected multi-region AWS deployment with global load balancing for low-latency access.",
        "Introduced autoscaling and off-peak downscaling rules to cut cloud overhead.",
      ],
      impactHighlights: [
        "Higher scheduling efficiency across distributed operations.",
        "Reliable booking and session management across regions.",
      ],
      techStack: [
        "React Native",
        "Node.js",
        "AWS Global Regions",
        "PostgreSQL",
        "Redis",
      ],
      images: [
        {
          title: "Training Programs",
          subtitle: "Overview of active and upcoming programs",
          url: "/work/lisatrainingmanager/lisa-training-manager-1.png",
        },
        {
          title: "Session Calendar",
          subtitle: "Calendar view of training sessions",
          url: "/work/lisatrainingmanager/lisa-training-manager-2.png",
        },
        {
          title: "Learner Progress",
          subtitle: "Completion rates and progress tracking",
          url: "/work/lisatrainingmanager/lisa-training-manager-3.png",
        },
        {
          title: "Assessments",
          subtitle: "Assessment management and tracking",
          url: "/work/lisatrainingmanager/lisa-training-manager-4.png",
        },
        {
          title: "Reports",
          subtitle: "Organizational training analytics",
          url: "/work/lisatrainingmanager/lisa-training-manager-5.png",
        },
      ],
    },
    {
      id: "apex-insurance",
      category: "Insurtech",
      title: "Apex Insurance Digital Customer Portal",
      client: "Apex Insurance",
      completed: "January 2025",
      location: "Global",
      website: "Confidential",
      thumbnail: "/work/apexinsurance/apex-insurance-1.jpeg",
      strategicFocus: "Advanced RAG for Insurance Intelligence",
      businessChallenge:
        "Apex needed to unify fragmented policy and claims data so brokers could answer risk questions quickly without manually searching dense documentation.",
      projectDescription:
        "Apex Insurance needed to modernize fragmented policy operations into a single predictive platform where brokers can access answers quickly, safely, and with context. We implemented a policy-intelligence architecture with advanced retrieval, governed model behavior, and enterprise ETL normalization to unify legacy data into reliable operational views. This reduced lookup friction, improved broker productivity, and created a resilient foundation for real-time risk and claims decision support.",
      serviceProvided: [
        "Policy Intelligence Platform Development",
        "Enterprise Data Pipeline Modernization",
        "Cloud Reliability & Security Engineering",
      ],
      aiEngineering: [
        "Implemented GraphRAG-powered policy retrieval for cited, context-aware broker answers.",
        "Built monitored guardrails to prevent unsupported legal-style responses from AI assistants.",
        "Connected external claims and weather contexts via MCP for richer risk scoring.",
      ],
      dataEngineering: [
        "Developed ETL pipelines to transform legacy policy formats into warehouse-ready models.",
        "Enabled always-on operations with resilient failover patterns for critical claim events.",
      ],
      impactHighlights: [
        "Reduced broker lookup friction for complex policy questions.",
        "Improved operational resilience during claim surges.",
      ],
      techStack: [
        "Python",
        "LangChain",
        "GraphRAG",
        "AWS S3",
        "AWS Redshift",
        "MCP Connectors",
      ],
      images: [
        {
          title: "Customer Dashboard",
          subtitle: "Overview of active policies and status",
          url: "/work/apexinsurance/apex-insurance-1.jpeg",
        },
        {
          title: "Policy Details",
          subtitle: "Detailed policy coverage and documentation",
          url: "/work/apexinsurance/apex-insurance-2.jpeg",
        },
        {
          title: "Claims Flow",
          subtitle: "Guided digital claims submission",
          url: "/work/apexinsurance/apex-insurance-3.jpeg",
        },
        {
          title: "Support Center",
          subtitle: "Customer support and FAQ experience",
          url: "/work/apexinsurance/apex-insurance-4.jpeg",
        },
        {
          title: "Mobile Experience",
          subtitle: "Responsive design across devices",
          url: "/work/apexinsurance/apex-insurance-5.jpeg",
        },
      ],
    },
  ];

  // Keep response shape consistent with frontend expectations (ProjectResponse)
  return NextResponse.json({
    message: "Success",
    data,
  });
}
