# 19 Progressive Web Applications (PWA): Text Editor

## Your Task

Throughout this course, I've put together a number of impressive projects that I can show off to potential employers. This project is no exception; in fact, it features some of the most impressive expressions of the concepts I've learned so far.

My task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To build this text editor, I'll start with an existing application and implement methods for getting and storing data to an IndexedDB database. I'll use a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

I have deployed this full-stack application to Heroku using the Heroku Deployment Guide on The Full-Stack Blog. 
- [Heroku Deploy URL] https://module19-text-editor.herokuapp.com/

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Mock-Up

The following animation demonstrates the application functionality:


https://github.com/mhamze23/M19_TextEditor/assets/115047281/c1c14601-8227-45f3-9c91-b5fb5022e376

![Screenshot 2023-05-10 at 8 12 38 PM](https://github.com/mhamze23/M19_TextEditor/assets/115047281/ace0d727-e517-4731-95e9-f2d365bacd61)

![Screenshot 2023-05-10 at 8 13 12 PM](https://github.com/mhamze23/M19_TextEditor/assets/115047281/4ef13617-fffe-48bb-89b3-9efb438732a1)

![Screenshot 2023-05-10 at 8 13 30 PM](https://github.com/mhamze23/M19_TextEditor/assets/115047281/e5932c47-582d-4fbf-b458-11fe3b29377b)

![Screenshot 2023-05-10 at 8 14 13 PM](https://github.com/mhamze23/M19_TextEditor/assets/115047281/5e911a68-257b-4a46-8828-2183e824eb7a)

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
