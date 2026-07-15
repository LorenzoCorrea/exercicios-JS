const url = "https://dummyjson.com/protucts";

function chamarAPI() {
  const resp = await fetch(url);
  console.log(resp);
}

chamarAPI();
