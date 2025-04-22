import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../Flex";

import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "FOUNDATIONS/Box",
  component: Box,
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

type Story = StoryObj<typeof Box>;

export const BoxComponent: Story = {
  args: {
    background: "lightgray",
    fontVariant: "body2",
    children: "Children of Box Component",
    paddingX: "24px",
    paddingY: "32px",
    margin: "8px",
    "data-automation": "box-test-id",
  },
};

export const BoxAsSection: Story = {
  args: {
    background: "lightgray",
    fontVariant: "body2",
    children: "Children of Box Component",
    paddingX: "24px",
    paddingY: "32px",
    margin: "8px",
    as: "section",
  },
};

export const HoverableBox: Story = {
  args: {
    background: "lightgray",
    fontVariant: "body2",
    children: "Children of Box Component",
    paddingX: "24px",
    paddingY: "32px",
    margin: "8px",
    whenHover: {
      background: "red",
    },
    transition: "background 0.2s ease-in",
  },
};
