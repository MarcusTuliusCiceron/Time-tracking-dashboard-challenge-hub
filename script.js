let myRequest = new Request("data.json")

fetch(myRequest).then(function(resp){
    return resp.json();
}).then(function(data){
    console.log(data.Work)
})