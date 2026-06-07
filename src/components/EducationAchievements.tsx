import React from "react";
import { 
  GraduationCap, 
  Award, 
  Zap, 
  BookOpen, 
  Trophy, 
  Target,
  FileCheck
} from "lucide-react";

export default function EducationAchievements() {
  const achievements = [
    {
      title: "Symposium Excellence Winner",
      description: "Secured first place in the Inter-College Technical Symposium for outstanding performance in systems architecture planning and technical presentation models."
    },
    {
      title: "Regional Robotics Lead",
      description: "Earned multiple podium finishes in regional robotics design and automated vehicle programming tournaments."
    },
    {
      title: "Technical Program Secretariat",
      description: "Active designer and coordinator on high-level corporate and academic technical committees."
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
      
      {/* Left Columns: Academic Status */}
      <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="p-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-100">
              <GraduationCap className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-lg font-display font-bold text-slate-900">Academic Background</h3>
              <p className="text-xs text-slate-500 font-mono mt-0.5">ENGINEERING FOUNDATIONS</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start gap-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">DEGREE RECEIVED</span>
                <span className="text-[10px] font-mono bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-bold">2014</span>
              </div>
              <h4 className="text-base font-display font-bold text-slate-900 mt-1">
                B.Tech – Electronics & Communication Engineering
              </h4>
              <p className="text-xs text-slate-600 mt-1 font-display">
                Noida Institute of Engineering & Technology (UPTU), Uttar Pradesh, India
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 font-mono">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Academic Score:</span>
                <span className="font-bold text-slate-900">63.66% Cumulative Aggregate</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: "63.66%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono leading-relaxed flex items-start gap-2 bg-slate-50/50 p-3 rounded-lg border border-dashed">
          <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
          <span>Equipped with systematic theoretical and analytical training covering industrial microcontrollers, embedded logic, and circuits alignment.</span>
        </div>
      </div>

      {/* Right Columns: Achievements Accolades */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex items-center gap-3 mb-6">
          <span className="p-3 bg-amber-50 text-amber-800 rounded-xl border border-amber-100">
            <Trophy className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-lg font-display font-bold text-slate-900">Achievements & Accolades</h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5 font-bold">OUT-OF-THE-BOX DISTINCTIONS</p>
          </div>
        </div>

        <div className="space-y-4">
          {achievements.map((ach, idx) => (
            <div 
              key={idx}
              className="p-4 bg-slate-50 hover:bg-slate-100/60 rounded-xl border border-slate-100 hover:border-slate-200 transition-all flex gap-3 group"
            >
              <div className="mt-1">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white border border-slate-200 text-amber-600 shadow-2xs group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors">
                  <Award className="w-4 h-4" />
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold font-display text-slate-800 tracking-tight group-hover:text-amber-900">
                  {ach.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
