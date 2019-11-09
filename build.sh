#!/bin/bash

# build the project
ng build --base-href=/usajili-front

# remove everything in the upload folder
rm -rf /home/don/Code/usajili/*

# copy the new version
cp -r /home/don/Code/Projects/Angular/usajili/dist/usajili/* /home/don/Code/usajili/

# push the new version to github
cd /home/don/Code/usajili/
git add .
git commit -m 'New update'
git push -u origin/master
# pull changes in server

# bring done confirmation