import React from 'react';

interface ILinkProps {
  text: string;
}

const Link = ({ text }: ILinkProps) => {
  return (
    <h2>
      <a>{text}</a>
    </h2>
  );
};

export default Link;
