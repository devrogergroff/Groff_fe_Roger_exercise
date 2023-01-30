import React from 'react';
import {ListItem} from 'types';
import Card from '../Card';
import {Spinner} from '../Spinner';
import {Container} from './styles';

interface Props {
    items?: ListItem[];
    hasNavigation?: boolean;
    isLoading: boolean;
}

function List ({items, hasNavigation = true, isLoading}: Props) {
    return (
        <>
          {isLoading && <Spinner />}
            <div className="h-full grid gap-6 grid-cols-1 md:grid-cols-5 mt-8 mb-8 rounded-lg shadow-sm md:mb-12 ">            
                {!isLoading &&
                    items.map(({url, id, columns, navigationProps}, index) => {
                        return (
                            <Card
                                key={`${id}-${index}`}
                                id={id}
                                columns={columns}
                                navigationProps={navigationProps}
                                hasNavigation={hasNavigation}
                                url={url}
                            />
                        );
                    })}
            </div>
        </>
      
    );
}

export default List;
