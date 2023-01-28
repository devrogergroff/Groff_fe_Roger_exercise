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
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 ">
            {isLoading && <Spinner />}
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
    );
}

export default List;
