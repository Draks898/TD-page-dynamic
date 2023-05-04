const BASE_URL = "https://api.jikan.moe/v4/anime";
let limit = 0;
let search = "";

$(() => {
    fetchApi();
});

const displayData = (data) => {
    $("main").html("");
    data.forEach((element) => {
        createElement(element);
    });
};

const createElement = (element) => {
    $("main").append(`
        <div class="api-container">
            <h3 class="api-title"><u>${element.title}<u></h3>
            <img class="api-img" src="${element.images.jpg.image_url}" />
        </div>
    `);
};

$(".reload").on("click", function (reload) {
    reload.preventDefault;
    ReloadApi();

});

$(".form-btn").on("click", function (e) {
    e.preventDefault();
    search = $("#search").val();
    limit = $("#limit").val();
    fetchApi();
});

const fetchApi = () => {
    $.ajax({
        url: BASE_URL + `?q=${search}&limit=${limit}`,
        method: "GET",
        dataType: "json",
    })
        .done(function (res) {
            const data = res.data;
            displayData(data);
        })
        .fail(function (err) {
            console.log(err.message);
        });
};
const ReloadApi = () => {
    $.ajax({
        url: BASE_URL,
        method: "GET",
        dataType: "json",
    })
        .done(function (res) {
            const data = res.data;
            displayData(data);
        })
        .fail(function (err) {
            console.log(err.message);
        });
};