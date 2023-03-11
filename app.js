function GetPrint() {
    window.print();


}

function BtnAdd() {
    var v = $("#TRow").clone().appendTo("#TBody");
    $(v).find('input').val('');
    $(v).removeClass('d-none');

}

function BtnDel(v) {

    $(v).parent().parent().remove();
    GetTotal()


}

function Calc(v) {

    var index = $(v).parent().parent().index();
    var qty = document.getElementsByName("qty")[index].value; /*gEByName target collection of nodes(array like) by index number*/


    var rate = document.getElementsByName("rate")[index].value;



    var amt = qty * rate;

    document.getElementsByName("amt")[index].value = amt;
    GetTotal();
}

function GetTotal() {
    var sum = 0;

    var amts = document.getElementsByName("amt"); /*work like a array*/

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    document.getElementById("Ftotal").value = sum;

    var tax = document.getElementById("Ftax").value;
    var taxRate = (sum * tax) / 100;

    var net = +(sum) + +(taxRate);
    document.getElementById("Fnet").value = net;



}