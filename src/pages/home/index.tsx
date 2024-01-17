import { Container, Grid } from '@mui/material'
import SearchAppBar from '../../components/Navbar'
import PokeCard from '../../components/PokemonCard'
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const history = useNavigate();

  const handleClick = () => {
    history("/login");
  }

  return (
    <div>
      <SearchAppBar />
      <button onClick={handleClick}>Sair</button>
      <Container >
        <Grid >
          <PokeCard />
        </Grid>
      </Container>
    </div>
  )
}
