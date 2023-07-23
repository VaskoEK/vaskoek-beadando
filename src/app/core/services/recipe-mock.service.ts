import { Injectable } from '@angular/core';
import { Recipe } from '../types/recipe.type';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeMockService {

  recipes: Recipe[] = [
    {
      name: "Alap sonkás bableves",
      id: 1,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Alap_sonkas_bableves1.JPG", "../../../assets/soups/Alap_sonkas_bableves2.JPG", "../../../assets/soups/Alap_sonkas_bableves3.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "8 csésze víz", "1 font száraz északi bab, szétválogatva és leöblítve", "½ teáskanál só", "1 csésze apróra vágott sárgarépa", "1 csésze apróra vágott hagyma", "½ szár zeller, apróra vágva", "1 teáskanál darált fokhagyma", "1 teáskanál mustárpor", "2 babérlevél", "1 sonkacsánk", "2 csésze apróra vágott sonka", "½ teáskanál őrölt fehér bors"
      ],
      directions: [
        "Helyezzünk vizet és babot egy nagy edénybe; nagy lángon felforraljuk. Keverjük hozzá a sót, és vegyük le az edényt a tűzről; fedjük le, majd 1 órát állni hagyjuk.",
        "Adjunk hozzá sárgarépát, hagymát, zellert, fokhagymát, mustárt és babérlevelet, majd jól keverjük össze. Adjuk hozzá a sonkacsántot, és forraljuk fel; csökkentsük a hőt alacsonyra, és pároljuk 1 órán át.",
        "Távolítsuk el a sonkacsánkot és dobjuk el. Keverjük hozzá az apróra vágott sonkát, és pároljuk 30 percig. Ízlés szerint ízesítsük őrölt fehér borssal."
      ]
    },
    {
      name: "Sült brokkoli leves",
      id: 2,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Sult_brokkoli_leves.JPG", "../../../assets/soups/Sult_brokkoli_leves.JPG", "../../../assets/soups/Sult_brokkoli_leves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "5 csésze apróra vágott brokkolirózsa és -szár", "1 hagyma, 1 hüvelykes kockákra vágva", "3 gerezd fokhagyma, meghámozva",
        "2 evőkanál olívaolaj", "3 csésze zöldségleves", "4 uncia puha krémsajt", "¾ teáskanál citrombors", "őrölt pirospaprika pehely ízlés szerint"
      ],
      directions: [
        "Helyezzük a brokkolit, a hagymát, a fokhagymát és az olívaolajat egy nagy tálba, és dobáljuk fel, hogy összekeveredjenek. Az előkészített tepsire helyezzük egy rétegben.",
        "A zöldségeket 30-35 perc alatt puhára sütjük, 10 percenként megkeverve. Vegyük ki a sütőből. Vágjunk fel 1/4 csésze brokkoli virágot, amit tegyünk félre a díszítéshez.",
        "A maradék zöldségeket nagy teljesítményű turmixgépben vagy konyhai robotgépben adagonként keverjük össze a zöldséglével, krémsajttal és citromborssal. A levest simára pürésítjük.",
        "Öntsük a levest egy edénybe, közepes-alacsony lángon melegítsük fel, körülbelül 5 percig. Ízlés szerint további citromborssal ízesítjük. Merjük át tálakba. Díszítsük a félretett apróra vágott brokkolival és őrölt pirospaprikával."
      ]
    },
    {
      name: "Házi csirkehúsleves",
      id: 3,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Hazi_csirkehusleves.JPG", "../../../assets/soups/Hazi_csirkehusleves.JPG", "../../../assets/soups/Hazi_csirkehusleves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 (3 font) egész csirke", "4 sárgarépa, félbevágva", "4 szár zeller, félbevágva", "1 nagy hagyma, félbevágva", "só és bors ízlés szerint", "1 teáskanál csirke húsleves granulátum (opcionális)"
      ],
      directions: [
        "Helyezzük a csirkét, a sárgarépát, a zellert és a hagymát egy nagy fazékba; adjunk hozzá annyi hideg vizet, hogy ellepje. Forraljuk fel közepes lángon, majd csökkentsük a hőt alacsonyra, és fedő nélkül pároljuk tovább, amíg a hús le nem esik a csontról, körülbelül 90 percig. Szükség szerint időnként lefejtjük a habot.",
        "Vegyük ki a csirkét az edényből, és hagyjuk kissé kihűlni; a húst darabokra vágjuk, a bőrt és a csontokat kidobjuk.",
        "Szűrjük ki a zöldségeket, és tegyük félre; öblítsük ki a leveses fazékot, és tegyük vissza az alaplevet az edénybe. A zöldségeket apróra vágjuk; visszatesszük az edénybe az apróra vágott csirkét és a zöldségeket.",
        "Melegítsük fel a levest; sóval, borssal és ízlés szerint csirkehúslevessel ízesítjük."
      ]
    },
    {
      name: "Lencseleves",
      id: 4,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Lencseleves.JPG", "../../../assets/soups/Lencseleves.JPG", "../../../assets/soups/Lencseleves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "¼ csésze olívaolaj", "1 hagyma, apróra vágva", "2 sárgarépa, kockára vágva", "2 szár zeller, apróra vágva", "2 gerezd fokhagyma, felaprítva", "1 babérlevél", "1 teáskanál szárított oregánó", "1 teáskanál szárított bazsalikom", "2 csésze száraz lencse", "8 csésze víz", "1 (14,5 uncia) doboz passzírozott paradicsom", "½ csésze spenót, leöblítve és vékonyra szeletelve", "2 evőkanál ecet", "só ízlés szerint", "őrölt fekete bors ízlés szerint"
      ],
      directions: [
        "Melegítsünk olajat egy nagy fazékban közepes lángon. Adjunk hozzá hagymát, sárgarépát és zellert; főzzük és kevergessük, amíg a hagyma megpuhul, 3-5 percig.",
        "Keverjük hozzá a fokhagymát, a babérlevelet, az oregánót és a bazsalikomot; főzzük 2 percig.",
        "Keverjük hozzá a lencsét, adjuk hozzá a vizet és a paradicsomot. Forraljuk fel. Csökkentsük a hőt, és hagyjuk párolódni, amíg a lencse megpuhul, legalább 1 órán keresztül.",
        "Tálaláskor keverjük bele a spenótot, és addig főzzük, amíg meg nem fonnyad.",
        "Keverjük hozzá az ecetet, és ízesítsük sóval és borssal."
      ]
    },
    {
      name: "Csirke tortilla leves",
      id: 5,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Csirke_tortilla_leves.JPG", "../../../assets/soups/Csirke_tortilla_leves.JPG", "../../../assets/soups/Csirke_tortilla_leves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 evőkanál olívaolaj", "1 közepes hagyma, apróra vágva", "3 gerezd fokhagyma, felaprítva", "1 (28 uncia) doboz passzírozott paradicsom", "1 (10,5 uncia) doboz sűrített csirkehúsleves", "1 ¼ csésze víz", "2 teáskanál chili por", "1 teáskanál szárított oregánó", "1 (15 uncia) doboz fekete bab, leöblítve és lecsepegtetve", "2 nagy kicsontozott csirkemell fél, megfőzve és falatnyi darabokra vágva", "1 csésze egész kukoricaszem, főzve", "1 csésze fehér kukoricakása", "1 (4 uncia) doboz apróra vágott zöld chili paprika", "¼ csésze apróra vágott friss koriander", "½ csésze tört tortilla chips, vagy ízlés szerint", "2 közepes avokádó, szeletelve, vagy ízlés szerint", "½ csésze aprított Monterey Jack sajt, vagy ízlés szerint", "2 evőkanál apróra vágott zöldhagyma, vagy ízlés szerint"
      ],
      directions: [
        "Egy levesesfazékban közepes lángon hevítsünk olajat. Adjunk hozzá hagymát és fokhagymát; pároljuk puhára, kb. 5 perc. Belekeverjük a chiliport és az oregánót.",
        "Keverjük hozzá a passzírozott paradicsomot, a sűrített húslevest és a vizet; forraljuk fel. Csökkentsük a hőt és pároljuk 5-10 percig.",
        "Keverjük hozzá a fekete babot, a főtt csirkét, a kukoricát, a kukoricakását, a chili paprikát és a koriandert. 10 percig pároljuk.",
        "Tálaláskor merjük a levest tálakba, és tegyünk a tetejére tört tortilla chipseket, avokádószeleteket, Monterey Jack sajtot és zöldhagymát."
      ]
    },
    {
      name: "Taco leves",
      id: 6,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Taco_leves.JPG", "../../../assets/soups/Taco_leves.JPG", "../../../assets/soups/Taco_leves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "3 csésze csirkehúsleves, külön csészékben tárolva", "1 kis fej karfiol, apróra vágva", "1 evőkanál olívaolaj", "1 hagyma, finomra vágva", "1 (4 uncia) doboz kockára vágott jalapeno paprika", "1 kiló darált marhahús", "1 (8 uncia) csomag krémsajt, kockára vágva", "1 (26 uncia) doboz kockára vágott paradicsom", "1 teáskanál őrölt paprika", "só és őrölt fekete bors ízlés szerint"
      ],
      directions: [
        "Keverjünk össze 2 csésze húslevest és a karfiolt egy edényben. Közepesen magas lángon felforraljuk. Csökkentsük a hőt közepesen alacsonyra; főzzük puhára, körülbelül 20 perc alatt.",
        "Egy serpenyőben közepesen magas lángon hevítsünk olajat. Pároljuk a hagymát és a jalapenót, amíg a hagyma áttetsző lesz, körülbelül 5 percig. Adjunk hozzá marhahúst; főzzük és keverjük, amíg barnás és omlós lesz, körülbelül 6 percig.",
        "A megfőtt karfiolt turmixgépbe tesszük és pürésítjük. A húsleveses-karfiolos edénybe tegyük bele a krémsajtot és a maradék 1 csésze húslevest. Főzzük és keverjük közepes lángon, míg a krémsajt megolvad, körülbelül 3 percig. Adjuk hozzá a marhahúskeveréket, a paradicsomot és a paprikát. Sózzuk, borsozzuk. Főzzük és keverjük, amíg az ízek összeolvadnak, körülbelül 5 percig."
      ]
    },
    {
      name: "Vegán Taco Chili",
      id: 7,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Vegan_Taco_Chili.JPG", "../../../assets/soups/Vegan_Taco_Chili.JPG", "../../../assets/soups/Vegan_Taco_Chili.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 evőkanál olívaolaj", "1 font szeletelt friss gomba", "2 gerezd fokhagyma, felaprítva", "1 kis hagyma, apróra vágva", "2 szár zeller, apróra vágva", "1 (29 uncia) doboz paradicsomszósz", "1 (6 uncia) doboz paradicsompüré", "3 (15 uncia) doboz vesebab", "1 (11 uncia) doboz mexikói stílusú kukorica"
      ],
      directions: [
        "Egy nagy serpenyőben felforrósítjuk az olajat. A gombát, a fokhagymát, a hagymát és a zellert puhára pároljuk.",
        "Tegyük át őket egy főzőedénybe, majd keverjük hozzá a paradicsomszószt, a paradicsompürét, a babot és a mexikói stílusú kukoricát. Főzzük legalább egy órát, hogy az ízek összeérjenek."
      ]
    },
    {
      name: "Édesburgonya leves",
      id: 8,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Edesburgonya_leves.JPG", "../../../assets/soups/Edesburgonya_leves.JPG", "../../../assets/soups/Edesburgonya_leves.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "6 közepes édesburgonya, meghámozva és apróra vágva", "1 evőkanál darált friss gyömbér", "2 csésze csirke- vagy zöldségalaplé", "1 csésze víz, vagy szükség szerint", "1 lime leve", "2 csésze tej vagy tejszín, vagy szükség szerint"
      ],
      directions: [
        "Helyezzük a burgonyát és a gyömbért egy nagy serpenyőbe. Felöntjük csirke alaplével és vízzel, majd nagy lángon felforraljuk. Csökkentsük a hőt közepesre, fedjük le és pároljuk, amíg a burgonya megpuhul, körülbelül 30 percig.",
        "A burgonyát és a lime levét robotgépben vagy botmixerrel simára pürésítjük. Tegyük vissza a levest a serpenyőbe, és tetszés szerint keverjünk hozzá tejet vagy tejszínt. Melegítsük, amíg át nem melegszik."
      ]
    },
    {
      name: "Mangó Gazpacho",
      id: 9,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Mango_Gazpacho.JPG", "../../../assets/soups/Mango_Gazpacho.JPG", "../../../assets/soups/Mango_Gazpacho.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze 1/4 hüvelykes kockára vágott friss mangó", "2 csésze narancslé", "2 evőkanál extra szűz olívaolaj", "1 mag nélküli uborka, 1/4 hüvelykes kockákra vágva", "1 kis piros kaliforniai paprika, kimagozva és 1/4 hüvelykes kockákra vágva", "1 kis hagyma, 1/4 hüvelykes kockákra vágva", "2 gerezd közepes fokhagyma, darálva", "1 kis jalapeno paprika, kimagozva és darálva (opcionális)", "3 evőkanál friss limelé", "2 evőkanál apróra vágott friss petrezselyem, bazsalikom vagy koriander", "só és frissen őrölt fekete bors"
      ],
      directions: [
        "A mangót, a narancslevet és az olajat turmixgépben vagy konyhai robotgépben pürésítjük. Tegyük át egy közepes tálba a többi hozzávalóval együtt. Ízlés szerint sózzuk, borsozzuk. Tálalásig hűtőbe tesszük. (Tálalás előtt több órával is elkészíthető.)"
      ]
    },
    {
      name: "Kanadai sárgaborsóleves sonkával",
      id: 10,
      category: "Leves",
      imagePaths: ["../../../assets/soups/Kanadai_sargaborsoleves_sonkaval.JPG", "../../../assets/soups/Kanadai_sargaborsoleves_sonkaval.JPG", "../../../assets/soups/Kanadai_sargaborsoleves_sonkaval.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 sonkacsont egy kis hússal", "2 és fél csésze sárga hasított borsó", "5 szál zeller, felkockázva", "4 sárgarépa, kockára vágva", "½ nagy spanyol hagyma, kockára vágva", "2 evőkanál só", "2 teáskanál szárított kakukkfű", "1 babérlevél (opcionális)", "1 csipet őrölt fekete bors", "8 csésze víz, vagy szükség szerint"
      ],
      directions: [
        "Helyezzük a sonkacsontot, hasított borsót, zellert, sárgarépát, hagymát, sót, kakukkfüvet, babérlevelet és borsot egy nagy edénybe, majd öntsük fel vízzel. Forraljuk fel a keveréket, és egy kanállal távolítsuk el a habot.",
        "Csökkentsük a hőt, és tegyünk az edényre fedőt egy kis rést hagyva, hogy párologhasson. Pároljuk időnként megkeverve, amíg a borsó megpuhul és a leves sűrű lesz, körülbelül 3 órán keresztül.",
        "Távolítsuk el a sonkacsontot a levesből. Fejtsük le a húst a sonkacsontról, vágjuk fel és tegyük vissza az edénybe."
      ]
    },


    {
      name: "Banánkenyér",
      id: 11,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Banankenyer1.JPG", "../../../assets/desserts/Banankenyer2.JPG", "../../../assets/desserts/Banankenyer3.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze univerzális liszt",
        "1 teáskanál szódabikarbóna",
        "¼ teáskanál só",
        "¾ csésze barna cukor",
        "½ csésze vaj",
        "2 tojás, felvert",
        "2 ⅓ csésze pépesített túlérett banán"
      ],
      directions: [
        "Melegítsük elő a sütőt 175 fokra. Enyhén kivajazunk egy 9x5 hüvelykes cipóformát.",
        "Egy nagy tálban keverjük össze a lisztet, a szódabikarbónát és a sót. A barna cukrot és a vajat elektromos habverővel egy külön nagy tálban habosra keverjük. Keverjük hozzá a tojást és a pépesített banánt, amíg jól el nem keveredik. Keverjük hozzá a banánkeveréket a lisztes keverékhez, amíg össze nem áll. Öntsük a tésztát az előkészített sütőformába.",
        "Előmelegített sütőben addig sütjük, amíg a közepébe szúrt fogpiszkáló tisztán ki nem jön, körülbelül 60 percig. Hagyjuk hűlni a kenyeret a formában 10 percig, majd fordítsuk rácsra, hogy teljesen kihűljön."
      ]
    },
    {
      name: "Juharsüti",
      id: 12,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Juharsuti.JPG", "../../../assets/desserts/Juharsuti.JPG", "../../../assets/desserts/Juharsuti.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 csésze juharszirup",
        "5 evőkanál margarin",
        "1 nagy tojás",
        "1 ½ csésze univerzális liszt",
        "½ csésze teljes kiőrlésű liszt",
        "2 ¼ teáskanál sütőpor",
        "½ teáskanál őrölt szerecsendió",
        "½ teáskanál só",
        "¼ teáskanál őrölt gyömbér",
        "½ csésze tej"
      ],
      directions: [
        "Melegítsük elő a sütőt 175 fokra. Kenjünk ki két darab 12 csészehelyes muffinformát.",
        "A juharszirupot és a margarint egy nagy tálban jól összekeverjük, krémes állagúra. Keverjük össze a tojással, amíg össze nem áll.",
        "Egy kis tálban keverjük össze az univerzális és teljes kiőrlésű lisztet, a sütőport, a szerecsendiót, a sót és a gyömbért. A száraz hozzávalókat adagonként adjuk hozzá a nedves hozzávalókhoz, felváltva a tejjel, és minden hozzáadás után röviden keverjük át a tésztát. Az elkészített muffinformákat 3/4-ig töltsük meg tésztával.",
        "Előmelegített sütőben addig sütjük, amíg a közepébe szúrt fogpiszkáló tisztán ki nem jön, 20-30 percig."
      ]
    },
    {
      name: "PHILADELPHIA klasszikus sajttorta",
      id: 13,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/PHILADELPHIA_klasszikus_sajttorta.JPG", "../../../assets/desserts/PHILADELPHIA_klasszikus_sajttorta.JPG", "../../../assets/desserts/PHILADELPHIA_klasszikus_sajttorta.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 ½ csésze HONEY MAID Graham Cracker Crumbs",
        "⅓ csésze vaj vagy margarin, olvasztott",
        "3 evőkanál cukor",
        "4 (8 uncia) csomag PHILADELPHIA krémsajt, lágyított",
        "1 csésze cukor",
        "1 teáskanál vanília",
        "4 tojás"
      ],
      directions: [
        "Melegítsük elő a sütőt 165 fokra.",
        "Keverjük össze a morzsát, a vajat és a 3 evőkanál cukrot. Nyomjuk erősen egy 9 hüvelykes torta sütőforma aljára.",
        "A krémsajtot, az 1 csésze cukrot és a vaníliát egy keverőtálban simára keverjük. Egyenként adjuk hozzá a tojásokat, és kis sebességgel addig keverjük, amíg el nem keveredik. Ráöntjük a formában előzőleg kialakított kéregre.",
        "Előmelegített sütőben addig sütjük, amíg a közepe majdnem megsül, körülbelül 55 perc. Lazítsuk meg a tortát a sütőforma pereméről; hűtsük le a perem eltávolítása előtt.",
        "Tálalás előtt 4 órára hűtőbe tesszük."
      ]
    },
    {
      name: "Mogyoróvajas tejszínhab",
      id: 14,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Mogyorovajas_tejszinhab.JPG", "../../../assets/desserts/Mogyorovajas_tejszinhab.JPG", "../../../assets/desserts/Mogyorovajas_tejszinhab.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze kemény habtejszín",
        "1 csésze porcukor",
        "⅓ csésze krémes mogyoróvaj",
        "½ teáskanál vanília kivonat"
      ],
      directions: [
        "Egy tálban összekeverjük a tejszínt, a porcukrot, a mogyoróvajat és a vaníliakivonatot.",
        "Elektromos mixerrel nagy sebességgel verjük addig, amíg merev csúcsok keletkeznek, 1-2 percig.",
        "Hűtőszekrényben tárolandó."
      ]
    },{
      name: "Mogyoróvajas M&M süti",
      id: 15,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Mogyorovajas_M&M_suti.JPG", "../../../assets/desserts/Mogyorovajas_M&M_suti.JPG", "../../../assets/desserts/Mogyorovajas_M&M_suti.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 csésze krémes mogyoróvaj",
        "¾ csésze tömören adagolt barna cukor",
        "2 evőkanál tömören adagolt barna cukor",
        "1 nagy tojás, szobahőmérsékletű",
        "1 teáskanál szódabikarbóna",
        "1 ½ teáskanál vanília kivonat",
        "¼ teáskanál só",
        "⅛ teáskanál őrölt szerecsendió",
        "½ csésze mini cukorkával bevont csokoládédarabok (például mini M&M's®)"
      ],
      directions: [
        "A sütőt 175 fokra előmelegítjük. Két tepsit kibélelünk sütőpapírral.",
        "Keverjük össze a mogyoróvajat, a 3/4 csésze plusz 2 evőkanál barna cukrot, tojást, szódabikarbónát, vaníliát, sót és szerecsendiót. Keverjük hozzá a mini csokoládé M&M-eket.",
        "Vágjunk ki 1,5 evőkanál méretű golyókat a tésztából, és helyezzük egymástól 1 hüvelyk távolságra a sütőlapokra. Lapítsuk el a tésztagolyókat körülbelül 1/2 hüvelyk vastagságúra.",
        "Előmelegített sütőben addig sütjük, amíg a keksz teteje enyhén megreped, körülbelül 10 percig. Hagyjuk 10 percig hűlni a sütiket sütőlapokon, mielőtt a rácsra helyezzük, hogy teljesen kihűljön."
      ]
    },
    {
      name: "Tojáslikőr sodó",
      id: 16,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Tojaslikor_sodo.JPG", "../../../assets/desserts/Tojaslikor_sodo.JPG", "../../../assets/desserts/Tojaslikor_sodo.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 tojás, felvert",
        "1 csésze tojáslikőr",
        "2 evőkanál fehér cukor",
        "2 csipet őrölt szerecsendió"
      ],
      directions: [
        "Melegítsük elő a sütőt 175 fokra. Töltsünk meg egy 8x8 hüvelykes sütőedényt 1 hüvelyk vízzel.",
        "A tojást, a tojáslikőrt és a cukrot egy tálban felverjük. Két kisebb sütőedénybe öntjük. A tetejét megszórjuk szerecsendióval.","Helyezzük a sütőedényeket a vízzel ellátott edénybe. Adjunk hozzá még annyi vizet, ha szükséges, hogy az a kisebb sütőedények oldalának feléig érjen.",
        "Előmelegített sütőben 35-45 percig sütjük. Tálalás előtt hűtsük le."
      ]
    },
    {
      name: "Serpenyős epres palacsinta",
      id: 17,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Serpenyos_epres_palacsinta.JPG", "../../../assets/desserts/Serpenyos_epres_palacsinta.JPG", "../../../assets/desserts/Serpenyos_epres_palacsinta.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "3 nagy tojás",
        "¾ csésze teljes tej",
        "½ teáskanál vaníliakivonat",
        "¼ csésze fehér cukor",
        "¼ teáskanál só",
        "½ csésze univerzális liszt",
        "2 evőkanál sótlan vaj",
        "1 csésze szeletelt friss eper"
      ],
      directions: [
        "A sütőt 220 fokra előmelegítjük.",
        "A tojásokat, a tejet, a vaníliakivonatot, a cukrot, a sót és a lisztet turmixgépbe tesszük. Pörgessük addig, amíg nem marad száraz csomó a tésztában. Olvasszuk fel a vajat egy 8 hüvelykes, öntöttvas serpenyőben közepesen magas lángon. Beleöntjük a masszát, beledobjuk az epret.",
        "Helyezzük a serpenyőt a sütőbe, és süssük aranybarnára 20-25 perc alatt. A sütőből kivéve azonnal tálaljuk."
      ]
    },
    {
      name: "Old-Fashioned palacsinta",
      id: 18,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Old-Fashioned_palacsinta.JPG", "../../../assets/desserts/Old-Fashioned_palacsinta.JPG", "../../../assets/desserts/Old-Fashioned_palacsinta.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 ½ csésze univerzális liszt",
        "3 ½ teáskanál sütőpor",
        "1 evőkanál fehér cukor",
        "¼ teáskanál só",
        "1 ¼ csésze tej",
        "3 evőkanál vaj, olvasztott",
        "1 tojás"
      ],
      directions: [
        "A lisztet, a sütőport, a cukrot és a sót egy nagy tálba szitáljuk. Készítsünk mélyedést a közepébe, és adjunk hozzá tejet, olvasztott vajat és tojást, majd simára keverjük.",
        "Melegítsünk fel egy enyhén olajozott serpenyőt közepesen magas lángon. Öntsük vagy kanalazzuk a tésztát a rácsra, körülbelül 1/4 csészényit adagoljunk minden palacsintához. Főzzük, amíg buborékok képződnek, és a szélei megszáradnak, körülbelül 2-3 percig. Megfordítjuk és addig sütjük, amíg a másik oldaluk is megpirul. Hasonlóképpen járjunk el a maradék tésztával."
      ]
    },
    {
      name: "Mini palacsinta parfé",
      id: 19,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Mini_palacsinta_parfe.JPG", "../../../assets/desserts/Mini_palacsinta_parfe.JPG", "../../../assets/desserts/Mini_palacsinta_parfe.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2/3 csésze vaníliás joghurt",
        "1 evőkanál lekvár vagy gyümölcsbefőtt",
        "5 (mini) Old-Fashioned palacsinta (ld. másik recept)",
        "1 csésze vegyes bogyó",
        "1 teáskanál tiszta juharszirup, vagy ízlés szerint"
      ],
      directions: [
        "Minden parféhoz tegyünk egy széles szájú pohárba vagy üvegbe rétegezve 1/3 csésze vaníliás joghurtot, 1 evőkanál lekvárt vagy gyümölcskonzervet, 3 mini palacsintát és 1/2 csésze vegyes bogyót. Ezután ismételjük meg a joghurtos és bogyós rétegeket. Adjunk hozzá 2 további palacsintát, és öntsük le juharsziruppal."
      ]
    },
    {
      name: "Epres sajttorta üvegben",
      id: 20,
      category: "Desszert",
      imagePaths: ["../../../assets/desserts/Epres_sajttorta_uvegben.JPG", "../../../assets/desserts/Epres_sajttorta_uvegben.JPG", "../../../assets/desserts/Epres_sajttorta_uvegben.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "A kéreghez:",
        "1 ½ csésze graham kekszmorzsa",
        "½ csésze vaj, olvasztott",
        "¼ csésze fehér cukor",
        "4 fél literes befőttes üveg fedővel és gyűrűvel",
        "A sajttortához:",
        "1 (8 uncia) csomag krémsajt, lágyítva",
        "1 (8 uncia) doboz fagyasztott felvert öntet, felengedve",
        "⅔ csésze fehér cukor",
        "1 teáskanál vaníliakivonat",
        "4 friss eper, szeletelve"
      ],
      directions: [
        "A tészta elkészítése: Keverjük össze a graham keksz morzsáját, az olvasztott vajat és a 1/4 csésze cukrot egy tálban. Nyomjuk a keverék 1/4-ét az egyes üvegek aljába.",
        "A sajttorta elkészítése: A krémsajtot és a felvert öntetet elektromos mixerrel egy tálban jól összekeverjük. Adjuk a 2/3 csésze cukrot és a vaníliakivonatot a krémsajtos keverékhez, majd keverjük simára és habosra.",
        "Kanalazzunk a graham kekszre minden tégelyben 1/4 krémsajtkeveréket, majd rakjunk minden sajttorta tetejére szeletelt epret. A sajttortákat tálalásig hűtőbe tesszük."
      ]
    },


    {
      name: "Egészséges zöldlé",
      id: 21,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Egeszseges_zoldle1.JPG", "../../../assets/drinks/Egeszseges_zoldle2.JPG", "../../../assets/drinks/Egeszseges_zoldle3.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "6 levél kelkáposzta",
        "4 szár zeller, levelei eltávolítva",
        "2 zöldalma félbevágva",
        "1 uborka",
        "½ citrom, meghámozva",
        "1 (1 hüvelyk) darab friss gyömbér"
      ],
      directions: [
        "A kelkáposztát, a zellert, a zöldalmát, az uborkát, a citromot és a gyömbért egy zöldségprés segítségével dolgozzuk fel.",
        "Azonnal tálaljuk, vagy üvegedényben tároljuk a hűtőszekrényben legfeljebb egy napig; ivás előtt rázzuk fel."
      ]
    },
    {
      name: "Old-Fashioned limonádé",
      id: 22,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Old-Fashioned_limonade.JPG", "../../../assets/drinks/Old-Fashioned_limonade.JPG", "../../../assets/drinks/Old-Fashioned_limonade.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "6 db citrom",
        "1 csésze fehér cukor",
        "6 csésze víz, vagy szükség szerint több"
      ],
      directions: [
        "Facsarjuk ki a citromokat; kb. 1 csésze gyümölcslevet kell kapnunk.",
        "Keverjük össze a gyümölcslevet, a cukrot és a vizet egy fél gallonos kancsóban. Addig keverjük, amíg a cukor fel nem oldódik. Kóstoljuk meg és adjunk hozzá még vizet, ha szükséges.",
        "Hűtsük le és tálaljuk jéggel."
      ]
    },
    {
      name: "Brazil limonádé",
      id: 23,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Brazil_limonade.JPG", "../../../assets/drinks/Brazil_limonade.JPG", "../../../assets/drinks/Brazil_limonade.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 db lime",
        "3 csésze víz",
        "2½ csésze cukor",
        "3 evőkanál édesített sűrített tej",
        "jégkockák"
      ],
      directions: [
        "Mossuk meg alaposan a lime-okat. Vágjuk le a végeiket, és szeleteljük nyolc szeletre.",
        "Tegyük a lime-ot egy turmixgépbe vízzel, cukorral, édesített sűrített tejjel és jéggel, majd keverjük addig, amíg sima nem lesz. Szűrjük át egy finom hálószűrőn, hogy eltávolítsuk a héját. Tálaljuk jéggel."
      ]
    },
    {
      name: "Ananász Margarita",
      id: 24,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Ananasz_Margarita.JPG", "../../../assets/drinks/Ananasz_Margarita.JPG", "../../../assets/drinks/Ananasz_Margarita.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze jég",
        "3 folyékony uncia ananászlé",
        "2 folyékony uncia ezüst tequila",
        "¾ folyadék uncia tripla mp",
        "¾ folyadék uncia frissen facsart limelé",
        "1 evőkanál durva só",
        "2 lime szelet",
        "ananászszelet a díszítéshez (elhagyható)"
      ],
      directions: [
        "Töltsünk meg egy koktél shakert félig jéggel. Adjuk hozzá az ananászlevet, a tequilát, a triple sec-et és a lime levét. Zárjuk le, és 10-15 másodpercig erőteljesen rázzuk meg, amíg a shaker külseje fagyott nem lesz.",
        "Szórjuk a sót egy tányérra. Nedvesítsük meg egy pohár szélét egy lime szelettel. A megnedvesített peremet nyomjuk a sóba, majd töltsük meg a poharat jéggel.",
        "Szűrjük a margaritát a pohárba, és ízlés szerint díszítsük ananásszal és lime szelettel."
      ]
    },
    {
      name: "Az IGAZI Long Island-i jeges tea",
      id: 25,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Az_IGAZI_Long_Island-i_jeges_tea.JPG", "../../../assets/drinks/Az_IGAZI_Long_Island-i_jeges_tea.JPG", "../../../assets/drinks/Az_IGAZI_Long_Island-i_jeges_tea.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "½ uncia vodka",
        "½ folyékony uncia rum",
        "½ folyadék uncia gin",
        "½ uncia tequila",
        "½ folyadék uncia triple sec (narancs ízű likőr)",
        "1 folyékony uncia édes-savanyú keverék",
        "1 uncia kóla, vagy ízlés szerint",
        "1 citromszelet"
      ],
      directions: [
        "Töltsünk meg egy koktél shakert jéggel. Öntsünk a jégre vodkát, rumot, gint, tequilát, tripla sec-et és az édes-savanyú keveréket, majd fedjük le és rázzuk össze.",
        "Öntsük a koktélt egy Collins vagy Hurricane pohárba; majd öntsük bele a kólát. Díszítsük citromszelettel és mentalevéllel!"
      ]
    },
    {
      name: "Csokoládé krém Cold Brew",
      id: 26,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Csokolade_krem_Cold_Brew.JPG", "../../../assets/drinks/Csokolade_krem_Cold_Brew.JPG", "../../../assets/drinks/Csokolade_krem_Cold_Brew.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 evőkanál tejszínhab",
        "1 evőkanál tej",
        "1 1/2 teáskanál csokoládészirup",
        "1 1/2 teáskanál kakaópor",
        "1/2 teáskanál vaníliakivonat",
        "1 csésze hidegen főzött kávé"
      ],
      directions: [
        "Adagoljuk egy magas pohárba a tejszínhabot, tejet, csokoládészirupot, kakaóport és vaníliát. Tejhabosítóval addig keverjük, amíg a kívánt állagot el nem érjük.",
        "Tálaljuk hideg kávé mellé."
      ]
    },
    {
      name: "Pezsgő sárgadinnye Agua Fresca",
      id: 27,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Pezsgo_sargadinnye_Agua_Fresca.JPG", "../../../assets/drinks/Pezsgo_sargadinnye_Agua_Fresca.JPG", "../../../assets/drinks/Pezsgo_sargadinnye_Agua_Fresca.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 font friss sárgadinnye kocka (6 csésze)",
        "2 csésze víz",
        "6 evőkanál frissen facsart limelé (2 lime-ból)",
        "3 evőkanál méz",
        "1/4 teáskanál só",
        "2 csésze szóda, hűtve",
        "sárgadinnye golyó vagy kockák, díszítéshez",
        "csavart lime-héj, díszítéshez"
      ],
      directions: [
        "Keverjük simára a sárgadinnyét, a vizet, a lime levét, a mézet és a sót. Nyomjuk át egy szitán, majd dobjuk ki a szilárd anyagokat. A leszűrt levet öntsük egy kancsóba.",
        "Tálalásig hűtsük le. Közvetlenül tálalás előtt adjunk hozzá szódát. Jéggel tálaljuk, és díszítsük a poharakat dinnyegolyókkal és lime-héj csavarokkal."
      ]
    },
    {
      name: "Chilton koktél",
      id: 28,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Chilton_koktel.JPG", "../../../assets/drinks/Chilton_koktel.JPG", "../../../assets/drinks/Chilton_koktel.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 evőkanál durva só",
        "1 szelet citrom",
        "1 1/2 folyadék uncia frissen facsart citromlé",
        "1 1/2 folyadék uncia vodka",
        "4 uncia folyékony szénsavas ásványvíz"
      ],
      directions: [
        "Egy tányérra szórjuk a sót. Nedvesítse meg egy highball pohár szélét citromkarikával. A megnedvesített peremet nyomjuk a sóba. Töltsük meg a poharat jéggel.",
        "A citromlevet és a vodkát a jégre öntjük, és óvatosan összekeverjük. Felöntjük a szénsavas vízzel, és citromkarikával tálaljuk."
      ]
    },
    {
      name: "Mézes citromtea",
      id: 29,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Mezes_citromtea.JPG", "../../../assets/drinks/Mezes_citromtea.JPG", "../../../assets/drinks/Mezes_citromtea.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 csésze víz",
        "2 teáskanál méz",
        "1 teáskanál friss citromlé",
        "1 teáskanál fehér cukor, vagy ízlés szerint"
      ],
      directions: [
        "Öntsünk vizet egy bögrébe. Adjunk hozzá mézet, és melegítsük a mikrohullámú sütőben 1 perc 30 másodpercig.",
        "Hozzákeverjük a citromlevet, addig keverjük, amíg a méz fel nem oldódik. Keverjük hozzá a cukrot."
      ]
    },
    {
      name: "Gyömbér-kurkuma gyógytea",
      id: 30,
      category: "Ital",
      imagePaths: ["../../../assets/drinks/Gyomber-kurkuma_gyogytea.JPG", "../../../assets/drinks/Gyomber-kurkuma_gyogytea.JPG", "../../../assets/drinks/Gyomber-kurkuma_gyogytea.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze víz",
        "½ teáskanál őrölt kurkuma",
        "½ teáskanál apróra vágott friss gyömbér",
        "½ teáskanál őrölt fahéj",
        "1 evőkanál méz",
        "1 szelet citrom"
      ],
      directions: [
        "Forraljuk fel a vizet egy kis serpenyőben; adjunk hozzá kurkumát, gyömbért és fahéjat. Csökkentsük a hőt közepesen alacsonyra, és pároljuk 10 percig.",
        "Szűrjük le a teát egy nagy pohárba; mézzel ízesítjük és citromkarikával tálaljuk."
      ]
    },


    {
      name: "Bacon Ranch tésztasaláta",
      id: 31,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Bacon_Ranch_tesztasalata1.JPG", "../../../assets/salads/Bacon_Ranch_tesztasalata2.JPG", "../../../assets/salads/Bacon_Ranch_tesztasalata3.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 (12 uncia) csomag nyers háromszínű rotini tészta",
        "10 szelet bacon",
        "1 csésze majonéz",
        "3 evőkanál száraz ranch salátaöntet keverék",
        "½ teáskanál fokhagymás bors",
        "¼ teáskanál fokhagymapor",
        "½ csésze tej, vagy szükség szerint",
        "1 nagy paradicsom, apróra vágva",
        "1 (4,25 uncia) doboz szeletelt fekete olajbogyó",
        "1 bögre apróra vágott cheddar sajt"
      ],
      directions: [
        "Forraljunk fel egy nagy fazék enyhén sós vizet, és főzzük a rotinit lobogó vízben, amíg megpuhul, körülbelül 8 percig, ezután csöpögtessük le.",
        "Tegyük a szalonnát egy serpenyőbe közepesen magas lángon, és süssük egyenletesen barnára. Lecsepegtetjük és felaprítjuk.",
        "Keverjük össze a majonézt, a ranch dressing mixet, a fokhagymás borsot és a fokhagymaport egy nagy tálban. Ezután keverjük el a tejben.",
        "Tegyük a rotinit, a szalonnát, a paradicsomot, a fekete olajbogyót és a sajtot egy tálba, és keverjük össze az öntettel.",
        "Fedjük le, és tegyük legalább 1 órára a hűtőbe. Adagolhatunk még hozzá tejet, ha kissé száraznak tűnik a saláta."
      ]
    },
    {
      name: "Rukkola saláta csonthéjas gyümölccsel",
      id: 32,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Rukkola_salata_csonthejas_gyumolccsel.JPG", "../../../assets/salads/Rukkola_salata_csonthejas_gyumolccsel.JPG", "../../../assets/salads/Rukkola_salata_csonthejas_gyumolccsel.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 evőkanál extra szűz olívaolaj",
        "2 evőkanál vörösborecet vagy rozé ecet",
        "3/4 teáskanál só",
        "1/2 teáskanál feketebors",
        "1 1/2 csésze piros koktélparadicsom félbevágva",
        "1 1/2 csésze sárga koktélparadicsom félbevágva",
        "1 db rukkola",
        "3/4 csésze friss bazsalikomlevél",
        "2 nektarin, szeletelve",
        "1 nagy fehér őszibarack, szeletelve",
        "1 csésze Rainier vagy más sárga húsú cseresznye, kimagozva és felezve",
        "1/2 teáskanál darabos tengeri só"
      ],
      directions: [
        "Az öntethez egy kis tálban keverjük össze az olívaolajat, az ecetet, a sót és a borsot.",
        "A paradicsomot, a rukkolát, a bazsalikomot, a nektarint és az őszibarackszeleteket egy nagy tálra rendezzük. Meglocsoljuk az öntet felével. A tetejére tesszük a cseresznyét, a tengeri sót és a maradék öntetet. Azonnal tálaljuk."
      ]
    },
    {
      name: "Pekándiós csirkesaláta",
      id: 33,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Pekandios_csirkesalata.JPG", "../../../assets/salads/Pekandios_csirkesalata.JPG", "../../../assets/salads/Pekandios_csirkesalata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "½ csésze majonéz",
        "½ csésze natúr görög joghurt",
        "2 teáskanál fehérborecet",
        "½ teáskanál fokhagymapor",
        "¼ teáskanál szárított kakukkfű",
        "1/2 teáskanál Park Hill juharbors (például Savory SimagePathe Shop®)",
        "2 csésze apróra darabolt főtt csirke",
        "2 szár zeller, szeletelve",
        "⅓ csésze apróra vágott pirított pekándió",
        "2 evőkanál apróra vágott vöröshagyma"
      ],
      directions: [
        "Keverjük össze a majonézt, a görög joghurtot, az ecetet, a fokhagymaport, a kakukkfüvet és a juharborsot egy tálban, amíg jól össze nem áll. Adjunk hozzá csirkét, zellert, pekándiót és vöröshagymát, és jól keverjük össze.",
        "Azonnal tálaljuk, vagy akár 3 napig hűtőben is tárolhatjuk."
      ]
    },
    {
      name: "Almás spenótsaláta",
      id: 34,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Almas_spenotsalata.JPG", "../../../assets/salads/Almas_spenotsalata.JPG", "../../../assets/salads/Almas_spenotsalata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze bébispenót levél",
        "1 közepes alma, szeletelve",
        "2 evőkanál apróra vágott zeller",
        "2 evőkanál pirított PLANTERS Pekándió, apróra vágva",
        "2 evőkanál házi olasz csökkentett zsírtartalmú öntet"
      ],
      directions: [
        "Egy nagy tálban keverjük össze a hozzávalókat."
      ]
    },
    {
      name: "Citrus- és gránátalma-saláta",
      id: 35,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Citrus_és_granatalma_salata.JPG", "../../../assets/salads/Citrus_és_granatalma_salata.JPG", "../../../assets/salads/Citrus_és_granatalma_salata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 rózsaszín vagy rubinvörös grapefruit",
        "2 narancs",
        "4 mandarin",
        "½ csésze gránátalma",
        "½ csésze tejföl",
        "¼ csésze fagyasztott limonádé koncentrátum, hígítatlanul",
        "friss mentagallyak a díszítéshez (elhagyható)"
      ],
      directions: [
        "A grapefruitot, a narancsot és a mandarint fogazott élű késsel meghámozzuk, ügyelve arra, hogy eltávolítsuk a fehér magokat.",
        "Vágjuk fel az összes citrusfélét keresztben, és távolítsuk el a magokat. Egyenletesen osszuk el a szeleteket 4 tányéron. Minden salátára egyenletesen szórjunk gránátalmamagot.",
        "A tejfölt és a hígítatlan limonádékoncentrátumot egy kis tálkában keverjük simára az öntethez, melyből öntsünk minden salátára. Díszítsük mentaágakkal."
      ]
    },
    {
      name: "Waldorf saláta",
      id: 36,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Waldorf_salata.JPG", "../../../assets/salads/Waldorf_salata.JPG", "../../../assets/salads/Waldorf_salata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "½ csésze majonéz",
        "1 evőkanál fehér cukor",
        "1 teáskanál citromlé",
        "⅛ teáskanál só",
        "3 alma - meghámozva, kimagozva és apróra vágva",
        "1 csésze vékonyra szeletelt zeller",
        "½ csésze apróra vágott dió",
        "½ csésze mazsola (opcionális)"
      ],
      directions: [
        "Keverjük össze a majonézt, a cukrot, a citromlevet és a sót egy tálban.",
        "Keverjük hozzá az almát, a zellert, a diót és a mazsolát. Fedjük le és tegyük hűtőbe tálalásig."
      ]
    },
    {
      name: "Tojássaláta szendvicsbe",
      id: 37,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Tojassalata_szendvicsbe.JPG", "../../../assets/salads/Tojassalata_szendvicsbe.JPG", "../../../assets/salads/Tojassalata_szendvicsbe.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "8 tojás",
        "½ csésze majonéz",
        "¼ csésze apróra vágott zöldhagyma",
        "1 teáskanál sárga mustár",
        "¼ teáskanál paprika",
        "só és bors ízlés szerint"
      ],
      directions: [
        "Helyezzük a tojásokat egy főzőedénybe, és lepjük el hideg vízzel. Forraljuk fel a vizet, majd azonnal vegyük le a tűzről. Fedjük le, és hagyjuk állni a tojásokat forró vízben 10-12 percig. Ezután kivesszük őket a forró vízből, lehűtjük, meghámozzuk és feldaraboljuk.",
        "Helyezzük az apróra vágott tojásokat egy tálba; keverjük hozzá a majonézt, a zöldhagymát és a mustárt. Fűszerezzük sóval, borssal, paprikával. Keverjük össze, és tálaljuk kenyéren vagy kekszen."
      ]
    },
    {
      name: "Nyári gyümölcssaláta",
      id: 38,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Nyari_gyumolcssalata.JPG", "../../../assets/salads/Nyari_gyumolcssalata.JPG", "../../../assets/salads/Nyari_gyumolcssalata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "Szószhoz:",
        "⅔ csésze friss narancslé",
        "⅓ csésze friss citromlé",
        "⅓ csésze csomagolt barna cukor",
        "½ teáskanál reszelt narancshéj",
        "½ teáskanál reszelt citromhéj",
        "1 teáskanál vaníliakivonat",
        "Salátához:",
        "2 csésze kockára vágott friss ananász",
        "2 csésze eper, szeletelve",
        "3 kiwi, meghámozva és felszeletelve",
        "3 banán, szeletelve",
        "2 narancs meghámozva és felszeletelve",
        "1 csésze mag nélküli szőlő",
        "2 csésze áfonya"
      ],
      directions: [
        "A szószhoz: A narancslevet, a citromlevet, a barna cukrot, a narancshéjat és a citromhéjat egy serpenyőben, közepesen magas lángon felforraljuk. Csökkentsük a hőt közepesen alacsonyra, és addig pároljuk, amíg kissé besűrűsödik, körülbelül 5 percig. Levesszük a tűzről, és belekeverjük a vaníliakivonatot. Félretesszük hűlni.",
        "A salátához: egy nagy, átlátszó üvegtálba rétegezzük a gyümölcsöket ebben a sorrendben: ananász, eper, kivi, banán, narancs, szőlő és áfonya. A lehűtött szószt a gyümölcsre öntjük; lefedjük és tálalás előtt 3-4 órára hűtőbe tesszük."
      ]
    },
    {
      name: "Caprese tészta thai bazsalikommal",
      id: 39,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Caprese_teszta_thai_bazsalikommal.JPG", "../../../assets/salads/Caprese_teszta_thai_bazsalikommal.JPG", "../../../assets/salads/Caprese_teszta_thai_bazsalikommal.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 kiló spagetti",
        "1 ½ csésze koktélparadicsom félbevágva",
        "½ csésze olívaolaj",
        "3 evőkanál citromos fehér balzsamecet",
        "2 gerezd fokhagyma, apróra vágva",
        "⅓ csésze apróra vágott thai bazsalikom",
        "1 (8 uncia) tartály kis mozzarella golyó olajban, félbevágva",
        "só és frissen őrölt fekete bors ízlés szerint"
      ],
      directions: [
        "Forraljunk fel egy nagy fazék enyhén sós vizet. Főzzük a spagettit a forrásban lévő vízben, időnként megkeverve, amíg puha lesz, körülbelül 12 percig.",
        "Keverjük össze a koktélparadicsomot, a mozzarella golyókat, az olívaolajat, a balzsamecetet, a fokhagymát és a thai bazsalikomot egy nagy keverőtálban. Ízlés szerint sózzuk, borsozzuk.",
        "A tésztát leszűrjük, és a tetejére koktélparadicsomos keveréket teszünk."
      ]
    },
    {
      name: "Sárgarépa-mazsola saláta",
      id: 40,
      category: "Saláta",
      imagePaths: ["../../../assets/salads/Sargarepa-mazsola_salata.JPG", "../../../assets/salads/Sargarepa-mazsola_salata.JPG", "../../../assets/salads/Sargarepa-mazsola_salata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "4 és fél csésze reszelt sárgarépa",
        "1 (8 uncia) konzerv zúzott ananász, nem szárítva (opcionális)",
        "¾ csésze mazsola",
        "½ csésze cukor",
        "2 evőkanál cukor",
        "½ csésze majonéz",
        "1 ½ evőkanál frissen facsart citromlé"
      ],
      directions: [
        "Keverjük össze a sárgarépát, az ananászt a gyümölcslével, a mazsolával, a cukorral, a majonézzel és a citromlével egy nagy tálban.",
        "Tálalás előtt 2 órára hűtőbe tesszük, hogy az ízek összeérjenek."
      ]
    },


    {
      name: "Barnacukor- és ananászmázas sonka",
      id: 41,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Barnacukor-es_ananaszmazas_sonka1.JPG", "../../../assets/main_courses/Barnacukor-es_ananaszmazas_sonka2.JPG", "../../../assets/main_courses/Barnacukor-es_ananaszmazas_sonka3.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 (6 font) készre főtt, csontos sonka",
        "1 friss ananász",
        "2 (6 uncia) konzerv ananászlé",
        "1 csésze barna cukor"
      ],
      directions: [
        "Melegítsük elő a sütőt 165 fokra. Tegyük a sonkát vágott oldalával lefelé egy tepsibe.",
        "Éles késsel vágjuk le az ananász bőrét, és vágjuk ki az esetleges barna foltokat is. Vágjuk az ananászt 1/2 hüvelyk vastag karikákra, és távolítsuk el a magokat. Fogpiszkálóval rögzítsük a gyűrűket a sonkára.",
        "Előmelegített sütőben 30 percig sütjük a sonkát.",
        "Amíg a sonka sül, keverjük össze az ananászlevet és a barna cukrot egy mikrohullámú sütőben használható tálban. Mikrohullámú sütőben közepes teljesítményen melegítsük addig, amíg a máz fel nem forr, és kissé besűrűsödik. Óvatosan dolgozzunk, mert a máz ragacsos és nagyon forró lesz.",
        "A máz felét öntsük rá egyenletesen a sonka- és ananászkarikákra. A sonkát még 30 percig sütjük, majd a maradék mázt is a sonkára öntjük.",
        "Folytassuk a sonka sütését, amíg a legvastagabb részébe helyezett húshőmérő 60 fokot nem mutat, ami 30-60 perc további sütést jelent."
      ]
    },
    {
      name: "Mexikói quinoasaláta",
      id: 42,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Mexikoi_quinoasalata.JPG", "../../../assets/main_courses/Mexikoi_quinoasalata.JPG", "../../../assets/main_courses/Mexikoi_quinoasalata.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 csésze főtt quinoa",
        "1 (15 uncia) konzerv tarkabab, leöblítve és lecsepegtetve",
        "1 (15 uncia) konzerv vesebab, leöblítve és lecsepegtetve",
        "1 (14 uncia) konzerv kukorica",
        "1 vöröshagyma, apróra vágva",
        "1 csésze főtt barna rizs",
        "1 piros kaliforniai paprika, apróra vágva",
        "¼ csésze apróra vágott friss koriander",
        "Öntethez:",
        "¾ csésze olívaolaj",
        "⅓ csésze vörösborecet",
        "1 evőkanál chili por, vagy ízlés szerint",
        "2 gerezd fokhagyma, összetörve",
        "½ teáskanál só",
        "½ teáskanál őrölt fekete bors",
        "¼ teáskanál cayenne bors"
      ],
      directions: [
        "Keverjük össze a quinoát, a tarkababot, a vesebabot, a kukoricát, a lilahagymát, a barna rizst, a piros kaliforniai paprikát és a koriandert egy fedővel ellátott üveg- vagy műanyag edényben.",
        "Keverjük össze az olívaolajat, az ecetet, a chiliport, a fokhagymát, a sót, a fekete borsot és a cayenne borsot egy tálban, majd öntsük a quinoa keverékre, és dobáljuk fel, hogy jól összekeveredjenek. Fedjük le a tálat fedővel, és tegyük hűtőszekrénybe, amíg az ízek összeolvadnak, legalább 2 órára.",
        "Tálalás előtt keverjük meg újra a salátát."
      ]
    },
    {
      name: "Grillezett lazacsteak pikáns áfonyaszósszal",
      id: 43,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Grillezett_lazacsteak_pikans_afonyaszosszal.JPG", "../../../assets/main_courses/Grillezett_lazacsteak_pikans_afonyaszosszal.JPG", "../../../assets/main_courses/Grillezett_lazacsteak_pikans_afonyaszosszal.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "½ csésze csirke alaplé",
        "¼ csésze balzsamecet",
        "¼ csésze narancslé",
        "1 teáskanál méz",
        "1 evőkanál kukoricakeményítő",
        "¼ csésze csirke alaplé",
        "1 csésze friss áfonya",
        "2 teáskanál apróra vágott friss metélőhagyma",
        "4 (6 uncia) lazac steak",
        "2 evőkanál olívaolaj",
        "só és bors ízlés szerint"
      ],
      directions: [
        "Öntsünk 1/2 csésze csirkelevet, ecetet, narancslevet és mézet egy serpenyőbe. Forraljuk fel erős lángon, majd mérsékeljük a hőt közepesre. Oldjuk fel a kukoricakeményítőt 1/4 csésze csirke alaplében, és keverjük hozzá a párolódó szószhoz. Főzzük és keverjük, amíg a szósz besűrűsödik és minden szépen elvegyül, 1-2 percig. Hozzákeverjük az áfonyát és a metélőhagymát, és lassú tűzön melegen tartjuk.",
        "Melegítsük elő a grillt közepesen magas hőfokra.",
        "A lazacot megkenjük olajjal, és ízlés szerint sózzuk, borsozzuk. Addig grillezzünk, amíg a hal a villától könnyen el nem válik, oldalanként körülbelül 3-4 percig. Áfonyaszósszal tálaljuk."
      ]
    },
    {
      name: "Grillezett lazac avokádómártással",
      id: 44,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Grillezett_lazac_avokadomartassal.JPG", "../../../assets/main_courses/Grillezett_lazac_avokadomartassal.JPG", "../../../assets/main_courses/Grillezett_lazac_avokadomartassal.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 avokádó - meghámozva, kimagozva és felkockázva",
        "2 gerezd fokhagyma, meghámozva és felaprítva",
        "3 evőkanál görög stílusú joghurt",
        "1 evőkanál friss citromlé",
        "só és bors ízlés szerint",
        "2 font lazac steak",
        "2 teáskanál szárított kaporfű",
        "2 teáskanál citrombors",
        "só ízlés szerint"
      ],
      directions: [
        "Melegítsük elő a kültéri grillt a magas hő érdekében, és enyhén olajozzuk be.",
        "Egy közepes tálban pépesítsük, keverjük össze az avokádót, a fokhagymát, a joghurtot és a citromlevet. Sózzuk, borsozzuk.",
        "Dörzsöljük be a lazacot kaporral, citromborssal és sóval. Helyezzük az előkészített grillre, és főzzük 15 percig, egyszer megforgatva, amíg a hal a villától könnyen el nem válik. Tálaljuk az avokádós keverékkel."
      ]
    },
    {
      name: "Grillezett tonhal friss tormával",
      id: 45,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Grillezett_tonhal_friss_tormaval.JPG", "../../../assets/main_courses/Grillezett_tonhal_friss_tormaval.JPG", "../../../assets/main_courses/Grillezett_tonhal_friss_tormaval.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 (8 uncia) friss tonhal steak",
        "1 teáskanál növényi olaj",
        "2 evőkanál szójaszósz",
        "2 evőkanál fűszerezett rizsecet",
        "1 evőkanál finomra reszelt nyers tormagyökér, vagy ízlés szerint több",
        "4 koktélparadicsom, szeletelve",
        "½ teáskanál erős chilipaszta (például sambal oelek)",
        "1 evőkanál darált zöldhagyma"
      ],
      directions: [
        "Melegítsünk elő egy kültéri grillt a magas hő érdekében, és enyhén olajozzuk ki a rácsot.",
        "Enyhén olajozzuk meg a steakeket növényi olajjal.",
        "Egy tálban alaposan keverjük össze a szójaszószt, a rizsecetet, a tormát, a koktélparadicsomot és az erős chilipasztát. 20 percig állni hagyjuk.",
        "Helyezzük a steakeket a grill legforróbb részére, és süssük oldalanként 3 percig, majd tegyük át egy tányérra. A szójaszószos keveréket kanalazzuk a steakekre, és díszítsük zöldhagymával."
      ]
    },
    {
      name: "Mézes-fokhagymás sertésszelet",
      id: 46,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Mezes-fokhagymas_sertesszelet.JPG", "../../../assets/main_courses/Mezes-fokhagymas_sertesszelet.JPG", "../../../assets/main_courses/Mezes-fokhagymas_sertesszelet.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "½ csésze ketchup",
        "2 ⅔ evőkanál méz",
        "2 evőkanál alacsony nátriumtartalmú szójaszósz",
        "2 gerezd fokhagyma, összetörve",
        "6 (4 uncia) (1 hüvelyk vastag) sertésszelet"
      ],
      directions: [
        "Melegítsük elő a grillsütőt közepes lángra, és enyhén olajozzuk ki a rácsot.",
        "A mázhoz keverjük össze a ketchupot, a mézet, a szójaszószt és a fokhagymát egy tálban.",
        "A sertésszelet mindkét oldalát megsütjük az előmelegített grillen. Grillezés közben vékonyan kenjük be a mázzal a szelet mindkét oldalát. Akkor lesz kész a hús, amikor a közepén már nem rózsaszín, ez oldalanként körülbelül 7-9 perc alatt érhető el. A hús közepének 63 fokosnak kell lennie."
      ]
    },
    {
      name: "Légkeveréses sütőben sült burgonya",
      id: 47,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Legkevereses_sutoben_sult_burgonya.JPG", "../../../assets/main_courses/Legkevereses_sutoben_sult_burgonya.JPG", "../../../assets/main_courses/Legkevereses_sutoben_sult_burgonya.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "2 nagy burgonya, meghámozva",
        "1 evőkanál mogyoróolaj",
        "½ teáskanál durva tengeri só"
      ],
      directions: [
        "Melegítsünk elő egy légkeveréses sütőt 200 fokra.",
        "Kenjük meg a burgonyát mogyoróolajjal, szórjuk meg sóval, és helyezzük a légkeveréses sütőbe.",
        "A burgonyát puhára főzzük, ami körülbelül 1 órát vesz igénybe."
      ]
    },
    {
      name: "Könnyű tonhalragu",
      id: 48,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Konnyu_tonhalragu.JPG", "../../../assets/main_courses/Konnyu_tonhalragu.JPG", "../../../assets/main_courses/Konnyu_tonhalragu.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "3 csésze főtt makaróni",
        "1 (5 uncia) tonhalkonzerv, lecsepegtetve",
        "1 (10,5 uncia) doboz sűrített tejszínes csirkehúsleves",
        "1 csésze reszelt Cheddar sajt",
        "1 ½ csésze francia sült hagyma"
      ],
      directions: [
        "A sütőt előmelegítjük 175 fokra.",
        "Keverjük össze a főtt makarónit, a tonhalat és a sűrített levest egy 9x13 hüvelykes sütőedényben, majd szórjuk meg sajttal.",
        "Előmelegített sütőben süssük buborékosra, körülbelül 25 perc alatt. Megszórjuk sült hagymával és még 5 percig sütjük."
      ]
    },
    {
      name: "Juhar- és barnacukros zabpehely",
      id: 49,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Juhar-és_barnacukros_zabpehely.JPG", "../../../assets/main_courses/Juhar-és_barnacukros_zabpehely.JPG", "../../../assets/main_courses/Juhar-és_barnacukros_zabpehely.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 ½ csésze víz",
        "¾ csésze gyorsan megfőzhető zab",
        "1 evőkanál sötétbarna cukor",
        "1 evőkanál juharszirup"
      ],
      directions: [
        "Egy kis edényben vizet forralunk fel. Hozzáadjuk a zabot, és kevergetve 1 percig főzzük.",
        "Vegyük le a tűzről, és keverjük hozzá a barna cukrot és a juharszirupot. Hagyjuk állni, amíg el nem érjük a kívánt vastagságot, kb. 2-3 perc."
      ]
    },
    {
      name: "Reggeli rizs Japánból",
      id: 50,
      category: "Főétel",
      imagePaths: ["../../../assets/main_courses/Reggeli_rizs_Japanbol.JPG", "../../../assets/main_courses/Reggeli_rizs_Japanbol.JPG", "../../../assets/main_courses/Reggeli_rizs_Japanbol.JPG"],
      shortDescr: "Rövid leírás a receptről...",
      longDescr: "Hosszú leírás a receptről...",
      ingredients: [
        "1 teáskanál növényi olaj",
        "1 csésze hideg főtt rizs",
        "1 tojás",
        "2 zöldhagyma, szeletelve",
        "2 teáskanál szójaszósz"
      ],
      directions: [
        "Melegítsünk olajat egy nagy serpenyőben közepes-magas lángon. A forró olajban terítsük szét lapos rétegben a rizst, és főzzük ropogósra az alját, kb. 2-3 percig.",
        "Keverjük hozzá a tojást a rizshez, amíg rántotta nem lesz, kb. 2 percig. A tetejére szórjunk zöldhagymát, ízesítsük szójaszósszal."
      ]
    },
  ];

  constructor() { }

  // visszaadandó adat
  getRecipes(): Observable<Recipe[]> {
    // return new Observable<Recipe[]>((observer) => {
    //   observer.next(this.recipes);
    //   observer.complete();
    // });
    return of(this.recipes);
  }

  getRecipesByIds(ids: number[]): Observable<Recipe[]> {
    return of(this.recipes.filter(recipe => ids.includes(recipe.id)));
  }
}
