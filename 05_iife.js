// immediately invoked function expression

let ans = (
  function abcd(){
    let pvtVal = 12;
    return {
        getter: function(){
            console.log(pvtVal);
        },
        setter: function(val){
            pvtVal = val;
        }
    }
  }  
) ();

