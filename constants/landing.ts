export interface AboutMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  iconName: "Clock" | "Brain" | "Trophy" | "Users" | "TrendingUp" | "Database" | "Coins";
}

export interface WhyParticipateCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: "Cpu" | "Flame" | "Users2" | "Briefcase" | "Network" | "Award";
}

export interface ScheduleMilestone {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  tag: string;
  isHighlight?: boolean;
}

export interface RewardCard {
  id: string;
  title: string;
  amountOrHighlight: string;
  description: string;
  badge: string;
  iconName: "Coins" | "FileCheck" | "Crown" | "Zap" | "Gift";
}

export const ABOUT_METRICS: AboutMetric[] = [
  {
  id: "duration",
  label: "Competition Window",
  value: "8–9 August 2026",
  description:
    "An online Machine Learning competition beginning on 8 August and concluding with final submissions on 9 August through the official Kaggle platform.",
  iconName: "Clock",
},

  {
    id: "domain",
    label: "Core Domain",
    value: "Machine Learning",
    description:
      "Apply Artificial Intelligence and Machine Learning concepts to solve practical real-world challenges.",
    iconName: "Brain",
  },

  {
    id: "mode",
    label: "Event Mode",
    value: "Online Challenge",
    description:
      "Participate remotely through the official competition platform from anywhere with your teammate.",
    iconName: "Trophy",
  },

  {
    id: "team",
    label: "Team Size",
    value: "2 Members",
    description:
      "Collaborate in teams of two to analyze data, build models, and compete together.",
    iconName: "Users",
  },

  {
    id: "learning",
    label: "Learning Experience",
    value: "Hands-on Machine Learning",
    description:
      "Strengthen analytical thinking, feature engineering, model development, and practical AI skills.",
    iconName: "TrendingUp",
  },

  {
    id: "problem",
    label: "Challenge",
    value: "Real-world Problems",
    description:
      "Work on practical problem statements that encourage creative thinking and intelligent data-driven solutions.",
    iconName: "Database",
  },

  {
    id: "objective",
    label: "Objective",
    value: "Learn • Build • Compete",
    description:
      "Transform classroom knowledge into practical Machine Learning solutions while competing in a healthy technical environment.",
    iconName: "Coins",
  },
];

export const WHY_PARTICIPATE_CARDS: WhyParticipateCard[] = [
  {
    id: "real-ml",
    title: "Real ML Challenge",
    subtitle: "Beyond Toy Datasets",
    description: "Tackle complex, high-dimensional datasets that mirror actual industry data science problems rather than sanitized tutorial scenarios.",
    badge: "HARDCORE ML",
    iconName: "Cpu",
  },
  {
    id: "kaggle-platform",
    title: "Hands-on Kaggle",
    subtitle: "Automated Evaluation",
    description:"Compete on Kaggle with automated evaluation, live leaderboard updates, and an authentic competitive Machine Learning workflow.",
    badge: "LIVE COMPETITION",
    iconName: "Flame",
  },
  {
    id: "team-synergy",
    title: "Team Collaboration",
    subtitle: "Duo Strategy",
    description:"Collaborate in teams of two to analyze datasets, engineer features, develop models, and solve challenging AI problems together.",
    badge: "2-PERSON DUOS",
    iconName: "Users2",
  },
  {
    id: "industry-solving",
    title: "Industry Problem Solving",
    subtitle: "Production Standards",
    description:"Apply Artificial Intelligence and Machine Learning techniques to solve practical, data-driven problems inspired by real-world scenarios.",
    badge: "PRODUCTION GRADE",
    iconName: "Briefcase",
  },
  {
    id: "networking",
    title: "Networking & Community",
    subtitle: "Connect with Builders",
    description: "Interact with passionate machine learning practitioners, faculty mentors from SVCE FODSE, and fellow data science pioneers.",
    badge: "PEER CONNECTIONS",
    iconName: "Network",
  },
  {
    id: "recognition",
    title: "Certificates & Prestige",
    subtitle: "Resume Benchmark",
    description:"Receive official participation and merit certificates that strengthen your academic profile and technical portfolio.",
    badge: "CREDENTIALS",
    iconName: "Award",
  },
];

