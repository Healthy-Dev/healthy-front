import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";

export default function useAuth() {
	const key = "HEALTHY__DEV__TOKEN";
	const [healthyToken, setToken] = useLocalStorage(key, "");
	const [isAuth, setAuth] = useState(healthyToken ? true : false);

	function getToken() {
		if (!healthyToken.expire) {
			return healthyToken.value;
		}

		if (healthyToken.expire >= new Date().getTime()) {
			return healthyToken.value;
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

	const token = getToken();

	return { isAuth, startSession, closeSession, token };
}
