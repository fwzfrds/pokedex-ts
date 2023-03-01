import { useEffect, useState } from 'react'
import Navbar from '../../module/navbar/Navbar'
import { index, detail } from '../../../services/api/pokemon'
import PokemonList from '../../module/pokemonList/PokemonList'
import Loading from '../loading/Loading'
import Pagination from '@mui/material/Pagination';

type Pokemon = {
    abilities: any[]
    name: string
    sprites: {}
    url: string
    id: number
    types: any[]
    stats: any[]
    height: number
    weight: number
}

const Main = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>(
        [{ abilities: [], name: '', sprites: {}, url: '', id: 0, types: [], stats: [], height: 0, weight: 0 }]
    )
    const [loading, setLoading] = useState<boolean>(true)
    const [count, setCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        if (value === 1) {
            fetchPokemons(0, 20)
        } else {
            fetchPokemons(value * 10, 20)
        }
    };

    const fetchPokemons = async (offset: number, limit: number) => {
        setLoading(true)

        const res: any = await index(offset, limit)
        const data: any = res.data.results

        setCount(res.data.count)

        let pokemons: Pokemon[] = []
        let numbers: number = 0
        if (data.length > 0) {
            data.forEach(async (item: { url: string }, idx: number): Promise<void> => {
                const url: string = item.url

                const detailRes: any = await detail(url)
                const detailData: Pokemon = detailRes.data
                const pokemon: Pokemon = {
                    abilities: detailData.abilities,
                    name: detailData.name,
                    sprites: detailData.sprites,
                    url: url,
                    id: detailData.id,
                    types: detailData.types,
                    stats: detailData.stats,
                    height: detailData.height,
                    weight: detailData.weight
                }
                // console.log(pokemon);
                pokemons = [...pokemons, pokemon]
                setPokemonList([...pokemons])

                numbers = numbers + 1

                if (numbers === data.length) {
                    setLoading(false)
                }
            })
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPokemons(0, 20)
    }, [])

    // console.log(pokemonList);

    return (
        <>
            {loading ?
                <Loading />
                :
                <>
                    <Navbar />
                    <PokemonList
                        pokemonList={pokemonList}
                    />
                    <div>
                        <Pagination
                            color="primary"
                            count={count}
                            page={page}
                            onChange={handleChange}
                            style={{
                                margin: '1.5rem auto',
                                width: 'fit-content'
                            }}
                        />
                    </div>
                </>
            }
        </>
    )
}

export default Main