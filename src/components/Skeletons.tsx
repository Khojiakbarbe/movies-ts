import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Skeletons() {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {Array.from(Array(20).keys()).map((_, i) => {
                return <div key={i}>
                    <Skeleton height='200px' baseColor='#79a6f5' />
                    <Skeleton count={3} height='20px' baseColor='#79a6f5' />
                </div>
            })}
        </div>
    )
}

export default Skeletons