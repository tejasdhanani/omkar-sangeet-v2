import { organization, footerSections } from "@/content/global";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto flex flex-wrap justify-between py-8">
        {footerSections.map((section) => (
          <div key={section.id} className="mb-6 w-full px-4 md:mb-0 md:w-1/3">
            <h3 className="mb-4 text-xl">{section.title}</h3>
            {section.content}
          </div>
        ))}
      </div>

      <div className="relative h-0 w-full overflow-hidden pb-[75.25%] md:pb-[20%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0808631609984!2d72.53320767600873!3d23.05749681502272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85edf6b3ac8d%3A0x1962a7b861b63b21!2sOmkar%20Sangeet%20Mahavidyalaya!5e0!3m2!1sen!2sca!4v1731789460088!5m2!1sen!2sca"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>

      {/* {Copyrights} */}
      <div className="border-t border-e-red-400 p-4 text-center">
        <p className="text-xs">
          &copy;{new Date().getFullYear()} {organization.name}. All rights are
          reserved.
        </p>
        <p className="pt-2 text-xs">
          Made with &hearts; by{" "}
          <Link
            className="border-b border-white pb-0.5"
            href="https://inphisoft.com"
            target="_blank"
          >
            Inphisoft
          </Link>
        </p>
      </div>
    </footer>
  );
};
