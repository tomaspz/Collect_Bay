$(document).ready(function () {

    $("#search-ebay").on("click", function () {
        let searchTerm = $("#search-term").val();
        location.replace(`/ebay/${searchTerm}`);
    });

    $(".add-to-collection").on("click", function () {
        const newCollection = {
            title: $(this).data("title"),
            category: $(this).data("category"),
            location: $(this).data("location"),
            price: $(this).data("price"),
            condition: $(this).data("condition"),
            url: $(this).data("image-url")
        };
        $.post("api/ebay", newCollection).done(res => {
            console.log(res);
        })
    })
});