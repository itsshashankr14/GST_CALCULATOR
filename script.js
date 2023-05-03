function calculate() {
    var productName = document.getElementById("product-name").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    var taxRate = parseFloat(document.getElementById("tax-rate").value);
  
    if (isNaN(quantity) || isNaN(price) || isNaN(taxRate)) {
      document.getElementById("result").innerHTML = "Please enter a valid quantity, price, and tax rate";
      return;
    }
  
    var basePriceExclTax = price * quantity;
    var tax = (basePriceExclTax / 100) * taxRate;
    var basePriceInclTax = basePriceExclTax + tax;
  
    var result = "<strong>  Product Name: " + productName + "</strong><br>";
    result += "Quantity: " + quantity + "<br>";
    result += "Price (per product): " + price.toFixed(2) + "<br>";
    result += "Tax: " + tax.toFixed(2) + "<br>";
    result += "Base Price (Excl. Tax): " + basePriceExclTax.toFixed(2) + "<br>";
    result += "Price (Incl. Tax): " + basePriceInclTax.toFixed(2) + "<br>";
    
    document.getElementById("result").innerHTML = result;
  }
  