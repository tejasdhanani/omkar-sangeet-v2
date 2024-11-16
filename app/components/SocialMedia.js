import { socialMediaPlatforms } from "@/content/global";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="social-media-buttons flex space-x-4">
      {socialMediaPlatforms.map((platform) => (
        <Link key={platform.name} href={platform.url} target="_blank">
          <button
            type="button"
            className={`mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg`}
            style={{ backgroundColor: platform.color }}
            aria-label={`Visit our ${platform.name} page`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 320 512"
              className="h-4 w-4"
            >
              <path d={platform.svgPath} />
            </svg>
          </button>
        </Link>
      ))}
    </div>
  );
}
