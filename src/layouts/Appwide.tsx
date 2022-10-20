import React from 'react';
import { AppWideContainer } from './Appwide.styled';

interface IAppwide {
  children: any;
}

const Appwide = ({ children }: IAppwide) => {
  return <AppWideContainer>{children}</AppWideContainer>;
};

export default Appwide;
