// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');

$('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'clase de css',
}).appendTo($body);

const $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});
$body.append($p2);
setTimeout(() => {
  $p2.addClass('error');
}, 1000 * 5);

// bad jQ
$('#message').text('Am schimbat dinamic acest paragraf.').removeClass('error');

$('<span>', {
  id: 'password',
  text: 'ParolaMea',
}).appendTo($p2);

$('#myParagraph, #message').wrapAll(
  $('<div>', {
    class: 'container',
  }),
);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

const $nav = $('<nav>', {
  class: 'navigation',
});
$('.container')
  .after($nav)
  .before(
    $('<h1>', {
      text: 'Invat JQuery',
    }),
  );

$('<h2>', {
  text: 'Navigatie',
}).prependTo($nav);

$nav.append(
  $(`
<a href="/">
<sup>1</sup>
Primul Link
</a>
`),
);

$('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
})
  .append(
    $('<a>', {
      text: 'aici',
      href: 'https://pixellab.ro',
      target: '_blank',
    }),
  )
  .append(
    $('<span>', {
      text: '.',
    }),
  )
  .appendTo($(document.body));
