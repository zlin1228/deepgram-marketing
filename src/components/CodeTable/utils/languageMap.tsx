interface LanguageDetails {
  name: string;
  icon: string;
}

interface LanguageMap {
  [key: string]: LanguageDetails;
}

const languageMap: LanguageMap = {
  ruby: { name: 'Ruby', icon: 'ruby-logo' },
  php: { name: 'PHP', icon: 'php-logo' },
  aspnet: { name: '.Net', icon: 'code-snippet' },
  python: { name: 'Python', icon: 'python-logo' },
  javascript: { name: 'JavaScript', icon: 'javascript-logo' },
  jsx: { name: 'React JSX', icon: 'code-snippet' },
  typescript: { name: 'TypeScript', icon: 'code-snippet' },
  bash: { name: 'Bash', icon: 'code-snippet' },
  c: { name: 'C', icon: 'code-snippet' },
  clojure: { name: 'Clojure', icon: 'code-snippet' },
  cpp: { name: 'C++', icon: 'code-snippet' },
  csharp: { name: 'C#', icon: 'code-snippet' },
  css: { name: 'CSS', icon: 'code-snippet' },
  dart: { name: 'Dart', icon: 'code-snippet' },
  diff: { name: 'Diff', icon: 'code-snippet' },
  elixir: { name: 'Elixir', icon: 'code-snippet' },
  elm: { name: 'Elm', icon: 'code-snippet' },
  erlang: { name: 'Erlang', icon: 'code-snippet' },
  go: { name: 'Go', icon: 'code-snippet' },
  graphql: { name: 'GraphQL', icon: 'code-snippet' },
  haskell: { name: 'Haskell', icon: 'code-snippet' },
  html: { name: 'HTML', icon: 'code-snippet' },
  java: { name: 'Java', icon: 'code-snippet' },
  json: { name: 'JSON', icon: 'code-snippet' },
  latex: { name: 'LaTeX', icon: 'code-snippet' },
  lisp: { name: 'Lisp', icon: 'code-snippet' },
  lua: { name: 'Lua', icon: 'code-snippet' },
  markdown: { name: 'Markdown', icon: 'code-snippet' },
  markup: { name: 'Markup', icon: 'code-snippet' },
  objectivec: { name: 'Objective-C', icon: 'code-snippet' },
  ocaml: { name: 'OCaml', icon: 'code-snippet' },
  pascal: { name: 'Pascal', icon: 'code-snippet' },
  perl: { name: 'Perl', icon: 'code-snippet' },
  r: { name: 'R', icon: 'code-snippet' },
  rust: { name: 'Rust', icon: 'code-snippet' },
  sass: { name: 'Sass', icon: 'code-snippet' },
  scala: { name: 'Scala', icon: 'code-snippet' },
  scheme: { name: 'Scheme', icon: 'code-snippet' },
  scss: { name: 'Scss', icon: 'code-snippet' },
  sql: { name: 'SQL', icon: 'code-snippet' },
  swift: { name: 'Swift', icon: 'code-snippet' },
  curl: { name: 'Curl', icon: 'code-snippet' },
};

export default languageMap;
