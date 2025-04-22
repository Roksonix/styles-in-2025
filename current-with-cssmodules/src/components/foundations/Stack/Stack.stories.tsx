import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "FOUNDATIONS/Stack",
  component: Stack,
  decorators: [
    (Story) => (
      <div style={{ padding: "24px", backgroundColor: "#f5f5f5" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Stack>;

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
  <Box key="1">Item 1</Box>,
  <Box key="2">Item 2</Box>,
  <Box key="3">Item 3</Box>,
  <Box key="4">Item 4</Box>,
];

export const Default: Story = {
  args: {
    children,
    gap: "16px",
  },
};

export const WithAlignment: Story = {
  args: {
    children,
    gap: "16px",
    alignItems: "center",
    style: { width: "300px", backgroundColor: "#e0e0e0", padding: "16px" },
  },
};

export const WithJustification: Story = {
  args: {
    children,
    gap: "16px",
    justifyContent: "space-between",
    style: { height: "400px", backgroundColor: "#e0e0e0", padding: "16px" },
  },
};

export const WithCustomSizes: Story = {
  args: {
    children: children.map((child, index) => (
      <Box key={index} style={{ width: `${100 - index * 20}%` }}>
        Item {index + 1}
      </Box>
    )),
    gap: "16px",
    width: "100%",
  },
};
