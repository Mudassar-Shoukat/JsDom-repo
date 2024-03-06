const categorySelect = document.getElementById('category-select');
    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=' + selectedCategory;
        
        const option={
             method: 'GET',
            headers: { 'X-Api-Key': 'r3WH6W5nj1lYzHkMEFCAfuP5WU9esuZMnbXgOS0e'},
            contentType: 'application/json',
             
          }
        fetch(apiUrl,option)
          .then(response => response.json())
          .then(data => {
            console.log(data[0]);          
            document.getElementById("data-container").innerHTML =
            "<h4 class='author'>" +` Author is:-  ${data[0].author} `+ "</h4>"+
             "<span class='category'>" + `Category is:-  ${data[0].category}` + "</span>" +
                "<p class='quote'>" + `Quote is:-  ${data[0].quote}` + "</p>" ;

          })
          .catch(error => {
            console.error('Error fetching quotes:', error);
          });
      });
      
