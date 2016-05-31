$(document).ready(function() {
  /* sort inventory-list by alpha order
$("#inventory-list li").uniqueSort() {
      order: 'asc'; */

  /* if mousedown occurs in inventory-list area 1, move item to shopping-list */
$("#inventory-list .store-area-1 li").mousedown(function() {
  $(this).clone().appendTo("#shopping-list .store-area-1 ul")
  /*.toggleClass("store-area-1.li") */
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in inventory-list area 2, move item to shopping-list */
$("#inventory-list .store-area-2 li").mousedown(function() {
   $(this).clone().appendTo("#shopping-list .store-area-2 ul")
  /* .toggleClass("store-area-2 li") */
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in inventory-list area 3, move item to shopping-list */
$("#inventory-list .store-area-3 li").mousedown(function() {
   $(this).clone().appendTo("#shopping-list .store-area-3 ul")
   /* .toggleClass("store-area-3 li") */
  $(this).toggleClass("item-selected");
});

/* if mousedown occurs in shopping-list, hide item in shopping list and show in in-cart */
$("#shopping-list > li").mousedown(function() {
/*  $(this).clone().appendTo("#in-cart ul") */
  console.log("shopping list item was clicked");
});
});
