# Hide Paragraphs

A very simple JQuery plugin that hides paragraphs that you don't want visible
at first glance. It is very useful for example when you only want to show the
first n paragraphs of a long text. The plugin automatically adds buttons at
the end of the truncated paragraphs to toggle the concealed text visibility.

## Demo

![Demo](https://raw.github.com/manuca/hide_paragraphs/master/demo.gif)

## Installation

- Include `hide_paragraphs.js` in your HTML headers after JQuery.
- You are done

## Usage

```javascript
$("container selector").hideParagraphs();
```

by default it show just the first paragraph.

or passing an options object (see options below):

```javascript
$("container selector").hideParagraphs(options);
```

## Assumptions

- The plugin assumes there exists a container that contains several paragraphs
  as chlildren, please look at `test.html` for an example.
- The truncation occurs currently only at paragraph borders please take a look
  at [jTruncate](https://github.com/cybear/jTruncate) if you need to truncate
  at the paragraph level (show just n characters of a paragraph).

## Default options

The `show` key is the number of paragraph you need to be visible. The rest is
self explanatory.

```javascript
{show: 1, show_text: "Show more", hide_text: "Hide"}
```

For example to show 3 paragraphs:

```javascript
$("container selector").hideParagraphs({show: 3});
```

## Link customization

The links added to the HTML contain a class of `.hp-links` so you can use this
to customize CSS for them.
