//Budget Controller 
var budgetController = (function(){ 
    
    var Expense = function(id, description, value){
        
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
    
     var Income = function(id, description, value){
        
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
    
    
    
    var data = {
        
        allItems:{
            
            exp:[],
            inc:[]
            
            
        },
        
        totals:{
            
            exp:0,
            inc:0
        }
       
        
    };
    
    
    return{
        
        addItem: function(type, des, val){
            var newItem;
            
            
            //Create NEw ID
            if (data.allItems[type].length>0){
                
                 ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                
            } else {
                ID=0;
            };
           
            
            
            //Create new Item based on 'inc' or 'exp' type
            if (type === 'exp'){
                
                 newItem = new Expense(ID, des,val);
                 
                
            } else if(type==='inc'){
                newItem = new Income(ID, des, val);
                
                
            }
            
            //push it into the structure.
            data.allItems[type].push(newItem);
           
            return newItem; 
                
                
                
            },
        
        
            testing: function(){
                console.log(data);
            }
            
        };

    
    
})();   









//USER INTERFACE CONTROLLER
var UIcontroller = (function(){
    
    var DOMstrings = {
        
        inputType:".add__type",
        inputDescription: '.add__description',
        inputValue:'.add__value',
        inputBtn: '.add__btn'
        
        
    }
    
    
    return {
        
        getInput: function(){
            
            return{
                
                type:document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description :document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value    
                
            };  
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        }
        
    }
    
    
})(); 




//GLOBALL APP CONTROLLER
var controller = (function(budgetCrtl, UIctrl){
    var DOM = UIctrl.getDOMstrings();
    var setupEventListeners = function(){
          document.querySelector(DOM.inputBtn).addEventListener('click', crtlAddItem);
    
    
        document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            crtlAddItem();;
        }
        
        
        });
    };
    
    var crtlAddItem = function(){
        var input,newITem ;
        // Get Input data
        input = UIctrl.getInput();
      
        // Add the item to the budget controller.
        newITem =  budgetCrtl.addItem(input.type, input.description, input.value);
    
        
        //add the item to the user interface
        //calculate the budget.
        //display the budget
       
    } ;
    
    
    
    return{
      init: function(){
     
        setupEventListeners();   
          
      }
        
    };
    
    
    
  
    
})(budgetController, UIcontroller);


controller.init();
