var selectCodeOn = true,
  htmlMTContent = "&lt;html&gt;<br>",
  htmlIEContent =
    '&lt;!--[if lte IE 6]&gt;&lt;html class="preIE7 preIE8 preIE9"&gt;&lt;![endif]--&gt;<br>&lt;!--[if IE 7]&gt;&lt;html class="preIE8 preIE9"&gt;&lt;![endif]--&gt;<br>&lt;!--[if IE 8]&gt;&lt;html class="preIE9"&gt;&lt;![endif]--&gt;<br>&lt;!--[if gte IE 9]&gt;&lt;!--&gt;&lt;html&gt;&lt;!--&lt;![endif]--&gt;<br>',
  xuaContent =
    "&nbsp;&nbsp;&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;&gt;<br>",
  viewportContent =
    "&nbsp;&nbsp;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;<br>",
  commonMetasContent =
    '&nbsp;&nbsp;&lt;meta name=&quot;author&quot; content=&quot;<span class="edit" onclick="editText(\'Enter author name\',this);">name</span>&quot;&gt;<br>&nbsp;&nbsp;&lt;meta name=&quot;description&quot; content=&quot;<span class="edit" onclick="editText(\'Enter page description\',this);">description here</span>&quot;&gt;<br>&nbsp;&nbsp;&lt;meta name=&quot;keywords&quot; content=&quot;<span class="edit" onclick="editText(\'Enter page keywords\',this);">keywords,here</span>&quot;&gt;<br>',
  faviconContent =
    '&nbsp;&nbsp;&lt;link rel=&quot;shortcut icon&quot; href=&quot;<span class="edit" onclick="editText(\'Enter favicon URL\',this);">favicon.ico</span>&quot; type=&quot;image/vnd.microsoft.icon&quot;&gt;<br>',
  googleWebFontContent =
    '&nbsp;&nbsp;&lt;link rel="stylesheet" href="//fonts.googleapis.com/css?family=<span class="edit" onclick="editText(\'Enter font names\',this);">font1|font2|etc</span>" type="text/css"&gt;<br>',
  linkedCSSContent =
    '&nbsp;&nbsp;&lt;link rel=&quot;stylesheet&quot; href=&quot;<span class="edit" onclick="editText(\'Enter stylesheet URL\',this);">stylesheet.css</span>&quot; type=&quot;text/css&quot;&gt;<br>',
  embeddedCSSContent =
    "&nbsp;&nbsp;&lt;style type=&quot;text/css&quot;&gt;<br>&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&lt;/style&gt;<br>",
  analyticsContent =
    "&nbsp;&nbsp;&lt;script type=&quot;text/javascript&quot;&gt;<br/>&nbsp;&nbsp;&nbsp;var _gaq = _gaq || [];<br/>&nbsp;&nbsp;&nbsp;_gaq.push(['_setAccount', '<span class=\"edit\" onclick=\"editText('Enter tracking ID',this);\">UA-XXXXXXXX-Y</span>']);<br/>&nbsp;&nbsp;&nbsp;_gaq.push(['_trackPageview']);<br/>&nbsp;&nbsp;&nbsp;(function()<br/>&nbsp;&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';<br/>&nbsp;&nbsp;&nbsp;&nbsp;var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);<br/>&nbsp;&nbsp;&nbsp;})();<br/>&nbsp;&nbsp;&lt;/script&gt;<br/>",
  jqueryContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  jqueryuiContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  angularContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  dojoContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/dojo/1.7.3/dojo/dojo.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  mooToolsContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/mootools/1.4.5/mootools-yui-compressed.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  prototypeContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  modernizrContent =
    "&nbsp;&nbsp;&lt;script src=&quot;//cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;<br>",
  domReadyContent =
    "&nbsp;&nbsp;&lt;script type=&quot;text/javascript&quot;&gt;<br>&nbsp;&nbsp;&nbsp;function autorun()<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;if (document.addEventListener) document.addEventListener(&quot;DOMContentLoaded&quot;, autorun, false);<br>&nbsp;&nbsp;&nbsp;else if (document.attachEvent) document.attachEvent(&quot;onreadystatechange&quot;, autorun);<br>&nbsp;&nbsp;&nbsp;else window.onload = autorun;<br>&nbsp;&nbsp;&lt;/script&gt;<br>",
  pageLoadedContent =
    "&nbsp;&nbsp;&lt;script type=&quot;text/javascript&quot;&gt;<br>&nbsp;&nbsp;&nbsp;function autorun()<br>&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;if (window.addEventListener) window.addEventListener(&quot;load&quot;, autorun, false);<br>&nbsp;&nbsp;&nbsp;else if (window.attachEvent) window.attachEvent(&quot;onload&quot;, autorun);<br>&nbsp;&nbsp;&nbsp;else window.onload = autorun;<br>&nbsp;&nbsp;&lt;/script&gt;<br>";

