import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from './pokemonCard.module.css'
import Chip from '@mui/material/Chip';
import { usePalette } from 'color-thief-react'
import hexToRgba from 'hex-to-rgba';
import { useNavigate } from 'react-router-dom';

type sprites = {
    other: { home: { "front_default": string } }
}

type Pokemon = {
    abilities: any[]
    name: string
    sprites: sprites
    url: string
    id: number
    types: any[]
    stats: any[]
    height: number
    weight: number
}

type PokemonCardProps = {
    pokemonDetail: Pokemon
}

const PokemonCard = ({ pokemonDetail }: PokemonCardProps) => {

    const navigate = useNavigate()
    const { data: palette, loading } = usePalette(pokemonDetail.sprites.other.home.front_default, 2, 'hex', { crossOrigin: 'anonymous' })

    const handleClick = (): void => {
        navigate('/pokemon-detail')
    }

    return (
        <>
            {loading ?
                <></>
                :
                <Card
                    className={styles.card}
                    style={{
                        background: loading ? '' : `linear-gradient(90deg, ${hexToRgba(palette[0])} 0%, ${hexToRgba(palette[1])} 100%)`
                    }}
                    onClick={() => handleClick()}
                >
                    <CardContent
                        className={styles.cardContent}
                    >
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            component="div"
                            className={styles.pokemonIdx}
                            color='common.white'
                        >
                            #{pokemonDetail.id}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                            className={styles.pokemonName}
                            color='common.white'
                        >
                            {pokemonDetail.name}
                        </Typography>
                        <Grid
                            className={styles.pokemonTypes}
                        >
                            {pokemonDetail.types.map((type, idx) => {
                                return (
                                    <Chip
                                        label={type.type.name}
                                        color="success"
                                        key={idx}
                                        sx={{
                                            color: 'common.white'
                                        }}
                                    />
                                )
                            })}
                        </Grid>
                    </CardContent>
                    <Grid
                        className={styles.cardImgContainer}
                    >
                        <img
                            src={pokemonDetail.sprites.other.home.front_default}
                            alt={pokemonDetail.name}
                        />
                    </Grid>
                </Card >
            }
        </>
    )
}

export default PokemonCard