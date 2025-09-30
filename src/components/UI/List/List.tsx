import React from 'react';

type List = {
    onListItemClick?: (clickedElement: any) => void;
    variant?: 'dotted' | 'ordered' | 'checked';
    elements: {
        value: any;
        text: string | number;
    }[];
};

const List: React.FC<List> = ({ variant = 'dotted', elements = [], onListItemClick }) => {
    const classOfVariant = {
        dotted: 'a-list a-list--dot',
        ordered: 'a-list a-list--num',
        checked: 'a-list a-list--check',
    };

    const ListTag = variant === 'ordered' ? 'ol' : 'ul';

    return (
        <ListTag className={classOfVariant[variant] || 'a-list a-list--dot'}>
            {elements.map((item) => (
                <li
                    className={onListItemClick ? 'cursor-pointer' : ''}
                    onClick={onListItemClick ? () => onListItemClick(item) : undefined}
                    key={item.value}
                >
                    {item.text}
                </li>
            ))}
        </ListTag>
    );
};

export default List;
