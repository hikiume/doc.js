import Link from "next/link";
import JavaScriptIcon from "assets/JavaScript.svg";
import MyIcon from "assets/MyIcon.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CategoryIcon from "@mui/icons-material/Category";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

type Dir = { [tag: string]: { [title: string]: string } };

const isDir = (entity: object): entity is Dir =>
  !(entity instanceof Array) && typeof entity === "object";

export const Details = ({ dir }: { dir: Dir }) => {
  return (
    <>
      {Object.entries(dir).map(([name, entity]) => {
        let link = `/note/${`${entity}`.substring(
          0,
          `${entity}`.indexOf(".$")
        )}`;
        let title = `${entity}`.substring(`${entity}`.indexOf(".$") + 2);
        return isDir(entity) ? (
          <details key={name} className="cursor-pointer select-none">
            <summary className="flex items-center">
              <ExpandMoreIcon className="icon" />
              <div className="py-1 pr-2">
                {name === "MyDocument" ? (
                  <img src={MyIcon.src} alt="ikki icon" />
                ) : null}
                {name === "JavaScript" ? <JavaScriptIcon /> : null}
                {name === "" ? <CategoryIcon sx={{ fontSize: 16 }} /> : null}
              </div>
              <span>{name === "" ? "Uncategorized" : name}</span>
            </summary>
            <Details dir={entity} />
          </details>
        ) : (
          <div key={name} className="pl-4 cursor-pointer select-none mb-1">
            <Link href={link}>
              <div className="flex items-center">
                <FolderOpenIcon sx={{ fontSize: 16, marginRight: 1 }} />
                {title}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};
