export const libraries = [
  {
    id: 1,
    name: "Redux Toolkit",
    category: "state-management",
    icon: "🔄",
    description: "The official, opinionated Redux setup with reduced boilerplate.",
    problem: "Simplifies complex state management with minimal configuration.",
    install: "npm install @reduxjs/toolkit",
    codeExample: `import { configureStore } from '@reduxjs/toolkit';\n\nconst store = configureStore({\n  reducer: {\n    counter: counterReducer,\n  },\n});`,
    useCases: ["Large-scale applications", "Complex state logic", "DevTools integration"],
    pros: ["Immer built-in", "RTK Query included", "Redux best practices"],
    docsLink: "https://redux-toolkit.js.org/",
    difficulty: "intermediate",
    popularity: 5,
    githubStars: "35K+",
    weeklyDownloads: "2M+",
    tags: ["redux", "state", "middleware"],
    lastUpdated: "2023-11-15",
    bundleSize: "12.7kB"
  },
  {

  }
]