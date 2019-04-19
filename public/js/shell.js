$(function () {
    var arr = []
    var key = '9ae292a07736e6dd00ba3050ca3d9712';
    $.ajax({
        url: '/shell',
        type: 'get',
        success: (data) => { 
           console.log(data)
           arr= data
        }
    })
    function showData(result) {
        var data = JSON.stringify(result); //json对象转成字符串
        console.log(data)
        $("div").html(data)
    }
    $(document).ready(function () {
        $("head").append(
            "<script src='https://restapi.amap.com/v3/place/text?keywords=东姚家山&city=荣成&output=json&offset=20&key=9ae292a07736e6dd00ba3050ca3d9712&extensions=all&callback=showData'>< \/script>"
        );
    })
})