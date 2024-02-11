export const fetchData = async (url,data) => {
    console.log(data)
    const response = await fetch(url, {
  
      method: 'POST',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      body: JSON.stringify(data)
  
    });
  
    const res = await response.json();
  
    return res;
  
  };