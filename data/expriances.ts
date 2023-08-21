export type TypeExpreiance = {
  date: string;
  role: string;
  company: string;
  description: string;
  companyLink?: string;
};

export const experiances: TypeExpreiance[] = [
  {
    date: "May 2023 - June 2023",
    role: "Web Developer",
    company: "University of New Hampshire",
    companyLink: "https://www.unh.edu/",
    description:
      "I collaborated on developing the UNH IESS scholarship program website, enhancing user experience with CMS Drupal. I streamlined content management, maintained the site using HTML/CSS, and played a vital role in its successful implementation.",
  },
  {
    date: "July 2023 - Present",
    role: "Software Engineer",
    companyLink: "https://echowebapps.com/",
    company: "Echo Web",
    description:
      "As a freelance Software Engineer at Echo Web since July 2023, I've been creating website front ends using Next.js, React.js, and TypeScript. I specialize in crafting responsive, modern UI designs using Tailwind CSS, and I'm dedicated to optimizing SEO practices for improved website visibility and ranking.",
  },
];
