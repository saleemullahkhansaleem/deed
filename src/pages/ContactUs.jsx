import { useState } from "react";
import { Button, Container, Input } from "../components";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    profession: "",
    dob: "",
    address: "",
    zip: "",
    bank: "",
    membership: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Submitted", formData);
  };

  return (
    <>
      <section className="h-[80vh] w-full bg-primary relative">
        <img
          src="/images/hero-img-2.webp"
          alt="Banner Photo"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-black/50">
          <div className="container mx-auto py-8 flex items-center h-full">
            <div className="text-white max-w-7xl p-4">
              <h1 className="text-2xl md:text-4xl lg:text-6xl uppercase">
                DEED
              </h1>
              <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold uppercase">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <Container>
          <div className="bg-white p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Enter your organization"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="Enter your profession"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-lg font-medium text-gray-700">
                    Home Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your home address"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                    placeholder="Enter your zip code"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Bank select */}
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Bank
                  </label>
                  <select
                    name="bank"
                    value={formData.bank}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Select your bank
                    </option>
                    <option value="Bank A">Bank A</option>
                    <option value="Bank B">Bank B</option>
                    <option value="Bank C">Bank C</option>
                  </select>
                </div>

                {/* Membership select */}
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Membership
                  </label>
                  <select
                    name="membership"
                    value={formData.membership}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  >
                    <option value="" disabled>
                      Select membership type
                    </option>
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
              </div>

              {/* Submit button */}
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
