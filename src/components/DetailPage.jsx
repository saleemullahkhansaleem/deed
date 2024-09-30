import Button from "./Button";
import Container from "./Container";
import CoverSection from "./CoverSection";
import Services from "./home/Services";

export default function DetailPage({
  children,
  title = "",
  description = "",
  imageUrl = "",
}) {
  return (
    <>
      <CoverSection title={title} description={description} />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        <div className="lg:order-2">
          <img
            src={"/images/security/" + imageUrl}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className={`flex flex-col gap-8 justify-center `}>
          {children}
          <div>
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
      <Services />
    </>
  );
}
