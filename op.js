function inserer(num)
{

    document.form.textview.value=document.form.textview.value+num;
}
function oper()
{
    var exp=document.form.textview.value;
    if(exp)
    document.form.textview.value=eval(exp)
}
function c()
{

    document.form.textview.value=""
}
function supp()
{
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1)
    
}