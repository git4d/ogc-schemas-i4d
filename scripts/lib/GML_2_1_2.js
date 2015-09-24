var GML_2_1_2_Module_Factory = function () {
  var GML_2_1_2 = {
    n: 'GML_2_1_2',
    dens: 'http:\/\/www.opengis.net\/gml',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'LinearRingMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'AbstractFeatureCollectionType',
        bti: '.AbstractFeatureCollectionBaseType',
        ps: [{
            n: 'featureMember',
            mno: 0,
            col: true,
            ti: '.FeatureAssociationType'
          }]
      }, {
        ln: 'BoundingShapeType',
        ps: [{
            n: 'box',
            rq: true,
            en: 'Box',
            ti: '.BoxType'
          }, {
            n: '_null',
            rq: true,
            en: 'null'
          }]
      }, {
        ln: 'AbstractGeometryType',
        ps: [{
            n: 'gid',
            ti: 'ID',
            an: {
              lp: 'gid'
            },
            t: 'a'
          }, {
            n: 'srsName',
            an: {
              lp: 'srsName'
            },
            t: 'a'
          }]
      }, {
        ln: 'PointType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'MultiGeometryPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'FeatureAssociationType',
        ps: [{
            n: 'feature',
            rq: true,
            mx: false,
            dom: false,
            en: '_Feature',
            ti: '.AbstractFeatureType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'GeometryAssociationType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractGeometryCollectionBaseType',
        bti: '.AbstractGeometryType'
      }, {
        ln: 'MultiPointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PolygonMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'BoxType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'LineStringType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 2,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'GeometryCollectionType',
        bti: '.AbstractGeometryCollectionBaseType',
        ps: [{
            n: 'geometryMember',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            ti: '.GeometryAssociationType',
            t: 'er'
          }]
      }, {
        ln: 'CoordType',
        ps: [{
            n: 'x',
            rq: true,
            en: 'X',
            ti: 'Decimal'
          }, {
            n: 'y',
            en: 'Y',
            ti: 'Decimal'
          }, {
            n: 'z',
            en: 'Z',
            ti: 'Decimal'
          }]
      }, {
        ln: 'LinearRingType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'coord',
            rq: true,
            mno: 4,
            col: true,
            ti: '.CoordType'
          }, {
            n: 'coordinates',
            rq: true,
            ti: '.CoordinatesType'
          }]
      }, {
        ln: 'LineStringMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiLineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'CoordinatesType',
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'decimal',
            an: {
              lp: 'decimal'
            },
            t: 'a'
          }, {
            n: 'cs',
            an: {
              lp: 'cs'
            },
            t: 'a'
          }, {
            n: 'ts',
            an: {
              lp: 'ts'
            },
            t: 'a'
          }]
      }, {
        ln: 'MultiLineStringType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'MultiPolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PointMemberType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'LineStringPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'MultiPolygonType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'MultiPointType',
        bti: '.GeometryCollectionType'
      }, {
        ln: 'PolygonType',
        bti: '.AbstractGeometryType',
        ps: [{
            n: 'outerBoundaryIs',
            rq: true,
            ti: '.LinearRingMemberType'
          }, {
            n: 'innerBoundaryIs',
            mno: 0,
            col: true,
            ti: '.LinearRingMemberType'
          }]
      }, {
        ln: 'PolygonPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'PointPropertyType',
        bti: '.GeometryAssociationType'
      }, {
        ln: 'AbstractFeatureType',
        ps: [{
            n: 'description'
          }, {
            n: 'name'
          }, {
            n: 'boundedBy',
            ti: '.BoundingShapeType'
          }, {
            n: 'fid',
            ti: 'ID',
            an: {
              lp: 'fid'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryPropertyType',
        ps: [{
            n: 'geometry',
            rq: true,
            mx: false,
            dom: false,
            en: '_Geometry',
            ti: '.AbstractGeometryType',
            t: 'er'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AbstractFeatureCollectionBaseType',
        bti: '.AbstractFeatureType'
      }, {
        t: 'enum',
        ln: 'NullType',
        vs: ['inapplicable', 'unknown', 'unavailable', 'missing']
      }],
    eis: [{
        en: 'multiCenterOf',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'MultiPoint',
        ti: '.MultiPointType',
        sh: '_Geometry'
      }, {
        en: 'MultiLineString',
        ti: '.MultiLineStringType',
        sh: '_Geometry'
      }, {
        en: 'description'
      }, {
        en: 'coverage',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'outerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'featureMember',
        ti: '.FeatureAssociationType'
      }, {
        en: 'edgeOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'LineString',
        ti: '.LineStringType',
        sh: '_Geometry'
      }, {
        en: 'multiCenterLineOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'coord',
        ti: '.CoordType'
      }, {
        en: 'polygonMember',
        ti: '.PolygonMemberType',
        sh: 'geometryMember'
      }, {
        en: 'MultiGeometry',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: '_Feature',
        ti: '.AbstractFeatureType'
      }, {
        en: 'pointProperty',
        ti: '.PointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'multiGeometryProperty',
        ti: '.MultiGeometryPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'MultiPolygon',
        ti: '.MultiPolygonType',
        sh: '_Geometry'
      }, {
        en: 'multiLocation',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: 'Polygon',
        ti: '.PolygonType',
        sh: '_Geometry'
      }, {
        en: 'coordinates',
        ti: '.CoordinatesType'
      }, {
        en: 'multiPosition',
        ti: '.MultiPointPropertyType',
        sh: 'multiPointProperty'
      }, {
        en: 'pointMember',
        ti: '.PointMemberType',
        sh: 'geometryMember'
      }, {
        en: '_GeometryCollection',
        ti: '.GeometryCollectionType',
        sh: '_Geometry'
      }, {
        en: 'geometryMember',
        ti: '.GeometryAssociationType'
      }, {
        en: '_geometryProperty',
        ti: '.GeometryAssociationType'
      }, {
        en: 'multiCoverage',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'Box',
        ti: '.BoxType'
      }, {
        en: 'lineStringProperty',
        ti: '.LineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: '_FeatureCollection',
        ti: '.AbstractFeatureCollectionType',
        sh: '_Feature'
      }, {
        en: 'extentOf',
        ti: '.PolygonPropertyType',
        sh: 'polygonProperty'
      }, {
        en: 'multiLineStringProperty',
        ti: '.MultiLineStringPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'polygonProperty',
        ti: '.PolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'centerLineOf',
        ti: '.LineStringPropertyType',
        sh: 'lineStringProperty'
      }, {
        en: 'LinearRing',
        ti: '.LinearRingType',
        sh: '_Geometry'
      }, {
        en: 'multiPolygonProperty',
        ti: '.MultiPolygonPropertyType',
        sh: '_geometryProperty'
      }, {
        en: '_Geometry',
        ti: '.AbstractGeometryType'
      }, {
        en: 'position',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'centerOf',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'multiExtentOf',
        ti: '.MultiPolygonPropertyType',
        sh: 'multiPolygonProperty'
      }, {
        en: 'multiEdgeOf',
        ti: '.MultiLineStringPropertyType',
        sh: 'multiLineStringProperty'
      }, {
        en: 'multiPointProperty',
        ti: '.MultiPointPropertyType',
        sh: '_geometryProperty'
      }, {
        en: 'location',
        ti: '.PointPropertyType',
        sh: 'pointProperty'
      }, {
        en: 'Point',
        ti: '.PointType',
        sh: '_Geometry'
      }, {
        en: 'name'
      }, {
        en: 'lineStringMember',
        ti: '.LineStringMemberType',
        sh: 'geometryMember'
      }, {
        en: 'innerBoundaryIs',
        ti: '.LinearRingMemberType'
      }, {
        en: 'boundedBy',
        ti: '.BoundingShapeType'
      }]
  };
  return {
    GML_2_1_2: GML_2_1_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_2_1_2_Module_Factory);
}
else {
  var GML_2_1_2_Module = GML_2_1_2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
  else {
    var GML_2_1_2 = GML_2_1_2_Module.GML_2_1_2;
  }
}