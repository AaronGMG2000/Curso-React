
const apiKey = 'S8ysT2shs6nf53pge3fnmagnc9TDGmgr';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(res=> res.json())
    .then(({data})=>{
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    })
    .catch(console.warn)

