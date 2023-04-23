import { ThemeProvider, createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
import type { Preview } from '@storybook/react';
import React from 'react';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

const theme = createTheme({
	status: {
		danger: red[500],
	},
});

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => {
			return (
				<ThemeProvider theme={theme}>
					<Story />
				</ThemeProvider>
			);
		},
	],
};

export default preview;
