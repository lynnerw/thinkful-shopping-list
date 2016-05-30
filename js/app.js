$(document).ready(function() {
  /* sort inventory-list by alpha order
$("#inventory-list li").uniqueSort() {
      order: 'asc'; */

  /* if click occurs in inventory-list, move it to shopping-list with border-top value */
$("#inventory-list .store-area-1 li").click(function(event) {
  $(this).clone().appendTo("#shopping-list ul")
  $(this).toggleClass("item-selected");
});

/* $("#inventory-list .store-area-2 li").click(function(event) {
  $(this).toggleClass("item-selected")
  .clone().appendTo("#shopping-list")
  .toggleClass("store-area-2 li");
}); */
/* $("#inventory-list .store-area-3 li").click(function(event) {
  $(this).toggleClass("item-selected")
  .clone().appendTo("#shopping-list")
  .toggleClass("#shopping-list.store-area-3 li");
}); */
$("#shopping-list li").click(function(event) {
  /* $(this).clone().appendTo("#in-cart ul") */
  console.log("shopping list item was clicked");
});
});
