import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Send, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Linkedin
} from "lucide-react";

export default function ConnectSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Custom Recruiters Mail Synthesizer inputs
  const [recruiterName, setRecruiterName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [intent, setIntent] = useState<"recruitment" | "consulting" | "feedback">("recruitment");

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Generate dynamic mailto link
  const mailtoLink = React.useMemo(() => {
    const email = "saurabhkrs92@gmail.com";
    let subject = "";
    let body = "";

    if (intent === "recruitment") {
      subject = `Hiring Inquiry: Data & Operations Role ${companyName ? `at ${companyName}` : ""}`;
      body = `Hi Saurabh,\n\nI saw your Decision-Focused Navigation Portfolio and was impressed with your 8+ years experience guiding P&L, UAT systems and logistics pipelines.\n\nWe would like to coordinate a convenient call to discuss opportunities ${companyName ? `at ${companyName}` : ""}.\n\nBest regards,\n${recruiterName || "[Your Name]"}`;
    } else if (intent === "consulting") {
      subject = "Inquiry: Capacity Planning or Telemetry Integration Consultancy";
      body = `Hi Saurabh,\n\nWe are looking to optimize our multi-location fulfillment flows or setup modern telemetry trackers, and would value your analytic consultation.\n\nLet us know your availability for a exploratory discussion.\n\nBest,\n${recruiterName || "[Your Company Representative]"}`;
    } else {
      subject = "Feedback on your Portfolio Decision Simulator";
      body = `Hi Saurabh,\n\nI just tested your Interactive Simulation dashboard on your web portfolio. Splendid layout design and logical metrics!\n\nLet's connect in New Delhi or virtually.\n\nRegards,\n${recruiterName || "[Your Name]"}`;
    }

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [recruiterName, companyName, intent]);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden w-full">
      
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Side: Contact Anchors & Sticky copy-links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider bg-blue-50 text-blue-800 border border-blue-100 uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Professional Access
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-900 tracking-tight">
              Establish Direct Connection
            </h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Based in New Delhi, India. Open to high-impact roles, full-time product navigation opportunities, and operational telemetry consulting pipelines.
            </p>
          </div>

          <div className="space-y-4">
            {/* Primary Email */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white text-blue-900 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">EMAIL ADDRESS</span>
                  <a href="mailto:saurabhkrs92@gmail.com" className="text-xs md:text-sm font-semibold text-slate-800 hover:text-blue-900 transition-colors">
                    saurabhkrs92@gmail.com
                  </a>
                </div>
              </div>
              <button 
                onClick={() => copyToClipboard("saurabhkrs92@gmail.com", "email")}
                className="p-2 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-xl border border-slate-200 transition-colors"
                title="Copy Address"
              >
                {copiedText === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Line 1 */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white text-blue-950 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">PRIMARY CARRIER PHONE</span>
                  <a href="tel:+917619001522" className="text-xs md:text-sm font-semibold text-slate-800 hover:text-blue-900 transition-colors">
                    +91-7619001522
                  </a>
                </div>
              </div>
              <button 
                onClick={() => copyToClipboard("+91-7619001522", "phone1")}
                className="p-2 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-xl border border-slate-200 transition-colors"
                title="Copy Number"
              >
                {copiedText === "phone1" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct Line 2 */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white text-blue-950 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-bold">SECONDARY TELEPHONE</span>
                  <a href="tel:+919205134017" className="text-xs md:text-sm font-semibold text-slate-800 hover:text-blue-900 transition-colors">
                    +91-9205134017
                  </a>
                </div>
              </div>
              <button 
                onClick={() => copyToClipboard("+91-9205134017", "phone2")}
                className="p-2 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-700 rounded-xl border border-slate-200 transition-colors"
                title="Copy Number"
              >
                {copiedText === "phone2" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Geographical Locator */}
            <div className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="p-2.5 bg-white text-slate-600 rounded-xl border border-slate-200 mr-3">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-slate-400 block font-bold">CURRENT LOCATION</span>
                <span className="text-sm font-semibold text-slate-800">New Delhi, India</span>
              </div>
            </div>

            {/* Verified LinkedIn Tile */}
            <a 
              href="https://www.linkedin.com/in/saurabh-kumar-singh-227805158"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 bg-blue-50/50 hover:bg-blue-50 rounded-2xl border border-blue-100 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-white text-[#0A66C2] rounded-xl border border-blue-200 shadow-3xs group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-blue-700/80 block font-bold">VERIFIED NETWORK</span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    Saurabh Kumar Singh
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-medium text-blue-700 hover:underline flex items-center gap-1">
                <span>Connect</span>
                <ExternalLink className="w-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Recruiter Pitch / Custom Note Composer */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-150 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-blue-900" />
              <span className="text-xs font-bold font-mono text-slate-500 uppercase tracking-wider">Recruiter Custom Outreach Synthesizer</span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Optimize your outreach. Use the indicators below to draft a contextual inquiry, and the tool will automatically format a structured mail client request for Saurabh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              {[
                { type: "recruitment", label: "Full-Time Role" },
                { type: "consulting", label: "Process Consulting" },
                { type: "feedback", label: "Just Feedback" }
              ].map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setIntent(opt.type as any)}
                  className={`px-3 py-2 border rounded-xl text-xs font-semibold font-display transition-all ${
                    intent === opt.type 
                      ? "bg-blue-900 border-blue-900 text-white shadow-xs" 
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 text-left"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-[10px] font-mono text-slate-400 font-bold block mb-1">YOUR NAME</label>
                <input 
                  type="text" 
                  value={recruiterName} 
                  onChange={(e) => setRecruiterName(e.target.value)} 
                  placeholder="e.g. Aman Singh"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono text-slate-400 font-bold block mb-1">ENTERPRISE COMPANY</label>
                <input 
                  type="text" 
                  value={companyName} 
                  onChange={(e) => setCompanyName(e.target.value)} 
                  placeholder="e.g. Holisol Logistics"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-blue-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200/60">
            <a 
              href={mailtoLink}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-sm font-semibold font-display rounded-xl text-white bg-blue-900 hover:bg-blue-950 shadow-xs transition-all text-center"
            >
              <Send className="w-4 h-4" />
              <span>Synthesize & Dispatch Email Direct</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[10px] text-slate-400 text-center block mt-2 font-mono">
              Launches your local native mail utility (Outlook, Apple Mail, Gmail) instantly.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