$(function () {
  $("#html-radio-group").buttonset();
  $("#xua-radio-group").buttonset();
  $("#vp-radio-group").buttonset();
  $("#commonmetas-radio-group").buttonset();
  $("#favicon-radio-group").buttonset();
  $("#googlewebfonts-radio-group").buttonset();
  $("#stylesheet-radio-group").buttonset();
  $("#analytics-radio-group").buttonset();
  $("#jquery-radio-group").buttonset();
  $("#angular-radio-group").buttonset();
  $("#dojo-radio-group").buttonset();
  $("#mootools-radio-group").buttonset();
  $("#prototype-radio-group").buttonset();
  $("#modernizr-radio-group").buttonset();
  $("#javascript-radio-group").buttonset();
  if (window.getSelection) {
    $("#selectHintText").css("display", "inline");
  }

  $("#options input[type=radio]").on("change", function (e) {
    pubsub.pub("bi:control", e.currentTarget.parentNode.id);
  });

  $("#ctaContributions").on("click", function () {
    pubsub.pub("bi:cta", "contributions");
  });
});

function selectCode() {
  pubsub.pub("bi:cta", "selected-code");
  if (window.getSelection && selectCodeOn) {
    var codeRange = document.createRange();
    codeRange.selectNodeContents(document.getElementById("markup"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(codeRange);
  } else {
    selectCodeOn = true;
  }
}

function hideSpan(elementName) {
  $(elementName).slideUp(function () {
    $(elementName).html("");
  });
}

function showSpan(elementName, elementContent) {
  $(elementName).html(elementContent);
  $(elementName).slideDown();
}

function editText(message, span) {
  var newString = prompt(message, $(span).text());
  if (newString != "" && newString != null) $(span).text(newString);
  selectCodeOn = false;
  pubsub.pub("bi:control", "edit-value");
}

var pubsub = (function () {
  var data = {};
  return {
    pub: function (label, extra) {
      if (data[label]) {
        data[label].map((fn) => fn(extra));
      }
    },
    sub: function (label, callback) {
      if (data[label] === undefined) {
        data[label] = [];
      }
      data[label].push(callback);
      return function () {
        data[label].splice(data[label].indexOf(callback), 1);
      };
    },
  };
})();

function runOnceByLabel(callback) {
  var cache = [];
  return (name) => {
    if (cache.indexOf(name) >= 0) {
      return;
    }
    cache.push(name);
    callback(name);
  };
}

pubsub.sub(
  "bi:control",
  runOnceByLabel(function (label) {
    var alias = {
      "html-radio-group": "ie-conditional-html",
      "xua-radio-group": "meta-x-ua-compatible",
      "vp-radio-group": "meta-viewport",
      "commonmetas-radio-group": "meta-common",
      "favicon-radio-group": "favicon",
      "googlewebfonts-radio-group": "google-web-fonts",
      "stylesheet-radio-group": "css-stylesheet",
      "analytics-radio-group": "analytics",
      "jquery-radio-group": "js-jquery",
      "angular-radio-group": "js-angular",
      "dojo-radio-group": "js-dojo",
      "mootools-radio-group": "js-mootools",
      "prototype-radio-group": "js-prototype",
      "modernizr-radio-group": "js-modernizr",
      "javascript-radio-group": "autorun-javascript",
    };

    label = alias[label] || label;

    ga("send", {
      hitType: "event",
      eventCategory: "interaction",
      eventAction: label,
      eventLabel: label,
    });
  })
);

pubsub.sub(
  "bi:cta",
  runOnceByLabel(function (label) {
    ga("send", {
      hitType: "event",
      eventCategory: "cta",
      eventAction: "cta - " + label,
      eventLabel: label,
    });
  })
);
