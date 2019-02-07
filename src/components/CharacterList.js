import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log(props)
  return (
    <ul>
      <h1> Testing</h1>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}

    </ul>
  );
};

export default CharacterList;
