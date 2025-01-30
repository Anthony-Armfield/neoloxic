import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  // Default metadata
  const siteTitle = 'Neoloxic - Software Development, Digital Marketing, and SEO';
  const siteDescription =
    'Neoloxic specializes in software development, digital marketing, and SEO for small and medium businesses.';

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
    </Head>
  );
}