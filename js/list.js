class List {
  constructor() {
    this.category = "";
    this.product = "";
    this.product_name = "";
    this.product_material = "";
    this.product_price = "";
    this.product_size = "";
    this.new_HTML = [];
    this.wood_HTML = [];
    this.metal_HTML = [];
    this.sofa_HTML = [];
    this.table_HTML = [];
    this.others_HTML = [];
    /*`<a href="${list.category}_${list.product}.html">
      <figure>
        <img src="img/${list.category}/${list.product}/thumb.jpg" alt="Image Not Found">
      </figure>
      <div class="info">
        <div class="left">
          <p><b>${list.product_name}</b><br>${list.product_material}</p>
        </div>
        <div class="right">
          <p>${list.product_price}</p>
        </div>
      </div>
      <div class="size">
        <div class="text">
          <p>${list.product_size}</p>
        </div>
      </div>
    </a>`;*/

    this.new = [
      ["wood", "bikingBrown", "바이킹(BIKING) BROWN", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"],
      ["wood", "bikingGreen", "바이킹(BIKING) GREEN", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"],
      ["wood", "bikingNatural", "바이킹(BIKING) NATURAL", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"]
  ];

    this.wood = [
["wood", "bikingBrown", "바이킹(BIKING) BROWN", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"],
["wood", "bikingGreen", "바이킹(BIKING) GREEN", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"],
["wood", "bikingNatural", "바이킹(BIKING) NATURAL", "MAHOGANY WOOD + BABUL ACACIA WOOD", "KRW 220,000", "(W)450 (D)550 (SH)450 (H)980"],
["wood", "p93", "하프암(HARP) WALNUT", "MAHOGANY WOOD", "KRW 170,000", "(W)630 (D)500 (SH)450 (H)800"],
["wood", "p92", "하프사이드(HARP) VINTAGE WHITE", "MAHOGANY WOOD", "KRW 154,000", "(W)490 (D)520 (SH)450 (H)850"],
["wood", "p91", "하프사이드(HARP) WALNUT", "MAHOGANY WOOD", "KRW 154,000", "(W)490 (D)520 (SH)450 (H)850"],
["wood", "p90", "플로라(FLORA) RUSTIC", "TEAK WOOD", "KRW 186,000", "(W)490 (D)560 (SH)450 (H)900"],
["wood", "p89", "플로라(FLORA) NATURAL", "TEAK WOOD", "KRW 186,000", "(W)490 (D)560 (SH)450 (H)900"],
["wood", "p88", "가젤(GAZELEE) PAPUA ROSE", "TEAK WOOD", "KRW 186,000", "(W)450 (D)500 (SH)450 (H)1010"],
["wood", "p87", "가젤(GAZELLE) WALNUT", "TEAK WOOD", "KRW 186,000", "(W)450 (D)500 (SH)450 (H)1010"],
["wood", "p86", "가젤(GAZELLE) OLD TEAK", "TEAK WOOD", "KRW 186,000", "(W)450 (D)500 (SH)450 (H)1010"],
["wood", "p85", "가젤(GAZELLE) RUSTIC", "TEAK WOOD", "KRW 186,000", "(W)450 (D)500 (SH)450 (H)1010"],
["wood", "p84", "팀버튼(TIM BURTON) KHAKI", "RUBBER WOOD", "KRW 210,000", "(W)515 (D)560 (SH)450 (H)860"],
["wood", "p83", "팀버튼(TIM BURTON) BROWN", "RUBBER WOOD", "KRW 210,000", "(W)515 (D)560 (SH)450 (H)860"],
["wood", "p82", "팀버튼(TIM BURTON) RED", "RUBBER WOOD", "KRW 210,000", "(W)515 (D)560 (SH)450 (H)860"],
["wood", "p81", "팀버튼(TIM BURTON) NAVY", "RUBBER WOOD", "KRW 210,000", "(W)515 (D)560 (SH)450 (H)860"],
["wood", "p80", "팀버튼(TIM BURTON) GREY", "RUBBER WOOD", "KRW 210,000", "(W)515 (D)560 (SH)450 (H)860"],
["wood", "p79", "트론(TRON)", "BEECH WOOD", "KRW 230,000", "(W)475 (D)490 (SH)470 (H)990"],
["wood", "p78", "트라이(TRY)", "ASH WOOD", "KRW 320,000", "(W)680 (D)760 (SH)430 (H)830"],
["wood", "p77", "토피(TOPI)", "TEAK WOOD", "KRW 160,000", "(W)600 (D)500 (SH)445 (H)800"],
["wood", "p76", "토르(THOR) WALNUT WOOD", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p75", "토르(THOR) WALNUT PU", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p74", "토르(THOR) VINTAGE WOOD", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p73", "토르(THOR) VINTAGE PU", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p72", "토르(THOR) RUSTIC WOOD", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p71", "토르(THOR) RUSTIC PU", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p70", "토르(THOR) NATURAL WOOD", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p69", "토르(THOR) NATURAL PU", "TEAK WOOD", "KRW 186,000", "(W)440 (D)500 (SH)450 (H)790"],
["wood", "p68", "킹(KING)", "ASH WOOD", "KRW 190,000", "(W)470 (D)570 (SH)460 (H)1000"],
["wood", "p67", "크로스(CROSS) WALNUT", "BEECH WOOD", "KRW 126,000", "(W)470 (D)520 (SH)470 (H)915"],
["wood", "p66", "크로스(CROSS) NATURAL", "BEECH WOOD", "KRW 126,000", "(W)470 (D)520 (SH)470 (H)915"],
["wood", "p65", "커피 보조2(COFFEE) COFFEE", "RUBBER WOOD", "KRW 180,000", "(W)1200 (D)430 (H)430"],
["wood", "p64", "커피 보조2(COFFEE) IVORY", "RUBBER WOOD", "KRW 180,000", "(W)1200 (D)430 (H)430"],
["wood", "p63", "커피 보조2(COFFEE) BROWN", "RUBBER WOOD", "KRW 180,000", "(W)1200 (D)430 (H)430"],
["wood", "p62", "커피 보조2(COFFEE) RED", "RUBBER WOOD", "KRW 180,000", "(W)1200 (D)430 (H)430"],
["wood", "p61", "커피 보조1(COFFEE) COFFEE", "RUBBER WOOD", "KRW 90,000", "(W)430 (D)430 (H)430"],
["wood", "p60", "커피 보조1(COFFEE) IVORY", "RUBBER WOOD", "KRW 90,000", "(W)430 (D)430 (H)430"],
["wood", "p59", "커피 보조1(COFFEE) BROWN", "RUBBER WOOD", "KRW 90,000", "(W)430 (D)430 (H)430"],
["wood", "p58", "커피 보조1(COFFEE) RED", "RUBBER WOOD", "KRW 90,000", "(W)430 (D)430 (H)430"],
["wood", "p57", "커피(COFFEE) SMALL", "RUBBER WOOD", "KRW 170,000", "(W)455 (D)530 (SH)450 (H)720"],
["wood", "p56", "커피(COFFEE) BIG<", "RUBBER WOOD", "KRW 170,000", "(W)555 (D)530 (SH)450 (H)720"],
["wood", "p55", "카우(COW)", "ASH WOOD", "KRW 130,000", "(W)550 (D)500 (SH)450 (H)750"],
["wood", "p54", "첼로(CELLO)", "ASH WOOD", "KRW 180,000", "(W)575 (D)500 (SH)445 (H)1000"],
["wood", "p53", "윌리엄(WILLIAM) LIGHT", "OAK WOOD", "KRW 260,000", "(W)480 (D)580 (SH)450 (H)950"],
["wood", "p52", "윌리엄(WILLIAM) DARK", "OAK WOOD", "KRW 260,000", "(W)480 (D)580 (SH)450 (H)950"],
["wood", "p51", "위뜨(HUIT)", "ASH WOOD", "KRW 190,000", "(W)600 (D)650 (SH)460 (H)900"],
["wood", "p50", "엘라(ELLA)", "ASH WOOD", "KRW 170,000", "(W)440 (D)480 (SH)450 (H)845"],
["wood", "p49", "아쭈로(AZUL) BROWN PU", "RUBBER WOOD", "KRW 230,000", "(W)530 (D)570 (SH)450 (H)770"],
["wood", "p48", "아쭈로(AZUL) BEIGE PU", "RUBBER WOOD", "KRW 230,000", "(W)530 (D)570 (SH)450 (H)770"],
["wood", "p47", "아쭈로(AZUL) GREY FABRIC", "RUBBER WOOD", "KRW 230,000", "(W)530 (D)570 (SH)450 (H)770"],
["wood", "p46", "소피아(SOFIA) KHAKI", "BEECH WOOD", "KRW 320,000", "(W)620 (D)640 (SH)475 (H)930"],
["wood", "p45", "소피아(SOFIA) BROWN", "BEECH WOOD", "KRW 320,000", "(W)620 (D)640 (SH)475 (H)930"],
["wood", "p44", "소피아(SOFIA) NAVY", "BEECH WOOD", "KRW 320,000", "(W)620 (D)640 (SH)475 (H)930"],
["wood", "p43", "샤프(SHARP) BLACK", "ASH WOOD", "KRW 190,000", "(W)450 (D)500 (SH)480 (H)880"],
["wood", "p42", "샤프(SHARP) WALNUT", "ASH WOOD", "KRW 190,000", "(W)450 (D)500 (SH)480 (H)880"],
["wood", "p41", "벤(BEN) FLOWER", "OAK WOOD", "KRW 210,000", "(W)500 (D)500 (SH)460 (H)970"],
["wood", "p40", "벤(BEN) BROWN", "OAK WOOD", "KRW 210,000", "(W)500 (D)500 (SH)460 (H)970"],
["wood", "p39", "벤(BEN) NAVY FABRIC", "OAK WOOD", "KRW 210,000", "(W)500 (D)500 (SH)460 (H)970"],
["wood", "p38", "벤(BEN) GREEN", "OAK WOOD", "KRW 210,000", "(W)500 (D)500 (SH)460 (H)970"],
["wood", "p37", "미뇽(MIGNON)", "ASH WOOD + RATTAN", "KRW 190,000", "(W)600 (D)650 (SH)460 (H)900"],
["wood", "p36", "먼싱(MUNSING) KHAKI", "ASH WOOD", "KRW 180,000", "(W)600 (D)660 (SH)450 (H)800"],
["wood", "p35", "먼싱(MUNSING) BROWN", "ASH WOOD", "KRW 180,000", "(W)600 (D)660 (SH)450 (H)800"],
["wood", "p34", "라떼(LATTE) OLD TEAK", "TEAK WOOD", "KRW 170,000", "(W)460 (D)490 (SH)450 (H)940"],
["wood", "p33", "라떼(LATTE) BLACK", "TEAK WOOD", "KRW 170,000", "(W)460 (D)490 (SH)450 (H)940"],
["wood", "p32", "라떼(LATTE) NATURAL", "TEAK WOOD", "KRW 170,000", "(W)460 (D)490 (SH)450 (H)940"],
["wood", "p31", "디아망(DIAMANT) KHAKI", "BEECH WOOD", "KRW 230,000", "(W)565 (D)600 (SH)450 (H)870"],
["wood", "p30", "디아망(DIAMANT) BROWN", "BEECH WOOD", "KRW 230,000", "(W)565 (D)600 (SH)450 (H)870"],
["wood", "p29", "디렉터(DIRECTOR)", "ASH WOOD", "KRW 190,000", "(W)610 (D)560 (SH)480 (H)850"],
["wood", "p28", "듀스(DEUX) WALNUT WOOD", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p27", "듀스(DEUX) WALNUT PU", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p26", "듀스(DEUX) VINTAGE WOOD", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p25", "듀스(DEUX) VINTAGE PU", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p24", "듀스(DEUX) RUSTIC WOOD", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p23", "듀스(DEUX) RUSTIC PU", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p22", "듀스(DEUX) NATURAL WOOD", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p21", "듀스(DEUX) NATURAL PU", "TEAK WOOD", "KRW 186,000", "(W)465 (D)585 (SH)430 (H)800"],
["wood", "p20", "다이애나(DIANA) WALNUT", "TEAK WOOD", "KRW 160,000", "(W)500 (D)520 (SH)450 (H)820"],
["wood", "p19", "다이애나(DIANA) RUSTIC", "TEAK WOOD", "KRW 160,000", "(W)500 (D)520 (SH)450 (H)820"],
["wood", "p18", "다이애나(DIANA) NATURAL", "TEAK WOOD", "KRW 160,000", "(W)500 (D)520 (SH)450 (H)820"],
["wood", "p17", "노블레스(NOBLESSE)", "OAK WOOD", "KRW 800,000", "(W)430 (D)505 (SH)470 (H)860"],
["wood", "p16", "네로(NERO)", "ASH WOOD", "KRW 154,000", "(W)430 (D)470 (SH)450 (H)805"],
["wood", "p15", "나폴레옹(NAPOLEON) WHITE", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p14", "나폴레옹(NAPOLEON) BLACK", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p13", "나폴레옹(NAPOLEON) VINTAGE WHITE", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p12", "나폴레옹(NAPOLEON) VINTAGE BLACK", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p11", "나폴레옹(NAPOLEON) WALNUT", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p10", "나폴레옹(NAPOLEON) VINTAGE WALNUT", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p9", "나폴레옹(NAPOLEON) BLUE", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p8", "나폴레옹(NAPOLEON) RED", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p7", "나폴레옹(NAPOLEON) GREEN", "BEECH WOOD", "KRW 160,000", "(W)430 (D)450 (SH)450 (H)770"],
["wood", "p6", "나나(NANA) B", "OAK WOOD", "KRW 240,000", "(W)560 (D)630 (SH)450 (H)720"],
["wood", "p5", "나나(NANA) A", "OAK WOOD", "KRW 240,000", "(W)670 (D)630 (SH)420 (H)690"],
["wood", "p4", "플라워(FLOWER) IVORY PU", "RUBBER WOOD", "KRW 210,000", "(W)500 (D)560 (SH)475 (H)960"],
["wood", "p3", "플라워(FLOWER) BLACK FABRIC", "RUBBER WOOD", "KRW 210,000", "(W)500 (D)560 (SH)475 (H)960"],
["wood", "p2", "플라워(FLOWER) BROWN PU", "RUBBER WOOD", "KRW 210,000", "(W)500 (D)560 (SH)475 (H)960"],
["wood", "p1", "플라워(FLOWER) GREY FABRIC", "RUBBER WOOD", "KRW 210,000", "(W)500 (D)560 (SH)475 (H)960"]
];

    this.metal = [
["metal", "p27", "하비(HAVI) BLACK", "STEEL", "KRW 116,000", "(W)480 (D)600 (SH)450 (H)780"],
["metal", "p26", "하비(HAVI) BROWN", "STEEL", "KRW 116,000", "(W)480 (D)600 (SH)450 (H)780"],
["metal", "p25", "하비(HAVI) GREEN", "STEEL", "KRW 116,000", "(W)480 (D)600 (SH)450 (H)780"],
["metal", "p24", "퀸스(QUEENS) ROSEGOLD", "STAINLESS STEEL", "KRW 320,000", "(W)515 (D)490 (SH)460 (H)1015"],
["metal", "p23", "인아웃(IN & OUT) ORANGE", "STEEL", "KRW 136,000", "(W)510 (D)480 (SH)450 (H)780"],
["metal", "p22", "인아웃(IN & OUT) BLACK", "STEEL", "KRW 136,000", "(W)510 (D)480 (SH)450 (H)780"],
["metal", "p21", "인아웃(IN & OUT) GREEN", "STEEL", "KRW 136,000", "(W)510 (D)480 (SH)450 (H)780"],
["metal", "p20", "오로(ORO) GOLD", "STEEL (도금)", "KRW 170,000", "(W)440 (D)420 (SH)450 (H)800"],
["metal", "p19", "쉬크(SCHICK) BLUE", "STEEL", "KRW 96,000", "(W)450 (D)500 (SH)450 (H)1010"],
["metal", "p18", "샤이니(SHINY) BLUE", "STEEL (도금)", "KRW 160,000", "(W)530 (D)550 (SH)460 (H)770"],
["metal", "p17", "샤이니(SHINY) RED", "STEEL (도금)", "KRW 160,000", "(W)530 (D)550 (SH)460 (H)770"],
["metal", "p16", "샤이니(SHINY) GREY", "STEEL (도금)", "KRW 160,000", "(W)530 (D)550 (SH)460 (H)770"],
["metal", "p15", "뽐뿌 스몰(PPOMPPU) CHECK BROWN", "STEEL", "KRW 160,000", "(W)470 (D)450 (SH)460 (H)770"],
["metal", "p14", "뽐뿌 스몰(PPOMPPU) LIGHT GREEN", "STEEL", "KRW 160,000", "(W)470 (D)450 (SH)460 (H)770"],
["metal", "p13", "뽐뿌 스몰(PPOMPPU) BROWN PU", "STEEL", "KRW 160,000", "(W)470 (D)450 (SH)460 (H)770"],
["metal", "p12", "뽐뿌 스몰(PPOMPPU) NAVY PU", "STEEL", "KRW 160,000", "(W)470 (D)450 (SH)460 (H)770"],
["metal", "p11", "뽐뿌 스몰(PPOMPPU) GREY", "STEEL", "KRW 160,000", "(W)470 (D)450 (SH)460 (H)770"],
["metal", "p10", "브루(VREW) PINK", "STEEL (도금)", "KRW 180,000", "(W)580 (D)640 (SH)380 (H)830"],
["metal", "p9", "브루(VREW) BLUE", "STEEL (도금)", "KRW 180,000", "(W)580 (D)640 (SH)380 (H)830"],
["metal", "p8", "브루(VREW) GREY", "STEEL (도금)", "KRW 180,000", "(W)580 (D)640 (SH)380 (H)830"],
["metal", "p7", "리프(LEAF) SILVER", "STEEL", "KRW 440,000", "(W)510 (D)570 (SH)450 (H)830"],
["metal", "p6", "다모아 암(DAMOA ARM) FLWOER", "STEEL", "KRW 136,000", "(W)630 (D)470 (SH)440 (H)750"],
["metal", "p5", "다모아 암(DAMOA ARM) ORANGE", "STEEL", "KRW 136,000", "(W)630 (D)470 (SH)440 (H)750"],
["metal", "p4", "다모아 암(DAMOA ARM) BROWN", "STEEL", "KRW 136,000", "(W)630 (D)470 (SH)440 (H)750"],
["metal", "p3", "다모아 사이드(DAMOA SIDE) FLOWER", "STEEL", "KRW 116,000", "(W)490 (D)470 (SH)440 (H)750"],
["metal", "p2", "다모아 사이드(DAMOA SIDE) ORNAGE", "STEEL", "KRW 116,000", "(W)490 (D)470 (SH)440 (H)750"],
["metal", "p1", "다모아 사이드(DAMOA SIDE) GREY", "STEEL", "KRW 116,000", "(W)490 (D)470 (SH)440 (H)750"],
];

    this.sofa = [["sofa", "", "", "", "", ""],
["sofa", "", "", "", "", ""]
]

    this.table = [["table", "", "", "", "", ""],
["table", "", "", "", "", ""]
]

    this.others = [["others", "p3", "크라운 (CROWN)", "Aluminium", "KRW 150,000", "(W)415 (D)430 (SH)450 (H)920"],
  ["others", "p2", "주피 (JUPI)", "TEAK WOOD + STEEL", "KRW 220,000", "(W)350 (D)350 (H)560 ~ 680"],
  ["others", "p1", "뽐뿌 스툴 (PPOMPPU STOOL)", "ELM WOOD + STEEL", "KRW 96,000", "(W)400 (D)400 (H)450"]
];


  /*list 갯수 적기*/
   this.wood1 = 20;
   this.wood2 = 20;
   this.wood3 = 20;
   this.wood4 = 20;
   this.wood5 = 16;
   this.others1 = 3;
   this.metal1 = 20;
   this.metal2 = 7;
   this.new1 = 3;
   this.sofa1 = 0;
   this.table1 = 0;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  let list = new List;
  let main = document.getElementsByTagName("main")[0];
  let page_value = main.className;
  let ul = document.createElement("ul");
  main.insertBefore(ul, main.childNodes[0]);

  if(page_value == "wood1" ||
  page_value == "wood2" ||
  page_value == "wood3" ||
  page_value == "wood4" ||
  page_value == "wood5"){
    for(let i=0; i<list.wood.length; i++){
      list.category = list.wood[i][0];
      list.product = list.wood[i][1];
      list.product_name = list.wood[i][2];
      list.product_material = list.wood[i][3];
      list.product_price = list.wood[i][4];
      list.product_size = list.wood[i][5];

      list.wood_HTML.push(`<a href="${list.category}_${list.product}.html">
        <figure>
          <img src="img/${list.category}/${list.product}/thumb.jpg" alt="Image Not Found">
        </figure>
        <div class="info">
          <div class="left">
            <p><b>${list.product_name}</b><br>${list.product_material}</p>
          </div>
          <div class="right">
            <p>${list.product_price}</p>
          </div>
        </div>
        <div class="size">
          <div class="text">
            <p>${list.product_size}</p>
          </div>
        </div>
      </a>`);
    } /*반복함수 종료*/
  }else if(page_value == "metal1" ||
  page_value == "metal2"){
    for(let i=0; i<list.metal.length; i++){
      list.category = list.metal[i][0];
      list.product = list.metal[i][1];
      list.product_name = list.metal[i][2];
      list.product_material = list.metal[i][3];
      list.product_price = list.metal[i][4];
      list.product_size = list.metal[i][5];

      list.metal_HTML.push(`<a href="${list.category}_${list.product}.html">
        <figure>
          <img src="img/${list.category}/${list.product}/thumb.jpg" alt="Image Not Found">
        </figure>
        <div class="info">
          <div class="left">
            <p><b>${list.product_name}</b><br>${list.product_material}</p>
          </div>
          <div class="right">
            <p>${list.product_price}</p>
          </div>
        </div>
        <div class="size">
          <div class="text">
            <p>${list.product_size}</p>
          </div>
        </div>
      </a>`);
    } /*반복함수 종료*/
  }else if(page_value == "others1"){
    for(let i=0; i<list.others.length; i++){
      list.category = list.others[i][0];
      list.product = list.others[i][1];
      list.product_name = list.others[i][2];
      list.product_material = list.others[i][3];
      list.product_price = list.others[i][4];
      list.product_size = list.others[i][5];

      list.others_HTML.push(`<a href="${list.category}_${list.product}.html">
        <figure>
          <img src="img/${list.category}/${list.product}/thumb.jpg" alt="Image Not Found">
        </figure>
        <div class="info">
          <div class="left">
            <p><b>${list.product_name}</b><br>${list.product_material}</p>
          </div>
          <div class="right">
            <p>${list.product_price}</p>
          </div>
        </div>
        <div class="size">
          <div class="text">
            <p>${list.product_size}</p>
          </div>
        </div>
      </a>`);
    } /*반복함수 종료*/
  }else if(page_value == "new1"){
    for(let i=0; i<list.new.length; i++){
      list.category = list.new[i][0];
      list.product = list.new[i][1];
      list.product_name = list.new[i][2];
      list.product_material = list.new[i][3];
      list.product_price = list.new[i][4];
      list.product_size = list.new[i][5];

      list.new_HTML.push(`<a href="${list.category}_${list.product}.html">
        <figure>
          <img src="img/${list.category}/${list.product}/thumb.jpg" alt="Image Not Found">
        </figure>
        <div class="info">
          <div class="left">
            <p><b>${list.product_name}</b><br>${list.product_material}</p>
          </div>
          <div class="right">
            <p>${list.product_price}</p>
          </div>
        </div>
        <div class="size">
          <div class="text">
            <p>${list.product_size}</p>
          </div>
        </div>
      </a>`);
    } /*반복함수 종료*/
  }


  /* 내용 삽입 */
  if(page_value == "wood1"){
    for(let i=0; i<list.wood1; i++){
      let li = document.createElement("li");
      li.innerHTML = list.wood_HTML[i];
      ul.appendChild(li);
    }
  }else if(page_value == "wood2"){
    for(let i=0; i<list.wood2; i++){
      let li = document.createElement("li");
      li.innerHTML = list.wood_HTML[i+20];
      ul.appendChild(li);
    }
  }else if(page_value == "wood3"){
    for(let i=0; i<list.wood3; i++){
      let li = document.createElement("li");
      li.innerHTML = list.wood_HTML[i+40];
      ul.appendChild(li);
    }
  }else if(page_value == "wood4"){
    for(let i=0; i<list.wood4; i++){
      let li = document.createElement("li");
      li.innerHTML = list.wood_HTML[i+60];
      ul.appendChild(li);
    }
  }else if(page_value == "wood5"){
    for(let i=0; i<list.wood5; i++){
      let li = document.createElement("li");
      li.innerHTML = list.wood_HTML[i+80];
      ul.appendChild(li);
    }
  }

  if(page_value == "metal1"){
    for(let i=0; i<list.metal1; i++){
      let li = document.createElement("li");
      li.innerHTML = list.metal_HTML[i];
      ul.appendChild(li);
    }
  }else if(page_value == "metal2"){
    for(let i=0; i<list.metal2; i++){
      let li = document.createElement("li");
      li.innerHTML = list.metal_HTML[i+20];
      ul.appendChild(li);
    }
  }

  if(page_value == "others1"){
    for(let i=0; i<list.others1; i++){
      let li = document.createElement("li");
      li.innerHTML = list.others_HTML[i];
      ul.appendChild(li);
    }
  }

  if(page_value == "new1"){
    for(let i=0; i<list.new1; i++){
      let li = document.createElement("li");
      li.innerHTML = list.new_HTML[i];
      ul.appendChild(li);
    }
  }

});
