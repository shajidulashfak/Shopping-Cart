
   document.getElementById("iphoneIncrease").addEventListener('click', function() {
    const iphoneInput = document.getElementById("iphoneCount");
    const iPhones = parseInt(iphoneInput.value);
    const iphoneNewCount = iPhones + 1;
    iphoneInput.value = iphoneNewCount;
    const iphoneTotal = iphoneNewCount * 1219;
    document.getElementById("iphonePrice").innerText = "$" + iphoneTotal;
   });
   
   document.getElementById("iphoneDecrease").addEventListener('click', function() {
       const iphoneInput = document.getElementById("iphoneCount");
       const iPhones = parseInt(iphoneInput.value);
       const iphoneNewCount = iPhones - 1;
       iphoneInput.value = iphoneNewCount;
       const iphoneTotal = iphoneNewCount * 1219;
       document.getElementById("iphonePrice").innerText = "$" + iphoneTotal;
   })
   
   
   
   //For Increase Value.
document.getElementById("caseIncrease").addEventListener('click', function(){
    const caseInput = document.getElementById("caseCount");
    const iphoneCase = parseInt(caseInput.value);
    const caseNewCount = iphoneCase + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("casePrice").innerText = "$" + caseTotal;
});

//For decrease Value.
document.getElementById("caseDecrease").addEventListener('click', function(){
    const caseInput = document.getElementById("caseCount");
    const iphoneCase = parseInt(caseInput.value);
    const caseNewCount = iphoneCase - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("casePrice").innerText = "$" + caseTotal;
});
