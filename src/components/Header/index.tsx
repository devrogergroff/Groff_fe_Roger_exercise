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
        
<nav className="w-full p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"  onClick={() => {
         navigate(-1);
        }}> Voltar</button> 
   
  </div>
</nav>

        // <HeaderContainer>
        //     <NavigationHeader>
        //         {showBackButton && (
        //             <BackButton
        //                 onClick={() => {
        //                     navigate(-1);
        //                 }}
        //             >
        //                 🔙
        //             </BackButton>
        //         )}
        //         <Title>{title}</Title>
        //     </NavigationHeader>
        // </HeaderContainer>
    );
}

export default Header;
