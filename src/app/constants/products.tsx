import Image from "next/image";

export const mainProduct = {
  title: "EvoTrack",
  description: "Your Smart Life Navigator",
  image: (
    <Image
      src="/watch.webp"
      width={740}
      height={734}
      alt="Picture of the watch"
    />
  ),
};

export const products = [
  {
    title: "StreamGuardians",
    domains: "Design, Marketing",
    image: (
      <Image
        src="/nature.webp"
        width={630}
        height={500}
        alt="Picture of the nature"
      />
    ),
  },
  {
    title: "Kronotrop Coffee",
    domains: "Branding, Product",
    image: (
      <Image
        src="/coffee.webp"
        width={630}
        height={800}
        alt="Picture of the coffee mag"
      />
    ),
  },
  {
    title: "CycleVerse",
    domains: "Development, Marketing",
    image: (
      <Image
        src="/bicycle.webp"
        width={630}
        height={760}
        alt="Picture of the bicycle"
      />
    ),
  },
  {
    title: "LuminaShades",
    domains: "Design, Branding",
    image: (
      <Image
        src="/phone.webp"
        width={630}
        height={500}
        alt="Picture of the phone"
      />
    ),
  },
];
