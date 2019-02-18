$.ajax({
    type: 'get',
    url: '//contentful.webapi.ziroom.com/web-api/v1/time/index.json',
    xhrFields:{withCredentials:true},
    dataType: 'json',
    success: function (result) {

        $('#copyYear').html(result.data.year);


    }
});