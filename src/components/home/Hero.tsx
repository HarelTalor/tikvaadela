import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      dir="rtl"
    >
      {/* ══════════ AURORA BACKGROUND ══════════ */}
      <div className="absolute inset-0" style={{ background: "#faf5ee" }} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(235,195,145,0.6) 0%, transparent 62%)", filter: "blur(65px)" }} />
        <div style={{ position: "absolute", top: "25%", left: "-14%", width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(215,170,105,0.42) 0%, transparent 65%)", filter: "blur(72px)" }} />
        <div style={{ position: "absolute", bottom: "-6%", left: "50%", transform: "translateX(-50%)", width: 620, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(225,190,148,0.48) 0%, transparent 65%)", filter: "blur(85px)" }} />
        <div style={{ position: "absolute", top: "55%", right: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(205,165,110,0.32) 0%, transparent 65%)", filter: "blur(55px)" }} />
      </div>
      {/* Diagonal stripes */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03, backgroundImage: `repeating-linear-gradient(-52deg, #7a5010 0, #7a5010 1px, transparent 1px, transparent 22px)` }} />
      {/* Ring arcs */}
      <div className="absolute pointer-events-none" style={{ top: -170, left: -130, width: 540, height: 540, borderRadius: "50%", border: "1.5px solid rgba(180,140,70,0.14)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: -110, right: -90, width: 400, height: 400, borderRadius: "50%", border: "1.5px solid rgba(180,140,70,0.12)" }} />
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 2, background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.65), transparent)" }} />

      {/* ══════════ CONTENT ══════════ */}
      <div className="relative z-10 flex flex-col items-center text-center w-full" style={{ paddingTop: "calc(4.5rem + 56px)" }}>

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-5" style={{ background: "rgba(160,110,45,0.09)", border: "1px solid rgba(160,110,45,0.2)", color: "#7a5220", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
          <span style={{ color: "#c9a96e", fontSize: "0.85rem" }}>✦</span>
          תוצאות מדברות בשם עצמן
        </div>

        {/* Headline */}
        <h1 className="font-serif font-bold leading-[1.08] px-5" style={{ color: "#1a0f06", fontSize: "clamp(2rem, 7.5vw, 3.4rem)", marginBottom: "1.5rem" }}>
          כאן מתחיל{" "}
          <span style={{ background: "linear-gradient(100deg, #5c3510 0%, #b8893e 55%, #deb85a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            העסק שלך
          </span>
          <br />בתחום הריסים
        </h1>
      </div>

      {/* ══════════ FIGURE + BUTTON OVERLAP ZONE ══════════
          Layout: A relative container.
          - Figure is positioned at the top, taking most of the height.
          - Button is anchored at the bottom of the figure, overlapping the figure's lower portion.
          - Button has HIGHER z-index so it appears "in front of" the figure bottom.
          - This creates the effect: figure pops UP and OUT of the button.
      ══════════ */}
      <div
        className="relative z-10 flex flex-col items-center w-full flex-1"
        style={{ marginTop: "0.5rem" }}
      >
        {/* ── Figure (portrait) — ABOVE button in position ── */}
        <div
          className="relative flex justify-center"
          style={{
            zIndex: 10,
            marginBottom: "-3.5rem", // extends DOWN into the button zone
          }}
        >
          {/* Glow behind figure */}
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "120%", height: "50%", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,160,80,0.22) 0%, transparent 70%)", filter: "blur(30px)", pointerEvents: "none", zIndex: -1 }} />

          {/* Tall thin pill portrait */}
          <div style={{
            width: "clamp(165px, 43vw, 248px)",
            borderRadius: "9999px 9999px 28px 28px",
            overflow: "hidden",
            boxShadow: "0 12px 50px rgba(100,60,10,0.16), 0 0 0 1.5px rgba(210,175,110,0.2)"
          }}>
            <img
              src="/images/natali_portrait.png"
              alt="תיקוה אדלה"
              draggable="false"
              className="select-none w-full block"
              style={{ height: "clamp(320px, 56vw, 500px)", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
        </div>

        {/* ── CTA Button — BELOW figure but z-index ON TOP ── */}
        <div className="relative flex justify-center px-5" style={{ zIndex: 30 }}>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex flex-col items-center justify-center gap-0.5 rounded-full text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] leading-tight"
            style={{
              padding: "0.6rem 3rem", // Very tight vertical padding to match the user's red box
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              background: "linear-gradient(135deg, rgba(74,44,16,0.95) 0%, rgba(138,90,40,0.95) 100%)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 8px 32px rgba(60,30,10,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
              border: "1px solid rgba(201,169,110,0.2)"
            }}
          >
            <span className="font-medium text-white/90 tracking-wide text-sm md:text-base mt-1">התחילי את דרכך</span>
            <span className="font-serif font-bold tracking-wider" style={{ color: "#fceaaa", fontSize: "1.4em", textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
              כעצמאית
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce shrink-0 text-white/70 mb-1" />
          </button>


        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute z-50 flex flex-col items-center gap-1 cursor-pointer select-none" style={{ bottom: 12, left: "50%", transform: "translateX(-50%)", opacity: 0.38 }} onClick={() => scrollTo("#why")}>
        <span style={{ color: "#7a5230", fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase", fontWeight: 600 }}>גלי להמשך</span>
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: "#9a7450" }} />
      </div>
    </section>
  );
}
