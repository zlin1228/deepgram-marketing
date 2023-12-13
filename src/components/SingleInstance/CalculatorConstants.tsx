export const modelList = [
  {
    id: 'deepgram-nova',
    heading: 'Deepgram Nova-2',
    pricing: '$0.0043',
    accuracy: 5,
    speed: 5,
    cost: 1.5,
  },
  {
    id: 'whisper-large',
    heading: 'Whisper Large',
    pricing: '$0.0048',
    accuracy: 3.5,
    speed: 3.5,
    cost: 2,
  },
  {
    id: 'whisper-medium',
    heading: 'Whisper Medium',
    pricing: '$0.0042',
    accuracy: 2.5,
    speed: 4,
    cost: 1,
  },
  {
    id: 'whisper-small',
    heading: 'Whisper Small',
    pricing: '$0.0038',
    accuracy: 2,
    speed: 4.5,
    cost: 1,
  },
  {
    id: 'whisper-base',
    heading: 'Whisper Base',
    pricing: '$0.0035',
    accuracy: 1.5,
    speed: 5,
    cost: 0.5,
  },
  {
    id: 'whisper-tiny',
    heading: 'Whisper Tiny',
    pricing: '$0.0033',
    accuracy: 1,
    speed: 5,
    cost: 0.5,
  },
] as const;

export const addOnList = ['Summarization', 'Entity detection', 'PII redaction', 'Topic detection'] as const;

export const thresholds = {
  'deepgram-nova': {
    batch: {
      payg: 0.0043,
      growth: 0.0036,
      premium: 0.0036,
    },
    realtime: {
      payg: 0.0059,
      growth: 0.0049,
      premium: 0.049,
    },
  },
  'whisper-tiny': {
    payg: 0.0033,
    growth: 0.0027,
    premium: 0.0027,
  },
  'whisper-base': {
    payg: 0.0035,
    growth: 0.0028,
    premium: 0.0028,
  },
  'whisper-small': {
    payg: 0.0038,
    growth: 0.0032,
    premium: 0.0032,
  },
  'whisper-medium': {
    payg: 0.0042,
    growth: 0.0035,
    premium: 0.0035,
  },
  'whisper-large': {
    payg: 0.0048,
    growth: 0.0038,
    premium: 0.0038,
  },
  addon: {
    payg: 0.0043,
    growth: 0.0035,
    premium: 0.0035,
  },
} as const;

export const planTitle = {
  payg: 'Pay As You Go',
  growth: 'Growth',
  premium: 'Enterprise',
} as const;

export type planTitleType = keyof typeof planTitle;

export const additionalFeatures = {
  payg: ['High rate limit', 'Community support'],
  growth: ['Higher rate limits', 'Multi-channel support', 'Early access to new features', 'Community support'],
  premium: [
    'No rate limits',
    'Multi-channel support',
    'Priority access to new features',
    'Dedicated support team',
    'Prioritized requests',
    'Premium integrations',
    'Enterprise-grade security',
    'On-prem or VPC deployment',
  ],
} as const;

export const planCTA = {
  payg: {
    link: 'https://console.deepgram.com/signup?jump=checkout&plan=pay-as-you-go',
    label: 'Sign Up Free',
    theme: 'primary',
  },
  growth: {
    link: 'https://console.deepgram.com/signup?jump=checkout&plan=growth',
    label: 'Buy Now',
    theme: 'purple',
  },
  premium: {
    link: 'https://deepgram.com/contact-us/',
    label: 'Talk To Sales',
    theme: 'success',
  },
} as const;
