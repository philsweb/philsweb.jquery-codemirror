(function ($) {
    $.fn.codemirrorInit = function () {

        $(this).init.prototype = $.extend({}, $(this).init.prototype, {

            codemirror: function(){
              var $this = this;
              return {
                  setValue: function (value) {
                      for (var i = 0; i < $this.length; i++) {
                          $.data($this[i], 'codemirror').setValue(value);
                      }
                  },
                  getValue: function () {
                      if (this.length > 1) {
                          throw new Error("Only one DOM element can be selected");
                      }
                      return $.data($this[0], 'codemirror').getValue();
                  },
                  setOption: function (key, value) {
                      for (var i = 0; i < $this.length; i++) {
                          $.data($this[i], 'codemirror').setOption(key, value);
                      }
                  },
                  setOptions: function (optionsObject) {
                      for (var i = 0; i < this.length; i++) {
                          var element = $this[i];
                          $.each(optionsObject, function (key, value) {
                              $.data(element, 'codemirror').setOption(key, value);
                          });
                      }
                  }
              }
            }
        });

        return this.each(function () {

            $.data(this, 'codemirror', CodeMirror(this, {
                //value: '<div> Hello world! </div>',
                mode: "text/html",
                lineNumbers: true,
                lineWrapping: true
            }));
        });
    };

})(jQuery);