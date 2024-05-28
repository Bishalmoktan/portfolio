"use server"
import { render } from "@react-email/render";
import nodemailer from "nodemailer"
import HelloTemplate from "@/emails/Hello";
import ReceiveEmail from "@/emails/Receive";

export async function sendMail({email, name, message} : {email: string, name: string, message: string}){
    const { NEXT_PUBLIC_SMTP_PASSWORD, NEXT_PUBLIC_SMTP_EMAIL } = process.env;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: NEXT_PUBLIC_SMTP_EMAIL,
            pass: NEXT_PUBLIC_SMTP_PASSWORD
        }
    })

    try {
        const test = await transporter.verify();
        console.log(test);
    } catch (error) {
        console.log("TEST ERROR: ", error)
        throw new Error('Validation fail');
    }

    const emailHTML = render(HelloTemplate({name}));

    try {
        const options = {
            from: NEXT_PUBLIC_SMTP_EMAIL,
            to: email,
            subject: 'Message has been sent',
            html: emailHTML
        }

        await transporter.sendMail(options);
       
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message)
    }

    const receiveHTML = render(ReceiveEmail({name, email, message}))
    try {
        const options = {
            from: NEXT_PUBLIC_SMTP_EMAIL,
            to: email,
            subject: 'New message from website',
            html: receiveHTML
        }

        await transporter.sendMail(options);
       
    } catch (error: any) {
        console.log(error);
        throw new Error(error.message)
    }
}