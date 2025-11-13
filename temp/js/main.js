$(document).ready(function () {
    console.log("✅ DOM sẵn sàng - jQuery đang hoạt động!");

    $("#filterControls li").on("click", function () {
        $("#filterControls li").removeClass("active");
        $(this).addClass("active");

        const filter = $(this).data("filter");
        if (filter === "*") {
            $(".mix").fadeIn();
        } else {
            $(".mix").hide();
            $(filter).fadeIn();
        }
    });

    $("#searchBtn").on("click", function () {
        const keyword = $("#searchInput").val().toLowerCase();
        if (keyword.trim() === "") {
            alert("Vui lòng nhập từ khóa tìm kiếm!");
            return;
        }
        alert("Tìm kiếm: " + keyword);
    });

    $("#subscribeBtn").on("click", function () {
        const email = $("#subscribeEmail").val();
        if (!email.includes("@") || !email.includes(".")) {
            alert("Vui lòng nhập địa chỉ email hợp lệ!");
            return;
        }
        alert("Đăng ký nhận tin thành công: " + email);
    });

    $(".fav-btn").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        alert("Đã thêm sản phẩm vào danh sách yêu thích!");
    });
});
