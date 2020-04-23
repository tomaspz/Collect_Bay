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
        ebayurl: $(this).data("ebayurl"),
        image: $(this).data("image")
    };
    $.post("/api/ebaycollections/:itemid", newCollection).then(res => {
        // console.log(res);
        $('#add-modal').modal({
            onApprove: function () {
                $(this).empty();
                location.replace(`/ebay/${searchTerm}`);
            }
        }).modal('show');
        // const item = $(this).data("id");
        // if (success) {
        //     $(".message .close").removeAttr("class", "hidden");
        //     $(".message .close").attr("class", "visible");
        //     $(".message .close").on("click", function () {
        //         $(this).closest(".message").transition("fade");
        //     });
        //     $(this).empty();
        //     location.replace(`/ebay/${searchTerm}`);
        // }
    }).catch((err) => {
        if (err) throw err;
        console.log("There was an error in POST /api/ebaycollections")
    })
})

$(".delete-collection").on("click", function (event) {
    event.preventDefault();

    const deleteId = $(this).data("id");
    $('#want-to-delete').modal({
        onApprove: function (userResponse) {
            if (userResponse[0].dataset.value === "yes") {
                $.ajax({
                    url: `/api/ebaycollections/${deleteId}`,
                    method: "DELETE"
                }).done(res => {
                    console.log(res);
                    location.reload();
                });
            }
        }
    }).modal('show');
}); // end on click delete
});