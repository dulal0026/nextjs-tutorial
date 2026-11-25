import type { CustomerFormData, CustomerFormErrors } from "@/types/customer";

export function validateCustomer (
    data: CustomerFormData
):CustomerFormErrors {
    const errors: CustomerFormErrors = {}
    
    if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must contain at least 2 characters";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailPattern.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

   // Basic Bangladesh mobile number format: 01XXXXXXXXX
  const phonePattern = /^01[3-9]\d{8}$/;

  if (!phonePattern.test(data.phone.trim())) {
    errors.phone = "Enter a valid 11-digit Bangladesh mobile number";
  }

  return errors

}