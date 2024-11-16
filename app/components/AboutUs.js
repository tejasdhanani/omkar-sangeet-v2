import { organization } from "@/content/global";

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
          About {organization.name}
        </h2>
        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
          {/* Image Section */}
          <div className="mt-6 lg:order-2 lg:mt-0 lg:w-1/2">
            <img
              src="/gallery/Ongoing Class 4 Omkar Sangeet.jpeg" // Replace with your image path
              alt="Omkar Sangeet Image"
              className="h-full w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <p className="mt-4 text-lg text-gray-700">
              Welcome to Omkar Sangeet Mahavidyalaya, located in Ahmedabad, a
              special place where you can discover the wonderful world of Indian
              classical music. Led by Guruji, Shree Acharya Dhananjay, along
              with a team of experienced teachers, we offer an environment where
              students of all levels can explore the magical melodies and
              rhythms of Indian classical music.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Whether you are just starting out or already have some experience,
              our classes are designed to make learning both easy and fun. At
              Omkar Sangeet Mahavidyalaya, we offer training in singing,
              harmonium, tabla, guitar, and many other instruments or art forms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
