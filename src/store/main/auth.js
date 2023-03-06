import { createEvent, createStore } from "effector";

const InstAuth = createEvent();
const auth = createStore().on(InstAuth, (state, msg) => msg);

export const authStatus = {
  store:auth,
  event:InstAuth,
}