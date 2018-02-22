$(document).ready(function(){
    function render_template() {
        var is_checked_showwhitespaces = $('input[name="showws"]').is(':checked') ? 1:0;
        $.post('/render_template', {
            template: $('#template').val(),
            values: $('#values').val(),
            showwhitespaces: is_checked_showwhitespaces
        }).done(function(response) {
            if (is_checked_showwhitespaces) {
                response = response.replace(/ /g, String.fromCharCode(parseInt(387, 16)));
            }
            $('#render').val(response);
        });
    }

    $('#clear').click(function() {
        $('#template').val('Dear {{ name }},\n\n{% if not asleep %}\n  Once upon a time ...\n{% endif %}');
        $('#values').val('name: Jane\nasleep: false');
        render_template();
    });

    $('#convert').click(function() {
        render_template();
    });

    $('#template').on('change keyup paste', function() {
        render_template();
    });

    $('#values').on('change keyup paste', function() {
        render_template();
    });

    $('#showws').on('change', function() {
        render_template();
    });

    $('#clear').trigger('click');
});
