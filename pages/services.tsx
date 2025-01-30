import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services - Neoloxic"
        description="Explore the services offered by Neoloxic, including software development, digital marketing, and SEO."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <ul className="text-lg list-disc list-inside">
          <li>Software Development</li>
          <li>Digital Marketing</li>
          <li>SEO Optimization</li>
          <li>Automation Solutions</li>
        </ul>
      </div>
    </>
  );
}