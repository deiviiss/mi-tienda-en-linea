'use server'

import { sendEmail } from '@/actions'

interface Props {
  userEmail: string
  userName: string
}

export const sendContactMessage = async ({ userEmail, userName }: Props) => {
  console.log('sendContactMessage', userEmail, userName)
  await sendEmail({
    email: userEmail,
    subject: 'Mensaje recibido',
    message: `<div style="font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f0f0f0; padding: 20px; border-radius: 8px;">
    <h2 style="color: #ffffff;">¡Mensaje recibido!</h2>
    <p style="color: #cccccc; font-size: 16px;">
      Hemos recibido tu mensaje, <strong>${userName}</strong>. Pronto nos pondremos en contacto contigo.
    </p>
    <p style="color: #cccccc; font-size: 14px;">
      Si tienes alguna duda adicional, no dudes en escribirnos.
    </p>
    <footer style="margin-top: 20px; font-size: 8px; color: #888888; text-align:center">
      &copy; 2024 Mi Tienda en Línea. Todos los derechos reservados.
    </footer>
  </div>`
  })

  return {
    ok: true,
    message: 'Mensaje enviado'
  }
}
