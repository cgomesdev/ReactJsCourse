export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HbMEWiwzWfOu1bfbnE9VlPaQobYa14AK&q=${ category }&limit=10`;
    const response = await fetch( url );
    const { data = [] } = await response.json();

    const gifs = data.map( img => (
         {
             id: img.id,
             title: img.title,
             url: img.embed_url
         }
     ));

    return gifs;
};