var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;

function load(){
    makeList();
    numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = update.slice(begin, end);
    drawList();
    check();
}

function drawList() {
    document.getElementsByClassName("update").innerHTML = "";
    
    for (r = 0; r < pageList.length; r++) {
        document.getElementsByClassName("update").innerHTML += pageList[r] + "";
    }
}