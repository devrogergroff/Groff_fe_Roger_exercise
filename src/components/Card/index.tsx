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
        if (hasNavigation) {
            navigate(url, {
                state: navigationProps,
            });
        }
        e.preventDefault();

    };
    return (
        <div className="flex justify-center p-5 cursor-pointer" onClick={handleClick}>
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-2/5 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/teams.svg" alt="" />
                <div className="p-6 flex flex-col justify-start ">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{columns.map(({key: columnKey, value}) => (               
                        <p>{value}</p>            
                    ))}</h5>
                </div>
            </div>
        </div>
    );
      
}
export default Card;
