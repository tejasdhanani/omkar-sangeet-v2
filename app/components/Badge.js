import Image from "next/image";
import Link from "next/link";

export const BadgeSection = () => {
  return (
    <section className="bg-red-100 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6 px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Proudly Authorized by
        </h2>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link href="https://abgmvm.org" target="_blank" className="underline">
            <Image
              src="/abgmvm.jpg"
              alt="ABGMVM Logo"
              width={150}
              height={150}
              className="bg-transparent mix-blend-multiply"
            />
          </Link>
          <p className="max-w-3xl text-lg text-gray-700">
            We are proud to be affiliated with the{" "}
            <Link
              href="https://abgmvm.org"
              target="_blank"
              className="underline"
            >
              Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (ABGMVM)
            </Link>
            , a government recognized organization promoting Indian classical
            music and arts education worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
