$(function () {
    $('.btn').on('click', function () {

        let email = $('#email').val()
        console.log(email)
        if (!/\w+[@]\w+[.]\w+/.test(email)) {
            $('.tips>span').text('请输入正确的邮箱')
            $('.tips').fadeIn(200).delay(3000).fadeOut(200)
            return
        }

        let pass = $('#password').val().trim()
        if (pass.length < 6 || pass.length > 16) {
            $('.tips>span').text('请输入6-16位密码')
            $('.tips').fadeIn(200).delay(3000).fadeOut(200)
            return
        }

        $.ajax({
            type: 'post',
            url: '/login',
            data: $('form').serialize(),
            datatype: 'json',
            success: function (res) {
                if (res.code == 400) {
                    $('.tips>span').text(res.msg)
                    $('.tips').fadeIn(200).delay(3000).fadeOut(200)
                } else {
                    location.href = '/admin/index'
                }

            }
        })

    })


})