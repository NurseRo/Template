// Function to hide loader and show content
function loaded(showpageid){
    var showpage, loadpage, loadimg;
    loadpage = document.getElementById("loading-wrapper");
    showpage = document.getElementById(showpageid);
    loadimg = document.getElementById("loading");
    loadimg.className = "successful-loading";
    loadpage.className = "successful-loading";
    showpage.style.display = "block";
    setInterval(hideloader, 5000)
}
function hideloader(){
    var loadpage = document.getElementById("loading-wrapper");
    loadpage.style.display = "none";
}