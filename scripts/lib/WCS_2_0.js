var WCS_2_0_Module_Factory = function () {
  var WCS_2_0 = {
    n: 'WCS_2_0',
    dens: 'http:\/\/www.opengis.net\/wcs\/2.0',
    deps: ['GML_3_2_1', 'GMLCOV_1_0', 'OWS_2_0', 'SWE_2_0'],
    tis: [{
        ln: 'DescribeCoverageType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'coverageId',
            rq: true,
            col: true,
            en: 'CoverageId',
            ti: 'NCName'
          }]
      }, {
        ln: 'CoverageSummaryType',
        bti: 'OWS_2_0.DescriptionType',
        ps: [{
            n: 'wgs84BoundingBox',
            mno: 0,
            col: true,
            en: {
              lp: 'WGS84BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.WGS84BoundingBoxType'
          }, {
            n: 'coverageId',
            rq: true,
            en: 'CoverageId',
            ti: 'NCName'
          }, {
            n: 'coverageSubtype',
            rq: true,
            en: 'CoverageSubtype',
            ti: 'QName'
          }, {
            n: 'coverageSubtypeParent',
            en: 'CoverageSubtypeParent',
            ti: '.CoverageSubtypeParentType'
          }, {
            n: 'boundingBox',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: 'BoundingBox',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.BoundingBoxType',
            t: 'er'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/2.0'
            },
            ti: 'OWS_2_0.MetadataType',
            t: 'er'
          }]
      }, {
        ln: 'ExtensionType',
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'OfferedCoverageType',
        ps: [{
            n: 'abstractCoverage',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'AbstractCoverage',
              ns: 'http:\/\/www.opengis.net\/gmlcov\/1.0'
            },
            ti: 'GMLCOV_1_0.AbstractCoverageType',
            t: 'er'
          }, {
            n: 'serviceParameters',
            rq: true,
            en: 'ServiceParameters',
            ti: '.ServiceParametersType'
          }]
      }, {
        ln: 'CoverageDescriptionType',
        bti: 'GML_3_2_1.AbstractFeatureType',
        ps: [{
            n: 'coverageId',
            rq: true,
            en: 'CoverageId',
            ti: 'NCName'
          }, {
            n: 'coverageFunction',
            en: {
              lp: 'coverageFunction',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.CoverageFunctionType'
          }, {
            n: 'metadata',
            mno: 0,
            col: true,
            en: {
              lp: 'metadata',
              ns: 'http:\/\/www.opengis.net\/gmlcov\/1.0'
            },
            ti: 'GMLCOV_1_0.Metadata'
          }, {
            n: 'domainSet',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'domainSet',
              ns: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            ti: 'GML_3_2_1.DomainSetType',
            t: 'er'
          }, {
            n: 'rangeType',
            rq: true,
            en: {
              lp: 'rangeType',
              ns: 'http:\/\/www.opengis.net\/gmlcov\/1.0'
            },
            ti: 'SWE_2_0.DataRecordPropertyType'
          }, {
            n: 'serviceParameters',
            rq: true,
            en: 'ServiceParameters',
            ti: '.ServiceParametersType'
          }]
      }, {
        ln: 'GetCapabilitiesType',
        bti: 'OWS_2_0.GetCapabilitiesType',
        ps: [{
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }]
      }, {
        ln: 'DimensionTrimType',
        bti: '.DimensionSubsetType',
        ps: [{
            n: 'trimLow',
            en: 'TrimLow'
          }, {
            n: 'trimHigh',
            en: 'TrimHigh'
          }]
      }, {
        ln: 'ServiceMetadataType',
        ps: [{
            n: 'formatSupported',
            rq: true,
            col: true
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }]
      }, {
        ln: 'DimensionSubsetType',
        ps: [{
            n: 'dimension',
            rq: true,
            en: 'Dimension',
            ti: 'NCName'
          }]
      }, {
        ln: 'CoverageOfferingsType',
        ps: [{
            n: 'serviceMetadata',
            rq: true,
            en: 'ServiceMetadata',
            ti: '.ServiceMetadataType'
          }, {
            n: 'offeredCoverage',
            mno: 0,
            col: true,
            en: 'OfferedCoverage',
            ti: '.OfferedCoverageType'
          }]
      }, {
        ln: 'CapabilitiesType',
        bti: 'OWS_2_0.CapabilitiesBaseType',
        ps: [{
            n: 'serviceMetadata',
            en: 'ServiceMetadata',
            ti: '.ServiceMetadataType'
          }, {
            n: 'contents',
            en: 'Contents',
            ti: '.ContentsType'
          }]
      }, {
        ln: 'CoverageSubtypeParentType',
        ps: [{
            n: 'coverageSubtype',
            rq: true,
            en: 'CoverageSubtype',
            ti: 'QName'
          }, {
            n: 'coverageSubtypeParent',
            en: 'CoverageSubtypeParent',
            ti: '.CoverageSubtypeParentType'
          }]
      }, {
        ln: 'GetCoverageType',
        bti: '.RequestBaseType',
        ps: [{
            n: 'coverageId',
            rq: true,
            en: 'CoverageId',
            ti: 'NCName'
          }, {
            n: 'dimensionSubset',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            en: 'DimensionSubset',
            ti: '.DimensionSubsetType',
            t: 'er'
          }, {
            n: 'format'
          }, {
            n: 'mediaType'
          }]
      }, {
        ln: 'ContentsType',
        bti: 'OWS_2_0.ContentsBaseType',
        ps: [{
            n: 'coverageSummary',
            mno: 0,
            col: true,
            en: 'CoverageSummary',
            ti: '.CoverageSummaryType'
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }]
      }, {
        ln: 'ServiceParametersType',
        ps: [{
            n: 'coverageSubtype',
            rq: true,
            en: 'CoverageSubtype',
            ti: 'QName'
          }, {
            n: 'coverageSubtypeParent',
            en: 'CoverageSubtypeParent',
            ti: '.CoverageSubtypeParentType'
          }, {
            n: 'nativeFormat',
            rq: true
          }, {
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }]
      }, {
        ln: 'DimensionSliceType',
        bti: '.DimensionSubsetType',
        ps: [{
            n: 'slicePoint',
            rq: true,
            en: 'SlicePoint'
          }]
      }, {
        ln: 'RequestBaseType',
        ps: [{
            n: 'extension',
            en: 'Extension',
            ti: '.ExtensionType'
          }, {
            n: 'service',
            rq: true,
            an: {
              lp: 'service'
            },
            t: 'a'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageDescriptionsType',
        ps: [{
            n: 'coverageDescription',
            mno: 0,
            col: true,
            en: 'CoverageDescription',
            ti: '.CoverageDescriptionType'
          }]
      }],
    eis: [{
        en: 'CoverageOfferings',
        ti: '.CoverageOfferingsType'
      }, {
        en: 'ServiceParameters',
        ti: '.ServiceParametersType'
      }, {
        en: 'Capabilities',
        ti: '.CapabilitiesType'
      }, {
        en: 'DimensionTrim',
        ti: '.DimensionTrimType',
        sh: 'DimensionSubset'
      }, {
        en: 'CoverageId',
        ti: 'NCName'
      }, {
        en: 'CoverageDescription',
        ti: '.CoverageDescriptionType',
        sh: {
          lp: 'AbstractFeature',
          ns: 'http:\/\/www.opengis.net\/gml\/3.2'
        }
      }, {
        en: 'DimensionSlice',
        ti: '.DimensionSliceType',
        sh: 'DimensionSubset'
      }, {
        en: 'GetCapabilities',
        ti: '.GetCapabilitiesType'
      }, {
        en: 'CoverageSubtypeParent',
        ti: '.CoverageSubtypeParentType'
      }, {
        en: 'OfferedCoverage',
        ti: '.OfferedCoverageType'
      }, {
        en: 'CoverageSummary',
        ti: '.CoverageSummaryType'
      }, {
        en: 'CoverageDescriptions',
        ti: '.CoverageDescriptionsType'
      }, {
        en: 'Contents',
        ti: '.ContentsType'
      }, {
        en: 'GetCoverage',
        ti: '.GetCoverageType'
      }, {
        en: 'ServiceMetadata',
        ti: '.ServiceMetadataType'
      }, {
        en: 'Extension',
        ti: '.ExtensionType'
      }, {
        en: 'DimensionSubset',
        ti: '.DimensionSubsetType'
      }, {
        en: 'DescribeCoverage',
        ti: '.DescribeCoverageType'
      }, {
        en: 'CoverageSubtype',
        ti: 'QName'
      }]
  };
  return {
    WCS_2_0: WCS_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WCS_2_0_Module_Factory);
}
else {
  var WCS_2_0_Module = WCS_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WCS_2_0 = WCS_2_0_Module.WCS_2_0;
  }
  else {
    var WCS_2_0 = WCS_2_0_Module.WCS_2_0;
  }
}