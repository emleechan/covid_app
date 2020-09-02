export const _initMapData = async() => {
    const URL = 'https://api.covid19api.com/dayone/country/Canada'
    const req = await fetch(URL);
    const data = await req.json();
    const latLong = [];
    data.forEach((point) => {
        const  {Lat, Lon} = point;
        latLong.push({latLong:[Number(Lon), Number(Lat)]});
    });  
    console.log('_initMapData', latLong)
    return latLong;
}


export const _initDashboardData = async() => {
    const URL = 'https://api.covid19api.com/summary'
    const rep = await fetch(URL)
    let globalSummary;
    if (!rep.ok) {
        throw new Error(`HTTP error! status: ${rep.status}`);
      } else {
        let data = await rep.json();
        globalSummary = data['Global']
        console.log('_initDashboardData', globalSummary);
        return globalSummary;
      }
    // data.then(() => {    
    //         globalSummary = data['Global'];
    //     })
    // return globalSummary;
}

 