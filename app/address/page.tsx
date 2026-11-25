"use client"

import { useState } from "react"
import FormInput from "@/components/FormInput"
import type { AddressFormData } from "@/types/address"

const initialAddress: AddressFormData = {
    recipientName: "",
    phone: "",
    addressLine: "",
    city: "",
    postalCode: "",
    isDefault: false
}

type AddressErrors = Partial<
  Record<keyof AddressFormData, string>
>;

export default function AddressPage() {

     const [address, setAddress] =
    useState<AddressFormData>(initialAddress);

  const [errors, setErrors] = useState<AddressErrors>({});
  const [submitted, setSubmitted] = useState(false);

   function updateField<K extends keyof AddressFormData>(
    field: K,
    value: AddressFormData[K]
  ) {
    setAddress((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: AddressErrors = {};

    if (!address.recipientName.trim()) {
      nextErrors.recipientName = "Recipient name is required";
    }

    if (!/^01[3-9]\d{8}$/.test(address.phone.trim())) {
      nextErrors.phone = "Enter a valid mobile number";
    }

    if (!address.addressLine.trim()) {
      nextErrors.addressLine = "Street address is required";
    }

    if (!address.city.trim()) {
      nextErrors.city = "City is required";
    }

    if (!/^\d{4}$/.test(address.postalCode.trim())) {
      nextErrors.postalCode = "Enter a valid 4-digit postal code";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Demo only: no API request or database write.
    setSubmitted(true);
  }
    return(
         <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">
        Delivery Address
      </h1>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <FormInput
          id="recipientName"
          label="Recipient Name"
          type="text"
          value={address.recipientName}
          error={errors.recipientName}
          onChange={(value) => updateField("recipientName", value)}
        />

        <FormInput
          id="phone"
          label="Mobile Number"
          type="tel"
          value={address.phone}
          error={errors.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <FormInput
          id="addressLine"
          label="Street Address"
          type="text"
          value={address.addressLine}
          error={errors.addressLine}
          onChange={(value) => updateField("addressLine", value)}
        />

        <FormInput
          id="city"
          label="City"
          type="text"
          value={address.city}
          error={errors.city}
          onChange={(value) => updateField("city", value)}
        />

        <FormInput
          id="postalCode"
          label="Postal Code"
          type="text"
          value={address.postalCode}
          error={errors.postalCode}
          onChange={(value) => updateField("postalCode", value)}
        />

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={address.isDefault}
            onChange={(event) =>
              updateField("isDefault", event.target.checked)
            }
          />
          <span>Set as default address</span>
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-700 px-6 py-3 text-white"
        >
          Save Address
        </button>

        {submitted && (
          <p role="status" className="rounded-lg bg-green-50 p-4 text-green-800">
            Address validated successfully. No data has been saved yet.
          </p>
        )}
      </form>
    </main>
    )
}