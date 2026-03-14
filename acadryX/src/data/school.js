// DATA: school.js
// Mock — replace body of getSchoolByCode() with Supabase query when ready
// e.g. const { data } = await supabase.from('schools').select('*').eq('code', code).single()

const SCHOOLS = {
  KIS001: {
    code: "KIS001",
    name: "Kogbodi International School",
    shortName: "Kogbodi Intl.",
    slug: "kogbodi",
    brandColor: "#1a6bff",
    term: "2nd Term",
    session: "2024/2025",
    country: "NG",
    currency: "₦",
    pricePerStudent: 1000,
    totalStudents: 1247,
    totalStaff: 68,
  },
  DEMO001: {
    code: "DEMO001",
    name: "Greenfield Academy",
    shortName: "Greenfield",
    slug: "greenfield",
    brandColor: "#059669",
    term: "1st Term",
    session: "2024/2025",
    country: "US",
    currency: "$",
    pricePerStudent: 3,
    totalStudents: 430,
    totalStaff: 29,
  },
  RHS001: {
    code: "RHS001",
    name: "Royal Heritage School",
    shortName: "Royal Heritage",
    slug: "royalheritage",
    brandColor: "#7c3aed",
    term: "3rd Term",
    session: "2024/2025",
    country: "NG",
    currency: "₦",
    pricePerStudent: 1000,
    totalStudents: 890,
    totalStaff: 51,
  },
};

export function getSchoolByCode(code) {
  if (!code) return null;
  return SCHOOLS[code.trim().toUpperCase()] || null;
}

// Used by App.jsx on mount — reads slug from subdomain or URL path
// Production: kogbodi.acadryx.com → slug = "kogbodi"
// Dev/demo:   localhost/kogbodi   → slug = "kogbodi"
//             localhost?school=kogbodi → slug = "kogbodi"
export function getSchoolBySlug(slug) {
  if (!slug) return null;
  const s = slug.toLowerCase();
  return Object.values(SCHOOLS).find(school => school.slug === s) || null;
}

export function detectSlug() {
  const hostname = window.location.hostname;
  const parts = hostname.split(".");

  // Production: kogbodi.acadryx.com
  if (parts.length >= 3 &&
      parts[0] !== "www" &&
      parts[0] !== "localhost" &&
      parts[1] === "acadryx") {
    return parts[0];
  }

  // Vercel preview: acadryxschools.vercel.app?school=kogbodi
  if (hostname.includes("vercel.app")) {
    const params = new URLSearchParams(window.location.search);
    return params.get("school") || null;
  }

  // Path-based for dev: localhost/kogbodi
  const pathSlug = window.location.pathname.split("/").filter(Boolean)[0];
  if (pathSlug) return pathSlug;

  // Query param fallback: localhost?school=kogbodi
  const params = new URLSearchParams(window.location.search);
  return params.get("school") || null;
}
