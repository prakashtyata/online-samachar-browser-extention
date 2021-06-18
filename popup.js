jQuery(document).ready(function(){
  fetch('http://onlinesamachar.com.np/wp-json/wp/v2/posts?_embed')
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log(data);
    // jQuery("#onlinesamachar").append(data[0].title.rendered);
	var temp = '<div class="os_news_list">';
    jQuery.each( data, function(i) {
    	 temp += '<div class="each_post"><div class="post_image"><img src="' + data[i].featured_image_url + '"></div>' ;
    	 temp += '<div class="post_details"><a href="' + data[i].guid.rendered + '" target="_blank">' + data[i].title.rendered + '</a>' ;
    	 temp += '<p class="excerpt">' + data[i].excerpt.rendered + '</p></div>' ;
    	 temp += '</div>' ;
    });
    temp += '</div>';
    	jQuery(".spinner").remove();
    	jQuery("#onlinesamachar").append(temp);
  });
})