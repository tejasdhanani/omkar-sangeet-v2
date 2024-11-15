import { organization } from "@/content/global";
import Link from "next/link";
import SocialMedia from "../SocialMedia";

export const Footer = () => {
  return (
    <footer className="bg-[#941e1c] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h2 className="mb-2 text-2xl font-bold">Omkar Sangeet</h2>
            <p>
              Omkar Sangeet is an Indian classical music academy offering
              classes for Vocal, Harmonium, Piano, Keyboard, Kathak, and more.
            </p>
          </div>
          {/* Follow Us - Social Media Links */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <SocialMedia />
          </div>

          {/* Contact Information */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <p>{organization.address}</p>
            <p>Email: {organization.email}</p>
            <div>
              Phone:{" "}
              <Link href={`tel:${organization.phoneNum1}`}>
                {organization.phoneNum1}
              </Link>
            </div>
            <div>
              Phone:{" "}
              <Link href={`tel:${organization.phoneNum1}`}>
                {organization.phoneNum2}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-700 pt-4">
          <p>&copy; 2024 Omkar Sangeet Mahavidyalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
