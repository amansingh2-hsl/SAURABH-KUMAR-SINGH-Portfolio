import React, { useState, useEffect } from "react";
import { 
  Briefcase, 
  Database, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Linkedin, 
  ChevronUp, 
  Maximize2, 
  FileText, 
  Compass, 
  Activity, 
  Award, 
  BookOpen, 
  ExternalLink,
  Lock,
  X,
  Check,
  Copy,
  Eye,
  Printer
} from "lucide-react";

import ExecutiveMetrics from "./components/ExecutiveMetrics";
import CoreExpertise from "./components/CoreExpertise";
import DecisionSimulator from "./components/DecisionSimulator";
import WorkTimeline from "./components/WorkTimeline";
import SystemEnablement from "./components/SystemEnablement";
import EducationAchievements from "./components/EducationAchievements";
import ConnectSection from "./components/ConnectSection";

export default function App() {
  const saurabhPortrait = "/saurabh_headshot.png";
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCVPreviewModal, setShowCVPreviewModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Show back to top button
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerBrowserPrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900 leading-normal">
      
      {/* Printable CSS override styling to format excellent clean papers */}
      <style>{`
        @media print {
          nav, button, .print-btn, #decision-hub, .no-print {
            display: none !important;
          }
          body {
            background-color: #FFFFFF !important;
            color: #000000 !important;
            font-size: 11pt !important;
          }
          .print-full-width {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>

      {/* Progress Top Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-blue-900 z-50 transition-all duration-75 no-print" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-40 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-blue-900 rounded-full animate-pulse" />
            <h1 className="text-base font-display font-bold text-slate-900 tracking-tight">Saurabh K. Singh</h1>
            <span className="text-slate-300">|</span>
            <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-widest hidden xl:inline">Decision Support & Analytical Operations</span>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600 font-display">
            <button onClick={() => scrollToSection("metric-head")} className="hover:text-blue-900 transition-colors">KPI Metrics</button>
            <button onClick={() => scrollToSection("expertise-head")} className="hover:text-blue-900 transition-colors">Core Expertise</button>
            <button onClick={() => scrollToSection("decision-head")} className="hover:text-blue-900 transition-colors">Decision Simulator</button>
            <button onClick={() => scrollToSection("experience-head")} className="hover:text-blue-900 transition-colors">Operations Timeline</button>
            <button onClick={() => scrollToSection("projects-head")} className="hover:text-blue-900 transition-colors">Systems Enablement</button>
            <button onClick={() => scrollToSection("education-head")} className="hover:text-blue-900 transition-colors">Academics</button>
          </div>

          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.linkedin.com/in/saurabh-kumar-singh-227805158"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-[#0A66C2] px-3 py-1.5 rounded-lg text-xs font-bold font-display transition-all border border-slate-200 shadow-2xs cursor-pointer"
              title="Verified Connection Portal"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <button 
              onClick={() => setShowCVPreviewModal(true)}
              className="print-btn hidden md:inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-all border border-slate-200 cursor-pointer"
              title="Interactive On-Screen CV Preview"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              <span>Preview CV</span>
            </button>
            <button 
              onClick={() => scrollToSection("connect-head")}
              className="bg-blue-900 hover:bg-blue-950 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold font-display transition-all shadow-2xs"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-16 print-full-width">
        
        {/* SECTION 1: HERO - Catchy headline, brief 2-sentence hook, print / downloadable links & social anchors */}
        <section id="hero-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-200/60 pb-12 print-full-width">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-wider bg-blue-900 text-white uppercase">
                  Data executive profile
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-mono text-slate-500 font-semibold uppercase">8+ Years Experience</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-slate-900 tracking-tight leading-tight">
                Data-Driven Insights.<br />
                <span className="text-blue-900 font-bold">Decision-Focused Navigation.</span>
              </h2>

              <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed font-sans mt-3">
                Operations & Product Enablement Analyst specializing in translating multi-layered logistical workflows into decision-ready executive insight reviews. Proven success designing automated tracking systems, coordinating P&L variances, and steering software UAT rollouts across high-volume fulfillment center operations.
              </p>
            </div>

            {/* Quick anchors & links */}
            <div className="flex flex-wrap items-center gap-4 no-print">
              <a 
                href="mailto:saurabhkrs92@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-5 py-2.5 rounded-lg text-xs font-semibold font-display transition-all shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>Contact via email</span>
              </a>

              <button 
                onClick={() => setShowCVPreviewModal(true)}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-blue-900 hover:text-blue-950 border border-blue-200 px-5 py-2.5 rounded-lg text-xs font-semibold font-display transition-all shadow-2xs cursor-pointer"
                title="Open Interactive CV Previewer"
              >
                <Eye className="w-4 h-4 text-blue-900" />
                <span>Preview & Print CV</span>
              </button>

              <button 
                onClick={triggerBrowserPrint}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 px-5 py-2.5 rounded-lg text-xs font-semibold font-display transition-all shadow-2xs cursor-pointer"
                title="Print customized high-fidelity CV layout"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Direct Print Portfolio</span>
              </button>

              <div className="flex flex-wrap items-center gap-2.5 border-l border-slate-200 pl-4 py-1">
                <a 
                  href="mailto:saurabhkrs92@gmail.com"
                  className="p-2 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-900 rounded-lg border border-slate-200 transition-colors"
                  title="Direct mail address"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href="tel:+917619001522"
                  className="p-2 bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-900 rounded-lg border border-slate-200 transition-colors"
                  title="Direct telephone"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saurabh-kumar-singh-227805158"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white hover:bg-emerald-50/50 text-[#0A66C2] rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 text-xs font-bold font-display"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="hidden sm:inline font-bold">LinkedIn Profile</span>
                </a>
                <span className="text-slate-300">/</span>
                <span className="text-xs font-mono text-slate-500 font-medium">New Delhi, IN</span>
              </div>
            </div>

            {/* Print layout summary header (ONLY visible during page prints) */}
            <div className="hidden print:block border-t border-b border-slate-300 py-4 mt-6">
              <div className="grid grid-cols-3 gap-4 text-[10pt] font-mono">
                <div><strong>Email:</strong> saurabhkrs92@gmail.com</div>
                <div><strong>Phones:</strong> +91-7619001522, +91-9205134017</div>
                <div><strong>Location:</strong> New Delhi, India</div>
              </div>
            </div>
          </div>

          {/* Right Hero Corner Graphic: Sleek premium geometric summary card & Portrait */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/60 rounded-full blur-2xl pointer-events-none -mr-4 -mt-4" />
            
            <div className="space-y-6">
              {/* Saurabh's Confirmed Profile Portrait */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="relative shrink-0">
                  <img 
                    src={saurabhPortrait} 
                    alt="Saurabh Kumar Singh" 
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-900/10 shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" title="Active Operational Profile" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-slate-900">Saurabh Kumar Singh</h3>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Manager – Business Navigation</p>
                  <div className="text-[9px] text-slate-400 font-sans mt-0.5 font-medium">Holisol Logistics Pvt. Ltd.</div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">Core Strengths Directory</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="p-2 bg-blue-50 text-blue-900 rounded-lg border border-blue-100 shrink-0">
                      <Compass className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Business Navigation</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">P&L risk tracking, strategic demand forecasting, annual evaluations.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 bg-indigo-50 text-indigo-900 rounded-lg border border-indigo-100 shrink-0">
                      <Database className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">UAT Systems Engineering</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">Liaison from developers to floor operators (HoliStart/HoliSight suites).</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100 shrink-0">
                      <Activity className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">Telemetry Tracking</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">BI Dashboard conversions (Tableau, Power BI, custom KPIs).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION 2: KEY METRICS TICKER - counter highlights pulling major points from CV */}
        <section id="metric-head" className="space-y-6 pt-4 print-full-width">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Key Performance Highlights</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">INSTANT DATA-DRIVEN AUTHORITY</span>
          </div>
          <ExecutiveMetrics />
        </section>

        {/* SECTION 3: CORE EXPERTISE GRID - separates Technical Analytics from Operations */}
        <section id="expertise-head" className="space-y-6 pt-6 print-full-width">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Functional & Technical Expertise</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">BRIDGING TECH & OPERATIONAL MODALITIES</span>
          </div>
          <CoreExpertise />
        </section>

        {/* SECTION 3.5 (WOW FACTOR): INTERACTIVE SIMULATION ENGINE */}
        <section id="decision-head" className="space-y-6 pt-6 no-print">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-medium text-slate-900 flex items-center gap-1.5">
              <span>Interactive Navigation Simulator</span>
              <span className="text-[10px] font-bold font-mono tracking-wide bg-blue-100 text-blue-900 px-2 py-0.5 rounded uppercase">Exclusive Showcase</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">EVALUATE HIGH-VOLUME CRITERIA FORMULAS</span>
          </div>
          <DecisionSimulator />
        </section>

        {/* SECTION 4: INTERACTIVE TIMELINE (EXPERIENCE) */}
        <section id="experience-head" className="space-y-6 pt-6 print-full-width">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Professional Experience Summary</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">8+ YEARS DECREASING LOGISTICAL BOTTLENECKS</span>
          </div>
          <WorkTimeline />
        </section>

        {/* SECTION 5: FEATURED PROJECTS & ENABLEMENTS */}
        <section id="projects-head" className="space-y-6 pt-6 print-full-width">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Featured Projects & Systems Engineering</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">SYSTEMS ARCHITECTURES & SCALE-UP OPERATIONS</span>
          </div>
          <SystemEnablement />
        </section>

        {/* SECTION 6: EDUCATION & ACHIEVEMENTS */}
        <section id="education-head" className="space-y-6 pt-6 print-full-width page-break">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Education & Academic Distinctions</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">FORMAL GRADUATION COHORTS & HONORS</span>
          </div>
          <EducationAchievements />
        </section>

        {/* SECTION 7: CONTACT / CALL TO ACTION */}
        <section id="connect-head" className="space-y-6 pt-6 print-full-width">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 border-b border-slate-200/65 pb-3">
            <h3 className="text-lg font-display font-bold text-slate-900">Get In Touch</h3>
            <span className="text-xs text-slate-500 font-mono tracking-wider">DISPATCH SECURE RECRUITMENT TICKETS</span>
          </div>
          <ConnectSection />
        </section>

      </main>

      {/* Footer Area */}
      <footer className="bg-white border-t border-slate-200/80 py-8 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© 2026 Saurabh Kumar Singh. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-blue-900 transition-colors flex items-center gap-1 font-semibold">
              <ChevronUp className="w-4 h-4" />
              <span>Back to Top (Profile)</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Sticky Quick Back-to-Top node (Floating sidebar widget) */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 bg-blue-900 hover:bg-blue-950 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-fadeIn no-print"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Dynamic CV Document Preview Modal (Accessible, Clean, Print-Ready) */}
      {showCVPreviewModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fadeIn font-sans no-print text-left">
          <div className="bg-slate-50 border border-slate-250 rounded-3xl p-4 md:p-6 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            {/* Sticky Actions Top Bar */}
            <div className="flex flex-wrap justify-between items-center bg-white border border-slate-200 p-4 rounded-2xl gap-3 sticky top-0 z-20 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-blue-50 text-blue-900 rounded-lg border border-blue-100">
                  <FileText className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold font-display text-slate-900">Executive CV Document Preview</h3>
                  <p className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest mt-0.5">Saurabh Kumar Singh Portfolio</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    setShowCVPreviewModal(false);
                    triggerBrowserPrint();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 text-white hover:bg-blue-950 rounded-xl text-xs font-bold font-display transition-all cursor-pointer shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Portfolio CV</span>
                </button>
                <a 
                  href="/Saurabh_Kumar_Singh_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-250 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl text-xs font-semibold font-display transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Reference</span>
                </a>
                <button 
                  onClick={() => setShowCVPreviewModal(false)}
                  className="p-1.5 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-700 cursor-pointer border border-slate-200"
                  title="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Paper CV Sheet Container */}
            <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-2xl mx-auto shadow-sm max-w-2xl select-text text-slate-800 space-y-6 text-xs leading-relaxed font-sans scroll-smooth">
              
              {/* Document Header */}
              <div className="border-b border-slate-300 pb-5 text-center space-y-2">
                <h4 className="text-2xl font-bold font-display text-slate-900 uppercase tracking-tight">Saurabh Kumar Singh</h4>
                <p className="text-[11px] font-mono font-bold text-blue-900 uppercase tracking-widest">Manager – Business Navigation  |  Logistical Analytics specialist</p>
                
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[10px] text-slate-500 font-medium font-mono pt-1">
                  <span>saurabhkrs92@gmail.com</span>
                  <span>•</span>
                  <span>+91-7619001522, +91-9205134017</span>
                  <span>•</span>
                  <span>New Delhi, India</span>
                </div>
              </div>

              {/* Personal Summary */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 text-[10px] font-mono">Professional Overview</h5>
                <p className="text-slate-600 leading-relaxed pt-1">
                  Analytic and process-driven Logistics Analyst and Business Navigator with **over 8 years of operational experience** in logistics efficiency, P&L variance controls, and CRM systems tracking. Skilled at designing unified performance reporting tools (HoliSuite platforms) and implementing UAT scripts to resolve capacity bottlenecks across multi-node distribution operations.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <h5 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 text-[10px] font-mono">Chronological Work Experience</h5>
                
                <div className="space-y-4 pt-1">
                  {/* Job 1 */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>Manager – Business Navigation</span>
                      <span className="font-mono text-[9px] font-medium text-slate-500">April 2025 - Present</span>
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-slate-500">Holisol Logistics Pvt. Ltd., New Delhi</div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 mt-1">
                      <li>Model multi-variable warehouse capacity forecasting grids matching daily peak dispatch SLAs.</li>
                      <li>Drive annual performance evaluations, coordinating monthly business reviews and P&L variances.</li>
                      <li>Configure automated reporting pipelines, converting raw operations telemetry into executive BI dashboards.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>Assistant Manager – Business Navigation</span>
                      <span className="font-mono text-[9px] font-medium text-slate-500">Dec 2022 - March 2025</span>
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-slate-500">Holisol Logistics Pvt. Ltd., New Delhi</div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 mt-1">
                      <li>Led live UAT scripts and end-user training for custom warehouse apps (HoliStart/HoliSight suites).</li>
                      <li>Monitored key operational cost metrics, decreasing system execution lag from days to real-time.</li>
                      <li>Unified Zoho CRM pipeline stages for multi-regional enterprise accounts logs.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>Business Analyst – Business Navigation</span>
                      <span className="font-mono text-[9px] font-medium text-slate-500">March 2021 - Oct 2022</span>
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-slate-500">Holisol Logistics Pvt. Ltd., New Delhi</div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 mt-1">
                      <li>Formulated operational capacity metrics and safety audit compliance check modules.</li>
                      <li>Streamlined device/IT handheld ledger records, trimming hardware audit discrepancies.</li>
                    </ul>
                  </div>

                  {/* Job 4 */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-900">
                      <span>Specialist – Operations & Support</span>
                      <span className="font-mono text-[9px] font-medium text-slate-500">Jan 2018 - Feb 2021</span>
                    </div>
                    <div className="text-[10px] font-mono font-semibold text-slate-500">Holisol Logistics Pvt. Ltd.</div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-slate-600 mt-1">
                      <li>Resolved facility capacity incidents and supported daily carrier dispatch compliance logs.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Major Projects & Technical Enablement */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 text-[10px] font-mono">Core Tech Assets & Projects</h5>
                <p className="text-slate-600 pt-1">
                  **HoliSuite Platforms**: Tested, rolled out, and optimized **HoliStart** (Worker Onboarding Engine, -42% lead times), **HoliSight** (CRM Pipelines), **HoliNet** (98% audit compliance), and **HoliAsset** (IT handheld tracker, zero asset variance) across 12 node facilities.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {["SQL", "Google Data Studio", "Power BI", "Tableau", "User Acceptance Testing (UAT)", "Zoho CRM", "Variance Analysis", "AutoCAD Layouts"].map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 font-mono text-[8px] rounded uppercase font-semibold">{item}</span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1.5">
                <h5 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 text-[10px] font-mono">Academic Background</h5>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">B.Tech in Electronics & Communication Engineering (ECE)</span>
                    <span className="font-mono text-[9px] text-slate-500">2010 - 2014</span>
                  </div>
                  <div className="text-[10px] text-slate-600 -mt-1.5">Noida Institute of Engineering & Technology, Greater Noida (63.66%)</div>
                  
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-800">Senior Secondary School Examination (CBSE Class XII)</span>
                    <span className="font-mono text-[9px] text-slate-500">2010</span>
                  </div>
                  <div className="text-[10px] text-slate-600 -mt-1.5">Rose Land School, Patna (64.8%)</div>

                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-slate-800">Secondary School Examination (CBSE Class X)</span>
                    <span className="font-mono text-[9px] text-slate-500">2008</span>
                  </div>
                  <div className="text-[10px] text-slate-600 -mt-1.5">Rose Land School, Patna (69.8%)</div>
                </div>
              </div>

            </div>

            {/* Bottom Note */}
            <div className="text-center text-[10px] text-slate-400 font-mono pt-2 leading-relaxed">
              *The portfolio uses adaptive print media CSS. When printing or exporting to PDF, the system automatically formats this profile.*
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
