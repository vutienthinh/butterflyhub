$( document ).ready(function() {

    $('.slick-for').slick({
        slidesToShow : 1,
        slidesToScroll : 1,
        arrows: false,
        asNavFor: '.slick-nav'
    });
    $('.slick-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 0,
        asNavFor: '.slick-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    $('.addSlide').off('click.addSlide').on('click.addSlide', function(){
        $('[data-slick]').slick('slickAdd','<div style="background-color: black;">7</div>');

    });
    // $('#container').highcharts({

    //     chart: {
    //         polar: true,
    //         type: 'line'
    //     },

    //     title: {
    //         text: 'Budget vs spending',
    //         x: -80
    //     },

    //     pane: {
    //         size: '80%'
    //     },

    //     xAxis: {
    //         categories: ['BEFORE', 'RECEPTION', 'DIAGNOSIS', 'BACK BAR',
    //                 'TECHNIQUE', 'SHOPPING','CHECK-OUT'],
    //         tickmarkPlacement: 'on',
    //         lineWidth: 0,
    //         gridLineColor:'#FFF'
    //     },

    //     yAxis: {
    //         gridLineInterpolation: 'polygon',
    //         lineWidth: 0,
    //         min: 0,
    //         max: 100000,
    //         //tickPositions: [0, 10000, 20000, 40000, 80000],
    //         plotBands: [{
    //             from: 0,
    //             to: 25000,
    //             color: 'rgba(180, 155, 37, 0.4)'
    //         },{
    //             from: 25000,
    //             to: 50000,
    //             color: 'rgba(180, 155, 37, 0.3)'
    //         },{
    //             from: 50000,
    //             to: 75000,
    //             color: 'rgba(180, 155, 37, 0.2)'
    //         },{
    //             from: 75000,
    //             to: 100000,
    //             color: 'rgba(180, 155, 37, 0.1)'
    //         }],
    //         gridLineWidth : 0
    //     },
    //     plotOptions: {
    //         series: {
    //             marker: {
    //                     enabled: false
    //                     }
    //                 },
    //             fillOpacity: 0.2
    //             },

    //     tooltip: {
    //         shared: true,
    //         pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    //     },

    //     legend: {
    //         align: 'right',
    //         verticalAlign: 'top',
    //         y: 70,
    //         layout: 'vertical',
    //         enabled: false
    //     },
    //     exporting: {
    //         enabled: false
    //     },
    //     series: [{
    //         type: 'area',
    //         name: 'Actual Spending',
    //         data: [50000, 39000, 42000, 31000, 26000, 14000,34000],
    //         pointPlacement: 'on',
    //         zIndex : 0,
    //         color: '#b49b25'
    //     }]

    // });
});
