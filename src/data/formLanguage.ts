import { FormLanguage } from "../type"

export const spanishForm: FormLanguage = {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    required: {
        nameRequired: "El nombre es requerido",
        emailRequired: "Un email valido es requerido",
        messageRequired: "Se requiere un mensaje"
    },
    statusMessage: {
        success: "Mensaje enviado correctamente",
        error: "No se pudo enviar el mensaje"
    },
    send: "Enviar"

}

export const englishform: FormLanguage = {
    name: "Name",
    email: "Email",
    message: "Message",
    required: {
        nameRequired: "Name is required",
        emailRequired: "Valid email is required",
        messageRequired: "Message is required"
    },
    statusMessage: {
        success: "Email sent successfully!",
        error: "Failed to send email."
    },
    send: "Send"

}