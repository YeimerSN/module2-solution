(function(){
    'use strcict';
    // List of element by buy
    var shoppingList = [
        {
            name: "Milk",
            quantity: "2 Bottles"
        },
        {
            name: "Cookes",
            quantity: "10 bags"
        },
        {
            name: "Suggar",
            quantity: "3 Lb"
        },
        {
            name: "Candy",
            quantity: "10 Candy's"
        },
        {
            name: "Rice",
            quantity: "10 Kg"
        }
    ];

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var buy = this;
        buy.items = ShoppingListCheckOffService.getItems();
        buy.addItem = function(itemName, itemQuantity){
            ShoppingListCheckOffService.addItem(itemName, itemQuantity);
        };
        
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var bought = this;
        bought.message = ShoppingListCheckOffService.Message();
        bought.items = ShoppingListCheckOffService.getItemsBuys();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var items = [];
        message = "Noting Bought yet.";

        service.getItems = function(){
            return shoppingList;
        };
        
        service.addItem = function(itemName, itemQuantity){
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item);            
            console.log("SAD: ", Object.keys(items).length === 0);
            console.log("LENGTH: ", items.length);
            console.log("MESAA:",message);
        };

        service.getItemsBuys = function(){
            return items;
        };

        service.Message = function(){   
            //This no change
            /*if(items.length > 0){
                message = ""
            }*/
            return message;
        };

        


    }


})();