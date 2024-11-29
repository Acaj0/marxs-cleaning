"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MessageCircleWithBadge = () => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <MessageCircle size={24} />
      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          width: "16px",
          height: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        1
      </span>
    </div>
  );
};

export default function FloatingPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile); // Open by default on desktop
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg animate-bounce z-50"
        aria-label="Open promo message"
      >
        <MessageCircleWithBadge />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 max-w-sm bg-card text-card-foreground rounded-lg shadow-inner  transition-all duration-300 z-50 ease-in-out">
      <div className="p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          aria-label="Close promo"
        >
          <X size={20} />
        </button>
        <h2 className="text-lg font-bold mb-2 text-[#004B87]">
          🎉 First-Time Client Special! 🎉
        </h2>
        <p className="mb-4">
          Ready to experience top-notch cleaning services? Here's your chance to
          save! 🌟
        </p>
        <p className="mb-4">
          📩 Fill out our contact form today and enjoy an exclusive first-time
          discount on your cleaning service.
        </p>
        <p className="mb-4">
          ✨ Let's make your space sparkle while you save! Don't miss out—book
          now and claim your discount!
        </p>
        <a href="/#contact">
          <Button className="w-full bg-[#004B87]" onClick={() => setIsOpen(false)}>
            🧹 Get My Discount Now
          </Button>
        </a>
      </div>
    </div>
  );
}
