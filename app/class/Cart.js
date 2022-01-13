class Cart {
  constructor(
    items,
    cartClass = "cart",
    plusClass = "plus",
    minusClass = "minus",
    deleteClass = "delete",
    currency = ""
  ) {
    this.items = items;
    this.plusClass = plusClass;
    this.minusClass = minusClass;
    this.deleteClass = deleteClass;
    this.cartClass = cartClass;
    this.currency = "UAH";
  }
  goodsPlus(art) {
    this.items[art]["count"]++;
  }
  goodsMinus(art) {
    if (this.items[art]["count"] - 1 == 0) {
      this.goodsDelete(art);
    } else {
      this.items[art]["count"]--;
    }
  }
  goodsDelete(art) {
    delete this.items[art];
  }
  getTotal() {
    let total = 0;
    for (let key in this.items) {
      total += this.items[key]["count"] * this.items[key]["price"];
    }
    return total;
  }
  render() {
    let table = document.createElement("table"); // create table
    table.classList.add(this.cartClass); // add class from constructor

    for (let key in this.items) {
      let goods = this.items[key];
      // створюю кнопку
      const tr = document.createElement("tr");
      // створюю кнопку видалити
      let td = document.createElement("td");
      let button = document.createElement("button");
      button.classList.add(this.deleteClass);
      button.classList.add("button-primary");
      button.innerHTML = "x";
      button.setAttribute("data-articul", key);
      td.append(button);
      tr.append(td);
      // створюю img
      td = document.createElement("td");
      let img = document.createElement("img");
      img.src = goods.image;
      td.append(img);
      tr.append(td);
      // створюю назву
      td = document.createElement("td");
      let h4 = document.createElement("h4");
      h4.innerHTML = goods.name;
      td.append(h4);
      tr.append(td);
      // ств мінус
      td = document.createElement("td");
      button = document.createElement("button");
      button.classList.add(this.minusClass);
      button.classList.add("button-primary");
      button.innerHTML = "-";
      button.setAttribute("data-articul", key);
      td.append(button);
      tr.append(td);
      // ств кількість
      td = document.createElement("td");
      let span = document.createElement("span");
      span.innerHTML = goods.count;
      td.append(span);
      tr.append(td);
      // ств. плюс
      td = document.createElement("td");
      button = document.createElement("button");
      button.classList.add(this.plusClass);
      button.classList.add("button-primary");
      button.innerHTML = "+";
      button.setAttribute("data-articul", key);
      td.append(button);
      tr.append(td);
      // ств. total
      td = document.createElement("td");
      span = document.createElement("span");
      span.innerHTML = goods.count * goods.price + " " + this.currency;
      td.append(span);
      tr.append(td);
      table.append(tr); // add tr to table
    }
    // ств. full total
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan", 7); // merge 7 td
    td.style.textAlign = "right";
    td.innerHTML =
      '<span class="total">Total: </span> ' +
      this.getTotal() +
      " " +
      this.currency;
    tr.append(td);
    table.append(tr); // to table
    return table;
  }
}
