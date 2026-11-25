"use client"

import React, { useState } from "react"
import FormInput from "@/components/FormInput"
import { validateCustomer } from "@/lib/validation"

import type { CustomerFormData, CustomerFormErrors } from "@/types/customer"

const initialForm: CustomerFormData = {
    fullName: "",
    email: "",
    phone: ""
}

export default function CustomerPage() {

    const [form, setForm] = useState<CustomerFormData>(initialForm)
    const [errors, setErrors] = useState<CustomerFormErrors>({})
    const [submitted, setSubmitted] = useState(false)

    function updateField(
        field: keyof CustomerFormData,
        value: string
    ) {
        setForm((previous) => ({
            ...previous,
            [field]: value
        }))

        setErrors((previous) => ({
            ...previous,
            [field]: undefined
        }))
        setSubmitted(false)
    }

    function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        const validationErrors = validateCustomer(form)

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length > 0) {
            setSubmitted(false)
            return
        }
        setSubmitted(true)

    }

    return(
        <main className="mx-auto max-w-xl px-4 py-12">

            <h1 className="mb-8 text-3xl font-bold">
                Customer Profile
            </h1>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

                 <FormInput
          id="fullName"
          label="Full Name"
          type="text"
          value={form.fullName}
          error={errors.fullName}
          required
          onChange={(value) => updateField("fullName", value)}
        />

        <FormInput
          id="email"
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          required
          onChange={(value) => updateField("email", value)}
        />

        <FormInput
          id="phone"
          label="Mobile Number"
          type="tel"
          value={form.phone}
          placeholder="01XXXXXXXXX"
          error={errors.phone}
          required
          onChange={(value) => updateField("phone", value)}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          Save Profile
        </button>

        { submitted && (
            <p
            role="status"
            className="rounded-lg bg-green-50 p-4 text-green-800">
                Form validated successfuly. No data has been saved yet.

            </p>
        )

        }
        </form>

        </main>
    )
}