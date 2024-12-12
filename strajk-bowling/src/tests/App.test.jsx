import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import App from "../App.jsx";

describe("App component", () => {
    it("should generate a booking number and calculate the total price", async () => {
        render(<App />);
    });
})



