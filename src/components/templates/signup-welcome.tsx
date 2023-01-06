import React from "react";
import ReactEmail, { A, Box, Email, Item, Image, Span } from "react-html-email";
import { EmailFooter } from "./email-footer";

ReactEmail.configStyleValidator({
    platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
    ],
});

type Props = {
    subject: string;
    confirmationUrl: string;
    userName: string;
    orderNumber:string;
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim();

const buttonStyle = {
    margin: "30px",
    fontSize: "18px",
    height: "50px",
    width: "200px",
    borderRadius: "5px",
    border: "none",
    boxShadow: "1px 1px 0px 2px rgba (0,0,0,0.3)",
    background: "rgb(98,44,99)",
    cursor: "pointer"
   };
   const buttonStyle2 =  {
    margin: "30px",
   color:"white",
   textDecoration:"none",
   display:"block",
   paddingBottom:"13px",
   paddingTop:"13px",
   width:"100%",
   background:"darkmagenta",
   textAlign:"center",
   boxShadow: "1px 1px 0px 2px rgba (0,0,0,0.3)",
   borderRadius: "5px"
}

const backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};

const containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%",
};

const linkStyle = {
    color: "white",
    display: "block",
    paddingBottom: "13px",
    paddingTop: "13px",
    textDecoration: "none",
    width: "100%",
    background:"darkmagenta",
    textAlign:"center",   
};

const fluidItemStyle = {
    backgroundColor: "rgb(59, 139, 128)",
    borderRadius: 4,
    cursor: "pointer",
    height: 48,
    textAlign: "center",
    textDecoration: "none",
};

const SignupWelcome = ({
    userName,
    orderNumber,
    subject,
    confirmationUrl
    
}: Props) => (
    <Box align="center" style={containerStyle}>
        <Email align="center" headCSS={emailHeadCSS} title={subject}>
            <Item style={{ height: 45 }} />
             
            <Item style={{ height: 30 }} />
            <Item align="center">
                <Box style={backgroundStyle}>
                    <Item style={{ height: 40 }} />
                    <Item>
                        <Span fontSize={14} fontWeight="bold">Hello {userName}</Span>
                    </Item> 
                    <Item style={{ height: 25 }} />
                    <Item>
                          Thank you for shopping with us. Your order number is {orderNumber}  
                    </Item>
                    <Item style={{ height: 50 }} />
                    <Item>
                          Track your order by clicking following link button.  
                    </Item>
                    <Item style={buttonStyle} >
                        <A href={confirmationUrl} style={linkStyle}>Track </A>
                    </Item>
                     <Item style={{ height: 35 }} />
                </Box>
                <EmailFooter />
            </Item>
        </Email>
    </Box>
);

export { SignupWelcome };
