import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Teams, UserData} from 'types';

interface Props {
    id?: string;
    url?: string;
    columns: Array<{
        key: string;
        value: string;
    }>;
    hasNavigation?: boolean;
    navigationProps?: UserData | Teams;
}
function Card ({id,columns,url,hasNavigation = true,navigationProps=null}: Props) {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        if(hasNavigation) {
            navigate(url, {
                state: navigationProps,
            }); 
        }      
    };
    return (

        <div className="w-full max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow"   data-testid={`cardContainer-${id}`} onClick={handleClick}>

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/teams.svg" alt='' />
                <h5 className="mb-1 text-xl font-medium text-gray-900">{columns.map(({key: columnKey, value}) => (               
                            <p key={columnKey}>
                            <strong>{columnKey}</strong>&nbsp;{value}
                        </p>    
                            ))}</h5>
                {hasNavigation? (<div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={handleClick}>More details</a>
                </div>) :''}
              
            </div>
        </div>       
    );
      
}
export default Card;
