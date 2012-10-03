[
  {
    "op": "core/column-rename",
    "description": "Rename column Rank to rank",
    "oldColumnName": "Rank",
    "newColumnName": "rank"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Country/Territory to reference-area",
    "oldColumnName": "Country/Territory",
    "newColumnName": "reference-area"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column CPI 2009 Score to score",
    "oldColumnName": "CPI 2009 Score",
    "newColumnName": "score"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Surveys Used to surveys-used",
    "oldColumnName": "Surveys Used",
    "newColumnName": "surveys-used"
  },
  {
    "op": "core/column-split",
    "description": "Split column Confidence Range by separator",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Confidence Range",
    "guessCellType": true,
    "removeOriginalColumn": true,
    "mode": "separator",
    "separator": " - ",
    "regex": false,
    "maxColumns": 2
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Confidence Range 1 to percentile-90-lower",
    "oldColumnName": "Confidence Range 1",
    "newColumnName": "percentile-90-lower"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Confidence Range 2 to percentile-90-upper",
    "oldColumnName": "Confidence Range 2",
    "newColumnName": "percentile-90-upper"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column ADB 2008 to ADB",
    "oldColumnName": "ADB 2008",
    "newColumnName": "ADB"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column AfDB 2008 to AFDB",
    "oldColumnName": "AfDB 2008",
    "newColumnName": "AFDB"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column BF 2009 to BF_TI",
    "oldColumnName": "BF 2009",
    "newColumnName": "BF_TI"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column EIU 2009 to EIU_CRR",
    "oldColumnName": "EIU 2009",
    "newColumnName": "EIU_CRR"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column FH 2009 to FH_NIT",
    "oldColumnName": "FH 2009",
    "newColumnName": "FH_NIT"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column GI 2009 to GI_CRR",
    "oldColumnName": "GI 2009",
    "newColumnName": "GI_CRR"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column IMD 2008 to IMD2008",
    "oldColumnName": "IMD 2008",
    "newColumnName": "IMD2008"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column IMD 2009 to IMD2009",
    "oldColumnName": "IMD 2009",
    "newColumnName": "IMD2009"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WB 2008 to WB_CPIA",
    "oldColumnName": "WB 2008",
    "newColumnName": "WB_CPIA"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WEF 2008 to WEF2008",
    "oldColumnName": "WEF 2008",
    "newColumnName": "WEF2008"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WEF 2009 to WEF2009",
    "oldColumnName": "WEF 2009",
    "newColumnName": "WEF2009"
  },
  {
    "op": "core/recon",
    "description": "Reconcile cells in column reference-area to type http://dbpedia.org/ontology/Country",
    "columnName": "reference-area",
    "config": {
      "mode": "standard-service",
      "service": "http://127.0.0.1:3333/extension/rdf-extension/services/transparency.country.nt",
      "identifierSpace": "http://www.ietf.org/rfc/rfc3986",
      "schemaSpace": "http://www.ietf.org/rfc/rfc3986",
      "type": {
        "id": "http://dbpedia.org/ontology/Country",
        "name": "dbo:Country"
      },
      "autoMatch": true,
      "columnDetails": []
    },
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    }
  },
  {
    "op": "core/recon-judge-similar-cells",
    "description": "Match topic Brunei (http://transparency.270a.info/classification/country/BN) for cells containing \"Brunei Darussalam\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "reference-area: judgment",
          "omitBlank": false,
          "columnName": "reference-area",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": "none",
                "l": "none"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    },
    "columnName": "reference-area",
    "similarValue": "Brunei Darussalam",
    "judgment": "matched",
    "match": {
      "id": "http://transparency.270a.info/classification/country/BN",
      "name": "Brunei",
      "score": 0.3529411554336548,
      "types": [
        ""
      ]
    },
    "shareNewTopics": false
  },
  {
    "op": "core/recon-judge-similar-cells",
    "description": "Match topic Sao Tome & Principe (http://transparency.270a.info/classification/country/ST) for cells containing \"Sao Tome and Principe\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "reference-area: judgment",
          "omitBlank": false,
          "columnName": "reference-area",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": "none",
                "l": "none"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    },
    "columnName": "reference-area",
    "similarValue": "Sao Tome and Principe",
    "judgment": "matched",
    "match": {
      "id": "http://transparency.270a.info/classification/country/ST",
      "name": "Sao Tome & Principe",
      "score": 0.8571428656578064,
      "types": [
        ""
      ]
    },
    "shareNewTopics": false
  },
  {
    "op": "core/recon-judge-similar-cells",
    "description": "Match topic Congo Republic (http://transparency.270a.info/classification/country/CG) for cells containing \"Congo Brazzaville\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "reference-area: judgment",
          "omitBlank": false,
          "columnName": "reference-area",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": "none",
                "l": "none"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    },
    "columnName": "reference-area",
    "similarValue": "Congo Brazzaville",
    "judgment": "matched",
    "match": {
      "id": "http://transparency.270a.info/classification/country/CG",
      "name": "Congo Republic",
      "score": 0.47058820724487305,
      "types": [
        ""
      ]
    },
    "shareNewTopics": false
  },
  {
    "op": "core/recon-judge-similar-cells",
    "description": "Match topic Democratic Republic of the Congo  (http://transparency.270a.info/classification/country/CD) for cells containing \"Democratic Republic of Congo\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "invert": false,
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "selectError": false,
          "omitError": false,
          "selectBlank": false,
          "name": "reference-area: judgment",
          "omitBlank": false,
          "columnName": "reference-area",
          "type": "list",
          "selection": [
            {
              "v": {
                "v": "none",
                "l": "none"
              }
            }
          ]
        }
      ],
      "mode": "row-based"
    },
    "columnName": "reference-area",
    "similarValue": "Democratic Republic of Congo",
    "judgment": "matched",
    "match": {
      "id": "http://transparency.270a.info/classification/country/CD",
      "name": "Democratic Republic of the Congo ",
      "score": 0.8484848737716675,
      "types": [
        ""
      ]
    },
    "shareNewTopics": false
  },
  {
    "op": "rdf-extension/save-rdf-schema",
    "description": "Save RDF schema skeleton",
    "schema": {
      "baseUri": "http://transparency.270a.info/",
      "prefixes": [
        {
          "name": "foaf",
          "uri": "http://xmlns.com/foaf/0.1/"
        },
        {
          "name": "sdmx-attribute",
          "uri": "http://purl.org/linked-data/sdmx/2009/attribute#"
        },
        {
          "name": "property",
          "uri": "http://transparency.270a.info/property/"
        },
        {
          "name": "qb",
          "uri": "http://purl.org/linked-data/cube#"
        },
        {
          "name": "qudt",
          "uri": "http://qudt.org/1.1/schema/qudt#"
        },
        {
          "name": "dcterms",
          "uri": "http://purl.org/dc/terms/"
        },
        {
          "name": "rdfs",
          "uri": "http://www.w3.org/2000/01/rdf-schema#"
        },
        {
          "name": "source",
          "uri": "http://transparency.270a.info/classification/source/"
        },
        {
          "name": "classification",
          "uri": "http://transparency.270a.info/classification/"
        },
        {
          "name": "xsd",
          "uri": "http://www.w3.org/2001/XMLSchema#"
        },
        {
          "name": "owl",
          "uri": "http://www.w3.org/2002/07/owl#"
        },
        {
          "name": "rdf",
          "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        },
        {
          "name": "skos",
          "uri": "http://www.w3.org/2004/02/skos/core#"
        },
        {
          "name": "sdmx-dimension",
          "uri": "http://purl.org/linked-data/sdmx/2009/dimension#"
        },
        {
          "name": "wbp",
          "uri": "http://worldbank.270a.info/property/"
        }
      ],
      "rootNodes": [
        {
          "nodeType": "cell-as-resource",
          "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55)",
          "isRowNumberCell": true,
          "rdfTypes": [
            {
              "uri": "http://purl.org/linked-data/cube#Observation",
              "curie": "qb:Observation"
            }
          ],
          "links": [
            {
              "uri": "http://purl.org/linked-data/cube#dataSet",
              "curie": "qb:dataSet",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index\"",
                "isRowNumberCell": true,
                "rdfTypes": [],
                "links": []
              }
            },
            {
              "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
              "curie": "sdmx-dimension:refArea",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "cell.recon.match.id",
                "isRowNumberCell": false,
                "columnName": "reference-area",
                "rdfTypes": [],
                "links": []
              }
            },
            {
              "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
              "curie": "sdmx-dimension:refPeriod",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                "isRowNumberCell": true,
                "rdfTypes": [],
                "links": []
              }
            },
            {
              "uri": "http://transparency.270a.info/property/score",
              "curie": "property:score",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#decimal",
                "columnName": "score"
              }
            },
            {
              "uri": "http://transparency.270a.info/property/rank",
              "curie": "property:rank",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#int",
                "columnName": "rank"
              }
            },
            {
              "uri": "http://transparency.270a.info/property/surveys-used",
              "curie": "property:surveys-used",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#int",
                "columnName": "surveys-used"
              }
            },
            {
              "uri": "http://transparency.270a.info/property/percentile-90-lower",
              "curie": "property:percentile-90-lower",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#decimal",
                "columnName": "percentile-90-lower"
              }
            },
            {
              "uri": "http://transparency.270a.info/property/percentile-90-upper",
              "curie": "property:percentile-90-upper",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#decimal",
                "columnName": "percentile-90-upper"
              }
            },
            {
              "uri": "http://www.w3.org/2000/01/rdf-schema#label",
              "curie": "rdfs:label",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "\"Corruption Perceptions Index of \" + cells[\"reference-area\"].value + \" in 2009\"",
                "isRowNumberCell": true,
                "lang": "en"
              }
            },
            {
              "uri": "http://purl.org/linked-data/sdmx/2009/attribute#recording",
              "curie": "sdmx-attribute:recording",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "\"http://dbpedia.org/resource/Arithmetic_mean\"",
                "isRowNumberCell": true,
                "rdfTypes": [],
                "links": []
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/asian-development-bank-country-performance-assessment/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "ADB",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/asian-development-bank-country-performance-assessment/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Asian Development Bank Country Performance Assessment in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "AFDB",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from African Development Bank Governance Ratings in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/bertelsmann-foundation-transformation-index/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "BF_TI",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/bertelsmann-foundation-transformation-index/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Bertelsmann Foundation Transformation Index in 2010 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/economist-intelligence-unit-country-risk-assessment/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "EIU_CRR",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/economist-intelligence-unit-country-risk-assessment/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Economist Intelligence Unit Country Risk Assessment in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/freedom-house-nations-in-transit/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "FH_NIT",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/freedom-house-nations-in-transit/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Freedom House Nations In Transit in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/global-insight-country-risk-ratings/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "GI_CRR",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/global-insight-country-risk-ratings/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Global Insight Country Risk Ratings in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/international-institute-for-management-development-world-competitiveness-yearbook/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "IMD2008",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/international-institute-for-management-development-world-competitiveness-yearbook/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from IMD World Competitiveness Yearbook in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/international-institute-for-management-development-world-competitiveness-yearbook/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "IMD2009",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/international-institute-for-management-development-world-competitiveness-yearbook/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from IMD World Competitiveness Yearbook in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/political-and-economic-risk-consultancy-asian-intelligence/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "PERC2008",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/political-and-economic-risk-consultancy-asian-intelligence/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Political and Economic Risk Consultancy Asian Intelligence in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/political-and-economic-risk-consultancy-asian-intelligence/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "PERC2009",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/political-and-economic-risk-consultancy-asian-intelligence/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from Political and Economic Risk Consultancy Asian Intelligence in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/world-bank-country-performance-and-institutional-assessment/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WB_CPIA",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/world-bank-country-performance-and-institutional-assessment/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from World Bank Country Performance and Institutional Assessment in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/world-economic-forum-executive-opinion-survey/2008/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WEF2008",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/world-economic-forum-executive-opinion-survey/2008\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from World Economic Forum Executive Opinion Survey in 2008 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            },
            {
              "uri": "http://purl.org/dc/terms/source",
              "curie": "dcterms:source",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/sources/world-economic-forum-executive-opinion-survey/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WEF2009",
                "rdfTypes": [
                  {
                    "uri": "http://purl.org/linked-data/cube#Observation",
                    "curie": "qb:Observation"
                  }
                ],
                "links": [
                  {
                    "uri": "http://purl.org/linked-data/cube#dataSet",
                    "curie": "qb:dataSet",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/dataset/sources\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refArea",
                    "curie": "sdmx-dimension:refArea",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "cell.recon.match.id",
                      "isRowNumberCell": false,
                      "columnName": "reference-area",
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod",
                    "curie": "sdmx-dimension:refPeriod",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://reference.data.gov.uk/id/year/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://transparency.270a.info/property/source",
                    "curie": "property:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/source/world-economic-forum-executive-opinion-survey/2009\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://purl.org/linked-data/sdmx/2009/attribute#adjustment",
                    "curie": "sdmx-attribute:adjustment",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://transparency.270a.info/classification/attribute/matching-percentiles\"",
                      "isRowNumberCell": true,
                      "rdfTypes": [],
                      "links": []
                    }
                  },
                  {
                    "uri": "http://www.w3.org/2000/01/rdf-schema#label",
                    "curie": "rdfs:label",
                    "target": {
                      "nodeType": "cell-as-literal",
                      "expression": "\"Assessment from World Economic Forum Executive Opinion Survey in 2009 for \" + value",
                      "isRowNumberCell": false,
                      "lang": "en",
                      "columnName": "reference-area"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  }
]
