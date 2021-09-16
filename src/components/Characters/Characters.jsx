import CharCard from "../CharCard/CharCard";
function Characters (props) {

    const listed = props.characterList.map(item => item)

    return(
        <div>
            <h1>Meus Personagens</h1>   
            {console.log(props.characterList)}
            <CharCard listed = {listed} />
        </div>
    )
}

export default Characters;