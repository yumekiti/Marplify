
export const convertToMarp = ( text: string, handleConvertText: (newText: string) => void ) => {
    console.log(text)
    fetch("https://markdown-to-marp-converter-api.herokuapp.com/api/v1/marp", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            raw_body: text,
        })
    })
    .then(res => res.json())
    .then(data => { 
        console.log(data)
        handleConvertText(data.raw_body) 
    }) 
    .catch(err => alert("失敗"))
} 

