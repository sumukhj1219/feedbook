import React from 'react'

interface NameComponentProps {
  name: string;
}

const NameComponent: React.FC<NameComponentProps> = ({ name }) => {
  return (
    <div className='rotate-90'>
      <span className="text-7xl font-extrabold">
        {name }
      </span>
    </div>
  );
}

export default NameComponent;
