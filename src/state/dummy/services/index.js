import { fakeHttpModule } from "common/http";

export const getDummy = () => fakeHttpModule.get("", undefined);
