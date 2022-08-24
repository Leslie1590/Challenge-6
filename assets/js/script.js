var cityFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");


// user form submit function
var formSubmitCity = function(event) {
    event.preventDefault();
    // get value from input element
    var cityName = nameInputEl.value.trim();

        if (cityName) {
        getCityLocation(cityLocation);
        nameInputEl.value = "";
        } else {
        alert("Please enter a valid city name");
        }
  };

// get user repos function
var getCityLocation = function(city) {
    var apiUrl = "http://api.weatherapi.com/v1/current.json?key=ff45ba562dcd40d6b58183207222408&q=London&aqi=no";
  
    // make a request to the url
    fetch(apiUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
            response.json().then(function(data) {
                displayRepos(data, user);
            });
            } else {
            alert('Error: City not found');
            }
        })
        .catch(function(error) {
            // Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to WeatherSite");
        });
        
  };

// display cities function
var displayCity = function(repos, searchTerm) {
    // create a link for each city
    var cityEl = document.createElement("a");
    repoEl.classList = "list-item flex-row justify-space-between align-center";
    repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
    if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
        return;
    }
    console.log(repos);
    console.log(searchTerm);

    // clear old content
        repoContainerEl.textContent = "";
        repoSearchTerm.textContent = searchTerm;

    // loop over cities
    for (var i = 0; i < repos.length; i++) {
        
        var cityName = city[i]+ "/" + weahter[i].location;
      
        // create a container for each city
        var cityEl = document.createElement("a");
        cityEl.classList = "list-item flex-row justify-space-between align-center";
        cityEl.setAttribute("href", "./single-repo.html");
  
        // create a span element to hold city name
        var titleEl = document.createElement("span");
        titleEl.textContent = cityName;
  
        // append to container
        cityEl.appendChild(titleEl);

        // create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";


    // append to container
    cityEl.appendChild(statusEl);
  
    // append container to the dom
    cityContainerEl.appendChild(repoEl);
  }
};

var getFeaturedRepos = function(language) {
    var apiUrl = "http://api.weatherapi.com/v1/current.json?key=ff45ba562dcd40d6b58183207222408&q=London&aqi=no";
  
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          displayRepos(data.items, language);
        });
      } else {
        alert('Error: City not found');
      }
    });
  };

  languageButtonsEl.addEventListener("click", buttonClickHandler);
userFormEl.addEventListener("submit", formSubmitHandler);