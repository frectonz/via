import Path from "./Path";

export function addPath(path: Path) {
  const paths = getPaths();
  paths.push(path);
  localStorage.setItem("contributedPaths", JSON.stringify(paths));
}

export function getPaths(): Path[] {
  const stringified = localStorage.getItem("contributedPaths");
  const paths = stringified ? (JSON.parse(stringified) as Path[]) : [];
  return paths;
}
