import { useNote } from 'hooks/useNote'
import { Link } from 'react-router-dom'
import { Details } from './Details'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { useUser } from 'hooks/useUser'

const CreateButton = styled(Button)({
  backgroundColor: 'rgb(250 250 250 / 1)',
  paddingLeft: '20px',
  paddingRight: '20px',
  borderRadius: '15px',
  boxShadow: '0 3px 10px rgb(93 93 93 / 10%)',
  '&:hover': {
    backgroundColor: 'rgb(250 250 250 / 1)',
    boxShadow: '0 3px 10px rgb(93 93 93 / 15%)',
  },
})

export const Sidebar = () => {
  const { user } = useUser()
  const { noteList } = useNote()

  const note = noteList ? noteList : []
  let dir: { [tag: string]: { [title: string]: string } } = {}

  for (var i = 0; i < note.length; i++) {
    let tag = note[i].tag.name || ''

    if (Object.keys(dir).indexOf(tag) === -1) {
      dir[tag] = { [`${i}.$${tag}`]: `${note[i].id}.$${note[i].title}` }
    } else {
      dir[tag][`${i}.$${tag}`] = `${note[i].id}.$${note[i].title}`
    }
  }

  return (
    <div className="fixed flex flex-col w-[200px] boder-r bg-[#FBFBFA] h-[100vh]">
      <div className="flex items-center justify-center mt-4 mb-2">
        <Link to={`/user/${user?.uid}`}>
          <AccountCircleIcon
            style={{
              marginRight: '12px',
            }}
          />
          {user?.displayName}
        </Link>
      </div>
      <details className="cursor-pointer select-none">
        <summary className="items-center pl-4 hover:bg-slate-200 py-1">
          Note
        </summary>
        <Details dir={dir} />
      </details>
      <details className="cursor-pointer select-none">
        <summary className="items-center pl-4 hover:bg-slate-200 py-1">
          Teamspaces
        </summary>
        <Link to={'/workspace'}>
          <div className="pl-8 cursor-pointer select-none hover:bg-slate-100 py-1">
            <div className="flex items-center">workspace</div>
          </div>
        </Link>
      </details>
      <div className="mt-auto text-center py-4">
        <Link to={'/create'}>
          <CreateButton>
            <CreateNewFolderIcon
              style={{
                marginRight: '12px',
              }}
            />
            create
          </CreateButton>
        </Link>
      </div>
      <p className="text-center py-2 text-xs text-gray-500">v0.0.1</p>
    </div>
  )
}
