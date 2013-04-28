#!/bin/bash

libdata=/var/www/lib/transparency-linked-data/data
data=/data/transparency-linked-data/data

cp "$libdata"/country.nt "$data"/meta/
cp "$libdata"/meta.ttl "$data"/meta/
cp "$libdata"/transparency-sameAs-dbpedia_countries.nt "$data"/meta/
cp "$libdata"/transparency-sameAs-eurostat_countries.nt "$data"/meta/
cp "$libdata"/transparency-sameAs-geonames_countries.nt "$data"/meta/
cp "$libdata"/transparency-exactMatch-worldbank_countries.nt "$data"/meta/

cp "$libdata"/CPI*.ttl "$data"/corruption-perceptions-index/

cp "$libdata"/import/* "$data"/import/

cd "$data"/meta
tar -cvzf meta.tar.gz *
mv "$data"/meta/meta.tar.gz "$data"/

cd "$data"/corruption-perceptions-index
tar -cvzf corruption-perceptions-index.tar.gz *
mv "$data"/corruption-perceptions-index/corruption-perceptions-index.tar.gz "$data"/
