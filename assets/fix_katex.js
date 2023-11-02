$(document).ready(function() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
      // Get the target tab's content
      var target = $(e.target).attr("href");
      var $target = $(target);
  
      // Re-render KaTeX for the content of the target tab
      $target.find('.katex-content').each(function() {
        var content = $(this).text();
        var rendered = katex.renderToString(content, { throwOnError: false });
        $(this).html(rendered);
      });
    });
  });  