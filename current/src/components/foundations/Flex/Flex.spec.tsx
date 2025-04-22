import { render, screen } from "@testing-library/react";

import { Flex } from "./Flex";

describe("<Flex />", () => {
  it("should render block flex by default", () => {
    render(<Flex>test</Flex>);
    const flex = screen.getByText("test");
    expect(flex.tagName).toBe("DIV");
    expect(flex).toHaveStyleRule("display", "block flex");
  });

  it("should render inline flex", () => {
    render(<Flex inline>test</Flex>);
    const flex = screen.getByText("test");
    expect(flex.tagName).toBe("DIV");
    expect(flex).toHaveStyleRule("display", "inline flex");
  });
});
