#!/bin/bash

data="/var/www/lib/transparency-linked-data/data/";
namespace="http://transparency.270a.info/";
db="/SSD/data/fuseki/DB/DB.transparency/";
graphs="/home/sarcap/Graphs/";
tdbAssembler="/usr/lib/fuseki/tdb.transparency.ttl";
JVM_ARGS="-Xmx16000M";

echo "Removing $db";
rm -rf "$db";

java tdb.tdbloader --desc="$tdbAssembler" --graph="$namespace"graph/meta "$data"import/graph.meta.nt;
java tdb.tdbloader --desc="$tdbAssembler" --graph="$namespace"graph/corruption-perceptions-index "$data"import/graph.transparency-international-corruption-perceptions-index.nt;


java tdb.tdbstats --loc="$db" --graph=urn:x-arq:UnionGraph > "$db"stats2.opt;

mv "$db"stats.opt "$db"stats.bak;
mv "$db"stats2.opt "$db"stats.opt;
