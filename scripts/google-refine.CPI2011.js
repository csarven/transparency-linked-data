[
  {
    "op": "core/column-removal",
    "description": "Remove column © 2011 Transparency International. All rights reserved.",
    "columnName": "© 2011 Transparency International. All rights reserved."
  },
  {
    "op": "core/column-removal",
    "description": "Remove column Column",
    "columnName": "Column"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Country Rank to rank",
    "oldColumnName": "Country Rank",
    "newColumnName": "rank"
  },
  {
    "op": "core/column-removal",
    "description": "Remove column Country Rank 2",
    "columnName": "Country Rank 2"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Country / Territory to reference-area",
    "oldColumnName": "Country / Territory",
    "newColumnName": "reference-area"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column CPI 2011 Score to score",
    "oldColumnName": "CPI 2011 Score",
    "newColumnName": "score"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column 90 % Confidence Interval Lower bound to percentile-90-lower",
    "oldColumnName": "90 % Confidence Interval Lower bound",
    "newColumnName": "percentile-90-lower"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Higher bound to percentile-90-upper",
    "oldColumnName": "Higher bound",
    "newColumnName": "percentile-90-upper"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Minimun Maximum Range Max to maximum",
    "oldColumnName": "Minimun Maximum Range Max",
    "newColumnName": "maximum"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Min to minimum",
    "oldColumnName": "Min",
    "newColumnName": "minimum"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Surveys Used to surveys-used",
    "oldColumnName": "Surveys Used",
    "newColumnName": "surveys-used"
  },
  {
    "op": "core/column-rename",
    "description": "Rename column Standard Deviation to standard-deviation",
    "oldColumnName": "Standard Deviation",
    "newColumnName": "standard-deviation"
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
          "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55)",
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
                "expression": "\"http://transparency.270a.info/dataset/CPI2011\"",
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
                "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                "expression": "\"Corruption Perceptions Index of \" + cells[\"reference-area\"].value + \" in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/african-development-bank-country-policy-and-institutional-assessment-governance-ratings/2010\"",
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
                      "expression": "\"http://cpia.afdb.org/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from African Development Bank Governance Ratings in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/asian-development-bank-country-performance-assessment/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/asian-development-bank-country-performance-assessment/2010\"",
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
                      "expression": "\"http://beta.adb.org/sites/default/files/country-performance-assessment-ar-2010.pdf\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Asian Development Bank Country Performance Assessment in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/bertelsmann-foundation-sustainable-governance-indicators/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "BF_SGI",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "BF_SGI"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/bertelsmann-foundation-sustainable-governance-indicators/2011\"",
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
                      "expression": "\"http://www.sgi-network.org/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Bertelsmann Foundation Sustainable Governance Indicators in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/bertelsmann-foundation-transformation-index/2012/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2012\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/bertelsmann-foundation-transformation-index/2012\"",
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
                      "expression": "\"http://www.bertelsmann-transformation-index.de/en/bti/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Bertelsmann Foundation Transformation Index in 2012",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/economist-intelligence-unit-country-risk-assessment/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/economist-intelligence-unit-country-risk-assessment/2011\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Economist Intelligence Unit Country Risk Assessment in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/freedom-house-nations-in-transit/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/freedom-house-nations-in-transit/2011\"",
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
                      "expression": "\"http://www.freedomhouse.org/template.cfm?page=17\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Freedom House Nations In Transit in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/global-insight-country-risk-ratings/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/global-insight-country-risk-ratings/2011\"",
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
                      "expression": "\"http://www.ihs.com/products/global-insight/country-analysis/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Global Insight Country Risk Ratings in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/international-institute-for-management-development-world-competitiveness-yearbook/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://www.imd.org/wcy\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from IMD World Competitiveness Yearbook in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/international-institute-for-management-development-world-competitiveness-yearbook/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "IMD2011",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "IMD2011"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/international-institute-for-management-development-world-competitiveness-yearbook/2011\"",
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
                      "expression": "\"http://www.imd.org/wcy\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from IMD World Competitiveness Yearbook in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/political-and-economic-risk-consultancy-asian-intelligence/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Political and Economic Risk Consultancy Asian Intelligence in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/political-and-economic-risk-consultancy-asian-intelligence/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "PERC2011",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "PERC2011"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/political-and-economic-risk-consultancy-asian-intelligence/2011\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Political and Economic Risk Consultancy Asian Intelligence in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/political-risk-services-international-country-risk-guide/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "PRS_ICRG",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "PRS_ICRG"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/political-risk-services-international-country-risk-guide/2011\"",
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
                      "expression": "\"http://www.prsgroup.com/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Political Risk Services International Country Risk Guide in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/transparency-international-bribe-payers-survey/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "TI_BPI",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "TI_BPI"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/transparency-international-bribe-payers-survey/2011\"",
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
                      "expression": "\"http://www.transparency.org/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from Transparency International Bribe Payers Survey in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/world-bank-country-performance-and-institutional-assessment/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/world-bank-country-performance-and-institutional-assessment/2010\"",
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
                      "expression": "\"http://web.worldbank.org/WBSITE/EXTERNAL/EXTABOUTUS/IDA/0,,contentMDK:21359477~menuPK:2626968~pagePK:51236175~piPK:437394~theSitePK:73154,00.html\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from World Bank Country Performance and Institutional Assessment in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/world-economic-forum-executive-opinion-survey/2010/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from World Economic Forum Executive Opinion Survey in 2010\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/world-economic-forum-executive-opinion-survey/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WEF2011",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "WEF2011"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/world-economic-forum-executive-opinion-survey/2011\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from World Economic Forum Executive Opinion Survey in 2011\"",
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
                "expression": "if(value != null, \"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources/world-justice-project-rule-of-law-index/2011/\"+substring(cells[\"reference-area\"].recon.match.id, 53, 55), null)",
                "isRowNumberCell": false,
                "columnName": "WJP_ROL",
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
                      "expression": "\"http://transparency.270a.info/dataset/corruption-perceptions-index/2011/sources\"",
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
                      "columnName": "WJP_ROL"
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
                      "expression": "\"http://reference.data.gov.uk/id/year/2011\"",
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
                      "expression": "\"http://transparency.270a.info/classification/source/world-justice-project-rule-of-law-index/2011\"",
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
                      "expression": "\"http://worldjusticeproject.org/rule-of-law-index/\"",
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
                      "expression": "\"Corruption Perceptions Index 2011 for \" + value + \" from World Justice Project Rule of Law Index in 2011\"",
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
