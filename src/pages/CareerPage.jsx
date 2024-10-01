import { Link } from "react-router-dom";
import { Button, Container } from "../components";


export const benefits = [
  {
    title: "Life Insurance",
    description:
      "We offer comprehensive life insurance coverage to give you and your family peace of mind in the face of life’s uncertainties, ensuring financial stability during tough times.",
  },
  {
    title: "EOBI Registered",
    description:
      "As an EOBI (Employees' Old-Age Benefits Institution) registered company, we ensure that all our employees are entitled to pension and retirement benefits, offering long-term financial security.",
  },
  {
    title: "ESSI Registered",
    description:
      "We are registered with the Employees Social Security Institution (ESSI), providing our team with health insurance, disability benefits, and maternity leave to safeguard your well-being.",
  },
];

export default function CareerPage() {
  const jobListings = [
    {
      title: "Senior React Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a Senior React Developer to join our dynamic team and build cutting-edge web applications using modern technologies.",
    },
    {
      title: "UI/UX Designer",
      location: "New York, NY",
      type: "Full-Time",
      description:
        "Seeking a creative UI/UX Designer to craft intuitive and visually appealing user interfaces for our applications.",
    },
    {
      title: "Backend Engineer",
      location: "San Francisco, CA",
      type: "Full-Time",
      description:
        "Join us as a Backend Engineer to design and develop highly scalable backend services and APIs.",
    },
  ];

  // api
  // .get("/users/saleemullahkhansaleem")
  // .then((data) => console.log(data))
  // .catch((error) => console.error(error));

  return (
    <>

      <Container className="px-4 my-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
        <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
          We are a team of passionate innovators committed to providing a
          supportive and rewarding work environment. Join us and enjoy a career
          that offers growth, stability, and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-foregroundMuted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <div id="jobs" className="bg-background">
        <Container className=" px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-foregroundMuted mb-4">
                  {job.location} | {job.type}
                </p>
                <p className="text-foreground mb-6">{job.description}</p>
                <Link
                  to="/career-apply"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div id="apply" className="bg-secondary text-background">
        <Container className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Team of Dedicated Professionals
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Are you ready to take on the challenge of providing safety and
            protection in a dynamic environment? If you’re passionate about
            security and want to be part of a trusted team, we’d love to have
            you on board.
          </p>
          <Button href="/career-apply">Apply Now</Button>
        </Container>
      </div>
    </>
  );
}
