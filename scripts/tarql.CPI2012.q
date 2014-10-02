PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX wgs: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX sdmx: <http://purl.org/linked-data/sdmx#>
PREFIX sdmx-concept: <http://purl.org/linked-data/sdmx/2009/concept#>
PREFIX sdmx-attribute: <http://purl.org/linked-data/sdmx/2009/attribute#>
PREFIX sdmx-dimension: <http://purl.org/linked-data/sdmx/2009/dimension#>
PREFIX sdmx-measure: <http://purl.org/linked-data/sdmx/2009/measure#>
PREFIX qb: <http://purl.org/linked-data/cube#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX year: <http://reference.data.gov.uk/id/year/>
PREFIX void: <http://rdfs.org/ns/void#>
PREFIX xkos: <http://purl.org/linked-data/xkos#>

PREFIX property: <http://transparency.270a.info/property/>
PREFIX dataset: <http://transparency.270a.info/dataset/>


CONSTRUCT {
    ?observationURI
        a qb:Observation ;
        sdmx-dimension:refArea ?referenceArea ;
        sdmx-dimension:refPeriod ?referencePeriod ;
        property:indicator <http://transparency.270a.info/classification/indicator/corruption-perceptions-index> ;
        property:score ?propertyScore ;
        property:rank ?propertyRank ;
    .
}
FROM <../data/CPI2012.csv>
WHERE {
    BIND (STR("2012") AS ?refPeriod)
    BIND (REPLACE(?refArea, "^ +| +$", '') AS ?rArea)
    BIND (URI(CONCAT("http://transparency.270a.info/dataset/corruption-perceptions-index/", ?refPeriod, "/", ?rArea)) AS ?observationURI)
   BIND (URI(CONCAT("http://transparency.270a.info/classification/country/", ?rArea)) AS ?referenceArea)
    BIND (URI(CONCAT("http://reference.data.gov.uk/id/year/", ?refPeriod)) AS ?referencePeriod)

    BIND (STRDT(REPLACE(?score, " +", ''), xsd:decimal) AS ?propertyScore)
    BIND (STRDT(REPLACE(?rank, " +", ''), xsd:integer) AS ?propertyRank)
}
OFFSET 1
