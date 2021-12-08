//function test(){
//	var element = document.getElementById('block1');
//	var link = document.createElement('a');
//	var br = document.createElement('br');
//	link.innerHTML = '<div class="sidebar3"><img src="img/play.png" height="25px" style="margin: 0 25px;"><span class="udlite3">1. Материалы курса<p class="under_udlite"></p></span></div>';
//	element.appendChild(link);	
//};

"use strict"
addEventListener("keydown", function(event) {
    
    if (event.keyCode == 83 && event.ctrlKey)
      document.getElementById("btn").style.display = "none";
        
  });
var hd1 = document.getElementById('hd1');
  //Ловим нужный элемент в общей видимости
var i_elcnt = 1;
   // Будем считать количество добавленных ссылок

function AddElem() {
    // Отдельно делаем ф. для добавления и удаления элементов + добавить вторую кнопку
    i_elcnt++;
                    // Счетчик элементов + 1
    var elnk = document.createElement('a');
    var ebrk = document.createElement('a');
    console.log('  Add brk: %o\n  Add lnk: %o', ebrk, elnk);

    elnk.innerHTML = ' <div id="t" class="sidebar3" onClick="Refresh()"><img src="img/play.png" height="25px" style="margin: 0 25px;"><span class="udlite3">' + i_elcnt + '. Матеріали курса<p class="under_udlite"></p></span></div>';

    hd1.appendChild(ebrk);  
    hd1.appendChild(elnk); 
}


function RemElem() {
    var icnl = hd1.childNodes.length;
  // Узнаём количество элементов
    var i, o_ch, s_out;

    console.clear();
    if( icnl <= 1 ){
     // Если дочерних элементов нет - выходим. 
//                              Текст в innerHTML между тегами <div> тоже является дочерним элементом в этом случае их количество 1 а не 0.
        console.log(' No childrens or only text of hd1 --> EXIT ');
  // Сообщим о произошедшем в консоль
        return false;
    }
    console.log( 'OB: %o (CH: %i)', hd1.id, ( icnl ) );
 // Описание объекта <div> и количество дочерних элементов

    for( i=0; i < icnl; i++) {
        o_ch = hd1.childNodes[i];

    //  if( o_ch.id == undefined ) continue;    // innerHTML text
  // Один из вариантов отсеивания innerHTML текста
        
        if( o_ch.nodeType == 3 ) {  //nodeType 1 is Element, 3 is Text
   // Вариант с определением типа элемент это или текст
            console.log('  %o (Type: %i) --> SKIP', o_ch, o_ch.nodeType);
            continue;  
        }
        console.log('  %o (Type: %i)', o_ch, o_ch.nodeType);
   // Покажем объект и его тип = 1, поскольку на типе = 3 пропускаем оставшийся в петле цикла код.
    }

    hd1.removeChild(hd1.lastChild);
    hd1.removeChild(hd1.lastChild);
    i_elcnt--;
 
}
document.querySelector('.bt_tx1').onclick = myClickl;

function myClickl() {
    let a = document.querySelector('.text_inp1').value;
    document.querySelector('.head_tx1').innerHTML = a;
}

document.querySelector('.bt_tx2').onclick = myClic;

function myClic() {
    let a = document.querySelector('#myInput').value;
    document.querySelector('.text-ft-inpt2').innerHTML = a;
}



document.querySelector('.bt_tx').onclick = myClick;

function myClick() {
    let a = document.querySelector('.text_inp').value;
    document.querySelector('.text-ft-inpt').innerHTML = a;
}



const player = new Plyr('#player');
player.source = {
  type: 'video',
  sources: [
    {
      src: 'R0pXi216Omk',
      provider: 'youtube',
    },
  ],
};


function changeVideo(youtubeId) {
  player.source = {
    type: 'video',
    sources: [
      {
        src: youtubeId,
        provider: 'youtube',
      },
    ],
  };
  player.restart();
}

const myInput = document.getElementById('myInput');
myInput.addEventListener('change', function(){
  const youtubeId = youtubeGetID(this.value);
  if (youtubeId) {
    changeVideo(youtubeId);
  }
});

function youtubeGetID(input) {
  var r = input.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  if(r[2] !== undefined) {
    return r[2].split(/[^0-9a-z_\-]/i)[0]
  } else {
    r = input.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)
    if(r && r[1] !== undefined) {
      return r[1]
    }
    else return null
  }
} 


//function Refresh() {
//        window.parent.location = window.parent.location.href;
//    }

function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
}
}

let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.input__file-button-text').innerText = labelVal;
      });
    });

    function toggleText() { 
      var text2 = document.getElementById("demo2");
  if (text2.style.display === "block") {
    text2.style.display = "none";
  } else {
    text2.style.display = "block";
  }
 
}

    function toggleTex() { 

      var text3 = document.getElementById("demo3");
  if (text3.style.display === "block") {
    text3.style.display = "none";
  } else {
    text3.style.display = "block";
  }
  var text4 = document.getElementById("demo4");
  if (text4.style.display === "none") {
    text4.style.display = "none";
  } else {
    text4.style.display = "none";
  }
 var text2 = document.getElementById("demo2");
  if (text2.style.display === "none") {
    text2.style.display = "none";
  } else {
    text2.style.display = "none";
  }
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "none";
  } else {
    text.style.display = "none";
  }
}


