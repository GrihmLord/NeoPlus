export const PROFILE_DATA = {
    name: 'John Doe',
    role: 'Software Developer',
    bio: 'Passionate about creating amazing apps',
    rating: 4.8,
    coverImageUrl: 'https://example.com/cover-image.jpg',
    profileImageUrl: 'https://example.com/profile-image.jpg',
    aliasImageUrl: 'https://example.com/alias-image.jpg',
    aliasHandle: '@johndoe',
    credits: 500,
    stats: [
      { label: 'Posts', value: 120 },
      { label: 'Followers', value: '10K' },
      { label: 'Following', value: 250 },
    ],
    analytics: [
      { label: 'Views', value: '5.2K' },
      { label: 'Likes', value: '3.1K' },
      { label: 'Comments', value: 420 },
    ],
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
    },
    walletButtons: [
      { icon: 'rocket', text: 'Boost' },
      { icon: 'cart', text: 'Buy Credits' },
    ],
  };
  
  export const SETTINGS_ITEMS = [
    'Edit Profile',
    'Privacy Settings',
    'Notifications',
    'Payment Methods',
    'Help & Support',
    'Log Out',
  ];