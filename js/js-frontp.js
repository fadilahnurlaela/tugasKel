//perkopian
$(document).ready(function () {
  var counter = 0;

  // Start the changing images
  setInterval(function () {
    if (counter == 6) {
      counter = 0;
    }

    changeImage(counter);
    counter++;
  }, 500);

  // Set the percentage off
  loading();

  Animate();
});

//box animasi kopi
function Animate() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.box, .section-title').forEach((box,i) => {
    gsap.fromTo(box, {
      autoAlpha: 0,
      y: 50,
      stagger: { 
        each: 1,
        from: "center",
        grid: "auto",
        ease: "power2.inOut",
      }
    }, {
      scrollTrigger: {
        trigger: box,
        once: true
      },
      duration: i+0.1,
      autoAlpha: 1,
      y: 0
    });
  });
}

function changeImage(counter) {
  var images = [
    '<i class="fa fa-fighter-jet"></i>',
    '<i class="fa fa-gamepad"></i>',
    '<i class="fa fa-headphones"></i>',
    '<i class="fa fa-cubes"></i>',
    '<i class="fa fa-paw"></i>'
  ];

  $(".loader .image").html("" + images[counter] + "");
}

function loading() {
  var num = 0;

  for (i = 0; i <= 100; i++) {
    setTimeout(function () {
      $('.loader span').html(num + '%');

      if (num == 100) {
        loading();
      }
      num++;
    }, i * 120);
  };

}

//Modal Content
const arr = [
    {  
       
    },
    {

    },
    {
        Title: 'Aceh Gayo',
        SubTitle: 'Baiturrahman Grand Mosque',
        ImgTop: '../assets/mod-kopipedia/towerNAD.jpg',
        ImgBottom: '../assets/product/aceh.png',
        Content: `merupakan salah satu daerah yang berada di Dataran tinggi Gayo, suatu lokasi yang terletak diujung utara pulau Sumatera, yang berada di salah satu bagian punggung pegunungan Bukit Barisan. Dataran yang memiliki tinggi 1250 mdpl ini menyimpan potongan tanah surge untuk perkebuan Kopi terbaik Indonesia. Kopi tersebut memberikan tingkat keasaman seimbang, dengan cita rasa rempah serta aroma yang kuat.`
    },
    {
        Title: 'Simalungun - Sumut',
        SubTitle: 'Danau Toba',
        ImgTop: '../assets/mod-kopipedia/DanauToba-Simalungun.jpg',
        ImgBottom: '../assets/product/simalungun.png',
        Content: `Pesona Simalungun dengan keindahan Danau Toba. Kabupaten bagian Suamtera Utara ini memiliki kekayaan tanah vulkanik yang berasal dari letusan Gunung Toba. Area ini berkembang menjadi perkebunan kopi. Danau dengan empat kawah gunung berapi dengan bentuk tumpang tinggi ini, memiliki suhu udara dalam kisaran 5-15 derajat celcius ini memberikan kopi dengan rasa peach fruit dengan tingkat keasaman yang seimbang.`
    },
    { 
        Title: 'Malabar - Jabar',
        SubTitle: 'Wayang Golek',
        ImgTop: '../assets/mod-kopipedia/Jabar-Waygol.jpg',
        ImgBottom: '../assets/product/malabar.png',
        Content: `Malabar merupaka nama sebuah gunung yang berada di wilayah Tanah Pasundan, yaitu kota Bandung Provinsi Jawa Barat. Gunung yang berada di kecamatan Pengalengan ini memiliki ketinggian 1400-1800 mdpl dengan suhu 15-21 derajat celcius serta curah hujan 2000mm/tahun. Geografis wilayah tersebut, memiliki potensi kopi yang sangat baik. Kopi Malabar menjadi salah satu kopi terbaik di Indonesia yang menghasilkan cita rasa buah nangka dengan tingkat keasaman yang seimbang dengan rasa manis yang kuat.`
    },
    {
      Title: 'Kintamani - Bali',
      SubTitle: 'Barong',
      ImgTop: '../assets/mod-kopipedia/Bali-Barong.jpg',
      ImgBottom: '../assets/product/kintamani.png',
      Content: `Berasal dari daerah Kintamani Bali nan sejuk ini memiliki keunikan cita rasa yang berbeda dari kopi di daerah lain di nusantara. Kopi Bali Kintamani memiliki cita rasa buah-buahan yang asam dan segar. Hal tersebut terjadi dikarenakan tanaman kopi di Bali Kintamani ditanam bersamaan dengan tanaman lain seperti aneka sayuran dan buah jeruk. Kopi jenis ini menggunakan sistem ‘tumpang sari’ bersama dengan jenis tanaman lain. Itu kenapa biji kopinya meresap rasa buah-buahan seperti jeruk. Selain memiliki cita rasa ‘buah’, kopi Bali Kintamani memiliki cita rasa yang lembut dan tidak berat. Keunikanya tersebut di dapat dari letak geografisnya yang unik juga. Bagi kamu yang menyukai cita rasa kopi berbeda, kopi Bali Kintamani bisa menjadi pilihan yang tepat.`
    },
    {
        Title: 'Flores',
        SubTitle: 'Komodo',
        ImgTop: '../assets/mod-kopipedia/Kodomo.jpg',
        ImgBottom: '../assets/product/floresB.png',
        Content: `Flores dikenal juga dengan pulau dengan luas 14.300 km ini, memiliki pemandangan alam laut yang indah. Pada dataran tinggi Ngada di Pulau Flores ini, tumbuh pohon kopi yang dikelola oleh petani tradisional setempat. Pohon kopi yang tumbuh pada tanah vulkanik ini terletak pada pertemuan dua lereng gunung api, yaitu Gunung Inerie dan Gunung Abulobo, sangat subur menghasilkan kopi dengan cita rasa aroma sweet kokoa tingkat keasaman dan rasa manis yang seimbang.`
    },
    {
        Title: 'Toraja',
        SubTitle: 'Tongkonan',
        ImgTop: '../assets/mod-kopipedia/Tongkonan.jpg',
        ImgBottom: '../assets/product/toraja.png',
        Content: `Toraja merupakan salah satu Kabupaten yang berada di Provinsi Sulawesi Selatan. Kabupaten yang terkenal dengan rumah adat Tongkonan ini memiliki lereng gunung Sesean yang membelah kabupaten di wilayah Toraja gunung ini terdapat satu daerah kecil sebagai pusat pengepul kopi yaitu daerah Sapan. Kopi Toraja Sapan yang pernah menjuarai kopi lelang pada tahun 2012 ini memberika cita rasa caramel dengan tingkat keasaman yang kuat disertai manis yang seimbang.`
    },
    {
        Title: 'Ijen Raung - Jabar',
        SubTitle: 'Wayang Golek',
        ImgTop: '../assets/mod-kopipedia/Jabar-Waygol.jpg',
        ImgBottom: '../assets/product/java.png',
        Content: `Kopi khas Bondowoso ini merupakan kopi yang sangat nikmat dan unik. Kopi ini memiliki cita rasa asam jawa dengan perpaduan pedas tak terasa. Pahit dari biji kopi yang tidak terasa pekat, serta aromanya yang sangat khas dengan bau bunga hutan. Dimana kopi ini mengalami pencucian dalam proses dan tumbuh berada di timur Kawah Ijen, dalam ketinggian 1400 meter. Tingkat keasaman rendah. Memiliki rasa kacang-kacangan. Memiliki tekstur yang lembut sehingga terkesan manis.`
    },
    {
      Title: 'Wamena - Papua',
      SubTitle: 'Raja Ampat',
      ImgTop: '../assets/mod-kopipedia/RajaAmpat-Papua.jpg',
      ImgBottom: '../assets/product/wamena.png',
      Content: `Sebuah pulau dibagian Timur Indonesia. Daerah yang subur dan eksotis ini terdapat pegunungan Jayawijaya. Pada lereng gunung ini dikenal dengan lembah Baliem. Pohon kopi jenis Arabica tyica tumbuh subur pada daerah ini. Dengan ketinggian 1800-2500 mdpl, iklim dan curah hujan yang merata sepanjang tahun pada suhu sekitar 10-18 derajat celcius, menghasilkan kopi dengan aroma fruita, rasa manisnya tinggi dan tingkat keasaman yang rendah.`
    },
]

