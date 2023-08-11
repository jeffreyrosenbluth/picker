import {
  createSignal,
  createContext,
  useContext,
  ParentComponent,
} from "solid-js";

function useProviderValue() {
  const [playersText, setPlayersText] = createSignal("");
  return { playersText, setPlayersText };
}

export type PlayersContextType = ReturnType<typeof useProviderValue>;

export const PlayersContext = createContext<PlayersContextType | undefined>(
  undefined
);

export const PlayersProvider: ParentComponent = (props) => {
  const value = useProviderValue();
  return (
    <PlayersContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </PlayersContext.Provider>
  );
};

export function usePlayers() {
  const context = useContext(PlayersContext);
  if (context === undefined) {
    throw new Error(`usePlayers must be used within a PlayersProvider`);
  }
  return context;
}

export function Players() {
  const value = usePlayers();
  return (
    <>
      <textarea
        name="players"
        id="players"
        cols="80"
        rows="5"
        class="border-2 border-gray-300 focus:outline-none hover:border-gray-400 active:border-gray-400 rounded p-1 m-8"
        onInput={(e) => value.setPlayersText(e.currentTarget.value)}
      >
        {value.playersText()}
      </textarea>
    </>
  );
}
