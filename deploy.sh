#!/bin/bash

cd back-end

mvn clean package
rc=$?
if [[ $rc == 1 ]] ;  then
    echo "Build failed and deploy terminated!"
    exit $rc
fi

scp target/jarjar/uber-team-bank.jar clouway@dev.telcong.com:/opt/telcong/bank

cd ..

cd front-end

grunt package

cd ..

scp -r frontend/ clouway@dev.telcong.com:/opt/telcong/bank

ssh clouway@dev.telcong.com sudo stop bank

ssh clouway@dev.telcong.com sudo start bank

scp target/jarjar/uber-team-bank.jar clouway@dev.telcong.com:/opt/telcong/bank

cd ..

cd front-end

grunt package

cd ..

scp -r frontend/ clouway@dev.telcong.com:/opt/telcong/bank

ssh clouway@dev.telcong.com sudo stop bank

ssh clouway@dev.telcong.com sudo start bank


