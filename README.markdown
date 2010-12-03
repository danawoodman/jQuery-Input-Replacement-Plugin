# jQuery Input Replacement Plugin

## Overview

The *jQuery Input Replacement plugin* allows you to easily create default placeholder text for your form fields. 

You often see this behavior in search fields or email forms where the field contains some placeholder text (such as "Search...") to give users a hint to what the field does. This is often used when a field has no visible `<label>` to indicate the expected values of a field.
    
To see what the plugin can do, check out [this short screencast](http://content.screencast.com/users/woodman.dana/folders/Jing/media/485a2c24-b22d-4c15-97b3-2e95e0c1584a/jingh264player.swf).


## Features

* If no "text" option is supplied, the plugin gets the `name` property from the field, capitalizes it and uses it instead.
* Default text is removed when the field is focused.
* If the field is unfocused and has no content, the default text will reappear.
* Apply a "prefocus" class to the form field so you can style the default text.
* When the form is submitted, the placeholder is cleared out so it is not submitted with the form.


## Example Usage


### Basic example

Put this in the `<head>` of your document:

    <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
    <script type="text/javascript" src="js/jquery.input_replacement.pack.js"></script>
    
    <script type="text/javascript">
    
        $(function() {
            
            $('#id_search').input_replacement();
            
        });
    
    </script>

... and put this in the `<body>` of your page.

    <form action="#" method="post">
        <p>
            <label for="id_search">Search</label>
            <input type="text" name="search" id="id_search" />
        </p>
        <p>
            <input type="submit" value="Submit" />
        </p>
    </form>

### Applying to all inputs on a page

You could apply this to all input fields on a page like so:

    $('input').input_replacement();
    
### More examples

For more examples of how to use this plugin, please go to the [plugin home page](http://www.danawoodman.com/).


## Plugin Options

* `text` -- Optional. String. Text to use instead of the default text gotten from the "name" attribute of the input. Used to put in your own custom placeholder text into the field.
* `prefocus_class` -- Optional. String. The class to append to the form field. Used to style the placeholder text.


## Download

*jQuery Input Replacement* is hosted at [Github](http://www.github.com/) here:

<https://github.com/danawoodman/jQuery-Input-Replacement-Plugin>

You can download the code or check out a copy of it. 

You can also fork the code if you want to make changes to it. 


## Notes

In general, you should use the minified or packed versions of this plugin in a production environment. The compressed files decrease server load, bandwidth and speed up page loads. 

For development, it is OK to use the uncompressed code.


## Feedback & Bugs

If you have some features you think should be added, fork the code, make your changes and then send me a pull request.

If you find bugs, please [file them here](https://github.com/danawoodman/jQuery-Input-Replacement-Plugin/issues).


## License

Released under an [MIT license](http://www.opensource.org/licenses/mit-license.php).
