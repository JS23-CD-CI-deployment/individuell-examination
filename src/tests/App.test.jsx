import React from "react";
import { render } from "@testing-library/react";
import { it, describe } from "vitest";
import App from "../App.jsx";

// Tried first test so it works with github actions...
describe("App component", () => {
    it("just try render App component", async () => {
        render(<App />);
    });
})



