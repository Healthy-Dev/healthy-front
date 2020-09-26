import { fakeFetchModule, TYPES, METHODS } from "./utils";

export { TYPES };

// Modulo fakeBackend
export const fakeHttpModule = {
	async get(url, token, payload = undefined, type = TYPES.default) {
		try {
			const { response, data } = await fakeFetchModule(
				url,
				token,
				METHODS.get,
				payload,
				type,
			);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [GET] -> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async post(url, token, payload, type = TYPES.default) {
		try {
			const { response, data } = await fakeFetchModule(
				url,
				token,
				METHODS.post,
				payload,
				type,
			);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [POST]-> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async put(url, token, payload, type = TYPES.default) {
		try {
			const { response, data } = await fakeFetchModule(
				url,
				token,
				METHODS.put,
				payload,
				type,
			);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [PUT] -> ${error}`);
		}
	},
	async delete(url, token) {
		try {
			const { response, data } = await fakeFetchModule(url, token, METHODS.delete);
			return { response, data };
		} catch (error) {
			console.log(`httpModule error [DELETE] -> ${error}`);
		}
	},
};

export default fakeHttpModule;
