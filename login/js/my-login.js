/******************************************
 * My Login
 *
 * Bootstrap 4 Login Page
 *
 * @author          Muhamad Nauval Azhar
 * @uri 			https://nauval.in
 * @copyright       Copyright (c) 2018 Muhamad Nauval Azhar
 * @license         My Login is licensed under the MIT license.
 * @github          https://github.com/nauvalazhar/my-login
 * @version         1.2.0
 *
 * Help me to keep this project alive
 * https://www.buymeacoffee.com/mhdnauvalazhar
 *
 ******************************************/

'use strict';

$(function() {

	// author badge :)
	var author = '<div style="position: fixed;bottom: 0;right: 20px;background-color: #fff;box-shadow: 0 4px 8px rgba(0,0,0,.05);border-radius: 3px 3px 0 0;font-size: 12px;padding: 5px 10px;">By <a href="https://twitter.com/mhdnauvalazhar">@mhdnauvalazhar</a> &nbsp;&bull;&nbsp; <a href="https://www.buymeacoffee.com/mhdnauvalazhar">Buy me a Coffee</a></div>';
	$("body").append(author);

	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
		}).css({
				position: 'absolute',
				right: 10,
				top: ($this.outerHeight() / 2) - 12,
				padding: '2px 7px',
				fontSize: 12,
				cursor: 'pointer',
		}));

		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

		if(invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

	// Modifikasi event listener click pada tombol submit
	$('.my-login-validation button[type="submit"]').on('click', function(event) {
		console.log('Tombol submit diklik'); // Log 1
		var form = $(this).closest('form'); // Dapatkan form terdekat

		// Terapkan kelas 'was-validated' untuk menampilkan pesan validasi
		form.addClass('was-validated');
		console.log('Menambahkan kelas was-validated'); // Log 2

		// Periksa validitas form
		var formIsValid = form[0].checkValidity();
		console.log('Hasil checkValidity():', formIsValid); // Log 3

        if (formIsValid === false) {
          console.log('Form TIDAK valid. Mencegah pengiriman default.'); // Log 4 (Ini yang seharusnya muncul jika input salah)
          event.preventDefault(); // Mencegah pengiriman form
          event.stopPropagation(); // Menghentikan penyebaran event
		}else{
			console.log('Form valid. Mengalihkan ke index.html'); // Log 5
    		window.location.href = "../index.html";
		}

		// Kelas was-validated tetap ditambahkan untuk tampilan validasi
		// form.addClass('was-validated'); // Baris ini duplikat, bisa dihapus atau biarkan saja setelah if/else
	});

    // Hapus event listener submit yang asli jika masih ada dan menyebabkan masalah
    // $(".my-login-validation").submit(function(event) { /* ... */ });
});
