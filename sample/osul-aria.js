var OSUL = {};

OSUL.aria = {
    '#navigation > ul':{
        attributes:{
            role:'menubar'
        },
        events:{

        }
    },
    '#navigation > ul > li':{
        attributes:{
            role:'presentation'
        },
        events:{
            keydown:function (event) {
                switch (event.keyCode) {
                    case $.ui.keyCode.LEFT:
                    $(this).prev('li').find('>a').focus();
                    event.preventDefault();
                    break;
                    case $.ui.keyCode.RIGHT:
                    $(this).next('li').find('>a').focus();
                    event.preventDefault();
                    break;
                    case $.ui.keyCode.DOWN:
                    $(this).find('ul > li:first > a').focus();
                    $(this).find('ul').attr('aria-expanded',true);
                    event.preventDefault();
                    break;
                }
                ;
            }
        }
    },
    '#navigation > ul > li > a': {
        attributes: {
            'aria-haspopup': true
        }
    },
    '#navigation ul.sub > li > a':{
        attributes:{
            role:'menuitem',
            tabindex: -1
        }
    },
    '#navigation > ul > li:first > a':{
        attributes:{
            role:'menuitem',
            tabindex: 0
        }
    },
    '#navigation ul.sub > li': {
        attributes: {
            role:'presentation'

        },
        events:{
            keydown:function (event) {
                switch (event.keyCode) {
                    case $.ui.keyCode.LEFT:
                    $(this).prev('li').find('>a').focus();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                    case $.ui.keyCode.RIGHT:
                    $(this).next('li').find('>a').focus();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                    case $.ui.keyCode.DOWN:
                    $(this).next('li').find('>a').focus();
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                    case $.ui.keyCode.UP:
                    if($(this).prev('li').length < 1){
                        $(this).parent('ul.sub').attr('aria-expanded',false);
                        $(this).parents('li').find('>a').focus();
                    }
                    else{
                        $(this).prev('li').find('>a').focus();
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                }
                ;
            }
        }
    }

}

$(document).ready(function () {
    $(document).unobtrusiveAria(OSUL.aria);
});