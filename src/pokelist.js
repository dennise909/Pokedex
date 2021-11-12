
const spaceId = process.env.REACT_APP_SPACE_ID
const accessToken = process.env.REACT_APP_CDA_TOKEN
const environment = 'master'

//const {REACT_APP_SPACE_ID,REACT_APP_CDA_TOKEN} = process.env;
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
      //.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}/environments/${environment}`,
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

   