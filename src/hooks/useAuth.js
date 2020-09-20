import useLocalStorage from "hooks/useLocalStorage";

export default function useAuth() {
	// TODO: Get token and store it in localstorage
	return [isAuth, token, setToken];
}
