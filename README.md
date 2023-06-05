# TO-DO
To-do list 
The app allows users to enter tasks and save them to a list. Here's an explanation of the different parts of code:

HTML structure:

The HTML file starts with the <!DOCTYPE html> declaration.
It contains the <html> root element, with the lang attribute set to "en".
The <head> section includes meta tags for character encoding and viewport settings, as well as a title for the page.
Inside the <head> section, there are links to an external CSS file (todo.css) and an icon file (file-circle-check-solid.svg).
The <body> section contains the main content of the app.
There is a <div> with the class "top" that displays the heading "TO-DO LISTS".
The main container is a <div> with the class "container".
Inside the container, there is an input field (<input>) and a "SAVE" button (<div class="save">).
Below the input field, there is an ordered list (<ol>) with the id "ul". This is where the to-do list items will be displayed.
At the end of the <body> section, there is a reference to an external JavaScript file (todo.js).
CSS styling:

The CSS code is embedded within a <style> block in the HTML file.
It applies styles to various elements of the app, including the background, fonts, colors, layout, and animations.
The styles define the appearance of the top bar, input field, save button, to-do list items, and alert message.
Media queries are used to make the app responsive for smaller screen sizes.
JavaScript functionality:

The JavaScript code is included in the external file todo.js.
It handles the interactions and functionality of the app.
The code selects the necessary elements from the DOM using document.getElementById and document.getElementsByClassName.
An event listener is added to the "SAVE" button to handle the click event.
If the input field is empty, an alert message is displayed and the app elements are blurred.
If there is input in the field, a new list item (<li>) is created with the entered text and appended to the ordered list (<ol>).
Click events on the list items or the "X" button remove the item or toggle a "completed" class.
The localStorage object is used to save the to-do list items, and a function is called to load the saved items when the page loads.
Overall, the code provides a basic structure and functionality for a to-do list app. You can further enhance it by adding features like editing tasks, marking them as complete, or filtering the list based on different criteria.




