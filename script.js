$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var searchText = $(this).val().toLowerCase();

        $("#representativesList .card").each(function () {
            var representativeName = $(this).parent().data("name").toLowerCase();
            var representativeCompany = $(this).parent().data("company").toLowerCase();
            var representativeLocation = $(this).parent().data("location").toLowerCase();
            var representativeEmail = $(this).parent().data("email").toLowerCase();
            var representativeWebsite = $(this).parent().data("website").toLowerCase();
            var representativePhone = $(this).parent().data("phone").toLowerCase();

            var match = representativeName.includes(searchText) || representativeCompany.includes(searchText) || representativeLocation.includes(searchText) || representativeEmail.includes(searchText) || representativeWebsite.includes(searchText) || representativePhone.includes(searchText);
            $(this).parent().toggle(match);
        });
    });
});
