import { useNoteState } from "hooks/useNoteState";
import { Details } from "./Details";

export const DirView = () => {
  const { data } = useNoteState();
  const note = data?.Note ? data.Note : [];
  let dir: { [tag: string]: { [title: string]: string } } = {};

  for (var i = 0; i < note.length; i++) {
    let tag = note[i].tag[0]?.name || "";
    let title = note[i].title;

    if (Object.keys(dir).indexOf(tag) === -1) {
      dir[tag] = { [title]: `${note[i].id}.$${note[i].title}` };
    } else {
      dir[tag][title] = `${note[i].id}.$${note[i].title}`;
    }
  }

  return <Details dir={dir} />;
};
