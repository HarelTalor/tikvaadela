import { ScrollReveal } from "../shared/ScrollReveal";
import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "בניית עתיד כלכלי",
    desc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף.",
    number: "01"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "ביטחון מקצועי",
    desc: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום.",
    number: "02"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "חופש ועצמאות",
    desc: "לורם איפסום דולור סיט אמט קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשק.",
    number: "03"
  }
];

export default function ProblemSection() {
  return (
    <section id="why" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #fdf8f5 0%, #f9f0eb 100%)" }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, #f5d0c0 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #e8c0d0 0%, transparent 70%)" }} />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <ScrollReveal>
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: "#6b4220" }}
            >
              למה לבחור בקורס הזה?
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight" style={{ color: "#2B1F1C" }}>
              בואי לבנות לעצמך עתיד
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
              לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשק. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לקרולו צשחמי צש בליא.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div
                className="group relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-3 cursor-default"
                style={{
                  background: "#fff",
                  boxShadow: "0 4px 30px rgba(139,50,82,0.08)",
                  border: "1px solid rgba(139,50,82,0.08)"
                }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 left-6 text-6xl font-serif font-bold opacity-5 select-none"
                  style={{ color: "#6b4220" }}
                >
                  {benefit.number}
                </span>

                {/* Icon */}
                <div
                  className="inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(100,60,20,0.08)", color: "#6b4220" }}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#2B1F1C" }}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>

                {/* Bottom accent bar on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, #4a2c10, #8a5a28, #c9a96e)" }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
