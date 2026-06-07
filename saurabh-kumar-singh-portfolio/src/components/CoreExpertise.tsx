import React, { useState } from "react";
import { 
  Database, 
  BarChart3, 
  Settings, 
  Network, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Workflow,
  Cpu
} from "lucide-react";

export default function CoreExpertise() {
  const [selectedFocus, setSelectedFocus] = useState<"all" | "technical" | "operations">("all");

  const technicalSkills = [
    { name: "SQL Data Modeling", description: "Query construction, cohort partitioning, and relational database tracking." },
    { name: "Python Scripting", description: "Automating operational pipelines and predictive analytics/demand modeling." },
    { name: "Power BI & Tableau", description: "Creating insight-led BI-based telemetry dashboards for core warehouse reviews." },
    { name: "MS Excel (Advanced)", description: "High-fidelity annual business planning, milestone evaluation spreadsheets, & forecasting." },
    { name: "CRM Administration", description: "Robust Zoho CRM setup, pipeline analytics, custom dashboard development." },
    { name: "Logistics Software Maps", description: "In-depth familiarity handling core WMS, TMS, DMS, and LMS tools." }
  ];

  const operationsSkills = [
    { name: "P&L Analysis", description: "Tracking deviations against initial business plans to highlight financial opportunities." },
    { name: "Multi-Location Planning", description: "Designing network capacity guidelines and load balancing for high-volume nodes." },
    { name: "Requirement Mapping & UAT", description: "Acting as technical bridge from operations to engineering to validate enterprise software." },
    { name: "SLA & TAT Optimization", description: "Translating telemetry trends into workflows satisfying client commitments & zero drops." },
    { name: "Demand Forecasting", description: "Structuring predictive planning frameworks based on cyclical B2B/B2C market trends." },
    { name: "Process Engineering", description: "Structuring inbound-outbound warehouse layouts and stabilization parameters." }
  ];

  return (
    <div id="expertise-section" className="space-y-8 w-full">
      {/* Visual Navigation Filter */}
      <div className="flex flex-wrap justify-between items-center gap-4 bg-slate-100 p-2 rounded-xl max-w-lg">
        <button
          onClick={() => setSelectedFocus("all")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold font-display transition-all ${
            selectedFocus === "all"
              ? "bg-white text-slate-900 shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          All Domains
        </button>
        <button
          onClick={() => setSelectedFocus("technical")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold font-display transition-all ${
            selectedFocus === "technical"
              ? "bg-blue-900 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Technical Analytics
        </button>
        <button
          onClick={() => setSelectedFocus("operations")}
          className={`px-4 py-2 rounded-lg text-xs font-semibold font-display transition-all ${
            selectedFocus === "operations"
              ? "bg-blue-900 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Business & Product Operations
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Technical Analytics */}
        {((selectedFocus === "all" || selectedFocus === "technical")) && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs relative transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100">
                <Database className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">Technical Analytics & Platforms</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">THE MODERN DATA HANDSHAKE</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Equipped with deep engineering exposure, Saurabh leverages modern data-structures to automate logistics operations. He shifts corporate structures from descriptive views to actionable telemetry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all group"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 text-blue-600">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold font-display text-slate-800 group-hover:text-blue-900">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">SQL</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Python</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Power BI</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Tableau</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Zoho CRM</span>
            </div>
          </div>
        )}

        {/* Right Side: Operations & Enablements */}
        {((selectedFocus === "all" || selectedFocus === "operations")) && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xs relative transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-indigo-50 text-indigo-900 rounded-xl border border-indigo-100">
                <Workflow className="w-6 h-6" />
              </span>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">Business & Product Operations</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">OPERATIONAL ARCHITECTURE & UAT</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Expertise mapping user journeys directly to structural layouts, optimizing complex supply chain nodes, coordinating across cross-functional engineering teams, and ensuring seamless rollout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {operationsSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/20 transition-all group"
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0 text-indigo-600">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold font-display text-slate-800 group-hover:text-indigo-900">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">P&L Management</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Demand Forecast</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">SLA Controls</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Capacity Mapping</span>
              <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">Process Eng</span>
            </div>
          </div>
        )}

      </div>

      {/* Core Strengths Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white rounded-xl p-5 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono text-blue-400 font-bold tracking-widest uppercase">CORE STRENGTHS</span>
          <h4 className="text-base font-display font-medium text-slate-100 mt-0.5">
            Cross-Functional Stakeholder Coordination & Data Ownership
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Problem Solving", "Agile Product Delivery", "Technical Communication"].map((strength, index) => (
            <span key={index} className="text-xs bg-slate-800/80 text-blue-200 px-3 py-1.5 rounded-lg border border-slate-700 font-mono">
              {strength}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
