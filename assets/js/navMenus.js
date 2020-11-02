$(function () {
    //渲染菜单页面
    function init() {
        $.ajax({
            type: 'get',
            url: '/menusLoad',
            datatype: 'json',
            success: function (res) {
                console.log(res)
                $('tbody').html(template('menusTemp', res))
            }
        })
    }

    init()

    //点击添加按钮新增导航
    $(".btnAdd").on('click', function () {
        $.ajax({
            type: 'post',
            url: '/menusAdd',
            data: $('form').serialize(),
            datatype: 'json',
            success: function (res) {
                // console.log(res)
                $('.alert-danger > span').text(res.msg)
                $('.alert-danger').fadeIn(200).delay(3000).fadeOut(200)
                init()
            }

        })
    })

    //点击删除按钮删除菜单
    $('body').on('click', '.btnDel', function () {
        $.ajax({
            type: 'get',
            url: '/menusDel',
            datatype: 'json',
            success: function (res) {

            }
        })
    })

})