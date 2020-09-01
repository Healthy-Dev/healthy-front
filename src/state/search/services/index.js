import { fakeHttpModule } from "common/http";

export const getCardsSearch = ({payload: query}) => fakeHttpModule.get(`v1/cards?search=${query}`, undefined);