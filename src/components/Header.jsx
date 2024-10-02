import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useState, useEffect } from "react";
import { FaBars, FaMinus, FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const navLinks = [
  {
    name: "Who We Are",
    subMenu: [
      {
        name: "About Us",
        url: "/about-us",
        description:
          "DEED (Drive for Economic and Environmental Development) is an NGO committed to alleviating poverty, improving living standards, and fostering sustainable development through partnerships with various stakeholders.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Leadership",
        url: "/leadership",
        description:
          "Our leadership team at DEED is comprised of dedicated professionals with a shared vision of creating a sustainable and equitable environment for communities across Pakistan.",
        imageUrl: "/images/menu/menu-sample.webp",
      },
      {
        name: "Executive Board",
        url: "/executive-board",
        description:
          "The DEED Executive Board oversees strategic initiatives and ensures that our programs align with our mission of economic empowerment and environmental sustainability.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Our Partners",
        url: "/partners",
        description:
          "DEED collaborates with government agencies, international organizations, and private donors to amplify our impact in the areas of economic and environmental development.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Funding",
        url: "/funding",
        description:
          "Our funding model relies on contributions from philanthropic organizations, international donors, and government agencies to drive our projects and initiatives.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Transparency",
        url: "/transparency",
        description:
          "At DEED, we prioritize transparency and accountability in all our operations, ensuring that our stakeholders are informed about how resources are allocated and utilized.",
        imageUrl: "/images/menu/menu-2.webp",
      },
    ],
  },
  {
    name: "What We Do",
    subMenu: [
      {
        name: "Sustainable Development Goals",
        url: "/sustainable-goals",
        description:
          "DEED aligns its efforts with the UN Sustainable Development Goals, focusing on poverty eradication, economic growth, and environmental sustainability.",
        imageUrl: "/images/menu/menu-sample.webp",
      },
      {
        name: "Human Development Report",
        url: "/human-development-report",
        description:
          "Our annual Human Development Report tracks the progress of our initiatives and their impact on improving living conditions and fostering economic opportunities.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Our Strategic Plan",
        url: "/strategic-plan",
        description:
          "The DEED Strategic Plan outlines our long-term objectives and the pathways to achieve sustainable development and poverty reduction in the communities we serve.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Our Expertise",
        url: "/our-expertise",
        description:
          "We bring specialized expertise in poverty alleviation, community development, environmental conservation, and economic empowerment through various initiatives.",
        imageUrl: "/images/menu/menu-2.webp",
      },
    ],
  },
  {
    name: "Our Impact",
    subMenu: [
      {
        name: "News Center",
        url: "/news",
        description:
          "Stay updated with the latest news and announcements from DEED about our ongoing projects and collaborations.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Results",
        url: "/results",
        description:
          "See the measurable results of our efforts in uplifting communities, driving economic growth, and promoting sustainable practices.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Publications",
        url: "/publications",
        description:
          "Browse our research papers, reports, and publications that highlight the progress and challenges in our mission towards sustainable development.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Blogs",
        url: "/blogs",
        description:
          "Read insightful articles and opinion pieces from DEED experts and partners on various topics related to economic and environmental development.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Stories",
        url: "/stories",
        description:
          "Discover stories of individuals and communities positively impacted by DEED’s initiatives, and how we are making a real difference on the ground.",
        imageUrl: "/images/menu/menu-2.webp",
      },
    ],
  },
  {
    name: "Get Involved",
    subMenu: [
      {
        name: "Careers",
        url: "/careers",
        description:
          "Join our team and contribute to our mission of fostering economic and environmental development across Pakistan.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Procurement",
        url: "/procurement",
        description:
          "Learn more about procurement opportunities and how you can collaborate with DEED on various projects and initiatives.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "DEED Shop",
        url: "/shop",
        description:
          "Support our cause by purchasing eco-friendly products from the DEED Shop. All proceeds go towards funding our community projects.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "DEED Giving",
        url: "/giving",
        description:
          "Make a donation to DEED and help us drive impactful projects that uplift communities and promote sustainable development.",
        imageUrl: "/images/menu/menu-2.webp",
      },
      {
        name: "Contact Us",
        url: "/contact-us",
        description:
          "Get in touch with us to learn more about our work, partnership opportunities, or how you can contribute to DEED's mission.",
        imageUrl: "/images/menu/menu-2.webp",
      },
    ],
  },
];

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [subLinkData, setSubLinkData] = useState({});

  const handleMouseEnter = (subMenu) => {
    setSubLinkData(subMenu[0]); // Set the first subMenu item as default
  };

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="bg-white shadow sticky top-0 max-h-[112px] z-20">
      <Container className="flex justify-between lg:justify-center gap-8">
        <Logo />
        <nav className="hidden lg:flex gap-8 h-full">
          {navLinks.slice(0, 2).map((link, index) => (
            <NavItem
              key={index}
              link={link}
              onHover={() => handleMouseEnter(link.subMenu)}
              subLinkData={subLinkData}
              setSubLinkData={setSubLinkData}
            />
          ))}

          <Link to="/" className="flex items-center justify-center mx-4 p-2">
            <img
              src="/images/logos/logo.jpg"
              alt="DEED Logo"
              title="Home"
              className="h-16 lg:h-24"
            />
          </Link>

          {navLinks.slice(2).map((link, index) => (
            <NavItem
              key={index}
              link={link}
              onHover={() => handleMouseEnter(link.subMenu)}
              subLinkData={subLinkData}
              setSubLinkData={setSubLinkData}
            />
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="p-2 block lg:hidden" onClick={handleMenuToggle}>
          <FaBars size={24} />
        </button>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </header>
  );
}

const Logo = () => (
  <Link
    to="/"
    className="flex relative lg:hidden items-center justify-center mx-4 p-2"
  >
    <img
      src="/images/logos/logo.jpg"
      alt="DEED Logo"
      title="Home"
      className="h-16"
    />
  </Link>
);

const NavItem = ({ link, onHover, subLinkData, setSubLinkData }) => (
  <div
    className="group p-4 hover:text-primary text-foreground flex items-center cursor-default"
    onMouseEnter={onHover}
  >
    <span className="m-auto">{link.name}</span>
    <DetailMenu
      data={link.subMenu}
      subLinkData={subLinkData}
      setSubLinkData={setSubLinkData}
    />
  </div>
);

const DetailMenu = ({ data, subLinkData, setSubLinkData }) => {
  useEffect(() => {
    if (data?.length) setSubLinkData(data[0]);
  }, [data]);

  return (
    <div className="mx-auto absolute top-full left-0 right-0 bg-background max-h-0 group-hover:max-h-[1000px] -z-10 group-hover:z-10 overflow-hidden transition-all duration-500 ease-in flex w-[900px] shadow-md">
      <Sidebar
        data={data}
        subLinkData={subLinkData}
        setSubLinkData={setSubLinkData}
      />
      <DetailContent subLinkData={subLinkData} />
      <DetailImage imageUrl={subLinkData.imageUrl} />
    </div>
  );
};

const Sidebar = ({ data, subLinkData, setSubLinkData }) => (
  <div className="w-1/4 bg-white">
    <ul className="my-8">
      {data?.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.url}
            className={`block font-semibold py-4 px-6 hover:bg-secondary hover:text-background transition duration-300 text-sm ${
              link.name === subLinkData?.name
                ? "bg-secondary text-background"
                : "text-secondary"
            }`}
            onMouseEnter={() => setSubLinkData(link)}
          >
            {link.name.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const DetailContent = ({ subLinkData }) => (
  <div className="flex-1 bg-backgroundMuted p-8">
    <h1 className="text-3xl font-bold mb-6 text-foreground">
      {subLinkData?.name}
    </h1>
    <p className="text-foregroundMuted mb-4">{subLinkData?.description}</p>
    <p className="text-lg text-foregroundMuted mb-4">
      Frequently Asked Questions
    </p>
  </div>
);

const DetailImage = ({ imageUrl }) => (
  <div className="pt-8 bg-backgroundMuted">
    <img
      src={imageUrl}
      alt="Person Working"
      className="object-cover h-full w-52"
    />
  </div>
);

const MobileMenu = ({ menuToggle, setMenuToggle }) => {
  const [openSubMenu, setOpenSubMenu] = useState(-1);

  const toggleSubMenu = (index) => {
    setOpenSubMenu((prev) => (prev === index ? -1 : index));
  };

  return (
    <div
      className={`${
        menuToggle ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-screen z-20 xl:hidden`}
    >
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={() => setMenuToggle(false)}
      ></div>
      <div className="w-60 h-screen overflow-auto shadow bg-background">
        <div className="flex justify-between p-4 text-primary">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            type="button"
            className="hover:text-secondary"
            onClick={() => setMenuToggle(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="group px-4 py-2 cursor-pointer"
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex justify-between items-center">
                <span>{link.name}</span>
                {openSubMenu === index ? <FaMinus /> : <FaPlus />}
              </div>
              <div
                className={`flex flex-col max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
                  openSubMenu === index ? "py-2 max-h-[1000px]" : ""
                }`}
              >
                {link.subMenu.map((item, subIndex) => (
                  <NavLink
                    key={`${index}-${subIndex}`}
                    className={({ isActive }) =>
                      `px-4 py-2 hover:text-primary ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                    to={item.url}
                    onClick={() => setMenuToggle(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
