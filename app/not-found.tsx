import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="text-6xl font-extrabold text-sl-red">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-sl-gray-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-sl-gray-600">
          Sorry, we could not find the page you are looking for. It may have been
          moved or no longer exists.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-sl-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-sl-red-dark"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
