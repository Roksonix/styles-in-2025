import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "FOUNDATIONS/Stack",
  component: Stack,
  decorators: [
    (Story) => (
      <div className="w-full flex justify-center p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Stack>;

const Box = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 rounded shadow-sm ${className}`}>
    {children}
  </div>
);

const children = [
  <Box className="bg-gray-200">1</Box>,
  <Box className="bg-blue-500 text-white">2</Box>,
  <Box className="bg-blue-800 text-white">3</Box>,
  <Box className="bg-gray-500 text-white">4</Box>,
];

export const StackDefault: Story = {
  args: {
    children,
    gap: 4,
  },
};

export const StackWithAlignment: Story = {
  args: {
    children,
    gap: 4,
    alignItems: "center",
    className: "w-[300px]",
  },
};

export const StackInline: Story = {
  args: {
    children,
    gap: 4,
    inline: true,
  },
};

export const StackComplex: Story = {
  args: {
    children: (
      <>
        <Box className="bg-blue-100 w-full">Header</Box>
        <div className="flex gap-4 w-full">
          <Box className="bg-gray-100 flex-1">Sidebar</Box>
          <Stack gap={4} className="flex-[2]">
            <Box className="bg-blue-50">Content Section 1</Box>
            <Box className="bg-blue-50">Content Section 2</Box>
          </Stack>
        </div>
        <Box className="bg-gray-200 w-full">Footer</Box>
      </>
    ),
    gap: 4,
    className: "w-full",
  },
};
