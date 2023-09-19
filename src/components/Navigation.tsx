import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {

    const navigate = useNavigate()

    const [value, setValue] = React.useState('recents');

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ width: 500 }} className='border-x-2 bg-[unset_!important] text-[white_!important]' value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                className='text-[white_!important]'
                icon={<RestoreIcon onClick={() => navigate('/')} />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                onClick={() => navigate('/favorites')}
                className='text-[white_!important]'
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                className='text-[white_!important]'
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction className='text-[white_!important]' label="Favorites" value="Favorites" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}