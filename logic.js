var button = document.querySelector('#button1');
var forming = document.querySelector("#form1")

button.addEventListener('click',function (){


    var input1 =  document.createElement("form");
    input1.innerHTML = "<input "+ "type" + "=" + "click" +">";
    forming.appendChild(input1);
    if ( forming.innerHTML != null){
        var disabled_value = button.setAttribute("disabled","");
    }


});
var delete_button = document.querySelector("#button2");

delete_button.addEventListener('click', function(){
        var deleting_form = document.querySelector("#form1");
        deleting_form.removeChild(deleting_form.firstElementChild);
        if(document.querySelector("#form1").removeChild){
            button.removeAttribute('disabled');
        }
})


    // if(document.querySelector("#form1").innerHTML === null){
    //     button.removeAttribute('disabled');
    // }
    // delete_button.addEventListener('click', function(){
        
    //     if(document.querySelector("#form1").removeChild){
    //         button.removeAttribute('disabled');
    //     }
        
        
        

    // })