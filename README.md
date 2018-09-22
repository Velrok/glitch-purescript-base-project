Welcome to Glitch
=================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


Your Project
------------

This is a basic Purescript project.

The main file is `src/Main.purs`.
Purescript still uses bower to manage dependencies, so if you need any extra purescript packages, put them into `bower.json`.
We also have a npm `package.json` which installs the purescript tools, needed to compile and run your app.

## Haskell code highlighting for Glitch

You will have to run this javascript:

```js
application.editor().setOption("mode", "text/x-haskell");
CodeMirror.autoLoadMode(application.editor(), "haskell");
```

You can put that as a bookmarklet in your brower as described [here](https://support.glitch.com/t/code-highlighting-for-custom-file-extensions/1459)

CodeMirror is the js based editor glitch is using.


