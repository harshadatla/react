import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NativeBaseProvider, extendTheme } from "native-base";
import reportWebVitals from "./reportWebVitals";
import Main from "./components/Main";

const theme = extendTheme({
	config: {
		initialColorMode: "dark"
	}
});

// extend the theme
type MyThemeType = typeof theme;
declare module "native-base" {
	interface ICustomTheme extends MyThemeType {}
}
ReactDOM.render(
	<React.StrictMode>
		<NativeBaseProvider theme={theme}>
			<Main />
		</NativeBaseProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
