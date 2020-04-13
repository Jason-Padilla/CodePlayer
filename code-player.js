//This updates the output iframe when the page is launched adding html and css styles inside the iframe
$("iframe").contents().find("html").html("</html><head><style>*{padding:0px;margin:0px}" + $("#css-panel").val() + "</style></head><body>"+$("#html-panel").val() + "</body></html>")

//The main container is the height of the page (100vh) but subtracts the size of the header so it doesnt touch the footer
$("#main-container").height($("#main-container").height() - $(".w3-top").height()+15)

//The content-container height is 100% but so it doesnt go otuside of its parent container it subtracts the container above it
$("#content-container").height($("#content-container").height() - $("#top-container").height() -10)

$("textarea").on('change keyup paste', function()
{
    /*
        This makes it so that everytime the user types inside the html textarea or the css textarea it will update the output iframe.
        The iframe will be updated with the contents of html textfarea and css textarea.
        It does so by finding the html of the iframe and then changing it to a string which 
        ends up being the html code for whats inside the textareas.
    */
    $("iframe").contents().find("html").html("</html><head><style>*{padding:0px;margin:0px}" + $("#css-panel").val() + "</style></head><body>"+$("#html-panel").val() + "</body></html>")
})

$(".toggle-button").hover(function()
{
    /*
        This function will add the class highlight to any of the 3 toggle buttons (Html,Css,Output)
        whenever the user hovers over them and remove it whenever the user unhovers. The highlight 
        class changes the background color of the button to grey.
    */
    $(this).toggleClass("highlight")
});

$(".toggle-button").click(function()
{
    /*
        This function will toggle the .panel class when any of the toggle buttons are clicked on.
        It will also toggle the .activated class which will change the background color of the 
        toggle button signifying that its activated. it will resize any active panels so that they all fit on the screen evenly.
    */

    $(this).toggleClass("activated")

    var toggleButtonId = $(this).attr("id")
    if(toggleButtonId == "htmlButton")
    {
        $("#html-panel").toggleClass("hidden")
    }
    if(toggleButtonId == "cssButton")
    {
        $("#css-panel").toggleClass("hidden")
    }
    if(toggleButtonId == "jsButton")
    {
        $("#javascript-panel").toggleClass("hidden")
    }
    if(toggleButtonId == "outputButton")
    {
        $("#output-panel").toggleClass("hidden")
    }
    //$('.hidden').length returns the value of the amount of divs that have .hidden applied
    var numberOfActivepanels = 3 - $('.hidden').length;
    $(".panel").width(($("#content-container").width() / numberOfActivepanels)-33)
});
