import Path from "./Path";

export function addPath(path: Path) {
  const paths = getPaths();
  paths.push(path._id);
  localStorage.setItem("contributedPaths", JSON.stringify(paths));
}

export function getPaths(): string[] {
  const stringified = localStorage.getItem("contributedPaths");
  const paths = stringified ? (JSON.parse(stringified) as string[]) : [];
  return paths;
}
