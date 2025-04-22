import type { Meta, StoryObj } from "@storybook/react";
import { colorsPalettes } from "../../../styles";
import { Flex } from "../Flex";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "FOUNDATIONS/Text",
  component: Text,
  decorators: [
    (Story) => (
      <Flex
        justifyContent="center"
        width="100%"
      >
        <Story />
      </Flex>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextHeading: Story = {
  args: {
    fontVariant: "h2",
    children: "Heading Variant",
  },
};

export const TextBody: Story = {
  args: {
    fontVariant: "body1",
    children: "Body Text Variant",
  },
};

export const TextWithColor: Story = {
  args: {
    fontVariant: "body2",
    color: colorsPalettes.primary.blue,
    children: "Colored Text",
  },
};
