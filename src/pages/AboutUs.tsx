const teamMembers = [
  {
    name: "Amit Chowdhury",
    role: "CEO & Founder",
    imageUrl: "/images/amit.jpg",
    bio: "Amit leads the team with a passion for cars and customer service.",
  },
  {
    name: "Jane Doe",
    role: "Chief Operations Officer",
    imageUrl: "/images/jane.jpg",
    bio: "Jane manages daily operations and ensures top-notch customer satisfaction.",
  },
  {
    name: "John Smith",
    role: "Lead Mechanic",
    imageUrl: "/images/john.jpg",
    bio: "John ensures all vehicles are well-maintained and ready for rentals.",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg">Phone: +123 456 7890</p>
        <p className="text-lg">Email: support@roadrunner.com</p>
        <p className="text-lg">Address: 123 Main Street, Cityville, Country</p>
      </section>

      {/* Map */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
        <div className="relative pb-9/16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29514.713004512578!2d91.89908948642417!3d22.37856947483596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad25d1b4ee63ed%3A0x57feb012672900bd!2sBoalkhali!5e0!3m2!1sen!2sbd!4v1726833238328!5m2!1sen!2sbd"
            className="w-full h-64"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-6">
          <a href="https://facebook.com" className="hover:underline">
            <img
              src="/images/facebook-icon.png"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a href="https://twitter.com" className="hover:underline">
            <img
              src="/images/twitter-icon.png"
              alt="Twitter"
              className="w-8 h-8"
            />
          </a>
          <a href="https://instagram.com" className="hover:underline">
            <img
              src="/images/instagram-icon.png"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At RoadRunner Car Rentals, our mission is to provide our customers
          with affordable, reliable, and well-maintained vehicles for all their
          travel needs. We are committed to exceptional service, honesty, and
          building long-term relationships with our customers.
        </p>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border rounded-lg overflow-hidden"
            >
              <img
                src=""
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
                <p className="mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
