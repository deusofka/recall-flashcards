import {
  SET_DECK_INDEX,
  ADD_CARD,
  SET_CARD,
  DELETE_CARD,
} from '../actions/types'

const initialState = {
  deckIndex: -1,
  decks: [
    {
      name: 'Periodic Table',
      desc:
        'Learn atomic numbers and classifications of elements of the periodic table',
      mastered: 27,
      total: 118,
      cards: [],
    },
    {
      name: 'Asian Countries',
      desc: 'Learn capitals, flags, and other details about Asian countries',
      mastered: 19,
      total: 48,
      cards: [
        {
          question: '<h4><i>Russia</i></h4>',
          answerTitle: '<h5><i>Russian Federation</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Moscow&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolour_(flag)" title="Tricolour (flag)">tricolour</a> of white, dark blue and red&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Russia">https://en.wikipedia.org/wiki/Russia</a></p>',
        },
        {
          question: '<h4><i>China</i></h4>',
          answerTitle: "<h5><i>People's Republic of China</i></h5>",
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Beijing&nbsp;</p><p><i><strong>Flag Description:</strong></i> A large golden star within an arc of four smaller golden stars, in the canton, on a field of <a href="https://en.wikipedia.org/wiki/Chinese_red" class="mw-redirect" title="Chinese red">Chinese red</a>.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/China">https://en.wikipedia.org/wiki/China</a></p>',
        },
        {
          question: '<h4><i>India</i></h4>',
          answerTitle: '<h5><i>Republic of India</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>New Delhi&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of India saffron, white, and India green; charged with a navy blue wheel with 24 spokes in the centre&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/India">https://en.wikipedia.org/wiki/India</a></p>',
        },
        {
          question: '<h4><i>Kazakhstan</i></h4>',
          answerTitle: '<h5><i>Republic of Kazakhstan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/255px-Flag_of_Kazakhstan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Nur-Sultan&nbsp;</p><p><i><strong>Flag Description:</strong></i> The eagle and sun from the national flag, both centered on a bi-color of white and sky blue. In the canton is a blue anchor with a red star over it.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Kazakhstan">https://en.wikipedia.org/wiki/Kazakhstan</a></p>',
        },
        {
          question: '<h4><i>Saudi Arabia</i></h4>',
          answerTitle: '<h5><i>Kingdom of Saudi Arabia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/255px-Flag_of_Saudi_Arabia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Riyadh&nbsp;</p><p><i><strong>Flag Description:</strong></i> A green field with the Shahada or Muslim creed written in the Thuluth script in white above a horizontal sword, having its tip pointed to the left.\n' +
            '<div style="margin-top:8px;"></div>\n' +
            '<a href="https://en.wikipedia.org/wiki/File:Flag_of_Saudi_Arabia.svg" class="image"><img alt="Flag of Saudi Arabia.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/150px-Flag_of_Saudi_Arabia.svg.png" decoding="async" width="150" height="100" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/225px-Flag_of_Saudi_Arabia.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/300px-Flag_of_Saudi_Arabia.svg.png 2x" data-file-width="900" data-file-height="600"></a><br>Reverse <a href="https://en.wikipedia.org/wiki/Vexillological_symbol" title="Reverse side of flag"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/2/22/FIAV_reverse.svg/23px-FIAV_reverse.svg.png" decoding="async" width="23" height="15" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/2/22/FIAV_reverse.svg/36px-FIAV_reverse.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/2/22/FIAV_reverse.svg/46px-FIAV_reverse.svg.png 2x" data-file-width="230" data-file-height="150"></a>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Saudi_Arabia">https://en.wikipedia.org/wiki/Saudi_Arabia</a></p>',
        },
        {
          question: '<h4><i>Iran</i></h4>',
          answerTitle: '<h5><i>Islamic Republic of Iran</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/255px-Flag_of_Iran.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Tehran&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal tricolor of green, white and red with the <a href="https://en.wikipedia.org/wiki/Coat_of_arms_of_Iran" class="mw-redirect" title="Coat of arms of Iran">National Emblem</a> in red centred on the white band and the Takbir written in the Kufic script in white, repeated 11 times along the bottom edge of the green band and 11 times along the top edge of the red band, for a total of 22 times on the fringe of the bands.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Iran">https://en.wikipedia.org/wiki/Iran</a></p>',
        },
        {
          question: '<h4><i>Mongolia</i></h4>',
          answerTitle: '<h5><i>Mongolia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/255px-Flag_of_Mongolia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Ulaanbaatar&nbsp;</p><p><i><strong>Flag Description:</strong></i> A vertical <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of red (hoist-side and fly-side) and blue with the <a href="https://en.wikipedia.org/wiki/Soyombo_symbol" title="Soyombo symbol">Soyombo symbol</a> centred on the hoist-side of the red band.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Mongolia">https://en.wikipedia.org/wiki/Mongolia</a></p>',
        },
        {
          question: '<h4><i>Indonesia</i></h4>',
          answerTitle: '<h5><i>Republic of Indonesia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Jakarta&nbsp;</p><p><i><strong>Flag Description:</strong></i> Nine horizontal stripes of alternating red and white&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Indonesia">https://en.wikipedia.org/wiki/Indonesia</a></p>',
        },
        {
          question: '<h4><i>Pakistan</i></h4>',
          answerTitle: '<h5><i>Islamic Republic of Pakistan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/255px-Flag_of_Pakistan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Islamabad&nbsp;</p><p><i><strong>Flag Description:</strong></i> A lengthened version of the <a href="https://en.wikipedia.org/wiki/National_flag" title="National flag">national flag</a>.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Pakistan">https://en.wikipedia.org/wiki/Pakistan</a></p>',
        },
        {
          question: '<h4><i>Turkey</i></h4>',
          answerTitle: '<h5><i>Republic of Turkey</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Ankara&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red field with a white <a href="https://en.wikipedia.org/wiki/Star_and_crescent" title="Star and crescent">star and crescent</a> slightly left of center.<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup><br>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Turkey">https://en.wikipedia.org/wiki/Turkey</a></p>',
        },
        {
          question: '<h4><i>Myanmar</i></h4>',
          answerTitle: '<h5><i>Republic of the Union of Myanmar</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/255px-Flag_of_Myanmar.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Naypyidaw&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of yellow, green and red; charged with a large white <a href="https://en.wikipedia.org/wiki/Five-pointed_star" title="Five-pointed star">five-pointed star</a> at the centre.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Myanmar">https://en.wikipedia.org/wiki/Myanmar</a></p>',
        },
        {
          question: '<h4><i>Afghanistan</i></h4>',
          answerTitle: '<h5><i>Islamic Republic of Afghanistan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/255px-Flag_of_Afghanistan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Kabul&nbsp;</p><p><i><strong>Flag Description:</strong></i> Three vertical bands of black, red and green with the <a href="https://en.wikipedia.org/wiki/Emblem_of_Afghanistan" title="Emblem of Afghanistan">National Emblem</a> in white centered on the red band and then slightly overlapping the black and green bands.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Afghanistan">https://en.wikipedia.org/wiki/Afghanistan</a></p>',
        },
        {
          question: '<h4><i>Yemen</i></h4>',
          answerTitle: '<h5><i>Republic of Yemen</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/255px-Flag_of_Yemen.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Riyadh&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red field with the national flag in the canton corner, and the Emblem of the Yemeni Armed Forces centered on the fly side.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Yemen">https://en.wikipedia.org/wiki/Yemen</a></p>',
        },
        {
          question: '<h4><i>Thailand</i></h4>',
          answerTitle: '<h5><i>Kingdom of Thailand</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Bangkok&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red disc containing a <a href="https://en.wikipedia.org/wiki/White_elephant_(pachyderm)" class="mw-redirect" title="White elephant (pachyderm)">white elephant</a> in regalia centered on the national flag&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Thailand">https://en.wikipedia.org/wiki/Thailand</a></p>',
        },
        {
          question: '<h4><i>Turkmenistan</i></h4>',
          answerTitle: '<h5><i>Republic of Turkmenistan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/255px-Flag_of_Turkmenistan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Ashgabat&nbsp;</p><p><i><strong>Flag Description:</strong></i> A green field with a vertical red stripe near the <a href="https://en.wikipedia.org/wiki/Hoist_(flag)" class="mw-redirect" title="Hoist (flag)">hoist side</a>, containing five carpet <a href="https://en.wikipedia.org/wiki/Gul_(design)" title="Gul (design)">guls</a> stacked above two crossed olive branches; a white waxing crescent moon and five white <a href="https://en.wikipedia.org/wiki/Five-pointed_star" title="Five-pointed star">five-pointed stars</a> appear in the upper field, to the <a href="https://en.wikipedia.org/wiki/Fly_(flag)" class="mw-redirect" title="Fly (flag)"> fly side</a> of the red stripe&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Turkmenistan">https://en.wikipedia.org/wiki/Turkmenistan</a></p>',
        },
        {
          question: '<h4><i>Uzbekistan</i></h4>',
          answerTitle: '<h5><i>Republic of Uzbekistan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Tashkent&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Azure_(color)" title="Azure (color)">azure</a>, <a href="https://en.wikipedia.org/wiki/White" title="White">white</a> and <a href="https://en.wikipedia.org/wiki/Green" title="Green">green</a> stripes, separated by two narrow <a href="https://en.wikipedia.org/wiki/Red" title="Red">red</a> stripes. A <a href="https://en.wikipedia.org/wiki/Crescent" title="Crescent">crescent</a> and three rows of twelve <a href="https://en.wikipedia.org/wiki/Five-pointed_star" title="Five-pointed star">five-pointed stars</a> are situated on the left side of the upper azure stripe.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Uzbekistan">https://en.wikipedia.org/wiki/Uzbekistan</a></p>',
        },
        {
          question: '<h4><i>Iraq</i></h4>',
          answerTitle: '<h5><i>Republic of Iraq</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/255px-Flag_of_Iraq.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Baghdad&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolour_(flag)" title="Tricolour (flag)">tricolour</a> of red, white, and black, charged with the <i><i lang="ar-Latn" title="Arabic-language romanization"><a href="https://en.wikipedia.org/wiki/Takb%C4%ABr" class="mw-redirect" title="Takbīr">takbīr</a></i></i> (<i><i lang="ar-Latn" title="Arabic-language romanization">Allahu akbar</i></i>, "God is [the] greatest") in green <a href="https://en.wikipedia.org/wiki/Kufic" title="Kufic">Kufic</a> script, centered on the white stripe.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Iraq">https://en.wikipedia.org/wiki/Iraq</a></p>',
        },
        {
          question: '<h4><i>Malaysia</i></h4>',
          answerTitle: '<h5><i>Malaysia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/255px-Flag_of_Malaysia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Kuala Lumpur&nbsp;</p><p><i><strong>Flag Description:</strong></i> Fourteen horizontal stripes alternating red and white; in the canton, a yellow crescent and fourteen-point star on a blue field&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Malaysia">https://en.wikipedia.org/wiki/Malaysia</a></p>',
        },
        {
          question: '<h4><i>Oman</i></h4>',
          answerTitle: '<h5><i>Sultanate of Oman</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/255px-Flag_of_Oman.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Muscat&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolor_(flag)" class="mw-redirect" title="Tricolor (flag)">tricolor</a> of white, red and green; with a vertical red stripe at the <a href="https://en.wikipedia.org/wiki/Hoist_(flag)" class="mw-redirect" title="Hoist (flag)">hoist</a>, charged with the <a href="https://en.wikipedia.org/wiki/National_emblem_of_Oman" title="National emblem of Oman">National emblem of Oman</a>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Oman">https://en.wikipedia.org/wiki/Oman</a></p>',
        },
        {
          question: '<h4><i>Philippines</i></h4>',
          answerTitle: '<h5><i>Republic of the Philippines</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/255px-Flag_of_the_Philippines.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Manila&nbsp;</p><p><i><strong>Flag Description:</strong></i> As above, with the blue and red stripes switched to indicate a state of war.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Philippines">https://en.wikipedia.org/wiki/Philippines</a></p>',
        },
        {
          question: '<h4><i>Laos</i></h4>',
          answerTitle: "<h5><i>Lao People's Democratic Republic</i></h5>",
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/255px-Flag_of_Laos.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Vientiane&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of red, blue (<a href="https://en.wikipedia.org/wiki/Spanish_fess" title="Spanish fess">double height</a>) and red; charged with a white circle in the centre (the diameter of white circle is four-fifths the height of blue band)&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Laos">https://en.wikipedia.org/wiki/Laos</a></p>',
        },
        {
          question: '<h4><i>Kyrgyzstan</i></h4>',
          answerTitle: '<h5><i>Kyrgyz Republic</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Kyrgyzstan_%28official_standards%29.png/255px-Flag_of_Kyrgyzstan_%28official_standards%29.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Bishkek&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red field charged with the <a href="https://en.wikipedia.org/wiki/Emblem_of_Kyrgyzstan" title="Emblem of Kyrgyzstan">national emblem</a> in the center, used by local governments in Kyrgyzstan&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Kyrgyzstan">https://en.wikipedia.org/wiki/Kyrgyzstan</a></p>',
        },
        {
          question: '<h4><i>Syria</i></h4>',
          answerTitle: '<h5><i>Syrian Arab Republic</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/200px-Flag_of_Syria.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Damascus&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of green, white, and black, with three red <a href="https://en.wikipedia.org/wiki/Star_(polygon)" class="mw-redirect" title="Star (polygon)">stars</a> charged in the center.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Syria">https://en.wikipedia.org/wiki/Syria</a></p>',
        },
        {
          question: '<h4><i>Cambodia</i></h4>',
          answerTitle: '<h5><i>Kingdom of Cambodia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/255px-Flag_of_Cambodia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Phnom Penh&nbsp;</p><p><i><strong>Flag Description:</strong></i> azure, the royal arms or <a href="https://en.wikipedia.org/wiki/Royal_seal" class="mw-redirect" title="Royal seal">royal seal</a>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Cambodia">https://en.wikipedia.org/wiki/Cambodia</a></p>',
        },
        {
          question: '<h4><i>Bangladesh</i></h4>',
          answerTitle: "<h5><i>People's Republic of Bangladesh</i></h5>",
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/255px-Flag_of_Bangladesh.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Dhaka&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red disc with a golden outline of Bangladesh on a green field.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Bangladesh">https://en.wikipedia.org/wiki/Bangladesh</a></p>',
        },

        {
          question: '<h4><i>South Korea</i></h4>',
          answerTitle: '<h5><i>Republic of Korea</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Seoul&nbsp;</p><p><i><strong>Flag Description:</strong></i> A navy blue flag with a white canton that has a red and blue <i>taeguek</i> superimposed in the center of the canton, with two anchors crossing.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/South_Korea">https://en.wikipedia.org/wiki/South_Korea</a></p>',
        },
        {
          question: '<h4><i>Jordan</i></h4>',
          answerTitle: '<h5><i>Hashemite Kingdom of Jordan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/255px-Flag_of_Jordan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Amman&nbsp;</p><p><i><strong>Flag Description:</strong></i> Pan-Arab colors resembles the <a href="https://en.wikipedia.org/wiki/Rising_Sun_Flag" title="Rising Sun Flag">Rising Sun Flag</a>; Jordanian flag in the center&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Jordan">https://en.wikipedia.org/wiki/Jordan</a></p>',
        },
        {
          question: '<h4><i>Azerbaijan</i></h4>',
          answerTitle: '<h5><i>Republic of Azerbaijan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/255px-Flag_of_Azerbaijan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong><img alt="Coat of arms of Baku.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Baku.svg/15px-Coat_of_arms_of_Baku.svg.png" decoding="async" width="15" height="20" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Baku.svg/23px-Coat_of_arms_of_Baku.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Baku.svg/30px-Coat_of_arms_of_Baku.svg.png 2x" data-file-width="1182" data-file-height="1614">&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">tricolour</a> of bright blue, red, and green, with a white crescent and an eight-pointed star centered on a red band&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Azerbaijan">https://en.wikipedia.org/wiki/Azerbaijan</a></p>',
        },
        {
          question: '<h4><i>United Arab Emirates</i></h4>',
          answerTitle: '<h5><i>United Arab Emirates</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Abu Dhabi&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolour_(flag)" title="Tricolour (flag)">tricolour</a> of green, white and black with a vertical ​<span class="frac nowrap"><sup>1</sup>⁄<sub>4</sub></span>-width red bar at the hoist&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/United_Arab_Emirates">https://en.wikipedia.org/wiki/United_Arab_Emirates</a></p>',
        },
        {
          question: '<h4><i>Georgia (country)</i></h4>',
          answerTitle: '<h5><i>Georgia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/255px-Flag_of_Georgia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Tbilisi&nbsp;</p><p><i><strong>Flag Description:</strong></i> A dark blue field with a centered red cross with a white cross overlaid over it.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Georgia_(country)">https://en.wikipedia.org/wiki/Georgia_(country)</a></p>',
        },
        {
          question: '<h4><i>Sri Lanka</i></h4>',
          answerTitle:
            '<h5><i>Democratic Socialist Republic of Sri Lanka</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/255px-Flag_of_Sri_Lanka.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Sri Jayawardenepura Kotte&nbsp;</p><p><i><strong>Flag Description:</strong></i> A defaced sky blue ensign with the flag of Sri Lanka in the canton and Air Force roundel.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Sri_Lanka">https://en.wikipedia.org/wiki/Sri_Lanka</a></p>',
        },
        {
          question: '<h4><i>Bhutan</i></h4>',
          answerTitle: '<h5><i>Kingdom of Bhutan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/255px-Flag_of_Bhutan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Thimphu&nbsp;</p><p><i><strong>Flag Description:</strong></i> Divided diagonally from the lower hoist-side corner to the upper fly-side corner; the upper triangle is yellow and the lower triangle is orange, with a white dragon holding four jewels in its claws centered along the dividing line and facing away from the hoist<sup id="cite_ref-btportalflag_1-0" class="reference"><a href="#cite_note-btportalflag-1">[1]</a></sup>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Bhutan">https://en.wikipedia.org/wiki/Bhutan</a></p>',
        },
        {
          question: '<h4><i>Taiwan</i></h4>',
          answerTitle: '<h5><i>Republic of China</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/255px-Flag_of_the_Republic_of_China.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Taipei&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red field with a yellow border and navy blue circle on the top, a white sun with twelve rays is on top of the blue.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Taiwan">https://en.wikipedia.org/wiki/Taiwan</a></p>',
        },

        {
          question: '<h4><i>Bahrain</i></h4>',
          answerTitle: '<h5><i>Kingdom of Bahrain</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/255px-Flag_of_Bahrain.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Manama&nbsp;</p><p><i><strong>Flag Description:</strong></i> A white field on the hoist side separated from a larger red field on the fly by five white triangles in the form of a <a href="https://en.wikipedia.org/wiki/Zigzag" title="Zigzag">zigzag</a> pattern&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Bahrain">https://en.wikipedia.org/wiki/Bahrain</a></p>',
        },
        {
          question: '<h4><i>Tajikistan</i></h4>',
          answerTitle: '<h5><i>Republic of Tajikistan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/255px-Flag_of_Tajikistan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Dushanbe&nbsp;</p><p><i><strong>Flag Description:</strong></i> A variant of the national flag charged with a gold <a href="https://en.wikipedia.org/wiki/Derafsh_Kaviani" title="Derafsh Kaviani">Derafsh Kāviān</a> extending beyond the central stripe with one seven-pointed star per corner and a winged <a href="https://en.wikipedia.org/wiki/Lion" title="Lion">lion</a> at its center.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Tajikistan">https://en.wikipedia.org/wiki/Tajikistan</a></p>',
        },
        {
          question: '<h4><i>North Korea</i></h4>',
          answerTitle: "<h5><i>Democratic People's Republic of Korea</i></h5>",
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/255px-Flag_of_North_Korea.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Pyongyang&nbsp;</p><p><i><strong>Flag Description:</strong></i> A wide red stripe at the center, bordered by a narrow white stripe both above and below, followed by a blue stripe. The central red stripe carries a five-pointed red star within a white circle near the hoist.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/North_Korea">https://en.wikipedia.org/wiki/North_Korea</a></p>',
        },
        {
          question: '<h4><i>State of Palestine</i></h4>',
          answerTitle: '<h5><i>State of Palestine[i]</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/255px-Flag_of_Palestine.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolour_(flag)" title="Tricolour (flag)">tricolour</a> of black, white, and green; with a red triangle based at the <a href="https://en.wikipedia.org/wiki/Hoist_(flag)" class="mw-redirect" title="Hoist (flag)">hoist</a> charged with the <a href="https://en.wikipedia.org/wiki/Coat_of_arms_of_the_Palestinian_National_Authority" class="mw-redirect" title="Coat of arms of the Palestinian National Authority">national emblem</a> above two crossed white swords in the upper hoist corner&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/State_of_Palestine">https://en.wikipedia.org/wiki/State_of_Palestine</a></p>',
        },
        {
          question: '<h4><i>Armenia</i></h4>',
          answerTitle: '<h5><i>Republic of Armenia</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/255px-Flag_of_Armenia.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Yerevan&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Tricolour_(flag)" title="Tricolour (flag)">tricolor</a> of <a href="https://en.wikipedia.org/wiki/Red" title="Red">red</a>, <a href="https://en.wikipedia.org/wiki/Blue" title="Blue">blue</a>, and <a href="https://en.wikipedia.org/wiki/Orange_(colour)" title="Orange (colour)">orange</a> with a white sideways <a href="https://en.wikipedia.org/wiki/Zig-zag" class="mw-redirect" title="Zig-zag">zig-zag</a> <a href="https://en.wikipedia.org/wiki/Chevron_(insignia)" title="Chevron (insignia)">chevron</a> in the fly&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Armenia">https://en.wikipedia.org/wiki/Armenia</a></p>',
        },
        {
          question: '<h4><i>Kuwait</i></h4>',
          answerTitle: '<h5><i>State of Kuwait</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/255px-Flag_of_Kuwait.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Kuwait City&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of green, white and red; with a black trapezium based on the hoist side.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Kuwait">https://en.wikipedia.org/wiki/Kuwait</a></p>',
        },
        {
          question: '<h4><i>Lebanon</i></h4>',
          answerTitle: '<h5><i>Lebanese Republic</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/255px-Flag_of_Lebanon.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Beirut&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal <a href="https://en.wikipedia.org/wiki/Triband_(flag)" title="Triband (flag)">triband</a> of red, white (<a href="https://en.wikipedia.org/wiki/Spanish_fess" title="Spanish fess">double height</a>) and red; charged with a green <a href="https://en.wikipedia.org/wiki/Cedrus_libani" title="Cedrus libani">Lebanon Cedar</a> tree.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Lebanon">https://en.wikipedia.org/wiki/Lebanon</a></p>',
        },
        {
          question: '<h4><i>Qatar</i></h4>',
          answerTitle: '<h5><i>State of Qatar</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/255px-Flag_of_Qatar.svg.png',
          answerDesc: `<p><i><strong>Capital</strong></i><strong>: </strong>Doha&nbsp;</p><p><i><strong>Flag Description:</strong></i> A light blue flag with the national flag in the canton, with the <a href="https://en.wikipedia.org/wiki/Qatar_Air_Force" title="Qatar Air Force">Qatar Air Force</a>'s roundel on the fly side.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Qatar">https://en.wikipedia.org/wiki/Qatar</a></p>`,
        },
        {
          question: '<h4><i>Nepal</i></h4>',
          answerTitle: '<h5><i>Federal Democratic Republic of Nepal</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/394px-Flag_of_Nepal.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Kathmandu&nbsp;</p><p><i><strong>Flag Description:</strong></i> The national flag of Nepal consists of two juxtaposed triangular figures with a crimson-coloured base and deep blue borders, there being a white emblem of the crescent moon with eight rays visible out of sixteen in the upper part and a white emblem of a twelve rayed sun in the lower part<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Nepal">https://en.wikipedia.org/wiki/Nepal</a></p>',
        },

        {
          question: '<h4><i>East Timor</i></h4>',
          answerTitle: '<h5><i>Democratic Republic of Timor-Leste</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/255px-Flag_of_East_Timor.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Dili&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red field with the black isosceles triangle based on the hoist-side bearing a white five-pointed star in the center superimposed on the larger yellow triangle, also based on the hoist-side, that extends to the center of the flag.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/East_Timor">https://en.wikipedia.org/wiki/East_Timor</a></p>',
        },
        {
          question: '<h4><i>Cyprus</i></h4>',
          answerTitle: '<h5><i>Republic of Cyprus</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/255px-Flag_of_Cyprus.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Nicosia&nbsp;</p><p><i><strong>Flag Description:</strong></i> An outline of the island of Cyprus above twin <a href="https://en.wikipedia.org/wiki/Olive_branches" class="mw-redirect" title="Olive branches">olive branches</a> on a white field&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Cyprus">https://en.wikipedia.org/wiki/Cyprus</a></p>',
        },
        {
          question: '<h4><i>Brunei</i></h4>',
          answerTitle: '<h5><i>Nation of Brunei, the Abode of Peace</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/255px-Flag_of_Brunei.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Bandar Seri Begawan&nbsp;</p><p><i><strong>Flag Description:</strong></i> A centered <a href="https://en.wikipedia.org/wiki/Red" title="Red">red</a> <a href="https://en.wikipedia.org/wiki/Crest_of_Brunei" class="mw-redirect" title="Crest of Brunei">crest of Brunei</a> on a <a href="https://en.wikipedia.org/wiki/Yellow" title="Yellow">yellow</a> field cut by <a href="https://en.wikipedia.org/wiki/Black" title="Black">black</a> and <a href="https://en.wikipedia.org/wiki/White" title="White">white</a> diagonal stripes (<a href="https://en.wikipedia.org/wiki/Parallelogram" title="Parallelogram">parallelograms</a>).&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Brunei">https://en.wikipedia.org/wiki/Brunei</a></p>',
        },
        {
          question: '<h4><i>Singapore</i></h4>',
          answerTitle:
            '<h5><i>\n' +
            'Republic of Singapore\n' +
            ' Malay:Republik SingapuraChinese:新加坡共和国Tamil:சிங்கப்பூர் குடியரசு\n' +
            '  \n' +
            '</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/255px-Flag_of_Singapore.svg.png',
          answerDesc: `<p><i><strong>Capital</strong></i><strong>: </strong>Singapore&nbsp;</p><p><i><strong>Flag Description:</strong></i> A horizontal bicolour of red and white; charged in white in the canton with a crescent facing the fly and a pentagon of five stars resembling the nation's ideals.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Singapore">https://en.wikipedia.org/wiki/Singapore</a></p>`,
        },
        {
          question: '<h4><i>Maldives</i></h4>',
          answerTitle: '<h5><i>Republic of Maldives</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/255px-Flag_of_Maldives.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Malé&nbsp;</p><p><i><strong>Flag Description:</strong></i> A green rectangle centred on a red field; charged with a white crescent facing the <a href="https://en.wikipedia.org/wiki/Fly_(flag)" class="mw-redirect" title="Fly (flag)">fly side</a>&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Maldives">https://en.wikipedia.org/wiki/Maldives</a></p>',
        },
        {
          question: '<h4><i>Japan</i></h4>',
          answerTitle: '<h5><i>Japan</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png',
          answerDesc:
            '<p><i><strong>Capital</strong></i><strong>: </strong>Tokyo&nbsp;</p><p><i><strong>Flag Description:</strong></i> A red disc centered on a white rectangular banner&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Japan">https://en.wikipedia.org/wiki/Japan</a></p>',
        },
        {
          question: '<h4><i>Vietnam</i></h4>',
          answerTitle: '<h5><i>Socialist Republic of Vietnam</i></h5>',
          answerImage:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png',
          answerDesc: `<p><i><strong>Capital</strong></i><strong>: </strong>Hanoi&nbsp;</p><p><i><strong>Flag Description:</strong></i> A white flag with an emblem of the Vietnam People's Navy in its upper canton with a blue strip below.&nbsp;</p><p><a href="https://en.wikipedia.org/wiki/Vietnam">https://en.wikipedia.org/wiki/Vietnam</a></p>`,
        },
      ],
    },
    {
      name: 'GRE Words',
      desc: 'Master the top 100 GRE words',
      mastered: 100,
      total: 100,
      cards: [],
    },
    {
      name: 'Pokemon',
      desc: 'Memorize Pokedex numbers and types of the original 151 pokemons',
      mastered: 0,
      total: 151,
      cards: [],
    },
  ],
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_DECK_INDEX:
      return { ...state, deckIndex: payload }
    case ADD_CARD:
      return {
        ...state,
        decks: state.decks.map((deck, deckIndex) =>
          deckIndex === payload.deckIndex
            ? {
                ...deck,
                cards: [...deck.cards, payload.card],
              }
            : deck,
        ),
      }
    case SET_CARD:
      return {
        ...state,
        decks: state.decks.map((deck, deckIndex) =>
          deckIndex === payload.deckIndex
            ? {
                ...deck,
                cards: deck.cards.map((card, cardIndex) =>
                  cardIndex === payload.cardIndex
                    ? {
                        ...payload.card,
                      }
                    : card,
                ),
              }
            : deck,
        ),
      }
    case DELETE_CARD:
      return {
        ...state,
        decks: state.decks.map((deck, deckIndex) =>
          deckIndex === payload.deckIndex
            ? {
                ...deck,
                cards: deck.cards.filter(
                  (card, cardIndex) => cardIndex !== payload.cardIndex,
                ),
              }
            : deck,
        ),
      }
    default:
      return state
  }
}
