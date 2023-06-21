export class Upgrade {
  constructor(name, price, quantity, multiplier, img) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.multiplier = multiplier;
    this.img = img;
  }

  get upgradeCard() {
    return `
     <div class="col-3">
            <div class="card hand p-3" onclick="app.UpgradesController.buyUpgrade('${this.name}')">
              <img 
                src=${this.img}
              />
              <h6>Name: ${this.name}</h6>
              <p>Price: ${this.price}</p>
              <p>Quantity: ${this.quantity}</p>
              <p>Multiplier: ${this.multiplier}</p>
            </div>
          </div>
    `;
  }
}
