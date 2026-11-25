export default function Loading() {
    return (
        <main className="mx-auto max-w-7xl px-4 py-10">
            <h1 className="mb-8 text-3xl font-bold">
                Tree Shop Products
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    [1, 2, 3, 4, 5, 6].map((item) =>(
                       <div
                        key={item}
                        className="h-56 animate-pulse rounded-xl bg-gray-200">
                       </div>
                    ))
                }

            </div>
        </main>
    )
}
