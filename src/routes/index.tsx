import { setStarted } from "~/components/Cell";
import { Players, playersText } from "~/components/Players";
import { Table } from "~/components/Table";
import { Button, initTE } from "tw-elements";
initTE({ Button });

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4 flex-auto flex-col">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Lottery
      </h1>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setStarted(true)}
      >
        Play
      </button>
      <div>
        <Table />
      </div>
      <div>
        <Players />
      </div>
    </main>
  );
}
