'use server'

import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

const resend = new Resend(resendApiKey)

interface IEmailOptions {
  email: string
  subject: string
  message: string
}

export const sendEmail = async ({ email, subject, message }: IEmailOptions) => {
  // send mail
  try {
    const response = await resend.emails.send({
      from: 'Mi Tienda en línea <no-reply@mitiendaenlina.shop>',
      to: [email],
      subject,
      html: message
    })

    console.log('response', response)

    return {
      ok: true,
      message: 'Correo enviado'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al enviar este correo'
    }
  }
}

// export const sendEmail = async ({ message, subject, email }: IEmailOptions) => {
//   const transporter = nodemailer.createTransport({
//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: smtpEmail,
//       pass: smtpPassword
//     }
//   })

//   // send mail
//   try {
//     await transporter.sendMail(createEmailOptions(email, subject, message))

//     return {
//       ok: true,
//       message: 'Correo enviado'
//     }
//   } catch (error) {
//     return {
//       ok: false,
//       message: 'Error al enviar este correo'
//     }
//   }
// }

// const createEmailOptions = (email: string, subject: string, message: string) => {
//   const emailOptions = {
//     from: `${smtpUser} <${smtpEmail}>`,
//     to: email,
//     subject,
//     html: message
//   }

//   return emailOptions
// }
