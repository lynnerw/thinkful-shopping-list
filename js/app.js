$(document).ready(function() {
  /* sort inventory-list by alpha order
$("#inventory-list li").uniqueSort() {
      order: 'asc'; */

  /* if click occurs in inventory-list, move item to shopping-list */
$("#inventory-list li").mousedown(function() {
  $(this).clone().appendTo("#shopping-list ul")
  $(this).toggleClass("item-selected");
});

/* $("#inventory-list .store-area-2 li").click(function(event) {
  $(this).toggleClass("item-selected")
  .clone().appendTo("#shopping-list")
  .toggleClass("store-area-2 li");
}); */

/* if click occurs in shopping-list, move item to in-cart */
$("#shopping-list li").mousedown(function() {
  $(this).clone().appendTo("#in-cart ul")
  console.log("shopping list item was clicked");
});
});
