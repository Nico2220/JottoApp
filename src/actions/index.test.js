import moxios from "moxios";
import { storeFactory } from "../../tests/testsUtils";
import { getSecretWord } from "./index";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Add reponse word to state", async () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
