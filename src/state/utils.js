import { put, call } from "redux-saga/effects";

//import { workerRefresh } from "su worker para el refresh token";

/**
 * @brief makeWorker, esta funcion crea una funcion generadora de JS que se utiliza para la creacion de sagas
 * @param {*} service funcion que se utiliza para realizar el pedido a backend, dentro de ella va a recibir el payload y el token
 * @param {*} actions objeto con las actions de redux que va a utilizar,
 * 						"success" => en caso de un 200,
 * 						"retry" => en caso de un 401 aka token vencido, (misma accion que disparo esta)
 * 						"fail" => en caso de un error con el backend, se utiliza esta para volcar el codigod de error
 * extra:
 *  dentro de actions, se puede pasar un objeto "hooks" para poder revisar que pasa luego del fetch a backend , y antes de pushear X cosa al store
 *  para utilizarlo, tienen que armarlo de la siguiente manera:
 * 	hooks{ [CODIGO_HTTP]: "FUNCION A EJECUTAR" }, un ejemplo seria esto:
 *  const FailHook = (payload, reqData) => console.log(reqData);
 *  hooks{ 500: FailHook }
 */
export const makeWorker = (service, actions) => {
	return function* workerSearch({ payload }) {
		//el payload adentro
		//	tiene => data (anteriormente el payload);
		//	retry => cantidad de reintentos de la solicitud
		//  const AppToken = localStorage.getItem("token");
		const { response, data } = yield call(service, {
			/* AppToken, */
			payload: payload,
		});
		//	llamamos a los hooks externos si existen:
		if (actions.hooks && actions.hooks[response.status]) {
			yield call(actions.hooks[response.status], {
				payload: { reponse: response, data: data },
				reqData: payload,
			});
		}
		if (actions.hooks?.all) {
			yield call(actions.hooks.all, {
				payload: data,
				reqData: payload,
				reponse: response,
			});
		}
		console.log({ reqData: payload, data: data });
		switch (response.status) {
			case 200:
				yield payload && put(actions.success({ reqData: payload, data: data }));
				yield !payload && put(actions.success(data));
				break;
			case 201:
				yield payload && put(actions.success({ reqData: payload, data: data }));
				yield !payload && put(actions.success(data));
				break;
			case 204:
				yield payload && put(actions.success({ reqData: payload, data: data }));
				yield !payload && put(actions.success(data));
				break;
			case 401:
				console.log("retry");
				if ((payload?.retry ? payload.retry + 1 : 1) < 4) {
					//yield call(workerRefresh, {});
					yield put(
						actions.retry({ ...payload, retry: payload?.retry ? payload.retry + 1 : 1 }),
					);
				} else yield put(actions.fail({ data: data, response: response }));
				break;
			case 409:
				yield put(actions.conflict({ data: data, response: response }));
				break;
			default:
				yield put(actions.fail({ data: data, reponse: response }));
				break;
		}
	};
};

export const makeReducer = (name, extra) => {
	return {
		[name]: { loading: false, error: false, data: null, ...extra },
	};
};
