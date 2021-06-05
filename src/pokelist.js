import React, { useState, useEffect } from 'react';

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

function APIcall() {
    let [data,setData] = useState(null);

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
        .then((json) => setData(json.data))
    
    },[]);
    if (!data) return <span> Loading... </span>        
        return(
           null
        )

}

export default APIcall