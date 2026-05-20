import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rootedhealthmember.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://rootedhealthmember.com/memberships', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rootedhealthmember.com/glp-1', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rootedhealthmember.com/medspa', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rootedhealthmember.com/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://rootedhealthmember.com/quiz', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://rootedhealthmember.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rootedhealthmember.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rootedhealthmember.com/spaah', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://rootedhealthmember.com/cabot', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://rootedhealthmember.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://rootedhealthmember.com/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://rootedhealthmember.com/sms-terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://rootedhealthmember.com/hipaa', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://rootedhealthmember.com/spaah-clinic', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rootedhealthmember.com/cabot-clinic', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://rootedhealthmember.com/results', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rootedhealthmember.com/nad', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://rootedhealthmember.com/signin', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: 'https://rootedhealthmember.com/signup', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://rootedhealthmember.com/good-faith-estimate', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://rootedhealthmember.com/telehealth-consent', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
