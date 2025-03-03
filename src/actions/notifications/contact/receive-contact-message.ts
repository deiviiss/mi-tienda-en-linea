'use server'

import { getEmailAdmin, sendEmail } from '@/actions'

interface Props {
  userEmail: string
  userName: string
  userMessage?: string
  userPlan: string
}

export const receiveContactMessage = async ({ userEmail, userName, userMessage, userPlan }: Props) => {
  const { emailAdmin } = await getEmailAdmin()
  console.log('emailAdmin', emailAdmin)
  if (!emailAdmin) {
    return {
      ok: false,
      message: 'No se ha configurado el email del administrador'
    }
  }

  await sendEmail({
    email: emailAdmin.email,
    subject: `Mensaje de contacto - ${userName}.`,
    message: `
    <div style="font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f0f0f0; padding: 20px; border-radius: 8px;">
    <h2 style="color: #ffffff;">¡Nuevo mensaje de contacto!</h2>
    <p><strong style="color: #ffffff;">Datos del usuario:</strong></p>
    <ul style="list-style-type: none; padding: 0;">
      <li style="color: #cccccc;"><strong>Nombre:</strong> ${userName}</li>
      <li style="color: #cccccc;"><strong>Email:</strong> ${userEmail}</li>
      <li style="color: #cccccc;"><strong>Plan seleccionado:</strong> ${userPlan || 'Sin elegir'}</li>
      <li style="color: #cccccc;"><strong>Mensaje:</strong> ${userMessage || 'No se proporcionó un mensaje'}</li>
    </ul>
    <hr style="border: 1px solid #333;" />
    <p style="color: #cccccc;">Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
  </div>
    `
  })

  return {
    ok: true,
    message: 'Mensaje enviado'
  }
}
