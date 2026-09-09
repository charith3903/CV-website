// One-off generator for locations.html + city landing pages. Not part of the site runtime.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const cities = [
  {
    slug: 'colombo',
    name: 'Colombo',
    region: 'Western Province',
    lat: '6.9271',
    lng: '79.8612',
    eyebrow: "Sri Lanka's Capital & Corporate Hub",
    blurb: "Sri Lanka's banking and corporate capital — the most competitive CV market in the country.",
    intro: "Colombo is home to Sri Lanka's banking headquarters, multinational BPOs, and the country's densest concentration of white-collar jobs — which also means the most competitive CVs land on a recruiter's desk. Colombo employers expect polished, ATS-optimized CVs that stand out instantly. The Elegant Grid has helped professionals across Colombo 1 to Colombo 15 — from Fort's financial district to the IT parks of Rajagiriya — land interviews at the city's most sought-after companies.",
    industries: [
      { title: 'Banking & Finance', desc: "Colombo's Fort and Union Place house the country's major banks and financial institutions. We know how to position finance, accounting, and audit professionals for roles at leading banks and international audit firms." },
      { title: 'IT & BPO', desc: "Colombo's tech and outsourcing sector is Sri Lanka's largest. We write CVs that speak the language of ATS-optimized tech recruiting — highlighting your stack, projects, and measurable impact." },
      { title: 'Corporate & Multinational', desc: 'Head offices for apparel giants, FMCG brands, and multinational conglomerates are concentrated in Colombo. We tailor CVs for corporate management, marketing, HR, and operations roles at this level.' },
    ],
    faqs: [
      { q: 'Do I need to meet you in person in Colombo?', a: 'No — our entire process happens online via WhatsApp, call, or email, so you can work with us from anywhere in Colombo without visiting an office.' },
      { q: "How long does it take to get my CV if I'm based in Colombo?", a: 'Most Colombo clients receive their first draft within 24–48 hours of our consultation, with unlimited revisions until you are satisfied.' },
      { q: "Do you understand ATS systems used by Colombo's larger companies?", a: 'Yes — many Colombo employers, especially banks, BPOs, and multinationals, use ATS software to filter CVs. We optimize formatting and keywords specifically to pass these systems.' },
      { q: 'What does a professional CV cost for Colombo job seekers?', a: 'Pricing depends on the package and your experience level — see our Packages page for full details. Every package includes a free cover letter and unlimited revisions.' },
    ],
  },
  {
    slug: 'kandy',
    name: 'Kandy',
    region: 'Central Province',
    lat: '7.2906',
    lng: '80.6337',
    eyebrow: "The Hill Capital's Education & Administration Hub",
    blurb: 'A city of academia, public administration, and a growing outsourcing sector in the hill country.',
    intro: "Kandy blends academia, public administration, and a growing outsourcing sector. Home to the University of Peradeniya and major government offices, Kandy's job market rewards CVs that combine academic credibility with clear professional structure. We've helped lecturers, administrators, and Kandy's emerging IT and BPO professionals build CVs that get noticed — whether applying locally or to Colombo-based head offices.",
    industries: [
      { title: 'Education & Academia', desc: 'With the University of Peradeniya and dozens of leading schools nearby, we know how to present academic qualifications, research, and teaching experience in a way that resonates with hiring panels.' },
      { title: 'Public Sector & Administration', desc: 'Kandy hosts significant government and provincial administration offices. We format CVs to match the structured, credential-focused expectations of public sector recruitment.' },
      { title: 'Tourism & Hospitality', desc: "As a UNESCO World Heritage city and gateway to the hill country, Kandy's hotels and tour operators need customer-facing professionals with polished, service-oriented CVs." },
    ],
    faqs: [
      { q: "Can you help even though I'm not in Colombo?", a: 'Absolutely — we work entirely online, so being based in Kandy makes no difference. Many of our clients are outside Colombo.' },
      { q: 'Do you write CVs for academic and teaching positions?', a: "Yes, we regularly write CVs for lecturers, teachers, and researchers applying to Kandy's universities and schools, structured to highlight qualifications and publications properly." },
      { q: 'How do I get started from Kandy?', a: "Just message us on WhatsApp or email — we'll schedule a call to understand your career goals and begin your CV the same day." },
      { q: 'Is a Sinhala version available for Kandy clients?', a: 'Yes, we can prepare your CV and cover letter in English, Sinhala, or both depending on the roles you are targeting.' },
    ],
  },
  {
    slug: 'galle',
    name: 'Galle',
    region: 'Southern Province',
    lat: '6.0535',
    lng: '80.2210',
    eyebrow: "Southern Sri Lanka's Tourism & Maritime Gateway",
    blurb: 'Tourism, maritime trade, and a growing freelance community along the southern coast.',
    intro: "Galle's economy runs on tourism, the historic Galle Port's maritime trade, and a growing community of freelancers and remote professionals drawn to its coastline. Whether you're applying to a resort along the Galle coast, a shipping and logistics firm, or pitching yourself for remote or international work from Galle, we build CVs that match what southern coast employers — and overseas clients — actually look for.",
    industries: [
      { title: 'Tourism & Hospitality', desc: 'From boutique hotels in Galle Fort to international resort chains along the coast, we craft CVs for hospitality management, guest relations, and culinary professionals that highlight service excellence.' },
      { title: 'Maritime & Shipping', desc: 'Galle Port and the surrounding logistics network need professionals in shipping, freight, and port operations. We know how to present maritime certifications and experience clearly.' },
      { title: 'Freelance & Remote Work', desc: 'Galle has a growing base of freelancers and remote workers. We build CVs and portfolio websites that help you win international clients and remote roles, wherever they are based.' },
    ],
    faqs: [
      { q: 'I work remotely from Galle for international clients — can you still help?', a: 'Yes — we specialize in CVs and portfolio websites for freelancers and remote professionals, formatted for international clients and platforms.' },
      { q: 'Do you write CVs for hospitality and hotel management roles?', a: "Yes, hospitality is one of our specialties given Galle's tourism industry — we know exactly what resort and hotel HR teams look for." },
      { q: 'Can I complete the whole process without visiting an office in Galle?', a: 'Yes, everything is handled online via WhatsApp, call, or email — no office visit needed anywhere on the south coast.' },
      { q: 'How much does a CV cost for Galle-based clients?', a: 'The same transparent pricing applies nationwide — check our Packages page. Location does not affect pricing.' },
    ],
  },
  {
    slug: 'negombo',
    name: 'Negombo',
    region: 'Western Province',
    lat: '7.2083',
    lng: '79.8358',
    eyebrow: "Home to Sri Lanka's International Airport",
    blurb: 'Aviation, export manufacturing, and tourism around Bandaranaike International Airport.',
    intro: "Negombo sits minutes from Bandaranaike International Airport and the Katunayake Free Trade Zone, making it a hub for aviation, tourism, fishing, and export manufacturing careers. We help Negombo job seekers — from airline and ground staff to FTZ apparel professionals and hoteliers — put together CVs that meet the exact standards of these fast-moving industries.",
    industries: [
      { title: 'Aviation & Airport Services', desc: 'With BIA nearby, Negombo is a launchpad for careers in airline crew, ground handling, cargo, and aviation support. We format CVs to meet airline and aviation authority requirements.' },
      { title: 'Export Manufacturing & FTZ', desc: "The Katunayake Free Trade Zone is one of Sri Lanka's largest export manufacturing hubs. We write CVs for production, quality assurance, and supply chain roles that match FTZ employer expectations." },
      { title: 'Tourism & Fishing', desc: "Negombo's beach hotels and its historic fishing industry both need distinct CV approaches — from hospitality service roles to maritime and export seafood operations." },
    ],
    faqs: [
      { q: 'Do you write CVs for airline and aviation jobs?', a: 'Yes — we understand the specific format and certifications airlines and ground handling companies expect, and we tailor CVs accordingly.' },
      { q: "I'm applying to FTZ companies near Katunayake — can you help?", a: 'Definitely. We regularly write CVs for production, QA, and supply chain roles targeting Free Trade Zone employers.' },
      { q: 'Is your service available if I travel often for work (aviation staff)?', a: 'Yes, our whole process is online and flexible around your schedule — ideal for aviation and shift-based professionals.' },
      { q: 'How fast can I get a CV before a Negombo job interview?', a: 'We can typically turn around a first draft within 24–48 hours, and faster if you have an urgent interview — just let us know.' },
    ],
  },
  {
    slug: 'jaffna',
    name: 'Jaffna',
    region: 'Northern Province',
    lat: '9.6615',
    lng: '80.0255',
    eyebrow: "The Northern Province's Education & Growth Hub",
    blurb: 'Education, agriculture, and a fast-growing IT sector in the north.',
    intro: "Jaffna's job market is being reshaped by education, agriculture, and a fast-growing IT and BPO sector as investment returns to the north. Many of our Jaffna clients are recent University of Jaffna graduates, returning diaspora professionals, or public sector applicants — and we tailor each CV to reflect both local opportunity and, where relevant, international experience.",
    industries: [
      { title: 'Education & Graduate Careers', desc: 'With the University of Jaffna producing strong graduate talent, we help fresh graduates build their very first professional CV — structured around skills and achievements instead of work history.' },
      { title: 'Growing IT & BPO Sector', desc: 'As IT and outsourcing companies expand into Jaffna, we prepare CVs that meet the ATS and technical-screening standards used by these employers.' },
      { title: 'Returning Diaspora Professionals', desc: 'Many Jaffna families have members returning from abroad. We help translate international work experience into a CV that resonates with both local and global employers.' },
    ],
    faqs: [
      { q: 'I am a fresh graduate from University of Jaffna with no experience — can you help?', a: 'Yes, this is one of our specialties. We build CVs for first-time job seekers around skills, coursework, and achievements instead of work history.' },
      { q: "I've been working abroad and I'm moving back to Jaffna — how do I present that?", a: 'We restructure international experience so it is immediately relevant to local employers, translating job titles, responsibilities, and impact clearly.' },
      { q: 'Do you offer Tamil-language support?', a: 'We currently write CVs in English and Sinhala; let us know your target roles and we will advise on the best language approach for your applications.' },
      { q: 'How do I start the process from Jaffna?', a: 'Everything is done remotely over WhatsApp, call, or email — message us anytime and we will begin right away.' },
    ],
  },
  {
    slug: 'kurunegala',
    name: 'Kurunegala',
    region: 'North Western Province',
    lat: '7.4863',
    lng: '80.3647',
    eyebrow: "North Western Province's Trade & Administration Center",
    blurb: 'Agriculture, SME trade, and regional administration in the North Western Province.',
    intro: "Kurunegala anchors the North Western Province's agriculture, SME trade, and regional administration. Job seekers here often move between local government roles, agri-business, and SME management — and increasingly, remote positions with Colombo-based or international companies. We build CVs that work across all three.",
    industries: [
      { title: 'Agriculture & Agri-Business', desc: "Coconut, rubber, and produce trade drive much of Kurunegala's economy. We know how to present agri-business, estate management, and trade experience professionally." },
      { title: 'SME & Local Trade', desc: 'Kurunegala has a dense small-and-medium enterprise sector. We write CVs for sales, operations, and management roles that fit SME hiring expectations.' },
      { title: 'Regional & Public Administration', desc: 'As a provincial hub, Kurunegala has significant government and administrative employment. We format CVs to suit structured public sector applications.' },
    ],
    faqs: [
      { q: "Can I use your service if I'm targeting jobs outside Kurunegala too?", a: 'Yes — many clients use one strong CV to apply both locally and to Colombo-based or remote roles. We can build a version optimized for each.' },
      { q: 'Do you write CVs for agriculture and estate management roles?', a: 'Yes, this is a common request from the Kurunegala area and we know how to frame agri-business experience effectively.' },
      { q: 'What if I need my CV updated later for a new job?', a: 'Every package includes unlimited revisions, and we keep your CV on file so future updates are quick and easy.' },
      { q: 'How do I pay for the service from Kurunegala?', a: 'We accept convenient local payment methods, and you only pay once you are 100% satisfied with the final CV.' },
    ],
  },
  {
    slug: 'gampaha',
    name: 'Gampaha',
    region: 'Western Province',
    lat: '7.0917',
    lng: '80.0000',
    eyebrow: "Sri Lanka's Industrial & Manufacturing Corridor",
    blurb: 'BOI industrial zones, apparel exports, and logistics between Colombo and the airport.',
    intro: 'Gampaha district sits along the industrial corridor between Colombo and the airport, home to major BOI industrial zones, apparel factories, and logistics operations. We help Gampaha professionals — from factory floor supervisors to logistics coordinators and corporate support staff — build CVs that match the operational, results-driven expectations of manufacturing and logistics employers.',
    industries: [
      { title: 'Manufacturing & BOI Industrial Zones', desc: 'Gampaha hosts several Board of Investment industrial zones. We write CVs for production supervisors, quality control, and plant management roles that speak directly to manufacturing recruiters.' },
      { title: 'Apparel & Export', desc: "The apparel export sector employs thousands across Gampaha. We know how to structure CVs for merchandising, production planning, and compliance roles." },
      { title: 'Logistics & Supply Chain', desc: 'Positioned between Colombo Port and the airport, Gampaha is a logistics corridor. We craft CVs for warehousing, freight, and supply chain professionals.' },
    ],
    faqs: [
      { q: 'Do you write CVs for factory and production supervisor roles?', a: "Yes, we regularly write CVs for manufacturing, production, and quality control professionals across Gampaha's industrial zones." },
      { q: 'I work shifts — can I still get a consultation?', a: 'Yes, we work flexibly over WhatsApp and can schedule around your shift pattern.' },
      { q: 'Is Gampaha covered under your 24/7 availability?', a: 'Yes, our online service covers all of Sri Lanka, including Gampaha, with the same 24/7 availability.' },
      { q: 'How much does a CV for a logistics or supply chain role cost?', a: 'Pricing is the same nationwide regardless of role or location — see our Packages page for full details.' },
    ],
  },
  {
    slug: 'matara',
    name: 'Matara',
    region: 'Southern Province',
    lat: '5.9549',
    lng: '80.5550',
    eyebrow: "The Deep South's Education & Fisheries Hub",
    blurb: 'University of Ruhuna graduates, fisheries, and a rising remote-work scene near Mirissa and Weligama.',
    intro: "Matara combines a strong academic base at the University of Ruhuna with fisheries, tourism from nearby Mirissa and Weligama, and a rising interest in remote and freelance careers. We help Matara's graduates, fisheries and export professionals, and remote workers build CVs suited to exactly the opportunities they are chasing — local, national, or international.",
    industries: [
      { title: 'Education & Graduate Careers', desc: 'University of Ruhuna produces strong graduate talent across science, management, and engineering. We build first-CV documents that highlight potential over experience.' },
      { title: 'Fisheries & Export', desc: "Matara's fisheries industry supports local and export markets. We write CVs for operations, quality assurance, and export documentation roles in this sector." },
      { title: 'Tourism & Remote Work', desc: "With Mirissa and Weligama nearby, tourism and a growing remote-work community shape Matara's job scene. We build CVs and portfolio sites for both hospitality and remote or freelance careers." },
    ],
    faqs: [
      { q: 'I am a University of Ruhuna graduate with no work experience — can you help?', a: 'Yes, we specialize in graduate CVs that emphasize academic projects, skills, and potential when work history is limited.' },
      { q: 'Do you help with CVs for fisheries and export companies?', a: 'Yes, we understand the documentation and quality-standard language these roles require.' },
      { q: 'Can I get a portfolio website too if I work remotely from Matara?', a: 'Yes, we offer portfolio and resume website packages ideal for freelancers and remote professionals based anywhere in Sri Lanka, including Matara.' },
      { q: 'How do I begin the process from Matara?', a: 'Message us on WhatsApp or email to schedule your free consultation call — the whole process happens online.' },
    ],
  },
];

