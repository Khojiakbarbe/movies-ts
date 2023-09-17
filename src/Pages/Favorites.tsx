
import baseUrl from "../components/baseUrl";
import { useAppSelector } from "../store/store"
import PrimarySearchAppBar from '../components/Navbar'
import { Data } from "../interfaces/data";

const Favorites: React.FC = () => {

    const movies = useAppSelector((state) => state.movies.favorites)

    return (
        <>
            <PrimarySearchAppBar />
            <div className="container">
                <h1>Favorites</h1>
                <div className='p-10 grid grid-cols-2 md:grid-cols-4  gap-5'>
                    {
                        movies?.map((movie: Data, i) => {
                            return <div key={i} className='grid grid-rows-[auto_1fr] border-b-2 pb-2 gap-4 dark:text-white my-4 font-serif text-xs md:text-2xl'>
                                <img src={baseUrl(movie.poster_path)} className='w-full rounded-lg md:h-[600px] hover:shadow-[0_0_40px_black] dark:hover:shadow-[0_0_40px_blue] hover:translate-y-[-10px] hover:trans transition duration-300' alt="" />
                                <p>{movie.title}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Favorites