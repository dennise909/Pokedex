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
      /*
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(json) {
        console.log('json', json)
        return json.data;
      });
  
  },[]);
  if (!data) return <span> Loading... </span>        
      return(
         null
      )  
}

export default getpokemonList

getpokemonList()
/*
async function getpokemonList() {
  return await (
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}?access_token=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({query}),
        }
      )
      .then(function(response) {
        response.json();
        return response.json
      })
      .then(function(json) {
        console.log(json.data)
        return json.data;
      })
      .catch(() => {
        console.log("no data available")
      }
      )
  )
}

export default getpokemonList

getpokemonList()


export const getPokemondata = () => {
  return fetch("https://graphql.contentful.com/content/v1/spaces/9ibhbvc9100k/environments/master?access_token=fzIK99bFxOEYWVXcnbkW7u65zlrZSKbx7twE3IGy91Y"),{
    method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
  }
}

function PokemonList() {
  let [data] = useState(null);

  useEffect(() => {
      window
      .fetch("https://graphql.contentful.com/content/v1/spaces/9ibhbvc9100k/environments/master?access_token=fzIK99bFxOEYWVXcnbkW7u65zlrZSKbx7twE3IGy91Y",
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ query }),
          }
  
      )
      .then((response) => response.json())
      .then((json) => {console.log (json.data)
                      return json.data
                    })
      /*
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(json) {
        console.log('json', json)
        return json.data;
      });
  
  },[]);
  if (!data) return <span> Loading... </span>        
      return(
         null
      )  
}

export default PokemonList
*/
