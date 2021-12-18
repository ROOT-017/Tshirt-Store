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
    function main() {
        /* 
                $("#quantity").val();
                $("#style").val();
                $("#color .color-option.selected").attr("id");
                $("#quality .color-option.selected").attr("id")
         */
        function updated_search_params() {
            search_params.quantity = $("#quantity").val()
            search_params.color = $("#color .option-button.selected").attr("id")
            search_params.quality = $("#quality .option-button.selected").attr("id")
            search_params.style = $("#style").val()
            Dispalay_Data()
        };
        //updated_search_params()

        function Dispalay_Data() {
            var styleSelector = "#style option[value=" + search_params.style + "]"
            $("#result-style").html($(styleSelector).text())
            var qualityid = "#" + search_params.quality
            $("#result-quality").html($(qualityid).text())
            var colorid = "#" + search_params.color
            $("#result-color").html($(colorid).text())
            $("#result-quantity").html(search_params.quantity)
            var photoURL = "img/" + products[search_params.color][search_params.style].photo;
            $("#photo-product").attr("src", photoURL)

            $("#total-price").html(calculate_price().toFixed(2))
        }
        // Dispalay_Data()


        function calculate_price() {
            var getQuantity = search_params.quantity
            var unit_price = products[search_params.color][search_params.style].unit_price
            var total_price;

            if (search_params.quality == "q150") {
                total_price = getQuantity * unit_price
            } else if (search_params.quality == "q190") {
                var high_unit_price = unit_price + (unit_price * 0.12)
                    // 1: above 1.000 units - 20% discount
                if (getQuantity > 1000) {
                    high_unit_price = high_unit_price - (high_unit_price * 0.20)
                    total_price = high_unit_price * getQuantity
                } // 2: above 500 units - 12% discount
                else if (getQuantity > 500) {
                    high_unit_price = high_unit_price - (high_unit_price * 0.12)
                    total_price = high_unit_price * getQuantity
                }
                // 3: above 100 units - 5% discount
                else if (getQuantity > 100) {
                    high_unit_price = high_unit_price - (high_unit_price * 0.05)
                    total_price = high_unit_price * getQuantity
                }

            }
            return total_price
        }



        updated_search_params()

        /*    $("#quantity").change(function() {
               search_params.quantity = parseInt($("#quantity").val());
               Dispalay_Data();
           });

           $("#style").change(function() {
               search_params.style = $("#style").val();
               Dispalay_Data();
           }); */


        //Clicked buttons
        $(".option-button").click(function() {
            var ClickedElement = $(this).parent().attr("id");
            var chiledSelector = "#" + ClickedElement + " .option-button"
            $(chiledSelector).removeClass("selected")
            $(this).addClass("selected")
            var selectedChild = "#" + ClickedElement + " .option - button.selected";
            search_params[ClickedElement] = $(selectedChild).attr("id");
            Dispalay_Data()
        });

    }
    main()

    $(".no-js").change(function() {
        main()
    });
})