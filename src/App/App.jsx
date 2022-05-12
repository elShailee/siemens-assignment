import { MainScreen } from 'MainScreen/MainScreen';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainScreen />
		</ThemeProvider>
	);
}

export default App;
