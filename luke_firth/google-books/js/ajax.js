

  //defines the findBook function                          //define function
  const findBook = function () {

  //stores the search input to send to the API as title     //get input
  val = document.getElementById('search').value;            //value gets the input data as a string
  //console.log(val);

  //stores the XMLHttpRequest method for interacting with the server
  const xhr = new XMLHttpRequest();

  //opens a request to the googlebooks API
  //xhr = XMLHttpRequest() method same as XMLHttpRequest.open('method', 'url')
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${val}`);

  //XMLHttpRequest.onreadystatechange = function (){
  //This function stores and processes the result from the server API}
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4){            //Ignores all states exept DONE
      return;
    }
    //loging what ready state is for clarity
    //console.log(xhr.readyState, 'readystate');

    //convert the JSON string into a JS object.
    const info = JSON.parse(xhr.responseText);
    //console.log(info, 'js object');

    //getting the information from the API
    const image = info.items[0].volumeInfo.imageLinks.thumbnail;
    const bookTitle = info.items[0].volumeInfo.title;
    const description = info.items[0].volumeInfo.description;

    console.log(`${bookTitle}, data test`);
    //console.log(`${image}, data test`);

    //setting the book title on the page
    document.getElementById("title").innerHTML = bookTitle
    //setting the image thumb to the image id tag
    document.getElementById("image").src = image;
    //setting the description desc-id id tag
    document.getElementById("desc-tag").innerHTML = description
  };

  //XMLHttp​Request​.send() - sends the request to the server
    xhr.send();
  };
    //onreadystatechange >>>>>>END<<<<<<

   //grabbing button for search
   const button = document.getElementById('button');
   button.addEventListener('click', findBook);
