import { Helmet } from 'react-helmet-async'

export function HomePageSEO() {
  return (
    <Helmet>
      <title>ENVIRR Institute - Top Coaching in Gurugram | 98% Board Results</title>
      <meta name="description" content="ENVIRR Institute - Expert coaching for Classes VI-XII in Gurugram. 98% board success rate with 200+ mock tests. CBSE & ICSE coaching. Online & offline classes." />
      <meta name="keywords" content="coaching in Gurugram, CBSE coaching, ICSE coaching, board exam preparation, classes 6-12 coaching" />
      <meta property="og:title" content="ENVIRR Institute - Top Coaching in Gurugram | 98% Board Results" />
      <meta property="og:description" content="Expert coaching for Classes VI-XII. 98% board success, 200+ mock tests. CBSE & ICSE. Flexible batches." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="ENVIRR Institute - Top Coaching Gurugram" />
      <meta name="twitter:description" content="98% board results. Expert faculty, flexible batches, hybrid learning." />
    </Helmet>
  )
}

export function AboutPageSEO() {
  return (
    <Helmet>
      <title>About ENVIRR Institute - Mission, Values & Expert Faculty</title>
      <meta name="description" content="Learn about ENVIRR Institute's mission to shape academic excellence. Expert faculty with 7-12 years experience committed to student success." />
      <meta name="keywords" content="about ENVIRR, institute mission, expert teachers, coaching philosophy, educational excellence" />
      <meta property="og:title" content="About ENVIRR Institute - Our Mission & Values" />
      <meta property="og:description" content="Dedicated to shaping academic futures with expert guidance and proven methodologies." />
    </Helmet>
  )
}

export function CoursesPageSEO() {
  return (
    <Helmet>
      <title>Coaching Programs Classes VI-XII | CBSE ICSE | ENVIRR Institute</title>
      <meta name="description" content="Comprehensive coaching programs: Classes VI-VIII foundation & Classes IX-XII competitive prep. CBSE, ICSE, JEE/NEET ready. Both online and offline classes." />
      <meta name="keywords" content="coaching classes 6-8, coaching classes 9-12, CBSE coaching program, ICSE coaching, board exam coaching" />
      <meta property="og:title" content="Coaching Programs Classes VI-XII | ENVIRR Institute" />
      <meta property="og:description" content="Foundation program for VI-VIII, competitive prep for IX-XII. CBSE, ICSE, JEE/NEET preparation." />
    </Helmet>
  )
}

export function FacultyPageSEO() {
  return (
    <Helmet>
      <title>Expert Faculty & Teachers | ENVIRR Institute Gurugram</title>
      <meta name="description" content="Meet our experienced faculty with 7-12 years expertise. Mathematics, Physics, Chemistry, Biology specialists dedicated to your academic success." />
      <meta name="keywords" content="expert teachers, experienced faculty, math teacher, physics teacher, chemistry teacher, biology teacher, best teachers Gurugram" />
      <meta property="og:title" content="Expert Faculty & Teachers | ENVIRR Institute" />
      <meta property="og:description" content="Highly experienced faculty in Mathematics, Physics, Chemistry & Biology dedicated to student excellence." />
    </Helmet>
  )
}

export function ResultsPageSEO() {
  return (
    <Helmet>
      <title>Student Success Stories & Toppers | ENVIRR Institute Results</title>
      <meta name="description" content="See our student achievements - 98% board passing rate with toppers scoring 90%+. Join successful students at ENVIRR Institute." />
      <meta name="keywords" content="student results, success stories, topper students, board exam results, achievers" />
      <meta property="og:title" content="Student Success Stories | 98% Results" />
      <meta property="og:description" content="98% board success rate with toppers scoring 90%+. See real student achievements." />
    </Helmet>
  )
}

export function ContactPageSEO() {
  return (
    <Helmet>
      <title>Contact ENVIRR Institute - Gurugram Branches | Get Admission</title>
      <meta name="description" content="Contact ENVIRR Institute. 2 branches in Gurugram (Sector 7 & 9). Call, WhatsApp, or visit for admissions. Expert guidance available." />
      <meta name="keywords" content="contact coaching, ENVIRR location, coaching near me, Gurugram branches, admission inquiry" />
      <meta property="og:title" content="Contact ENVIRR Institute - Gurugram" />
      <meta property="og:description" content="Contact us for admission inquiry. 2 convenient locations in Gurugram. Call or WhatsApp now." />
    </Helmet>
  )
}

export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ENVIRR Institute",
    "url": "https://envirr.com",
    "description": "Expert coaching for CBSE and ICSE students, Classes VI-XII",
    "ContactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-9354736961",
      "email": "envirr.help@gmail.com"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Opposite Prakash Hospital, Madanpuri Rd, Jyoti Park",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122001",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "G NO, 1, Basai Rd, Basai Enclave, Basai Village",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122006",
        "addressCountry": "IN"
      }
    ]
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  )
}
