import { Link } from "react-router-dom";
import Container from "./Container";
import SocialBar from "./SocialBar";
import BackToTopButton from "./BackToTopButton";
import { navLinks } from "./Header";

export default function Footer() {
  const footerNavLinks = [
    [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/about-us" },
      { name: "Why Choose Us", url: "/why-stand-fast" },
      { name: "Security Services", url: "/what-we-do" },
    ],
    [
      { name: "Latest News", url: "/news" },
      { name: "Jobs", url: "/career" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  ];

  return (
    <footer className="bg-foregroundMuted text-backgroundMuted">
      <Container className="">
        <div className="p-4 xl:py-12 border-b ">
          <div className="flex items-center gap-4">
            <img src="/images/logos/logo-d.png" alt="Logo" className="h-36" />
            <div className="max-w-lg p-4">
              <h4 className="text-2xl text-background font-bold pb-2">DEED</h4>
              <p>
                DEED promotes sustainable development by reducing poverty and
                improving living standards through partnerships with donors,
                governments, and NGOs.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 py-12">
          {navLinks.map((column, colIndex) => (
            <div className="p-4">
              <h4 className="text-2xl text-background font-bold pb-4">
                {column.name}
              </h4>
              <div className="flex flex-col gap-2" key={colIndex}>
                {column.subMenu.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    title={link.name}
                    className="text-lg hover:text-background"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="p-4 md:col-span-2 md:text-right">
            <h4 className="text-2xl text-background font-bold pb-4">Contact</h4>
            <p>Office No: 5 Al-Malik Centre (Third Floor)</p>
            <p> 70 West Jinnah Avenue</p>
            <p> Blue Area Islamabad</p>
            <br />
            <p>
              <Link
                title="amjad@deed.com.pk"
                to="mailto:amjad@deed.com.pk"
                className="text-lg hover:text-background"
              >
                amjad@deed.com.pk
              </Link>
            </p>
            <br />
            <p className="text-lg flex md:justify-end gap-2">
              <span>Phone:</span>{" "}
              <span>
                <Link
                  className="hover:text-background"
                  title="Call us"
                  to="tel:+92518739888"
                >
                  051-8739888
                </Link>
                <br />
                <Link
                  className="hover:text-background"
                  title="Call us"
                  to="tel:+92518736789"
                >
                  051-8736789
                </Link>
              </span>
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-foreground py-2">
        <Container className="flex flex-col md:flex-row gap-4 justify-between items-center flex-wrap">
          <div className="row footer-copyright">
            <div className="col-md-12 text-center">
              <p>
                © 2024 <span className="footer-highlight">DEED</span> All rights
                reserved.
              </p>
            </div>
          </div>
          <SocialBar />
        </Container>
      </div>
      <BackToTopButton />
    </footer>
  );
}
