export default function Joke(props){
    return(
        <>
          <h1>{props.title}</h1>
          <p>{props.punchline}</p>
        </>
    )
}