import type { Preview } from '@storybook/react'
import '../src/index.css'; // Import your main CSS file that includes Tailwind

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;