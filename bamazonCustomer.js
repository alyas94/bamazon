var mysql = require("mysql");
var inquirer = require("inquirer");
var delay = require("delay");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazonDB",
});

connection.connect(function(err) {
  if (err) throw err;
  //   displayProducts();
  displayProducts();
});

function promptUser() {
  inquirer
    .prompt([
      {
        name: "choice",
        type: "input",
        message: "Please enter the item ID of what you want to purchase: ",
        filter: Number,
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?",
        filter: Number,
      },
    ])
    .then(function(answer) {
      //if statment to make sure users input was valid
      var chosenItem;
      connection.query("SELECT * FROM products", function(err, results) {
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_id == answer.choice) {
            chosenItem = results[i];
          }
        }
        //if the item isnt in our DB
        if (!chosenItem) {
          console.log(
            "\nHey that wasn't in an Item we have.. Let's try this again!\n"
          );
          delay(2000).then(() => {
            displayProducts();
          });
          return;
        }
        //now we have item user wants, check quantity to DB
        if (answer.quantity <= chosenItem.stock_quantity) {
          console.log("Success!");
          var total = answer.quantity * chosenItem.price;

          var updateQueryStr =
            "UPDATE products SET stock_quantity = " +
            (chosenItem.stock_quantity - answer.quantity) +
            " WHERE item_id = " +
            chosenItem.item_id;

          // Update the inventory
          connection.query(updateQueryStr, function(err, data) {
            if (err) throw err;
            //add up the cost of the items and display
            console.log("Your total is $" + total + "\n Enjoy Your Item!");
          });
          delay(2000).then(() => {
            displayProducts();
          });
        } else {
          console.log(
            "\nSorry there are only " +
              chosenItem.stock_quantity +
              " of this item. Let's try again!\n" +
              "________________"
          );
          delay(2000).then(() => {
            displayProducts();
            return;
          });
        }
      });
    });
}

function displayProducts() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    var table = new Table({
      head: [
        "",
        "Item ID",
        "Product Name",
        "Department Name",
        "Price",
        "Quantity",
        "",
      ],
    });
    var item_id = 0;
    for (var i = 0; i < results.length; i++) {
      item_id = results[i].item_id;

      table.push({
        "": [
          item_id,
          results[i].product_name,
          results[i].department_name,
          results[i].price,
          results[i].stock_quantity,
          "",
        ],
      });
    }
    console.log(table.toString());
  });
  delay(2000).then(() => {
    promptUser();
  });
}

//make an update inventory function
function updateInventory(stock, quantity) {
  var updateQueryStr =
    "UPDATE products SET stock_quantity = " +
    (productData.stock_quantity - quantity) +
    " WHERE item_id = " +
    item;
  // console.log('updateQueryStr = ' + updateQueryStr);

  // Update the inventory
  connection.query(updateQueryStr, function(err, data) {
    if (err) throw err;
  });
}
