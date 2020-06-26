import { fakeHttpModule } from "common/http";

export const getHome = () => fakeHttpModule.get("v1/cards", undefined);
