import React from 'react';

interface IProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
};

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
      return people.map((person) => {
        return (
          <div></div>
        );
      });
  };

  return (
    <div>
      I am a list
    </div>
  )
};

export default List;