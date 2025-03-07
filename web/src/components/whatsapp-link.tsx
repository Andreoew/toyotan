import { useEffect, useState } from "react";
import icoWhatsapp from "@/assets/whatsapp.svg";

interface IWhatsAppProps {
  title?: string;
  phone: string;
  height?: string;
  width?: string;
}

export const WhatsAppLink = ({ title = "Clique para falar conosco.", phone, height = "24px", width = "24px" }: IWhatsAppProps) => {
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseLink = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";
    const text = "Ol%C3%A1%20peguei%20seu%20contato%20no%20site,%20pode%20me%20atender?";

    setWhatsappLink(`${baseLink}?phone=${phone}&text=${text}`);
  }, [phone]);

  return (
    <a target="_blank" href={whatsappLink} className="flex items-center justify-center">
      <img
        title={title}
        src={icoWhatsapp}
        className="rounded-full bg-green-500"
        style={{ height, width }}
      />
    </a>
  );
};
