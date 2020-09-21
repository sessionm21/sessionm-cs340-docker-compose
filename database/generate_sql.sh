#!/bin/bash
cd "$(dirname "$0")"
cat sql/* > ./init/0_data.sql
chmod a+rx ./init/0_data.sql
