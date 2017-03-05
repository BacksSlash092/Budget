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
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list'
        
        
    }
    
    
    return {
        
        getInput: function(){
            
            return{
                
                type:document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description :document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value    
                
            };  
        },
        
        
        
        addListItem:function(obj,type){
            
            var html, newHtml, element;
            
            //Create HTML with placeholder text
            
               
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html =  '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                        
                
                
                
            } else if (type === 'exp'){
                
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div> ' ;  
                
                
                
            }
                        
            //replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
             newHtml = newHtml.replace('%value%', obj.value);
            
            
            //add it to the dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },
        
        clearFields:function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            
            
            fieldsArray.forEach( function(current, index, array){
                
                current.value = "";
                
                
                
            });
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
        UIctrl.addListItem(newITem, input.type);
        
        
        //ClearFields
        
        UIctrl.clearFields();
        
        //calculate the budget.
        //display the budget
       
    } ;
    
    
    
    return{
      init: function(){
     
        setupEventListeners();   
        console.log("Application started")
          
      }
        
    };
    
    
    
  
    
})(budgetController, UIcontroller);


controller.init();
