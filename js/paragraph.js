//=================================================================================//
//                                search-part start
//=================================================================================//

var $ = jQuery;
$(function () {
    var availableTags = [{
            value: "Tree Plantation",
            link: 'https://shaifulkingdom.github.io/acg/paragraph/tree-plantation.html'
        },

    ];
    $("#tags").autocomplete({
        source: availableTags,
        select: function (event, ui) {
            console.log(ui.item.link);
            window.location = ui.item.link;
        }
    });
});

//=================================================================================//
//                                search-part end
//=================================================================================//