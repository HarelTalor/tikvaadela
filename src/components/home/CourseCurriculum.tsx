import { ScrollReveal } from "../shared/ScrollReveal";
import { BookOpen, Camera, HandMetal, HeartHandshake } from "lucide-react";

const modules = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "תיאוריה יסודית",
    desc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף."
  },
  {
    icon: <HandMetal className="w-7 h-7" />,
    title: "פרקטיקה מעשית",
    desc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס."
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: "שיווק וצילום",
    desc: "לורם איפסום דולור סיט אמט קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשק."
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "ליווי עסקי",
    desc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום."
  }
];

export default function CourseCurriculum() {
  return (
    <section
      id="course"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #120a04 0%, #2a1808 60%, #3a2210 100%)" }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(ellipse, rgba(100,70,20,0.6) 0%, transparent 70%)" }}
      />
      
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />

      <div className="container px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-6">
          <div className="text-right space-y-4 max-w-2xl">
            <ScrollReveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#c9a96e" }}>
                תוכנית הלימודים
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                מה תלמדי בקורס?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-white/60 text-lg leading-relaxed">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div
              className="px-8 py-4 rounded-full font-bold text-sm tracking-wider"
              style={{
                background: "rgba(201,169,110,0.10)",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#c9a96e"
              }}
            >
              ✦ קורס 1:1 — למידה ממוקדת בך
            </div>
          </ScrollReveal>
        </div>

        {/* Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group flex items-start gap-6 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(201,169,110,0.15)"
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 p-4 rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,169,110,0.12)", color: "#c9a96e" }}
                >
                  {module.icon}
                </div>

                {/* Text */}
                <div className="text-right flex-grow">
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-white/60 leading-relaxed">{module.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />
    </section>
  );
}
