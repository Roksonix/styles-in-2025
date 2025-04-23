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

/*
export const CompleteExample: Story = {
  render: () => (
    <Stack
        height="100%"
        justifyContent="center"
        alignItems="center"
        gap="40px"
    >
      <Stack
          gap="16px"
          maxWidth="444px"
          alignItems="center"
      >
        <Text
          fontVariant="h2"
          style={{ textAlign: "center" }}
          color="black"
        >
          Some header text
        </Text>
        <Text
            fontVariant="body2"
            style={{ textAlign: "center" }}
            color={colorsPalettes.carbon[500]}
        >
          Some body text
        </Text>
      </Stack>
      <Flex gap="32px">
        <IconText
          iconName="wand"
          text={translate("tracker.empty.state.tracker.details.1")}
        />
        <IconText
          iconName="bars"
          text={translate("competitive-tracker-sunset.empty-tracker-page.details2")}
        />
        <IconText
          iconName="arena"
          text={translate("tracker.empty.state.tracker.details.2")}
        />
      </Flex>
      <IconButton
        iconName="arrow-right"
        placement="right"
        onClick={handleCreateProjectClick}
      >
        Button text
      </IconButton>
    </Stack>
  ),
};
*/