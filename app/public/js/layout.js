

$('document').ready(() => {
    // Hidden elements on load
    $(".match_details").hide();
    $("#survey").hide();
    $('#user_details').show();
    // Materialize functions 
    $('.carousel').carousel();
    $('.modal').modal();
    $('select').formSelect();
    // Materialize character counter 
    // $('input#name, input#last_name').characterCounter();

    // On Click functions 
    $('#start').on("click", () => {
        $('#user_details').hide();
        $("#survey").show();
    });

    $('#find_my_match').on("click", () => {
      setTimeout(function(){
        $(".fetching").hide();
      }, 2000);

      $(".match_details").delay(2000).fadeIn(500);
        addPawfile();
      })

    function addPawfile(){
      
      var scoresArray = [];
      event.preventDefault(); 

      var newPawfile = {
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          photo: $('#photo').val(),
          scores: []
      }
    
    $('.question').each(function(){
      // Parse input values as integer
      scoresArray.push(parseInt( $(this).val())); 
    })
    // This counters the async behavior of $.each()
    .promise().done(() => {
      // Push the array of scores to the new friend object
      newPawfile.scores = scoresArray;

      $.post("/api/friends", newPawfile).then((data) => {
        console.log("Pawfile created successfully!", data);
      }); // end AJAX POST
    })
  }
}) 

