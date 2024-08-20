import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar } from "./NavBar";
import styles from "./NavBar.module.css";

describe("NavBar", () => {
  test("renders NavBar component", () => {
    render(<NavBar />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();

    expect(screen.getByText("Главное")).toBeInTheDocument();
    expect(screen.getByText("Мой плейлист")).toBeInTheDocument();
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });
});
