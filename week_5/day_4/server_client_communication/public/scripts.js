$('.btn-primary').on('click', () => alert('yoooooooooo'))
$('.btn-danger').on('click', () =>
    $.ajax({
        method: 'GET',
        url: "file",
        dataType: 'json',
        success: (data) => {
            console.log(data)
        },
        error: (jqXHR, testStatus, errorThrown) => {
            console.log(testStatus, errorThrown);
        }
    }));
    $('.btn-secondary').on('click', () => {
        let text = $('.coolText').val()
        let textJSON = JSON.stringify(text)
        console.log(textJSON)
        // $.ajax({
        //     method: 'POST',
        //     url: "file",
        //     data: text,
        //     // dataType: "json",
        //     success: (data) => {
        //         console.log(data)
        //     },
        //     error: (jqXHR, testStatus, errorThrown) => {
        //         console.log(testStatus, errorThrown);
        //     } 
        // })
        $.post( "file", text ); //these do the exact same thing
    }
)