import { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import { useHistory } from "react-router-dom";

export default function useAuth() {
	const history = useHistory();
	const [token, setToken] = useLocalStorage("token", "");
	const [isAuth, setAuth] = useState(token ? true : false);

	function startSession(token) {
		setToken(token);
		setAuth(true);
	}

	function closeSession() {
		setToken("");
		setAuth(false);
		history.replace("/login");
	}

	return { isAuth, token, closeSession, startSession };
}
