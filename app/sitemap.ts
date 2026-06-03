import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.therootedhealth.net', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://www.therootedhealth.net/memberships', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.therootedhealth.net/glp-1', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.therootedhealth.net/medspa', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.therootedhealth.net/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.therootedhealth.net/quiz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.therootedhealth.net/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.therootedhealth.net/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.therootedhealth.net/spaah', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.therootedhealth.net/cabot', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.therootedhealth.net/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.therootedhealth.net/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.therootedhealth.net/sms-terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.therootedhealth.net/hipaa', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.therootedhealth.net/spaah-clinic', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.therootedhealth.net/cabot-clinic', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.therootedhealth.net/results', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.therootedhealth.net/nad', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.therootedhealth.net/signin', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://www.therootedhealth.net/signup', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://www.therootedhealth.net/good-faith-estimate', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.therootedhealth.net/telehealth-consent', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
