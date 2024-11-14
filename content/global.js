export const organization = {
  name: "Omkar Sangeet Mahavidyalaya",
  description:
    "Omkar Sangeet is an Indian classical music academy offering classes for Vocal, Harmonium, Piano, Keyboard, Kathak, and more.",
  address:
    "F-3, Panchvilla Tower, Nr B.D.Rao Hall Bhuyangdev to Memnagar Rd, Bhuyangdev Cross Rd, Ahmedabad, Gujarat 380052, India",
  phoneNum1: "+91 97259 20213",
  phoneNum2: "+91 95370 44726",
  email: "omkarsangeet1071@gmail.com",
  socialMedia: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/OmkarSangeet",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/OmkarSangeet",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/OmkarSangeet",
    },
  ],
};

export const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "Courses",
    url: "/courses",
  },
  {
    id: 3,
    label: "About",
    url: "/about",
  },
  {
    id: 4,
    label: "Gallery",
    url: "/gallery",
  },
  {
    id: 5,
    label: "Contact",
    url: "/contact",
  },
];

export const footerSections = [
  {
    title: "About Us",
    content: organization.description,
  },
  {
    title: "Social Media",
    content: organization.socialMedia,
  },
  // Add more sections as needed
];
