import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";

export default function useAuth() {
	const key = "HEALTHY__DEV__TOKEN";
	const [token, setToken] = useLocalStorage(key, "");
	const [isAuth, setAuth] = useState(token ? true : false);

	function getToken() {
		if (!token.expire) {
			return token.value;
		}

		if (token.expire >= new Date().getTime()) {
			return token.value;
		}

		localStorage.removeItem(key);
		setAuth(false);

		return null;
	}

	function startSession(token) {
		let item = {
			key: key,
			value: token,
			expire: _fromTime(),
		};

		setAuth(true);
		setToken(item);

		// time logic
		function _fromTime() {
			let date = new Date();

			date.setDate(date.getDate() + 1);
			// console.log(date);

			return date.getTime();
		}
	}

	function closeSession() {
		localStorage.removeItem(key);
		setAuth(false);
	}

	return { isAuth, startSession, closeSession, getToken };
}
