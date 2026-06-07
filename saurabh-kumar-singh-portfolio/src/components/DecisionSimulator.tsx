import React, { useState, useMemo } from "react";
import { 
  TrendingUp, 
  Settings, 
  Sliders, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  TrendingDown, 
  Clock, 
  Database,
  ArrowRight
} from "lucide-react";

type PlaybackScenario = "fulfillment" | "holistart" | "pl_variance";

export default function DecisionSimulator() {
  const [activeScenario, setActiveScenario] = useState<PlaybackScenario>("fulfillment");

  // State for Scenario 1: Fulfillment Center Capacity
  const [plannedVolume, setPlannedVolume] = useState<number>(85000); // monthly orders
  const [actualVolume, setActualVolume] = useState<number>(92000);
  const [facilitySize, setFacilitySize] = useState<number>(100000); // sq ft capacity limit 120k orders
  const [manpowerEfficiency, setManpowerEfficiency] = useState<number>(88); // %

  // State for Scenario 2: HoliStart Manpower Optimizer
  const [onboardVolume, setOnboardVolume] = useState<number>(450); // personnel per batch
  const [automationLevel, setAutomationLevel] = useState<number>(60); // % automation
  const [verificationLag, setVerificationLag] = useState<number>(4); // days manual lag

  // State for Scenario 3: Returnable Packaging & P&L Variance
  const [retailAccounts, setRetailAccounts] = useState<number>(3); // e.g. UrbanClap, Hopscotch, Koovs
  const [costPerUnitRaw, setCostPerUnitRaw] = useState<number>(180); // INR per shipment unit
  const [returnableUsage, setReturnableUsage] = useState<number>(45); // % of packaging returnable

  // Calculated values for Scenario 1: Fulfillment Center Capacity
  const scenarioFulfillment = useMemo(() => {
    const deviationPct = ((actualVolume - plannedVolume) / plannedVolume) * 105;
    const capacityUtilization = Math.min(100, (actualVolume / (facilitySize * 1.1)) * 100);
    
    // SLA drops if Actual > Capacity limits, or efficiency is low
    const baseSLA = Math.min(100, manpowerEfficiency * 1.12);
    const overloadFactor = actualVolume > facilitySize ? (actualVolume - facilitySize) / facilitySize : 0;
    const slaCompliance = Math.max(72.5, baseSLA - (overloadFactor * 65));
    
    // Revenue realization
    const unitRate = 45; // INR profit per order
    const extraCostFactor = overloadFactor > 0 ? 1.4 : 1.0;
    const netRevenue = actualVolume * unitRate;
    const operationalCost = plannedVolume * unitRate * 0.72 + (overloadFactor * plannedVolume * unitRate * extraCostFactor);
    const plDeviation = netRevenue - operationalCost;
    
    let recommendation = "";
    let riskStatus: "low" | "medium" | "high" = "low";
    
    if (capacityUtilization > 92 || slaCompliance < 85) {
      riskStatus = "high";
      recommendation = "CRITICAL METRIC EXCEEDED: Schedule immediate multi-location capacity spillover. We recommend shifting 12-15% B2C volume to secondary nodes (e.g. Lucknow or Ludhiana) to sustain the 98% SLA target.";
    } else if (capacityUtilization > 80 || slaCompliance < 92) {
      riskStatus = "medium";
      recommendation = "ALERT: Shift in corporate reporting recommended. Implement automated desk-level productivity reviews. Cross-train 5% floor agents immediately to mitigate high-volume scaling lag.";
    } else {
      riskStatus = "low";
      recommendation = "OPTIMAL OPERATIONS: System is operating within safety thresholds. Current P&L shows excellent realization. Continue monitoring capacity allocation daily via telemetry.";
    }

    return {
      deviationPct,
      capacityUtilization,
      slaCompliance,
      plDeviation,
      riskStatus,
      recommendation
    };
  }, [plannedVolume, actualVolume, facilitySize, manpowerEfficiency]);

  // Calculated values for Scenario 2: HoliStart
  const scenarioHoliStart = useMemo(() => {
    // Lead time decreases with automation, increases with manual verification lag and volume
    const baseLeadTime = 12; // business hours default
    const automationSavings = (automationLevel / 100) * 8.5;
    const lagEffect = (verificationLag * 0.84);
    const volumeImpact = (onboardVolume / 200) * 1.2;
    const finalLeadTime = Math.max(1.5, baseLeadTime - automationSavings + lagEffect + volumeImpact);
    
    // TAT optimization rate %
    const baseTAT = 18; // historical baseline index
    const tatImprovement = Math.max(5, ((baseTAT - finalLeadTime) / baseTAT) * 100);
    
    // Overhead savings (simulated in INR)
    const manualCostPerRecruit = 240; // INR administrative resource cost
    const savedAdminCost = onboardVolume * manualCostPerRecruit * (automationLevel / 100) * 0.88;
    
    let recommendation = "";
    if (finalLeadTime > 8) {
      recommendation = "ACTION REQUIRED: Operational bottleneck detected in manual verification. We need to deploy HoliStart integration scripts to pull Zoho CRM credential metadata directly. This cuts verification lag from 4 days to immediate UAT.";
    } else {
      recommendation = "HIGHLY AGGREGATED: The current setup demonstrates modern systems engineering. Lead times of " + finalLeadTime.toFixed(1) + " hrs represent a top-tier industry standard for manpower logistics.";
    }

    return {
      finalLeadTime,
      tatImprovement,
      savedAdminCost,
      recommendation
    };
  }, [onboardVolume, automationLevel, verificationLag]);

  // Calculated values for Scenario 3: P&L Cost Control
  const scenarioPL = useMemo(() => {
    // Returnable return rate decreases per-unit packaging costs
    const basePackagingCost = costPerUnitRaw * retailAccounts * 4200; // base monthly shipment count index
    const returnableSavingsPct = returnableUsage * 0.62; // Return rate is optimized at 62% efficiency
    const optimizedPackagingCost = basePackagingCost * (1 - (returnableSavingsPct / 100));
    const netSavings = basePackagingCost - optimizedPackagingCost;

    const marginImprovement = (netSavings / basePackagingCost) * 100;
    
    let recommendation = "";
    if (returnableUsage < 35) {
      recommendation = "P&L OPTIMIZATION AREA: Encourage adoption of Returnable Packaging modules for high-frequency accounts (e.g., Hopscotch logistics). Increasing returnable workflows to 50% yields an instant ~15% net Margin Improvement.";
    } else {
      recommendation = "ROBUST PERFORMANCE: Returnable supply chain is functioning effectively. Recommend introducing regional collection hubs inside local nodes (ranchi, lucknow) to maximize recycle loop speeds.";
    }

    return {
      basePackagingCost,
      optimizedPackagingCost,
      netSavings,
      marginImprovement,
      recommendation
    };
  }, [retailAccounts, costPerUnitRaw, returnableUsage]);

  return (
    <div id="decision-hub" className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 md:p-8 shadow-xl relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4 border-b border-slate-800 pb-6 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono tracking-wider bg-blue-900/40 text-blue-300 border border-blue-800/50 mb-2 uppercase">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Decision-Ready Interactive Engine
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight">
            Corporate Decision Model Simulation
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Saurabh specializes in mathematical validation and analytics tracking. Test his predictive modeling philosophy by toggling operational real-world scenarios.
          </p>
        </div>

        {/* Core Controls Tabs */}
        <div className="flex flex-col sm:flex-row p-1 bg-slate-955 rounded-xl border border-slate-800 w-full lg:w-auto relative z-10">
          <button
            onClick={() => setActiveScenario("fulfillment")}
            className={`px-4 py-2.5 rounded-lg text-xs font-medium font-display transition-all duration-200 text-center flex-1 ${
              activeScenario === "fulfillment"
                ? "bg-blue-600 text-white shadow-md font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            Fulfillment Logistics
          </button>
          <button
            onClick={() => setActiveScenario("holistart")}
            className={`px-4 py-2.5 rounded-lg text-xs font-medium font-display transition-all duration-200 text-center flex-1 ${
              activeScenario === "holistart"
                ? "bg-blue-600 text-white shadow-md font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            HoliStart Onboarding
          </button>
          <button
            onClick={() => setActiveScenario("pl_variance")}
            className={`px-4 py-2.5 rounded-lg text-xs font-medium font-display transition-all duration-200 text-center flex-1 ${
              activeScenario === "pl_variance"
                ? "bg-blue-600 text-white shadow-md font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            P&L Cost Optimization
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Hand: Sliders to Control State */}
        <div className="lg:col-span-5 bg-slate-950/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <Sliders className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold font-mono tracking-wider text-slate-300 uppercase">Interactive Variables</span>
            </div>

            {/* SCENARIO 1 CONTROLS */}
            {activeScenario === "fulfillment" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">PLANNED DEMAND:</span>
                    <span className="text-blue-300 font-semibold">{plannedVolume.toLocaleString()} Orders</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="120000"
                    step="5000"
                    value={plannedVolume}
                    onChange={(e) => setPlannedVolume(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>50,000</span>
                    <span>120,000 max</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">ACTUAL DEMAND (PEAKING):</span>
                    <span className="text-blue-300 font-semibold">{actualVolume.toLocaleString()} Orders</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="150000"
                    step="5000"
                    value={actualVolume}
                    onChange={(e) => setActualVolume(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>50,000</span>
                    <span>150,000 peak</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">FACILITY AREA CAPACITY:</span>
                    <span className="text-blue-300 font-semibold">{facilitySize.toLocaleString()} Sq Ft</span>
                  </div>
                  <input
                    type="range"
                    min="60000"
                    max="120000"
                    step="5000"
                    value={facilitySize}
                    onChange={(e) => setFacilitySize(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>60k Sq Ft</span>
                    <span>120k Sq Ft</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">AGENT FLOOR EFFICIENCY:</span>
                    <span className="text-blue-300 font-semibold">{manpowerEfficiency}%</span>
                  </div>
                  <input
                    type="range"
                    min="65"
                    max="100"
                    step="1"
                    value={manpowerEfficiency}
                    onChange={(e) => setManpowerEfficiency(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>65% Base</span>
                    <span>100% Top-tier</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCENARIO 2 CONTROLS */}
            {activeScenario === "holistart" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">DAILY BATCH RECRUITS:</span>
                    <span className="text-green-300 font-semibold">{onboardVolume} Personnel</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="50"
                    value={onboardVolume}
                    onChange={(e) => setOnboardVolume(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>100 min</span>
                    <span>1,000 max</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">HOLISTART UAT AUTOMATION:</span>
                    <span className="text-green-300 font-semibold">{automationLevel}% Automated</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={automationLevel}
                    onChange={(e) => setAutomationLevel(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>10% Manual</span>
                    <span>100% Full Sync</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">DOC VERIFICATION LAG:</span>
                    <span className="text-green-300 font-semibold">{verificationLag} Days</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="7"
                    step="1"
                    value={verificationLag}
                    onChange={(e) => setVerificationLag(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>0 Days (Instant API)</span>
                    <span>7 Days (Postal/Manual)</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCENARIO 3 CONTROLS */}
            {activeScenario === "pl_variance" && (
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">RETAIL B2B/B2C ACCOUNTS:</span>
                    <span className="text-indigo-300 font-semibold">{retailAccounts} Major LOBs</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={retailAccounts}
                    onChange={(e) => setRetailAccounts(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>1 client</span>
                    <span>6 enterprise accounts</span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 italic font-display">
                    Simulates accounts like UrbanClap, Hopscotch, Koovs.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">BASE LOGISTICS UNIT RATE:</span>
                    <span className="text-indigo-300 font-semibold">₹ {costPerUnitRaw} INR</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="300"
                    step="10"
                    value={costPerUnitRaw}
                    onChange={(e) => setCostPerUnitRaw(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>₹ 100</span>
                    <span>₹ 300</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">RETURNABLE CUSTOM UTILIZATION:</span>
                    <span className="text-indigo-300 font-semibold">{returnableUsage}% Return Value</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    step="5"
                    value={returnableUsage}
                    onChange={(e) => setReturnableUsage(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                    <span>5% single-use</span>
                    <span>95% recycled flow</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-900/60">
            <div className="flex items-start gap-2.5">
              <Database className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
                *Calculation is executed entirely in real-time. Formulas map to logistical capacity metrics and actual cost equations validated by business navigation reports.
              </p>
            </div>
          </div>
        </div>

        {/* Right Hand: Structured Live Insights */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">

          {/* Dynamic Statistics Block */}
          {activeScenario === "fulfillment" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Capacity Utilization</span>
                  <div className="text-3xl font-display font-medium text-white mt-1">
                    {scenarioFulfillment.capacityUtilization.toFixed(1)}%
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${scenarioFulfillment.capacityUtilization > 90 ? "bg-red-500" : scenarioFulfillment.capacityUtilization > 75 ? "bg-amber-500" : "bg-blue-500"}`} 
                      style={{ width: `${scenarioFulfillment.capacityUtilization}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>Utilization rate</span>
                    <span>{scenarioFulfillment.capacityUtilization > 90 ? "Limit Reached" : "Safe Zone"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Calculated SLA Compliance</span>
                  <div className="text-3xl font-display font-medium text-white mt-1">
                    {scenarioFulfillment.slaCompliance.toFixed(1)}%
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${scenarioFulfillment.slaCompliance < 85 ? "bg-red-500" : scenarioFulfillment.slaCompliance < 92 ? "bg-amber-500" : "bg-emerald-500"}`} 
                      style={{ width: `${scenarioFulfillment.slaCompliance}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>98% target line</span>
                    <span className={scenarioFulfillment.slaCompliance < 95 ? "text-amber-400 font-semibold" : "text-emerald-400 font-semibold"}>
                      {scenarioFulfillment.slaCompliance < 95 ? "At Risk" : "Excellent"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl md:col-span-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">P&L Profit Variance (Net realization)</span>
                    <div className="text-3xl font-display font-medium text-white mt-1 flex items-baseline gap-1">
                      ₹ {scenarioFulfillment.plDeviation.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      <span className="text-xs font-mono text-slate-400 font-normal">INR / Mo</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    {scenarioFulfillment.plDeviation > 0 ? (
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <TrendingDown className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                </div>
                <div className="flex gap-2 items-center text-[10.5px] mt-3 font-mono text-slate-400 border-t border-slate-800/60 pt-2">
                  <span>Planned Realization deviation:</span>
                  <span className={`font-semibold ${scenarioFulfillment.deviationPct >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                    {scenarioFulfillment.deviationPct >= 0 ? "+" : ""}{scenarioFulfillment.deviationPct.toFixed(1)}% Volume Divergence
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeScenario === "holistart" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Avg Onboarding lead time</span>
                  <div className="text-3xl font-display font-medium text-white mt-1 flex items-baseline gap-1">
                    {scenarioHoliStart.finalLeadTime.toFixed(1)} <span className="text-sm font-mono text-slate-400 font-normal">Hours</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Target lead time: &lt; 6 hrs</span>
                </div>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase font-semibold">TAT Optimization Gain</span>
                  <div className="text-3xl font-display font-medium text-emerald-400 mt-1">
                    {scenarioHoliStart.tatImprovement.toFixed(1)}%
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-400" 
                      style={{ width: `${Math.min(100, Math.max(5, scenarioHoliStart.tatImprovement))}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl md:col-span-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Administrative Cost Reductions</span>
                    <div className="text-2xl md:text-3xl font-display font-medium text-emerald-400 mt-1">
                      ₹ {scenarioHoliStart.savedAdminCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      <span className="text-xs font-mono text-slate-400 font-normal block sm:inline sm:ml-1">saved per month via HoliStart</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-900/20 text-emerald-400 border border-emerald-800/50">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeScenario === "pl_variance" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Operational Outlay (Baseline)</span>
                  <div className="text-2xl font-display font-medium text-slate-300 mt-1">
                    ₹ {scenarioPL.basePackagingCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 font-mono mt-1">Initial projection with 100% single-use material setup</p>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Optimized P&L Costs</span>
                  <div className="text-2xl font-display font-medium text-blue-400 mt-1">
                    ₹ {scenarioPL.optimizedPackagingCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <p className="text-[10px] text-blue-300/60 font-mono mt-1">With Returnable packaging cycles optimized</p>
              </div>

              <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl md:col-span-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-slate-400 text-xs font-mono tracking-wide uppercase">Calculated Margin Improvements</span>
                    <div className="text-3xl font-display font-medium text-white mt-1">
                      {scenarioPL.marginImprovement.toFixed(1)}% <span className="text-emerald-400 text-lg font-mono font-bold block sm:inline sm:ml-2">({`₹ ${scenarioPL.netSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} saved`})</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-800/50">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Expert System Comments / Actionable Recommendation Box */}
          <div className="bg-blue-950/30 border border-blue-800/40 rounded-xl p-5 shadow-inner">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-blue-400 font-bold uppercase">Saurabh&apos;s Recommendation & Insights:</span>
            </div>
            
            <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-mono">
              {activeScenario === "fulfillment" && scenarioFulfillment.recommendation}
              {activeScenario === "holistart" && scenarioHoliStart.recommendation}
              {activeScenario === "pl_variance" && scenarioPL.recommendation}
            </p>

            <div className="mt-4 pt-3 border-t border-blue-900/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Primary Core Strength Applied:</span>
              <span className="text-blue-300 font-semibold uppercase">
                {activeScenario === "fulfillment" && "Multi-Location Capacity Planning"}
                {activeScenario === "holistart" && "UAT Support & Agile Rollout"}
                {activeScenario === "pl_variance" && "P&L Track Analytics"}
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
