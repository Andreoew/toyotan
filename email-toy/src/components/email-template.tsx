import * as React from "react";
import {
  Button,
  Html,
  Container,
  Text,
  Img,
  Link,
} from "@react-email/components";

type FormSchema = {
  name: string;
  email: string;
  phone: string;
  messageText: string;
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "100%",
  margin: "auto",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#000",
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const headerTitleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: "600",
  color: "#fff",
};

const mainStyle: React.CSSProperties = {
  padding: 16,
  backgroundColor: "#f7f7f7",
};

const buttonContainer: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
};

const buttonStyle: React.CSSProperties = {
  minWidth: 224,
  height: 32,
  backgroundColor: "#000",
  textTransform: "uppercase",
  padding: "8px 20px",
  borderRadius: 8,
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};

const footerStyle: React.CSSProperties = {
  marginTop: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const aboutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 20,
  color: "#000"  
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
}

const aboutTextStyle: React.CSSProperties = {
  fontSize: 14,
  marginLeft: 8,
};

const pStyle: React.CSSProperties = {
  fontSize: 16,
};

const logoStyle: React.CSSProperties = {
  borderRadius: "50%",
  overflow: "hidden",
};

const aboutObsStyle: React.CSSProperties = {
  fontSize: 10,
  margin: 8,
};

export function Email({ name, email, phone, messageText }: FormSchema) {
  return (
    <Html lang="pt-BR">
      <Container style={containerStyle}>
        <div style={headerStyle}>
          <Text style={headerTitleStyle}>
            CONTATO DE CLIENTE - TOYOTAN MECÂNICA ESPECIALIZADA
          </Text>
        </div>

        <div style={mainStyle}>
          <Text style={pStyle}>
            <strong>Nome:</strong> {name}
          </Text>
          <Text style={pStyle}>
            <strong>E-mail:</strong> {email}
          </Text>
          <Text style={pStyle}>
            <strong>Telefone:</strong> {phone}
          </Text>
          <Text style={pStyle}>
            <strong>Mensagem:</strong> {messageText}
          </Text>
        </div>

        <div style={buttonContainer}>
          <span style={aboutObsStyle}>
            Verifique se o cliente tem WhatsApp no botão abaixo:
          </span>
          <Button
            style={buttonStyle}
            href={`https://api.whatsapp.com/send?phone=55${phone}`}
          >
            Fale com cliente via WhatsApp
          </Button>
        </div>

        <div style={footerStyle}>
          <div style={logoStyle}>
            <Img
              src="https://www.toyotan.com.br/assets/logo-UnMwaPKa.png"
              width={64}
              height={64}
            />
          </div>
          <Link href="https://www.adss.com.br" style={linkStyle}>
            <div style={aboutStyle}>
              <Img
                src="https://www.adss.com.br/assets/logo.png"
                width={30}
                height={30}
                style={logoStyle}
              />
              <span style={aboutTextStyle}>
                Desenvolvido por: André de Souza
              </span>
            </div>
          </Link>
        </div>
      </Container>
    </Html>
  );
}
