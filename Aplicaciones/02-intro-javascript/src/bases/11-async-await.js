

const getImagen = async () =>{
    const apiKey = 'S8ysT2shs6nf53pge3fnmagnc9TDGmgr';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
}

getImagen();



