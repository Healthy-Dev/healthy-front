import { BASE_URL } from "../constants";

/**
 * @enum {string}
 */
export const METHODS = {
	get: "GET",
	post: "POST",
	put: "PUT",
	options: "OPTIONS",
	delete: "DELETE",
};

/**
 * @enum {string}
 */
export const TYPES = {
	json: "application/json",
	multipart: "multipart/form-data",
	default: "application/x-www-form-urlencoded;charset=UTF-8",
};

/**
 * @param {string} url
 * @param {string} token
 * @param {METHODS} method
 * @param {payload}
 * @param {TYPES} type
 */
export const fakeFetchModule = async (
	url,
	token = null,
	method = METHODS.get,
	payload = null,
	type = TYPES.default,
) => {
	const headers = token
		? {
				Accept: "application/json",
				"Content-Type": type,
				Authorization: `Bearer ${token}`,
		  }
		: {
				Accept: "application/json",
				"Content-Type": type,
		  };
	// TODO: Find out why payload gets defined as "application/x-www-form-urlencoded;charset=UTF-8", body should be undefined but GET fails when asking for a card detail.
	const requestOptions = {
		crossDomain: true,
		method: method,
		headers: headers,
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
