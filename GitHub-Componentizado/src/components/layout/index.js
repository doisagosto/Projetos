import React from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import * as S from "./styled"

const Layout = ({ children }) => {

  return (
    <S.WrapperLayout>
      <Header />
      {children} 
    </S.WrapperLayout>
  );
};

export default Layout
