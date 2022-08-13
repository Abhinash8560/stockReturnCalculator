let initialPrice=document.querySelector('#initial-price');
let quantityStocks=document.getElementById('quantity-stocks');
let currentPrice=document.getElementById('current-price');

let submitButton=document.getElementById('submit-btn');
let output=document.getElementById('output');

submitButton.addEventListener('click',onClickHandler);

function onClickHandler()
{
    let initialP=parseInt(initialPrice.value);
    let quantity=parseInt(quantityStocks.value);
    let currentP=parseInt(currentPrice.value);
    calculateProfitOrLoss(initialP,quantity,currentP);
}


function calculateProfitOrLoss(initialP,quantity,currentP)
{
    let profitLoss=0,PercentageProfitLoss=0;
    
        if(currentP >initialP)
        {
            //profit
            profitLoss=(currentP-initialP)*quantity;
            PercentageProfitLoss=((currentP-initialP)/initialP)*100;;
            document.getElementById('output').style.color="lawngreen";
            displayMessage(`Hey! you just earned a profit of ${profitLoss} with ${PercentageProfitLoss}%`);
          

        }
        else if(initialP >currentP)
        {
            //loss
            profitLoss=(currentP-initialP)*quantity;
           PercentageProfitLoss=((currentP-initialP)/initialP)*100;
            document.getElementById('output').style.color="rgb(255, 117, 26)";
            displayMessage(`Hey! you have to bear loss of ${profitLoss} with ${PercentageProfitLoss}%`);
            

        }
        else{
            //neither profit nor loss 
            document.getElementById('output').style.color="Aqua";
            displayMessage("If you can't see something moving, doesn't mean its not going somewhere!");
        }

}

function displayMessage(message)
{
    output.innerHTML=message;
}