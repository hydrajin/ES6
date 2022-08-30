const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if (responseFromServer) { // if true
    resolve("We got the data"); // resolve promise
  } else {
    reject("Data not received"); // else reject
  }
});