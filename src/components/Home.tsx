import axios from 'axios'
import { options } from '../option'
import { useState, useEffect } from 'react'
import { Data } from '../interfaces/data'
import Button from '@mui/material/Button';
import baseUrl from './baseUrl';
import Pagination from '@mui/material/Pagination';

const Home: React.FC = () => {

    const [movies, setMovies] = useState<Data[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        getData(page)
    }, [page])

    const [pageCount, setPageCount] = useState<number>(1)

    const getData = async (page: number): Promise<void> => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=truejnl&language=en-US&page=${page}&sort_by=popularity.desc`, options)
        const data = await res.data.results;
        setMovies(data)
        setPageCount(Math.ceil(res.data.total_pages / 100))

    }


    function changePage(e: React.ChangeEvent<unknown>, value: number):void {
        setPage(value)
    }


    return (
        <div className='container mx-auto'>
            <Button variant="outlined" color='error'>Contained</Button>
            <div className='p-10 grid grid-cols-4  gap-5'>
                {
                    movies.map((movie, i) => {
                        return <div key={i} className='grid grid-rows-[auto_1fr] border-b-2 pb-2 gap-4 dark:text-white my-4 font-serif md:text-2xl'>
                            <img src={baseUrl(movie.poster_path)} className='w-full rounded-lg md:h-[600px] hover:shadow-[0_0_40px_black] dark:hover:shadow-[0_0_40px_blue] hover:translate-y-[-10px] transition duration-300' alt="" />
                            <p>{movie.title}</p>
                        </div>
                    })
                }
            </div>
            <div className='relative text-sm'>
                <Pagination className='border  pagination absolute left-[35%] bg-white text-center' count={pageCount} page={page} showFirstButton showLastButton onChange={changePage} />
            </div>
        </div>
    )
}

export default Home