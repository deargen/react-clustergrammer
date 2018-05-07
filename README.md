# react-clustergrammer

> React wrapper for clustergrammer

[![NPM](https://img.shields.io/npm/v/react-clustergrammer.svg)](https://www.npmjs.com/package/react-clustergrammer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
https://hobincar.github.io/react-clustergrammer/

## Install

```bash
$ npm install --save react-clustergrammer
```
or if you use yarn
```
yarn install --save react-clustergrammer
```

## Usage

```jsx
import React, { Component } from 'react'
import Clustergrammer from 'react-clustergrammer'

class Example extends Component {
  render () {
    const nRow = 100;
    const nCol = 100;
    const nCluster = 10;
    const nLink = 10000;

    return (
      <Clustergrammer
        network_data={{
          'row_nodes': Array(nRow).fill(0).map((_, i) => ({
            name: `ROW-${i}`,
            clust: parseInt(Math.random()*nCluster),
            rank: parseInt(Math.random()*10),
            rankvar: parseInt(Math.random()*10),
            group: [],
          })),
          'col_nodes': Array(nCol).fill(0).map((_, i) => ({
            name: `COL-${i}`,
            clust: parseInt(Math.random()*nCluster),
            rank: parseInt(Math.random()*10),
            rankvar: parseInt(Math.random()*10),
            group: [],
          })),
          'links': Array(nLink).fill(0).map(_ => ({
            source: parseInt(Math.random()*nRow),
            target: parseInt(Math.random()*nCol),
            value: Math.random() * 2 - 1,
          })),
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    )
  }
}
```

## License

MIT © [hobincar](https://github.com/hobincar)
