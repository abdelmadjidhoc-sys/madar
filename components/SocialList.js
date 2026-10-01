import { MADAR_LINKS } from "@/lib/content";
import { InstagramIcon, ThreadsIcon, TikTokIcon, YouTubeIcon } from "./icons";

const SOCIALS = [
  ["instagram", "Instagram", InstagramIcon],
  ["tiktok", "TikTok", TikTokIcon],
  ["youtube", "YouTube", YouTubeIcon],
  ["threads", "Threads", ThreadsIcon],
];

/** Round social icon links. `className` adds a variant (social-list--footer, links-social). */
export default function SocialList({ className = "" }) {
  return (
    <ul className={("social-list " + className).trim()}>
      {SOCIALS.map(([key, label, Icon]) => (
        <li key={key}>
          <a href={MADAR_LINKS[key]} target="_blank" rel="noopener" aria-label={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
