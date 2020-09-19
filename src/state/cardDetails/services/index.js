import { fakeHttpModule } from "common/http";

export const getDetails = ({ payload: { cardId } }) =>
	fakeHttpModule.get(`v1/cards/${cardId}`, undefined);
