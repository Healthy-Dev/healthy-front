import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";

export default function useAuth() {
	const [token, setToken] = useLocalStorage("token", "");
	const [isAuth, setAuth] = useState(token ? true : false);

	function startSession(token) {
		setToken(token);
		setAuth(true);
	}

	function closeSession() {
		setToken(null);
		setAuth(false);
	}

	return [isAuth, token, closeSession, startSession];
}
