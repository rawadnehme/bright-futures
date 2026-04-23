export const org = {
  name: 'BrightFutures',
  tagline: 'Students Helping Students',
  email: 'brightfuturessupplies@gmail.com',
  location: 'Dearborn, Michigan',
  school: 'Bryant Middle School',
  url: 'https://javvad.dev/bright-futures/',
  description:
    'A student-run charity helping classmates at Bryant Middle School get the school supplies they need to succeed. 100% of donations go directly to students in need.',
  payments: {
    cashapp: { tag: '$SaintGrav', url: 'https://cash.app/$SaintGrav' },
    venmo: { tag: '@MichiganBrightFuture', url: 'https://venmo.com/MichiganBrightFuture' },
  },
};

export const hero = {
  eyebrow: 'Students Helping Students',
  headline: ['Every kid shows up.', 'We help them show up ', 'ready.'],
  sub: `We're just students who believe every kid deserves a fair shot at learning. We're starting with ${org.school} in ${org.location}, and with your help, we hope to reach many more schools in the future.`,
  cta: 'Donate Now',
  secondary: 'Learn More',
};

export const mission = {
  eyebrow: 'The Problem',
  headline: 'We see it every day.',
  paragraphs: [
    'Every single day, classmates show up to school with nothing: no pencils, no notebooks, no supplies at all. Not because they forgot them, because they were never able to get them.',
    'This isn’t a one-time thing. It’s a widespread problem that makes it harder for kids to focus, participate, and succeed. As students ourselves, we refuse to look the other way.',
  ],
  values: [
    {
      title: 'Educational Resources',
      body: 'Books, technology, and learning materials that every student needs to succeed.',
      tone: 'amber',
    },
    {
      title: 'Community Support',
      body: `Building a stronger community around ${org.school} by connecting donors directly with student needs.`,
      tone: 'blue',
    },
    {
      title: 'Brighter Futures',
      body: 'Investing in programs and supplies that inspire creativity, confidence, and achievement.',
      tone: 'green',
    },
  ],
};

export const story = {
  eyebrow: 'Our Story',
  headline: ['Just students,', 'making a difference.'],
  paragraphs: [
    'We’re a group of students who saw a problem and decided to do something about it. We know firsthand what it feels like to need supplies, resources, or just a little extra support to succeed in school.',
    `We’re starting with ${org.school} in ${org.location}, a school close to our hearts. But this is just the beginning. Our dream is to grow and support more schools in our community and beyond.`,
    'We’re not a company. We’re not here to profit. We’re just students trying to make a difference, one school at a time.',
  ],
  pledge: '100% of donations go directly to the students',
  photo: {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
    alt: 'Students in a classroom',
    credit: { label: 'Dearborn, MI', sub: `${org.school} serves a diverse community of learners` },
  },
};

export const impact = {
  eyebrow: 'Our Impact',
  headline: ['Small donations,', 'big differences.'],
  sub: 'We believe in transparency and direct impact. Here’s what we’re working toward together.',
  stats: [
    { value: 500, suffix: '+', label: 'Students we aim to help', sub: `starting at ${org.school}` },
    { value: 100, suffix: '%', label: 'Goes to the cause', sub: 'no profit, ever' },
    { value: '∞', label: 'Schools in our future', sub: 'this is just the beginning' },
  ],
};

export const donate = {
  eyebrow: 'Make a Difference',
  headline: 'Ready to help?',
  sub: `We’re students doing this from the heart, no middlemen, no overhead. Donations go directly to students in need, starting with ${org.school} and growing to more schools as we go.`,
  amounts: [
    { amount: '$5', note: 'Pencils & notebooks for a student' },
    { amount: '$15', note: 'A new book for the classroom' },
    { amount: '$25', note: 'Art supplies for a class' },
    { amount: '$50', note: 'Technology resources' },
    { amount: '$100', note: 'Classroom improvement fund' },
    { amount: 'Any', note: 'Every dollar makes a difference' },
  ],
};

export const nav = [
  { href: '#mission', label: 'Mission' },
  { href: '#story', label: 'Our Story' },
  { href: '#impact', label: 'Impact' },
  { href: '#donate', label: 'Donate' },
];
