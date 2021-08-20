import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

const testColors = [
  {
    code: {
      hex: "#f0f8ff",
    },
    color: "aliceblue",
    id: 1,
  },
  {
    code: {
      hex: "#f0f8ff",
    },
    color: "aliceblue",
    id: 2,
  },
  {
    code: {
      hex: "#f0f8ff",
    },
    color: "aliceblue",
    id: 3,
  },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={testColors} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColors} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  render(<ColorList colors={testColors} editing={true} />);
  const editMenu = screen.queryByTestId("edit_menu");
  expect(editMenu).toBeInTheDocument();

  render(<ColorList colors={testColors} editing={false} />);
  const editMenu_2 = screen.queryByTestId("edit_menu");
  expect(editMenu_2).toBeNull();
});