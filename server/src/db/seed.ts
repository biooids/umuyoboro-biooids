import prisma from "./prisma.js";

export const examsToSeed = [
  {
    examNumber: 1,
    title: "Igice cya 1",
    isFree: true,
    questions: [
      {
        text: "Iyo imirimo ikorwa mu muhanda icyapa cyerekana ikorwa ry'iyo mirimo kigomba kugira uruhande rufite:",
        options: [
          "Cm 50 z'uruhande",
          "Cm 55 z'uruhande",
          "Cm 40 z'uruhande",
          "M 1 y'uruhande",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Ubugari bw'imizigo yikorewe n'ipikipiki ifite akanyabiziga kuruhande kimwe n'ubwa iya rumoruki ikuruwe na bene icyo kinyabiziga ntiburenza:",
        options: [
          "Santamirero 75 : (igare)",
          "Metero 1,25 : (moto cg pikipiki)",
          "Metero 1,50",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Iyo imizigo isumba impera y'inyuma y'ikinyabiziga ho metero irenga, igice gihera k'umuzigo kigomba kugaragazwa ku manywa:",
        options: [
          "N'agatambaro kera gafite cm 50 z'uruhande",
          "N'agatambaro gatukura gafite cm 59 z'uruhande",
          "N'agatambaro gatukura gafite cm 50 z'uruhande",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Ikinyabiziga gishyirwaho ikimenyetso cy’uko umuyobozi wacyo yabonye ikimenyetso cy’uwitegura kumunyuraho ni ikinyabiziga gikurikira:",
        options: [
          "Kirenza uburebure bwa metero 10",
          "Kirenza metero 2,10 z'ubugari",
          "Kirenza metero 8 z'uburebure",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Abanyamaguru banyura mu butaka butsindagiye butandukanya imihanda iyo:",
        options: [
          "Nta tuyira to ku mpande z'umuhanda duhari",
          "Nta nkengero yegutse ihari",
          "A na B ni ibisubizo by'ukuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Amatara ndanga mbere yakira rimwe buri gihe n'amatara akurikira:",
        options: [
          "Maremare",
          "Magufi na kamenabihu y'imbere",
          "Ndangamubyimba",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Abayobozi b'amagare na velomoteri bubahiriza amategeko agenga abanyamaguru iyo:",
        options: [
          "Bagenda mukayira k'abanyamaguru",
          "Bagenda ku nkengero yegutse",
          "Bayoboye ikinyabiziga cyabo batacyicayeho",
          "A na B ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Iyo umuhanda ugabanyijwemo ibisate bibiri kandi kuwugendamo bigakorwa mu byerekezo byombi, abayobozi babujijwe kugendera mu gisate cy'ibumoso:",
        options: [
          "N'iyo kujya muri urwo ruhande byemewe",
          "Keretse kujya muri urwo ruhande byemewe",
          "Keretse iyo ari umuhanda w'icyerekezo",
          "Nta gisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Amatara maremare n'amagufi azima iyo:",
        options: [
          "Ikinyabiziga gihagaze",
          "Ikinyabiziga kigiye guhura n'ikindi",
          "Umuhanda umurikiwe hose",
          "Bishoboka kubona neza muri metero 100",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Icyapa gitegeka gukikira gifite ubuso bw'ibara:",
        options: [
          "Ryera",
          "Ritukura",
          "Ry'ubururu",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Gushyira mu muhanda ibinyabiziga bikururana birenze bitatu bitangirwa uruhushya na:",
        options: [
          "Perefe",
          "Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Minisitiri w'imirimo ya leta",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Ubugari bw'imizigo yikorewe n'igare na velomoteri kimwe na rumoruki zikuruwe nabyo ntiburenza:",
        options: ["Metero 1,25", "Metero 1", "Metero 2,10", "Santimetero 75"],
        correctAnswerIndex: 3,
      },
      {
        text: "Umubare ntarengwa w'ibinyabiziga bikururana ni:",
        options: ["Bibiri", "Bitatu", "Bine", "Ntagisubizo cy'ukuri kirimo"],
        correctAnswerIndex: 0,
      },
      {
        text: "Icyapa cyerekana inzira y'amatungo itegetswe gifite ubuso bukurikira:",
        options: [
          "Bwera",
          "Bw'ubururu",
          "Bw'umuhondo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Umuvuduko ntarengwa w'ibinyabiziga bihinga {bifite imipira irambura cg utarambuka} bishobora kugeza k'ubugari bwa metero 3 ni:",
        options: [
          "Km 25 mu isaha",
          "Km 20 mu isaha",
          "Km 40 mu isaha",
          "Km 50 mu isaha",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Ubugari bw'imizingo yikorewe n'ikinyabiziga bupimiwe mu butambike ubwo ari bwo bwose ntiburenza:",
        options: [
          "Metero 2,50",
          "Metero 3",
          "Metero 2,65",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Umuvuduko ntarengwa w'ibinyabiziga bitwarira abantu hamwe mu nsisiro ni:",
        options: [
          "Km 50 mu isaha",
          "Km 40 mu isaha",
          "Km 60 mu isaha",
          "Km 75 mu isaha",
          "Km 70 mu isaha",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Imburira zimurika zikoreshwa kuburyo bukurikira:",
        options: [
          "Bacana bazimya vubavuba amatara ndanga",
          "Bacana bazimya vubavuba amatara magufi",
          "Basimburanya vuba vuba amatara magufi n'amatara maremare",
          "B na C ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Ubugari bwa rumoruki ikuruwe n'ipikipiki icometseho akanyabiziga ku ruhande rwayo cyangwa ikuruwe n'ikinyamitende 3 cyangwa 4 gifite cyangwa kidafite moteri ntiburenza:",
        options: [
          "Santimetero 75",
          "Metero 1,25",
          "Metero 1,50",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Iyo kuva bwije kugeza bukeye bidashoboka kubona neza muri metero 200, rumoruki ikuruwe na velomoteri, ikinyamitende cyangwa ipikipiki idafite akanyabiziga kuruhande igomba kugaragazwa:",
        options: [
          "N'itara ry'umutuku",
          "N'itara ry'umuhondo",
          "N'itara rimyasa",
          "N'itara ryera, ry'umuhondo cyangwa risa n'icunga",
        ],
        correctAnswerIndex: 3,
      },
    ],
  },
  {
    examNumber: 2,
    title: "Igice cya 2",
    isFree: false,
    questions: [
      {
        text: "Iyo imirimo iri gukorwa mu muhanda icyapa kiyerekana kigomba kugira uruhande rufite:",
        options: [
          "Cm 50 z'uruhande",
          "Cm 40 z'uruhande",
          "Cm 70 z'uruhande",
          "Cm 90 z'uruhande",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Uburebure ntarengwa bw’ibinyabiziga bikururana ni:",
        options: ["Metero 15", "Metero 20", "Metero 10", "Metero 25"],
        correctAnswerIndex: 3,
      },
      {
        text: "Ibizirikisho by'iminyururu cyangwa by'insinga kimwe n'ibindi bizirikisho by'ingoboka bigaragazwa n'ikimenyetso gikurikira:",
        options: [
          "Icyapa cyera cya mpande enye gifite cm 30 z'uruhande",
          "Igitambaro gitukura gifite cm 50 z'uruhande",
          "Icyapa cyera cya mpande enye gifite cm 50 z'uruhande",
          "Icyapa cyera cya mpande eshatu gifite cm 30 z'uruhande",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Itara ryo gusubira inyuma rigomba kohereza urumuri mu ntera ikurikira:",
        options: ["Metero 30", "Metero 50", "Metero 150", "Metero 20"],
        correctAnswerIndex: 3,
      },
      {
        text: "Uretse iyo bitegetswe n'umukozi ubifitiye ububasha kandi batakwiteza ibyago, abayobozi b'ibinyabiziga ndakumirwa ntibategetswe gukurikiza amategeko akurikira:",
        options: [
          "Yerekeye ibyapa",
          "Yerekeye ibimenyetso byo mu muhanda",
          "Yerekeye gutambuka mbere",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Za rumoruki zigira amatara yateganyirijwe ibinyabiziga bizikurura iyo:",
        options: [
          "Zifite ubugali burengeje metero 2 na santimetero 10",
          "Imbogamizi itewe na zo idatuma amatara yazo atabona neza",
          "Zifite uburebure burenga metero 6",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Abanyamaguru ntibashobora gutinda cyangwa guhagarara mu muhanda keretse:",
        options: [
          "Nta kinyabiziga kigenda",
          "Ari mu myanya yabagenewe",
          "Ibimenyetso by'umuriro bibibemerera",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Ibinyabiziga bikururwa n'inyamanswa bihererekanijwe mu ubutumwa bigomba kugabanywamo amatsinda afite uburebure butarengeje:",
        options: ["Metero 300", "Metero 100", "Metero 500", "Metero 30"],
        correctAnswerIndex: 2,
      },
      {
        text: "Amatara ndanga atuma ikinyabiziga kigaragara mu ntera ikurikira:",
        options: ["Metero 300", "Metero 200", "Metero 150", "Metero 100"],
        correctAnswerIndex: 0,
      },
      {
        text: "Umuvuduko ntarengwa w'ibinyabiziga bikururana birenze bitatu:",
        options: [
          "Km 25 mu isaha",
          "Km 20 mu isaha",
          "Km 5 mu isaha",
          "Km 15 mu isaha",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Ahari hejuru cyane h'ubuso bumurika bw'amatara magufi ntibushobora kuba aharenze:",
        options: [
          "Metero 1,90",
          "Metero 1,55",
          "Metero 1,20",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Ibyapa ndanga bishyirwa aho biboneye kurushaho ukurikijwe:",
        options: [
          "Aho abagenzi bireba bagana",
          "Ubwinshi bw'ibinyabiziga",
          "Uko birushije kubonwa neza n'abo byagenewe",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Ku matara ijambo ubuso bubonesha risobanura ubuso:",
        options: [
          "Burabagiranamo urumuli",
          "Busohokana urumuli",
          "Bubonesha",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Amategeko y'ihariye yo kugenda mu byambu (ubwato) no ku bibuga by'indege atihutirwa amara igihe gikurikira:",
        options: [
          "Kitarenze iminsi 30",
          "Kitarenze amezi 3",
          "Kitarenze amezi 6",
          "Kitarenze amezi atandatu",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Amatara ya kamenabihu ashobora gusimburwa n'amatara akurikira:",
        options: [
          "Yo kubisikana",
          "Y'urugendo",
          "Ndanga",
          "A na B ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Igice cy'imizigo kirenga ku mpera y'inyuma y'ikinyabiziga ntikirenza:",
        options: ["Metero 1", "Metero 2,10", "Metero 2,70", "Metero 3"],
        correctAnswerIndex: 3,
      },
      {
        text: "Hashyirwaho umuherekeza wunganira umuyobozi w'inyamanswa zikurura ikinyabiziga iyo umubare wazo:",
        options: [
          "Urenze enye",
          "Urenze eshatu",
          "Urenze ebyiri",
          "Urenze eshanu",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Igice gikikijwe n'uduce tugali dutandukanye tw'ibara ryera kinyurwamo bikurikira:",
        options: [
          "Amagare na velomoteri",
          "Ibinyabiziga bigenda buhoro",
          "Ibinyabiziga bitwarira abantu hamwe",
          "B na C ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Igice cy'imizigo yikorewe n'amagare na velomoteri kirenga ku impera y'inyuma ntibushobora kurenza:",
        options: ["Cm 50", "Cm 40", "M 1", "M 3"],
        correctAnswerIndex: 0,
      },
      {
        text: "Iyo ikinyabiziga cyikoreye ibintu birebire cyane bidashobora kugabanywamo ibice, icyogihe imizigo ntishobora kurenza kumpera y'inyuma y'ikinyabiziga ho:",
        options: ["Metero 2", "Metero 2,10", "Metero 3", "Metero 1,50"],
        correctAnswerIndex: 1,
      },
    ],
  },
  {
    examNumber: 3,
    title: "Igice cya 3",
    isFree: false,
    questions: [
      {
        text: "Umubare w'inyamanswa zikurura ikinyabiziga ntushobora kurenga:",
        options: [
          "Enye ikurikiranya n'eshatu zibangikanye",
          "Eshatu zikurikiranye n'enye zibangikanye",
          "Ebyiri zibangikanye n'enye zikurikiranye",
          "Eshatu zikurikiranye n'ebyiri zibangikanye",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Umuvuduko ntarengwa wa velomoteri mu gahanda k’amagare ni:",
        options: [
          "Km 50 mu isaha",
          "Km 25 mu isaha",
          "Km 60 mu isaha",
          "Km 40 mu isaha",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Ubugari bw'ikinyabiziga bupimiwe ku butambike ubwo ari bwo bwose ntiburenga:",
        options: ["Metero 2,65", "Metero 2,50", "Metero 3", "Metero 2,10"],
        correctAnswerIndex: 0,
      },
      {
        text: "Abanyamaguru batatanye cyangwa bari mu dutsiko batagamije gahunda imwe banyura mu muhanda cyangwa mu gahanda k'amagare iyo:",
        options: [
          "Nta tuyira to ku mpande z'umuhanda duhari cyangwa zitagendeka",
          "Nta nkengero yegutse ihari cyangwa butagendeka",
          "Nta butaka butsindagiye buhari cyangwa butagendeka",
          "Nta nkengero y'umuhanda iringaniye ihari",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Inyamanswa zigomba kuyoborwa ku inkombe:",
        options: [
          "Y'iburyo",
          "Y'ibumoso",
          "Y'iburyo cyangwa ibumoso",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Amatara ashakisha acanwa:",
        options: [
          "Bidashoboka kubona muri metero 100",
          "Bidashoboka kubona muri metero 200",
          "Iyo ari ngombwa kandi bitabangamiye abandi bayobozi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Kimwe mu binyabiziga bikurikira ntibishobora gukurura rumoruki n'imwe:",
        options: [
          "Ipikipiki ifite akanyabaziga kuruhande",
          "Ipikipiki idafite akanyabiziga kuruhande",
          "Velomoteri",
          "Igare",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Utugarura rumuri turi mu mbavu z'ikinyabiziga tugomba gusa:",
        options: [
          "Umweru",
          "Umutuku",
          "Icyatsi kibisi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Ku mateme hagati y'ibinyabiziga bifite ibimenyetso byerekana umuvuduko hagomba kubamo intera ya:",
        options: ["Metero 3", "Metero 2", "Metero 5", "Metero 10"],
        correctAnswerIndex: 3,
      },
      {
        text: "Imikorere y'imyasa ry'amatara ndangacyerekezo rigomba kuba inshuro:",
        options: [
          "100 mu munota",
          "85 mu munota",
          "90 mu munota",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Imyanya ibinyabiziga bigomba guhagararamo ishobora kugaragazwa:",
        options: [
          "N'imirongo yera irombereje",
          "N'imiringo yera yambukiranya umuhanda",
          "N'imirongo y'umuhondo yambukiranya umuhanda",
          "N'umurongo mugali wera udacagaguye uciye ku umuhanda",
        ],
        correctAnswerIndex: 1,
      },
      {
        text: "Uburemere ntarengwa bwa rumoruki feri yayo y'urugendo ishobora gukoreshwa gusa n'uburemere ni:",
        options: ["Kg 750", "Kg 3000", "Kg 1500", "Kg 3500"],
        correctAnswerIndex: 3,
      },
      {
        text: "Iyo uburebure bw'imizigo iri ku kanyamizigo gakururwa (gakururwa n'inyamanswa) burenga metero 12:",
        options: [
          "Hagomba umuherekeza ukurikira icyo kinyabiziga ku maguru",
          "Umuyobozi agomba gukurura icyo kinyabiziga ku maguru",
          "Hashyirwaho ibimenyetso bigaragaza iyo mizigo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
      },
      {
        text: "Birabujijwe gutwara ku ntebe y'imbere y'imodoka abana badafite:",
        options: [
          "Imyaka 7",
          "Imyaka 10",
          "Ingingo ya 16",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Igice gikikijwe n'uduce tugali dufite umweru tw'ibara kinyurwamo n'ibinyabiziga bikurukira:",
        options: [
          "Amagare na velomoteri z'imitende 2",
          "Ibinyabiziga bigenda buhoro",
          "Ibinyabiziga bitwarira abantu hamwe",
          "B na C ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Ikizirikanyije ibinyabiziga bikururana kigomba kugaragazwa, iyo hagati y'uruhande rw'imbere rwa rumoruki n'uruhande rw'inyuma rw'ikinyabiziga gikurura hari umwanya ukurikira:",
        options: [
          "Urenze metero imwe",
          "Utarenze metero imwe",
          "Urenze metero eshatu",
          "Utarenze metero eshatu",
        ],
        correctAnswerIndex: 2,
      },
      {
        text: "Ibimenyetso bikoreshwa berekana impera y'inyuma y'imizigo bishyirwa ku buhagarike bukurikira:",
        options: [
          "Hagati ya cm 80 na cm 110",
          "Butarenze m 1,50",
          "Butarenze m 1,25",
          "Butarenze m 1,55",
        ],
        correctAnswerIndex: 3,
      },
      {
        text: "Amatara maremare amurika mu ntera ya:",
        options: ["Metero 200", "Metero 300", "Metero 150", "Metero 100"],
        correctAnswerIndex: 0,
      },
      {
        text: "Umuyobozi w'imodoka agomba kugira aho yicara hafite ubugari bwa:",
        options: ["Cm 50", "Cm 60", "Cm 40", "Ntagisubizo cy'ukuri kirimo"],
        correctAnswerIndex: 3,
      },
      {
        text: "Bamwe mu bakurikira ntibabarirwa mu bakozi babifite ububasha:",
        options: [
          "Abagenza cyaha n'abakozi bo muri gasutamo",
          "Abapolisi bo mu mutwe ushinzwe umutekano wo mu muhanda",
          "Abofisiye ba polisi y'ingabo",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 3,
      },
    ],
  },
];

export const exercisesToSeed = [
  {
    exerciseNumber: 1,
    title: "imyitozo 1",
    isFree: true,
    questions: [
      {
        text: "Iyo banyuze hafi y'inkomyi abanyamaguru bagomba gukikira banyuze mumuhanda abayobozi bagomba gusiga umwanya ufite ubugari bukurikira",
        options: [
          "Bwa metero imwe hagati y'abo n'inkomyi",
          "Butarenze metero imwe hagati y'abo n'inkomyi",
          "Butageze kuri metero imwe hagati y'abo n'inkomyi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Iyo umuhanda ugabanyijwemo ibisate bitatu kandi ukaba ugendwamo mubyerekezo byombi, umuyobozi wese abujijwe kugendera:",
        options: [
          "Mugisate cy'ibumoso",
          "Mugisate cyegereye inkombe y'ibumoso bw'umuhanda",
          "Mugisate cy'iburyo",
          "Mugisate cy'ibumoso cyeretse kujya muri urwo ruhande byemewe",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ikimenyetso gitanzwe mbere yo gukata kigomba gukomeza kwerekanwa:",
        options: [
          "Kugeza gukata birangiye",
          "Mugihe ikinyabiziga kikiyoborwa",
          "Kugeza kujya k'uruhande birangiye",
          "A na B n'ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Kugirango babe umutekano mumuhanda unyura muntara nyinshi icyemezo gifatwa:",
        options: [
          "N'umukuru w'intara",
          "Na minisitiri w'abakozi ba leta",
          "Ntagisubizo cy'ukuri kirimo",
          "Numuyobozi mukuru wa polisi",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Iyo ari ukugenda kumirongo ibangikanye, umuyobozi ashobora gukatira iburyo aruko ari:",
        options: [
          "A na B n'ibisubizo by'ukuri",
          "Mumurongo w'ubumoso",
          "Mumurongo w'iburyo",
          "Mumurongo w'uburyo cyangwa w'ubumoso",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Ijambo inzira y'ibinyabiziga risobanura:",
        options: [
          "Umuhanda n'inzira ziwukikije",
          "Ahanyurwa n'ibinyabiziga",
          "Umuhanda n'inkengero zegutse",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Ukuboko kuzamuwe n'umukozi ubifitiye ububasha gutegeka abagenzi bose guhagarara keretse:",
        options: [
          "Abageze mu isangano",
          "Abataragera mu isangano",
          "Abari hafi y'isangano",
          "Abatwaye ibinyabiziga ndakumirwa",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Umuyobozi wese ugeze mu isangano aho ibinyabiziga biyoborwa n'ibimenyetso by'umuriro agomba:",
        options: [
          "Kwitonda",
          "Guhita ava muri iryo sangano",
          "Kubahiriza ibyo bimenyetso",
          "Kugabanya umuvuduko",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Uruhushya rw'agateganyo rwo gutwara ibinyabiziga rugira agaciro:",
        options: [
          "Kunzego zose zibinyabiziga",
          "Kunzego zose uretse C,D na E",
          "Kunzego A na B",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Abayobozi batambuka mbere mu isangano bagendamo bazengurutse ni:",
        options: [
          "Abaturutse mu kuboko kw'iburyo",
          "Abarigezemo mbere",
          "Abatwaye ibinyabiziga ndakumirwa",
          "Abatwaye ibinyabiziga bya gisirikare",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Iyo igenda munzira nyabagendwa, imikumbi igomba kugabanywamo udutsiko tugizwe n'inyamanswa:",
        options: [
          "Zitarenze icumi kandi dutandukanyijwe n'intera ya metero",
          "Zitarenze umunani kandi dutandukanijwe n'intera ya metero makumyabiri",
          "Zitarenze icumi kandi dutandukanyijwe n'intera ya metero icumi",
          "Zitarenze makumyabiri kandi dutandukanyijwe n'intera ya metero icumi",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Iyo bibaye ngombwa ko ibinyabiziga by'iminyururu binyuzwa ku inzira nyabagendwa:",
        options: [
          "Ntibigomba kurenza umuvuduko wa km 25 mu isaha",
          "Abayobozi bagomba kubiyobora bitonze",
          "Bishyirwaho ibyangombwa bituma bitangiza umuhanda",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Umurambararo w'ibyapa bibuza n'ibitegeka bikoreshwa mukugaragaza imirimo ikorerwa mumuhanda ni:",
        options: ["Cm 50", "Ntagisubizo cy'ukuri kirimo", "Cm 90", "Cm 75"],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Uruzitiro rukoreshwa mukugaragaza ahakorerwa imirimo munzira nyabagendwa rugomba gushyirwa ku ubuhagarike buri hagati ya:",
        options: [
          "Metero 1,50 na metero 2,10",
          "Ntagisubizo cy'ukuri kirimo",
          "Metero 1 na metero 1,50",
          "Metero 1,25 na metero 1,50",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Uturanga cyerekezo dutoranya tw'ibara ryera dushyirwa:",
        options: [
          "Hafi y'amasangano",
          "Mu masangano",
          "Hafi neza y'ahantu habi",
          "Hafi y'ikorosi",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Umurongo uciyemo uduce umenyesha ko umurongo ukomeza wegereje ushobora kuzuzwa:",
        options: [
          "N'uturangagukata tw'ibara ryera",
          "N'ibimenyetso by'umuriro",
          "N'ibyapa by'inyongera bifite ishusho y'urukiramende",
          "N'imirongo yambukiranya",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Aho ibinyabiziga bitwarira abantu muri rusange bihagarara ahabujijwe guhagarara igihe kirekire hashobora kugaragazwa n'ibishushanyo",
        options: [
          "By'ibara ryera",
          "Ntagisubizo cy'ukuri kirimo",
          "By'ibara ry'umuhondo",
          "By'ibara risa n'icunga rihishije",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ibimenyetso by'inkomyi bishyirwaho:",
        options: [
          "N'uwayiteye",
          "Na polisi y'igihugu",
          "A na C ni ibisubizo by'ukuri",
          "N'ubutegetsi bushinzwe inzira nyabagendwa",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Utubendera dutukura twerekana ahakorerwa imirimo mumuhanda tugomba kugira uruhande rwa:",
        options: ["Cm 50", "Cm 75", "Cm 40", "Cm 15"],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Amatara ashyirwa ahari inkomyi n'imirimo hagati ya nimugoroba no mugitondo ogohe ijuru rikeye agomba kuboneka muntera ya:",
        options: ["Metero 100", "Metero 125", "Metero 150", "Metero 0.75"],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
    ],
  },
  {
    exerciseNumber: 2,
    title: "imyitozo 2",
    isFree: false,
    questions: [
      {
        text: "Mirongo yera yambukiranya umuhanda igomba kugira ubugari hagati ya:",
        options: [
          "Santimetero 40 na santimetero 60",
          "Santimetero 20 na santimetero 60",
          "Santimetero 25 na santimetero 50",
          "Santimetero 10 na santimetero 15",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Impande za kare zera zigomba kugira umubyimba uri hagati:",
        options: [
          "Santimetero 25 na santimetero 50",
          "Santimetero 10 na santimetero 15",
          "Santimetero 20 na santimetero 60",
          "Santimetero 40 na santimetero 60",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Ahanyurwa n'abayobozi b'amagare na velomoteri zifite imitende 2 bambukiranya imihanda haciye imirongo 2 icagaguye igizwe na:",
        options: [
          "Kare na mpandeshatu z'ibara ry'umuhondo",
          "Kare n'ingirwamwashi z'ibara ryera",
          "Kare na mpandeshatu z'ibara ryera",
          "Kare n'ingirwamwashi z'ibara ry'umuhondo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Umurongo mugali wera udacagaguye uciye ku buryo bugororotse ku nkengero y'umuhanda werekana",
        options: [
          "Inkombe mpimbano",
          "Aho abayobozi bagomba guhagarara akanya gato gategetswe",
          "Aho abayobozi bagomba guhagarara akanya gato iyo ari ngombwa",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Imirongo yera irombereje idacagaguye n'icagaguye ishobora gusimburwa n'ibimenyetso by'agateganyo bigizwe:",
        options: [
          "N'imitemeri isa n'icunga rihishije",
          "N'imitemeri isa n'umuhondo",
          "N'ibyapa byo ku umuhanda",
          "A na B ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Uburebure n'ubutandukane by'uduce tw'umurongo ucagaguye buba bukurikiranye hagati ya:",
        options: [
          "Metero 1 na metero 5 no hagati ya metero 2 na metero 10",
          "Metero 2 na metero 5 no hagati ya metero 3 na metero 15",
          "Metero 1 na metero 5 no hagati ya metero 3 na metero 15",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Umurongo w'umuhondo ucagaguye uciye ku inkombe nyayo y'umuhanda, ku musezero w'inzira y'abanyamaguru cyangwa ku nkengero yegutse usobanura ko:",
        options: [
          "Guhagarara umwanya munini birabujijwe",
          "Guhagarara umwanya muto n'umunini birabujijwe",
          "A na B ni ibisubizo by'ukuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Igice cy'inzira nyabagendwa kigarukira kumirongo ibiri yera icagaguye ibangikanye gifite ubugali budahagije ngo imodoka zitambuke neza kiba ari:",
        options: [
          "Inzira y'abanyamaguru",
          "Inzira y'amatungo",
          "Agahanda k'amagare",
          "Inzira y'ibinyabiziga",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Iyo uduce tw'umurongo ari tugufi kandi twegeranye bivugako:",
        options: [
          "Ari hafi y'amasangano",
          "Ari hafi y'icyago kidasobanuye ukundi",
          "Ntagisubizo cy'ukuri kirimo",
          "Ari hafi y'ikorosi",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Itara ry'umutuku, iry'umuhondo ritamyasa cyangwa risa nk'icyatsi kibisi ashobora gusimburwa uko akurikirana:",
        options: [
          "N'umukozi ubifitiye ububasha",
          "N'ibyapa byo ku muhanda",
          "Ntagisubizo cy'ukuri kirimo",
          "N'uturanga cyerekezo dutoranya",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Ahantu uburyo bwo kugenda mu muhanda bwerekanwa n'ibimenyetso bimurika:",
        options: [
          "Ibinyabiziga bagomba kugenda buhoro",
          "Ibinyabiziga bishobora kugenda bibangikanye",
          "Ibinyabiziga bagomba kugabanya umuvuduko",
          "A na B ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Umurambararo w'ubuso bumurika bw'amatara y'inyongera yashyiriweho abanyamaguru ni:",
        options: [
          "Santimetero 5",
          "Santimetero 10",
          "Santimetero 15",
          "Santimetero 20",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Kubimenyetso bimurika byo mu buryo bw'amatara abiri itara ritukura n'iry'icyatsi kibisi azima akurikirana:",
        options: [
          "Habanje kwaka itara ritukura",
          "Yabanje kwakira rimwe",
          "Habanje kwaka itara ry'icyatsi kibisi",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ibimenyetso bimurika byerekana uburyo bwo kugenda mu muhanda bishyirwa:",
        options: [
          "Iburyo cyangwa ibumoso bw'umuhanda",
          "Hejuru y'umuhanda",
          "Ahantu hose biboneye uburyo bwo kugenda",
          "Ibisubizo byose ni byo",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Iyo ubugali bw'umuhanda budahagije ngo ibisikana ryorohe abayobozi:",
        options: [
          "Abayobozi bagomba kuroherana",
          "Bagomba kugenda buhoro",
          "Ntagisubizo cy'ukuri kirimo",
          "Bagomba guhagara",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Iyo icyerekezo kimwe kireba ishami ry'inzira nyabagendwa mu ntara nyinshi, icyerekezo gifatwa na:",
        options: [
          "Minisitiri ushinzwe gutwara ibintu n'abantu",
          "Umukuru wa polisi y'igihugu",
          "Minisitiri w'ubutegetsi bw'igihugu",
          "Minisitiri ushinzwe imirimo ya leta",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Uruhushya rwo gukorera amasiganwa n'indi mikino ku nzira nyabagendwa inyura mu ntara nyinshi rutangwa na:",
        options: [
          "Minisitiri w'umuco na siporo",
          "Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Minisitiri w'imirimo ya leta",
          "Minisitiri w'ubutegetsi bw'igihugu",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Uburemere ntarengwa bujya mu cyome[ubwato] bwerekanwa n'ibyapa bishyirwa:",
        options: [
          "Iburyo bw'umuhanda",
          "Ibumoso bw'umuhanda",
          "Kuri buri nkombe",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Inkombe z'inzira nyabagendwa cyangwa z'umuhanda zishobora kugaragazwa:",
        options: [
          "N'ibyapa",
          "N'ibimenyetso bimurika",
          "N'ibikoresho ngarurarumuri",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Ibiranga imikandara yo kwirinda ibyago bigenwa:",
        options: [
          "N'abakoze ikinyabiziga",
          "Na Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Polisi y'igihugu",
          "Na Minisitiri w'imirimo ya leta",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
    ],
  },
  {
    exerciseNumber: 3,
    title: "imyitozo 3",
    isFree: false,
    questions: [
      {
        text: "Birabujijwe gutwara ku ntebe z'ikinyabiziga umubare w'abantu urenze uwateganyijwe:",
        options: [
          "N'uwagikoze",
          "Na polisi y'igihugu",
          "Na Minisitiri ushinzwe gutwara abantu n'ibintu",
          "Na Minisitiri w'imirimo ya leta",
        ],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Buri modoka igomba kugira uburyo bwo gusubira inyuma bukoreshwa:",
        options: [
          "Imodoka igenda",
          "Imodoka isubira inyuma",
          "Bicaye ku ntebe y'umuyobozi",
          "Umuyobozi yitonze",
        ],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Ikibanyabiziga kigomba gushyirwaho icyerekana umuvuduko ntarengwa kiri aho umuyobozi areba ni ikinyabiziga:",
        options: [
          "Kitarenze umuvuduko wa kilometero 40 mu isaha",
          "Kirenza umuvuduko wa kilometero 40 mu isaha",
          "Kirenza umuvuduko wa kilometero 50 mu isaha",
          "Kitarenza umuvuduko wa kilometero 60 mu isaha",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Isonga y'impombo yohereza ibyotsi ntishobora koherezwa:",
        options: [
          "Ibumoso bw'umuhanda",
          "Iburyo bw'umuhanda",
          "Ibumoso cyangwa iburyo bw'umuhanda",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ihoni rya velomoteri rigomba kumvikanira muri:",
        options: [
          "Metero 50 nibura",
          "Metero 75 nibura",
          "Metero 25 nibura",
          "Metero 20 nibura",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Itara ryo guhagarara rigomba kwaka iyo:",
        options: [
          "Ikinyabiziga gihagaze",
          "Feri y'urugendo ikoreshejwe",
          "Ikinyabiziga kigenda",
          "A na C ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Utugarura rumuri turi inyuma ya za rumoroki tugomba gusa n'igishushanyo cya:",
        options: ["Mpandeshatu", "Kare", "Urukiramende", "Ingirwamwashi"],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Amatara ndangacyerekezo ashobora gufatanwa n'amatara akurikira:",
        options: [
          "Maremare n'amagufi",
          "Ndanda",
          "Amatara yo guhagarara",
          "B na C ni ibisubizo by'ukuri",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Ijambo rumoruki rikoreshwa kuri rumoruki:",
        options: [
          "Zose",
          "Zagenewe gukururwa n'ibikamyo",
          "Zitarenza kg 750",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Amatara ndanga mubyimba agomba kuba adahumishije kandi agaragarira mu ntera ikurikira:",
        options: ["Metero 100", "Metero 150", "Metero 200", "Metero 125"],
        correctAnswerIndex: 2,
        hint: "no hint yet",
      },
      {
        text: "Umuvuduko ntarengwa wa velomoteri hakurikijwe uko yakozwe ni:",
        options: [
          "Km 50 mu isaha",
          "Km 40 mu isaha",
          "Km 25 mu isaha",
          "Km 60 mu isaha",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Amategeko ntayegayezwa atihutirwa ashyirwaho n'amateka ya:",
        options: [
          "Minisitiri wo gutwara abantu n'ibintu",
          "Polisi y'igihugu",
          "Minisitiri w'ubutegetsi bw'igihugu",
          "Perezida wa Repubulika",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Ikinyabiziga ntigishobora gukurura ibinyabiziga birenze:",
        options: ["2", "3", "4", "5"],
        correctAnswerIndex: 0,
        hint: "no hint yet",
      },
      {
        text: "Iyo akanyamizigo gasunikwa cyangwa ibyo gatwaye bidatuma umuyobozi areba neza:",
        options: [
          "Hagomba umuherekeza wunganira umuyobozi",
          "Umuyobozi agomba kugakurura",
          "Umuyobozi arahagarika",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ijambo feri y'urugendo bisobanura:",
        options: [
          "Feri ikoreshwa iyo ikinyabiziga kigenda",
          "Uburyo bukoreshwa kugira ngo ikinyabiziga kigende buhoro cyangwa gihagarare",
          "Feri ikoreshwa n'ikirenge",
          "Ntagisubizo cy'ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Uretse igihe icyapa kibyerekana ukundi, uburemere ntarengwa ku mateme akoze mu inginga z'ibiti no mu mbaho ni:",
        options: ["Toni 10", "Toni 50", "Toni 25", "Toni 8"],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Ibinyabiziga ndakumirwa bigomba kugira intabaza zihariye zifite amajwi ateye atya:",
        options: [
          "Nkarongoroye",
          "Yumvikanira kure",
          "Y’icengera amatwi",
          "A na C ni ibisubizo by’ukuri",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Amatara ndanga cyerekezo agaragarira nijoro igihe rikeye mu ntera ikurikira:",
        options: ["Metero 200", "Metero 100", "Metero 20", "Metero 150"],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
      {
        text: "Ijambo akayira risobanura inzira ifunganye yegenewe abagenzi bakurikira:",
        options: [
          "Abanyamaguru gusa",
          "Abanyamaguru n'ibinyabiziga by'ibiziga 2 gusa",
          "Abanyonzi b'amagare na velomoteri",
          "Ntagisubizo cy’ukuri kirimo",
        ],
        correctAnswerIndex: 1,
        hint: "no hint yet",
      },
      {
        text: "Ikinyabiziga ntigishobora kugira amatara arenze 2 keretse:",
        options: [
          "Ndanga cyerekezo",
          "Ndanga",
          "Ndangamubyimba",
          "A na C ni ibisubizo by’ukuri",
        ],
        correctAnswerIndex: 3,
        hint: "no hint yet",
      },
    ],
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // --- Seed Exams ---
  console.log("Seeding exams...");
  // Clear old exam-related data in a transaction for safety
  await prisma.$transaction([
    prisma.userExamAnswer.deleteMany(),
    prisma.userExamAttempt.deleteMany(),
    prisma.question.deleteMany(),
    prisma.exam.deleteMany(),
  ]);

  for (const examData of examsToSeed) {
    await prisma.exam.create({
      data: {
        examNumber: examData.examNumber,
        title: examData.title,
        isFree: examData.isFree,
        questions: {
          create: examData.questions.map((q) => ({
            text: q.text,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
          })),
        },
      },
    });
  }
  console.log("✅ Seeded exams.");

  // --- Seed Exercises ---
  console.log("Seeding exercises...");
  // Clear old exercise-related data in a transaction for safety
  await prisma.$transaction([
    prisma.exerciseQuestion.deleteMany(),
    prisma.exercise.deleteMany(),
  ]);

  for (const exerciseData of exercisesToSeed) {
    await prisma.exercise.create({
      data: {
        exerciseNumber: exerciseData.exerciseNumber,
        title: exerciseData.title,
        isFree: exerciseData.isFree,
        questions: {
          create: exerciseData.questions.map((q) => ({
            text: q.text,
            options: q.options,
            correctAnswerIndex: q.correctAnswerIndex,
            hint: q.hint,
          })),
        },
      },
    });
  }
  console.log(`✅ Seeded exercises.`);

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
