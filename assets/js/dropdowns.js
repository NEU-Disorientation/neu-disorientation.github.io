---
---
//Change the URL to the current value of the element represented by "this"
function changeURL() {
    window.location.assign(this.value);
}

document.addEventListener("DOMContentLoaded", function() {
    var yearDropdown = document.getElementById("year-dropdown");
    var articleDropdown = document.getElementById("article-dropdown");

    //Make the article dropdown equal to the current article's URL:
    articleDropdown.value = window.location.pathname;

    //Find the current year of the article.
    var secondSlashIndex = window.location.pathname.indexOf("/", 1);
    var year;
    //If there is no second slash, then this must be the homepage, so the year is the default year.
    if (secondSlashIndex == -1) year = {{ site.default_year }};
    //Otherwise, the year is the number between the first and second slash.
    else year = parseInt(window.location.pathname.substring(1, secondSlashIndex));

    //If this is the default year, then make the year-dropdown point to the home page of the whole Web site.
    if (year === {{ site.default_year }}) yearDropdown.value = "/";
    //Otherwise, make the year-dropdown point to the homepage of the current year.
    else yearDropdown.value = "/"+year.toString()+"/";
    
    //Change the URL whenever someone selects a new option from one of the dropdowns.
    yearDropdown.addEventListener("change", changeURL);
    articleDropdown.addEventListener("change", changeURL);
});