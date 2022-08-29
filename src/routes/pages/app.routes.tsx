import { Route, Routes } from 'react-router-dom';
import Login from '../../components/Login';

export function AppRoutes () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />}/>
            </Routes>
        </>
    )
    
}
