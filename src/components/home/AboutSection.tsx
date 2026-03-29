import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl rounded-full group-hover:opacity-70 transition-opacity" />
              <img 
                src="/images/natali_portrait.png" 
                alt="תיקוה אדלה - מומחית להלחמת ריסים"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl z-10"
              />
              {/* Brand badge replacing the old logo */}
              <div className="absolute -bottom-6 -right-6 z-20 hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-2xl shadow-xl border"
                style={{
                  background: "linear-gradient(135deg, #4a2c10 0%, #8a5a28 100%)",
                  borderColor: "rgba(201,169,110,0.3)"
                }}
              >
                <span className="text-white font-serif font-bold text-xs tracking-wide text-center leading-tight px-2">TIKVA<br />ADELE</span>
                <span className="text-white/70 text-[8px] tracking-widest uppercase mt-1">ריסים</span>
              </div>
            </div>

          <div className="max-w-xl text-right">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">קצת עליי</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary leading-tight mb-8">
              תיקוה אדלה <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8 decoration-wavy">המומחית שלך לריסים</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p className="font-bold text-primary">
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף.
              </p>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשק. עמחליף סחטיר בלובק. תצטנפל בלינדו למרקל אס לקרולו צשחמי צש בליא.
              </p>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשק. עמחליף סחטיר בלובק.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold gradient-brand shadow-lg" asChild>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  בואי נדבר
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
