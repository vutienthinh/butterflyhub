$(function() {
    var resultCollector = Quagga.ResultCollector.create({
        capture: true,
        capacity: 20,
        blacklist: [{code: '2167361334', format: 'i2of5'}],
        filter: function(codeResult) {
            // only store results which match this constraint
            // e.g.: codeResult
            return true;
        }
    });
    var App = {
        init : function() {
            var self = this;

            Quagga.init(this.state, function(err) {
                if (err) {
                    return self.handleError(err);
                }
                Quagga.registerResultCollector(resultCollector);
                App.attachListeners();
                Quagga.start();
            });
        },
        handleError: function(err) {
            console.log(err);
        },
        attachListeners: function() {
            var self = this;

            $('.controls').on('click', 'button.stop', function(e) {
                e.preventDefault();
                Quagga.stop();
                self._printCollectedResults();
            });

            $('.controls .reader-config-group').on('change', 'input, select', function(e) {
                e.preventDefault();
                var $target = $(e.target),
                    value = $target.attr('type') === 'checkbox' ? $target.prop('checked') : $target.val(),
                    name = $target.attr('name'),
                    state = self._convertNameToState(name);

                console.log('Value of '+ state + ' changed to ' + value);
                self.setState(state, value);
            });
        },
        _printCollectedResults: function() {
            var results = resultCollector.getResults(),
                $ul = $('#result_strip ul.collector');

            results.forEach(function(result) {
                var $li = $('<li><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></li>');

                $li.find('img').attr('src', result.frame);
                $li.find('h4.code').html(result.codeResult.code + ' (' + result.codeResult.format + ')');
                $ul.prepend($li);
            });
        },
        _accessByPath: function(obj, path, val) {
            var parts = path.split('.'),
                depth = parts.length,
                setter = (typeof val !== 'undefined') ? true : false;

            return parts.reduce(function(o, key, i) {
                if (setter && (i + 1) === depth) {
                    o[key] = val;
                }
                return key in o ? o[key] : {};
            }, obj);
        },
        _convertNameToState: function(name) {
            return name.replace('_', '.').split('-').reduce(function(result, value) {
                return result + value.charAt(0).toUpperCase() + value.substring(1);
            });
        },
        detachListeners: function() {
            $('.controls').off('click', 'button.stop');
            $('.controls .reader-config-group').off('change', 'input, select');
        },
        setState: function(path, value) {
            var self = this;

            if (typeof self._accessByPath(self.inputMapper, path) === 'function') {
                value = self._accessByPath(self.inputMapper, path)(value);
            }

            self._accessByPath(self.state, path, value);

            console.log(JSON.stringify(self.state));
            App.detachListeners();
            Quagga.stop();
            App.init();
        },
        inputMapper: {
            inputStream: {
                constraints: function(value){
                    var values = value.split('x');
                    return {
                        width: parseInt(values[0]),
                        height: parseInt(values[1]),
                        facing: 'environment'
                    }
                }
            },
            numOfWorkers: function(value) {
                return parseInt(value);
            },
            decoder: {
                readers: function(value) {
                    return [value + '_reader'];
                }
            }
        },
        state: {
            inputStream: {
                type : 'LiveStream',
                constraints: {
                    width: 640,
                    height: 480,
                    facing: 'environment' // or user
                }
            },
            locator: {
                patchSize: 'medium',
                halfSample: true
            },
            numOfWorkers: 4,
            decoder: {
                //readers : [ 'code_128_reader']
                readers : ['code_128_reader', 'code_39_reader', 'code_39_vin_reader', 'ean_reader', 'ean_8_reader', 'upc_reader', 'upc_e_reader', 'codabar_reader']
            },
            locate: true
        },
        lastResult : null
    };

    //App.init();

    Quagga.onProcessed(function(result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width')), parseInt(drawingCanvas.getAttribute('height')));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2});
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
            }
        }
    });

    /*$.ajax({
        url: 'http://localhost:1337/product/find?name=Loreal%20Lalo',
        type: 'GET',
        data: '',
        success: function(respone){
            console.log(respone);
        }
    });*/
   /* $.ajax({
        url: 'http://localhost:8088/items',
        type: 'GET',
        data: '',
        success: function(respone){
            console.log(respone);
        }
    });*/
    // $.ajax({
    //     url: 'http://localhost:8088/getItemById',
    //     type: 'POST',
    //     data: 'id=dasdsad',
    //     success: function(respone){
    //         console.log(respone);
    //     }
    // });
    Quagga.onDetected(function(result) {
        var code = result.codeResult.code;

        if (App.lastResult !== code) {
            App.lastResult = code;
            var $node = null, canvas = Quagga.canvas.dom.image;
            $('#interactive').parents('.row').fadeOut( 600, function() {

            });
            // $node = $('<div><div class="thumbnail"><div class="imgWrapper"><img /></div><div class="caption"><h4 class="code"></h4></div></div></div>');
            // $node.find('img').attr('src', canvas.toDataURL());
            // $node.find('h4.code').html(code);
            $('[data-slick]').fadeIn( 600, function() {
                //$(this).slick('slickAdd',$node);
            });
            //$('#result_strip ul.thumbnails').prepend($node);
        }
    });
    $('.scan-btn').off('click.Scan').on('click.Scan', function(){
        $(this).parents('.box-panel').fadeOut(600);
    });
    $('#page-product').css({
            top: 0,
            left: $(window).width(),
            position: 'absolute',
            width: '100%',
            height: '100%',
            'background-color': 'green'
    });
    $('body').css('overflow-x', 'hidden');
    $('.item').off('click.Showdetail').on('click.Showdetail', function(){
        //$('#page-product').show().width(0);
        /*$('#page-home').animate({ width: 'toggle' }, 'easing', function(){
            $('#page-product').animate({ width: 'toggle' }, 'easing', function(){
            });
        });*/

        $('#page-home').removeClass().addClass('slideOutLeft animated');
        $('#page-product').css('left','0px').removeClass().addClass('slideInRight animated');
    });
    $('.back-btn').off('click.back').on('click.back', function(){
        $('#page-product').removeClass().addClass('slideOutRight animated');
        $('#page-home').removeClass().addClass('slideInLeft animated');
    });
});
