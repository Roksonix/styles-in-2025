import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../Box";
import { Flex } from ".";

const meta: Meta<typeof Flex> = {
  title: "FOUNDATIONS/Flex",
  component: Flex,
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

type Story = StoryObj<typeof Flex>;

const children = [
  <Box
    background="lightgray"
    padding="24px"
  >
    1
  </Box>,
  <Box
    background="lightblue"
    padding="24px"
  >
    2
  </Box>,
  <Box
    background="pink"
    padding="24px"
  >
    3
  </Box>,
  <Box
    background="lightgreen"
    padding="24px"
  >
    4
  </Box>,
];

export const FlexDefault: Story = {
  args: {
    children,
  },
};

export const FlexColumn: Story = {
  args: {
    children,
    flexDirection: "column",
    gap: "16px",
  },
};

export const FlexAlignment: Story = {
  args: {
    children,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
};
