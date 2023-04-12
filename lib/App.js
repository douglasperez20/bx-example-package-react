import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const reactLogo = "/assets/react-35ef61ed.svg";

const viteLogo = "/vite.svg";

const index = '';

const App$1 = '';

function App() {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };
  const themeClass = theme ? theme.toLowerCase() : "secondary";
  return /* @__PURE__ */ jsxs("div", { className: "App", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://vitejs.dev",
        target: "_blank",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: viteLogo,
            className: "logo",
            alt: "Vite logo"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://reactjs.org",
        target: "_blank",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: reactLogo,
            className: "logo react",
            alt: "React logo"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("h2", { children: "This is a example to create a npm package using React, Vite, Boostrap and Github Actions" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`,
        children: `${theme || "Default"} Theme`
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "btn-group", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: `text-capitalize btn btn-${themeClass} btn-lg"`,
          type: "button",
          children: theme ? theme + " theme" : "Choose Theme"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `btn btn-lg btn-${themeClass} dropdown-toggle dropdown-toggle-split`,
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Toggle Dropdown" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "dropdown-menu", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "dropdown-item",
            onClick: () => setTheme("primary"),
            children: "Primary Theme"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "dropdown-item",
            onClick: () => setTheme("danger"),
            children: "Danger Theme"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "dropdown-item",
            onClick: () => setTheme("success"),
            children: "Success Theme"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "dropdown-divider" }),
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "dropdown-item",
            href: "#",
            onClick: () => resetTheme(),
            children: "Default Theme"
          }
        )
      ] })
    ] })
  ] });
}

export { App as default };
