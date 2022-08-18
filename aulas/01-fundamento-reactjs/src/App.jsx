import { Post } from "./Post"
import './global.css'
import { Sidebar } from "./components/Sidebar";
import style from './App.module.css'
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Kellton"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium sollicitudin lectus, id elementum nunc condimentum sit amet. Nunc id mauris rhoncus, fa"
          />
          <Post
            author="Kellton Araujo"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium sollicitudin lectus, id elementum nunc condimentum sit amet. Nunc id mauris rhoncus, fa"
          />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}