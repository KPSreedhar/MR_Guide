export const utilities = [
  {
    id: 1,
    name: "date-fns",
    category: "date-utils",
    description: "Modern JavaScript date utility library.",
    problem: "Manipulate dates without Moment.js's bundle size.",
    install: "npm install date-fns",
    codeExample: `import { format, addDays } from 'date-fns';\n\nformat(new Date(), 'MM/dd/yyyy');\naddDays(new Date(), 7);`,
    useCases: ["Calendar apps", "Date formatting", "Time calculations"],
    pros: ["Tree-shakable", "Immutable", "TypeScript support"],
    docsLink: "https://date-fns.org/"
  }
];