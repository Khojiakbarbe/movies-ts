import { Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import PrimarySearchAppBar from "../components/Navbar"
import Swipper from "../components/Swipper"
import { Data } from "../interfaces/data"
import { options } from '../option'

const Dashboard: React.FC = () => {

    const navigate = useNavigate();

    const [movies, setMovies] = useState<Data[]>([])
    const [tv, setTv] = useState<Data[]>([])

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=truejnl&language=en-US&page=1&sort_by=popularity.desc', options)
            const data = await res.data.results
            setMovies(data)

            const resTv = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
            const dataTv = await resTv.data.results;
            setTv(dataTv)
        })()
    })

    return (
        <>
            <PrimarySearchAppBar />
            <div className='relative'>
            <img src="https://www.tinkle.in/wp-content/uploads/2021/02/Time-For-The-Theatre_Thumbnail_428x325.png" className='mx-auto' />
            </div>
            <div className='flex justify-around my-5'>
                <h2 className='text-4xl dark:text-white text-center'>MOVIES</h2>
                <Button variant='outlined' color='error' onClick={() => navigate('/')}>
                    movies page
                </Button>
            </div>
            <Swipper movies={movies} />

            <div className='flex justify-around mt-10 mb-5'>
                <h2 className='text-4xl dark:text-white text-center'>TV Series</h2>
                <Button variant='outlined' color='error' onClick={() => navigate('/tv')}>
                    tv page
                </Button>
            </div>
            <Swipper movies={tv} />

            <Footer />

        </>
    )
}

export default Dashboard