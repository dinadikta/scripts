function resetSelectForm() {
            document.getElementById("selectForm").reset();
            jQuery('.pto').removeClass('a1').removeClass('c1').removeClass('k1').removeClass('e1');
        }
        jQuery(function($) {
            if ($("#colormenu").length > 0) {
                $("#colormenu").css('width', $("#colormenu").width() + 10).css('height', '30px');
                var mcolpos = $("#colormenu").position().top;
                var mcolposlef = $("#colormenu").position().left;
                $(window).load(function() {
                    if ($(this).scrollTop() >= mcolpos) {
                        $("#colormenu").addClass('fixed').css({
                            'left': mcolposlef
                        });
                    } else {
                        $("#colormenu").removeClass('fixed').css({
                            'left': 'unset'
                        });
                    }
                });
                $(window).scroll(function() {
                    if ($(this).scrollTop() >= mcolpos) {
                        $("#colormenu").addClass('fixed').css({
                            'left': mcolposlef
                        });
                    } else {
                        $("#colormenu").removeClass('fixed').css({
                            'left': 'unset'
                        });
                    }
                });
            }
            $('#ekorc').keyup(function() {
                $('.pto:nth-last-child(5n+2)').each(function() {
                    if ($.trim($('#ekorc').val()).length) {
                        var r = $(this).text();
                        var t = $("#ekorc").val();
                        if (r == t) {
                            $(this).addClass("e1");
                        }
                    }
                });
            });
            $('#kepalac').keyup(function() {
                $('.pto:nth-last-child(5n+3)').each(function() {
                    if ($.trim($('#kepalac').val()).length) {
                        var r = $(this).text();
                        var t = $("#kepalac").val();
                        if (r == t) {
                            $(this).addClass("k1");
                        }
                    }

                });
            });
            $('#kopc').keyup(function() {
                $('.pto:nth-last-child(5n+4)').each(function() {
                    if ($.trim($('#kopc').val()).length) {
                        var r = $(this).text();
                        var t = $("#kopc").val();
                        if (r == t) {
                            $(this).addClass("c1");
                        }
                    }
                });
            });
            $('#asc').keyup(function() {
                $('.pto:nth-last-child(5n+5)').each(function() {
                    if ($.trim($('#asc').val()).length) {
                        var r = $(this).text();
                        var t = $("#asc").val();
                        if (r == t) {
                            $(this).addClass("a1");
                        }
                    }
                });
            });
        });
