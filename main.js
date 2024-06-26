$(document).ready(function() {
  
  $('#toggle-theme').click(function() {
    $('.bdy').toggleClass('dark')
  });
       
  $('#search-btn').click(function() {
    const sh = document.querySelector('.search');
    
    if (sh.value == '') {
      sh.value = 'Search cannot be empty';
      sh.classList.add('error');
      
      setTimeout(() => {
        sh.value = '';
        sh.classList.remove('error');
      }, 1000);
      
    } else {
      
      fetchQuery();
      
    }
  });
  
});


function fetchQuery() {
  var query = $('#search').val();
  
  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dictionary?word=' + query,
    headers: { 'X-Api-Key': '29OaXW92zBKNeyZ+7cLgUg==fayxTTNLVZgrrh72'},
    contentType: 'application/json',
    success: function(response) {
      $('#word').text(query);
      
      if (response.definition == '') {
        $('#info').text('No definition found');
      } else {
        $('#info').text(response.definition);
        $('#search').val('');
      }
     
     
    },
    error: function ajaxError(jqXHR) {
      console.log(jqXHR.responseText);
    }
});
}


