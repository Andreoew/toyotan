import { WhatsAppLink } from "./whatsapp-link";

interface IWhatsAppActionProps {
  phone: string;
}

const WhatsAppAction: React.FC<IWhatsAppActionProps> = ({ phone }) => {
  return (
    <WhatsAppLink phone={phone} title="Fale conosco agora!" height="24px" width="24px" />
  );
};

export default WhatsAppAction;
