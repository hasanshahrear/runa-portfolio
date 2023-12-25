"use client"

import { AddressCard, Heading } from "@/features/ui";
import { Formik } from "formik";
import { FaEnvelope, FaMap, FaPhoneAlt } from "react-icons/fa";
import { ContactForm } from "./contact-form.component";
import { ContactFormSchema, InitialValue, TContactForm } from "./form.config";

export function Contact() {

    const handleSubmit = (values: TContactForm) => {
        console.log({values})
    }
    return (
        <div className=" bg-white pt-28 pb-44">
            <div className="container grid grid-cols-12 gap-4 lg:gap-10">
                <div className="col-span-12 lg:col-span-4 ">
                    <Heading>Hire Me</Heading>
                    <p>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="mt-12 space-y-6">
                        <AddressCard icon={<FaMap size="30" className="text-link" />} title="Address" desc="Mirpur-2,Dhaka,Bangladesh" />
                        <AddressCard icon={<FaEnvelope  size="30" className="text-link" />} title="Email" desc="rejunahasan143@gmail.com" />
                        <AddressCard icon={<FaPhoneAlt size="30" className="text-link" />} title="Phone" desc="01315028406" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <Formik
                        initialValues={InitialValue}
                        validationSchema={ContactFormSchema}
                        onSubmit={handleSubmit}
                    >
                        <ContactForm />
                    </Formik>
                </div>
            </div>
        </div>
    )
}