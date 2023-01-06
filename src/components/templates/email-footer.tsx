import React from "react";
// @ts-ignore
import { Item, Span } from "react-html-email";
import { EmailLink } from "./email-link";

const TextDivider = () => <>&nbsp;·&nbsp;</>;

const EmailFooter = () => {
    return (
        <>
            <Item style={{ height: 20 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                > 
                    Designed by TISSA Technology   
                </Span>
            </Item>
            <Item style={{ height: 5 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    <EmailLink href="https://tissatech.com/">
                        Privacy and General Terms & Conditions
                    </EmailLink>
                    <TextDivider />
                    <EmailLink href="https://tissatech.com/support.php">
                        Help center
                    </EmailLink>
                </Span>
            </Item>
            <Item style={{ height: 45 }} />
        </>
    );
};

export { EmailFooter };
