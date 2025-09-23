import { Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import PostList from "./page/PostList";
import PostCreate from "./page/PostCreate";
import PostEdit from "./page/PostEdit";
import CheckPost from "./page/CheckPost";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/postlist" element={<PostList/>}/>
      <Route path="/postcreate" element={<PostCreate/>} />
      <Route path="/postedit" element={<PostEdit/>} />
      <Route path="/checkPost" element={<CheckPost/>}/>
    </Routes>
  );
}

export default App;
