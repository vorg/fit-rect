# fit-rect

![](screenshot.png)

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Fits one rectangle into another

## Usage

[![NPM](https://nodei.co/npm/fit-rect.png)](https://www.npmjs.com/package/fit-rect)

#### fitRect(rect, target, mode)

Parameters:  
`rect` - array [x,y,w,h]  
`target` - array [x,y,w,h]  
`mode`  - string 'contain' (default) or 'cover'

Returns rectangle `[x,y,w,h]`

```javascript
var fitRect = require('fit-rect');

var rect = [0, 0, 16, 9];
var target = [200, 200, 400, 400];
var containedRect = fitRect(rect, target, 'contain'); //[ 200, 287.5, 400, 225 ]
var coveringRect = fitRect(rect, target, 'cover');     //[ 44.4, 200, 711.1, 400 ]
```

## License

MIT, see [LICENSE.md](http://github.com/vorg/fit-rect/blob/master/LICENSE.md) for details.
