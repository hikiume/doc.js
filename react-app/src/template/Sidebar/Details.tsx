import { Link } from "react-router-dom"
import DescriptionIcon from "@mui/icons-material/Description"
import { LangIcon } from "./LangIcon"

type Dir = { [tag: string]: { [title: string]: string } }

const isDir = (entity: object): entity is Dir =>
  !(entity instanceof Array) && typeof entity === "object"

export const Details = ({ dir }: { dir: Dir }) => {
  return (
    <>
      {Object.entries(dir).map(([name, entity], index) => {
        let link = `/note/${`${entity}`.substring(
          0,
          `${entity}`.indexOf(".$")
        )}`
        let title = `${entity}`.substring(`${entity}`.indexOf(".$") + 2)
        return isDir(entity) ? (
          <details key={name} className="cursor-pointer select-none">
            <summary className="flex items-center pl-4 hover:bg-slate-200 py-1">
              <div className="pb-1 pr-2">
                <LangIcon
                  name={name.substring(`${entity}`.indexOf(".$") + 1)}
                />
              </div>
              <span>{name}</span>
            </summary>
            <Details dir={entity} />
          </details>
        ) : (
          <div
            key={index}
            className="pl-8 cursor-pointer select-none hover:bg-slate-100 py-1"
          >
            <Link to={link}>
              <div className="flex items-center">
                <DescriptionIcon sx={{ fontSize: 16, marginRight: 1 }} />
                {title}
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}
