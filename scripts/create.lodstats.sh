#!/bin/bash

. $HOME/lodstats-env/bin/activate

libdataimport=/var/www/lib/transparency-linked-data/data/import
cd "$libdataimport"
rm *stats*

lodstats -val "$libdataimport"/graph.meta.nt > "$libdataimport"/graph.meta.nt.stats.ttl
echo "Created $libdataimport/graph.meta.nt.stats.ttl"
lodstats -val "$libdataimport"/graph.transparency-international-corruption-perceptions-index.nt > "$libdataimport"/graph.transparency-international-corruption-perceptions-index.nt.stats.ttl
echo "Created $libdataimport/graph.transparency-international-corruption-perceptions-index.nt.stats.ttl"

