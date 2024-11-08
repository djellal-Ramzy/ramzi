import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icons: <FaFacebook />, path: "" },
  { icons: <FaInstagram />, path: "" },
  { icons: <FaLinkedin />, path: "" },
  { icons: <FaGithub />, path: "" },
];
function Social({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
