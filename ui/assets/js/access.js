$(document).ready(function() {
	window.e = 0;
	

	$(".light1").click(function() {
		var d = $(this).index();

		$("#lightbase").fadeIn();
		$("#loading").fadeIn(1000);
		$("#loading").fadeOut(1000, function() {
			$("#close").fadeIn(500, 0);
			$(".lightboxcontainer:eq(" + e + ")").fadeOut(200, function() {
				$(".lightboxcontainer:eq(" + d + ")").fadeIn(600);
				$("#shadepart").fadeTo(500, 0.8);
				e = d;
			});
		});

		$("#close").click(function() {

			$("#lightbase,.lightboxcontainer").fadeOut(500);
			$("#shadepart").fadeOut(500, 0);
			$("#close").fadeOut(500, 0);
		});
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {

			$("#lightbase,.lightboxcontainer").fadeOut(500);
			$("#shadepart").fadeOut(500, 0);
			$("#close").fadeOut(500, 0);
		}
	});

	autofilter();
	window.pitemid = "sap";
	$(".light1").hide();
	$(".light1.sap").show();
	
	
	function autofilter() {
		$(".menuitem").click(function() {
			var citemid = $(this).attr("id");
			$(".light1." + pitemid).fadeOut(500, function() {
				$(".light1." + citemid).fadeIn(500);
			});
			pitemid = citemid;

		});
		$("#viewall").click(function() {
			$(".light1").fadeIn(500);
		});
	}
});