const gaSnippet = `  <meta name="google-site-verification" content="EtRf5AR_Bwe78my98YXGcxAbP3IAm6jEaLNcoJSj36k" />
  <!-- Google tag (gtag.js) - replace G-XXXXXXXXXX with your real GA4 Measurement ID -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  <!-- Meta Pixel Code -->
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1369031134944678');
    fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=1369031134944678&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->`;

function navLinks(active) {
  const items = [
    ['index.html', 'Home', 'home'],
    ['about.html', 'About Us', 'about'],
    ['our-service.html', 'Our Service', 'service'],
    ['our-packages.html', 'Our Packages', 'packages'],
    ['our-work.html', 'Our Work', 'work'],
    ['blog.html', 'Blog', 'blog'],
    ['locations.html', 'Locations', 'locations'],
    ['contact.html', 'Contact', 'contact'],
  ];
  return items
    .map(([href, label, key]) => `        <a class="nav-link${key === active ? ' active' : ''}" href="${href}">${label}</a>`)
    .join('\n');
}

function footer() {
  return `    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <img src="image/logo-icon.png" alt="The Elegant Grid" class="footer-logo-img">
            <span>The Elegant Grid</span>
          </a>
          <p class="footer-tagline">Premium CV Design Service<br>ඔබේ සාර්ථකත්වය අපේ ඉලක්කයයි 🎯</p>
          <div class="footer-social">
            <a href="https://wa.me/94765892413" class="social-icon" title="WhatsApp">💬</a>
            <a href="https://www.facebook.com/profile.php?id=61570228373706" class="social-icon" title="Facebook">📘</a>
            <a href="https://www.instagram.com/the_elegant_grid/" class="social-icon" title="Instagram">📸</a>
            <a href="#" class="social-icon" title="LinkedIn">💼</a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="our-service.html">Our Services</a></li>
            <li><a href="our-packages.html">Packages & Pricing</a></li>
            <li><a href="our-work.html">Our Work</a></li>
            <li><a href="locations.html">Locations We Serve</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="our-packages.html">Professional CVs</a></li>
            <li><a href="our-packages.html">LinkedIn Profiles</a></li>
            <li><a href="our-packages.html">Portfolio Websites</a></li>
            <li><a href="our-packages.html">Resume Websites</a></li>
            <li><a href="our-packages.html">Combo Packages</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact Us 24/7</h4>
          <div class="contact-item"><span>💬</span><a href="https://wa.me/94765892413">+94 76 589 2413</a></div>
          <div class="contact-item"><span>📧</span><a href="mailto:the.elegant.grid@gmail.com">the.elegant.grid@gmail.com</a></div>
          <div class="contact-item"><span>⏰</span><span>Available 24/7</span></div>
          <a href="https://wa.me/94765892413?text=Hi!%20I'm%20interested%20in%20your%20CV%20services." class="footer-cta" target="_blank">💬 Chat Now</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 The Elegant Grid — All Rights Reserved</p>
        <p class="footer-promises">🔄 Unlimited Revisions • 💳 Pay When Satisfied • 📞 24/7 Support</p>
      </div>
    </footer>`;
}

