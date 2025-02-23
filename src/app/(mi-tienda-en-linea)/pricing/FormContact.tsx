'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { receiveContactMessage, sendContactMessage } from '@/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface IProps {
  pricingPlans: Array<{ slug: string, title: string }>
  selectedPlan: string
  setSelectedPlan: (value: string) => void
}

export const FormContact = ({ selectedPlan, setSelectedPlan, pricingPlans }: IProps) => {
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    setIsSubmittingMessage(true)

    //! CHANGE CASTING TO ZOD
    const userEmail = formData.get('email') as string
    const userName = formData.get('name') as string
    const userMessage = formData.get('message') as string
    const userSelectedPlan = formData.get('plan') as string

    await receiveContactMessage({ userEmail, userName, userMessage, userPlan: userSelectedPlan })
    await sendContactMessage({ userEmail, userName })

    toast.success('Mensaje enviado', {
      position: 'top-right',
      duration: 2000
    })

    form.reset()
    setIsSubmittingMessage(false)
  }

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg mt-10" id='contact'>
      <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
          <Input name='name' placeholder="Tu nombre" className="bg-gray-700 text-white" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <Input name='email' type="email" placeholder="tu@email.com" className="bg-gray-700 text-white" required />
        </div>
        <div>
          <label htmlFor="plan" className="block text-sm font-medium mb-1">Plan de interés</label>
          <select name='plan' value={selectedPlan}
            onChange={(e) => { setSelectedPlan(e.target.value) }} className="w-full bg-gray-700 text-white rounded-md border-gray-600 py-1">
            <option value="">Selecciona un plan</option>
            {pricingPlans.map((plan) => (
              <option key={plan.slug} value={plan.slug}>{plan.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
          <Textarea name='message' id="message" placeholder="Tu mensaje" className="bg-gray-700 text-white" />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 rounded-full"
          disabled={isSubmittingMessage}
        >
          {isSubmittingMessage ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </form>
    </div>
  )
}
