import Button from "../Button";
import Container from "../Container";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-112px)] w-full bg-primary relative">
      <img
        src="/images/hero-img2.jpg"
        alt="Banner Photo"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-black/50">
        <Container className="py-8 flex items-center h-full">
          <div className="text-white max-w-7xl">
            <h1 className="text-8xl font-bold uppercase">
              Where do we go from here?
            </h1>
            <h4 className="text-4xl mt-8">
              Summit of the Future presents once-in-a-generation opportunity to
              act together for #OurCommonFuture
            </h4>
            <div className="w-auto">
              <Button href="/" className="mt-16">
                Read More
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
