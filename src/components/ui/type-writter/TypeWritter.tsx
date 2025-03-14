'use client'
import { TypeAnimation } from 'react-type-animation'

export const TypeWritter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Marketing ',
        1500, // wait 2s before replacing "Marketing Digital" with "Ecommerce"
        'Ecommerces ',
        1500,
        'Chatbots ',
        1500,
        'Gestión de Proyectos ',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{
        fontSize: '24px',
        display: 'inline-block',
        marginBottom: '32px'
      }}
      repeat={Infinity}
    />
  )
}
