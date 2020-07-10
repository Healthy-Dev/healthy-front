import { fakeHttpModule } from "common/http";

export const getDetails = ({ payload: { url } }) =>
	fakeHttpModule.get(url /* process.env.REACT_APP_TOKEN */);
