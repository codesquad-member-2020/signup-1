#!/usr/bin/env bash
SCRIPT_PATH="$( cd "$( dirname "$BASH_SOURCE" )" && pwd -P )"
if [[ $SCRIPT_PATH == *"FE"* ]] || [[ $SCRIPT_PATH == *"fe"* ]]; then
  echo "bundling..."
  npx webpack
  echo "remove static area"
  rm -rf ../BE/src/main/resources/static/*
  echo "copy bundled files into static area"
  cp -rf ./dist/ ../BE/src/main/resources/static
fi
echo "jobs done!!"