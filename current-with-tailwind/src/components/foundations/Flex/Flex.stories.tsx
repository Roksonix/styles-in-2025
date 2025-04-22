import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";

const meta: Meta<typeof Flex> = {
  title: "FOUNDATIONS/Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Flex>;

const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 rounded shadow-sm ${className}`}>
    {children}
  </div>
);

const children = [
  <Box className="bg-gray-200">1</Box>,
  <Box className="bg-blue-200">2</Box>,
  <Box className="bg-pink-200">3</Box>,
  <Box className="bg-green-200">4</Box>,
];

export const FlexDefault: Story = {
  args: {
    children,
    gap: 4,
  },
};

export const FlexColumn: Story = {
  args: {
    children,
    flexDirection: "column",
    gap: 4,
  },
};

export const FlexAlignment: Story = {
  args: {
    children,
    alignItems: "center",
    justifyContent: "space-between",
    className: "w-full",
  },
};

export const FlexWrap: Story = {
  args: {
    children: [...children, ...children],
    flexWrap: "wrap",
    gap: 4,
    className: "w-[300px]",
  },
};

export const FlexInline: Story = {
  args: {
    children,
    inline: true,
    gap: 4,
  },
};

export const FlexComplex: Story = {
  args: {
    children: (
      <>
        <div className="flex gap-4 flex-1">
          <Box className="bg-blue-100 flex-[2]">Main Content</Box>
          <Box className="bg-gray-100 flex-1">Sidebar</Box>
        </div>
        <Box className="bg-gray-200 w-full">Footer</Box>
      </>
    ),
    flexDirection: "column",
    gap: 4,
    className: "w-full",
  },
};
