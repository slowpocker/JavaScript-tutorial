'use strict';

$(() => {
    const $input = $('input');
    $('input').focus();

    $('button').click(() =>{
        // $('p')
        //     .text('おはよう！')
        //     .addClass('red-text');

        // $('li')
        //     .eq(2)
        //     .addClass('red-text');

        // $('li:nth-child(odd), li:last-child')
        // //奇数番目（odd）と最後の要素を変更する
        //     .addClass('red-text');

        $('<li>')
            .text($('$input').val())
            .appendTo('ul');
        $('$input')
            .val('')
            .focus();
    });

    $('ul').click(e => {
        if(e.target.nodeName !== 'LI' || !confirm('Are you sure?')) {
            return;
        }
        $(e.target).fadeOut();
    });
});