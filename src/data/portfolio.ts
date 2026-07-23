export type SocialLink = {
  label: string;
  href: string;
};

export type ProfileDetail = {
  label: string;
  value: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type ExperienceLink = {
  label: string;
  href?: string;
};

export type Experience = {
  id: string;
  title: string;
  company?: ExperienceLink;
  location: string;
  description: string;
  keyExperience: string[];
  outputLabel: string;
  outputs: ExperienceLink[];
};

export type ProjectCategory = "Laravel" | "React.js" | "Joomla" | ".NET";

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  href?: string;
};

export type EducationItem = {
  year: string;
  school: string;
  schoolUrl: string;
  degree: string;
};

export type Award = {
  title: string;
  description: string;
  date?: string;
  location?: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export const profile = {
  name: "Norman Lyle Pono",
  roles: ["Web Developer", "Programmer", "Freelancer"],
  headline: "Web Developer & Programmer",
  intro: "Hi, I'm Norman Lyle Pono, a web developer and programmer.",
  summary: [
    "Object-Oriented PHP / MySQL web developer",
    "Web programmer with 12 years of experience",
    "Strong front-end and back-end developer with a wide skillset",
    "Excellent problem-solving and technical skills",
    "Quick and flexible when adapting to new technologies",
    "Resourceful web research mindset",
    "Good team player",
  ],
  details: [
    { label: "Birthday", value: "20 Nov 1987" },
    { label: "Address", value: "From Philippines" },
    { label: "Degree", value: "Bachelor of Science in Computer Science" },
    { label: "Civil Status", value: "Married" },
  ] satisfies ProfileDetail[],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/iostream01/",
    },
    {
      label: "Skype",
      href: "https://join.skype.com/invite/YA5odM2keK8v",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/norman-lyle-pono-2178732a/",
    },
  ] satisfies SocialLink[],
};

