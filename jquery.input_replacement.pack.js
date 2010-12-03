/* =============================================================================

    @name           jQuery Input Replacement
    @description    A input text replacement that appends text to input fields 
                    and removes it on focus. Respects prepopulated fields.
    @author         Dana Woodman <dana@danawoodman.com>
    @version        1.0
    @license:       MIT

============================================================================= */

// Packed with http://javascriptcompressor.com/ (with "Shrink variables" option)

*/
(function($){$.fn.input_replacement=function(c){var d=$.extend({},$.fn.input_replacement.defaults,c);return $(this).each(function(){var a=$(this);a.o=$.meta?$.extend({},d,$this.data()):d;if(a.val()==''){a.o.field_text='';if(a.o.text){a.o.field_text=a.o.text}else{string=a.attr('name');string=string.charAt(0).toUpperCase()+string.slice(1);a.o.field_text=string};a.val(a.o.field_text);if(a.o.prefocus_class){a.addClass(a.o.prefocus_class)};a.bind('focus',function(){if(a.val()==a.o.field_text){a.val('')};if(a.o.prefocus_class){a.removeClass(a.o.prefocus_class)}});a.bind('blur',function(){if(a.val()==''){a.val(a.o.field_text);if(a.o.prefocus_class){a.addClass(a.o.prefocus_class)}}});$(window).unload(function(){if(a.val()==a.o.field_text){a.val('')}});var b=a.parents('form');if(b){b.each(function(){$(b).bind('submit',function(){if(a.val()==a.o.field_text){a.val()=''}})})}}})};$.fn.input_replacement.defaults={text:'',prefocus_class:''}})(jQuery);