function cityPage(c) {
  const url = `https://elegantgrid.tech/cv-writing-service-${c.slug}`;
  const title = `CV Writing Service in ${c.name}, Sri Lanka | The Elegant Grid`;
  const desc = `Professional CV, resume & cover letter writing service for ${c.name} job seekers. ATS-optimized, unlimited revisions, pay only when satisfied. Serving ${c.name} and all of Sri Lanka online.`;
  const keywords = `CV writing service ${c.name}, resume writing ${c.name} Sri Lanka, professional CV ${c.name}, ATS CV ${c.name}, cover letter ${c.name} Sri Lanka`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description: desc,
        isPartOf: { '@id': 'https://elegantgrid.tech/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elegantgrid.tech/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://elegantgrid.tech/locations' },
            { '@type': 'ListItem', position: 3, name: c.name, item: url },
          ],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${url}#business`,
        name: `The Elegant Grid — ${c.name}`,
        description: desc,
        url,
        logo: 'https://elegantgrid.tech/image/logo-social.png',
        image: 'https://elegantgrid.tech/image/logo-social.png',
        telephone: '+94765892413',
        email: 'the.elegant.grid@gmail.com',
        priceRange: '$$',
        openingHours: 'Mo-Su 00:00-24:00',
        address: { '@type': 'PostalAddress', addressCountry: 'LK', addressRegion: c.region, addressLocality: c.name },
        geo: { '@type': 'GeoCoordinates', latitude: c.lat, longitude: c.lng },
        areaServed: { '@type': 'City', name: c.name },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  const industryCards = c.industries
    .map(
      (i) => `          <article class="service-card">
            <h3>${i.title}</h3>
            <p>${i.desc}</p>
          </article>`
    )
    .join('\n');

  const faqCards = c.faqs
    .map(
      (f) => `          <article class="service-card">
            <h3>${f.q}</h3>
            <p>${f.a}</p>
          </article>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="image/logo-icon.png" />
${gaSnippet}
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- ─── Primary SEO ─── -->
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="keywords" content="${keywords}" />
  <meta name="author" content="The Elegant Grid" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="${url}" />

  <!-- ─── Geo Targeting ─── -->
  <meta name="geo.region" content="LK" />
  <meta name="geo.placename" content="${c.name}, Sri Lanka" />
  <meta name="geo.position" content="${c.lat};${c.lng}" />
  <meta name="ICBM" content="${c.lat}, ${c.lng}" />
  <meta name="language" content="en-LK" />

  <!-- ─── Open Graph ─── -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="The Elegant Grid" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="https://elegantgrid.tech/image/logo-social.png" />
  <meta property="og:image:alt" content="The Elegant Grid — CV Writing Service in ${c.name}" />
  <meta property="og:locale" content="en_US" />

  <!-- ─── Twitter Card ─── -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@theelegantgrid" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${desc}" />
  <meta name="twitter:image" content="https://elegantgrid.tech/image/logo-social.png" />

  <!-- ─── Theme / PWA ─── -->
  <meta name="theme-color" content="#0f0f0f" />

  <!-- ─── JSON-LD Structured Data ─── -->
  <script type="application/ld+json">
  ${JSON.stringify(jsonLd, null, 2).split('\n').join('\n  ')}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="universe.css" />
</head>

<body>
  <div class="site-shell">
    <header class="site-header">
      <a href="index.html" class="site-brand">
        <img src="image/logo-icon.png" alt="The Elegant Grid Logo" class="site-logo">
        <span>The Elegant Grid</span>
      </a>
      <nav class="nav-links">
${navLinks('locations')}
      </nav>
    </header>

    <main>
      <section class="hero">
        <p class="hero__eyebrow">${c.eyebrow}</p>
        <h1>Professional CV & Resume Writing Service in ${c.name}, Sri Lanka</h1>
        <p>${c.intro}</p>
        <div class="hero__actions">
          <a class="button" href="contact.html">Start a Conversation</a>
          <a class="button button--ghost" href="our-packages.html">See Packages</a>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>${c.name}'s Job Market at a Glance</h2>
          <p>We tailor every CV to the industries that actually hire in ${c.name}.</p>
        </div>
        <div class="section-grid">
${industryCards}
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Why ${c.name} Professionals Choose The Elegant Grid</h2>
          <p>The same collaborative process and guarantees, wherever you are in Sri Lanka.</p>
        </div>
        <div class="section-grid highlight-grid">
          <article class="highlight-card">
            <div>
              <h3>100% Online Process</h3>
              <p>No office visit needed — everything happens over WhatsApp, call, or email, from anywhere in ${c.name}.</p>
            </div>
          </article>
          <article class="highlight-card">
            <div>
              <h3>ATS-Optimized</h3>
              <p>Every CV is formatted and keyword-optimized to pass Applicant Tracking Systems used by employers hiring in ${c.name}.</p>
            </div>
          </article>
          <article class="highlight-card">
            <div>
              <h3>Unlimited Revisions</h3>
              <p>We refine your CV until you're completely happy — no extra charge, no limit on revisions.</p>
            </div>
          </article>
          <article class="highlight-card">
            <div>
              <h3>Pay When Satisfied</h3>
              <p>No payment required until your CV is finished and you're 100% happy with the result.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Frequently Asked Questions — ${c.name}</h2>
          <p>Common questions from job seekers in ${c.name}.</p>
        </div>
        <div class="section-grid">
${faqCards}
        </div>
      </section>

      <section class="section">
        <div class="section-grid">
          <article class="contact-panel" style="text-align: center; grid-column: 1 / -1;">
            <h3>Ready to Build Your ${c.name} CV?</h3>
            <p>
              Message us today and let's create a CV that gets you noticed by employers in ${c.name} and beyond.
            </p>
            <div class="hero__actions" style="justify-content: center; margin-top: 1.5rem;">
              <a class="button" href="contact.html">Message Us</a>
              <a class="button button--ghost" href="locations.html">See All Locations</a>
            </div>
          </article>
        </div>
      </section>
    </main>

${footer()}
  </div>
  <script src="universe.js"></script>
</body>

</html>
`;
}

