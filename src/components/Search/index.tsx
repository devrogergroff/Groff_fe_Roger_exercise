import React, {useEffect, useState} from 'react';

interface Props {
    items: any[];
    filterItems: (items:any[]) => void;
}


export default function Search({items, filterItems}:Props) {
    const [searchString, setSearchString] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value);  
        if(e.target.value.length  === 0) {
          filterItems(undefined); 
        }
    };
 
    useEffect(() => {
        // set the current state
        if(searchString.length > 0) {
            const itemsFiltered = items.filter(item => {           
                if(item.name &&  item.name.toLocaleLowerCase().indexOf(searchString) > -1 ) {
                    return true;
                }
                return false;            
            } );
           filterItems(itemsFiltered); 
            console.log(`TESTE ${searchString}`, itemsFiltered);
        }
      
      
      }, [searchString]);
      
      console.log('items',items);

    return (<input value={searchString} onChange={handleChange} />);
}