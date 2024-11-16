import Image from "next/image";
import SocialMedia from "../components/SocialMedia";

export default function GalleryPage() {
  const galleryImages = [
    "/gallery/Dhananjay Acharya Omkar Sangeet.jpeg",
    "/gallery/Ongoing Class 1 Omkar Sangeet.jpeg",
    "/gallery/Ongoing Class 3 Omkar Sangeet.jpeg",
    "/gallery/Ongoing Class 4 Omkar Sangeet.jpeg",
    // Add more image paths here
  ];

  return (
    <div className="p-4">
      <h1 className="pb-4 text-center text-3xl font-bold">Gallery</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="rounded-lg">
            <Image
              className="rounded-lg"
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 italic">
        For more images and videos, please visit our social media handles.
        <SocialMedia />
      </div>
    </div>
  );
}
