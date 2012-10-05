#!/bin/bash

TLDData="/var/www/lib/transparency-linked-data/data/";
TRANSPARENCY="http://transparency.270a.info/";
DBtransparency="/SSD/data/fuseki/DB/DB.transparency/";
Graphs="/home/sarcap/Graphs/";

tdbAssembler=/usr/lib/fuseki/tdb2.transparency.ttl;

#java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/void /var/www/transparency.270a.info/void.ttl;

java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"skos.rdf
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-attribute.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-dimension.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-code.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-concept.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-metadata.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"sdmx-subject.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"cube.ttl
#java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"reference.data.gov.uk.def.intervals.ttl
java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"reference.data.gov.uk.doc.year.ttl
#java tdb.tdbloader --desc="$tdbAssembler" --graph="$TRANSPARENCY"graph/meta "$Graphs"reference.data.gov.uk.doc.gregorian-instant.ttl

