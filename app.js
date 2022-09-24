const inputBox = document.querySelector("#inputbox");
// console.log(inputBox);
const continueBtn = document.querySelector(".search-list span");

const searchItems = document.querySelector(".search-items");

const searchResult = document.querySelector(".search-result");

continueBtn.addEventListener("click", result);

function result() {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputBox.value}`;

  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new error("failed to fetch");
      }
    })
    .then((data) => {
      searchResult.style = "display:block";
      console.log(data);
      console.log(data.meals);
      let htmlElement = "";

      if (data.meals) {
        data.meals.forEach((val) => {
          console.log(val);

          htmlElement += `
            <div class="search_items-content" id=${val.idMeal}>
              <img src=${val.strMealThumb} alt="foods" />
              <h1>${val.strMeal}</h1>
    
              <button>Get it</button>
            </div>`;
        });
      } else {
        searchResult.innerHTML = "The Result is Not Found";
      }
      //   console.log(htmlElement);
      searchItems.innerHTML = htmlElement;
      console.log((searchItems.innerHTML += htmlElement));
      //   searchItems.append(htmlElement);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
