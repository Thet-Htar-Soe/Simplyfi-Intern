// import { add, subtract } from "./Calculate";
import { act } from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

// test("add correctly", () => {
//   expect(add(1, 2)).toBe(3);
//   expect(add(-1, -1)).toBe(-2);
//   expect(add(0, 0)).toBe(0);
// });

// describe("calculator testing", () => {
//   it("add test", () => {
//     act(() => {
//       render(<Calculator />);
//     });

//     const sumElement = screen.getByText(/5 \+ 3 = 8/i);
//     expect(sumElement).toBeInTheDocument();
//   });

//   it("substract test", () => {
//     act(() => {
//       render(<Calculator />);
//     });

//     const subtractElement = screen.getByText(/10 - 4 = 6/i);
//     expect(subtractElement).toBeInTheDocument();
//   });
// });

describe("Calculator Component", () => {
  it("renders the correct sum", () => {
    render(<Calculator />); // No need to wrap in `act`
    const sumElement = screen.getByText(/5 \+ 3 = 8/i);
    expect(sumElement).toBeInTheDocument();
  });

  it("renders the correct difference", () => {
    render(<Calculator />); // No need to wrap in `act`
    const subtractElement = screen.getByText(/10 - 4 = 6/i);
    expect(subtractElement).toBeInTheDocument();
  });
});
