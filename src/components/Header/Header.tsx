import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/new-point-logo.svg';

const Wrapper = styled.div`
  width:100%;
  max-width:1032px;
  height:100%;
  margin:0px auto 100px auto;
`

const HeaderBlock = styled.div`
  display:flex;
  justify-content: center;
  margin-top:100px;

  @media(max-width:850px) {
    margin-top:15px;
  }
`

const Logotype = styled.img`
  width:170px;
  height:48px;
  margin-bottom:100px;
  cursor:pointer;

  @media(max-width:850px) {
    margin-bottom:15px;
    width:82px;
    height:23px;
  }
`

interface WrapperProps {
    children: ReactNode;
}

export const Header:React.FC<WrapperProps> = ({children}) => {
    const navigate = useNavigate();

    const navigateHome = () => {
      localStorage.setItem('saveScrollPosition', '0');
      localStorage.setItem('last_page','');

      navigate('/');
    }

    return (
        <Wrapper>
            <HeaderBlock>
                <div onClick={() => navigateHome()}>
                    <Logotype src={logo} alt="logo" />
                </div>
            </HeaderBlock>

            {children}
        </Wrapper>
    )
};