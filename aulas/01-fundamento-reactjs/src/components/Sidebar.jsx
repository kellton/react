import { PencilLine } from "phosphor-react";
import style from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=70" />
            <div className={style.profile}>
                <img className={style.avatar} src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t31.18172-1/18422938_1500811456648885_3611627619415554427_o.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGCY_WKZ7iQTH-8GjCkDA1CaZYp5v0XBSRplinm_RcFJJaKVRsAbwW8V9KgQbSTitDktstSv9dVIG_Yt5huMVfP&_nc_ohc=OVAHShJ-eO0AX9zUFsE&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT8oRc84Piw4IfgBeFK9_2Qpf4GIXoqmcJgw23I-DzUwCw&oe=63220E9F" />
                <strong>Kellton Leitão</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}