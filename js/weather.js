function gettingJSON(){
    //Display the forecast
    // Your code here.
    $("#forecast").css({
        "display":"block"
    });

    //Set default location if one isn't provided
    var location = document.getElementById("location").value;

    // Your code here.
    if (location == ""){
        var location = 'Ann Arbor';
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    var format = document.getElementById("fahrenheit").value;

    // Your code here.
    if (document.querySelector('input[name=temp][value=metric]').checked == true){
        var format = document.getElementById("celcius").value;
    }
    if (document.querySelector('input[name=temp][value=imperial]').checked == true){
        var format = document.getElementById("fahrenheit").value;
    }
    console.log("Format is " + format);

    //set the query  
    let api = "https://api.openweathermap.org/data/2.5/weather?q=";
    let apikey = "&appid=3a1ee3667de9d3e51f4d7f6c77f44ad3";

    let query = api + location + apikey + '&units=' + format;
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        let loc = json.name;
        let temp = json.main.temp;
        let descrip = json.weather[0].description;
        let icon = json.weather[0].icon;
        let tempImg = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $("#tempImg").attr({
            src: tempImg,
            alt: descrip,
            title: json.weather[0].main,
        })
        document.querySelector("img").innerHTML = tempImg;
        document.querySelector("p").innerHTML = "The temperature in " + loc + " is currently " + temp + " with " + descrip + ".";
    });
    
}
