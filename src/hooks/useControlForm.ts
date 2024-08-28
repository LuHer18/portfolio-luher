import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FormLanguage } from '../type';



export const useControlForm = (formLanguage: FormLanguage) => {

    const form = useRef<HTMLFormElement | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
    const [showForm, setShowForm] = useState(true);
    const required = formLanguage.required
    const status = formLanguage.statusMessage

    const validateForm = (): boolean => {
        const name = form.current?.user_name.value.trim();
        const email = form.current?.user_email.value.trim();
        const message = form.current?.message.value.trim();

        let valid = true;
        const newErrors: { [key: string]: string } = {};

        if (!name) {
            valid = false;
            newErrors.name = required.nameRequired;
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            newErrors.email = required.emailRequired;
        }
        if (!message) {
            valid = false;
            newErrors.message = required.messageRequired;
        }

        setErrors(newErrors);
        return valid;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setShowForm(false);

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_iD, import.meta.env.VITE_TEMPLATE_ID, form.current as HTMLFormElement, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    setStatusMessage(status.success);
                    setStatusType('success');
                },
                (error) => {
                    setStatusMessage(status.error);
                    console.log(error)
                    setStatusType('error');
                },
            )
            .finally(() => {

                setTimeout(() => {
                    setStatusMessage(null);
                    setStatusType(null);
                    setShowForm(true);
                    form.current?.reset();
                }, 1000);
            });
    };

    return (
        {
            form,
            errors,
            statusMessage,
            statusType,
            showForm,
            sendEmail
        }
    )
}
