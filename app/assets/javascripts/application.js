// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {

  // Example - Highlight grid

  if ($('.js-highlight-grid').length>0) {

    $('.js-highlight-grid').click(function(e) {

      e.preventDefault();
      var html = $('html');

      if ($('.is-inner-block-highlight').length>0) {
        // Don't add more than once
      } else {
        $('.grid .inner-block').wrapInner('<div class="is-inner-block-highlight"></div>');
      }

      if (html.hasClass('example-highlight-grid')) {
          html.removeClass('example-highlight-grid');
      } else {
          html.addClass('example-highlight-grid');
      }

    });

  }

  // Example - Form focus styles

  if ($('.form').length>0) {

    $(".block-label").each(function() {

      // Add focus
      $(".block-label input").focus(function() {
        $("label[for='" + this.id + "']").addClass("add-focus");
        }).blur(function() {
        $("label").removeClass("add-focus");
      });

      // Add selected class
      $('input:checked').parent().addClass('selected');

    });

    // Add/remove selected class
    $('.block-label').find('input[type=radio], input[type=checkbox]').click(function() {

      $('input:not(:checked)').parent().removeClass('selected');
      $('input:checked').parent().addClass('selected');

      $('.toggle-content').hide();

      var target = $('input:checked').parent().attr('data-target');
      $('#'+target).show();

    });

    // For pre-checked inputs, show toggled content
    var target = $('input:checked').parent().attr('data-target');
    $('#'+target).show();

  }

  // Example - Add aria support to details
  // See /javascripts/vendor/details.polyfill.js

});
