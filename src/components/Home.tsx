import axios from 'axios'
import { options } from '../option'
import { useState, useEffect } from 'react'
import { Data } from '../interfaces/data'
import Button from '@mui/material/Button';
import baseUrl from './baseUrl';
import Pagination from '@mui/material/Pagination';
import { ReactJSXElement } from '@emotion/react/dist/declarations/types/jsx-namespace';
import Skeletons from './Skeletons';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PrimarySearchAppBar from './Navbar';
import { useAppDispatch } from '../store/store';
import { addMovie } from '../store/Slice';
import { useNavigate } from 'react-router-dom';
import { getLocalFavorites } from './LocalStorage';

const Home: React.FC = (): ReactJSXElement => {

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const [movies, setMovies] = useState<Data[]>([])
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        getData(page)
    }, [page])

    const [pageCount, setPageCount] = useState<number>(1)

    const getData = async (page: number): Promise<void> => {
        setLoading(true)
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=truejnl&language=en-US&page=${page}&sort_by=popularity.desc`, options)
        const data = await res.data.results;
        setMovies(data)
        setPageCount(Math.ceil(res.data.total_pages / 100))
        setLoading(false)
    }


    function changePage(_: React.ChangeEvent<unknown>, value: number): void {
        setPage(value)
    }




    function checkFavorite(movie: Data): boolean {
        const favorites: Data[] | [] = getLocalFavorites();
        const check: boolean = favorites.every(m => m.id !== movie.id)
        if (check) {
            return true
        } else {
            return false
        }
    }

    


    return (
        <>
            <PrimarySearchAppBar />
            <div className='container mx-auto mb-11'>
                <Button variant="outlined" color='error'>Contained</Button>
                {loading && <Skeletons />}
                <div className='p-10 grid grid-cols-2 md:grid-cols-4  gap-5'>
                    {
                        !loading && movies.map((movie, i) => {
                            return <div key={i} className='grid grid-rows-[auto_1fr] border-b-2 pb-2 gap-4 dark:text-white my-4 font-serif text-xs md:text-2xl '>
                                <div className='content hover:shadow-[0_0_40px_black] dark:hover:shadow-[0_0_40px_blue] hover:translate-y-[-10px] transition duration-300'>
                                    <div className="content-overlay"></div>
                                    <img src={baseUrl(movie.poster_path)} className='w-full rounded-lg md:h-[600px] ' alt="" />
                                    <div className='content-details fadeIn-right text-white'>
                                        <span className='absolute translate-y-[-200px] left-5 text-sm text-red-600 border px-2 border-dashed border-red-600'>(perhaps: ) This content is 18+</span>

                                        <p>Org lang: {movie.original_language}</p>
                                        {/* <p>{movie.overview}</p> */}
                                        <p>Pp: {movie.popularity}</p>
                                        <p>Release Date: {movie.release_date}</p>
                                        <p>vote av: {movie.vote_average}</p>
                                        <p>vote count: {movie.vote_count}</p>
                                    </div>
                                </div>
                                <p>{movie.title}</p>

                                <Tooltip title='Add to favorites' placement='bottom-start'>
                                    {
                                        checkFavorite(movie) ?
                                            <IconButton onClick={() => dispatch(addMovie({ id: movie.id, movie: movie }))} className='inline dark:text-white w-10'>
                                                <AddCardOutlinedIcon />
                                            </IconButton>
                                            :
                                            <IconButton disabled className='inline disabled:text-green-900  w-10'>
                                                <AddCardOutlinedIcon />
                                            </IconButton>
                                    }
                                </Tooltip>
                            </div>
                        })
                    }
                </div>
                <button onClick={() => navigate('/favorites')}>gooo</button>
                <div className='relative'>
                    <Pagination className=' md:absolute left-[35%] rounded-lg bg-white text-center' count={pageCount} page={page} showFirstButton showLastButton onChange={changePage} />
                </div>
            </div>
        </>
    )
}

export default Home