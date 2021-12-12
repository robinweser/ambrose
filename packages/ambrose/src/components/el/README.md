El is a low-level primitive just like Box is, but without any default styles.
It is especially useful when styling native elements such as `table`, `tr`, etc. which break with `display: flex`.

```js
<El as="table">
  <El as="tr">
    <El as="td" extend={{ border: '1px solid green' }}>
      Hello
    </El>
    <El as="td" extend={{ border: '1px solid green' }}>
      World
    </El>
  </El>
</El>
```
