import { createSignal } from "solid-js";

export const [started, setStarted] = createSignal(false);
export const [winner, setWinner] = createSignal(false);

export function Cell(props: { name: string; index: number }) {
  const delay = 2 + 2 * props.index + "s";

  const randInt = (min: number, max: number) => Math.floor(randRange(min, max));
  const randRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const color = "#" + Math.floor(randRange(0.1, 0.9) * 16777215).toString(16);

  const cellStyle = `flex justify-center items-center text-4xl h-40 overflow-hidden rounded-lg`;

  const startedStyle = cellStyle + " animate-bounce";
  const pausedStyle = cellStyle;

  let anim = (win: boolean) => (win ? "animate__tada" : "animate__rotateOut");

  return (
    <div
      style={{ "background-color": `${color}`, "animation-delay": `${delay}` }}
      class={started() ? startedStyle : pausedStyle}
    >
      {props.name}
    </div>
  );
}
