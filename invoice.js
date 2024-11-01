document.addEventListener('DOMContentLoaded', function() {

    // add initital total calculation first 
        //here
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];

    // This function updates the total amount in each row ( item price * Qte )
    function updateInvoiceTotal()
    {
        const a1quantity = document.getElementById('a1quantitie').value;
        const a1price = document.getElementById('a1price').value;
        let result1 = a1price * a1quantity;

        const a2quantity = document.getElementById('a2quantitie').value;
        const a2price = document.getElementById('a2price').value;
        let result2 = a2price * a2quantity;

        const a3quantity = document.getElementById('a3quantitie').value;
        const a3price = document.getElementById('a3price').value;
        let result3 = a3price * a3quantity;

        document.getElementById('td1').innerHTML = result1;
        document.getElementById('td2').innerHTML = result2;
        document.getElementById('td3').innerHTML = result3;
    }
    
        number.addEventListener.innerHTML("input", updateInvoiceTotal());
    


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
        input.addEventListener("input", updateInvoiceTotal);
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
