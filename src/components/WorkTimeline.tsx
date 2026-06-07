import React, { useState } from "react";
import { 
  Building2, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Layers, 
  CircleDot,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Bookmark
} from "lucide-react";
import { TimelineItem } from "../types";

export default function WorkTimeline() {
  const [activeTab, setActiveTab] = useState<"all" | "leadership" | "analytics" | "product">("all");

  const timelineData: TimelineItem[] = [
    {
      id: "manager",
      role: "Manager – Business Navigation",
      company: "Holisol Logistics Pvt. Ltd.",
      location: "New Delhi, India",
      period: "Apr 2025 – Present",
      summary: "Directing high-level executive navigation models to balance line-of-business (LOB) performance, capacity, and P&L targets.",
      bullets: [
        "Empower executive leadership decision-making by converting operational, financial, and network capacity data into actionable insights across multiple Lines of Business (LOBs).",
        "Provide rigorous analytics support for high-volume fulfillment center operations and multi-location capacity planning metrics.",
        "Design and manage customized business metrics to streamline long-term tracking and minimize operational gaps."
      ],
      metrics: [
        "Nationwide LOB Navigation Support", 
        "Fulfillment Node Tuning", 
        "Executive Data Translation"
      ],
      category: "leadership"
    },
    {
      id: "asst-mgr",
      role: "Assistant Manager – Business Navigation",
      company: "Holisol Logistics Pvt. Ltd.",
      location: "New Delhi, India",
      period: "Dec 2022 – Mar 2025",
      summary: "Owned vertical P&L analyses, and headed annual planning operations utilizing technical demand models and business telemetry.",
      bullets: [
        "Owned monthly P&L analysis for key business verticals, tracking deviations against initial business plans to highlight financial risks and operational improvement areas.",
        "Supported institutional annual business planning processes through detailed demand forecasting, capacity tracking, and milestone evaluations.",
        "Shifted corporate reporting frameworks from traditional descriptive dashboards to insight-led analytical reviews, directly influencing cost, productivity, and critical SLA decisions.",
        "Acted as the core interface and technical bridge between operations and engineering teams to accurately define data requirements and validate internal enterprise tools."
      ],
      metrics: [
        "P&L Deviation Ownership", 
        "Insight-led Analytical Reviews", 
        "Multi-disciplinary Liaison"
      ],
      category: "analytics"
    },
    {
      id: "ba",
      role: "Business Analyst",
      company: "Holisol Logistics Pvt. Ltd.",
      location: "New Delhi, India",
      period: "Mar 2021 – Oct 2022",
      summary: "Headed requirement mappings, active testing pipelines, and rollouts for native corporate logistics software.",
      bullets: [
        "Led end-to-end requirement mapping, user acceptance testing (UAT) support, and organizational rollout for vital internal software tools including HoliSight (Sales CRM), HoliStart (Manpower onboarding/deboarding), HoliNet (Facility management), and HoliAsset (IT asset management).",
        "Drove structured internal adoption and iteration of BI-based telemetry dashboards across core warehouse fulfillment operations.",
        "Monitored operational data points including capacity utilization, manpower productivity, daily/monthly P&L variances, alongside per-unit realization and cost tracking.",
        "Prepared accurate sales and pipeline forecasts fully aligned with dynamic market data and organizational revenue targets."
      ],
      metrics: [
        "HoliSight, HoliStart, HoliNet, HoliAsset Admin", 
        "UAT Engineering Support", 
        "Fulfillment Adoptions"
      ],
      category: "product"
    },
    {
      id: "specialist",
      role: "Specialist – Business Development (Retail)",
      company: "Holisol Logistics Pvt. Ltd.",
      location: "New Delhi, India",
      period: "Jan 2018 – Feb 2021",
      summary: "Managed flagship retail and B2C/B2B warehousing accounts, maintaining optimal TAT and SLA deliveries.",
      bullets: [
        "Managed key major enterprise accounts including UrbanClap, Hopscotch, and Koovs, securing sustained service deliveries.",
        "Coordinated end-to-end fulfillment workflows across warehouse and logistics nodes to satisfy rigorous client SLA and TAT commitments.",
        "Onboarded and managed strategic B2B and B2C client frameworks across nationwide warehousing, transportation, and last-mile operations.",
        "Owned complete Zoho CRM administration, pipeline analytics, custom dashboard development, and senior management executive reporting.",
        "Conducted systematic market research and business pipeline analyses to uncover new client acquisition and whitespace opportunities."
      ],
      metrics: [
        "Key Accounts (UrbanClap, Hopscotch, Koovs)", 
        "Zoho CRM Admin", 
        "Logistics SLA & TAT Tuning"
      ],
      category: "analytics"
    }
  ];

  const filteredTimeline = timelineData.filter(item => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div id="experience-section" className="space-y-6 w-full">
      {/* Tab Filter */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {[
          { key: "all", label: "Full Journey" },
          { key: "leadership", label: "Executive & Leadership" },
          { key: "analytics", label: "Navigational Analytics" },
          { key: "product", label: "Product & UAT Enablement" }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg font-display transition-all ${
              activeTab === tab.key
                ? "bg-blue-900 text-white shadow-xs"
                : "bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sleek Vertical Timeline Layout */}
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12 py-4">
        {filteredTimeline.map((item, index) => (
          <div key={item.id} className="relative group">
            {/* Pulsing Timeline Dot Locator */}
            <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#F8FAFC]">
              <span className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-300 ${
                item.category === "leadership" ? "bg-amber-500 scale-125" :
                item.category === "product" ? "bg-indigo-600" : "bg-blue-600"
              }`} />
            </span>

            {/* Content Container */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-slate-300">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold font-mono tracking-wider uppercase mb-1.5 ${
                    item.category === "leadership" ? "bg-amber-50 text-amber-800 border border-amber-100" :
                    item.category === "product" ? "bg-indigo-50 text-indigo-800 border border-indigo-100" :
                    "bg-blue-50 text-blue-800 border border-blue-100"
                  }`}>
                    {item.category === "leadership" && <TrendingUp className="w-3 h-3" />}
                    {item.category === "product" && <Cpu className="w-3 h-3" />}
                    {item.category === "analytics" && <Bookmark className="w-3 h-3" />}
                    {item.role}
                  </span>
                  
                  <h3 className="text-xl font-display font-medium text-slate-900 flex items-center gap-2">
                    {item.company}
                  </h3>
                </div>

                <div className="flex flex-col md:items-end text-xs font-mono text-slate-500 gap-1.5">
                  <span className="flex items-center gap-1 font-semibold text-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Position Summary Hook */}
              <p className="text-slate-700 text-sm italic mb-4 leading-relaxed font-sans">
                {item.summary}
              </p>

              {/* Action Bullets */}
              <ul className="mb-6 space-y-3">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start text-xs text-slate-600 leading-relaxed gap-2.5">
                    <span className="mt-1 flex-shrink-0 text-blue-900">•</span>
                    <span>
                      {/* Stylizing metrics inside bullet strings if they exist or just normal output */}
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Featured Highlight Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono flex items-center gap-1 mr-2 mt-1">
                  Key Metrics managed:
                </span>
                {item.metrics.map((metric, metricIdx) => (
                  <span 
                    key={metricIdx} 
                    className="text-[11px] font-mono font-medium px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg border border-slate-200/60"
                  >
                    {metric}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
