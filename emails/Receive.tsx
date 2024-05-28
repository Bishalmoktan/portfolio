import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ReceiveEmailProps {
    name: string;
    email: string;
    message: string;
  }
  
  
  export const ReceiveEmail = ({
    name,
    email,
    message
  }: ReceiveEmailProps) => (
    <Html>
      <Head />
      
      <Body style={main}>
        <Container style={container}>
          <Heading as="h2" style={heading}>Hey Bishal,</Heading>
          <Text style={paragraph}>
            You have received new message from your website.
          </Text>
          <Hr style={hr} />

          <Text style={paragraph}>
            Name: {name}
          </Text>
          <Text style={paragraph}>
            Email: {email}
          </Text>
          <Text style={paragraph}>
            Message: {message}
          </Text>
         
          <Hr style={hr} />
         
         
        </Container>
      </Body>
    </Html>
  );
  

  
  export default ReceiveEmail;
  
  const main = {
    backgroundColor: "white",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
 
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "black"
  };

  const heading = {
    color: "black",
  }
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  