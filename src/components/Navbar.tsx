import { useEffect, useState } from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from '@mui/material';
import { LocalMode } from './LocalMode';

const Navbar: React.FC = () => {

    const [mode, setMode] = useState<boolean>(LocalMode())

    if (mode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    useEffect(() => {
        if (mode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('mode', JSON.stringify(mode))
    }, [mode])




    return (
        <div className='text-right pt-5 pr-5'>
            <IconButton className='text-black dark:text-white' onClick={() => setMode(!mode)}>
                {mode ?
                    <LightModeOutlinedIcon />
                    :
                    <DarkModeOutlinedIcon />
                }
            </IconButton>
        </div>
    )
}

export default Navbar