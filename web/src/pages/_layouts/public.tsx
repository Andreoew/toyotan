import { Outlet } from "react-router-dom";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useRef } from "react";
// import { Footer } from '@/components/footer'

export function PublicLayout() {
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header onContactClick={handleScrollToContact} />

      <div className="flex flex-1 flex-col gap-4">
        <Outlet />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}
