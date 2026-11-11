// Company details used across the site. Replace each [PLACEHOLDER: ...] with the real value.
export const site = {
  name: 'Vantage Energy',
  cta: 'Book a free compliance check',
  phone: '[PLACEHOLDER: phone number]',
  email: '[PLACEHOLDER: email address]',
  legalName: '[PLACEHOLDER: legal entity name]',
  cityUrl: 'https://www.energizedenver.org',
  citySmallBuildingsUrl: 'https://www.energizedenver.org/small-buildings',
};

// Deadlines by building size, as published at energizedenver.org/small-buildings.
// Checked against the City's page on the date below. Re-check before each update.
export const deadlines = {
  checked: 'November 11, 2026',
  rows: [
    { size: '20,000 to 24,999 sq ft', due: 'December 31, 2026' },
    { size: '15,000 to 19,999 sq ft', due: 'December 31, 2027' },
    { size: '10,000 to 14,999 sq ft', due: 'December 31, 2028' },
    { size: '5,000 to 9,999 sq ft', due: 'December 31, 2029' },
  ],
};
