$(function() {
    //define functions
    function makeGrid() {
        // reset the previous grid
        $('#pixelCanvas').empty();

        // get the values for height and width from user input
        let rows = $('#inputHeight').val();
        let columns = $('#inputWeight').val();

        // nested loop to build the grid
        for (let r = 0; r < rows; r++) {
            $('#pixelCanvas').append(`<tr id ='row${r}'></tr>`);
            for (let c = 0; c < columns; c++) {
                $(`#row${r}`).append('<td class = "init"></td>');
            }
        }
    }

    function paintSquare() {
        const colorPicker = $('#colorPicker').val();
        if ($(this).hasClass('init')) {
            $(this).removeClass('init');
            $(this).css('background-color', colorPicker);
        } else {
            $(this).css('background-color', 'white');
            $(this).addClass('init');
        };
    
    }

    // Event Listeners
    // Click on submit button to create the grid
    $('input[type="submit"]').click(function(e) {
        //prevent the page from reloading
        e.preventDefault();
        makeGrid();
    });

    // Change color on click
    $('#pixelCanvas').on('click', 'td', paintSquare);
});