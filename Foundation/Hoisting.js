// How Hoisting work :

// JavaScipt do Hoisiting for global execution as well as for each Function scope


var favouriteFood = "Panner";

var foodThoughts = function(){
    console.log("Original Fav Food : "+favouriteFood);

    var favouriteFood = "Soyabean";

    console.log("New Favourite food : "+favouriteFood);
};

foodThoughts()
