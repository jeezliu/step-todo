import React, { useState, useCallback } from 'react';
import Item from './Item';
import update from 'immutability-helper';

const style = {
  width: 400,
};

export interface ItemProps {
  items: {id: number; text: string}
};

const SortableList: React.FC = () => {
  {
    const [items, setItems] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ]);

    const moveItem = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = items[dragIndex];
        setItems(
          update(items, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
          })
        );
      },
      [items]
    );

    const renderItem = (item: { id: number; text: string }, index: number) => {
      return (
        <Item
          key={item.id}
          index={index}
          id={item.id}
          text={item.text}
          moveItem={moveItem}
        />
      );
    };

    return (
      <>
        <div style={style}>{items.map((item, i) => renderItem(item, i))}</div>
      </>
    );
  }
};

export default SortableList;
