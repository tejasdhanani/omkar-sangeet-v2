import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export default function HeroSection({
  imageSrc,
  imageAltText,
  url,
  bgFilterOpacity = 50,
  HeroTitle = "Default Title",
  HeroSubTitle = "Default Subtitle",
  ButtonText = "Click Me",
}) {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src={imageSrc} // Replace with your image path
        alt={imageAltText}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
        priority
      />

      <div
        className={"absolute inset-0 -z-10 bg-black"}
        style={{
          opacity: bgFilterOpacity / 100,
        }}
      ></div>

      {/* Centered Text */}
      <div className="relative flex h-full w-full flex-col items-center justify-center px-4 text-center text-white md:px-8">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          {HeroTitle}
        </h1>
        <p className="mt-4 text-lg md:mt-6 md:text-2xl lg:text-3xl">
          {HeroSubTitle}
        </p>
        <Link href={url}>
          <button
            aria-label={ButtonText}
            className="mt-8 rounded-lg bg-primary px-6 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-primary md:px-8 md:py-3 md:text-lg"
          >
            {ButtonText}
          </button>
        </Link>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  bgFilterOpacity: PropTypes.number,
  HeroTitle: PropTypes.string,
  HeroSubTitle: PropTypes.string,
  ButtonText: PropTypes.string,
  ButtonAction: PropTypes.func,
  overlayEnabled: PropTypes.bool,
  additionalClasses: PropTypes.string,
};
