import Path from "./Path";

export function addPath(path: Path) {
  const paths = getPaths();
  paths.push(path);
  const newPath: Path[] = [];

  paths.forEach((p) => {
    const exists = newPath.filter((np) => np._id === p._id).length === 1;

    if (!exists) {
      newPath.push(p);
    }
  });

  localStorage.setItem("searchedPaths", JSON.stringify(newPath));
}

export function getPaths() {
  const stringified = localStorage.getItem("searchedPaths");
  const paths = stringified ? (JSON.parse(stringified) as Path[]) : [];
  return paths;
}
