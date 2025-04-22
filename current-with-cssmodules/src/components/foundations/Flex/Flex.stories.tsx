import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from ".";

const meta: Meta<typeof Flex> = {
  title: "FOUNDATIONS/Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Box = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      backgroundColor: "white",
      padding: "24px",
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      ...style,
    }}
  >
    {children}
  </div>
);

const children = [
  <Box key="1">1</Box>,
  <Box key="2">2</Box>,
  <Box key="3">3</Box>,
  <Box key="4">4</Box>,
];

export const Default: Story = {
  args: {
    children,
    gap: "16px",
  },
};

export const Column: Story = {
  args: {
    children,
    flexDirection: "column",
    gap: "16px",
  },
};

export const Wrap: Story = {
  args: {
    children: [...children, ...children],
    flexWrap: "wrap",
    gap: "16px",
    width: "300px",
  },
};

export const JustifyContent: Story = {
  args: {
    children,
    justifyContent: "space-between",
    gap: "16px",
    width: "100%",
  },
};

export const AlignItems: Story = {
  args: {
    children: children.map((child, index) => (
      <Box key={index} style={{ height: `${(index + 1) * 50}px` }}>
        {index + 1}
      </Box>
    )),
    alignItems: "center",
    gap: "16px",
    height: "200px",
    style: { backgroundColor: "#e0e0e0", padding: "16px" },
  },
};

export const Complex: Story = {
  args: {
    children: (
      <>
        <Flex flex="1" gap="16px">
          <Box style={{ flex: 2 }}>Main Content</Box>
          <Box style={{ flex: 1 }}>Sidebar</Box>
        </Flex>
        <Box style={{ marginTop: "16px" }}>Footer</Box>
      </>
    ),
    flexDirection: "column",
    gap: "16px",
    width: "100%",
  },
};
