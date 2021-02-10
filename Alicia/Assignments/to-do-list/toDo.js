//creating a function called new items, with no parameters & Creating varables from
//our HTML IDs to use as the information we need to create list item content for our list
//Then taking that list item content and placing inside of (or below (appendChild)) the unorderd list <ul>
//Starting on like 13, the function is restting the input field back to blank so the user has to ability to type
//in another list item.
//The last line of code in this function is calling the removeItem() function which starts on line 24
function newItem() {
    var item = document.getElementById("input").value
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));
    ul.appendChild(li);
    document.getElementById("input").value ="";
    li.onclick = removeItem;
}
//using the onkeyup DOM event we are telling the program to add the new item to the list when the user releases the enter button
//the keycode for the enter button is 13. So we are checking to see if the button they entered is "enter",
//if it is, then add the item from the previous function to the list.
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        newItem();

    }
};

//here we are creating the removeItem function and passing in (e) as the parameter

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}