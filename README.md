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
The repo has only one folder that was changed for the purpose of this challenge; `src`.

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

# Explanation behind coding

## Market

Market was divided into 3 parts; a Topbar, a Footer and the main product. 

### 1) Topbar

The topbar was coded to included the cart component as well as the bag component, which opens the cart component. Clicking anywhere on the Bag Holder, the bluer side of the topbar, opens `Cart`. Cart in itself, is divided into two parts; a list of products(name of the product, price of the product, the quantity and the buttons to change the quantity), and the total price of the current state of the cart.

### 2) Footer

The footer was no more than 3 parts of a text in the design, which was mimicked for the coding. 

### 3) Main product or Market.

The Market component is also divided into two parts; the side panel which includes the filters and the sorting system and the `ProductGrid` where we can see our products that have been paginated. 

#### The Sidepanel

The sidepanel has very similar looking 3 boxes; a sorting system based on the 4 entires given on the design and the filters. The filters use the same template whereas the sort box has largely the same css while being a separate enough component to be its own proponent. Normally, in this proportion of a project I would have handled state managements in this level for the Sorts and the filters, whereas in this project Redux was used for the state management, more on it below. 

##### The Filters 

The filters get their state from redux, where they both have separate states as they are two separate lists from the coming jsons (companies and tags). Both filters use an axios request to get their inputs as lists and their lists are then filtered next to an input button, a multiple choice checkbox. When an input button has a check mark in it, it means the filter is on and the products displayed in the grid are only of the selected company/tag. 


##### The Sorting Box

The sorting box has not been separated. The component acquires the state using redux and then maps all of the possible states, precoded to a constant token, and then maps all of the selections to an input and a name. A click on the checkbox sets the new sort and the productgrid is reloaded as such. 

#### The `Product Grid`

The product grid has been divided into 3 parts: 1. The Item Type Filter (mug/shirt) 2. The Product Grid itself and 3. The button wrapper for the pagination pages.

##### The Item Type Filter

The item type filter has two buttons; you can either be buying mugs or shirts. The default value has been set to mug. On click the state is updated, which changes the link of the axios get request and the `ProductGrid` is reloaded with the new data.

##### `The Product Grid` 

The product grid is a by default loading state component. After the initial axios get request, the new data is set to be from the pull request. This data combines the link itself; the sorting, the filtering and the pagination is done before the data is given to this part which then reloads whenever the data is changed. The incoming list of data is then mapped into `ProductItem`s and is shown on a grid (but the display is `flex`) If there are less than or equal to 0 items, there is a string displayed : 'No items for these parameters.'

###### `ProductItem`

The product item is a single product that has been mapped on to the `ProductGrid`. The item displays: a picture of the item, the price, the name and a button that when clicked adds the selected item to the cart. The cart is also updated with the price of the item added. The items were first tested on locally to make sure that the data given was used correctly, at which point the backend was deployed and the data was pulled from the backend. 

##### `ButtonWrapper`

The button wrapper consists of multiple parts, also: The previous button, the first and second page, the last two pages and the next button, alongside the current, the last and the next buttons. This was done via a switch that takes in the state and updates the activePages based on the page that the user is currently on. 

## Redux & States 

There are 4 top level states that are used on Redux for this project: The cart, the company filters, the tag filters and the sort. 

### The Cart State

There are two proponents to the cart state: the total price of the cart and the items in the cart. Each item in the cart also has two parts: the item's name and its price. Whenever an item is added, its price is added to the total price, the item is also added to the object. If the item was already in the cart, the quantity of the object in the cart is increased, and whenever it is removed from the cart the object deducts from the quantity, and the price is decreased. If that was the last instance of an object, the value is deleted from the object. 

Slight complication with this state: The total price, as all of the prices end with .99, is always rounded down to the closest thousandth number so that only 3 numbers is displayed. This causes the items to have a decreased display in price if many items are added and then removed from the cart.

### Filters 

The filters are at its core the same: they have a single items array inside and whenever a filter is added, the item is pushed to the array. Whenever a filter is removed, the item is removed from the array. 

### Sorting 

The sorting state also has a single item in its state. The value is changed depending on whichever sort has been selected. 

## Tokens

There is a file named tokens for ease of change in some values; the backend link, the colors of the web app, dimensions that were repeated at least 3 times, the main fonts of the application, icons and finally the sort values. 

## Limitations 

The json-server master that was given does not work with a specific command: `_embed`, hence, the tags could not be displayed optimally. In the optimal case, the tags would be requested with the `_embed=tags` query to the link, which in turn would display only the tags. This was remedied by the database having another field `Tags`. The database handles this by going through the list of items and appending to an array the unique new tags. These tags are then displayed. However, due to this limitation the Companies and Tags filters cannot display however many items are going to be displayed in the `ProductGrid`.

The limitation of the price reduction of items, which is actually just a display bug in the cart's total price, was talked about above. 