function locationsHubPage() {
  const url = 'https://elegantgrid.tech/locations';
  const title = 'CV Writing Services Across Sri Lanka | The Elegant Grid';
  const desc = 'The Elegant Grid provides professional CV, resume, and cover letter writing services online across Sri Lanka — including Colombo, Kandy, Galle, Negombo, Jaffna, Kurunegala, Gampaha, and Matara.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description: desc,
        isPartOf: { '@id': 'https://elegantgrid.tech/#website' },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://elegantgrid.tech/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: url },
          ],
        },
      },
      {
        '@type': 'ItemList',
        itemListElement: cities.map((c, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: `CV Writing Service in ${c.name}`,
          url: `https://elegantgrid.tech/cv-writing-service-${c.slug}`,
        })),
      },
    ],
  };

  const cards = cities
    .map(
      (c) => `          <article class="service-card">
            <h3>${c.name}</h3>
            <p>${c.blurb}</p>
            <p><a class="button button--ghost" href="cv-writing-service-${c.slug}.html">View ${c.name} Page →</a></p>
          </article>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="image/logo-icon.png" />
${gaSnippet}
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- ─── Primary SEO ─── -->
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta name="keywords" content="CV writing service Sri Lanka locations, CV writer Colombo, CV writer Kandy, CV writer Galle, CV writer Negombo, CV writer Jaffna, CV writer Kurunegala, CV writer Gampaha, CV writer Matara" />
  <meta name="author" content="The Elegant Grid" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="${url}" />

  <!-- ─── Geo Targeting: Sri Lanka ─── -->
  <meta name="geo.region" content="LK" />
  <meta name="geo.placename" content="Sri Lanka" />
  <meta name="geo.position" content="7.8731;80.7718" />
  <meta name="ICBM" content="7.8731, 80.7718" />
  <meta name="language" content="en-LK" />

  <!-- ─── Open Graph ─── -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="The Elegant Grid" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="https://elegantgrid.tech/image/logo-social.png" />
  <meta property="og:image:alt" content="The Elegant Grid — Locations We Serve" />
  <meta property="og:locale" content="en_US" />

  <!-- ─── Twitter Card ─── -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@theelegantgrid" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${desc}" />
  <meta name="twitter:image" content="https://elegantgrid.tech/image/logo-social.png" />

  <!-- ─── Theme / PWA ─── -->
  <meta name="theme-color" content="#0f0f0f" />

  <!-- ─── JSON-LD Structured Data ─── -->
  <script type="application/ld+json">
  ${JSON.stringify(jsonLd, null, 2).split('\n').join('\n  ')}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="universe.css" />
</head>

<body>
  <div class="site-shell">
    <header class="site-header">
      <a href="index.html" class="site-brand">
        <img src="image/logo-icon.png" alt="The Elegant Grid Logo" class="site-logo">
        <span>The Elegant Grid</span>
      </a>
      <nav class="nav-links">
${navLinks('locations')}
      </nav>
    </header>

    <main>
      <section class="hero">
        <p class="hero__eyebrow">Serving Job Seekers Across the Island</p>
        <h1>CV Writing Services Across Sri Lanka</h1>
        <p>
          The Elegant Grid works with clients 100% online, so wherever you are in Sri Lanka, you get the
          same ATS-optimized CVs, free cover letter, and unlimited revisions. Explore our dedicated pages
          below for local job-market insight in your city — or reach out even if your city isn't listed,
          we serve the whole island.
        </p>
        <div class="hero__actions">
          <a class="button" href="contact.html">Message Us</a>
          <a class="button button--ghost" href="our-packages.html">See Packages</a>
        </div>
      </section>

      <section class="section">
        <div class="section-title">
          <h2>Choose Your City</h2>
          <p>Local job-market insight and the same trusted process, wherever you are.</p>
        </div>
        <div class="section-grid">
${cards}
        </div>
      </section>
    </main>

${footer()}
  </div>
  <script src="universe.js"></script>
</body>

</html>
`;
}

for (const c of cities) {
  fs.writeFileSync(path.join(ROOT, `cv-writing-service-${c.slug}.html`), cityPage(c));
  console.log(`wrote cv-writing-service-${c.slug}.html`);
}
fs.writeFileSync(path.join(ROOT, 'locations.html'), locationsHubPage());
console.log('wrote locations.html');