export const SCHEDULE_TIMELINE: ScheduleMilestone[] = [
  {
  id: "reg-close",
  title: "Registration Deadline",
  date: "7 August 2026",
  time: "11:59 PM IST",
  description:
    "Final deadline for team registrations. Ensure your team is registered before the competition begins.",
  tag: "PRE-EVENT",
},
  {
    id: "kickoff",
    title: "Challenge Starts & Dataset Release",
    date: "8 August 2026",
    time: "9:00 AM IST",
    description:"Inaugural briefing, problem statement release, Kaggle competition launch, and the official competition window begins.",
    tag: "MILESTONE",
    isHighlight: true,
  },
  {
    id: "midpoint",
    title: "Mid-Way Leaderboard Check",
    date: "8 August 2026",
    time: "9:00 PM IST",
    description:"Progress checkpoint featuring public leaderboard updates and an opportunity to evaluate team strategy.",
    tag: "CHECKPOINT",
  },
  {
    id: "submission-deadline",
    title: "Final Submission Deadline",
    date: "9 August 2026",
    time: "4:00 PM IST",
    description:"Kaggle submissions close. Final notebooks, trained models, and supporting methodology are locked for evaluation.",
    tag: "DEADLINE",
    isHighlight: true,
  },
  {
  id: "evaluation-winners",
  title: "Evaluation & Winner Announcement",
  date: "11 August 2026",
  time: "6:00 PM IST",
  description:
    "Private leaderboard evaluation, code verification, final ranking announcement, and prize distribution.",
  tag: "GRAND FINALE",
  isHighlight: true,
},
];

export const REWARDS_DATA = {
  totalPrizePool: "Exciting Cash Prizes",
  subtext: "Prize distribution across Top 3 Podium Winners, Best Innovation, and Category Excellence",
  cards: [
    {
      id: "cash-prize",
      title: "Cash Rewards",
      amountOrHighlight: "Top Podium Prizes",
      description: "Direct cash awards for 1st, 2nd, and 3rd place winners who top the Kaggle leaderboard and pass code audit.",
      badge: "GRAND PRIZE",
      iconName: "Coins" as const,
    },
    {
      id: "certificates",
      title: "Certificates of Merit",
      amountOrHighlight: "Official FODSE Credentials",
      description: "Verified certificates of achievement for winners and certificates of participation for all valid submissions.",
      badge: "VERIFIED CREDENTIALS",
      iconName: "FileCheck" as const,
    },
    {
      id: "recognition",
      title: "Hall of Fame",
      amountOrHighlight: "Recognition",
      description: "Featured team profiles on SVCE FODSE official platforms, newsletter highlights, and department honors.",
      badge: "NATIONAL SPOTLIGHT",
      iconName: "Crown" as const,
    },
    {
      id: "experience",
      title: "Kaggle Rank & Proof",
      amountOrHighlight: "Career Value",
      description: "Battle-tested proof of competitive ML proficiency for internships, higher studies, and AI research roles.",
      badge: "CAREER IMPACT",
      iconName: "Zap" as const,
    },
    {
      id: "goodies",
      title: "Exclusive Swag & Kits",
      amountOrHighlight: "HeatCode Merch",
      description: "Custom Spider-Man themed HeatCode badges, stickers, and developer swag packages for top finalists.",
      badge: "EXCLUSIVES",
      iconName: "Gift" as const,
    },
  ],
};

export const CONTACT_DETAILS = {
  organizer: "Faculty of Data Science and Engineering (FODSE)",
  institution: "Sri Venkateswara College of Engineering (SVCE)",
  email: "fodse@svce.ac.in",
  location: "SVCE Campus, Pennalur, Sriperumbudur, Tamil Nadu 602117",
  socials: [
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", href: "https://github.com", icon: "Github" },
    { name: "Twitter / X", href: "https://twitter.com", icon: "Twitter" },
  ],
};
