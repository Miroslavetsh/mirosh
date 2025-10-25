import TelegramIcon from "../Sprite/SocialsIcons/TelegramIcon";
import InstagramIcon from "../Sprite/SocialsIcons/InstagramIcon";

import styles from "./Socials.module.scss";
import Link from "next/link";

type SocLink = {
  icon: React.ReactElement;
  href: string;
};

const Socials: React.FC = (): React.JSX.Element => {
  const socLinks: Array<SocLink> = [
    { icon: <InstagramIcon />, href: "https://www.instagram.com/myrtolv/" },
    { icon: <TelegramIcon />, href: "https://telegram.me/myrtolv" },
  ];

  return (
    <div className={styles.socials}>
      {socLinks.map((link) => {
        return (
          <Link
            key={link.href}
            className={styles.link}
            rel="noreferrer"
            target="_blank"
            href={link.href}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
