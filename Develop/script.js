$(document).ready(function () {

    /*

     center with green when time 9-5 and grey when not 9-5 and red when current hour
     When clicked, text entered into container is saved on local storage. Unllick to edit.
    
     get current hour from moment
     function that loops over time block in html
     get the hour of block from timeframe block
     if block hour less than current hour
     add past class 
     else if block hour = current hour 
     add present class
     remove past class
     else if block hour greater than current hour
     add future class
     remove past class
     remove present class

     call function on pageload
     add to set interval to run every 5 minutes
    
     */

    var currentTime = moment().format('H');
    console.log(currentTime)


    var contEl = $('#container')
    var contChildren = contEl.children('div')
    contChildren.each((x, v) => {
        const elId = parseInt(v.id)
        //console.log(elId)
        if (currentTime > elId) {
            console.log(elId)
            $(`#${v.id}`).addClass('past')
        }
        if (currentTime === elId) {
            $(`#${v.id}`).addClass('present')
        }
        if (currentTime < elId) {
            $(`#${v.id}`).addClass('future')
        }
    })


    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
    });


    $('#09 .description').val(localStorage.getItem('09'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));





});