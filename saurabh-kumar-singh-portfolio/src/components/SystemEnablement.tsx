import React, { useState } from "react";
import { 
  MapPin, 
  CheckCircle,
  ExternalLink,
  Sparkles,
  ChevronDown,
  Users,
  TrendingUp,
  ClipboardCheck,
  Smartphone,
  ShieldCheck,
  Linkedin,
  Monitor,
  Check,
  Lock
} from "lucide-react";
import { ProjectItem } from "../types";

export default function SystemEnablement() {
  const [activeProject, setActiveProject] = useState<string | null>("holitools");
  const [selectedSuiteApp, setSelectedSuiteApp] = useState<"holistart" | "holisight" | "holinet" | "holiasset">("holistart");

  const projects: ProjectItem[] = [
    {
      id: "holitools",
      title: "HoliSuite Software Operations Rollouts",
      scope: "Enterprise Product Operations & UAT",
      description: "Led core requirement design, testing cycles, user training, and field implementation of four high-dependency business platforms used across Holisol networks.",
      bullets: [
        "HoliStart Onboarding Engine: Engineered structural workflows for fast labor check-ins.",
        "HoliSight Sales Hub: Streamlined pipeline stages and integrated Zoho metrics.",
        "HoliNet Compliance Tracker: Enforced safety parameters and site audit checklists.",
        "HoliAsset Manager: Structured inventory allocations and device health monitors."
      ],
      techStack: ["UAT Validation", "Process Flow Design", "Zoho API", "Dashboard Conversions", "KPI Engineering"],
      impactMetric: "Enacted 4 Custom Platforms Across 12+ Nodes",
      category: "product-rollout"
    },
    {
      id: "undp",
      title: "UNDP Warehouse Layout Setup",
      location: "Ranchi, India",
      scope: "Industrial Layout & Storage Workflows",
      description: "Organized storage grids, inventory flow safeguards, and initial delivery dispatch stations for public-sector supply-chains.",
      bullets: [
        "Standardized bin layouts to reduce picker travel and eliminate retrieval lag.",
        "Created systematic stock count rules to target and prevent spatial errors.",
        "Coordinated with public stakeholders to ensure layout validation compliance."
      ],
      techStack: ["AutoCAD Grid Design", "WMS Configuration", "Safety Frameworks", "SLA Auditing"],
      impactMetric: "Validated Layout & Audit Standards",
      category: "supply-chain"
    },
    {
      id: "flipkart",
      title: "Flipkart Last-Mile Scale-Up Strategy",
      location: "Lucknow, India",
      scope: "Last-Mile Peak Logistics & SLA Control",
      description: "Supervised high-velocity B2C distribution hub networks, ensuring seamless peak-season delivery compliance.",
      bullets: [
        "Coordinated routes and dispatcher shifts to manage double-digit volume swells.",
        "Audited delayed shipments hourly to guarantee delivery commitment rates.",
        "Collaborated with fleet managers to prevent SLA dropouts."
      ],
      techStack: ["TMS Management", "Route Optimization", "SLA Audits", "Peak Logistics Control"],
      impactMetric: "Zero Service Failure Rates under Spike Loads",
      category: "supply-chain"
    },
    {
      id: "montecarlo",
      title: "Monte Carlo B2B Fulfillment Control",
      location: "Ludhiana, India",
      scope: "B2B Logistics & Efficiency Analytics",
      description: "Managed major fashion warehousing and bulk-shipment dispatches, resolving operational friction.",
      bullets: [
        "Restaged pick-bin alignments to remove physical materials handling friction.",
        "Unified dispatch routines to shorten delivery cycle times.",
        "Introduced container tracking workflows to reduce freight packaging waste."
      ],
      techStack: ["WMS Engineering", "Dispatch Syncing", "Fulfillment Dashboards", "Root Cause Analysis"],
      impactMetric: "Trimmed Core Process Cycle Times",
      category: "account-management"
    }
  ];

  // Specific Mockup Data for HoliSuite Application simulator
  const suiteApps = {
    holistart: {
      name: "HoliStart",
      tagline: "Manpower Onboarding & Deboarding Hub",
      liveStatus: "Active Operational Build",
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-800",
      icon: Users,
      stats: [
        { label: "Check-in Lead Time", value: "8.5 Mins", change: "-42% since launch", positive: true },
        { label: "Active Field Workers", value: "1,250+", change: "+15% this month", positive: true },
        { label: "Audit Match Rate", value: "99.8%", change: "Zero compliance issues", positive: true }
      ],
      mockScreen: {
        title: "Staff Enrollment Panel",
        subTitle: "Holisol Manpower Portal",
        steps: [
          { name: "Saurabh Verified", role: "UAT Lead", status: "STABILIZED", color: "bg-emerald-100 text-emerald-800" },
          { name: "Profile Created", role: "Warehouse Associate", status: "VERIFIED", color: "bg-blue-100 text-blue-800" },
          { name: "Deboarding Cycle", role: "Device Return", status: "COMPLETED", color: "bg-slate-100 text-slate-700" }
        ],
        interactiveStat: "12 Node Locations Synchronized",
        insights: "Designed validation algorithms to resolve onboarding friction, eliminating physical registration queues."
      },
      bullets: [
        "Engineered the business flow rules for automatic identity verification.",
        "Reduced manual record handling via automated database synchronization.",
        "Implemented secure deboarding rules to guarantee mobile device and tool handovers."
      ],
      linkedInVerify: "https://in.linkedin.com/in/saurabh-kumar-singh-227805158"
    },
    holisight: {
      name: "HoliSight",
      tagline: "Operational CRM & Pipeline Engine",
      liveStatus: "Active CRM Deployment",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-800",
      icon: TrendingUp,
      stats: [
        { label: "Lead Tracking Resolution", value: "Real-time", change: "Zero delayed updates", positive: true },
        { label: "Onboarding Stage Acc.", value: "96%", change: "Pipeline stage duration -15%", positive: true },
        { label: "Database Refresh Rate", value: "< 2s", change: "Synced with Zoho CRM", positive: true }
      ],
      mockScreen: {
        title: "B2B Enterprise Pipelines",
        subTitle: "Revenue & SLA Tracking Console",
        steps: [
          { name: "Active Leads Evaluator", role: "Zoho Sync", status: "LINKED", color: "bg-indigo-100 text-indigo-800" },
          { name: "UAT Feedback Engine", role: "Requirement Check", status: "OPTIMIZED", color: "bg-purple-100 text-purple-800" },
          { name: "Revenue Forecaster", role: "Financial Projection", status: "ACTIVE", color: "bg-emerald-100 text-emerald-800" }
        ],
        interactiveStat: "$2.4M Active Pipeline Monitored",
        insights: "Translated complex pipeline stages into simple, actionable dashboards for the operations board."
      },
      bullets: [
        "Configured tailored tracking fields for specialized enterprise logistical agreements.",
        "Automated reporting pathways connecting daily sales closures directly to system engineers.",
        "Reconstructed analytical charts to improve corporate visibility over key accounts."
      ],
      linkedInVerify: "https://in.linkedin.com/in/saurabh-kumar-singh-227805158"
    },
    holinet: {
      name: "HoliNet",
      tagline: "Site Compliance & Safety Checklist Portal",
      liveStatus: "Active Compliance Dashboard",
      color: "from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-800",
      icon: ClipboardCheck,
      stats: [
        { label: "Site Audit Score", value: "98.4%", change: "Exceeded internal target (95%)", positive: true },
        { label: "Compliance Tasks Audited", value: "450/week", change: "100% submission compliance", positive: true },
        { label: "Issue Identification Speed", value: "Instant", change: "Automated trigger alerts", positive: true }
      ],
      mockScreen: {
        title: "Compliance Audit Checklist",
        subTitle: "Operational Facility Watch",
        steps: [
          { name: "Fire Safety Rules Check", role: "Weekly Audit", status: "PASSED", color: "bg-emerald-100 text-emerald-800" },
          { name: "Spatial Capacity Threshold", role: "Static Check", status: "NORMAL", color: "bg-blue-100 text-blue-800" },
          { name: "Incident Log Counter", role: "Real-time Tracker", status: "ZERO ERR", color: "bg-slate-100 text-slate-700" }
        ],
        interactiveStat: "100% Compliant Hub Operations",
        insights: "Digitized high-friction safety and inventory processes into robust compliance checklists."
      },
      bullets: [
        "Designed weekly compliance check lists with clear, enforceable photo upload and rating guides.",
        "Maintained facility security profiles for multiple high-throughput warehouse sites.",
        "Optimized audit reviews into unified compliance dashboards for executives."
      ],
      linkedInVerify: "https://in.linkedin.com/in/saurabh-kumar-singh-227805158"
    },
    holiasset: {
      name: "HoliAsset",
      tagline: "Operational Device & IT Infrastructure Suite",
      liveStatus: "Active Asset Ledger",
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-800",
      icon: Smartphone,
      stats: [
        { label: "Tracked Handheld PDAs", value: "350+ Units", change: "Zero inventory variance", positive: true },
        { label: "License Under-utilization", value: "0%", change: "Optimized software spend", positive: true },
        { label: "Maintenance Turnaround", value: "< 24h", change: "Improved equipment uptime", positive: true }
      ],
      mockScreen: {
        title: "Hardware Telemetry Audit",
        subTitle: "IT Operational Devices Ledger",
        steps: [
          { name: "Handheld Scanner G12", role: "Fulfillment Site A", status: "ALLOCATED", color: "bg-blue-100 text-blue-800" },
          { name: "Thermal Printer S4", role: "Fulfillment Site C", status: "STANDBY", color: "bg-amber-100 text-amber-800" },
          { name: "Mobile App License", role: "Saurabh UAT Scope", status: "SECURED", color: "bg-emerald-100 text-emerald-800" }
        ],
        interactiveStat: "Zero Asset Allocation Variances",
        insights: "Established end-to-end device audits to control loss vectors and keep deployment pipelines fully stocked."
      },
      bullets: [
        "Consolidated split device records into a single multi-device ledger system.",
        "Integrated device health reporting directly into routine maintenance loops.",
        "Supported procurement decisions through historical asset lifecycle dashboards."
      ],
      linkedInVerify: "https://in.linkedin.com/in/saurabh-kumar-singh-227805158"
    }
  };

  const SelectedAppIcon = suiteApps[selectedSuiteApp].icon;
  const activeApp = suiteApps[selectedSuiteApp];

  return (
    <div id="projects-section" className="space-y-8 w-full">
      
      {/* Intro Context Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6 text-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        
        <div className="space-y-1 z-10 max-w-3xl">
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 animate-pulse" /> 
            <span>Product Operations Showcase</span>
          </div>
          <h4 className="text-xl font-bold font-display tracking-tight text-white mt-1">Interactive HoliSuite Live App Console</h4>
          <p className="text-sm text-slate-300 leading-relaxed mt-1">
            Explore Saurabh Kumar Singh&apos;s live product implementations for Holisol Logistics via the interactive control panel below. These custom software tools were spearheaded, tested, and implemented directly across regional warehousing nodes.
          </p>
        </div>

        <div className="shrink-0 z-10 no-print">
          <a
            href="https://in.linkedin.com/in/saurabh-kumar-singh-227805158"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white rounded-xl px-4 py-2 text-xs font-semibold font-display shadow-sm transition-all border border-blue-800/65"
          >
            <Linkedin className="w-4 h-4" />
            <span>Verify on LinkedIn</span>
            <ExternalLink className="w-3" />
          </a>
        </div>
      </div>

      {/* INTERACTIVE APPS GRID DASHBOARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        
        {/* Selection Tabs & Info Specs (Left Side) */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold block">1. Select Application Portal</span>
            
            <div className="grid grid-cols-2 gap-2.5">
              {(Object.keys(suiteApps) as Array<keyof typeof suiteApps>).map((key) => {
                const app = suiteApps[key];
                const AppIcon = app.icon;
                const isSelected = selectedSuiteApp === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedSuiteApp(key);
                      setActiveProject("holitools");
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"}`}>
                        <AppIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="text-left">
                        <h5 className="text-xs font-bold font-display">{app.name}</h5>
                        <p className={`text-[9px] font-mono mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-400 group-hover:text-slate-500"}`}>
                          UAT Stabilized
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Business Core & Implementation bullets */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                    {activeApp.tagline}
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-900 mt-2">
                    {activeApp.name} Implementations
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Saurabh formulated explicit user acceptance testing (UAT) scripts, modeled the business validation checkpoints, and aligned high-velocity logistics with digital processing pipelines. Learn more about the core accomplishments:
              </p>

              <div className="space-y-2.5 pt-1">
                {activeApp.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <div className="flex gap-1">
                {projects[0].techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[9px] font-mono px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={activeApp.linkedInVerify}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-xs font-semibold font-display text-blue-900 hover:text-blue-950 flex items-center gap-1.5 transition-colors"
              >
                <span>Verify this project</span>
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Mockup UI Visualizer (Right Side) */}
        <div className="lg:col-span-6 bg-slate-900 text-slate-150 border border-slate-850 rounded-3xl p-5 md:p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
          
          {/* Mock Console Top Bar */}
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">
                  {activeApp.name} LIVE INTERACTIVE SCREEN
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* Simulated Live Portal Body */}
            <div className="space-y-4">
              {/* Fake Dashboard Header */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping" />
                    SYSTEM STABILIZED
                  </span>
                  <h4 className="text-sm font-semibold font-display text-white">{activeApp.mockScreen.title}</h4>
                  <p className="text-[10px] text-slate-400">{activeApp.mockScreen.subTitle}</p>
                </div>
                <div className="p-2.5 bg-slate-900 rounded-lg text-slate-200 border border-slate-800">
                  <SelectedAppIcon className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              {/* Portal Live Status Items */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Process Automation Checkpoints:</span>
                
                {activeApp.mockScreen.steps.map((step, idx) => (
                  <div key={idx} className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-850 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-white block">{step.name}</span>
                        <span className="text-[9px] text-slate-400 font-mono">{step.role}</span>
                      </div>
                    </div>
                    <span className={`text-[8px] font-bold font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${step.color}`}>
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Real-world Operational Insight Accent Box */}
              <div className="bg-blue-950/30 border border-blue-900/35 rounded-xl p-3.5 text-xs text-blue-300 leading-relaxed font-sans">
                <strong className="text-white font-semibold">Analytical Insights:</strong> {activeApp.mockScreen.insights}
              </div>
            </div>
          </div>

          {/* Quick Metrics from App deployment */}
          <div className="mt-6 pt-4 border-t border-slate-800">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold block mb-3">
              Actual Output Stats:
            </span>
            <div className="grid grid-cols-3 gap-3">
              {activeApp.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-850 p-2.5 rounded-xl text-left">
                  <span className="text-[9px] font-mono text-slate-400 block truncate">{stat.label}</span>
                  <span className="text-sm font-semibold font-display text-white mt-0.5 block">{stat.value}</span>
                  <span className="text-[8px] text-emerald-400 font-mono mt-0.5 block truncate">{stat.change}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ADDITIONAL REGIONAL SUPPLY CHAIN PROJECTS */}
      <div className="mt-8">
        <div className="mb-4">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">Additional Achievements</span>
          <h3 className="text-lg font-bold font-display text-slate-900 mt-1">Regional Logistics Controls & Layout Setups</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => p.id !== "holitools").map((project) => (
            <div 
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all text-left"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                  <span>{project.scope}</span>
                  {project.location && (
                    <span className="flex items-center gap-0.5 text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {project.location}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold font-display text-slate-900">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1.5 mt-3 pt-3 border-t border-slate-100">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-md px-2 py-1 block text-center font-semibold mb-3">
                  {project.impactMetric}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[9px] font-mono px-1.5 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-150">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
