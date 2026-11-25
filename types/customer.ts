export interface CustomerFormData {
    fullName: string
    email: string
    phone: string
}

export type CustomerFormErrors = Partial<
Record<keyof CustomerFormData, string>
>