# Frontend Challenge - Simple Product Listing Web App

This web app was created for a frontend engineering challenge. It's purpose is to pull data from a backend server and using that data display items, sort, filter and add them into a cart and see the final price of your cart.

# Installation
### Step 1) Clone this repo to your computer
git clone https://github.com/ahkaneti/frontend-challenge.git

### Step 2) `cd` into repo, install `node_modules`
```sh
$ cd frontend-challenge
$ yarn
```

### Step 3) Start
```
$ yarn start
```

# Front-end Challenge File Structure
The repo, after download is supposed to contain 4 files and 4 folders. The files are as follows: 

### 1) `yarn.lock` which is supposed to contain information about the node modules. 
### 2) `package.json` which records metadata about the content of the repo.
### 3) `jsonconfig.json` which means the that the directory is the root of a JavaScript Project.
### 4) `README.md` which is this file, the information on the project.

The folders are as follows: 
### 1) `public` which is the file that contains the HTML files for the React project.
### 2) `build` which is a directory with a production build of your app. 
### 3) `src` which contains the work for this project. There are 4 subfolders and 2 files in this folder.
### 4) `node_modules` which contains all code used for the project that was outsourced. (Including the components for redux, styled components, axios and remix-icons.

The `src` folder contains 4 folders and 2 files: 

 1. `components`
Has folders containing the components for each component of the main page. Each of these folders, in turn, contain an `index.js` and a `styles.js` which contain the javascript and the styling of said components. 

 2. `containers`
 Has a single folder called `Market` which is the main container for the project. This folder is directly called by the `index.js` in the outer-most `src` folder. This file, in turn, calls all the components and combines their functionalities to the single page, design-abiding project.
 
 3. `redux`
This folder contains all of the Slices and reducers necessary for the state management system used in this project, alongside the current state, `store.js`

 4. `tokens`
Has the immutable numbers and colors in file. This file is created for the ease of transition when a design change is necessary in the project.

5. `App.css`
Contains style changes that were required for all of the project.
6. `index.js`
The file that is compiling all of the project, which calls the container `Market`

# Requirements and their fulfillments

### 1) The project's framework must be React. 
The project has been written using the most recent version of React.
### 2) Typescript, which is not a must
The project was written in pure JavaScript.
### 3) Although not necessary, the use of Redux is a must
Redux has been used for inter-component transfer of state knowledge.
### 4) The project should be deployed. 
The project was deployed using netlify at https://frontend-challenge-ag.netlify.app and the backend at https://aaron-backend-challenge.herokuapp.com
### 5) The design file must be coded pixel-perfect and responsive.
The website is completely responsive with respects to the design. 
### 6) The given data files should be used by json-server
The given data files were manipulated and used by the project and deployed on json-server which has become the backend of the project. 
### 7) Free to use icons and placeholder images. 
### 8) There must be a pagination with up to 16 products per page.
There is a pagination for all products displayed in the `ProductList`. 
### 9) Sorting, Brands filter, Tag filter, and itemType filters should be working properly.
### 10) We should be able to add and remove products from the basket and the number of products in the basket should be manageable by buttons.
### 11) We should be able to add products to the basket and remove products from the basket and the number of products in the basket should be manageable by buttons in the basket next to each product.
