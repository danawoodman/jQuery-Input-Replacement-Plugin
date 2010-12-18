/* =============================================================================

    @name           jQuery Input Replacement
    @description    A input text replacement that appends text to input fields 
                    and removes it on focus. Respects prepopulated fields.
    @author         Dana Woodman <dana@danawoodman.com>
    @version        1.0
    @license:       MIT

============================================================================= */

(function($) {
    
    $.fn.input_replacement = function(options) {
        
        // Compile default options and user specified options.
        var opts = $.extend({}, $.fn.input_replacement.defaults, options);
        
        return $(this).each(function() {
            
            var obj = $(this);
            
            // Build element specific options.
            obj.o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            
            // If field is empty, append text, classes, etc...
            if (obj.val() == '') {
                
                // Define the field text to use in the 
                obj.o.field_text = '';
                
                // If the "text" option has been set, then apply it to the form 
                // field.
                if (obj.o.text) {
                    
                    obj.o.field_text = obj.o.text;
                    
                } 
                
                // If the "text" option was not set in the options, then take 
                // the "name" property of the field, capitilize it, and use it 
                // instead.
                else {
                    
                    // Get the name attribute of the field and capitalize the 
                    // first letter.
                    string = obj.attr('name');
                    string = string.charAt(0).toUpperCase() + string.slice(1);
                    
                    obj.o.field_text = string;
                };
                
                // Set the value of the field.
                obj.val(obj.o.field_text);
                
                // Append the prefocus_class to the field if it is defined 
                // in the options.
                if (obj.o.prefocus_class) {
                    obj.addClass(obj.o.prefocus_class);
                };
                
                // Focus on the input has occurred.
                obj.bind('focus', function() {
                    if (obj.val() == obj.o.field_text) {
                        obj.val('');
                    };
                    if (obj.o.prefocus_class) {
                        obj.removeClass(obj.o.prefocus_class);
                    };
                });
                
                // Focus has been lost.
                obj.bind('blur', function() {
                    if (obj.val() == '') {
                        obj.val(obj.o.field_text);
                        if (obj.o.prefocus_class) {
                            obj.addClass(obj.o.prefocus_class);
                        };
                    };
                });
                
                // Clear out the values on reload so they arent loaded after refresh.
                $(window).unload(function() {
                   if (obj.val() == obj.o.field_text) {
                       obj.val('');
                   }; 
                });
                
                // If nothing was entered, make sure the "text" is not submitted by removing it.
                var form = obj.parents('form');
                if (form) {
                    form.each(function() {
                        $(form).bind('submit', function() {
                            if (obj.val() == obj.o.field_text) {
                                obj.val('');
                            };
                        });
                    });
                };
                
            };
            
        });
        
    };
    
    $.fn.input_replacement.defaults = {
        text: '', // String. Optional. The text to put in the empty input field.
        prefocus_class: '' // String. Optional. A class to be applied to empty input field. Gets removed after 'focus' event.
    };

})(jQuery);