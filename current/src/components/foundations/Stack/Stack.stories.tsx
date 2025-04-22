import type { Meta, StoryObj } from "@storybook/react";
import { colorsPalettes } from "../../../styles";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "FOUNDATIONS/Stack",
  component: Stack,
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

type Story = StoryObj<typeof Stack>;

const children = [
  <Box
    background={colorsPalettes.primary.lightGray}
    padding="24px"
  >
    1
  </Box>,
  <Box
    background={colorsPalettes.primary.blue}
    color={colorsPalettes.primary.white}
    padding="24px"
  >
    2
  </Box>,
  <Box
    background={colorsPalettes.primary.darkBlue}
    color={colorsPalettes.primary.white}
    padding="24px"
  >
    3
  </Box>,
  <Box
    background={colorsPalettes.primary.gray}
    color={colorsPalettes.primary.white}
    padding="24px"
  >
    4
  </Box>,
];

export const StackComponent: Story = {
  args: {
    children,
    gap: "16px",
  },
};
