$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	//for(var i=0;i<v1.length;i++)
	for (i = 0 ; i < recipesArray.length ; i++) {
		if(recipesArray[i].highlighted == true){
			var recipe =recipesArray[i];
			renderRecipe(recipe);
			//console.log('Recipes: ', recipesArray);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	var title = recipe.title;
	var srcName = recipe.source.name;
	var name = recipe.name;
    $('.list-recipes').append('<a class="item-recipe" href="#">' +
				    '<span class="attribution">' +
			    		'<span class="title-recipe">' + title + '</span>' +
			    		'<span class="metadata-recipe">' +
			      			'<span class="author-recipe">' + srcName + '</span>' +
			      			'<span class="bookmarks-recipe">' +
			        			'<span class="icon-bookmark"></span>' + 
			      			'</span>' +
			    			'</span>' +
			  		'</span>' + 
		  			'<img src="img/recipes/640x800/' + name + '.jpg"/>'+'</a>');
	//console.log('Voy a pintar la receta: ', recipe);

};



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var name = recipe.name;
	$(document).ready(function(){
		$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe"> TITULO DE LA RECETA (ATRIBUTO "title" ) </span><span class="metadata-recipe"><span class="author-recipe">NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name") </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span> </span></span><img src="URL DE LA IMAGEN" /></a>')
	})
}

function printNews(){
	$(document).ready(function(){
        $("#texto-news").text("NUEVAS RECETAS");
	})
}
printNews();
