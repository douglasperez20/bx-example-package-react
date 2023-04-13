import { jsxs, jsx } from 'react/jsx-runtime';
import DropdownItem from './DropdownItem.js';

const DropdownMenu = ({ setState }) => {
  const resetTheme = () => {
    setState(null);
  };
  return /* @__PURE__ */ jsxs("div", { className: "dropdown-menu", children: [
    /* @__PURE__ */ jsx(
      DropdownItem,
      {
        text: "Primary Theme",
        onClick: () => setState("primary")
      }
    ),
    /* @__PURE__ */ jsx(
      DropdownItem,
      {
        text: "Danger Theme",
        onClick: () => setState("danger")
      }
    ),
    /* @__PURE__ */ jsx(
      DropdownItem,
      {
        text: "Success Theme",
        onClick: () => setState("success")
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "dropdown-divider" }),
    /* @__PURE__ */ jsx(
      DropdownItem,
      {
        text: " Default Theme",
        onClick: () => resetTheme()
      }
    )
  ] });
};

export { DropdownMenu as default };
