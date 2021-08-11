# WebLibrary
Html + CSS + Javascript + Jquery based online library 
![Preview](https://github.com/frephs/WebLibrary/blob/main/preview.png)

## Features 
- Books are visualized in 3D, you can change their viewing angle and cover size in the control panel in the top right corner 
- If you run the webpage as a server, once the page is fully loaded, their left sides gets colored according to their main cover
- Clicking on a book redirects you automatically to their goodreads page
## Dependencies
This library uses the [ColorThief library](https://lokeshdhakar.com/projects/color-thief/) to get the main covers' colors. If not run as a server the page the requests will be blocked by CORS policy
## Usage
The index page loads the controller. Then the books stored in `libri.json` are loaded in chronological order to the page, divided per year.
### Goodreads anchors
Every book redirects to their goodreads page without any need for their page to be linked. 

When a book is loaded they are inserted into anchors that have as `href` a duckduckgo query which paired with the `!ducky` keyword redirects you the goodreads page which more likely to match with your book title.  
```
<a href='https://duckduckgo.com/?q=!ducky+goodreads+'+book[i].title+'>
```html
## Preview 
[Try a preview here](http://htmlpreview.github.io/?https://github.com/frephs/WebLibrary/blob/main/libreria.html) 

