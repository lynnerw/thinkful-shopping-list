$(document).ready(function() {

/* if mousedown occurs in inventory-list area 1, move item to shopping-list */
$("#inventory-list .store-area-1 li").mousedown(function() {
  $(this).clone().appendTo("#shopping-list .store-area-1 ul")
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in inventory-list area 2, move item to shopping-list */
$("#inventory-list .store-area-2 li").mousedown(function() {
  $(this).clone().appendTo("#shopping-list .store-area-2 ul")
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in inventory-list area 3, move item to shopping-list */
$("#inventory-list .store-area-3 li").mousedown(function() {
  $(this).clone().appendTo("#shopping-list .store-area-3 ul")
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in shopping-list, hide item in shopping list and show in in-cart */
/*$("#shopping-list ul").on("click", "li", function() {
  $(this).clone().appendTo("#in-cart ul");
  $(this).hide();
}); */

$(function() {
    $( "#in-cart" ).sortable({
      revert: true
    });
    $( "#shopping-list li" ).draggable({
      connectToSortable: "#in-cart",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  });

document.getElementById("new-area1-item").addEventListener('keypress', function(e) {
       if (e.keyCode == 13) {
         var newItem = $("#new-area1-item").val();
         $("<li>" + newItem + "</li>").appendTo("#inventory-list .store-area-1 ul");
         console.log(newItem);
           e.preventDefault();
       }
});

document.getElementById("new-area2-item").addEventListener('keypress', function(e) {
       if (e.keyCode == 13) {
         var newItem = $("#new-area2-item").val();
         $("<li>" + newItem + "</li>").appendTo("#inventory-list .store-area-2 ul");
         console.log(newItem);
           e.preventDefault();
       }
});

document.getElementById("new-area3-item").addEventListener('keypress', function(e) {
       if (e.keyCode == 13) {
         var newItem = $("#new-area3-item").val();
         $("<li>" + newItem + "</li>").appendTo("#inventory-list .store-area-3 ul");
         console.log(newItem);
           e.preventDefault();
       }
});
});
