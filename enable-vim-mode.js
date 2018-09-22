(function () {   
  var makeCursorFat = function() {     
    var style = document.createElement('style');     
    style.textContent = 'div.CodeMirror div.CodeMirror-cursor { ' 
      +       'width: auto; ' 
      +       'border: 0; ' 
      +       'background: transparent; ' 
      +       'background: rgba(0, 200, 0, .4); ' 
      +     '} ';     
    document.head.appendChild(style);   
  };  
  
  var addScript = function(callback) {     
    var scr = document.createElement('script');     
    scr.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.22.0/keymap/vim.js';     
    scr.onload = callback;     
    document.head.appendChild(scr);   
  };
  
  var retryInterval = 1000;    
  var vimify = function () {     
    var editorElement = document.querySelector('#text-editor > div.CodeMirror');      
    if (editorElement) {
      application.editor().setOption("keyMap", "vim");
      application.editor().setOption("showCursorWhenSelecting", "vim");
      CodeMirror
      makeCursorFat();       
      console.log('VIMification complete!');     
    } else {       
      retryInterval = retryInterval * 2;       
      if (retryInterval < 20000) {         
        console.log('Retrying to VIMify... ' + 100);         
        window.setTimeout(vimify, retryInterval);       
      };
      return;     
    };
  };    
})()

javascript:(function() {   application.editor().setOption("mode", "text/x-haskell"); CodeMirror.autoLoadMode(application.editor(), "haskell"); })()