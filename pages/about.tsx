import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Neoloxic"
        description="Learn more about Neoloxic and our mission to help businesses grow."
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We are a team of experts specializing in software development, digital marketing, and SEO.
        </p>
      </div>
    </>
  );
}