import Button from "../Button";
import Container from "../Container";

export default function AboutSection() {
  return (
    <Container className="py-12 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-4xl font-bold mb-4 text-primary">About DEED</h2>
        <h3 className="text-3xl font-semibold mb-2 text-secondary">
          Highest Standards Of Security Services
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          assumenda nihil ipsum praesentium facere in? Magnam quo aliquam iste
          voluptate ullam alias labore impedit recusandae, quos corrupti aperiam
          laborum saepe ratione. Delectus nemo, ut enim ipsum quasi sequi magnam
          dicta expedita laboriosam unde saepe inventore aliquid iusto a
          explicabo architecto vel! Odio, ab eos cum ut dolor hic esse velit
          laborum magnam? Corporis eligendi reprehenderit rerum esse dolore
          voluptates, sed repudiandae provident velit dignissimos, nobis,
          voluptatum ab nesciunt similique perferendis?
        </p>
        <div className="py-2">
          <Button href="/about-us">Read More</Button>
        </div>
      </div>
    </Container>
  );
}
