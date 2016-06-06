$(function () {

  'use strict';

  var foodTypes = [];

  $.get('/trucks', function (truckList) {
    var list = [];
    if (truckList) {
      truckList.forEach(function (truck) {
        list.push('<li><li><span class="delete_link" data-truck="' + truck._id + '">X</span><a href="/trucks/' + truck._id + '">' + truck.name + '</a></li>');
      });
      $('.trucks-list').append(list);
    }
  });

  $('form').on('submit', function (e) {

    e.preventDefault();
    var $form = $(this);
    var truckData = {
      name: $('[name=name]').val(),
      wood: $('[name=wood]').val(),
      foam: $('[name=foam]').val(),
      mdf: $('[name=mdf]').val(),
      apoxCoat: $('[name=apoxCoat]').val(),
      paint: $('[name=paint]').val(),
      manHours: $('[name=manHours]').val(),
      duration: $('[name=duration]').val()
    };

    $.ajax({
      method: 'POST',
      url: '/trucks',
      data: truckData
    })
    .done(function (truck) {
      var list = [];
      list.push('<li><span class="delete_link" data-truck="' + truck._id + '">X</span><a href="/trucks/' + truck._id + '">' + truck.name + '</a></li>');
      $('.trucks-list').append(list);
      $form.trigger('reset');
      var woodCost = truckData.wood * 0.25;
      console.log("$" + woodCost + " wood");
      var foamCost = truckData.foam * 3.2;
      console.log("$" + foamCost + " foam");
      var mdfCost = truckData.mdf * 7;
      console.log("$" + mdfCost + " mdf");
      var apoxCoatCost = truckData.apoxCoat * 0.53;
      console.log("$" + apoxCoatCost + " apox coat");
      var paintCost = truckData.paint * 4.56;
      console.log("$" + paintCost + " paint");
      var materialCost = woodCost + foamCost + mdfCost + apoxCoatCost + paintCost;
      console.log("$" + materialCost + " materials");
      var manHoursCost = truckData.manHours * 10;
      console.log("$" + manHoursCost + " labor");
      var totalCost = materialCost + manHoursCost;
      console.log("$" + totalCost + " total");
    });
  });

  function getWood() {
    var types;

    $('[name=wood]').each(function () {
      if (this.checked) {
        types.push(this.value);
      }
    });

    return types;
  }

  function getFoam() {
    var schedule;

    $('[name=foam]').each(function () {
      if (this.checked) {
        schedule.push(this.value);
      }
    });

    return schedule;
  }

  function addFoodType(type) {

    foodTypes.push(type);
    $('.foodType-list').append('<li>' + type + '</li>');
    $('[name=type]').val('');
  }

  $('[name=type').on('keypress', function (e) {
    if (e.which === 13) {
      e.preventDefault();
      addFoodType($(this).val());
    }
  });

  $('#addFoodType').on('click', function (e) {
    var foodType = $('[name=type]').val();

    addFoodType(foodType);
  });

  $('#clearFoodTypes').on('click', function (e) {
    $('.foodType-list').empty();
  });

  $('.trucks-list').on('click', '[data-truck]', function (e) {
    if (!confirm('Remove food truck?')) {
      return false;
    }
    var $target = $(e.currentTarget);

    $.ajax({
      method: 'DELETE',
      url: '/trucks/' + $target.data('truck'),
    })
    .done(function () {
      $target.closest('li').remove();
    });
  });
});