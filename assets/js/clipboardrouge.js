---
layout: null
---

$('.btn').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn,message) {
  btn.firstChild.tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
  btn.firstChild.setAttribute('class', 'btn btn-success btn-sm mb-0 ');
    btn.setAttribute('aria-label', message);
}

function hideTooltip(btn) {
  setTimeout(function() {
    btn.firstChild.tooltip('hide');
  }, 1000);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setTooltip2(btn, message) {
    btn.firstChild.setAttribute('class', 'btn btn-success btn-sm mb-0 ');
    btn.setAttribute('aria-label', message);
    await sleep(500);
    btn.firstChild.setAttribute('class', 'btn btn-light btn-sm mb-0');
    btn.firstChild.removeAttribute('aria-label');
}

async function warningTooltip(btn, message) {
    btn.firstChild.setAttribute('class', 'btn btn-danger btn-sm mb-0 ');
    btn.setAttribute('aria-label', message);
    await sleep(500);
    btn.firstChild.setAttribute('class', 'btn btn-light btn-sm mb-0');
    btn.firstChild.removeAttribute('aria-label');
}

// adapted from https://experimentingwithcode.com/creating-a-jekyll-blog-with-bootstrap-4-and-sass-part-4/

$(document).ready(function() {
    $('.highlight').each(function(i) {
        if (!$(this).parent().hasClass('highlighter-rouge')) {

            // create an id for the current code section
            var currentId = "codeblock" + (i + 1);

            // find the code section and add the id to it
            var codeSection = $(this).find('code');
            codeSection.attr('id', currentId);

            // now create the button, setting the clipboard target to the id
            var btn = document.createElement('div');
            btn.setAttribute('type', 'btn');
            btn.classList.add('btn-copy-code', 'text-right', "mb-1");
            btn.setAttribute('data-clipboard-target', '#' + currentId);
            btn.innerHTML = '<p class="btn btn-light btn-sm mb-0 "><i class="far fa-copy"></i><span class="invisible"></span></p>';
            this.insertBefore(btn, this.firstChild);
        }
    });
});

var clipboard = new ClipboardJS('.btn-copy-code');

clipboard.on('success', function(e) {
var btn = $(e.trigger);

  var btn = $(e.trigger);
  e.clearSelection();
  setTooltip(btn,'Copied!');
  hideTooltip(btn);
});

clipboard.on('error', function(e) {
    var btn = $(e.trigger);
     e.clearSelection();
  setTooltip('Failed!');
  hideTooltip(btn);
});
