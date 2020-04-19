$(document).ready(function () {

    $("#search-ebay").on("click", function () {
        let searchTerm = $("#search-term").val();
        location.replace(`/ebay/${searchTerm}`);
    });

    $(".add-to-collection").on("click", function (event) {
        event.preventDefault();
        const newCollection = {
            itemid: $(this).data("itemid"),
            title: $(this).data("title"),
            category: $(this).data("category"),
            location: $(this).data("location"),
            price: $(this).data("price"),
            condition: $(this).data("condition"),
            url: $(this).data("url")
        };
        $.post("/api/ebaycollections", newCollection).then(res => {
            console.log("This is the response: " + res);
        }).catch((err)=>{
            if(err) throw err;
            console.log("There was an error in POST /api/ebaycollections")
        })
    })
});