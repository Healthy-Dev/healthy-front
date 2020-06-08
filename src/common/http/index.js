import { fakeFetchModule } from "./utils";

// Modulo fakeBackend
export const fakeHttpModule = {
	async get(url, token) {
		try {
			const { response, data } = await fakeFetchModule(url, token);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [GET] -> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async post(url, token, payload, json = false) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "POST", payload, json);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [POST]-> ${error}`);
		}
	},
	// Payload tiene que tener JSON.stringify(payload)
	async put(url, token, payload, json = false) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "PUT", payload, json);
			return { response, data };
		} catch (error) {
			console.log(`fakeHttpModule error [PUT] -> ${error}`);
		}
	},
	async delete(url, token) {
		try {
			const { response, data } = await fakeFetchModule(url, token, "DELETE");
			return { response, data };
		} catch (error) {
			console.log(`httpModule error [DELETE] -> ${error}`);
		}
	},
};

export default fakeHttpModule;
