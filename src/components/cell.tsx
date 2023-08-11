export default function Cell(props: { name: string; index: number }) {
  const delay = 2 + 2 * props.index + "s";

  const randRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const randInt = (min: number, max: number) => Math.floor(randRange(min, max));

  const color = () =>
    "#" + Math.floor(randRange(0.1, 0.9) * 16777215).toString(16);

  return <>{props.name + " " + props.index}</>;
}
