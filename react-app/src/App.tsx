import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "pages/Home"
import { Note } from "pages/note/Note"
import { Layout } from "template/Layout"
import { RecoilRoot } from "recoil"
import { Create } from "pages/Create"
import { User } from "pages/user/User"
import { NotFound } from "pages/NotFound"
import { Workspace } from "pages/Workspace"
import { Edit } from "pages/edit/Edit"
import { Setting } from "pages/Setting"

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Layout>
          <Routes>
            <Route path={`*`} element={<NotFound />} />
            <Route path={`/`} element={<Home />} />
            <Route path={`/create`} element={<Create />} />
            <Route path={`/user/*`} element={<User />} />
            <Route path={`/note/*`} element={<Note />} />
            <Route path={`/edit/*`} element={<Edit />} />
            <Route path={`/setting`} element={<Setting />} />
            <Route path={`/workspace`} element={<Workspace />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
