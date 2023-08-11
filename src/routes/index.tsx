import { A } from "solid-start";
import Counter from "~/components/Counter";
import Cell from "~/components/cell";
import { Players, PlayersProvider, usePlayers } from "~/components/players";

export default function Home() {
  return (
    <PlayersProvider>
      <main class="text-center mx-auto text-gray-700 p-4 flex-auto flex-col">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Hello world!
        </h1>
        <div>
          <Counter />
        </div>
        <div>
          <Players />
        </div>
        <Cell name="Jeffrey" index={2} />
        <p class="mt-8">
          Visit{" "}
          <a
            href="https://solidjs.com"
            target="_blank"
            class="text-sky-600 hover:underline"
          >
            solidjs.com
          </a>{" "}
          to learn how to build Solid apps.
        </p>
        <p class="my-4">
          <span>Home</span>
          {" - "}
          <A href="/about" class="text-sky-600 hover:underline">
            About Page
          </A>{" "}
        </p>
      </main>
    </PlayersProvider>
  );
}
