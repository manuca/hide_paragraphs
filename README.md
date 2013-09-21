# Hide Paragraphs

A very simple JQuery plugin that hides paragraphs that you don't want visible
at first glance. It is very useful for example when you only want to show the
first n paragraphs of a long text. The plugin automatically adds buttons at
the end of the truncated paragraphs to toggle the conceiled text visibility.

## Assumptions

- The plugin assumes there exists a container that contains several paragraphs
  as chlildren, please look at `text.html` for an example.
- The truncation occurs currently only at paragraph borders please take a look
  at [jTruncate](https://github.com/cybear/jTruncate) if you need to truncate
  at the paragraph level (show just n characters of a paragraph).

## Usage

Include `hide_paragraphs.js` in your HTML headers.

```javascript
$("container").hideParagraphs();
```

by default it show just the first paragraph.

or passing an options object:

```javascript
$("container").hideParagraphs(options);
```

## Default options

The `show` key is the number of paragraph you need to be visible. The rest is
self explanatory.

```javascript
{show: 1, show_text: "Show", hide_text: "Hide"}
```

For example to show 3 paragraphs:

```javascript
$("container").hideParagraphs({show: 3});
```
