import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import styled from "styled-components";

import { colorsPalettes } from "@similarweb/styles";

import { Box } from "./Box";

describe("<Box />", () => {
  const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default tag and styles", () => {
    render(<Box>test</Box>);

    const box = screen.getByText("test");
    expect(box.tagName).toBe("DIV");
    expect(box).toHaveStyleRule("margin", "0");
    expect(box).toHaveStyleRule("padding", "0");
    expect(box).toHaveStyleRule("box-sizing", "border-box");
  });

  it("should render a given tag", () => {
    render(<Box as="span">test</Box>);

    const box = screen.getByText("test");
    expect(box.tagName).toBe("SPAN");
  });

  it.each([
    [undefined, "0"],
    ["10px 0 0 0", "10px 0 0 0"],
    ["0 10px 0 0", "0 10px 0 0"],
    ["0 0 10px 0", "0 0 10px 0"],
    ["0 0 0 10px", "0 0 0 10px"],
    ["10px", "10px"],
  ])("should apply margin correctly", (margin, expected) => {
    render(<Box margin={margin}>test</Box>);

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("margin", expected);
  });

  it("should apply marginX and marginY correctly", () => {
    render(
      <Box
        marginX="10px"
        marginY="20px"
      >
        test
      </Box>,
    );

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("margin", "20px 10px");
  });

  it.each([
    [undefined, "0"],
    ["10px 0 0 0", "10px 0 0 0"],
    ["0 10px 0 0", "0 10px 0 0"],
    ["0 0 10px 0", "0 0 10px 0"],
    ["0 0 0 10px", "0 0 0 10px"],
    ["10px", "10px"],
  ])("should render padding correctly", (padding, expected) => {
    render(<Box padding={padding}>test</Box>);

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("padding", expected);
  });

  it("should apply paddingX and paddingY correctly", () => {
    render(
      <Box
        paddingX="10px"
        paddingY="20px"
      >
        test
      </Box>,
    );

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("padding", "20px 10px");
  });

  it("should apply color when it exists in colors palette", () => {
    render(
      <Box
        fontVariant="input2"
        color={colorsPalettes.carbon[500]}
      >
        test
      </Box>,
    );

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("color", colorsPalettes.carbon[500]);
  });

  it("should not apply color when it doesn't exist in colors palette", () => {
    render(<Box color="#6b7c8d">test</Box>);

    const box = screen.getByText("test");
    expect(box).not.toHaveStyleRule("color");
    expect(consoleError).toHaveBeenCalledWith("#6b7c8d is not in the palette. Please use a color from the palette.");
  });

  it("should not apply color when it doesn't exist in colors palette", () => {
    render(
      <Box
        fontVariant="input2"
        color="#6b7c8d"
      >
        test
      </Box>,
    );

    const box = screen.getByText("test");
    expect(box).not.toHaveStyleRule("color");
    expect(consoleError).toHaveBeenCalledWith("#6b7c8d is not in the palette. Please use a color from the palette.");
  });

  it("should apply hover style correctly", async () => {
    const user = userEvent.setup();
    render(<Box whenHover={{ boxShadow: "0 0 0 1px red" }}>test</Box>);

    const box = screen.getByText("test");
    await user.hover(box);
    expect(box).toHaveStyleRule("box-shadow", "0 0 0 1px red", { modifier: ":hover" });
  });

  it("should apply focus style correctly", () => {
    render(<Box whenFocus={{ border: "1px solid red" }}>test</Box>);

    const box = screen.getByText("test");
    box.focus();
    expect(box).toHaveStyleRule("border", "1px solid red", { modifier: ":focus" });
  });

  it("should apply transition correctly", () => {
    render(<Box transition="all 0.2s ease-out">test</Box>);

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("transition", "all 0.2s ease-out");
  });

  it("should allow extending styles with styled", () => {
    const StyledBox = styled(Box)`
      background-color: red;
    `;

    render(<StyledBox>test</StyledBox>);

    const box = screen.getByText("test");
    expect(box).toHaveStyleRule("background-color", "red");
  });

  it("should allow interaction", async () => {
    const handleClick = jest.fn();
    render(<Box onClick={handleClick}>test</Box>);

    const box = screen.getByText("test");
    await userEvent.click(box);
    expect(handleClick).toHaveBeenCalled();
  });
});
