import { useNavigate } from "react-router-dom"


const Footer = () => {
    
    const navigate = useNavigate();
    
    return (
        <div className="bg-blue-400 dark:bg-[#0c1a38] mt-20 w-full">
            <div className="grid grid-cols-2 p-20">
                <div className="w-[30%] text-white">
                    <p>Site Created by using</p>
                    <div className="flex">

                    </div>
                    <img className="w-full h-full" src="https://miro.medium.com/v2/resize:fit:1400/1*poaGV4iICp06Q-yTlA2g_g.png" alt="" />
                </div>
                <div className="flex justify-around">
                    <ul>
                        <h4 className="font-bold text-2xl text-white">Pages</h4>
                        <li><a className="dark:text-white" onClick={() => navigate('/')} >movies</a></li>
                        <li><a className="dark:text-white" onClick={() => navigate('/tv')} >tv</a></li>
                    </ul>
                    <ul>
                        <h4 className="font-bold text-2xl text-white">Projects</h4>
                        <li><a className="dark:text-white" href="https://khojiakbarbek.vercel.app">Portfolio</a></li>
                    </ul>
                    <ul>
                        <h4 className="font-bold text-2xl text-white">Social Links</h4>
                        <li><a className="dark:text-white" href="https://telegram.me/Xojiakbarbek">Telegram</a></li>
                        <li><a className="dark:text-white" href="https://github.com/Khojiakbarbe">github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer