$(document).ready(function () {

    /*
     Pseudocode

     center with green when time 9-5 and grey when not 9-5 and red when current hour
     When clicked, text entered into container is saved on local storage. Unllick to edit.
    
     get current hour from moment
     function that loops over time block in html
     get the hour of block from timeframe block
     if block hour less than current hour
     add past class 
     else if black hour = current hour 
     add present class
     remove past class
     else if block hour greater than current hour
     add future class
     remove past class
     remove present class

     call function on pageload
     add to set interval to run every 5 minutes

     on page load, load any save data from local storage
     event listener clicking save button
     which will save text area to local storage
     set value of what we get from local storage to text area
     write a loop or just paste all: $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    
     */



    // $(".saveBtn").on("click", function () {
    //     // get nearby values
    //     var value = $(this).siblings(".description").val();
    //     var time = $(this).parent().attr("id");
    //     // save in localStorage
    //     localStorage.setItem(time, value);
    // });





    // 8: 04
    // $("#hour-9 .description").val(localStorage.getItem("hour-9"));




});