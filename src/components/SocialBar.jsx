import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function SocialBar() {
  const socialLinks = [
    {
      name: "facebook",
      url: "http://facebook.com",
      icon: FaFacebook,
    },
    {
      name: "twitter",
      url: "http://twitter.com",
      icon: FaTwitter,
    },
    {
      name: "linkedin",
      url: "http://linkedin.com",
      icon: FaLinkedin,
    },
    {
      name: "instagram",
      url: "http://instagram.com",
      icon: FaInstagram,
    },
    {
      name: "youtube",
      url: "http://youtube.com",
      icon: FaYoutube,
    },
    {
      name: "whatsapp",
      url: "http://whatsapp.com",
      icon: FaWhatsapp,
    },
  ];
  return (
    <div className="text-white flex justify-between items-center gap-2">
      {socialLinks.map((link, index) => (
        <span key={index} className="flex items-center gap-2">
          <Link to={link.url} title={link.name} target="_blank">
            <link.icon
              size={20}
              className="text-backround hover:text-secondary"
            />
          </Link>
          {index !== socialLinks.length - 1 && <RxDividerVertical />}
        </span>
      ))}
    </div>
  );
}
