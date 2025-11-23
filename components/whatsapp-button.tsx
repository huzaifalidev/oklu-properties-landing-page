"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  const phoneNumber = "+447383863950";
  const message =
    "Hi OKLU Properties, I would like to inquire about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-colors duration-300 z-40 animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  ) : null;
}
