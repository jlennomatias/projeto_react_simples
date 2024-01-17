import { Container, Grid } from '@mui/material'
import ButtonAppBar from '../components/Navbar'
import PokeCard from '../components/PokemonCard'

export const Home = () => {
  return (
    <div>
      <ButtonAppBar />
      <Container >
        <Grid >
          <PokeCard />
        </Grid>
      </Container>
    </div>
  )
}
