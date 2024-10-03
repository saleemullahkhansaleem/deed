import { Container } from "../components";

export default function AboutUs() {
  return (
    <>
      <section className="h-[80vh] w-full bg-primary relative">
        <img
          src="/images/hero-img-2.webp"
          alt="Banner Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-black/50">
          <Container className="py-8 flex items-center h-full">
            <div className="text-white max-w-7xl p-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl uppercase">
                DEED
              </h1>
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold uppercase">
                About Us
              </h1>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container className="py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 flex items-center h-full">
              <p className="text-sm md:text-xl text-foregroundMuted m-auto p-4">
                Drive for Economic and Environmental Development (DEED) is a
                non-governmental organization based in Islamabad, established
                under Section 42 of the Companies Ordinance 1984. DEED’s mission
                is to alleviate poverty and improve the living standards of
                people through economic and social development, sustainable
                livelihoods, advocacy, and community development initiatives.
              </p>
            </div>

            <div className="bg-backgroundMuted p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">
                Our Vision
              </h3>
              <p className="text-sm md:text-lg text-foregroundMuted">
                ‘A clean, green and well-protected environment supporting a
                sustainable society and economy.’
              </p>
            </div>

            <div className="bg-backgroundMuted p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">
                Our Mission
              </h3>
              <p className="text-sm md:text-lg text-foregroundMuted">
                To “alleviate poverty and improve living standards” by promoting
                equitable, sustainable economic development and protecting the
                environment as a vital asset for the people of Pakistan.
              </p>
            </div>

            <div className="bg-backgroundMuted p-8 space-y-4 lg:col-span-2">
              <h3 className="text-2xl font-semibold text-secondary">
                Aims and Objectives
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-lg text-foregroundMuted">
                <li>
                  Play a positive role in reducing poverty through social and
                  economic measures irrespective of class, color, creed, or
                  ethnicity.
                </li>
                <li>
                  Solve rural issues at the union council level by establishing
                  ‘Friends of Pakistan Forum’ with support from individuals and
                  organizations.
                </li>
                <li>
                  Provide primary healthcare services, basic education, and
                  vocational training to communities.
                </li>
                <li>
                  Create awareness around sanitation, hygiene, and environmental
                  best practices through income-generating activities.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
