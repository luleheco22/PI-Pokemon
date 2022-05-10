import React from 'react'
import styled from 'styled-components';

const ContainerModal=styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: egba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;
`
const Overlay=styled.div`
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   background: rgba(0,0,0,.5);
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 1rem;
`
const HeadModal=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 1.2rem;
border-bottom: 1px solid #E8E8E8;

   h3{
     font-weight: 500;
     font-size: 16px;
     color: #8a2387ff;
   }

`

const ButtonClose=styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #f27121ff;

  &:hover{
    background: #F2F2F2;
  }


`


const Modal = ({children,isOpen,setIsOpen}) => {

  return (
    <>
       {isOpen && 
    <Overlay>
         <ContainerModal>
            <HeadModal>
                <h3>Success!!!</h3>
            </HeadModal>

          <ButtonClose onClick={()=>setIsOpen(false)}>X</ButtonClose>

            {children}

         </ContainerModal>
    </Overlay>
     }
    </>
 
  )
}

export default Modal
