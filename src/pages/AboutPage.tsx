import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  Code2, 
  ChevronDown, 
  ChevronUp, 
  CheckSquare
} from 'lucide-react';

interface VivaQuestion {
  question: string;
  topic: string;
  answer: string;
}

export const AboutPage: React.FC = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  // 10 Viva Questions and Answers based on Unit 2
  const vivaQuestions: VivaQuestion[] = [
    {
      question: "1. What is React and how does it differ from traditional HTML/JavaScript web development?",
      topic: "React Basics & Virtual DOM",
      answer: "React is a component-based, declarative JavaScript library for building user interfaces. Unlike traditional DOM manipulation where developers imperatively find elements (document.getElementById) and update their innerHTML, React maintains an in-memory Virtual DOM. When state changes, React computes the minimal set of real DOM mutations using a reconciliation algorithm, resulting in fast, predictable UI updates."
    },
    {
      question: "2. What is JSX and why can't browsers execute it directly without transpilation?",
      topic: "JSX & Transpilation",
      answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI markup directly within JavaScript code. Browsers cannot execute JSX natively because it is not valid ECMAScript. A transpiler/bundler (like Babel or Vite/ESBuild) converts JSX tags into standard React.createElement() function calls before the code reaches the browser."
    },
    {
      question: "3. What is the difference between Props and State in React?",
      topic: "Props vs. State",
      answer: "Props (short for properties) are read-only inputs passed from a parent component to a child component to configure it. They follow unidirectional data flow. State, on the other hand, represents local, mutable data owned and managed directly within a component using hooks like useState. When state changes, the component re-renders to reflect the new state."
    },
    {
      question: "4. How does the useState hook work in functional components?",
      topic: "React Hooks (useState)",
      answer: "The useState hook is used to declare state variables in functional components. It takes an initial value as an argument and returns an array with exactly two elements: the current state value and a setter function (e.g., const [tasks, setTasks] = useState([])). Invoking the setter schedules a re-render of the component with the updated value without losing state across renders."
    },
    {
      question: "5. What is the purpose of the useEffect hook and what does the dependency array control?",
      topic: "React Hooks (useEffect)",
      answer: "useEffect lets functional components perform side effects, such as synchronizing document.title, setting up subscriptions, or interacting with browser APIs. The dependency array controls when the effect executes: omitting it runs the effect after every render; an empty array [] runs it once on mount; and providing variables [tasks] runs it only when those specified variables change."
    },
    {
      question: "6. What is the useRef hook and how does it differ from useState?",
      topic: "React Hooks (useRef)",
      answer: "useRef returns a mutable ref object whose .current property persists across the entire component lifecycle. Unlike useState, updating ref.current does NOT trigger a re-render. It is primarily used to access real DOM nodes imperatively (e.g., focusing an input element via inputRef.current.focus()) or to store mutable values that don't directly affect UI rendering."
    },
    {
      question: "7. What are Controlled Components in React Forms and why are they used?",
      topic: "Forms & Controlled Inputs",
      answer: "A controlled component is an input form element whose current value is driven by React state (via the value prop) and updated through change handlers (via onChange). This gives React complete control over form data, enables instant validation, allows disabling submit buttons based on input validity, and keeps UI and data in sync at all times."
    },
    {
      question: "8. How does Client-Side Routing with React Router work without reloading the page?",
      topic: "React Router & SPA",
      answer: "React Router enables Single Page Application (SPA) navigation. When a user clicks a <Link> or <NavLink>, the router prevents the default browser HTTP request and uses the HTML5 History API (pushState/replaceState) to change the browser URL bar. It then conditionally renders the matching component for that path without requesting a new HTML page from a server."
    },
    {
      question: "9. Why are 'key' props required when rendering lists of elements with .map()?",
      topic: "Lists and Keys",
      answer: "Keys give elements inside an array a stable identity during React's reconciliation diffing process. When items are added, removed, or reordered, keys help React quickly determine which items have changed, allowing it to efficiently update or reuse existing DOM nodes instead of re-rendering the entire list from scratch. Keys should be unique and persistent IDs."
    },
    {
      question: "10. What is 'e.preventDefault()' in JavaScript events and why is it crucial in React forms?",
      topic: "DOM & Event Handling",
      answer: "By default, submitting an HTML <form> causes the browser to initiate a full page reload and send an HTTP GET/POST request to the current or specified action URL. Calling e.preventDefault() inside the onSubmit event handler cancels this default browser reload behavior, enabling our React JavaScript code to handle the submission smoothly in memory."
    }
  ];

  const syllabusTopics = [
    {
      topic: "HTML5 Semantic Elements",
      usage: "Used <header>, <nav>, <main>, <section>, <footer>, <ul>, <button>, and <form> elements with standard accessible labels.",
      file: "Navbar.tsx, Footer.tsx, TaskList.tsx, TaskForm.tsx"
    },
    {
      topic: "CSS3 & Modern Styling",
      usage: "Utilized Tailwind CSS3 flexbox, grid, rounded borders, shadows, transitions, badges, and responsive layouts.",
      file: "index.css, TaskItem.tsx, HomePage.tsx"
    },
    {
      topic: "JavaScript Variables & Types",
      usage: "Strict use of const and let for all variables and typed interfaces for task objects and stats.",
      file: "task.ts, TaskForm.tsx, taskStats.ts"
    },
    {
      topic: "JavaScript String Methods",
      usage: "Applied .trim(), .toLowerCase(), .includes(), and template literal strings (`${tasks.length}`).",
      file: "TaskForm.tsx, TasksPage.tsx"
    },
    {
      topic: "JavaScript Arrays & Spread",
      usage: "Extensive use of .map(), .filter(), .slice(), array spread [...prevTasks, newTask], and .length.",
      file: "App.tsx, TasksPage.tsx, TaskFilter.tsx"
    },
    {
      topic: "JavaScript Conditions & Loops",
      usage: "Employed if/else blocks, ternary operators (condition ? a : b), and an explicit traditional for loop to compute metrics.",
      file: "taskStats.ts, TaskItem.tsx"
    },
    {
      topic: "JavaScript Functions & Events",
      usage: "Arrow functions, pure functions, event handlers, e.preventDefault(), e.target.value.",
      file: "TaskForm.tsx, TasksPage.tsx"
    },
    {
      topic: "React Functional Components & JSX",
      usage: "Pure modular functional components rendering declarative JSX trees with props and typed interfaces.",
      file: "All components under /src/components"
    },
    {
      topic: "React Props & Data Flow",
      usage: "Unidirectional data passing: tasks passed down to TaskList/TaskItem, callbacks (onToggle, onDelete) passed upward.",
      file: "App.tsx, TaskList.tsx, TaskItem.tsx"
    },
    {
      topic: "React Forms & Controlled Inputs",
      usage: "Controlled inputs for task title, subject, priority, and date with state-backed values and validation.",
      file: "TaskForm.tsx"
    },
    {
      topic: "React Router (v7)",
      usage: "BrowserRouter, Routes, Route, Link, and NavLink with active link state for 3 pages (Home, Tasks, About).",
      file: "App.tsx, Navbar.tsx"
    },
    {
      topic: "React useState Hook",
      usage: "Managing local reactive state for tasks array, active filter status, search input, and form fields.",
      file: "App.tsx, TasksPage.tsx, TaskForm.tsx"
    },
    {
      topic: "React useEffect Hook",
      usage: "Updating the browser document title side-effect whenever tasks change, plus auto-focusing on mount.",
      file: "TasksPage.tsx, TaskForm.tsx"
    },
    {
      topic: "React useRef Hook",
      usage: "Direct DOM reference to the title <input> element to imperatively focus it on mount, reset, or button click.",
      file: "TaskForm.tsx, TasksPage.tsx"
    }
  ];

  return (
    <div className="space-y-8 py-4">
      {/* Page Header */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Full Stack Web Development &bull; Course Syllabus</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          Tutorial 2: Unit-II Technical Documentation
        </h1>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          This single-page application is designed strictly for academic evaluation of <strong>Unit 2</strong>. 
          It deliberately omits all server-side frameworks (Node/Express, Spring Boot), databases (SQL, MongoDB), 
          and third-party API backends, keeping focus entirely on client-side React and modern ECMAScript standards.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
            &check; No Backend / Node APIs
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
            &check; No Database (SQL / NoSQL)
          </span>
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
            &check; Pure Local Component State
          </span>
          <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 font-medium border border-indigo-200">
            &check; React 19 + React Router
          </span>
        </div>
      </div>

      {/* Syllabus Topic Map */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Unit-II Syllabus Topics Mapping</span>
          </h2>
          <span className="text-xs text-gray-500 font-mono">14 Topics Verified</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                <th className="py-2.5 px-3">Syllabus Topic</th>
                <th className="py-2.5 px-3">How it is Demonstrated</th>
                <th className="py-2.5 px-3">Source Code File(s)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {syllabusTopics.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-3 font-semibold text-gray-900 align-top whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {item.topic}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-600 align-top leading-relaxed">
                    {item.usage}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-indigo-600 align-top">
                    {item.file}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 Viva Questions and Answers */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>10 Viva Questions &amp; Answers (Unit 2)</span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Click any question below to expand the complete model answer for lab viva preparation.
            </p>
          </div>
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-semibold">
            Lab Exam Prep
          </span>
        </div>

        <div className="space-y-3">
          {vivaQuestions.map((q, index) => {
            const isOpen = openQuestionIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-4 py-3.5 text-left bg-gray-50/60 hover:bg-gray-50 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 shrink-0">
                      Q{index + 1}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {q.question.replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] text-gray-400 font-medium hidden sm:inline">
                      {q.topic}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 py-3.5 bg-white border-t border-gray-100 text-sm text-gray-700 leading-relaxed space-y-2">
                    <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                      Model Answer:
                    </div>
                    <p>{q.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Structure Summary */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
          <Code2 className="w-4 h-4 text-indigo-600" />
          <span>Clean Project Architecture</span>
        </h3>
        <p className="text-xs text-slate-600 mb-3">
          The code is structured cleanly into components, pages, data, types, and utility files:
        </p>
        <pre className="text-[11px] font-mono bg-white p-3 rounded-lg border border-slate-200 text-slate-700 overflow-x-auto leading-relaxed">
{`src/
├── types/
│   └── task.ts             # Task, Priority, FilterStatus interfaces
├── data/
│   └── initialTasks.ts     # Sample initial student tasks
├── utils/
│   └── taskStats.ts        # JS loops & condition calculations
├── components/
│   ├── Navbar.tsx          # Navigation bar with NavLink active states
│   ├── Footer.tsx          # HTML5 footer component
│   ├── TaskForm.tsx        # Controlled form + useRef focus
│   ├── TaskItem.tsx        # Individual task item with toggle & delete
│   ├── TaskList.tsx        # Task list mapping & empty state
│   └── TaskFilter.tsx      # Filter buttons (All, Pending, Completed)
├── pages/
│   ├── HomePage.tsx        # Welcome dashboard & stats
│   ├── TasksPage.tsx       # Core task management (add, edit, filter, search)
│   └── AboutPage.tsx       # Syllabus topic breakdown & 10 Viva Q&A
├── App.tsx                 # Root component with BrowserRouter & State
└── main.tsx                # React 19 entry point`}
        </pre>
      </section>
    </div>
  );
};
