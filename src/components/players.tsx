import { createEffect, createSignal } from "solid-js";

export const [playersText, setPlayersText] = createSignal("");
export const playerNames = () => {
  return playersText() === "" ? [] : playersText().split(",");
};

export function Players() {
  return (
    <>
      <textarea
        value={playersText()}
        cols="80"
        rows="5"
        class="border-2 border-gray-300 focus:outline-none hover:border-gray-400 active:border-gray-400 rounded p-1 m-8"
        onInput={(e) => {
          setPlayersText(e.currentTarget.value);
        }}
      />
    </>
  );
}
