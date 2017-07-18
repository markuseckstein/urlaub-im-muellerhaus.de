#!/bin/bash

BASEDIR=$(dirname "$0")
out=$BASEDIR/for_website


mkdir $out/img
mkdir $out/img/gallery
mkdir $out/img/gallery/garten
mkdir $out/img/gallery/garten/thumbs
mkdir $out/img/gallery/umgebung
mkdir $out/img/gallery/umgebung/thumbs
mkdir $out/img/gallery/wohnungen
mkdir $out/img/gallery/wohnungen/thumbs

cd $BASEDIR/header_images
mkdir header_thumbs
gm mogrify -output-directory header_thumbs -resize 1500x1200 -auto-orient *.jpg
gm mogrify -output-directory header_thumbs -resize 2000x1500 -auto-orient index_header.jpg
cp logo-muellerhaus.png header_thumbs
mv header_thumbs/* ../$out/img
rmdir header_thumbs


cd ..
cd $BASEDIR/gallery_images

for category in garten umgebung wohnungen
do
    echo "Category $category"
    cd $category
    mkdir optimized
    gm mogrify -output-directory optimized -resize 1200x821 -auto-orient *.jpg
    mkdir thumbs
    gm mogrify -output-directory thumbs -resize 280x192 -auto-orient *.jpg
    mv optimized/* ../../for_website/img/gallery/$category
    mv thumbs/* ../../for_website/img/gallery/$category/thumbs
    rmdir optimized
    rmdir thumbs
    cd ..
done


