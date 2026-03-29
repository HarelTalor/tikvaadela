export default function Footer() {
  const scrollTo = (e: any, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative text-white py-20 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0c0704 0%, #1a0e06 100%)" }}
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }}
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">

          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col items-start space-y-6">
            <a
              href="#hero"
              onClick={(e) => scrollTo(e, "#hero")}
              className="flex items-center gap-4 group transition-transform hover:scale-105"
            >
              <img
                src="/images/ta_logo.png"
                alt="Tikva Adele Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-2xl font-serif font-bold tracking-tight text-white uppercase">
                  TIKVA ADELE
                </span>
                <span
                  className="text-[10px] tracking-[0.25em] font-serif uppercase"
                  style={{ color: "#c9a96e" }}
                >
                  קורס הלחמת ריסים
                </span>
              </div>
            </a>
            <p className="text-white/50 leading-relaxed text-sm">
              הכשרה מקצועית וליווי אישי בדרך לעסק מצליח בתחום הריסים.
              <br />
              הניסיון שלי, ההצלחה שלך.
            </p>
          </div>

          {/* Nav Column */}
          <div>
            <h4
              className="font-bold text-sm tracking-[0.2em] uppercase mb-6"
              style={{ color: "#c9a96e" }}
            >
              ניווט מהיר
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              {[
                ["#hero", "ראשי"],
                ["#why", "למה הקורס הזה?"],
                ["#course", "תוכנית לימודים"],
                ["#about", "אודות"],
                ["#contact", "הרשמה לקורס"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={id}
                    onClick={(e) => scrollTo(e, id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="font-bold text-sm tracking-[0.2em] uppercase mb-6"
              style={{ color: "#c9a96e" }}
            >
              צרי קשר
            </h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>תיקוה אדלה — מומחית ריסים</li>
              <li>ליווי אישי 1:1</li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, "#contact")}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #4a2c10, #8a5a28)",
                    color: "#fff"
                  }}
                >
                  הרשמי עכשיו →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 text-center text-white/30 text-xs border-t"
          style={{ borderColor: "rgba(201,169,110,0.1)" }}
        >
          <p>© {new Date().getFullYear()} TIKVA ADELE. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
