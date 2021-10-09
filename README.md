# node-async-iterators-talk-examples

Examples from a talk about Node.js Async Iterators

This talk has been delivered in the following events:

  - Finding a lost song with Node.js & async iterators ([Node.js Dublin Meetup](https://www.meetup.com/Dublin-Node-js-Meetup/events/277664008)) - [Slides](https://loige.link/async-it)
  - Finding a lost song with Node.js & async iterators ([Sailsconf](https://www.sailsconf.com/)) - [Slides](https://loige.link/iter-sails) [Video](https://www.youtube.com/watch?v=yott9nYsEZ8)
  - Finding a lost song with Node.js & async iterators ([EnterJS](https://enterjs.de/)) - [Slides](https://loige.link/enter-iterators)
  - Finding a lost song with Node.js & async iterators ([NodeConf Remote](https://www.nodeconfremote.com/)) - [Slides](https://loige.link/nodeconf-iter)


## Install

**NOTE:** You will need at least **Node.js 16** to run some of the examples in this repository.

Install dependencies with:

```bash
npm install
```

## Last.fm API key

Some examples requires you to have a Last.fm API key. You can request one [here](https://www.last.fm/api/account/create).

Once you have an API key you can export it as an environment variable:

```bash
export API_KEY="mysupersecretlastfmapikey"
```

## Examples

All examples are available in the [`src`](/src) folder.

You can run them with `node`. For instance:

```bash
node src/07_iterable.js
```

## Complete last.fm history package

For a more "serious" library to fetch data from Last.fm check out [`scrobbles`](https://npm.im/scrobbles).


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/lmammino/node-async-iterators-talk-examples/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.


## Shameless plug 😇

<a href="https://www.nodejsdesignpatterns.com"><img width="240" align="right" src="https://github.com/lmammino/lmammino/blob/master/nodejsdp.jpg?raw=true"></a>

If you like this piece of work, consider supporting me by getting a copy of [Node.js Design Patterns, Third Edition](https://www.nodejsdesignpatterns.com/), which also goes into great depth about Streams and related design patterns.

If you already have this book, **please consider writing a review** on Amazon, Packt, GoodReads or in any other review channel that you generally use. That would support us greatly 🙏.