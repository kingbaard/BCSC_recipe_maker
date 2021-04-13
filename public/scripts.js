let addRow = (ingredientType) => {
    let newRow = document.createElement("div")
    newRow.classList.add("row","editableIngredientListItem");
    let newIngredientHTML = `
    <div class="col">
    <input type="number" name="amount" value="<% main.amount %>">
    <select name="measurement" value=<% main.measurment %>>
        <option value="teaspoon">Teaspoons</option>
        <option selected="selected" value="tablespoons">Tablespoons</option>
        <option value="bars">Bars</option>
        <option value="pounds">Pounds</option>
        <option value="ounces">Ounces</option>
    </select>
</div>
<div class="col">
    <button class="btn btn-warning"><img width=5% src="/icons/delete.png"></button>
    <button class="btn btn-warning"><img width=5% src="/icons/duplicate.png"></button>
</div>
</div>
<hr>
    `
    $(newRow).append(newIngredientHTML);
    if (ingredientType === "main") {
        $("#mainEnd").before(newRow);
    } else if (ingredientType === "blend") {
        $("#blendEnd").before(newRow);
    } else console.log("invalid argument passed into addrow()")
}     


let dynamicSearch = () => {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('searchBarInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("recipeIndex");
      li = ul.getElementsByTagName('li');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }


