import Box from '@mui/material/Box';
import PokemonCard from '../../base/pokemonCard/PokemonCard';

type PokemonListProps = {
    pokemonList: any[]
}

const PokemonList = ({ pokemonList }: PokemonListProps) => {

    return (
        <Box
            style={{
                padding: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center'
            }}
        >
            {pokemonList.length > 0 ?
                pokemonList.map((pokemon, idx) => {
                    return (
                        <PokemonCard
                            key={idx}
                            pokemonDetail={pokemon}
                        />
                    )
                })
                :
                <></>
            }
        </Box>
    )
}

export default PokemonList