import React, { useState } from 'react';
import cn from 'classnames';

import './Cell.scss';

interface ICellProps {
    name: string;
    image: string;
}

export const Cell: React.FC<ICellProps> = (props: ICellProps) => {
    const { name, image } = props;

    const [isCrossed, setIsCrossed] = useState(false);

    return (
        <div
            className={cn('cell', { crossed: isCrossed })}
            onClick={() => setIsCrossed((prev) => !prev)}>
            <img
                alt={name}
                title={name}
                src={image}
                className='cell__image'
            />
        </div>
    );
};

export default Cell;
