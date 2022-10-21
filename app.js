var initialPrice = document.querySelector("#initial-price")
var stockQuantity = document.querySelector("#stocks-quantity")
var currentPrice = document.querySelector("#current-price")
var sumbitBtn = document.querySelector("#sumbit-btn")
var outputEl = document.querySelector("#output")

// sumbitBtn.addEventListener("Click" , sumbitHandler)

function sumbitHandler() {
var ip = Number(initialPrice.value)
var qty = Number(stockQuantity.value)
var crr = Number(currentPrice.value)
calculateProfitAndLoss(ip , qty, crr)
} 


function calculateProfitAndLoss(initial,quantity,current) {
    if(initial < 0 || current < 0 || quantity < 0 ) {
        showOutput("Please enter positive numerical values only");
           outputEl.style.display="block";
           outputEl.style.color="red"

    } else if (initial === 0 || current === 0 || quantity === 0) {
            showOutput("Please enter non-zero numerical values only");
            outputEl.style.display="block";
            outputEl.style.color="red"

    } else if (current>initial) {
       var profit = (current-initial) * quantity
       var profitPercentage = (profit/(initial * quantity)) * 100 
    showOutput(`Hey the profit is ${profit} and the percent is ${profitPercentage.toFixed(2)}%`)
       outputEl.style.display="block";
       outputEl.style.color="green"

    } else if (initial>current) {
        var loss = (initial-current) * quantity
        var lossPercentage = (loss/(initial * quantity)) * 100
        showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage.toFixed(2)}%`)
        outputEl.style.display="block";
        outputEl.style.color="red"
    
    
    } else {
        showOutput(`No pain No gain`)
    }
    
}

 function showOutput(message) {
    outputEl.innerHTML = message
 }



 





