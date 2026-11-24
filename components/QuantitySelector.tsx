"use client"
import { useState } from "react";

interface QuantitySelectorProps {
    onQuantityChange?: (quantity: number) => void
}

export default function QuantitySelector({
    onQuantityChange
}: QuantitySelectorProps) {

    const [quantity, setQuantity] = useState(1)

    function updateQuantity(nextQuantity: number){

        if ( nextQuantity < 1) return
        setQuantity(nextQuantity)
        onQuantityChange?.(nextQuantity)
    }

    return (
        <div className="flex items-center gap-4">

            <button
                type = "button"
                disabled = {quantity <= 1}
                onClick = { () => updateQuantity(quantity-1)}
                className = "rounded border px-4 py-2 disabled:opacity-40">
            -
            </button>
            <span className="font-semibold">
                {quantity}
            </span>
              <button
                type = "button"
                disabled = {quantity >= 100}
                onClick = { () => updateQuantity(quantity+1)}
                className = "rounded border px-4 py-2 disabled:opacity-40">
                    +
            </button>

        </div>
    )
}