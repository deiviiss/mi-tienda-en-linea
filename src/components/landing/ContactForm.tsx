'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { receiveContactMessage, sendContactMessage } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const ContactForm = () => {
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmittingMessage(true)
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)

    const userName = formData.get('name') as string
    const userEmail = formData.get('email') as string
    const userPhone = formData.get('phone') as string

    await receiveContactMessage({ userEmail, userName, userMessage: userPhone, userPlan: 'Sin elegir' })
    await sendContactMessage({ userEmail, userName })

    toast.success('Mensaje enviado', {
      position: 'top-right',
      duration: 2000
    }
    )

    form.reset()
    setIsSubmittingMessage(false)
  }

  return (
    <section id="contact" className="container mx-auto px-4 pb-20 pt-24 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">¿Listo para empezar?</h2>
      <p className="text-center mb-8">Contáctanos para una demostración o más información</p>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="text" name='name' placeholder="Nombre" className="bg-gray-700 text-white" required />
          <Input type="email" name='email' placeholder="Email" className="bg-gray-700 text-white" required />
          <Input type="tel" name='phone' placeholder="Teléfono" className="bg-gray-700 text-white" required />
          <Button type="submit" disabled={isSubmittingMessage} className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white">
            {isSubmittingMessage ? 'Enviando...' : 'Solicitar demostración'}
          </Button>
        </form>
      </div>
    </section>
  )
}
