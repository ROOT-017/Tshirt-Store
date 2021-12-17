var products = {
    'white': {

        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg'
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg'
        }
    },

    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg'
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png'
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
// 1: above 1.000 units - 20% discount
// 2: above 500 units - 12% discount
// 3: above 100 units - 5% discount


// Solution:

$(function() {
    $("#quantity").val();
    $("#style").val();
    $("#color .color-option.selected").attr("id");
    $("#quality .color-option.selected").attr("id")

    function updated_search_params() {
        search_params.quantity = $("#quantity").val()
        search_params.color = $("#color .option-button.selected").attr("id")
        search_params.quality = $("#quality .option-button.selected").attr("id")
        search_params.style = $("#style").val()
        console.log(search_params)
    };
    updated_search_params()

    function Dispalay_Data() {
        $("#result-style").html(search_params.style),
            $("#result-quality").html(search_params.quality),
            $("#result-color").html(search_params.color),
            $("#result-quantity").html(search_params.quantity)
    }
    Dispalay_Data()
});




















/*
$("#colored").click(function() {
        console.log("2Clicked") 
$("#photo-product").prop('src', products.colored.printed.photo);

$("#style").change(function() {
var style = $("#style").val()
if (style == "printed") {
    $("#photo-product").prop('src', products.colored.printed.photo);
} else if (style == "plain") {
    $("#photo-product").prop('src', products.colored.plain.photo);
}
});

})
/* ================================================================================== */
/* var quantity = $("#quantity").val()
var qualityFibric = $("#q150").val()
var color = $("#white").val()
var t_style = products.colored.plain */
/* $("#result-style") = t_style */

/* $("#result-style").parent("span") = "gdfd" */


/* 
       $("#photo-product").prop('src', products.white.printed.photo);

       $("#white").click(function() {
           /* console.log("Clicked") 
   $("#photo-product").prop('src', products.white.printed.photo);

   $("#style").change(function() {
       var style = $("#style").val()
       if (style == "printed") {
           $("#photo-product").prop('src', products.white.printed.photo);
       } else if (style == "plain") {
           $("#photo-product").prop('src', products.white.plain.photo);
       }
   });*/