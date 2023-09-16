import React, { FC, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return(
    <div className=' border-2 w-fit h-fit p-4 flex flex-col items-center hover:border-amber-500'>
        {children}
    </div>
  )
};

export default Card;
