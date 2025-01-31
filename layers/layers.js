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
var format_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.format.GeoJSON();
var features_SOLANEPhase2CityMunicipalBoundaries_2 = format_SOLANEPhase2CityMunicipalBoundaries_2.readFeatures(json_SOLANEPhase2CityMunicipalBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2CityMunicipalBoundaries_2.addFeatures(features_SOLANEPhase2CityMunicipalBoundaries_2);
var lyr_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2CityMunicipalBoundaries_2, 
                style: style_SOLANEPhase2CityMunicipalBoundaries_2,
                popuplayertitle: 'SOLANE Phase 2 City / Municipal Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2CityMunicipalBoundaries_2.png" /> SOLANE Phase 2 City / Municipal Boundaries'
            });
var format_SOLANEPhase2BarangayswPop_3 = new ol.format.GeoJSON();
var features_SOLANEPhase2BarangayswPop_3 = format_SOLANEPhase2BarangayswPop_3.readFeatures(json_SOLANEPhase2BarangayswPop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2BarangayswPop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2BarangayswPop_3.addFeatures(features_SOLANEPhase2BarangayswPop_3);
var lyr_SOLANEPhase2BarangayswPop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2BarangayswPop_3, 
                style: style_SOLANEPhase2BarangayswPop_3,
                popuplayertitle: 'SOLANE Phase 2 Barangays w: Pop',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2BarangayswPop_3.png" /> SOLANE Phase 2 Barangays w: Pop'
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
var format_SOLANEAllChannelsFinalPh2_5 = new ol.format.GeoJSON();
var features_SOLANEAllChannelsFinalPh2_5 = format_SOLANEAllChannelsFinalPh2_5.readFeatures(json_SOLANEAllChannelsFinalPh2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEAllChannelsFinalPh2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEAllChannelsFinalPh2_5.addFeatures(features_SOLANEAllChannelsFinalPh2_5);
var lyr_SOLANEAllChannelsFinalPh2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEAllChannelsFinalPh2_5, 
                style: style_SOLANEAllChannelsFinalPh2_5,
                popuplayertitle: 'SOLANE All Channels Final Ph2',
                interactive: true,
                title: '<img src="styles/legend/SOLANEAllChannelsFinalPh2_5.png" /> SOLANE All Channels Final Ph2'
            });
var format_CREATEChannels_6 = new ol.format.GeoJSON();
var features_CREATEChannels_6 = format_CREATEChannels_6.readFeatures(json_CREATEChannels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CREATEChannels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CREATEChannels_6.addFeatures(features_CREATEChannels_6);
var lyr_CREATEChannels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CREATEChannels_6, 
                style: style_CREATEChannels_6,
                popuplayertitle: 'CREATE Channels',
                interactive: true,
                title: '<img src="styles/legend/CREATEChannels_6.png" /> CREATE Channels'
            });
var format_EXPANDChannels_7 = new ol.format.GeoJSON();
var features_EXPANDChannels_7 = format_EXPANDChannels_7.readFeatures(json_EXPANDChannels_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPANDChannels_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANDChannels_7.addFeatures(features_EXPANDChannels_7);
var lyr_EXPANDChannels_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANDChannels_7, 
                style: style_EXPANDChannels_7,
                popuplayertitle: 'EXPAND Channels',
                interactive: true,
                title: '<img src="styles/legend/EXPANDChannels_7.png" /> EXPAND Channels'
            });
var format_OPTIMIZEChannels_8 = new ol.format.GeoJSON();
var features_OPTIMIZEChannels_8 = format_OPTIMIZEChannels_8.readFeatures(json_OPTIMIZEChannels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPTIMIZEChannels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPTIMIZEChannels_8.addFeatures(features_OPTIMIZEChannels_8);
var lyr_OPTIMIZEChannels_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPTIMIZEChannels_8, 
                style: style_OPTIMIZEChannels_8,
                popuplayertitle: 'OPTIMIZE Channels',
                interactive: true,
                title: '<img src="styles/legend/OPTIMIZEChannels_8.png" /> OPTIMIZE Channels'
            });
var group_SOLANEperChannelType = new ol.layer.Group({
                                layers: [lyr_CREATEChannels_6,lyr_EXPANDChannels_7,lyr_OPTIMIZEChannels_8,],
                                fold: "open",
                                title: 'SOLANE per Channel Type'});
var group_SOLANEPhase2GeographicCoverageBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2CityMunicipalBoundaries_2,lyr_SOLANEPhase2BarangayswPop_3,lyr_SOLANEPhase2Grids_4,],
                                fold: "open",
                                title: 'SOLANE Phase 2 Geographic Coverage Boundaries'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SOLANEPhase2CityMunicipalBoundaries_2.setVisible(true);lyr_SOLANEPhase2BarangayswPop_3.setVisible(true);lyr_SOLANEPhase2Grids_4.setVisible(true);lyr_SOLANEAllChannelsFinalPh2_5.setVisible(true);lyr_CREATEChannels_6.setVisible(true);lyr_EXPANDChannels_7.setVisible(true);lyr_OPTIMIZEChannels_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_SOLANEPhase2GeographicCoverageBoundaries,lyr_SOLANEAllChannelsFinalPh2_5,group_SOLANEperChannelType];
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldAliases', {'Barangay N': 'Barangay Name', 'Population': 'Population', });
lyr_SOLANEPhase2Grids_4.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldAliases', {'_Store / O': 'X_COORD', '_Store /_1': 'Y_COORD', 'Tag No': 'TAG NO', 'Grid No': 'GRID NO', 'House No': 'HOUSE NO', 'Street Nam': 'STREET', 'Barangay': 'BARANGAY', 'City or Mu': 'CITY / MUNICIPALITY', 'Store Name': 'STORE NAME', 'Channel Se': 'CHANNEL SEGMENT', 'Distributo': 'DISTRIBUTOR', 'Owner\'s Na': 'OWNER\'S NAME', 'Contact No': 'CONTACT', 'Contact _1': 'CONTACT 2', 'Interested': 'INTERESTED DEALER', });
lyr_CREATEChannels_6.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_EXPANDChannels_7.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_OPTIMIZEChannels_8.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldImages', {'Barangay N': 'TextEdit', 'Population': 'TextEdit', });
lyr_SOLANEPhase2Grids_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_CREATEChannels_6.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_EXPANDChannels_7.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_OPTIMIZEChannels_8.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldLabels', {'Barangay N': 'no label', 'Population': 'no label', });
lyr_SOLANEPhase2Grids_4.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_CREATEChannels_6.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_EXPANDChannels_7.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_OPTIMIZEChannels_8.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_OPTIMIZEChannels_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});