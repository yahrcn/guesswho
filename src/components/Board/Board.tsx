import React from 'react';

import './Board.scss';
import Cell from '../Cell/Cell';

const boardList = [
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
    { name: 'Никита', image: 'https://random.imagecdn.app/150/150' },
];

export const Board: React.FC = () => {
    return (
        <div className='board'>
            {boardList.map((element, index) => {
                const { name, image } = element;
                return (
                    <Cell
                        key={index}
                        name={name}
                        image={image}
                    />
                );
            })}
        </div>
    );
};

export default Board;
