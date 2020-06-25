import { BASE_URL } from "../constants";

// Fake backend
export const fakeFetchModule = async (
	url,
	token,
	method = "GET",
	payload = undefined,
	json = false,
) => {
	const type = json
		? "application/json"
		: "application/x-www-form-urlencoded;charset=UTF-8";
	const requestOptions = {
		crossDomain: true,
		method: method,
		headers: {
			Accept: "application/json",
			"Content-Type": type,
			"X-Auth-Token": token,
		},
		body: payload,
	};
	try {
		const response = await fetch(`${BASE_URL}${url}`, requestOptions);
		const textBody = await response.text();
		const data = textBody.length > 0 ? JSON.parse(textBody) : null;
		return { response, data };
	} catch (error) {
		console.log(`fetchModule error -> ${error}`);
		return { response: { status: -1, debug: error }, data: -1 };
	}
};
