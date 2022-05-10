import {useState,useEffect} from 'react'
import styled from 'styled-components';
import SeacrhBar from '../components/SeacrhBar';
import  {Filter}  from '../components/Filter';
import Navigation from '../components/Navigation'
import { useDispatch,useSelector } from 'react-redux';
import { getPokemons } from '../redux/actions';
import { SinglePoke } from '../components/SinglePoke';
import { NotFound } from '../components/NotFound';
import Paged from '../components/Paged';
import Loading from '../components/Loading';



// const Section=styled.section`
// min-height:100vh;
// width: 100%;
// background-color: ${props=> props.theme.text};
// color: ${props=> props.theme.body};
// display: flex;
// justify-content: center;
// align-items: center;
// position: relative;
// `
// const Container=styled.div`
//   width:75%;
//   min-height:80vh;
//   margin:0 auto;
//   display:flex;
//   justify-content:center;
//   align-items:center;
// `
// const Box=styled.div`
//   width:50%;
//   height:100%;
//   display: flex;
//   justify-content:column;
//   align-items:center;

// ` 

// const Grid=styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-column-gap:2rem;
//   padding: 2rem;
//   align-items: baseline;
 
// `
const Load=styled.div`
   position: relative;
  margin: 2rem;
`

const Pokedex = () => {
  
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage,setPokePerPage] = useState(12);
  const lastIndex = currentPage * pokePerPage;
  const firstIndex = lastIndex - pokePerPage;
  const max=allPokemons.length/pokePerPage
  const currentPokemons = allPokemons.slice(firstIndex, lastIndex);
  // const currentPokemons = allPokemons.slice(
  //                             (currentPage-1)*pokePerPage,
  //                             (currentPage-1)*pokePerPage+pokePerPage)

 
 useEffect(() => {
   dispatch(getPokemons())
}, [dispatch])




  return (
   <div>
     <Navigation/>
    <SeacrhBar/>
    <Filter
     setPokePerPage={setPokePerPage}
     setCurrentPage={setCurrentPage}
    />
       {allPokemons.length ? (
           <>
             <main>
             {currentPokemons.length?  (
              <SinglePoke currentPoke={currentPokemons}/>
                ):(
                    <NotFound msg='No found'/>
                  )} 
             </main>
             <div>
               <Paged
                 currentPage={currentPage}
                 setCurrentPage={setCurrentPage}
                 max={max}
                 />
                 </div>
                  </>
                ):(
                 <Load>
                   <Loading/>
                 </Load>
                )}
                </div>
                  );
                }



export default Pokedex