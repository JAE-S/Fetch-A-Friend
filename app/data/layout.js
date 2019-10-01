

  $('document').ready(() => {
    $("#survey").hide();

    $('select').formSelect();
    // $('input#name, input#last_name').characterCounter();

    $('#start').on("click", () => {
        $("#survey").show();
        $('#start').hide();
    });

  });
        