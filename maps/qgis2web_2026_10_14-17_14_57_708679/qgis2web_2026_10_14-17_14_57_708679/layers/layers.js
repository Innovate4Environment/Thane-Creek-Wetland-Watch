var wms_layers = [];

var lyr_BaseMap_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Base Map<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BaseMap_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8053532.501440, 2119665.998295, 8190156.277125, 2197808.693941]
        })
    });
var lyr_2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025<br />\
    <img src="styles/legend/2025_1_0.png" /> Water<br />\
    <img src="styles/legend/2025_1_1.png" /> Mangroves<br />\
    <img src="styles/legend/2025_1_2.png" /> Flooded Vegetation<br />\
    <img src="styles/legend/2025_1_3.png" /> Rangeland<br />\
    <img src="styles/legend/2025_1_4.png" /> Built Area<br />\
    <img src="styles/legend/2025_1_5.png" /> Bare Ground<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8115414.783862, 2139682.272413, 8130046.026477, 2181915.727253]
        })
    });
var lyr_2020_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '2020<br />\
    <img src="styles/legend/2020_2_0.png" /> Water<br />\
    <img src="styles/legend/2020_2_1.png" /> Mangroves<br />\
    <img src="styles/legend/2020_2_2.png" /> Flooded Vegetation<br />\
    <img src="styles/legend/2020_2_3.png" /> Rangeland<br />\
    <img src="styles/legend/2020_2_4.png" /> Built Area<br />\
    <img src="styles/legend/2020_2_5.png" /> Bare Ground<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2020_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8115414.783862, 2139682.272413, 8130046.026477, 2181915.727253]
        })
    });
var lyr_2015_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '2015<br />\
    <img src="styles/legend/2015_3_0.png" /> Water<br />\
    <img src="styles/legend/2015_3_1.png" /> Mangroves<br />\
    <img src="styles/legend/2015_3_2.png" /> Flooded Vegetation<br />\
    <img src="styles/legend/2015_3_3.png" /> Rangeland<br />\
    <img src="styles/legend/2015_3_4.png" /> Built Area<br />\
    <img src="styles/legend/2015_3_5.png" /> Bare Ground<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2015_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8115414.783862, 2139682.272413, 8130046.026477, 2181915.727253]
        })
    });
var format_ThaneCreek_4 = new ol.format.GeoJSON();
var features_ThaneCreek_4 = format_ThaneCreek_4.readFeatures(json_ThaneCreek_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThaneCreek_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThaneCreek_4.addFeatures(features_ThaneCreek_4);
var lyr_ThaneCreek_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThaneCreek_4, 
                style: style_ThaneCreek_4,
                popuplayertitle: 'Thane Creek',
                interactive: true,
                title: '<img src="styles/legend/ThaneCreek_4.png" /> Thane Creek'
            });
var format_Wetland_5 = new ol.format.GeoJSON();
var features_Wetland_5 = format_Wetland_5.readFeatures(json_Wetland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetland_5.addFeatures(features_Wetland_5);
var lyr_Wetland_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetland_5, 
                style: style_Wetland_5,
                popuplayertitle: 'Wetland',
                interactive: true,
                title: '<img src="styles/legend/Wetland_5.png" /> Wetland'
            });

lyr_BaseMap_0.setVisible(true);lyr_2025_1.setVisible(true);lyr_2020_2.setVisible(true);lyr_2015_3.setVisible(true);lyr_ThaneCreek_4.setVisible(true);lyr_Wetland_5.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_2025_1,lyr_2020_2,lyr_2015_3,lyr_ThaneCreek_4,lyr_Wetland_5];
lyr_ThaneCreek_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Wetland_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_ThaneCreek_4.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Wetland_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_ThaneCreek_4.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_Wetland_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', });
lyr_Wetland_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});