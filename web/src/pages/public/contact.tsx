import { ContactForm } from "@/components/form-contact";

export function Contact() {
  return (
    <div className="flex md:h-[500px] items-center justify-center">
      <div className="w-full  p-5">
        <h2 className="mb-5 text-center text-5xl">Contato</h2>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