function showDetail(param) {
    $('.modal-content-custom').empty();
    arr.forEach((data, i) => {
      if (param === i + 1) {
          let element = '<button type="button" class="close modal-close-custom" data-dismiss="modal">&times;</button>';
          element += '<div class="modal-body">';
          element += '<div class="content-modal-detail">';
          element += '<div class="detail-top">';
          element += '<img src="' + data.ImgTop + '" alt="" />';
          element += '<div class="content-detail-top">';
          element += '<span class="span-1">' + data.Title + '</span>';
          element += '<span class="span-2">' + data.SubTitle + '</span>';
          element += '</div>';
          element += '</div>';
          element += '<div class="detail-bottom">';
          element += '<img src="' + data.ImgBottom + '" alt="" />';
          element += '<div class="content-detail-bottom">';
          element += '<span>' + data.Content + '</span>';
          element += '</div>';
          element += '</div>';
          element += '</div>';
          element += '</div>';
          $('.modal-content-custom').append(element);
          $('#myModal').modal('show');
      }
});

}


//QUOTES
$(function() {
	var i = 0;
	slideCount = 5;
	function timeout() {
		setTimeout(function() {
			// Move $("#quote" + i) off to the left
			$("#quote" + i).animate({
				right: "120%"
			}, 2000);
			// Change selected quote
			i++;
			if(i > (slideCount - 1)) {
				i = 0;
			}
			// Move $("#quote" + i) to right side then back to middle
			$("#quote" + i).css("right", "-60%");
			$("#quote" + i).animate({
				right: "20%"
			}, 2000);
			timeout();
		}, 7000);
	};
	timeout();
});



//scrolling header
window.addEventListener('scroll', function() {
  let element = document.getElementById("btnNav");

  if(window.scrollY > 500){
        element.classList.add("btn-active");
  } else {
        element.classList.remove("btn-active");

    }
});
document.getElementById("btnNav").addEventListener("click", myFunction);

function myFunction() {
  console.log("test");
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
};  
// document.getElementById("his").addEventListener("click", mainFunct);

function mainFunct(param){
  let element = document.getElementById(param);
  element.scrollIntoView({behavior: "smooth"});
}   