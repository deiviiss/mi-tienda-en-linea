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
    await resend.emails.send({
      from: 'Mi Tienda en línea <onboarding@resend.dev>',
      to: [email],
      subject,
      html: message
    })

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
