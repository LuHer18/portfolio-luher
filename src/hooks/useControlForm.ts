import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';



export const useControlForm = () => {

    const form = useRef<HTMLFormElement | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
    const [showForm, setShowForm] = useState(true);

    const validateForm = (): boolean => {
        const name = form.current?.user_name.value.trim();
        const email = form.current?.user_email.value.trim();
        const message = form.current?.message.value.trim();

        let valid = true;
        const newErrors: { [key: string]: string } = {};

        if (!name) {
            valid = false;
            newErrors.name = 'Name is required';
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            newErrors.email = 'Valid email is required';
        }
        if (!message) {
            valid = false;
            newErrors.message = 'Message is required';
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
                    setStatusMessage('Email sent successfully!');
                    setStatusType('success');
                },
                (error) => {
                    setStatusMessage('Failed to send email.');
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
