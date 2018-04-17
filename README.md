# Bamazon

## Description

This application implements a CLI based storefront using the four npm packages: [inquirer](https://www.npmjs.com/package/inquirer) [mysql](https://www.npmjs.com/package/mysql) [cli-table](https://www.npmjs.com/package/cli-table) and [delay](https://www.npmjs.com/package/delay) packages. This application will show the user Items in a MySQL database and allows them to purchase the items.

### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

### NPM Packages

[inquirer](https://www.npmjs.com/package/inquirer) was used to ask the user which items they want to buy and at which quantity
[cli-table](https://www.npmjs.com/package/cli-table) was used to display our SQL chart to the user in a friendly and clean way.
[delay](https://www.npmjs.com/package/delay) was used to put some wait time in between promts on the CLI, making it easier for the user to read and answer.

### Bamazon Demo

You can watch the demo of Bamazon at the link below.

[Bamazon Demo](https://drive.google.com/file/d/1IBGJkRhadn5dv-Wye3LEKmdiihToBkLL/view?usp=sharing)
