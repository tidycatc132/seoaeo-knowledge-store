/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hub links are "T48/", so course URLs end in a slash.
  trailingSlash: true,
  // Route handlers read the built course pages from content/ at request time.
  outputFileTracingIncludes: {
    "/": ["./content/**/*"],
    "/[topic]": ["./content/**/*"],
    "/admin": ["./content/courses.json"],
    "/admin/export": ["./content/courses.json"],
  },
};
export default nextConfig;
