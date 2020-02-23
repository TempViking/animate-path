# animate-path

Simple path animation module

## Installation

    npm i animate-path

## Usage

```javascript
import animatePath from 'animate-path';

animatePath({
    duration: 1000,
    points: [
      {x: 0, y: 0},
      {x: 5, y: 3},
      {x: 0, y: 0},
    ],
}, ({x, y, deg}) => {
  // Do something like
  // element.setPosition(x, y, deg);
}).then(() => {
  alert('It`s finalized!');
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
