import { render, screen } from "@testing-library/react";

import {
  type FontVariant,
  fontVariants,
  $swBaseFontSize,
  $sansFontFamily,
  $serifFontFamily,
  $robotoFontFamily,
  $dmSansFontFamily,
} from "@similarweb/styles";

import { Text } from "./Text";

type FontOptions = (typeof fontVariants)[FontVariant];

const fontMap = {
  [$sansFontFamily]: `"Roboto",Tahoma,sans-serif`,
  [$serifFontFamily]: `Georgia,"Times New Roman",Times,serif !default`,
  [$robotoFontFamily]: `"Roboto",sans-serif`,
  [$dmSansFontFamily]: `'DM Sans','Roboto',Tahoma,sans-serif`,
};

const getRem = (size: string | number) => `${Number(size) / $swBaseFontSize}rem`;

describe("<Text />", () => {
  it("should render span by default", () => {
    render(<Text fontVariant="body1">test</Text>);

    const text = screen.getByText("test");
    expect(text.tagName).toBe("SPAN");
  });

  it("should render a given tag", () => {
    render(
      <Text
        fontVariant="body1"
        as="pre"
      >
        test
      </Text>,
    );

    const text = screen.getByText("test");
    expect(text.tagName).toBe("PRE");
  });

  it("should render with a given data attribute", () => {
    render(
      <Text
        fontVariant="button"
        data-automation="hello"
      >
        test
      </Text>,
    );

    const text = screen.getByText("test");
    expect(text).toHaveAttribute("data-automation", "hello");
  });

  it.each(Object.entries(fontVariants))(
    "should apply correct '%s' font variant styles",
    // @ts-expect-error - FontVariant === string
    (fontVariant: FontVariant, expectedStyle: FontOptions) => {
      render(<Text fontVariant={fontVariant}>test</Text>);
      const text = screen.getByText("test");
      expect(text).toHaveStyleRule("font-family", fontMap[expectedStyle.family]);
      expect(text).toHaveStyleRule("font-weight", String(expectedStyle.weight));
      expect(text).toHaveStyleRule("line-height", `${expectedStyle.lineHeight}px`);
      expect(text).toHaveStyleRule("font-size", getRem(expectedStyle.size));
    },
  );

  it("should overwrite font variant line-height", () => {
    render(
      <Text
        fontVariant="body1"
        lineHeight="100px"
      >
        test
      </Text>,
    );
    const text = screen.getByText("test");
    expect(text).toHaveStyleRule("line-height", "100px");
  });
});
