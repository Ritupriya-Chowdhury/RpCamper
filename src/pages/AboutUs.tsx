import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

import raj from '../assets/Home/399078044_352224463981852_3738276332233915676_n.jpg'
import ritu from '../assets/Home/428682758_1188774892527940_1130028487454134231_n.jpg'
import amit from '../assets/Home/449789155_392187230503807_2253069901901366205_n.jpg'
import { useBeforeUnload } from "../component/RefreshWarning";

const teamMembers = [
  {
    name: "Amit Chowdhury",
    role: "CEO & Founder",
    imageUrl: amit,
    bio: "Amit leads the team with a passion for cars and customer service.",
  },
  {
    name: "Ritupriya Chowdhury",
    role: "Chief Operations Officer",
    imageUrl: ritu,
    bio: "Ritupriya manages daily operations and ensures top-notch customer satisfaction.",
  },
  {
    name: "Rituraj Chowdhury",
    role: "Manager",
    imageUrl: raj,
    bio: "Rituraj ensures all equipment are well-maintained and ready for sell.",
  },
];

const AboutUs = () => {

  const items = useAppSelector((state: RootState) => state.cart.items);
 useBeforeUnload(items.length > 0);

  const theme = useAppSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`mx-auto lg:px-20  px-8 pb-20 pt-32 ${theme==='dark'?'bg-gray-400 text-black':'bg-gray-200'}`}>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg">Phone: +123 456 7890</p>
        <p className="text-lg">Email: support@rpcamper.com</p>
        <p className="text-lg">Address: Boalkhali, Chattogram</p>
      </section>

      
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

      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
        <div className="flex space-x-6">
          <Link to='https://web.facebook.com/ritupriya.chowdhury.5' className="text-3xl text-blue-500 hover:text-blue-700">
            <FaFacebook/>
         </Link>
          <Link to="https://twitter.com" className=" text-3xl text-blue-500 hover:text-blue-700">
           <FaTwitter/>
          
         </Link>
          <Link to="https://instagram.com" className="text-3xl text-blue-500 hover:text-blue-700">
            <FaInstagram/>
         </Link>
        </div>
      </section>

     
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg">
          At RpCamper, our mission is to provide our customers
          with affordable, reliable, and well-maintained vehicles for all their
          travel needs. We are committed to exceptional service, honesty, and
          building long-term relationships with our customers.
        </p>
      </section>

 
      <section>
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border-2 border-black rounded-lg overflow-hidden"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-64 h-48 mx-auto my-8 rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
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
