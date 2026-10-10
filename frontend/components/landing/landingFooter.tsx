import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { SiThreads } from "react-icons/si";
import { type IconType } from "react-icons";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const brandDescription =
  "A calm, safe, and curated digital ecosystem. Replicating the thoughtful nature of tactile physical toys.";

const columns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Child Panel", href: "#" },
      { label: "Caregiver Portal", href: "#" },
      { label: "Safety Measures", href: "#" },
    ],
  },
  {
    heading: "Journey",
    links: [
      { label: "Why Maniarverse", href: "#" },
      { label: "How Its work", href: "#" },
      { label: "Inside", href: "#" },
    ],
  },
  {
    heading: "Approach",
    links: [
      { label: "Inclusive Design", href: "#" },
      { label: "Cultural Philosophy", href: "#" },
      { label: "Child-centered Design", href: "#" },
    ],
  },
  {
    heading: "Research",
    links: [
      { label: "Validation", href: "#" },
      { label: "What we're exploring", href: "#" },
      { label: "Studies", href: "#" },
    ],
  },
  {
    heading: "About us",
    links: [
      { label: "Mission", href: "#" },
      { label: "Vission", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
];

const socialLinks: { name: string; href: string; Icon: IconType }[] = [
  { name: "X", href: "#", Icon: FaXTwitter },
  { name: "Instagram", href: "#", Icon: FaInstagram },
  { name: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { name: "YouTube", href: "#", Icon: FaYoutube },
  { name: "Threads", href: "#", Icon: SiThreads },
  { name: "WhatsApp", href: "#", Icon: FaWhatsapp },
  { name: "Discord", href: "#", Icon: FaDiscord },
];

function FooterLinkColumn({ heading, links }: FooterColumn) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-blue-600">{heading}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const LandingFooter = () => {
  return (
    <footer className="w-full px-6 py-10 md:py-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-gray-100 p-8 md:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="size-10 rounded-full bg-blue-600"
              />
              <span className="text-lg font-bold text-blue-600">
                Maniarverse
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600">
              {brandDescription}
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((column) => (
              <FooterLinkColumn key={column.heading} {...column} />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-6">
          <div className="flex items-center justify-center gap-5 md:gap-6">
            {socialLinks.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                aria-label={name}
                className="text-gray-800 transition-colors hover:text-blue-600"
              >
                <Icon className="size-5 md:size-6" aria-hidden />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            @Powered by Maniarverse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
