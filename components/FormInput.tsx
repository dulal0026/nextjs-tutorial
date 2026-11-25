interface FormInputProps {
    id: string,
    label: string
    type: string
    value: string
    placeholder?: string
    error?:string
    required?:boolean
    onChange: (value: string) => void
}

export default function FormInput ({
    id,
    label,
    type,
    value,
    placeholder,
    error,
    required,
    onChange
}: FormInputProps) {
    return(
        <div>
            <label
             htmlFor={id}
             className="mb-2 block text-sm font-medium text-gray-700">
                {label}
            </label>

            <input 
            id = {id}
            name = {id}
            type={type} 
            value={value}
            placeholder={placeholder}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            onChange={(event) => onChange(event.target.value)}
            className={`w-full rounded-lg border px-4 py-3 outline-none focus-ring-2 ${
                 error
                 ?
                 "border-red-500 focus:ring-red-200"
                 : "border-gray-300 focus:ring-green-200"

            }`}
            />

            {
                error && (
                    <p
                    id={`${id}-error`}
                    className="mt-1 text-sm text-red-600"
                    role="alert">
                        {error}
                    </p>
                )
            }
        </div>
    )
}