$(document).ready(function() {

$('.store-area').on('click', '.button', function() {
    // declare variable for item to append
   var item = $(this).parent('li');

    // assign store area category and attribute to a variable by traversing the DOM to nearest .store-area
   var parentCategory = $(this).parents('.store-area').attr('data-category');

    // assign list number that corresponds to the index of the lists array
   var parentListIndex = parseInt( $(this).parents('.list').attr('data-list-number') );

   var newIndex = parentListIndex;
      if ( $(this).hasClass('move-left') && parentListIndex > 0) {
        newIndex--;
      } else if ( $(this).hasClass('move-right') && parentListIndex < 2) {
        newIndex++;
      }
      item.appendTo('.list[data-list-number="' + newIndex + '"] .store-area[data-category="' + parentCategory + '"] ul');


   // manage user input
   $('input[type="submit"]').click(function() {
       // assign text input to a variable
       var textInput = $('input[name="new-area-item"]', $(this).parent('form') );
       var newItem = textInput.val();

       console.log(newItem)

       // ?? again?  assign store area category and attribute to a variable by traversing the DOM to nearest .store-area
       var parentCategory = $(this).parents('.store-area').attr('data-category');

       // do nothing if the new item name is empty
       if (newItem.length === 0) { return false; }

       var itemAlreadyExists = false;

       $('.store-area li').each(function() {
       // Note that $(this) now refers to the li that's currently being
       // iterated through, which is why this console log will list all items
       // within the same .store-area container.
       console.log ( $(this).text() );

       if ( $(this).text() === newItem) {
         itemAlreadyExists = true;
       }
      });

     if (itemAlreadyExists) {
          return false;
       }
     // Dynamically create the new item element and populate it with the .text method
     var newItem = $('<li />').text(newItem);
     // Add left and right arrows (fontaweseom)
     var newItemRightArrow = $('<i />').addClass('move-right button fa fa-arrow-right').appendTo(newItem);
     var newItemLeftArrow = $('<i />').addClass('move-left button fa fa-arrow-left').prependTo(newItem);

     newItem.appendTo('#inventory-list .store-area[data-category="' + parentCategory + '"] ul');

      // clear the input
     textInput.val('');

     return false;
     });
     // end manage user input
   });
});
