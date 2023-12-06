import { sql } from '@vercel/postgres';

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    ppr: true,
  },
  async redirects() {
    if (!process.env.POSTGRES_URL) {
      return [];
    }

    const { rows: redirects } = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return redirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent,
    }));
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data: https://res.cloudinary.com;
  media-src 'self' https://res.cloudinary.com;
  connect-src *;
  font-src 'self' data:;
`;



const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

export default nextConfig;