import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-white relative">
      <div className="grain-overlay" />
      <Header />
      <main className="flex-1 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
