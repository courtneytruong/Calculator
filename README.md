# Calculator

A calculator built twice: first as a C# console app, then as a React + Vite + Tailwind web app. This repo is a learning project exploring the same problem — parsing input, handling operator precedence-free chained operations, and reporting errors — in two very different environments.

## Projects

| Project                                            | Stack                        | Description                                                                                           |
| -------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`calculator-console-app`](calculator-console-app) | C# / .NET                    | Terminal-based calculator that prompts for numbers and operators and chains operations interactively. |
| [`calculator-react-app`](calculator-react-app)     | React 19, Vite, Tailwind CSS | A styled, keyboard-accessible calculator UI in the browser.                                           |

---

## calculator-react-app

A calculator UI styled after classic pocket calculators, built with React and Tailwind CSS.

**Live demo:** [courtneytruong.github.io/Calculator](https://courtneytruong.github.io/Calculator/)

### Features

- Standard operations: add, subtract, multiply, divide
- Percent (`%`), sign toggle (`+/-`), decimal point, backspace, and clear
- Full keyboard support (digits, `+ - * /`, `Enter`/`=`, `Backspace`/`Delete`, `Escape`/`C`, `_` for sign toggle)
- History line showing the last calculation above the current display
- Display auto-scales its font size so long results stay on screen
- Error handling for invalid operations (e.g. divide by zero)

### Getting started

```bash
cd calculator-react-app
npm install
npm run dev
```

Other scripts available in this directory:

```bash
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

### Project structure

```
src/
├── components/
│   ├── CalculatorBody.jsx             # top-level state + keyboard event handling
│   ├── CalculatorDisplay.jsx          # display, auto-scaling font size
│   ├── HistoryLine.jsx                # previous calculation shown above the display
│   ├── CalculatorButtonContainer.jsx  # button grid layout
│   └── CalculatorButtons.jsx          # individual button component
└── Utilities/
    ├── CalculatorReducer.js           # calculator state machine (useReducer)
    └── Calculate.js                   # core arithmetic
```

---

## calculator-console-app

A .NET console calculator. Enter a starting number and operator, then keep chaining operations, clear the running total, or exit.

### Getting started

```bash
cd calculator-console-app
dotnet run
```

### Project structure

```
Program.cs          # main input/output loop
UserInputFlow.cs     # initial number/operator prompts
Calculate.cs          # core arithmetic
ErrorHandling.cs      # input validation and correction
```

---

## Troubleshooting

**React app**

| Issue                                          | Fix                                                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm install` fails or the app won't start     | Delete `node_modules` and `package-lock.json` in `calculator-react-app`, then run `npm install` again.                                                                                                   |
| Port `5173` already in use                     | Vite will offer the next free port automatically — check the terminal output for the actual URL, or stop whatever else is running on that port.                                                          |
| Styles missing or not updating                 | Confirm the dev server is running via `npm run dev` (Tailwind is compiled through the `@tailwindcss/vite` plugin, so it won't apply to a stale `dist/` build — run `npm run build` again after changes). |
| Keyboard shortcuts not responding              | Click the page first so it has focus; the listener is attached to `window` and browser extensions or focused input fields elsewhere on the page can intercept key events.                                |
| Display shows an error message you can't clear | Press `C`/`Escape` or click the clear button — errors (like divide by zero) set a flag that only `CLEAR` resets.                                                                                         |

**Console app**

| Issue                                        | Fix                                                                                                                                                                                     |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dotnet run` fails with an SDK version error | This project targets `net10.0` — install the matching [.NET SDK](https://dotnet.microsoft.com/download) or update `TargetFramework` in `Calculator.csproj` to match your installed SDK. |
| `dotnet: command not found`                  | The .NET SDK isn't installed or isn't on your `PATH`. Verify with `dotnet --version`.                                                                                                   |
| Stale build errors after pulling changes     | Delete the `bin` and `obj` folders in `calculator-console-app` and run `dotnet run` again.                                                                                              |

## Roadmap

- [x] Console app
- [x] React frontend
- [x] Keyboard input support
- [x] Display overflow handling
- [x] Calculation history line
- [x] Deploy to GitHub Pages
