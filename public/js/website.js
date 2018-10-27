$(document).ready(function(){
    let totalPrice=0
$("#vegetables").hide()
$("#fruits").hide()
$("#CartDetails").hide()
$("#total").hide()

$("#Category").click(function(){
    console.log("inside Js Page")
    $("#vegetables").hide()
    $("#fruits").hide()
    $("#CartDetails").hide()
    $("#total").hide()
    let value = $("#Category").val()
    console.log(value)
    if(value=="Vegetables")
    {
        $("#vegetables").show()
        $("#fruits").hide()
        $("#CartDetails").show()
        $("#total").show()
    }
    if(value=="Fruits")
    {
        $("#vegetables").hide()
        $("#fruits").show() 
        $("#CartDetails").show()
        $("#total").show()
    }

});

$("#tomato").click(function(){
let cartdetails=""
let value1=$("#tomato").val()
console.log(value1)
if(value1=="ADD TO CART")
{
    $(this).val("REMOVE");
    let tp =$("#id1 span").text()
    let tomatoprice=tp.substring(tp.indexOf(":")+1,tp.indexOf("$"))
    let noofitems=$("#noOfItems1").children("input").val()
    let itemType="Tomato"
    calculateCart(tomatoprice,noofitems,itemType)
} 
if(value1=="REMOVE")
{
    $(this).val("ADD TO CART")
    $("#cartTable tr").remove()
    $("#CartDetails").hide()
    $("#total").hide()
    totalPrice=0
    //$("#total").html(totalPrice)
}
})

$("#capsicum").click(function(){
    let value1=$("#capsicum").val()
    console.log(value1)
    if(value1=="ADD TO CART")
    {
        $(this).val("REMOVE");
    let tp =$("#id2 span").text()
    let capsicumprice=tp.substring(tp.indexOf(":")+1,tp.indexOf("$"))
    let noofitems=$("#noOfItems2").children("input").val()
    let itemType="Capsicum"
    calculateCart(capsicumprice,noofitems,itemType)
    }
    if(value1=="REMOVE")
    {
        $(this).val("ADD TO CART")
        $("#cartTable tr").remove()
        $("#CartDetails").hide()
        $("#total").hide()
        totalPrice=0
        //$("#total").html(totalPrice)
    }
    })
   
$("#cucumber").click(function(){
        let value1=$("#cucumber").val()
        console.log(value1)
        if(value1=="ADD TO CART")
        {
            $(this).val("REMOVE");
    let tp =$("#id3 span").text()
    let cucumberprice=tp.substring(tp.indexOf(":")+1,tp.indexOf("$"))
    let noofitems=$("#noOfItems3").children("input").val()
    let itemType="Cucumber"
    calculateCart(cucumberprice,noofitems,itemType)
        }
        if(value1=="REMOVE")
        {
            $(this).val("ADD TO CART")
            $("#cartTable tr").remove()
            $("#CartDetails").hide()
            $("#total").hide()
            totalPrice=0
            //$("#total").html(totalPrice)
        }
        })
$("#mango").click(function(){
            let value1=$("#mango").val()
            console.log(value1)
            if(value1=="ADD TO CART")
            {
                $(this).val("REMOVE");
                let tp =$("#id4 span").text()
    let mangoprice=tp.substring(tp.indexOf(":")+1,tp.indexOf("$"))
    let noofitems=$("#noOfItems4").children("input").val()
    let itemType="Mango"
    calculateCart(mangoprice,noofitems,itemType)
            }
            if(value1=="REMOVE")
            {
                $(this).val("ADD TO CART")
                $("#cartTable tr").remove()
                $("#CartDetails").hide()
                $("#total").hide()
                totalPrice=0
                //$("#total").html(totalPrice)
            }
            })

$("#apple").click(function(){
                let value1=$("#apple").val()
                console.log(value1)
                if(value1=="ADD TO CART")
                {
                    $(this).val("REMOVE");
                    let tp =$("#id5 span").text()
                    let appleprice=tp.substring(tp.indexOf(":")+1,tp.indexOf("$"))
                    let noofitems=$("#noOfItems5").children("input").val()
                    let itemType="Apple"
                    calculateCart(appleprice,noofitems,itemType)
                }
                if(value1=="REMOVE")
                {
                    $(this).val("ADD TO CART")
                    $("#cartTable tr").remove()
                    $("#CartDetails").hide()
                    $("#total").hide()
                    totalPrice=0
                    //$("#total").html(totalPrice)
                }
                })

function calculateCart(price,noitems,itemtype)
{

    let cartdetails = ""
    totalPrice+=price*noitems
    cartdetails+="<tr><td>ITEM:</td><td>"+itemtype+"</td><td>,</td><td>Price=</td><td>"+price+"</td><td>,TotalItems=</td><td>"+noitems+"</td><td>,Total Price=</td><td>"+price*noitems+"</td></tr>"
    $("#cartTable").append(cartdetails)
    $("#total").html("Total Price is:"+totalPrice)
    $("#CartDetails").show()
    $("#total").show()
}

});