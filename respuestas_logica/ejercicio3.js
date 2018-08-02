


///function papeltapiz(l, w, h) {
///
///var num= ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
///    
///return numb[Math.ceil(2*h*(l+w)/0.52/10 * 1.15)];
///    
///    }
///
///    console.log(papeltapiz(5,7,8));
///

    function tapiz(l, w, h) {

    
        var num= ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
        
        return num[Math.ceil(2*h*(l+w)/0.52/10 * 1.15)];
        
        }
        
        console.log(tapiz(5,4,3));
        
        
    
