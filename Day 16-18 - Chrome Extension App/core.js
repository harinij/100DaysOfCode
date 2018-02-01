var maxFeedItems = 15;
var req;
var buildPopupAfterResponse = false;
var OnFeedSuccess = null;
var OnFeedFail = null;
var retryMilliseconds = 120000;


function UpdateIfReady(force) {
		UpdateFeed();
}

function UpdateFeed() {
  $.ajax({type:'GET', dataType:'xml', url: 'https://news.ycombinator.com/rss', timeout:5000, success:onRssSuccess});
}

function onRssSuccess(doc) {
  if (!doc) {
    handleFeedParsingFailed("Not a valid feed.");
    return;
  }
 	links = parseHNLinks(doc);
    buildPopup(links);

}

function parseXml(xml) {
  var xmlDoc;
  try {
    xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = false;
    xmlDoc.loadXML(xml);
  } 
  catch (e) {
    xmlDoc = (new DOMParser).parseFromString(xml, 'text/xml');
  }

  return xmlDoc;
}

function parseHNLinks(doc) {
	var entries = doc.getElementsByTagName('entry');
	if (entries.length == 0) {
	  entries = doc.getElementsByTagName('item');
	}
  var count = Math.min(entries.length, maxFeedItems);
  var links = new Array();
  for (var i=0; i< count; i++) {
    item = entries.item(i);
    var hnLink = new Object();
    // TITLE
    var itemTitle = item.getElementsByTagName('title')[0];
    if (itemTitle) {
      hnLink.Title = itemTitle.textContent;
    } else {
      hnLink.Title = "Unknown Title";
    }
    
    // LINK
    var itemLink = item.getElementsByTagName('link')[0];
    if (!itemLink) {
      itemLink = item.getElementsByTagName('comments')[0];
    }
    if (itemLink) {
      hnLink.Link = itemLink.textContent;
    } else {
      hnLink.Link = '';
    }

    // COMMENTS
    var commentsLink = item.getElementsByTagName('comments')[0];
    if (commentsLink) {
      hnLink.CommentsLink = commentsLink.textContent;
    } else {
      hnLink.CommentsLink = '';
    }
    
    links.push(hnLink);
  }
  return links;
}

function openLink(e) {
  e.preventDefault();
}

function openUrl(url, take_focus) {
  if (url.indexOf("http:") != 0 && url.indexOf("https:") != 0) {
    return;
  }
  chrome.tabs.create({url: url, selected: take_focus});
}
	
function hideElement(id) {
	var e = document.getElementById(id);
	e.style.display = 'none';
}

function showElement(id) {
	var e = document.getElementById(id);
	e.style.display = 'block';
}
