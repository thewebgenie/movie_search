  $('#i').keyup(function () {
            if (event.keyCode == 13) {
                $('#submit').click();
            } else {
                return false
            }
        });
 $('#submit').click(function () {
            var c = $('.search-form').serialize();
            var d = 'http://www.omdbapi.com/?' + c;
            var e = $('#search-by-title-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-title-progress');
            f.show('slow');
            var g = $('#search-by-title-response');
            $.ajax({
                type: 'GET',
                dataType: 'text',
                url: '/?' + c,
                statusCode: {
                    403: function () {
                        g.find('pre').html('HTTP 403 Forbidden!')
                    }
                },
                success: function (a) {
                    g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                },
                complete: function () {
                    f.hide();
                    g.show('slow')
                }
            })
        });
       