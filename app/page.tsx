import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-green-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="font-semibold text-green-700">
              Welcome to Tree Shop
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Fresh Groceries,
              <span className="block text-green-700">Delivered to You</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Shop quality groceries and everyday essentials from the comfort of
              your home.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <Link
                href="/products"
                className="inline-block rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
              >
                Explore Products
              </Link>
              <Link
                href="/server-demo-counter"
                className="inline-block rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
              >
                Counter
              </Link>
               <Link
                href="/shop"
                className="inline-block rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800"
              >
                Shop Products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
