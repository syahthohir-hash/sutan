var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PaketDGunungkidulGunungkidul_KC_1 = new ol.format.GeoJSON();
var features_PaketDGunungkidulGunungkidul_KC_1 = format_PaketDGunungkidulGunungkidul_KC_1.readFeatures(json_PaketDGunungkidulGunungkidul_KC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaketDGunungkidulGunungkidul_KC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaketDGunungkidulGunungkidul_KC_1.addFeatures(features_PaketDGunungkidulGunungkidul_KC_1);
var lyr_PaketDGunungkidulGunungkidul_KC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaketDGunungkidulGunungkidul_KC_1, 
                style: style_PaketDGunungkidulGunungkidul_KC_1,
                popuplayertitle: 'Paket D (Gunungkidul) — Gunungkidul_KC',
                interactive: true,
                title: '<img src="styles/legend/PaketDGunungkidulGunungkidul_KC_1.png" /> Paket D (Gunungkidul) — Gunungkidul_KC'
            });
var format_paketdpaket_d_gunungkidul__gunungkidul_kc_2 = new ol.format.GeoJSON();
var features_paketdpaket_d_gunungkidul__gunungkidul_kc_2 = format_paketdpaket_d_gunungkidul__gunungkidul_kc_2.readFeatures(json_paketdpaket_d_gunungkidul__gunungkidul_kc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paketdpaket_d_gunungkidul__gunungkidul_kc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paketdpaket_d_gunungkidul__gunungkidul_kc_2.addFeatures(features_paketdpaket_d_gunungkidul__gunungkidul_kc_2);
var lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paketdpaket_d_gunungkidul__gunungkidul_kc_2, 
                style: style_paketdpaket_d_gunungkidul__gunungkidul_kc_2,
                popuplayertitle: 'paket d — paket_d_gunungkidul__gunungkidul_kc',
                interactive: true,
                title: '<img src="styles/legend/paketdpaket_d_gunungkidul__gunungkidul_kc_2.png" /> paket d — paket_d_gunungkidul__gunungkidul_kc'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PaketDGunungkidulGunungkidul_KC_1.setVisible(true);lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PaketDGunungkidulGunungkidul_KC_1,lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2];
lyr_PaketDGunungkidulGunungkidul_KC_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin', 'paket d — paket_d_gunungkidul__gunungkidul_kc_fid': 'paket d — paket_d_gunungkidul__gunungkidul_kc_fid', 'paket d — paket_d_gunungkidul__gunungkidul_kc_WADMKC': 'paket d — paket_d_gunungkidul__gunungkidul_kc_WADMKC', });
lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin', });
lyr_PaketDGunungkidulGunungkidul_KC_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': 'TextEdit', 'paket d — paket_d_gunungkidul__gunungkidul_kc_fid': 'TextEdit', 'paket d — paket_d_gunungkidul__gunungkidul_kc_WADMKC': 'TextEdit', });
lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2.set('fieldImages', {'fid': '', 'WADMKC': '', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': '', });
lyr_PaketDGunungkidulGunungkidul_KC_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': 'inline label - always visible', 'paket d — paket_d_gunungkidul__gunungkidul_kc_fid': 'inline label - always visible', 'paket d — paket_d_gunungkidul__gunungkidul_kc_WADMKC': 'inline label - always visible', });
lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2.set('fieldLabels', {'fid': 'no label', 'WADMKC': 'no label', 'Rasio Jenis Kelamin menurut Kecamatan, 2024_GUNUNGKIDUL — Sheet1_Rasio Jenis Kelamin': 'no label', });
lyr_paketdpaket_d_gunungkidul__gunungkidul_kc_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});