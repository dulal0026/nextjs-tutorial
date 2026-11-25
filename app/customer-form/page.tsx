"use client"

import React, { useState } from "react"


export default function CustomerForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault()
        console.log(
            {
                name,
                email
            }
        )

    }

    return (
        <main className="mx-auto max-w-lg p-6">
            <h1 className="mb-6 text-3xl font-bold">
                Customer Form
            </h1>

            <form action="">
                <div>
                    <label htmlFor="name" className="block mb-2">
                        Customer Name
                    </label>

                    <input
                    id="name"
                     type="text"
                     value={name}
                     onChange={(event) => setName(event?.target.value)}
                     className="w-full rounded-lg border p-3"
                      />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2">
                        Email Address
                    </label>

                    <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-lg border p-3"
                     />
                </div>

                <button type="submit"
                className="rounded-lg bg-green-700 px-6 py-3 mb-200 text-white">
                    Submit
                </button>
            </form>
        </main>

    )
}