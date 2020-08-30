export const _initMapData = async() => {
    const URL = 'https://api.covid19api.com/dayone/country/Canada'
    const req = await fetch(URL);
    const data = await req.json();
    const latLong = [];
    data.forEach((point) => {
        const  {Lat, Lon} = point;
        latLong.push({latLong:[Number(Lon), Number(Lat)]});
    });  
    console.log(latLong)
    return latLong;
}

 