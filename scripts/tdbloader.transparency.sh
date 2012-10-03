#!/bin/bash

TLDData="/var/www/lib/transparency-linked-data/data/";
TRANSPARENCY="http://transparency.270a.info/";
DBtransparency="/usr/lib/fuseki/DB/DB.transparency/";

echo "Removing $DBtransparency";
rm -rf "$DBtransparency";

echo "Removing $TLDData""CPI20*.ttl";
rm "$TLDData""CPI20*.ttl";

echo "Copying ~/Downloads/CPI2*.ttl to $TLDData";
cp ~/Downloads/CPI2*.ttl "$TLDData";


tdbAssembler=/usr/lib/fuseki/tdb2.transparency.ttl;

java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$TLDData"meta.ttl;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$TLDData"country.nt;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$TLDData"transparency-sameAs-eurostat_countries.nt;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$TLDData"transparency-sameAs-dbpedia_countries.nt;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$TLDData"transparency-sameAs-worldbank_countries.nt;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/corruption-perceptions-index "$TLDData"CPI2009.ttl;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/corruption-perceptions-index "$TLDData"CPI2010.ttl;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/corruption-perceptions-index "$TLDData"CPI2011.ttl;


java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/skos.rdf
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx-dimension.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx-code.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx-concept.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx-metadata.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/sdmx-subject.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/cube.ttl
#java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/reference.data.gov.uk.def.intervals.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/reference.data.gov.uk.doc.year.ttl
#java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta /home/csarven/Graphs/reference.data.gov.uk.doc.gregorian-instant.ttl


java tdb.tdbstats --loc="$DBtransparency" --graph=urn:x-arq:UnionGraph > "$DBtransparency"stats2.opt;

mv "$DBtransparency"stats.opt "$DBtransparency"stats.bak;
mv "$DBtransparency"stats2.opt "$DBtransparency"stats.opt;
