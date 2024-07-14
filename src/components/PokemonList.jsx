import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
  const showList = props.pokemon.map((pokemon) => {
    return (
      <Card className="text-center" key={pokemon._id}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>{pokemon.name}</Card.Text>
          <Link to={`/pokemon/${pokemon._id}`}>
            {pokemon.name}
          </Link>
          <Button variant="primary" className="m-2">
            Weight: {pokemon.weight}
          </Button>
          <Button variant="primary" className="m-2">
            Height: {pokemon.height}
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h2>Pokemon List</h2>
      <ul>{showList}</ul>
    </>
  );
};

export default PokemonList;
