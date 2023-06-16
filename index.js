// Write your code here!
const removeMain = document.querySelector('main');
removeMain.remove();
// Declare the newHeader variable
let newHeader;
//create the h1
newHeader = document.createElement('h1')
//use the variable name to give the header an id
newHeader.id = 'victory'
//use textcontent to add content to the header
newHeader.textContent = "YOUR-NAME is the champion" ;

