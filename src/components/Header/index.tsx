import  React from 'react';
import {useNavigate} from 'react-router-dom';
import {HeaderContainer, NavigationHeader, BackButton, Title} from './styles';

interface Props {
    title: string;
    showBackButton?: boolean;
}

function Header ({title, showBackButton = true}: Props) {
    const navigate = useNavigate();
    return (        
        <nav className="w-full p-3 border-gray-200 rounded bg-gray-50">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <h5 className="text-xl font-medium leading-tight mb-2">{title}</h5>
                {showBackButton && (
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {
                    navigate(-1);
                }}> Back</button> 
                )}  
            </div>
        </nav>
    );
}

export default Header;
