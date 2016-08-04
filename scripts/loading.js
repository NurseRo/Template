function loaded(show_page){
    var loader;
    loader = document.getElementById("loading");
    show = document.getElementById(show_page)
    // Hide loading layer
    loader.style.display = "none";    
    // Show the intended page
    show.style.display = "block";
}