export const skills: Skill[] = [
  { name: "Linux, Apache, MySQL, and PHP (LAMP)", level: 100 },
  { name: "HTML/XML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "Bootstrap 3, 4, 5", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "JQuery", level: 80 },
  { name: "Alpine.js", level: 50 },
  { name: "Angular", level: 60 },
  { name: "React.js", level: 60 },
  { name: "Vue", level: 60 },
  { name: "Livewire", level: 90 },
  { name: "Laravel 5, 6, 7, 8, 9", level: 100 },
  { name: "Version Control System (GitHub, Bitbucket)", level: 90 },
  { name: "Local Dev (Valet, Vagrant, Docker, Warden)", level: 70 },
  { name: "ASP, .NET, C#", level: 60 },
  { name: "Basic Photoshop", level: 60 },
  { name: "API App Integrations", level: 80 },
  { name: "Joomla", level: 90 },
  { name: "WordPress", level: 50 },
  { name: "Magento 2", level: 80 },
];

export const experiences: Experience[] = [
  {
    id: "stikadoo-magento-laravel",
    title: "Magento 2 and Laravel Developer",
    company: {
      label: "Stikadoo",
      href: "https://stikadoo.com.ph/",
    },
    location: "Surigao City, Philippines",
    description:
      "Working with a Magento 2 store, fixing bugs and adding features per client request. Created projects using Laravel as a backend API and web applications using Tailwind, Alpine, Laravel, and Livewire (TALL).",
    keyExperience: [
      "Magento 2",
      "Warden",
      "Laravel 9",
      "Tailwind",
      "Alpine",
      "Livewire",
      "GitHub",
    ],
    outputLabel: "Applications Developed",
    outputs: [
      {
        label: "Oxygen Concentrator Supplies Shop (Magento 2)",
        href: "https://www.oxygenconcentratorsupplies.com",
      },
      { label: "Billing System API (Laravel)" },
      { label: "Inventory System API (Laravel)" },
      { label: "Amugani.com (TALL)" },
    ],
  },
  {
    id: "malibu-aspnet",
    title: "Homebased Developer",
    location: "Malibu California, United States",
    description:
      "Worked with ASP.NET, creating applications from scratch and developing features as requested.",
    keyExperience: [
      "ASP.NET",
      "C#",
      "Visual Studio 2017",
      "MySQL",
      "Microsoft SQL Server",
      "Microsoft SQL Server Management Studio",
      "GitHub",
    ],
    outputLabel: "Applications Developed",
    outputs: [
      { label: "Inventory System" },
      { label: "Food and Beverages Point of Sale System" },
      { label: "Malibu Security System" },
      { label: "Lot Management System" },
      { label: "Accounting System" },
    ],
  },
  {
    id: "kanna-cart-party-easy-go",
    title: "Homebased Web Developer",
    location: "United States",
    description:
      "The first project was Kanna Cart, an e-commerce website built with AngularJS as the front end and Laravel as the back end. Another project, Party Easy Go, kept track of upcoming events and was built with Laravel.",
    keyExperience: [
      "AngularJS",
      "Laravel",
      "Vagrant",
      "Docker",
      "Bitbucket",
      "SCRUM Methodology",
    ],
    outputLabel: "Applications Developed",
    outputs: [
      { label: "Kannacart.com", href: "https://wf.mrtony.org" },
      { label: "Partyeasygo.com", href: "http://v2.peg.life" },
    ],
  },
  {
    id: "native-commerce",
    title: "Homebased Developer",
    company: {
      label: "Native Commerce",
      href: "https://nativecommerce.com/",
    },
    location: "United States",
    description:
      "Assigned to the Live Team Developers, fixing issues and developing additional custom features for WordPress and Magento sites. Also helped create mobile applications for iOS and Android using Ionic.",
    keyExperience: [
      "WordPress and Magento",
      "Mobile applications for iOS and Android using Ionic",
      "Git using Bitbucket",
      "SCRUM Methodology",
      "Bitbucket and SourceTree",
      "Podio",
      "Slack",
    ],
    outputLabel: "Websites Developed",
    outputs: [
      { label: "AlfredChurchill.com", href: "http://www.AlfredChurchill.com/" },
      { label: "BigFrigginDeals.com", href: "http://www.BigFrigginDeals.com/" },
      { label: "SurvivalLife.com", href: "http://www.SurvivalLife.com/" },
      { label: "MasonAndIvy.com", href: "http://www.MasonAndIvy.com/" },
      { label: "Mindore.com", href: "http://www.Mindore.com/" },
      { label: "Sewing.com", href: "http://www.Sewing.com/" },
      { label: "ShopWidget.com", href: "http://www.ShopWidget.com/" },
      { label: "SkinCareFreak.com", href: "http://www.SkinCareFreak.com/" },
      { label: "WeenieTees.com", href: "http://www.WeenieTees.com/" },
      {
        label: "WholesaleDistributor.com",
        href: "http://www.WholesaleDistributor.com/",
      },
    ],
  },
  {
    id: "surigao-internet-marketing",
    title: "Web Programmer",
    company: {
      label: "Surigao Internet Marketing",
      href: "http://www.surigaointernetmarketing.com",
    },
    location: "Surigao City, Philippines",
    description:
      "Worked as a web programmer with a team of developers, building technical and complex programming features for web-based systems.",
    keyExperience: [
      "Created Joomla components, modules, and plugins",
      "Created Magento extensions",
      "Created custom features for Joomla and Magento",
      "Bug fixes, upgrades, and updates for Joomla and Magento",
      "Joomla and Magento website maintenance",
      "Linux-based server maintenance",
      "Multi-level marketing and affiliate systems",
      "Used Linux-based open-source applications to develop complex web systems",
      "Worked with a small team of developers with a wide range of skill sets",
    ],
    outputLabel: "Websites Developed",
    outputs: [
      {
        label: "QuantumQuestSeminars.com",
        href: "https://quantumquestseminars.com/",
      },
      { label: "Duckychallenge.com", href: "https://www.duckychallenge.com/" },
      { label: "Cerarmist.com", href: "http://www.Cerarmist.com/" },
      { label: "DukeDuvall.com", href: "http://www.DukeDuvall.com/" },
      {
        label: "LifeStyleExpressClub.com",
        href: "http://www.LifeStyleExpressClub/",
      },
      { label: "Sharing.Blog", href: "http://www.Sharing.Blog/" },
      {
        label: "AutomatedMarketingSystem.us",
        href: "http://www.AutomatedMarketingSystem.us/",
      },
      {
        label: "MillionaireMindAlliance.com",
        href: "http://www.MillionaireMindAlliance.com/",
      },
      {
        label: "UltimateSuccessSchool.com",
        href: "http://www.UltimateSuccessSchool.com/",
      },
      { label: "TruthPR.com", href: "http://www.TruthPR.com/" },
      { label: "Mariateben.com", href: "http://www.Mariateben.com/" },
      { label: "Swedishbitters.com", href: "http://www.Swedishbitters.com/" },
      { label: "HerbHealers.com", href: "http://www.HerbHealers.com/" },
      { label: "AlphaOmegaLabs.com", href: "http://www.AlphaOmegaLabs.com/" },
      { label: "Foodtabs.com", href: "http://www.Foodtabs.com/" },
      {
        label: "Wewillhelpyousell.com",
        href: "http://www.Wewillhelpyousell.com/",
      },
      {
        label: "WildAmateurNight.com",
        href: "http://www.WildAmateurNight.com/",
      },
      { label: "iGivefirst.com", href: "http://www.iGivefirst.com/" },
      {
        label: "UponWingsofAngels.com",
        href: "http://www.UponWingsofAngels.com/",
      },
    ],
  },
  {
    id: "australia-real-estate",
    title: "Homebased Web Developer",
    location: "Australia",
    description: "Experience working with real estate websites.",
    keyExperience: [
      "Joomla CMS",
      "Rackspace Cloud Server",
      "BugHerd",
      "Bitbucket and SourceTree",
      "Built a PHP script that generated properties from XML file data",
    ],
    outputLabel: "Websites Developed",
    outputs: [
      { label: "PropertyInvestorsonly.com.au" },
      { label: "PropertyConveyancingDirectory.com.au" },
    ],
  },
  {
    id: "australia-jrox",
    title: "Homebased Web Developer",
    location: "Australia",
    description: "Experience working with the JROX Affiliate Marketing application.",
    keyExperience: [
      "JROX",
      "Custom features implemented",
      "Bug fixes and site maintenance",
    ],
    outputLabel: "Websites Developed",
    outputs: [
      { label: "MyMaxRX.com", href: "http://www.MyMaxRX.com/" },
      { label: "GoMaxMedia.com", href: "http://www.GoMaxMedia.com/" },
      { label: "Fm-Broadcasting.net", href: "http://www.Fm-Broadcasting.net/" },
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Laravel",
  "React.js",
  "Joomla",
  ".NET",
];

export const projects: Project[] = [
  {
    title: "Voting System",
    category: "Laravel",
    image: "/images/portfolio/laravel_voting_system.png",
  },
  {
    title: "Yuipco Security Lending System",
    category: "Laravel",
    image: "/images/portfolio/laravel_yuipco_security_lending.png",
  },
  {
    title: "Party Easy Go",
    category: "Laravel",
    image: "/images/portfolio/laravel_partyeasygo.png",
  },
  {
    title: "Surigao City Covid19 Information",
    category: "Laravel",
    image: "/images/portfolio/surigaocitycovid19.info.png",
    href: "https://surigaocitycovid19.info",
  },
  {
    title: "Nemco Booking",
    category: "Laravel",
    image: "/images/portfolio/nemcobooking.com.png",
    href: "https://nemcobooking.com",
  },
  {
    title: "Norman Pono Official Website",
    category: "React.js",
    image: "/images/portfolio/reactjs_normanpono.png",
    href: "https://normanpono.com/",
  },
  {
    title: "Quantum Quest Seminars",
    category: "Joomla",
    image: "/images/portfolio/joomla_2QS.png",
    href: "https://quantumquestseminars.com/",
  },
  {
    title: "Automated Marketing System",
    category: "Joomla",
    image: "/images/portfolio/joomla_amsus.png",
    href: "https://www.automatedmarketingsystem.us/",
  },
  {
    title: "Cerarmist",
    category: "Joomla",
    image: "/images/portfolio/joomla_cerarmist.png",
    href: "https://cerarmist.com/",
  },
  {
    title: "Chaim Report",
    category: "Joomla",
    image: "/images/portfolio/joomla_chaimreport.png",
    href: "https://www.chaimreport.com/",
  },
  {
    title: "Crypto Master Pro",
    category: "Joomla",
    image: "/images/portfolio/joomla_crytomasterpro.png",
    href: "https://cryptomasterpro.com/",
  },
  {
    title: "Ducky Challenge",
    category: "Joomla",
    image: "/images/portfolio/joomla_duckychallenge.png",
    href: "https://www.duckychallenge.com/",
  },
  {
    title: "Light of the World Ministries",
    category: "Joomla",
    image: "/images/portfolio/joomla_dukeduvall.png",
    href: "https://www.dukeduvall.com/",
  },
  {
    title: "Foodtabs",
    category: "Joomla",
    image: "/images/portfolio/joomla_foodtabs.png",
    href: "http://www.foodtabs.com/",
  },
  {
    title: "Sharing.Blog",
    category: "Joomla",
    image: "/images/portfolio/joomla_sharingblog.png",
    href: "https://www.sharing.blog/",
  },
  {
    title: "Ultimate Success School",
    category: "Joomla",
    image: "/images/portfolio/joomla_uss.png",
    href: "http://www.ultimatesuccessschool.com/",
  },
  {
    title: "Malibu Accounting System",
    category: ".NET",
    image: "/images/portfolio/net_accounting.png",
  },
  {
    title: "Malibu Security System",
    category: ".NET",
    image: "/images/portfolio/net_cecuritysystemv2.png",
  },
  {
    title: "Malibu Point of Sale System",
    category: ".NET",
    image: "/images/portfolio/net_pos.png",
  },
];

export const education: EducationItem[] = [
  {
    year: "2006-2010",
    school: "Surigao State College of Technology (SSCT)",
    schoolUrl: "http://www.ssct.edu.ph/",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    year: "2000-2004",
    school: "St. Paul University Surigao (SPUS)",
    schoolUrl: "http://spusedu.com",
    degree: "Secondary",
  },
];

export const awards: Award[] = [
  {
    title: "Employee of the Month, Native Commerce",
    description: "Certificate of recognition for dedication, passion, and hard work.",
    date: "30 September 2016",
  },
  {
    title: "2013 Employee of the Year, Surigao Internet Marketing (SIM)",
    description: "Awarded for being an outstanding employee.",
    date: "24 December 2013",
  },
  {
    title: "Visual Basic Programming",
    description:
      "Certificate of Recognition, 1st Place during the IT Days Celebration 2009 with the theme Harnessing Students Innovation towards Global Competitiveness.",
    date: "16 February 2009",
    location: "Surigao State College of Technology, Surigao City, Philippines",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "iostream01@gmail.com",
    href: "mailto:iostream01@gmail.com",
  },
  {
    label: "Skype",
    value: "Norman Pono Skype",
    href: "https://join.skype.com/invite/YA5odM2keK8v",
  },
  {
    label: "Facebook",
    value: "Norman Pono Facebook",
    href: "https://www.facebook.com/iostream01/",
  },
  {
    label: "LinkedIn",
    value: "Norman Pono LinkedIn",
    href: "https://www.linkedin.com/in/norman-lyle-pono-2178732a/",
  },
];
