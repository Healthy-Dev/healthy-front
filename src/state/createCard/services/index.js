import { fakeHttpModule } from "common/http";

export const postCard = () => fakeHttpModule.post("", undefined);
