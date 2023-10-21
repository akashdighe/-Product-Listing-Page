$(document).ready(function () {
  let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "whiteTMen.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
      // ... (other product data)
    ],
  };

  // Loop through product data and create cards
  for (let i of products.data) {
    // Create Card
    let card = $("<div>").addClass("card " + i.category + " hide");

    // Image div
    let imgContainer = $("<div>").addClass("image-container");
    // Image tag
    let image = $("<img>").attr("src", i.image);
    imgContainer.append(image);
    card.append(imgContainer);

    // Container
    let container = $("<div>").addClass("container");
    // Product name
    let name = $("<h5>").addClass("product-name").text(i.productName.toUpperCase());
    container.append(name);

    // Price
    let price = $("<h6>").text("$" + i.price);
    container.append(price);

    card.append(container);
    $("#products").append(card);
  }

  // Event listener for "All" button
  $("#buttons .button-value:contains('All')").on("click", function () {
    filterProduct("all");
  });

  // Event listener for other category buttons
  $("#buttons .button-value:not(:contains('All'))").on("click", function () {
    filterProduct($(this).text());
  });

  // Function to filter products by category
  function filterProduct(value) {
    // Button class code
    let buttons = $(".button-value");
    buttons.each(function () {
      // Check if value equals innerText
      if (value.toUpperCase() == $(this).text().toUpperCase()) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // Select all cards
    let elements = $(".card");
    // Loop through all cards
    elements.each(function () {
      // Display all cards on 'all' button click
      if (value == "all") {
        $(this).removeClass("hide");
      } else {
        // Check if element contains category class
        if ($(this).hasClass(value)) {
          // Display element based on category
          $(this).removeClass("hide");
        } else {
          // Hide other elements
          $(this).addClass("hide");
        }
      }
    });
  }

  // Search button click
  $("#search").click(function () {
    // Initializations
    let searchInput = $("#search-input").val().toUpperCase();
    let elements = $(".product-name");
    let cards = $(".card");

    // Loop through all elements
    elements.each(function (index) {
      // Check if text includes the search value
      if ($(this).text().toUpperCase().includes(searchInput)) {
        // Display matching card
        $(cards[index]).removeClass("hide");
      } else {
        // Hide others
        $(cards[index]).addClass("hide");
      }
    });
  });

  // Initially display all products
  filterProduct("all");
});
