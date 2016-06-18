$(function () {

  'use strict';

  $.get('/list', function (data) {
    var myList = [];
    if (data && Array.isArray(data)) {
      data.forEach(function (item) {
        myList.push('<li> <span class="delete_link" data-list="' + item._id + '">X</span><a href="/list/' + item._id + '">' + item.item + '</a></li>'); // second item._id was country.country
      });
      $('.toDoListView').append(myList);
    }
  });

  $('form').on('submit', function (evt) {
    evt.preventDefault();
    var $form = $(this);

    // serialize will transform our form data into urlencoded notation
    var listData = $form.serialize();

    $.ajax({
      method: 'POST',
      url: '/list',
      data: listData
    })
    .done(function (data) {
      var item = '<li><span class="move_link" data-list="' + data._id + '">X</span><a href="/list/' + data._id + '">' + data.item + '</a></li>';

      $('.toDoListView').append(item);
      $form.trigger('reset');
    });
  });

  $('.toDoListView').on('click', '[data-list]', function (evt) {
    if (!confirm('Did you really complete the item or are you just being lazy!?')) {
      return false;
    }
    var $target = $(evt.currentTarget);

    $.ajax({
      method: 'DELETE',
      url: '/list/' + $target.data('list')
    })
    .done(function () {
      $target.closest('li').remove();
    });
  });

});
