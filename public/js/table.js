$("#totalTable").hide()
var Table =  function(){
    launch: launch()


function launch()
{
   
   $("#printtable tr").remove()
   var v1=$("#tableNumber").val()
   console.log(v1)
   var v2=$("#endnumber").val()
   console.log(v2)
    getTable(v1,v2)
}

function getTable(number1,tillValue)
{
    var printTable = ""
    // if (typeof number1 !== 'number' || typeof tillValue !== 'number') {
    //     throw Error('The given argument is not a number')
    // }
    if(number1>0 && number1<=100)
    {
        if(tillValue>=0 && tillValue<=20)
        {
        for(var i=0;i<=tillValue;i++)
        {
        printTable+="<tr><td>"+number1+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+number1*i+"</td></tr>"
        console.log(printTable)
         return 1
        }
        }
        else
        {
         alert("You need to enter the table value from 0 to 20 only")
         return 0
        }
    }
    else
    {
        alert("The numbers should be between 0 to 101")
        return 0
    }

    $("#printtable").append(printTable)
    $("#totalTable").show()
}
}();