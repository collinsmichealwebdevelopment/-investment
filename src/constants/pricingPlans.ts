export const princingPlans = [
    {
        title: 'Beginners',
        price: 2000,
        currency: 'USD',
        frequency: '/Week',
        description: 'Deposit up to $1000 get double $2000 a week .',
        features: [
            'Mostly for beginners',
            'Up to 1,000 subscribers',
            'Basic analytics',
            'Users receives 2x of deposited money after a week'
        ],
        cta: 'start your trial',
        mostPopular: false,
    },
    {
        title: 'Regular',
        price: 15000,
        currency: 'USD',
        frequency: '/5days',
        description: 'Deposit up to $5000 get $15000 in 5days.',
        features: [
            'For regular users',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            'Users receives 3x of deposited money after 5days',
        ],
        cta: 'Start your trial',
        mostPopular: true,
    },
    {
        title: 'Professional',
        price: 40000,
        currency: 'USD',
        frequency: '/3days',
        description: 'Deposit up to $10000 get $40000 in 3days',
        features: [
            'For professionals',
            'Unlimited subscribers',
            'Advanced analytics',
            'Users receives 4x of deposited money after 3days',
        ],
        cta: 'Start your trial',
        mostPopular: false,
    },
]