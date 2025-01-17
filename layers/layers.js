var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SOLANEPhase2BarangayswPop_2 = new ol.format.GeoJSON();
var features_SOLANEPhase2BarangayswPop_2 = format_SOLANEPhase2BarangayswPop_2.readFeatures(json_SOLANEPhase2BarangayswPop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2BarangayswPop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2BarangayswPop_2.addFeatures(features_SOLANEPhase2BarangayswPop_2);
var lyr_SOLANEPhase2BarangayswPop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2BarangayswPop_2, 
                style: style_SOLANEPhase2BarangayswPop_2,
                popuplayertitle: 'SOLANE Phase 2 Barangays w: Pop',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2BarangayswPop_2.png" /> SOLANE Phase 2 Barangays w: Pop'
            });
var format_SOLANEPhase2CityMunicipalBoundaries_3 = new ol.format.GeoJSON();
var features_SOLANEPhase2CityMunicipalBoundaries_3 = format_SOLANEPhase2CityMunicipalBoundaries_3.readFeatures(json_SOLANEPhase2CityMunicipalBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2CityMunicipalBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2CityMunicipalBoundaries_3.addFeatures(features_SOLANEPhase2CityMunicipalBoundaries_3);
var lyr_SOLANEPhase2CityMunicipalBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2CityMunicipalBoundaries_3, 
                style: style_SOLANEPhase2CityMunicipalBoundaries_3,
                popuplayertitle: 'SOLANE Phase 2 City / Municipal Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2CityMunicipalBoundaries_3.png" /> SOLANE Phase 2 City / Municipal Boundaries'
            });
var format_SOLANEPhase2Grids_4 = new ol.format.GeoJSON();
var features_SOLANEPhase2Grids_4 = format_SOLANEPhase2Grids_4.readFeatures(json_SOLANEPhase2Grids_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2Grids_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2Grids_4.addFeatures(features_SOLANEPhase2Grids_4);
var lyr_SOLANEPhase2Grids_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2Grids_4, 
                style: style_SOLANEPhase2Grids_4,
                popuplayertitle: 'SOLANE Phase 2 Grids',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2Grids_4.png" /> SOLANE Phase 2 Grids'
            });
var format_SOLANEAllChannelsPh2_5 = new ol.format.GeoJSON();
var features_SOLANEAllChannelsPh2_5 = format_SOLANEAllChannelsPh2_5.readFeatures(json_SOLANEAllChannelsPh2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEAllChannelsPh2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEAllChannelsPh2_5.addFeatures(features_SOLANEAllChannelsPh2_5);
var lyr_SOLANEAllChannelsPh2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEAllChannelsPh2_5, 
                style: style_SOLANEAllChannelsPh2_5,
                popuplayertitle: 'SOLANE All Channels Ph2 ',
                interactive: true,
                title: '<img src="styles/legend/SOLANEAllChannelsPh2_5.png" /> SOLANE All Channels Ph2 '
            });
var format_SOLANEAllChannelSEGMENT_6 = new ol.format.GeoJSON();
var features_SOLANEAllChannelSEGMENT_6 = format_SOLANEAllChannelSEGMENT_6.readFeatures(json_SOLANEAllChannelSEGMENT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEAllChannelSEGMENT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEAllChannelSEGMENT_6.addFeatures(features_SOLANEAllChannelSEGMENT_6);
var lyr_SOLANEAllChannelSEGMENT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEAllChannelSEGMENT_6, 
                style: style_SOLANEAllChannelSEGMENT_6,
                popuplayertitle: 'SOLANE All Channel SEGMENT',
                interactive: true,
    title: 'SOLANE All Channel SEGMENT<br />\
    <img src="styles/legend/SOLANEAllChannelSEGMENT_6_0.png" /> CREATE<br />\
    <img src="styles/legend/SOLANEAllChannelSEGMENT_6_1.png" /> EXPAND<br />\
    <img src="styles/legend/SOLANEAllChannelSEGMENT_6_2.png" /> OPTIMIZE<br />'
        });
var group_SOLANETargetChannelLocations = new ol.layer.Group({
                                layers: [lyr_SOLANEAllChannelsPh2_5,lyr_SOLANEAllChannelSEGMENT_6,],
                                fold: "open",
                                title: 'SOLANE Target Channel Locations'});
var group_SOLANEPhase2GeographicCoverageBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2CityMunicipalBoundaries_3,lyr_SOLANEPhase2Grids_4,],
                                fold: "open",
                                title: 'SOLANE Phase 2 Geographic Coverage Boundaries'});
var group_PHILPoliticalBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2BarangayswPop_2,],
                                fold: "open",
                                title: 'PHIL Political Boundaries'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SOLANEPhase2BarangayswPop_2.setVisible(true);lyr_SOLANEPhase2CityMunicipalBoundaries_3.setVisible(true);lyr_SOLANEPhase2Grids_4.setVisible(true);lyr_SOLANEAllChannelsPh2_5.setVisible(true);lyr_SOLANEAllChannelSEGMENT_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_PHILPoliticalBoundaries,group_SOLANEPhase2GeographicCoverageBoundaries,group_SOLANETargetChannelLocations];
lyr_SOLANEPhase2BarangayswPop_2.set('fieldAliases', {'Barangay N': 'Barangay Name', 'Population': 'Population', });
lyr_SOLANEPhase2CityMunicipalBoundaries_3.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEPhase2Grids_4.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEAllChannelsPh2_5.set('fieldAliases', {'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_SOLANEAllChannelSEGMENT_6.set('fieldAliases', {'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_SOLANEPhase2BarangayswPop_2.set('fieldImages', {'Barangay N': 'TextEdit', 'Population': 'TextEdit', });
lyr_SOLANEPhase2CityMunicipalBoundaries_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEPhase2Grids_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEAllChannelsPh2_5.set('fieldImages', {'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_SOLANEAllChannelSEGMENT_6.set('fieldImages', {'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_SOLANEPhase2BarangayswPop_2.set('fieldLabels', {'Barangay N': 'no label', 'Population': 'no label', });
lyr_SOLANEPhase2CityMunicipalBoundaries_3.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEPhase2Grids_4.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEAllChannelsPh2_5.set('fieldLabels', {'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_SOLANEAllChannelSEGMENT_6.set('fieldLabels', {'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_SOLANEAllChannelSEGMENT_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});