$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 

function openNav() {
	document.getElementById("mySidepanel").style.width = "60%";
  document.getElementsByClassName("closebtn").style.position="Fixed";
  }
  
  function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
  }

  function dropDown() {
    document.getElementById('dropdown-container').style.display = 'block' ; 
    document.getElementById('dropdown-container1').style.display = 'none' ;  
 }

 function dropDown1() {
  document.getElementById('dropdown-container1').style.display = 'block' ; 
  document.getElementById('dropdown-container').style.display = 'none' ; 
 
 }
  
 