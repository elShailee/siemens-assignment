import palette from 'palette';

export const theme = {
	sizes: {
		borderRadius: {
			XL: '1rem',
		},
		padding: {
			L: '0.75rem',
			XL: '1rem',
			XXL: '1.5rem',
		},
		text: {
			S: '1rem',
			M: '1.25rem',
			XL: '3rem',
		},
	},
	shadows: {
		L: '0px 7px 8px -4px rgb(0, 0, 0, 0.25), 0px 12px 17px 2px rgb(0, 0, 0, 0.2),	0px 5px 22px 4px rgb(0, 0, 0, 0.16)',
	},
	fonts: {
		primary: "'Noto Serif', serif",
	},
	colors: {
		MainScreen: {
			BG: palette.blue[200],
			text: palette.white[900],
			tablesContainerBorder: palette.white[900],
		},
		SummaryModal: {
			BG: palette.purple[300],
			labelsBG: palette.purple[500],
		},
	},
};
