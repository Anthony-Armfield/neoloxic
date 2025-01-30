import Head from 'next/head';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Neoloxic - Software Development, Digital Marketing, and SEO"
        description="Neoloxic specializes in software development, digital marketing, and SEO for small and medium businesses."
      />
      <div className="text-center">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to Neoloxic</h1>
          <p className="text-xl mb-8">
            Your partner in software development, digital marketing, and SEO.
          </p>
          <div className="space-x-4">
            <a
              href="/services"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg mb-8">
            At Neoloxic, we specialize in helping small and medium businesses grow through
            innovative software solutions, effective digital marketing strategies, and
            top-notch SEO services. Whether you need a new website, automation tools, or
            help ranking higher on Google, we’ve got you covered.
          </p>
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </>
  );
}