var templates = {};

templates.newMovie = [
'<article class="col-md-4">',
'<h2><%= title %></h2>',
'<h3><%= director %></h3>',
'<p><%= synopsis %></p>',
'<img src=<%= poster %>/>',
'</article>'

].join("");
