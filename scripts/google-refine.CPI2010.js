[
  {
    "op": "core/column-rename",
    "description": "Rename column Country Rank rank to rank",
    "oldColumnName": "Country Rank rank",
    "newColumnName": "rank"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Country / Territory country to reference-area",
    "oldColumnName": "Country / Territory country",
    "newColumnName": "reference-area"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column CPI 2010 Score cpi2010 to score",
    "oldColumnName": "CPI 2010 Score cpi2010",
    "newColumnName": "score"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Surveys Used no_sources_a to surveys-used",
    "oldColumnName": "Surveys Used no_sources_a",
    "newColumnName": "surveys-used"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Standard Deviation roundstd to standard-deviation",
    "oldColumnName": "Standard Deviation roundstd",
    "newColumnName": "standard-deviation"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Minimun Maximum Range Min roundmin to minimum",
    "oldColumnName": "Minimun Maximum Range Min roundmin",
    "newColumnName": "minimum"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Max roundmax to maximum",
    "oldColumnName": "Max roundmax",
    "newColumnName": "maximum"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column 90 % Confidence Interval Lower bound roundbs_btm90 to percentile-90-lower",
    "oldColumnName": "90 % Confidence Interval Lower bound roundbs_btm90",
    "newColumnName": "percentile-90-lower"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Higher bound roundbs_top90 to percentile-90-upper",
    "oldColumnName": "Higher bound roundbs_top90",
    "newColumnName": "percentile-90-upper"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column ADB 2009 roundstadb2009_beta_d1 to ADB",
    "oldColumnName": "ADB 2009 roundstadb2009_beta_d1",
    "newColumnName": "ADB"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column AfDB 2009 roundstafdb2009_beta_d1 to AFDB",
    "oldColumnName": "AfDB 2009 roundstafdb2009_beta_d1",
    "newColumnName": "AFDB"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column BF 2009 roundstbti2009_beta_d1 to BF_TI",
    "oldColumnName": "BF 2009 roundstbti2009_beta_d1",
    "newColumnName": "BF_TI"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column EIU 2010 roundsteiu2010_beta_d1 to EIU_CRR",
    "oldColumnName": "EIU 2010 roundsteiu2010_beta_d1",
    "newColumnName": "EIU_CRR"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column FH 2010 roundstnit2010_beta_d1 to FH_NIT",
    "oldColumnName": "FH 2010 roundstnit2010_beta_d1",
    "newColumnName": "FH_NIT"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column GI 2010 roundstgi2010_beta_d1 to GI_CRR",
    "oldColumnName": "GI 2010 roundstgi2010_beta_d1",
    "newColumnName": "GI_CRR"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column IMD 2009 roundstimd2009_beta_d1 to IMD2009",
    "oldColumnName": "IMD 2009 roundstimd2009_beta_d1",
    "newColumnName": "IMD2009"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column IMD 2010 roundstimd2010_beta_d1 to IMD2010",
    "oldColumnName": "IMD 2010 roundstimd2010_beta_d1",
    "newColumnName": "IMD2010"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column PERC2009 roundstperc2009_beta_d1 to PERC2009",
    "oldColumnName": "PERC2009 roundstperc2009_beta_d1",
    "newColumnName": "PERC2009"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column PERC2010 roundstperc2010_beta_d1 to PERC2010",
    "oldColumnName": "PERC2010 roundstperc2010_beta_d1",
    "newColumnName": "PERC2010"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WB 2009 roundstcpia2009_beta_d1 to WB_CPIA",
    "oldColumnName": "WB 2009 roundstcpia2009_beta_d1",
    "newColumnName": "WB_CPIA"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WEF 2009 roundstwef2009_beta_d1 to WEF2009",
    "oldColumnName": "WEF 2009 roundstwef2009_beta_d1",
    "newColumnName": "WEF2009"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column WEF 2010 roundstwef2010_beta_d1 to WEF2010",
    "oldColumnName": "WEF 2010 roundstwef2010_beta_d1",
    "newColumnName": "WEF2010"
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
    "description": "Match topic Sao Tome & Principe (http://transparency.270a.info/classification/country/ST) for cells containing \"Sao Tome and Principe\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "invert": false,
          "selectError": false,
          "omitError": false,
          "name": "reference-area: judgment",
          "selectBlank": false,
          "columnName": "reference-area",
          "omitBlank": false,
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
    "description": "Match topic Congo Republic (http://transparency.270a.info/classification/country/CG) for cells containing \"Congo-Brazzaville\" in column reference-area",
    "engineConfig": {
      "facets": [
        {
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "invert": false,
          "selectError": false,
          "omitError": false,
          "name": "reference-area: judgment",
          "selectBlank": false,
          "columnName": "reference-area",
          "omitBlank": false,
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
    "similarValue": "Congo-Brazzaville",
    "judgment": "matched",
    "match": {
      "id": "http://transparency.270a.info/classification/country/CG",
      "name": "Congo Republic",
      "score": 0.4117646813392639,
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
          "expression": "forNonBlank(cell.recon.judgment, v, v, if(isNonBlank(value), \"(unreconciled)\", \"(blank)\"))",
          "invert": false,
          "selectError": false,
          "omitError": false,
          "name": "reference-area: judgment",
          "selectBlank": false,
          "columnName": "reference-area",
          "omitBlank": false,
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
          "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55)",
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
                "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010\"",
                "isRowNumberCell": true,
                "rdfTypes": [],
                "links": []
              }
            },
            {
              "uri": "http://transparency.270a.info/property/indicator",
              "curie": "property:indicator",
              "target": {
                "nodeType": "cell-as-resource",
                "expression": "\"http://transparency.270a.info/classification/indicator/corruption-perceptions-index\"",
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
                "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
              "uri": "http://qudt.org/1.1/schema/qudt#standardUncertainty",
              "curie": "qudt:standardUncertainty",
              "target": {
                "nodeType": "cell-as-literal",
                "expression": "value",
                "isRowNumberCell": false,
                "valueType": "http://www.w3.org/2001/XMLSchema#decimal",
                "columnName": "standard-deviation"
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
                "expression": "\"Corruption Perceptions Index of \" + cells[\"reference-area\"].value + \" in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/asian-development-bank-country-performance-assessment/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "ADB"
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
                      "expression": "\"http://transparency.270a.info/classification/source/asian-development-bank-country-performance-assessment/2009\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.adb.org/Documents/Reports/Country-Performance-Assessment-Exercise/default.asp\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Asian Development Bank Country Performance Assessment in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "AFDB"
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
                      "expression": "\"http://transparency.270a.info/classification/source/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2009\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.afdb.org/pls/portal/url/ITEM/5008432D529957FAE040C00A0C3D3A86\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from African Development Bank Governance Ratings in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/bertelsmann-foundation-transformation-index/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "BF_TI"
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.bertelsmann-transformation-index.de/english\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Bertelsmann Foundation Transformation Index in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/economist-intelligence-unit-country-risk-assessment/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "EIU_CRR"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/economist-intelligence-unit-country-risk-assessment/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.eiu.com/\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Economist Intelligence Unit Country Risk Assessment in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/freedom-house-nations-in-transit/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "FH_NIT"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/freedom-house-nations-in-transit/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.freedomhouse.hu/index.php?option=com_content&task=view&id=196\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Freedom House Nations In Transit in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/global-insight-country-risk-ratings/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "GI_CRR"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/global-insight-country-risk-ratings/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.globalinsight.com\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Global Insight Country Risk Ratings in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/international-institute-for-management-development-world-competitiveness-yearbook/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "IMD2009"
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.imd.ch/wcc\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from IMD World Competitiveness Yearbook in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/international-institute-for-management-development-world-competitiveness-yearbook/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "IMD2010",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "IMD2010"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/international-institute-for-management-development-world-competitiveness-yearbook/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.imd.ch/wcc\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from IMD World Competitiveness Yearbook in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/political-and-economic-risk-consultancy-asian-intelligence/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "PERC2009"
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.asiarisk.com/\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Political and Economic Risk Consultancy Asian Intelligence in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/political-and-economic-risk-consultancy-asian-intelligence/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "PERC2010",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "PERC2010"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/political-and-economic-risk-consultancy-asian-intelligence/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.asiarisk.com/\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from Political and Economic Risk Consultancy Asian Intelligence in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/world-bank-country-performance-and-institutional-assessment/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "WB_CPIA"
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
                      "expression": "\"http://transparency.270a.info/classification/source/world-bank-country-performance-and-institutional-assessment/2009\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://go.worldbank.org/S2THWI1X60\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from World Bank Country Performance and Institutional Assessment in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/world-economic-forum-executive-opinion-survey/2009/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "WEF2009"
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.weforum.org/\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from World Economic Forum Executive Opinion Survey in 2009\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources/world-economic-forum-executive-opinion-survey/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WEF2010",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2010/sources\"",
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
                      "columnName": "WEF2010"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2010\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/world-economic-forum-executive-opinion-survey/2010\"",
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
                    "uri": "http://purl.org/dc/terms/source",
                    "curie": "dcterms:source",
                    "target": {
                      "nodeType": "cell-as-resource",
                      "expression": "\"http://www.weforum.org/\"",
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
                      "expression": "\"Corruption Perceptions Index 2010 for \" + value + \" from World Economic Forum Executive Opinion Survey in 2010\"",
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
