function calculateTotal(price:number, quantity:number,discount:number = 0){
    if(discount !==0){
        return quantity*(price-(price*(discount/100)))
    }
    return quantity*price
}
console.log(calculateTotal(1,20,20));


function displayId(id:number|string){
   if( typeof id === "string"){
    console.log(id.toLocaleUpperCase());
    
   }
   if(typeof id === "number"){

    console.log(id*10);
 
}
}

displayId(4)
displayId("hallo")


type OrderStatus = "pending" | "shipped" | "delivered";
interface Order {
    orderId: string;
    amount: number;
    status: OrderStatus;
}
const orders: Order[] = [
    {
        orderId: "ORD-001",
        amount: 1500.50,
        status: "pending"
    },
    {
        orderId: "ORD-002",
        amount: 2300.75,
        status: "shipped"
    },
    {
        orderId: "ORD-003",
        amount: 999.99,
        status: "delivered"
    },
    {
        orderId: "ORD-004",
        amount: 750.25,
        status: "pending"
    }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
    return orders.filter(order => order.status === status);
}
const pendingOrders = filterOrdersByStatus(orders, "pending");
console.log('Pending orders:', pendingOrders);




type ProductInfo = [string, number, number];
interface Inventory {
    [key: string]: number;
}
const productInfo: ProductInfo = ["Laptop", 1200, 5];

let inventory: Inventory = {
    "Laptop": 10,
    "Mouse": 20,
    "Keyboard": 15
};

function updateStock(inventory: Inventory, productInfo: ProductInfo): Inventory {
    const [productName, _, newQuantity] = productInfo;
    const updatedInventory = { ...inventory };
    updatedInventory[productName] = newQuantity;
    return updatedInventory;
}

console.log('Current inventory:', inventory);
const updatedInventory = updateStock(inventory, productInfo);
console.log('Updated inventory:', updatedInventory);