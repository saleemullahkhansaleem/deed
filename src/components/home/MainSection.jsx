import { MdSecurity } from "react-icons/md";
import Container from "../Container";
import Button from "../Button";

export default function MainSection() {
  return (
    <section className="py-4 lg:pb-12">
      <MainSectionBoxes
        title="Physical Security"
        imageUrl="s1.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        url="services/physical-security"
        reverse
      >
        <p>
          Static Guarding and access control is one of our expert fields. We can
          provide round the clock security for your Premises, Office Buildings,
          Industrial Estates/ Factories, Hospitals, Educational Institutions,
          Embassies, Private Residences, Marriage Halls etc. and festivals
          organized by various Organizations / forums.
          <br />
          <br />
          SSC is a leading security solutions provider committed to safeguarding
          businesses, institutions and communities in ICT, Punjab and KP with a
          focus on professionalism, reliability and cutting edge technology.
          <br />
          <br />
          SSC offers a wide range of security services, cash management
          solutions and specialized offerings to ensure peace of and protect
          valuable assets.
        </p>
      </MainSectionBoxes>
      <MainSectionBoxes
        title="High Profile Special Events"
        imageUrl="placeholder.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        url="services/high-profile-events"
        sideImages={["s8.jpg", "s9.jpg"]}
      >
        <p>
          Providing security to High Profile Special Events through Manned
          Security, Access Control, Electronic Checking and Rapid Response in
          case of any Security Breach is another area of our expertise in the
          security services
          <br />
          <br />
          SSC provide reliable protection for individuals and events. Trained
          professionals ensure safety with discretion and professionalism.
          <br />
          <br />
          Comming soon
        </p>
      </MainSectionBoxes>
      <MainSectionBoxes
        title="Security Escort"
        imageUrl="s5.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        url="services/security-escort"
        reverse
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          optio, modi, nobis aliquid delectus dolorem voluptates est vel
          recusandae commodi accusantium voluptatum at atque laudantium nam
          quos, eum a! Atque!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          porro eveniet ad, exercitationem modi, odit hic officia illo soluta
          dignissimos esse unde et tenetur nemo praesentium placeat suscipit
          itaque reiciendis?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          blanditiis reiciendis quisquam. Non, quos. Corporis nesciunt possimus
          dicta iste dolorem facere atque delectus illum repellendus hic velit,
          earum odit pariatur.
        </p>
      </MainSectionBoxes>
      <MainSectionBoxes
        title="Training & Courses"
        imageUrl="placeholder.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        url="services/training-courses"
        sideImages={["placeholder.jpg", "placeholder.jpg", "placeholder.jpg"]}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          voluptatum provident, et, eligendi deleniti voluptates impedit
          voluptate, dolorem iure nemo ad consequatur! Error incidunt ea, totam
          quisquam labore enim mollitia.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          nihil rerum accusantium quas doloremque blanditiis deserunt iste
          consectetur nam modi, accusamus quos quam laborum beatae ea,
          reprehenderit earum mollitia aliquid.
          <br />
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          nihil rerum accusantium quas doloremque blanditiis deserunt iste
          consectetur nam modi, accusamus quos quam laborum beatae ea,
          reprehenderit earum mollitia aliquid.
        </p>
      </MainSectionBoxes>
    </section>
  );
}

function MainSectionBoxes({
  children,
  title = "",
  icon,
  imageUrl = "",
  url = "",
  sideImages = [],
  reverse = false,
}) {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
      <div
        className={`${
          reverse ? "lg:order-2" : ""
        } relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] m-auto shadow-2xl rounded-full`}
      >
        <div
          className={`flex items-center justify-center w-full h-full bg-primary rounded-full overflow-hidden`}
        >
          <div className="flex items-center justify-center w-[92%] h-[92%] border-[24px] border-secondary border-b-transparent rotate-45 rounded-full m-auto">
            <div className="flex items-center justify-center w-[90%] h-[90%] border-[14px] border-backround border-t-transparent rounded-full m-auto">
              <div className="w-[96%] h-[96%] flex justify-center items-center overflow-hidden rounded-full border-4 -rotate-45 border-backround bg-background">
                <img
                  className="w-full h-full object-cover"
                  src={"images/security/" + imageUrl}
                  alt="security photo"
                />
              </div>
            </div>
          </div>
        </div>
        {sideImages.length === 2 && (
          <>
            <div className="absolute -right-[10%] bottom-[42%] w-[45%] h-[45%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={"images/security/" + sideImages[0]}
                alt="security photo"
              />
            </div>
            <div className="absolute -right-[7%] top-[47%] w-[40%] h-[40%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={"images/security/" + sideImages[1]}
                alt="security photo"
              />
            </div>
          </>
        )}
        {sideImages.length === 3 && (
          <>
            <div className="absolute -right-[4%] top-0 w-[45%] h-[45%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={"images/security/" + sideImages[0]}
                alt="security photo"
              />
            </div>
            <div className="absolute -right-[8%] top-1/2 w-[40%] h-[40%] -translate-y-1/2 flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={"images/security/" + sideImages[1]}
                alt="security photo"
              />
            </div>
            <div className="absolute right-0 bottom-[5%] w-[35%] h-[35%] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround shadow-2xl bg-background">
              <img
                className="w-full h-full object-cover"
                src={"images/security/" + sideImages[2]}
                alt="security photo"
              />
            </div>
          </>
        )}
      </div>
      <div className={`flex flex-col gap-8 justify-center p-4 lg:p-12`}>
        <div className="flex items-center gap-4 font-bold">
          {icon}
          <h2 className="text-primary text-3xl">{title}</h2>
        </div>
        {children}
        <div>
          <Button href={url}>Read More</Button>
        </div>
      </div>
    </Container>
  );
}
