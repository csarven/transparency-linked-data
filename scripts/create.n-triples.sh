#!/bin/bash

rapper -gq /var/www/lib/transparency-linked-data/data/meta.ttl >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

cat /var/www/lib/transparency-linked-data/data/country.nt >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

cat /var/www/lib/transparency-linked-data/data/transparency-sameAs-dbpedia_countries.nt >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

cat /var/www/lib/transparency-linked-data/data/transparency-sameAs-eurostat_countries.nt >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

#cat /var/www/lib/transparency-linked-data/data/transparency-sameAs-geonames_countries.nt >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

cat /var/www/lib/transparency-linked-data/data/transparency-sameAs-worldbank_countries.nt >> /var/www/lib/transparency-linked-data/data/import/graph.meta.nt ;

for i in /var/www/lib/transparency-linked-data/data/CPI*.ttl; do rapper -gq "$i" >> /var/www/lib/transparency-linked-data/data/import/graph.transparency-international-corruption-perceptions-index.nt; done;
