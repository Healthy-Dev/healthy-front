import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("getCard"),
	...makeReducer("getCards"),
	...makeReducer("deleteCard"),
	...makeReducer("editCard"),
	...makeReducer("createdCard"),
	...makeReducer("searchCards"),
	...makeReducer("likedCard"),
	...makeReducer("deslikedCard"),
	...makeReducer("filterCardsByCategory"),
	...makeReducer("cardCategories"),
	...makeReducer("filterByUserCreator"),
	...makeReducer("cardsLikeByMe"),
	...makeReducer("messageCard"),
};

const reducer = generalStatus.createReducer(
	{
		[types.HIDDEN_MSG_ALERT]: (state) => ({
			...state,
			messageCard: { data: null },
		}),
		[types.FILTER_CARDS_BY_USERCREATOR_REQUEST]: (state) => ({
			...state,
			filterByUserCreator: { loading: true, error: false },
		}),
		[types.FILTER_CARDS_BY_USERCREATOR_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				filterByUserCreator: {
					loading: false,
					error: false,
					data: payload.data,
				},
			};
		},
		[types.FILTER_CARDS_BY_USERCREATOR_FAIULRE]: (state) => ({
			...state,
			filterByUserCreator: { loading: false, error: true, data: null },
		}),
		[types.GET_CARD_REQUEST]: (state) => ({
			...state,
			getCard: { loading: true, error: false },
		}),
		[types.GET_CARD_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				getCard: {
					loading: false,
					error: false,
					data: payload.data,
					likesCount: payload.data.likesCount,
					isLikedByMe: (me) => payload.data.likesBy.some((user) => user.id === me),
				},
			};
		},
		[types.GET_CARD_FAIULRE]: (state) => ({
			...state,
			getCard: { loading: false, error: true, data: null },
		}),
		[types.GET_CARDS_REQUEST]: (state) => ({
			...state,
			getCards: { loading: true, error: false },
		}),
		[types.GET_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			getCards: { loading: false, error: false, data: payload },
		}),
		[types.GET_CARDS_FAIULRE]: (state) => ({
			...state,
			getCards: { loading: false, error: true, data: null },
		}),
		[types.DELETE_CARD_REQUEST]: (state) => ({
			...state,
			deleteCard: { loading: true, error: false },
		}),
		[types.DELETE_CARD_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				messageCard: { data: "Su tarjeta se elimino correctamente", error: false },
				deleteCard: {
					loading: false,
					error: false,
					data: payload.data,
					message: "HOLA BICHO",
				},
				getCards: {
					...state.getCards,
					data: state.getCards.data.filter(
						(card) => card.id !== Number(payload.reqData.cardId),
					),
				},
				filterByUserCreator: {
					...state.filterByUserCreator,
					data:
						state.filterByUserCreator.data &&
						state.filterByUserCreator.data.filter(
							(card) => card.id !== Number(payload.reqData.cardId),
						),
				},
			};
		},
		[types.DELETE_CARD_FAIULRE]: (state) => ({
			...state,
			deleteCard: { loading: false, error: true, data: null },
			messageCard: { data: "NO se pudo eliminar. Intentelo mas tarde!", error: true },
		}),
		[types.EDIT_CARD_REQUEST]: (state) => ({
			...state,
			editCard: { loading: true, error: false },
		}),
		[types.EDIT_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			messageCard: { data: "Se actualizo correctamente!", error: false },
			editCard: {
				loading: false,
				error: false,
				data: payload.data,
			},
			getCards: {
				...state.getCards,
				data:
					state.getCards.data &&
					state.getCards.data.map((card) =>
						card.id === payload.reqData.cardId ? { ...payload.data, likesBy: [] } : card,
					),
			},
			getCard: {
				...state.getCard,
				data: { ...payload.data },
			},
			filterByUserCreator: {
				...state.filterByUserCreator,
				data:
					state.filterByUserCreator.data &&
					state.filterByUserCreator.data.map((card) =>
						card.id === payload.reqData.cardId ? { ...payload.data, likesBy: [] } : card,
					),
			},
		}),
		[types.EDIT_CARD_FAIULRE]: (state) => ({
			...state,
			editCard: {
				loading: false,
				error: true,
				data: null,
			},
			messageCard: { data: "No se pudo actualizar!", error: true },
		}),
		[types.CREATE_CARD_REQUEST]: (state) => ({
			...state,
			createdCard: {
				loading: true,
				error: false,
			},
		}),
		[types.CREATE_CARD_SUCCESS]: (state, { payload }) => {
			const data = JSON.parse(payload.reqData.data);
			let fakeCard = {
				id: payload.data.id,
				likesCount: 0,
				photo: "data:image/jpeg;base64," + data.photo,
				title: data.title,
				creator: {
					id: 0,
					name: "",
					profilePhoto:
						"https://us.123rf.com/450wm/apoev/apoev1612/apoev161200008/68697464-icono-de-perfil-avatar-por-defecto-marcador-de-posici%C3%B3n-gray.jpg?ver=6",
				},
				likesBy: [],
			};

			return {
				...state,
				createdCard: { loading: false, error: false, data: payload.data },
				getCards: {
					...state.getCards,
					data: [fakeCard, ...state.getCards.data],
				},
				filterByUserCreator: {
					...state.filterByUserCreator,
					data: state.filterByUserCreator.data
						? [fakeCard, ...state.filterByUserCreator.data]
						: [fakeCard],
				},
				messageCard: { data: "Se creo correctamente!", error: false },
			};
		},
		[types.CREATE_CARD_FAILURE]: (state) => ({
			...state,
			createdCard: { loading: false, error: true, data: null },
			messageCard: {
				data: "No se pudo crear su tarjeta. Intentelo mas tarde",
				error: true,
			},
		}),
		[types.SEARCH_CARDS_REQUEST]: (state) => ({
			...state,
			searchCards: {
				loading: true,
				error: false,
			},
		}),
		[types.SEARCH_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			searchCards: {
				loading: false,
				error: false,
				data: payload.data,
			},
		}),
		[types.SEARCH_CARDS_FAILURE]: (state) => ({
			...state,
			searchCards: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_REQUEST]: (state) => ({
			...state,
			filterCardsByCategory: {
				loading: true,
				error: false,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_SUCCESS]: (state, { payload }) => ({
			...state,
			filterCardsByCategory: {
				loading: false,
				error: false,
				data: payload.data,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_FAILURE]: (state) => ({
			...state,
			filterCardsByCategory: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.LIKED_CARDS_REQUEST]: (state) => ({
			...state,
			getCard: {
				...state.getCard,
				likesCount: state.getCard.likesCount + 1,
				isLikedByMe: () => true,
			},
			likedCard: { loading: true },
		}),
		[types.LIKED_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			likedCard: { loading: false, error: false, data: payload.data },
		}),
		[types.LIKED_CARDS_FAILURE]: (state) => ({
			...state,
			getCard: {
				...state.getCard,
				likesCount: state.getCard.data.likesCount - 1,
				isLikedByMe: () => false,
			},
			likedCard: { loading: false, error: true },
		}),
		[types.DISLIKED_CARDS_REQUEST]: (state) => ({
			...state,
			getCard: {
				...state.getCard,
				likesCount: state.getCard.likesCount - 1,
				isLikedByMe: () => false,
			},
			deslikedCard: { loading: true, error: false },
		}),
		[types.DISLIKED_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			deslikedCard: { loading: false, error: false, data: payload.data },
		}),
		[types.DISLIKED_CARDS_FAILURE]: (state) => ({
			...state,
			getCard: {
				...state.getCard,
				likesCount: state.getCard.data.likesCount + 1,
				isLikedByMe: () => true,
			},
			deslikedCard: { loading: false, error: true, data: null },
		}),
		[types.GET_CARDS_CATEGORIES_REQUEST]: (state) => ({
			...state,
			cardCategories: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_CARDS_CATEGORIES_SUCCESS]: (state, { payload }) => ({
			...state,
			cardCategories: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.GET_CARDS_CATEGORIES_FAILURE]: (state) => ({
			...state,
			cardCategories: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},

	initialState,
);

export default reducer;
