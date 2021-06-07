//import React, { useState, useEffect } from 'react';
const spaceId = '9ibhbvc9100k'
const accessToken = 'fzIK99bFxOEYWVXcnbkW7u65zlrZSKbx7twE3IGy91Y'
//const accessToken = 'JFErxP7il5J5U32XfxkiWCtSg2XRj0izTLnyNYaWtkg'
const environment = 'master'

const query = `
query{
    pokemonCollection{
      total,
      items{
        id,
        name,
        type,
        baseExperience
      }
    }
  }

`;

async function getpokemonList() {
  return await (
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`,
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ query }),
          }
  
      )
      .then((response) => response.json())
      .then((json) => {return json.data})
      .catch(() => {console.log("no data available")})
  )}
    export default getpokemonList

    getpokemonList()

