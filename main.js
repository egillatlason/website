    var list = new Array();
    var pageList = new Array();
    var currentPage = 1;
    var numberPerPage = 10;
    var numberOfPages = 0;



function makeList() {
    var el = document.getElementsByClassName("update");
    list = Array.from(el);
    console.log("list ",list);

    numberOfPages = getNumberOfPages();
}
    
function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    console.log("currentPage", currentPage);
    loadList();
    topPage();
}

function previousPage() {
    currentPage -= 1;
    loadList();
    topPage();

}

function firstPage() {
    currentPage = 1;
    loadList();
    topPage();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
    topPage();

}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;
    pageList = list.slice(begin, end);
    drawList();
    check();
}
    
function drawList() {
    document.getElementById("blog").innerHTML = "";
    console.log(currentPage);
    for (r = 0; r < pageList.length; r++) {
        document.getElementById("blog").appendChild(pageList[r]);
    }
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
    makeList();
    loadList();
}

function topPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    
window.onload = load;