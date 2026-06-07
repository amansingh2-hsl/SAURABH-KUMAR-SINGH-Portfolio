import React from "react";
import { 
  Briefcase, 
  MapPin, 
  Terminal, 
  TrendingUp, 
  Users, 
  Cpu 
} from "lucide-react";
import { MetricItem } from "../types";

export default function ExecutiveMetrics() {
  const metrics: MetricItem[] = [
    {
      id: "exp",
      value: "8+",
      suffix: "Years",
      label: "Operational Analytics",
      description: "Proven success translating logistics & tech-enabled data into insights.",
      category: "operations"
    },
    {
      id: "tools",
      value: "4+",
      suffix: "Rollouts",
      label: "Internal Systems",
      description: "Led requirement mapping & UAT for HoliSight, HoliStart, HoliNet, & HoliAsset.",
      category: "product"
    },
    {
      id: "scale",
      value: "100%",
      suffix: "SLA Commit",
      label: "High-Volume Scaling",
      description: "Orchestrated Flipkart Lucknow last-mile and Monte Carlo Ludhiana B2B setups.",
      category: "operations"
    },
    {
      id: "savings",
      value: "Significant",
      suffix: "P&L Impact",
      label: "Margin Optimization",
      description: "Shifted corporate reporting from descriptive to insight-led analytical reviews.",
      category: "finance"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {metrics.map((metric) => (
        <div
          key={metric.id}
          id={`metric-card-${metric.id}`}
          className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group relative overflow-hidden"
        >
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full group-hover:bg-blue-50/50 transition-all duration-300 pointer-events-none -mr-8 -mt-8" />
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {/* Icon / Categorizer */}
              <div className="mb-4 flex items-center justify-between">
                {metric.category === "operations" && (
                  <span className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Briefcase className="w-5 h-5" />
                  </span>
                )}
                {metric.category === "product" && (
                  <span className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Cpu className="w-5 h-5" />
                  </span>
                )}
                {metric.category === "finance" && (
                  <span className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <TrendingUp className="w-5 h-5" />
                  </span>
                )}
                <span className="text-[10px] font-semibold font-mono tracking-widest text-slate-400 uppercase">
                  {metric.category}
                </span>
              </div>

              {/* Huge Numbers */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
                  {metric.value}
                </span>
                <span className="text-base font-semibold text-slate-500 font-display">
                  {metric.suffix}
                </span>
              </div>

              {/* Title / Labels */}
              <h4 className="text-sm font-semibold font-display tracking-tight text-slate-800 mt-2">
                {metric.label}
              </h4>
            </div>

            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {metric.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
