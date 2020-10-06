$(document).ready(function () {


    var currentTime = moment().format('H');
    var currentDate = moment().format('MMMM Do YYYY');

    $('#currentDay').append(currentDate);


    var contEl = $('#container')
    var contChildren = contEl.children('div')
    contChildren.each((x, v) => {
        const elId = parseInt(v.id)

        if (currentTime > elId) {
            $(`#${v.id}`).addClass('past')
        }
        if (currentTime == elId) {
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


    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));

});