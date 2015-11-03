Frontend Technical Document
===========================

## Project overview
  - Project summary

## Source control
  - GIT repository @ [https://github.com/uysutrix/qatar-sass.git](https://github.com/uysutrix/qatar-sass.git)

## Technical used
  - HTML5
  - CSS3
  - JavaScript
  - Build tools
    + NodeJS
    + Grunt
    + Jade
    + Sass
  - Frameworks
    + Bootstrap
    + jQuery
  - Plugins
    + Slider @ [http://kenwheeler.github.io/slick/](http://kenwheeler.github.io/slick/)
    + Modernizr @ [https://modernizr.com/]
    + Detectizr @ [https://github.com/barisaydinoglu/Detectizr]

## Web service
  - RESTFUL
  - URL @ [http://url](http://url)

## Social network integration
  - Facebook
  - Twitter
  - Youtube
  - Vimeo

## Browsers & Platforms supported
  - Windows 7, 8.1
    + Microsoft Internet Explorer 10+
    + Firefox latest
    + Chrome latest
  - Mac OSX
    + Firefox latest
    + Chrome latest
    + Safari latest

## Devices supported
  - Tablet:
    + iPad 4, iPad Air
    + Samsung Galaxy Tab 3
  - Mobile:
    + iPhone 5 / 6 / 6+,
    + Samsung Galaxy S4 / S5

## Responsive approach
  - Breakpoints
    + Large screen: 1200 and above
    + Medium screen: 1024 to 1199
    + Small screen: 768 to 1023
    + Extra small screen: below 768

## Code standards
  - Follow Frontend code conventions
    + HTML/CSS/JS Checklist
    + On-page SEO Checklist
  - Follow W3C standards
    + HTML Validator [http://validator.w3.org](http://validator.w3.org)
    + CSS Validator [http://jigsaw.w3.org/css-validator](http://jigsaw.w3.org/css-validator)
    + Link Checker [http://validator.w3.org/checklink](http://validator.w3.org/checklink)
    + Web Accessibility [http://a11yproject.com](http://a11yproject.com)
  - Code quality tool
    + JSHint [http://jshint.com](http://jshint.com)
    + CSSLint [http://csslint.net](http://csslint.net)

## Web performance
  - YSlow [http://developer.yahoo.com/yslow](http://developer.yahoo.com/yslow)
  - PageSpeed [https://developers.google.com/speed/pagespeed](https://developers.google.com/speed/pagespeed)

## Folder structure
```
frontend-template
    .gitignore
    .htmlhintrc                  <!-- Validate html files htmlhint -->
    .csslintrc                   <!-- Validate css files with csslint -->
    .jshintrc                    <!-- Validate js files with JSHint -->
    package.json
    Gruntfile.js
    README.md
    CODE-REVIEW.md
    CODE-STANDARDS.md
    TECHNICAL-DOCUMENT.md
    /source                      <!-- Source code folder -->
        server.js                <!-- Node server configuration -->
        /assets
            /css                 <!-- Contains all less files -->
                common
                    global.scss
                    icons.scss
                    list.scss
                    mixin.scss
                    reset.scss
                    text.scss
                    variables.scss
                components
                    block.scss
                    buttons.scss
                    forms.scss
                    navigation.scss
                    slider.scss
                layouts
                    footer.scss
                    header.scss
                    pages.scss
                libs.scss
                style.scss
            /fonts               <!-- Contains all font files -->
                fontawesome-webfont.eot
                fontawesome-webfont.svg
                fontawesome-webfont.ttf
                fontawesome-webfont.woff
                fontawesome-webfont.woff2
                FontAwesome.otf
                qatar.eot
                qatar.svg
                qatar.ttf
                qatar.woff
            /icons               <!-- Contains all favicon files -->
                favicon.ico
                apple-touch-icon-precomposed.png
            /images              <!-- Contains all static image files -->
                transparent.png
                /upload          <!-- Contains all dynamic image files -->
            /media               <!-- Contains all audio/video files -->
            /js                  <!-- Contains all js files -->
                l10n.js
                site.js
                /plugins
                    plugin.js
            /tmp                 <!-- Contains temporary files -->
                l10n.js
                plugin.js
                site.js
                .htaccess
        /views                   <!-- Contains jade files -->
            discover.jade
            index.jade
            sitemap.jade
            template-js-layer.jade
            template-layer.jade
            template-sprite.jade
            template-style-guide.jade
            zubarah-fort.jade
            /blocks              <!-- Contains all blocks/modules -->
                header.jade
                footer.jade
                script.jade
            /layouts             <!-- Layout -->
                layout.jade
                sitemap.jade
                template.jade
            /mixins              <!-- Mixins -->
                all.jade
                img.jade
                link.jade
                nav.jade
            /data                <!-- Data will be used by Ajax -->
                data.jade
                data.json
                data.xml
    /public                      <!-- Public folder is generated by Grunt -->
        .htaccess
        404.html
        apple-touch-icon-precomposed.png
        favicon.ico
        index.html
        sitemap.html
        template-layer.html
        template-sprite.html
        template-style-guide.html
        /css
            ie.css
            print.css
            lib.css
            style.css
        /data
            data.html
            data.json
            data.xml
        /fonts
            fontawesome-webfont.eot
            fontawesome-webfont.svg
            fontawesome-webfont.ttf
            fontawesome-webfont.woff
            fontawesome-webfont.woff2
            FontAwesome.otf
        /images
            transparent.png
            /upload
        /media
        /js
            modernizr.js
            libs.js
            l10n.js
            script.js
    /test                        <!-- Write unit testing code -->
        test.js
        test.html
        /qunit
            qunit-1.13.0.css
            qunit-1.13.0.js
    /node_modules                <!-- All modules listed as dependencies -->
```

