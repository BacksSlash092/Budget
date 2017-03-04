//Budget Controller 
var budgetController = (function(){ 
   //some code
    
    
})();   






//USER INTERFACE CONTROLLER
var UIcontroller = (function(){
    
    return {
        
        
        
    }
    
    
})(); 




//GLOBALL APP CONTROLLER
var controller = (function(budgetCrtl, UIctrl){
    
    var crtlAddItem = function(){
        
          // Get Input data
        // Add the item to the budget controller.
        //add the item to the user interface
        //calculate the budget.
        //display the budget
       
    } ;
    
    
    
    document.querySelector('.add__btn').addEventListener('click', crtlAddItem);
    
    
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            crtlAddItem();;
        }
        
        
    });
    
})(budgetController, UIcontroller);