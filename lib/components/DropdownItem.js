import { jsx } from 'react/jsx-runtime';

const DropdownItem = ({ text, onClick }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: "dropdown-item",
      onClick,
      children: text
    }
  );
};

export { DropdownItem as default };
