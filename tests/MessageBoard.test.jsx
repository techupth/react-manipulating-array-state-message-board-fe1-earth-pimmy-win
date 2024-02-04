import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageBoard from "../src/components/MessageBoard";
import { expect } from "vitest";

describe("React-State : App", () => {
  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'Update text'", async () => {
    render(<MessageBoard />);

    const textToType = "Hello, World!";
    await userEvent.type(screen.getByRole("textbox"), textToType);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    const inputContent = screen.getByText("Hello, World!");
    expect(inputContent).toBeInTheDocument;
  });

  it("ยังไม่ใส่ function onClick ที่ปุ่ม 'x'", async () => {
    render(<MessageBoard />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));
    const deleteButton = screen.getByText("x");
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "x" }));
    expect(deleteButton).not.toBeInTheDocument();
  });
});
