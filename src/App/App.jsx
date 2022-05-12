import { MainScreen } from 'MainScreen/MainScreen';
import { Provider } from 'react-redux';
import store from 'Redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<MainScreen />
			</Provider>
		</ThemeProvider>
	);
}

export default App;
