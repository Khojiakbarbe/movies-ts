import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Data } from "../interfaces/data";
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import PrimarySearchAppBar from "./Navbar";
import axios from 'axios';


const Details: React.FC = () => {

    const { state } = useLocation();

    const movie: Data = state.movie

    const [youtubeUrl, setYoutubeUrl] = useState<string>('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=a753e8aaf7d0723716f884e11dcd42e0`)
            .then(res => {
                if (res.data?.results[1]) {
                    
                    setYoutubeUrl(res.data.results[1].key)
                } else {
                    setYoutubeUrl(res.data.results[0].key)
                }
                console.log(state);              
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <PrimarySearchAppBar />
            <div className='grid md:grid-cols-[auto_1fr] border-b-2 pb-2 gap-4 text-black dark:text-white my-4 font-serif text-xs md:text-2xl px-5 '>

                <iframe src={`https://www.youtube.com/embed/${youtubeUrl}`}
                    frameBorder='0'
                    className='w-full md:w-[500px] rounded-lg md:h-[600px]'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                <div >
                    <span className='text-sm md:text-xl text-red-600 border px-2 border-dashed border-red-600 animate-pulse'>(perhaps: ) This content is 18+</span>
                    <p>Title: <span className='text-sm md:text-2xl text-blue-600  font-mono '>{movie.title}</span></p>
                    <p>Orginal lang: <span className="text-sm md:text-xl text-red-600 border px-2 border-dashed border-red-600">{movie.original_language}</span></p>
                    <hr className="my-4" />
                    <p className='overflow-hidden transition'>{movie.overview}</p>
                    <hr className="my-4" />
                    <p>Popularity: <span className="text-sm md:text-xl text-red-600 border px-2 font-mono border-dashed border-red-600">{movie.popularity}</span></p>
                    <p>Release Date: <span className="text-sm md:text-xl text-blue-600 font-mono border px-2 border-dashed border-blue-600">{movie.release_date}</span></p>
                    <p><GradeOutlinedIcon className='text-yellow-400' />: {movie.vote_average}</p>
                    <p><FavoriteOutlinedIcon className='text-red-600' />: {movie.vote_count}</p>

                </div>
                <p>{movie.title}</p>
            </div>
        </div >
    )
}

export default Details