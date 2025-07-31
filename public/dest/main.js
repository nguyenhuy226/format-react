// xử lý tạo background cho header khi scroll
$(document).ready(function () {
    let panel = $('.info__item')
    $(document).on('click', '.info__nav li', function () {
        $('.info__nav li').removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        let itemPanel = panel.eq(index);
        panel.removeClass('active');
        itemPanel.addClass('active');
    })

    // xử lý infor product detail
    $('.toggle-password').on('click', function () {
        $(this).toggleClass('active');
        let input = $(this).parent().find('input');
        let type = input.attr('type') === 'password' ? 'text' : 'password';
        input.attr('type', type);
    })

    // xử lý sao chép địa chỉ
    $('.endow__coppy').on('click', function () {
        const textToCopy = $(this).siblings('.endow__name').text();
        // Sử dụng Clipboard API để sao chép
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Đã sao chép: ' + textToCopy);
            })
            .catch(err => {
                console.error('Không thể sao chép: ', err);
            });
    });

    // xử lý filter mở panel
    $(document).on('click', '.accordion__item-title', function () {
        $(this).next().slideToggle(200);
        $(this).parent().toggleClass('active');
    }) 

})
