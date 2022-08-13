import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const currentPhoto = {
  name: "park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adiscing elit. Nunc ultricie",
  index: 1,
};

describe("Modal component", () => {
  it("renders", () => {
    //baseline render component test
  });
  //snapshot test
});

describe("Click Event", () => {
  it("calls onClose handler", () => {
    //Arrange: Render Modal
    const { getByText } = render(
      <Modal on Close={mockToggleModal} currentPhoto={currentPhoto} />
    );
    //Act: Simulate click event
    fireEvent.click(getByText("Close this modal"));
    //Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});

it("matches snapshot DOM node structure", () => {
  //Arrange the snapshot - declare variables
  //Assert the match
});
