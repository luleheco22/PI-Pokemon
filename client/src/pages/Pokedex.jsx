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