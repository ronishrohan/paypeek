export async function fetchDataPOST(url, data){
    try{
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        })
    
        return await res.json();
    }
    catch(err){
        console.log(err)
        throw err;

    }
}