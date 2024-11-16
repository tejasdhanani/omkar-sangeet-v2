export default function CoursesPage() {
  const courses = [
    { name: "Harmonium", imageSrc: "/harmonium.jpg", opacity: 60 },
    { name: "Vocals", imageSrc: "/vocals.jpg", opacity: 55 },
    { name: "Kathak", imageSrc: "/kathak.jpg", opacity: 50 },
    { name: "Tabla", imageSrc: "/tabla.jpg", opacity: 50 },
    { name: "Keyboard", imageSrc: "/piano.jpg", opacity: 50 },
    { name: "Sugam", imageSrc: "/sugam.jpg", opacity: 50 },
    // Add more courses here
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Courses
        </h2>
        <div className="text-center text-xl">2 x 45 mins Weekly Classes</div>
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={course.imageSrc}
                alt={course.name}
                className="h-64 w-full object-cover"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black`}
                style={{
                  backgroundColor:
                    "rgba(0, 0, 0, " + course.opacity / 100 + ")",
                }}
              >
                <h3 className="text-2xl font-bold text-white">{course.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <p className="pt-4 text-center italic">
          We offer more courses of Indian Classical Music, please reach out to
          us to know more.
        </p>
      </div>
    </section>
  );
}
