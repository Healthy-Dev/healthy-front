import { fakeHttpModule } from "common/http";

export const getDetails = ({payload: {url}}) => {
    console.log(url, "URL");
    return fakeHttpModule.get(url, process.env.REACT_APP_TOKEN);
}
