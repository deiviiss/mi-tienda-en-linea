'use server'

export const getPhoneNumberAdmin = async () => {
  try {
    const phoneNumberAdmin = '9811250049'

    if (!phoneNumberAdmin) {
      return { ok: false, message: 'No se pudo recuperar el número', phoneNumberAdmin: null }
    }

    return {
      ok: true,
      message: 'Número recuperado',
      phoneNumberAdmin
    }
  } catch (error) {
    return { ok: false, message: 'No se pudo recuperar el número', phoneNumberAdmin: null }
  }
}
