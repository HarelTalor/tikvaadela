import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import CourseCurriculum from "@/components/home/CourseCurriculum";
import Results from "@/components/home/Results";
import ReviewsSection from "@/components/home/ReviewsSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />

        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>

        <ScrollReveal>
          <CourseCurriculum />
        </ScrollReveal>

        <ScrollReveal>
          <div id="results">
            <Results />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <ReviewsSection />
        </ScrollReveal>

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>

        {/* Reach Out Section */}
        <section
          id="contact"
          className="relative py-32 overflow-hidden"
          style={{ background: "linear-gradient(140deg, #0e0804 0%, #2a1808 50%, #0e0804 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="w-[600px] h-[400px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(ellipse, rgba(100,65,15,0.35) 0%, transparent 70%)" }}
            />
          </div>

          {/* Gold lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />

          <div className="container px-6 mx-auto relative z-10">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl">
                <div className="text-center mb-10">
                  <span
                    className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
                    style={{ color: "#c9a96e" }}
                  >
                    ✦ הגיע הרגע שלך
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                    מוכנה להתחיל את הדרך שלך?
                  </h2>
                  <p className="text-lg text-white/60 max-w-xl mx-auto">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input 
                        type="text" 
                        placeholder="שם מלא" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a96e] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="מספר טלפון" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#c9a96e] transition-colors"
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full relative items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-xl mt-2 block text-center"
                      style={{
                        background: "linear-gradient(135deg, #4a2c10 0%, #8a5a28 50%, #c9a96e 100%)",
                      }}
                    >
                      דברי איתי
                    </button>
                  </form>

                  {/* Alternatively WhatsApp */}
                  <div className="flex flex-col items-center justify-center text-center space-y-6 md:border-r border-white/10 md:pr-12">
                    <p className="text-white/80 font-medium text-lg">או שפשוט תשלחי לי הודעה בוואטסאפ:</p>
                    <a 
                      href="https://wa.me/972500000000" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                      </svg>
                      שלחי הודעה
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
