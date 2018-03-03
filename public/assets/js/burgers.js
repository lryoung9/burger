// On page load...
$(function() {
  $(".eatMe").on("click", function(event) {
    console.log("Eat")
    var id = $(this).data("id");
    var newlyEaten = $(this).data("devoured");

    var state = {
      devoured: newlyEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: state
    }).then(
      function() {
        console.log("changed devoured to", newlyEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");
    console.log("ID: " + id)
    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});