!function e(t, a, o) {
    function n(r, s) {
        if (!a[r]) {
            if (!t[r]) {
                var c = "function" == typeof require && require;
                if (!s && c)
                    return c(r, !0);
                if (i)
                    return i(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var d = a[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                var a = t[r][1][e];
                return n(a ? a : e)
            }, d, d.exports, e, t, a, o)
        }
        return a[r].exports
    }
    for (var i = "function" == typeof require && require, r = 0; r < o.length; r++)
        n(o[r]);
    return n
}({
    1: [function(e, t, a) {
        function o() {
            c.addEventListener("click", function(e) {
                return i.selectPrevRecord(), !1
            }, !1),
            l.addEventListener("click", function(e) {
                return i.getSelectedRecord() ? i.flipSelectedRecord() : i.selectNextRecord(), !1
            }, !1),
            d.addEventListener("click", function(e) {
                return i.selectNextRecord(), !1
            }, !1)
        }
        function n(e) {
            e.data.title && (f.innerHTML = e.data.title),
            e.data.artist && (u.innerHTML = e.data.artist),
            e.data.cover && (m.style.backgroundImage = "url(" + e.data.cover + ")")
        }
        var i = e("./cratedigger"),
            
            r = JSON.parse('[{"title":"So What","artist":"Miles Davis","cover":"http://cdn-images.deezer.com/images/cover/63bf5fe5f15f69bfeb097139fc34f3d7/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBYBNV14607703ACA","hasSleeve":false},{"title":"Stolen Moments","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOCNMPH12B0B8064AA","hasSleeve":false},{"title":"Theme for Maxine","artist":"Woody Shaw","cover":"http://cdn-images.deezer.com/images/cover/bb937f1e1d57f7542a64c74b13c47900/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMLSGW131343841A7","hasSleeve":false},{"title":"Moanin\' Mambo","artist":"Mingus Big Band","cover":"http://cdn-images.deezer.com/images/cover/dcd1565cf3dd663f7b7492e4da378855/400x400-000000-80-0-0.jpg","year":"1996","id":"SOVQLVX13134386AF9","hasSleeve":false},{"title":"Summertime","artist":"Oscar Peterson","cover":"http://cdn-images.deezer.com/images/cover/d6acdf4a975edf9556182d7c6a31e596/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFNWTV137712739BC","hasSleeve":false},{"title":"Tea for Two","artist":"Lester Young","cover":"http://cdn-images.deezer.com/images/cover/8effbd8dc7a95f06c5aca8e6ecf3a78e/400x400-000000-80-0-0.jpg","year":"1997","id":"SOAPBMQ144C4A18CD4","hasSleeve":false},{"title":"Line Up","artist":"Lennie Tristano","cover":"http://cdn-images.deezer.com/images/cover/23b2766c2457be502e3b79f088cb8ba9/400x400-000000-80-0-0.jpg","year":"1955","id":"SOBPDRQ1313439BA51","hasSleeve":false},{"title":"I Remember Clifford","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/efa706e1d3fc1363c7a5f07f9088a6cb/400x400-000000-80-0-0.jpg","year":"1999","id":"SOCRUWO12AB0184846","hasSleeve":false},{"title":"All The Things You Are","artist":"Oscar Pettiford","cover":"http://cdn-images.deezer.com/images/cover/8ce9fcf0ec333b06c38ad999c8dccb29/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBHKVG1315CD41C41","hasSleeve":false},{"title":"Easy Living","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/e8463630813b6c25536cdbef03134ae3/400x400-000000-80-0-0.jpg","year":"1995","id":"SOEVLRZ131343A28D6","hasSleeve":false},{"title":"Whiplash","artist":"Don Ellis","cover":"http://cdn-images.deezer.com/images/cover/34d87cf0631937bdb79675402054d3b2/400x400-000000-80-0-0.jpg","year":"1973","id":"SOOVZHR12A8C132FA8","hasSleeve":false},{"title":"Bumpin\' On Sunset","artist":"Wes Montgomery","cover":"http://cdn-images.deezer.com/images/cover/75f43523fcd01b3046486674e09d3700/400x400-000000-80-0-0.jpg","year":"1966","id":"SOKXHZT1478B63887A","hasSleeve":false},{"title":"Footprints","artist":"Wayne Shorter","cover":"http://cdn-images.deezer.com/images/cover/40c4768d6ee25d5356b5efbd0f69c324/400x400-000000-80-0-0.jpg","year":"2007","id":"SOZLFJA144D13D0768","hasSleeve":false},{"title":"Blue Train","artist":"John Coltrane","cover":"http://cdn-images.deezer.com/images/cover/1d019d81f99c5213398791c8a0d6a2d1/400x400-000000-80-0-0.jpg","year":"1957","id":"SOACYSS145FEBAD8C6","hasSleeve":false},{"title":"All Blues","artist":"Ron Carter","cover":"http://cdn-images.deezer.com/images/cover/2d20ae4c4127ce6b8aa58f08becc9c05/400x400-000000-80-0-0.jpg","year":"2001","id":"SOBJQBM144E5CA4D89","hasSleeve":false},{"title":"My Funny Valentine","artist":"Chet Baker","cover":"http://cdn-images.deezer.com/images/cover/d2f8b4d15a624333903c57b7d4aa5ab5/400x400-000000-80-0-0.jpg","year":"1954","id":"SOAAQIZ144C486A932","hasSleeve":false},{"title":"Love for Sale","artist":"Cannonball Adderley","cover":"http://cdn-images.deezer.com/images/cover/b7df440f2e746476810b8fc36e1970df/400x400-000000-80-0-0.jpg","year":"1959","id":"SOPJQEU144AD705584","hasSleeve":false},{"title":"Lady Sings the Blues","artist":"Herbie Nichols","cover":"http://cdn-images.deezer.com/images/cover/17ea4a0526096e5a8fb20717386e99e9/400x400-000000-80-0-0.jpg","year":"2010","id":"SOAOYTH1376F78A4BA","hasSleeve":false},{"title":"Cleopatra\'s Dream","artist":"Bud Powell","cover":"http://cdn-images.deezer.com/images/cover/013ea0cecc3e8b370bd21b445ce5b8c5/400x400-000000-80-0-0.jpg","year":"1958","id":"SOKPATT12A6D4F412B","hasSleeve":false},{"title":"Bernie\'s Tune","artist":"Gerry Mulligan","cover":"http://cdn-images.deezer.com/images/cover/7bce5b21ad29df130368121a5c4bcf36/400x400-000000-80-0-0.jpg","year":"1990","id":"SOBJHOS137618BE4FD","hasSleeve":false},{"title":"Let The Good Times Roll","artist":"Lester Bowie","cover":"http://cdn-images.deezer.com/images/cover/08e18d6e4f8499003ed8c9ebbc7ce73a/400x400-000000-80-0-0.jpg","year":"1988","id":"SOBRPSD13134386B16","hasSleeve":false},{"title":"Grooveyard","artist":"Harold Land","cover":"http://cdn-images.deezer.com/images/cover/0cac603ac7828983edb63c59f4b2ff99/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHANRF1311AFECA2F","hasSleeve":false},{"title":"Far West","artist":"Tim Hagans","cover":"http://cdn-images.deezer.com/images/cover/f1d9645904ea3441fe5c7d025c450d0c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGFYEL12A58A7C0B2","hasSleeve":false},{"title":"My Ideal","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOFQKLH1313439C9D0","hasSleeve":false},{"title":"Yearnin\'","artist":"Oliver Nelson","cover":"http://cdn-images.deezer.com/images/cover/99235a5fbe557590ccd62a2a152e4dbe/400x400-000000-80-0-0.jpg","year":"1961","id":"SOEIGTM12A6D4F92E1","hasSleeve":false},{"title":"Moanin\'","artist":"Art Blakey","cover":"http://cdn-images.deezer.com/images/cover/3e8498d49bc3d030a36730aada3c553b/400x400-000000-80-0-0.jpg","year":"1958","id":"SOBWNRX145FD6B55E2","hasSleeve":false},{"title":"Like Someone in Love","artist":"Art Farmer","cover":"http://cdn-images.deezer.com/images/cover/c85aed0c4cb96bcc6753d6140de9cf75/400x400-000000-80-0-0.jpg","year":"2004","id":"SOBFGKP12A6D4F8834","hasSleeve":false},{"title":"Cheese Cake","artist":"Dexter Gordon","cover":"http://cdn-images.deezer.com/images/cover/767354ab07d1fdcc6924bbce0a431e60/400x400-000000-80-0-0.jpg","year":"1988","id":"SOKPRXE1377042B07E","hasSleeve":false},{"title":"Peace Piece","artist":"Bill Evans","cover":"http://cdn-images.deezer.com/images/cover/12a472c142105e0496e842e486b252cc/400x400-000000-80-0-0.jpg","year":"1998","id":"SOAYBHG144C74C5C52","hasSleeve":false},{"title":"Ain\'t It Funky Now","artist":"Grant Green","cover":"http://cdn-images.deezer.com/images/cover/dfe2b24b075435f62907d3637cd812b4/400x400-000000-80-0-0.jpg","year":"1970","id":"SOBAGJQ13167714741","hasSleeve":false},{"title":"Driva\' Man","artist":"Max Roach","cover":"http://cdn-images.deezer.com/images/cover/7aee52fbf15a6b9a034a3a915fbe0d60/400x400-000000-80-0-0.jpg","year":"2011","id":"SOERNHP13767946CFF","hasSleeve":false},{"title":"What Are You Doing The Rest Of Your Life?","artist":"Milt Jackson","cover":"http://cdn-images.deezer.com/images/cover/a1133e65eb7cbee9e5e32d8f31f50475/400x400-000000-80-0-0.jpg","year":"1973","id":"SOHXWWN13777557752","hasSleeve":false},{"title":"The Girl From Ipanema","artist":"Stan Getz","cover":"http://cdn-images.deezer.com/images/cover/0b072edc1697b558720c640948371d7a/400x400-000000-80-0-0.jpg","year":"2000","id":"SOCNBTN1478C4603ED","hasSleeve":false},{"title":"Alone Together","artist":"Kenny Dorham","cover":"http://cdn-images.deezer.com/images/cover/228b0532e8ef84a6cfa49bebfec24278/400x400-000000-80-0-0.jpg","year":"1959","id":"SOABROI12AB017C3E5","hasSleeve":false},{"title":"September In The Rain","artist":"Roy Hargrove","cover":"http://cdn-images.deezer.com/images/cover/98a482d8ccca7b22152d5714c22aa464/400x400-000000-80-0-0.jpg","year":"1994","id":"SOPWTIL12A8C13BBDF","hasSleeve":false},{"title":"Love Theme from \'Spartacus\'","artist":"Yusef Lateef","cover":"http://cdn-images.deezer.com/images/cover/bb50516b507ac87482a446ce44b0629e/400x400-000000-80-0-0.jpg","year":"1961","id":"SOIFBAQ1311AFE3148","hasSleeve":false},{"title":"Almost Like Being in Love","artist":"Red Garland","cover":"http://cdn-images.deezer.com/images/cover/b3cf6995de24d43c717e41300e78f607/400x400-000000-80-0-0.jpg","year":"2006","id":"SOATHDZ12AB0185B5F","hasSleeve":false},{"title":"Night And Day","artist":"Joe Pass","cover":"http://cdn-images.deezer.com/images/cover/17ecd15c241bf378e684d553b4e7b8bc/400x400-000000-80-0-0.jpg","year":"2005","id":"SOBYOAC13E6CB01926","hasSleeve":false},{"title":"Sous Le Ciel De Paris","artist":"Toots Thielemans","cover":"http://cdn-images.deezer.com/images/cover/81f873457a346b26b85a8122541a8f07/400x400-000000-80-0-0.jpg","year":"1998","id":"SOMUWQS12A8C13B2D3","hasSleeve":false},{"title":"Scrambled Eggs","artist":"Nat Adderley","cover":"http://cdn-images.deezer.com/images/cover/a2154ebd75c247095fef500c6d5f163c/400x400-000000-80-0-0.jpg","year":"1960","id":"SODJAYZ1311AFDA13F","hasSleeve":false},{"title":"Lansana\'s Priestess","artist":"Donald Byrd","cover":"http://cdn-images.deezer.com/images/cover/c00ba5c47f58252e4ef81279e6feb1a0/400x400-000000-80-0-0.jpg","year":"1973","id":"SODUJIR12A6D4F85A0","hasSleeve":false},{"title":"My Little Brown Book","artist":"Duke Ellington","cover":"http://cdn-images.deezer.com/images/cover/ac05edd38684177e3556b1cdbde4764a/400x400-000000-80-0-0.jpg","year":"1963","id":"SOGTTHV136F24052DE","hasSleeve":false},{"title":"Patricia","artist":"Art Pepper","cover":"http://cdn-images.deezer.com/images/cover/4928a2211000a85bbe02cd299b5d6291/400x400-000000-80-0-0.jpg","year":"2007","id":"SONVUPG13772274375","hasSleeve":false},{"title":"The Sidewinder","artist":"Lee Morgan","cover":"http://cdn-images.deezer.com/images/cover/38ebedd7c4a77c3502b2cc5d80db3109/400x400-000000-80-0-0.jpg","year":"1998","id":"SOGTXEX12B0B806866","hasSleeve":false},{"title":"You Don\'t Know What Love Is","artist":"Sonny Rollins","cover":"http://cdn-images.deezer.com/images/cover/49d72537f916a90c27e629a87308bc53/400x400-000000-80-0-0.jpg","year":"1956","id":"SOEDTNN13772A39D94","hasSleeve":false},{"title":"Blue Monk","artist":"Thelonious Monk","cover":"http://cdn-images.deezer.com/images/cover/023727db68f4edbb78eb11808fd95574/400x400-000000-80-0-0.jpg","year":"1999","id":"SOATUCE144AD0E89D1","hasSleeve":false},{"title":"Las Vegas Tango","artist":"Gil Evans","cover":"http://cdn-images.deezer.com/images/cover/316f0911a56060678c224120387cd7a8/400x400-000000-80-0-0.jpg","year":"1964","id":"SOFDOCY13775C36109","hasSleeve":false},{"title":"Sandu","artist":"Clifford Brown","cover":"http://cdn-images.deezer.com/images/cover/acd61c42e28df7fbd337ffd3e6383908/400x400-000000-80-0-0.jpg","year":"1955","id":"SOAACEF13152A71E9D","hasSleeve":false}]'),
            s = (JSON.parse('[{"title":"You Got Me","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/80768e0c7f2662d74273404f879650bc/400x400-000000-80-0-0.jpg","year":"1999","id":"SOJANBO144BA08EC60","hasSleeve":false},{"title":"What\'s Golden","artist":"Jurassic 5","cover":"http://cdn-images.deezer.com/images/cover/c41c6c376770253f8805f5410308560c/400x400-000000-80-0-0.jpg","year":"2002","id":"SOMYUBT144C2877D88","hasSleeve":false},{"title":"Fazers","artist":"King Geedorah","cover":"http://cdn-images.deezer.com/images/cover/498d19a7bd8efcabfe19a9cff20036c4/400x400-000000-80-0-0.jpg","year":"2003","id":"SOCTFLE137686D44D0","hasSleeve":false},{"title":"Peachfuzz","artist":"KMD","cover":"http://cdn-images.deezer.com/images/cover/fb34d03a4518f2920abb3c9f149663c1/400x400-000000-80-0-0.jpg","year":"1991","id":"SORJEGE13719B8C358","hasSleeve":false},{"title":"None Shall Pass","artist":"Aesop Rock","cover":"http://cdn-images.deezer.com/images/cover/fd0130bb478ed7fff6ca8cc28693aef2/400x400-000000-80-0-0.jpg","year":"2007","id":"SOKJIZT1311AFE7DAE","hasSleeve":false},{"title":"MC\'s Act Like They Don\'t Know","artist":"KRS-One","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SORINAN1311AFD88CB","hasSleeve":false},{"title":"It\'s Tricky","artist":"Run-D.M.C.","cover":"http://cdn-images.deezer.com/images/cover/6738946c5c48780a0608842447cc0b47/400x400-000000-80-0-0.jpg","year":"1986","id":"SODJTQX144BD986FD6","hasSleeve":false},{"title":"Get By","artist":"Talib Kweli","cover":"http://cdn-images.deezer.com/images/cover/f81ec68d371c6c8c6b3499d5d89344f2/400x400-000000-80-0-0.jpg","year":"2002","id":"SOEGOYO13730DADE42","hasSleeve":false},{"title":"A Little Soul","artist":"Pete Rock","cover":"http://cdn-images.deezer.com/images/cover/9b1cf8de1f93088531e05f6d367714f9/400x400-000000-80-0-0.jpg","year":"2001","id":"SOCEROK12A6D4FA5FC","hasSleeve":false},{"title":"The Show Goes On","artist":"Lupe Fiasco","cover":"http://cdn-images.deezer.com/images/cover/4f1e0978615ffa5fd7433d7c3a72d0d5/400x400-000000-80-0-0.jpg","year":"2010","id":"SOCMPYA12C56413B5F","hasSleeve":false},{"title":"Wavin\' Flag","artist":"K\'naan","cover":"http://cdn-images.deezer.com/images/cover/c221e82e49c657ff2ddf42ab30038005/400x400-000000-80-0-0.jpg","year":"2010","id":"SOTBICN13759295452","hasSleeve":false},{"title":"You Gots To Chill","artist":"EPMD","cover":"http://cdn-images.deezer.com/images/cover/c1c225ca9accb0c13fb97f684b44937f/400x400-000000-80-0-0.jpg","year":"1988","id":"SOHNXDQ141917E3E88","hasSleeve":false},{"title":"Everything Changes","artist":"Aceyalone","cover":"http://cdn-images.deezer.com/images/cover/05281dea6ebc150cc845242ef06f8675/400x400-000000-80-0-0.jpg","year":"2005","id":"SODYUQX131343A56B5","hasSleeve":false},{"title":"C.R.E.A.M.","artist":"Wu-Tang Clan","cover":"http://cdn-images.deezer.com/images/cover/f668b179366bb3ed623dd8bccd2f38eb/400x400-000000-80-0-0.jpg","year":"1993","id":"SOHYJIZ146037961A9","hasSleeve":false},{"title":"Sweetest Girl (Dollar Bill)","artist":"Wyclef Jean","cover":"http://cdn-images.deezer.com/images/cover/b986b2f1d3fa50a5a8a9402cd273af0d/400x400-000000-80-0-0.jpg","year":"2007","id":"SODUALI1313438B53E","hasSleeve":false},{"title":"Breathe And Stop","artist":"Q-Tip","cover":"http://cdn-images.deezer.com/images/cover/324315846539ae9a430638bd78538f2c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOEUVEH12B0B8086F5","hasSleeve":false},{"title":"Ms. Jackson","artist":"OutKast","cover":"http://cdn-images.deezer.com/images/cover/653316993a79f936dcdec7573e26256f/400x400-000000-80-0-0.jpg","year":"2001","id":"SOSRDPS144B28ECEB5","hasSleeve":false},{"title":"Children\'s Story","artist":"Slick Rick","cover":"http://cdn-images.deezer.com/images/cover/5ef85a738d6fd32120d0e2b5cbc0222f/400x400-000000-80-0-0.jpg","year":"1988","id":"SODQHOL144BD94C4FD","hasSleeve":false},{"title":"Paid In Full","artist":"Eric B. & Rakim","cover":"http://cdn-images.deezer.com/images/cover/9badf0e54dff9de69211a75179750d88/400x400-000000-80-0-0.jpg","year":"2002","id":"SOBTYFF146009D2312","hasSleeve":false},{"title":"Watch Out Now","artist":"The Beatnuts","cover":"http://cdn-images.deezer.com/images/cover/587758a5b55bd4c07ed2b226bc352fa2/400x400-000000-80-0-0.jpg","year":"1999","id":"SONJBOI1315CD489EC","hasSleeve":false},{"title":"Shadowboxin\' (Album Version (Explicit))","artist":"GZA","cover":"http://cdn-images.deezer.com/images/cover/48a9e31ff33ba3f75501dd7a366b9cd1/400x400-000000-80-0-0.jpg","year":"1995","id":"SOCMSVB12B0B808230","hasSleeve":false},{"title":"Luchini Aka This Is It","artist":"Camp Lo","cover":"http://cdn-images.deezer.com/images/cover/b2244fbcf3841f0ca9ce7cd3166e5ce9/400x400-000000-80-0-0.jpg","year":"1997","id":"SOCLSAD13134399947","hasSleeve":false},{"title":"Uknowhowwedu","artist":"Bahamadia","cover":"http://cdn-images.deezer.com/images/cover/714d1810cde9dfc9401f8e89cd21852c/400x400-000000-80-0-0.jpg","year":"1996","id":"SOKILAT12A6D4F7FC7","hasSleeve":false},{"title":"Won\'t Do","artist":"J Dilla","cover":"http://cdn-images.deezer.com/images/cover/088f163087d7af72881db574eba40674/400x400-000000-80-0-0.jpg","year":"2006","id":"SOGHARK12A58A7D128","hasSleeve":false},{"title":"Crazy","artist":"Gnarls Barkley","cover":"http://cdn-images.deezer.com/images/cover/d6c9abb3972dee7b6b8b624beb08b67c/400x400-000000-80-0-0.jpg","year":"2006","id":"SOBKMKP14509A7F36E","hasSleeve":false},{"title":"Full Clip","artist":"Gang Starr","cover":"http://cdn-images.deezer.com/images/cover/169f994d7ab2a8d868cde77fd566cbbf/400x400-000000-80-0-0.jpg","year":"1999","id":"SOAKAXG1456B07B9DA","hasSleeve":false},{"title":"Coastin\' feat. K. Flay","artist":"Zion I","cover":"http://cdn-images.deezer.com/images/cover/03ea1c4655b44c586e90dd4d5f9e1aac/400x400-000000-80-0-0.jpg","year":"2009","id":"SOVXZYY12AB0184DA4","hasSleeve":false},{"title":"One","artist":"Ghostface Killah","cover":"http://cdn-images.deezer.com/images/cover/3a5da6b535f5f7307cba62d42011cb5f/400x400-000000-80-0-0.jpg","year":"2000","id":"SOPDDBK1312A8A8FD5","hasSleeve":false},{"title":"Hip Hop","artist":"Mos Def","cover":"http://cdn-images.deezer.com/images/cover/89e28a0a93eff9dc574476710b5c09e2/400x400-000000-80-0-0.jpg","year":"1999","id":"SOGWGSJ12AF72A8AC2","hasSleeve":false},{"title":"My Philosophy","artist":"Boogie Down Productions","cover":"http://cdn-images.deezer.com/images/cover/57f2f8c29421f6fe2c8e04bb2f125a66/400x400-000000-80-0-0.jpg","year":"2000","id":"SODLVET12A58A77A31","hasSleeve":false},{"title":"Worst Comes To Worst","artist":"Dilated Peoples","cover":"http://cdn-images.deezer.com/images/cover/bef22b88d74c9fc79a0921d5f479518f/400x400-000000-80-0-0.jpg","year":"2001","id":"SODEKQK131677146C6","hasSleeve":false},{"title":"If You Must","artist":"Del the Funky Homosapien","cover":"http://cdn-images.deezer.com/images/cover/df1b0a28ee65efc54a5960991a96b872/400x400-000000-80-0-0.jpg","year":"2000","id":"SOREGQF12B0B80658E","hasSleeve":false},{"title":"When I B On Tha Mic","artist":"Rakim","cover":"http://cdn-images.deezer.com/images/cover/4ddcfa5e69a1b79acbe20f4ce282475c/400x400-000000-80-0-0.jpg","year":"1999","id":"SOOCMSF136CA2E9BC1","hasSleeve":false},{"title":"Lyrical Swords","artist":"Ras Kass","cover":"http://cdn-images.deezer.com/images/cover/f24fe73ffa34b9f997ba4a2631c0334d/400x400-000000-80-0-0.jpg","year":"2005","id":"SODEXGO12A8C13C01D","hasSleeve":false},{"title":"Shimmy Shimmy Ya","artist":"Ol\' Dirty Bastard","cover":"http://cdn-images.deezer.com/images/cover/786388d368900f66f05bd3831bda4ff8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOYVNXN144B26B71A2","hasSleeve":false},{"title":"The Seed (2.0)","artist":"The Roots","cover":"http://cdn-images.deezer.com/images/cover/411ffd8911f1fc05c205e86509f6eca1/400x400-000000-80-0-0.jpg","year":"2002","id":"SOCZZUU144F500F16F","hasSleeve":false},{"title":"Ice Cream","artist":"Raekwon","cover":"http://cdn-images.deezer.com/images/cover/75c9f84b189c2bc310647e61b7a6d5e8/400x400-000000-80-0-0.jpg","year":"1995","id":"SOWTQFY135C395E98C","hasSleeve":false},{"title":"Milk The Cow","artist":"Cappadonna","cover":"http://cdn-images.deezer.com/images/cover/5953b45d6716fcb3b2fd222072ac4029/400x400-000000-80-0-0.jpg","year":"1998","id":"SOCEGCF1311AFE5D52","hasSleeve":false},{"title":"Runnin\'","artist":"The Pharcyde","cover":"http://cdn-images.deezer.com/images/cover/71de7ca1aea063a87dca08907d7d9d11/400x400-000000-80-0-0.jpg","year":"2013","id":"SOLFYAD137AD7633B2","hasSleeve":false},{"title":"The Choice Is Yours","artist":"Black Sheep","cover":"http://cdn-images.deezer.com/images/cover/d8ac4fae559fb005ddf7f0ed5adbf2f9/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEVEPY12A6310EAD3","hasSleeve":false},{"title":"Tennessee","artist":"Arrested Development","cover":"http://cdn-images.deezer.com/images/cover/2c7039e6188be44a8600a8f87edb5ec7/400x400-000000-80-0-0.jpg","year":"1992","id":"SOIXAYX12A8C139032","hasSleeve":false},{"title":"Sugar Hill","artist":"AZ","cover":"http://cdn-images.deezer.com/images/cover/b2eac1235c5ec67612d2fa0cce3c7905/400x400-000000-80-0-0.jpg","year":"1995","id":"SOECJXV136A5B5EB5E","hasSleeve":false},{"title":"Loungin\'","artist":"Guru","cover":"http://cdn-images.deezer.com/images/cover/9af047171c514d7d558be4d2eb0a637d/400x400-000000-80-0-0.jpg","year":"2008","id":"SOHLCCS1312A8AD2C6","hasSleeve":false},{"title":"La Rhumba","artist":"Bobby Digital","cover":"http://cdn-images.deezer.com/images/cover/ac98a11c434ca76b55553eaa1722a4ad/400x400-000000-80-0-0.jpg","year":"2002","id":"SOFXNEJ12B0B80BD35","hasSleeve":false},{"title":"N.Y. State Of Mind","artist":"Nas","cover":"http://cdn-images.deezer.com/images/cover/e7f5acdfbc1c49bc4520938b4d775ec6/400x400-000000-80-0-0.jpg","year":"1994","id":"SOFQKQO1312FE0065F","hasSleeve":false},{"title":"Award Tour","artist":"A Tribe Called Quest","cover":"http://cdn-images.deezer.com/images/cover/aacb57691f97456e6594d8e991bb81bb/400x400-000000-80-0-0.jpg","year":"1993","id":"SODGQBF144BD8F4FD1","hasSleeve":false},{"title":"My Definition Of A Boombastic Jazz Style","artist":"Dream Warriors","cover":"http://cdn-images.deezer.com/images/cover/1f9bfa4c7665e07fc7dfc7ab4e59ec49/400x400-000000-80-0-0.jpg","year":"1991","id":"SOEHHZE144E604C29B","hasSleeve":false},{"title":"Ready or Not","artist":"Fugees","cover":"http://cdn-images.deezer.com/images/cover/04a5526b7b94c6e2d617ade762ddf5dc/400x400-000000-80-0-0.jpg","year":"1996","id":"SOCGQAJ136077E8945","hasSleeve":false}]'), document.getElementById("bottom-bar")),
            c = document.getElementById("button-prev"),
            l = document.getElementById("button-show"),
            d = document.getElementById("button-next"),
            f = document.getElementById("cratedigger-record-title"),
            u = document.getElementById("cratedigger-record-artist"),
            m = document.getElementById("cratedigger-record-cover");
        i.init({
            debug: !0,
            elements: {
                rootContainer: document.getElementById("cratedigger"),
                canvasContainer: document.getElementById("cratedigger-canvas"),
                loadingContainer: document.getElementById("cratedigger-loading"),
                infoContainer: document.getElementById("cratedigger-info")
            },
            onInfoPanelOpened: function() {
                s.classList.add("closed"),
                n(i.getSelectedRecord())
            },
            onInfoPanelClosed: function() {
                s.classList.remove("closed")
            }
        }),
        i.loadRecords(r, !0, function() {
            o()
        })
    }, {
        "./cratedigger": 7
    }],
    2: [function(e, t, a) {
        var o = function() {
            var e = Date.now(),
                t = e,
                a = 0,
                o = 1 / 0,
                n = 0,
                i = 0,
                r = 1 / 0,
                s = 0,
                c = 0,
                l = 0,
                d = document.createElement("div");
            d.id = "stats",
            d.addEventListener("mousedown", function(e) {
                e.preventDefault(),
                y(++l % 2)
            }, !1),
            d.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
            var f = document.createElement("div");
            f.id = "fps",
            f.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002",
            d.appendChild(f);
            var u = document.createElement("div");
            u.id = "fpsText",
            u.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",
            u.innerHTML = "FPS",
            f.appendChild(u);
            var m = document.createElement("div");
            for (m.id = "fpsGraph", m.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", f.appendChild(m); 74 > m.children.length;) {
                var h = document.createElement("span");
                h.style.cssText = "width:1px;height:30px;float:left;background-color:#113",
                m.appendChild(h)
            }
            var p = document.createElement("div");
            p.id = "ms",
            p.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none",
            d.appendChild(p);
            var v = document.createElement("div");
            v.id = "msText",
            v.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px",
            v.innerHTML = "MS",
            p.appendChild(v);
            var g = document.createElement("div");
            for (g.id = "msGraph", g.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", p.appendChild(g); 74 > g.children.length;)
                h = document.createElement("span"),
                h.style.cssText = "width:1px;height:30px;float:left;background-color:#131",
                g.appendChild(h);
            var y = function(e) {
                switch (l = e) {
                case 0:
                    f.style.display = "block",
                    p.style.display = "none";
                    break;
                case 1:
                    f.style.display = "none",
                    p.style.display = "block"
                }
            };
            return {
                REVISION: 12,
                domElement: d,
                setMode: y,
                begin: function() {
                    e = Date.now()
                },
                end: function() {
                    var l = Date.now();
                    a = l - e,
                    o = Math.min(o, a),
                    n = Math.max(n, a),
                    v.textContent = a + " MS (" + o + "-" + n + ")";
                    var d = Math.min(30, 30 - 30 * (a / 200));
                    return g.appendChild(g.firstChild).style.height = d + "px", c++, l > t + 1e3 && (i = Math.round(1e3 * c / (l - t)), r = Math.min(r, i), s = Math.max(s, i), u.textContent = i + " FPS (" + r + "-" + s + ")", d = Math.min(30, 30 - 30 * (i / 100)), m.appendChild(m.firstChild).style.height = d + "px", t = l, c = 0), l
                },
                update: function() {
                    e = this.end()
                }
            }
        };
        "object" == typeof t && (t.exports = o)
    }, {}],
    3: [function(e, t, a) {
        void 0 === Date.now && (Date.now = function() {
            return (new Date).valueOf()
        });
        var o = o || function() {
            var e = [];
            return {
                REVISION: "14",
                getAll: function() {
                    return e
                },
                removeAll: function() {
                    e = []
                },
                add: function(t) {
                    e.push(t)
                },
                remove: function(t) {
                    var a = e.indexOf(t);
                    -1 !== a && e.splice(a, 1)
                },
                update: function(t) {
                    if (0 === e.length)
                        return !1;
                    var a = 0;
                    for (t = void 0 !== t ? t : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); a < e.length;)
                        e[a].update(t) ? a++ : e.splice(a, 1);
                    return !0
                }
            }
        }();
        o.Tween = function(e) {
            var t = e,
                a = {},
                n = {},
                i = {},
                r = 1e3,
                s = 0,
                c = !1,
                l = !1,
                d = !1,
                f = 0,
                u = null,
                m = o.Easing.Linear.None,
                h = o.Interpolation.Linear,
                p = [],
                v = null,
                g = !1,
                y = null,
                b = null,
                S = null;
            for (var w in e)
                a[w] = parseFloat(e[w], 10);
            this.to = function(e, t) {
                return void 0 !== t && (r = t), n = e, this
            },
            this.start = function(e) {
                o.add(this),
                l = !0,
                g = !1,
                u = void 0 !== e ? e : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(),
                u += f;
                for (var r in n) {
                    if (n[r] instanceof Array) {
                        if (0 === n[r].length)
                            continue;
                        n[r] = [t[r]].concat(n[r])
                    }
                    a[r] = t[r],
                    a[r] instanceof Array == !1 && (a[r] *= 1),
                    i[r] = a[r] || 0
                }
                return this
            },
            this.stop = function() {
                return l ? (o.remove(this), l = !1, null !== S && S.call(t), this.stopChainedTweens(), this) : this
            },
            this.stopChainedTweens = function() {
                for (var e = 0, t = p.length; t > e; e++)
                    p[e].stop()
            },
            this.delay = function(e) {
                return f = e, this
            },
            this.repeat = function(e) {
                return s = e, this
            },
            this.yoyo = function(e) {
                return c = e, this
            },
            this.easing = function(e) {
                return m = e, this
            },
            this.interpolation = function(e) {
                return h = e, this
            },
            this.chain = function() {
                return p = arguments, this
            },
            this.onStart = function(e) {
                return v = e, this
            },
            this.onUpdate = function(e) {
                return y = e, this
            },
            this.onComplete = function(e) {
                return b = e, this
            },
            this.onStop = function(e) {
                return S = e, this
            },
            this.update = function(e) {
                var o;
                if (u > e)
                    return !0;
                g === !1 && (null !== v && v.call(t), g = !0);
                var l = (e - u) / r;
                l = l > 1 ? 1 : l;
                var S = m(l);
                for (o in n) {
                    var w = a[o] || 0,
                        x = n[o];
                    x instanceof Array ? t[o] = h(x, S) : ("string" == typeof x && (x = w + parseFloat(x, 10)), "number" == typeof x && (t[o] = w + (x - w) * S))
                }
                if (null !== y && y.call(t, S), 1 == l) {
                    if (s > 0) {
                        isFinite(s) && s--;
                        for (o in i) {
                            if ("string" == typeof n[o] && (i[o] = i[o] + parseFloat(n[o], 10)), c) {
                                var C = i[o];
                                i[o] = n[o],
                                n[o] = C
                            }
                            a[o] = i[o]
                        }
                        return c && (d = !d), u = e + f, !0
                    }
                    null !== b && b.call(t);
                    for (var E = 0, M = p.length; M > E; E++)
                        p[E].start(e);
                    return !1
                }
                return !0
            }
        },
        o.Easing = {
            Linear: {
                None: function(e) {
                    return e
                }
            },
            Quadratic: {
                In: function(e) {
                    return e * e
                },
                Out: function(e) {
                    return e * (2 - e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                }
            },
            Cubic: {
                In: function(e) {
                    return e * e * e
                },
                Out: function(e) {
                    return --e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                }
            },
            Quartic: {
                In: function(e) {
                    return e * e * e * e
                },
                Out: function(e) {
                    return 1 - --e * e * e * e
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                }
            },
            Quintic: {
                In: function(e) {
                    return e * e * e * e * e
                },
                Out: function(e) {
                    return --e * e * e * e * e + 1
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                }
            },
            Sinusoidal: {
                In: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Out: function(e) {
                    return Math.sin(e * Math.PI / 2)
                },
                InOut: function(e) {
                    return .5 * (1 - Math.cos(Math.PI * e))
                }
            },
            Exponential: {
                In: function(e) {
                    return 0 === e ? 0 : Math.pow(1024, e - 1)
                },
                Out: function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                },
                InOut: function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
                }
            },
            Circular: {
                In: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Out: function(e) {
                    return Math.sqrt(1 - --e * e)
                },
                InOut: function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                }
            },
            Elastic: {
                In: function(e) {
                    var t,
                        a = .1,
                        o = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!a || 1 > a ? (a = 1, t = o / 4) : t = o * Math.asin(1 / a) / (2 * Math.PI), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / o)))
                },
                Out: function(e) {
                    var t,
                        a = .1,
                        o = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!a || 1 > a ? (a = 1, t = o / 4) : t = o * Math.asin(1 / a) / (2 * Math.PI), a * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / o) + 1)
                },
                InOut: function(e) {
                    var t,
                        a = .1,
                        o = .4;
                    return 0 === e ? 0 : 1 === e ? 1 : (!a || 1 > a ? (a = 1, t = o / 4) : t = o * Math.asin(1 / a) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / o) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / o) * .5 + 1)
                }
            },
            Back: {
                In: function(e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t)
                },
                Out: function(e) {
                    var t = 1.70158;
                    return --e * e * ((t + 1) * e + t) + 1
                },
                InOut: function(e) {
                    var t = 2.5949095;
                    return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
                }
            },
            Bounce: {
                In: function(e) {
                    return 1 - o.Easing.Bounce.Out(1 - e)
                },
                Out: function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                },
                InOut: function(e) {
                    return .5 > e ? .5 * o.Easing.Bounce.In(2 * e) : .5 * o.Easing.Bounce.Out(2 * e - 1) + .5
                }
            }
        },
        o.Interpolation = {
            Linear: function(e, t) {
                var a = e.length - 1,
                    n = a * t,
                    i = Math.floor(n),
                    r = o.Interpolation.Utils.Linear;
                return 0 > t ? r(e[0], e[1], n) : t > 1 ? r(e[a], e[a - 1], a - n) : r(e[i], e[i + 1 > a ? a : i + 1], n - i)
            },
            Bezier: function(e, t) {
                var a,
                    n = 0,
                    i = e.length - 1,
                    r = Math.pow,
                    s = o.Interpolation.Utils.Bernstein;
                for (a = 0; i >= a; a++)
                    n += r(1 - t, i - a) * r(t, a) * e[a] * s(i, a);
                return n
            },
            CatmullRom: function(e, t) {
                var a = e.length - 1,
                    n = a * t,
                    i = Math.floor(n),
                    r = o.Interpolation.Utils.CatmullRom;
                return e[0] === e[a] ? (0 > t && (i = Math.floor(n = a * (1 + t))), r(e[(i - 1 + a) % a], e[i], e[(i + 1) % a], e[(i + 2) % a], n - i)) : 0 > t ? e[0] - (r(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[a] - (r(e[a], e[a], e[a - 1], e[a - 1], n - a) - e[a]) : r(e[i ? i - 1 : 0], e[i], e[i + 1 > a ? a : i + 1], e[i + 2 > a ? a : i + 2], n - i)
            },
            Utils: {
                Linear: function(e, t, a) {
                    return (t - e) * a + e
                },
                Bernstein: function(e, t) {
                    var a = o.Interpolation.Utils.Factorial;
                    return a(e) / a(t) / a(e - t)
                },
                Factorial: function() {
                    var e = [1];
                    return function(t) {
                        var a,
                            o = 1;
                        if (e[t])
                            return e[t];
                        for (a = t; a > 1; a--)
                            o *= a;
                        return e[t] = o
                    }
                }(),
                CatmullRom: function(e, t, a, o, n) {
                    var i = .5 * (a - e),
                        r = .5 * (o - t),
                        s = n * n,
                        c = n * s;
                    return (2 * t - 2 * a + i + r) * c + (-3 * t + 3 * a - 2 * i - r) * s + i * n + t
                }
            }
        },
        t.exports = o
    }, {}],
    4: [function(e, t, a) {
        (function(a) {
            function o(e) {
                d = new h.PerspectiveCamera(45, e, .1, 2e4),
                d.focalLength = 24,
                d.frameSize = 32,
                d.setLens(d.focalLength, d.frameSize),
                f = new h.Object3D,
                d.lookAt(f.position),
                u = new p.Tween,
                m = new p.Tween
            }
            function n(e, t) {
                u.stop(),
                m.stop(),
                m = new p.Tween(f.position).to({
                    x: e,
                    y: 50 + v.scene.recordShownY,
                    z: t.z
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start(),
                u = new p.Tween(d.position).to({
                    x: e + v.scene.cameraFocusPosition.x,
                    y: v.scene.cameraFocusPosition.y,
                    z: t.z + v.scene.cameraFocusPosition.z
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start()
            }
            function i(e, t) {
                u.stop(),
                m.stop(),
                m = new p.Tween(f.position).to({
                    x: e,
                    y: v.scene.recordFlippedY + 50,
                    z: t.z
                }, v.scene.infoOpenTime).easing(p.Easing.Quartic.Out).start(),
                u = new p.Tween(d.position).to({
                    x: e + v.scene.cameraFocusPosition.x + 80,
                    y: v.scene.cameraFocusPosition.y - 50
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start()
            }
            function r(e, t) {
                u.stop(),
                m.stop(),
                m = new p.Tween(f.position).delay(v.scene.infoOpenTime / 2).to({
                    x: e,
                    y: 75,
                    z: t.z
                }, v.scene.infoOpenTime).easing(p.Easing.Quartic.Out).start(),
                u = new p.Tween(d.position).to({
                    x: e + v.scene.cameraFocusPosition.x,
                    y: v.scene.cameraFocusPosition.y
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start()
            }
            function s() {
                u.stop(),
                m.stop(),
                m = new p.Tween(f.position).to({
                    x: v.scene.targetBasePosition.x,
                    y: v.scene.targetBasePosition.y,
                    z: v.scene.targetBasePosition.z
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start(),
                u = new p.Tween(d.position).to({
                    x: v.scene.cameraBasePosition.x,
                    y: v.scene.cameraBasePosition.y,
                    z: v.scene.cameraBasePosition.z
                }, v.scene.cameraMoveTime).easing(p.Easing.Quartic.Out).start()
            }
            function c(e) {
                d.aspect = e,
                d.updateProjectionMatrix()
            }
            function l() {
                d.lookAt(f.position)
            }
            var d,
                f,
                u,
                m,
                h = "undefined" != typeof window ? window.THREE : "undefined" != typeof a ? a.THREE : null,
                p = e("tween.js"),
                v = e("./Constants");
            t.exports = {
                init: o,
                focusRecord: n,
                zoomInRecord: i,
                zoomOutRecord: r,
                resetCamera: s,
                updateCameraAspect: c,
                lookAtTarget: l,
                getCamera: function() {
                    return d
                },
                getTarget: function() {
                    return f
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./Constants": 5,
        "tween.js": 3
    }],
    5: [function(e, t, a) {
        t.exports = {
            debug: !1,
            canvasWidth: null,
            canvasHeight: null,
            nbCrates: 3,
            recordsPerCrate: 16,
            lightIntensity: 1,
            cameraMouseMove: !0,
            backgroundImage: "style/asset/background.jpg",
            backgroundColor: 1118481,
            sleeveColor: 853762,
            sleeveMaskTexture: "img/sleeve.png",
            crateTexture: "style/asset/red.jpeg",
            closeInfoPanelOnClick: !0,
            closeInfoPanelOnScroll: !0,
            postprocessing: !1,
            blurAmount: .4,
            updateCanvasSizeOnWindowResize: !0,
            onInfoPanelOpened: function() {},
            onInfoPanelClosed: function() {},
            onLoadingEnd: function() {},
            elements: {
                rootContainer: null,
                canvasContainer: null,
                loadingContainer: null,
                infoContainer: null,
                titleContainer: null,
                artistContainer: null,
                coverContainer: null
            },
            scene: {
                recordMoveTime: 1e3,
                cameraMoveTime: 2000,
                infoOpenTime: 500,
                recordBaseY: 5,
                recordShownY: 25,
                recordFlippedY: 110,
                targetBasePosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                cameraBasePosition: {
                    x: 400,
                    y: 200,
                    z: 10
                },
                cameraFocusPosition: {
                    x: 200,
                    y: 195,
                    z: 20
                },
                cameraMouseMoveSpeedY: .07,
                cameraMouseMoveSpeedZ: .04,
                grabSensitivity: 6
            },
            extend: function(e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (this[t] = e[t]);
                return this
            }
        }
    }, {}],
    6: [function(e, t, a) {
        (function(a) {
            var o = "undefined" != typeof window ? window.THREE : "undefined" != typeof a ? a.THREE : null,
                n = e("tween.js"),
                i = e("./Constants"),
                r = e("./CameraManager"),
                s = function(e, t, a) {
                    this.id = e,
                    this.crateId = t,
                    this.pos = a,
                    this.state = "out",
                    this.recordXPos = -62 + 135 / i.recordsPerCrate * a,
                    this.mesh = new o.Mesh(new o.BoxGeometry(100, 1.5, 100, 1, 1, 1), new o.MeshFaceMaterial(new o.MeshLambertMaterial({
                        color: i.sleeveColor
                    }))),
                    this.mesh.geometry.applyMatrix((new o.Matrix4).makeTranslation(50, 0, 0)),
                    this.mesh.position.set(this.recordXPos, i.scene.recordBaseY, 0),
                    this.mesh.rotation.z = Math.PI / 2,
                    this.mesh.recordId = e,
                    this.absolutePosition = new o.Vector3,
                    this.positionTween = new n.Tween,
                    this.rotationTween = new n.Tween,
                    this.setUnactive(),
                    this.pushRecord()
                };
            s.prototype.log = function() {
                console.log("Record n°", this.id, "crateId =", this.crateId, "pos =", this.pos)
            },
            s.prototype.setActive = function() {
                this.active = !0,
                this.mesh.visible = !0
            },
            s.prototype.setUnactive = function() {
                this.active = !1,
                this.mesh.visible = !1
            },
            s.prototype.showRecord = function() {
                this.positionTween.stop(),
                this.rotationTween.stop(),
                "shown" !== this.state && (this.state = "shown", this.absolutePosition.setFromMatrixPosition(this.mesh.matrixWorld), this.positionTween = new n.Tween(this.mesh.position).to({
                    y: i.scene.recordShownY
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start(), this.rotationTween = new n.Tween(this.mesh.rotation).to({
                    z: Math.PI / 2
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start(), r.focusRecord(this.recordXPos, this.absolutePosition))
            },
            s.prototype.pushRecord = function() {
                "pushed" != this.state && (this.state = "pushed", this.positionTween.stop(), this.rotationTween.stop(), this.positionTween = new n.Tween(this.mesh.position).to({
                    y: i.scene.recordBaseY
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start(), this.rotationTween = new n.Tween(this.mesh.rotation).to({
                    z: Math.PI / 2 + Math.PI / 7
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start())
            },
            s.prototype.pullRecord = function() {
                "pulled" !== this.state && (this.state = "pulled", this.positionTween.stop(), this.rotationTween.stop(), this.positionTween = new n.Tween(this.mesh.position).to({
                    y: i.scene.recordBaseY
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start(), this.rotationTween = new n.Tween(this.mesh.rotation).to({
                    z: Math.PI / 2 - Math.PI / 7
                }, i.scene.recordMoveTime).easing(n.Easing.Quartic.Out).start())
            },
            s.prototype.flipRecord = function(e) {
                this.state = "flipped",
                this.positionTween.stop(),
                this.rotationTween.stop(),
                this.positionTween = new n.Tween(this.mesh.position).to({
                    y: i.scene.recordFlippedY
                }, i.scene.infoOpenTime).easing(n.Easing.Quartic.Out).start(),
                this.rotationTween = new n.Tween(this.mesh.rotation).delay(i.scene.infoOpenTime / 4).to({
                    x: 0,
                    y: Math.PI,
                    z: Math.PI / 2
                }, i.scene.infoOpenTime).easing(n.Easing.Quartic.Out).start().onComplete(e),
                r.zoomInRecord(this.recordXPos, this.absolutePosition)
            },
            s.prototype.flipBackRecord = function(e, t) {
                "flipped" === this.state && (this.positionTween.stop(), this.rotationTween.stop(), this.positionTween = new n.Tween(this.mesh.position).delay(i.scene.infoOpenTime / 2).to({
                    y: i.scene.recordBaseY
                }, i.scene.infoOpenTime).easing(n.Easing.Quartic.Out).start(), this.rotationTween = new n.Tween(this.mesh.rotation).to({
                    y: 0
                }, i.scene.infoOpenTime / 2).easing(n.Easing.Quartic.Out).start().onComplete(e), t || r.zoomOutRecord(this.recordXPos, this.absolutePosition))
            },
            t.exports = s
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./CameraManager": 4,
        "./Constants": 5,
        "tween.js": 3
    }],
    7: [function(e, t, a) {
        (function(a) {
            "use strict";
            function o() {
                Fe && (requestAnimationFrame(o), n(), Ae.debug && $.update())
            }
            function n() {
                xe.update(),
                f(),
                Ae.cameraMouseMove && (Re.x = .05 * (Ie.x / ve - .5), Re.y = .05 * (Ie.y / ve - .5), he.rotation.y += Ae.scene.cameraMouseMoveSpeedY * (Re.x - he.rotation.y), he.rotation.z += Ae.scene.cameraMouseMoveSpeedZ * (Re.y - he.rotation.z)),
                Oe.lookAtTarget(),
                Ae.postprocessing ? (ee.overrideMaterial = me, ae.render(ee, te, de), ee.overrideMaterial = null, re.render()) : ae.render(ee, te)
            }
            function i() {
                var e;
                for (e = 0; e < Be.length; e++)
                    Be[e].data = null,
                    Be[e].setUnactive();
                He = 0,
                Pe = []
            }
            function r(e, t, a) {
                var o;
                u(!0),
                B(function() {
                    for (He > 0 && i(), t && (e = q(e)), o = 0; o < Be.length && o < e.length; o++)
                        Be[o].data = e[o],
                        Be[o].setActive(),
                        Be[o].mesh.material.materials = U(e[o].cover, e[o].hasSleeve);
                    He = Be.length,
                    Pe = e,
                    setTimeout(function() {
                        P(a),
                        Ae.onLoadingEnd()
                    }, 3e3)
                })
            }
            function s() {
                var e = Pe;
                e = q(e),
                r(e)
            }
            function c(e) {
                "opened" === je ? d() : "opening" !== je && "closing" !== je && (0 > e ? u() : ke = e > He ? He - 1 : e)
            }
            function l() {
                Be[ke] && (je = "opening", Be[ke].flipRecord(function() {
                    je = "opened"
                }), Ae.onInfoPanelOpened(), setTimeout(function() {
                    X(Ae.elements.infoContainer)
                }, 300))
            }
            function d(e) {
                "opened" === je && (_(Ae.elements.infoContainer), je = "closing", Be[ke].flipBackRecord(function() {
                    je = "closed",
                    Ae.onInfoPanelClosed()
                }, e))
            }
            function f() {
                var e;
                if ("closed" === je && Ne !== ke)
                    for (Ne = ke, e = 0; He > e; e++)
                        -1 === ke ? Be[e].pushRecord() : e > ke && e > Be[ke].crateId * Ae.recordsPerCrate && e < Be[ke].crateId * Ae.recordsPerCrate + Ae.recordsPerCrate ? Be[e].pullRecord() : e === ke ? Be[e].showRecord() : Be[e].pushRecord()
            }
            function u(e) {
                "opened" !== je || e ? "opening" !== je && "closing" !== je && ("opened" === je && d(!0), ke = -1, Oe.resetCamera()) : d()
            }
            function m() {
                c(p(ke))
            }
            function h() {
                c(v(ke))
            }
            function p(e) {
                var t;
                return t = -1 === e ? He - 1 : He - 1 > e ? e + 1 : 0, Be[t].active ? t : p(t)
            }
            function v(e) {
                var t;
                return t = -1 === e ? He - 1 : e > 0 ? e - 1 : He - 1, Be[t].active ? t : v(t)
            }
            function g(e) {
                "closed" === je ? "prev" === e ? m() : h() : "opened" === je && Ae.closeInfoPanelOnScroll && d()
            }
            function y(e, t, a) {
                var o,
                    n;
                n = !a || Math.abs(a) > .5 ? .5 : Math.abs(a),
                o = e ? 200 * Math.pow(1 - n, 3) : 300 * Math.pow(1 - n, 3),
                be = setTimeout(function() {
                    var a = (t - Ie.y) / ge;
                    ae.domElement.classList.add("grab"),
                    a > 0 ? h() : 0 > a && m(),
                    y(e, t, a)
                }, o)
            }
            function b() {
                Ae.elements.rootContainer.addEventListener("DOMMouseScroll", x, !1),
                Ae.elements.rootContainer.addEventListener("mousewheel", x, !1),
                Ae.elements.rootContainer.addEventListener("mousemove", S, !1),
                Ae.elements.rootContainer.addEventListener("touchmove", w, !1),
                Ae.elements.rootContainer.addEventListener("mousedown", E, !1),
                Ae.elements.rootContainer.addEventListener("touchstart", M, !1),
                Ae.elements.rootContainer.addEventListener("mouseup", T, !1),
                Ae.elements.rootContainer.addEventListener("touchend", O, !1),
                Ae.elements.rootContainer.addEventListener("contextmenu", A, !1),
                window.addEventListener("keydown", D, !1),
                Ae.updateCanvasSizeOnWindowResize && window.addEventListener("resize", z, !1)
            }
            function S(e) {
                var t,
                    a = 0,
                    o = 0,
                    n = 0,
                    i = 0,
                    r = this;
                if (t = e || window.event, t.pageX || t.pageY ? (a = t.pageX, o = t.pageY) : (t.clientX || t.clientY) && (a = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), r.offsetParent)
                    do n += r.offsetLeft,
                    i += r.offsetTop;
                    while (r = r.offsetParent);
                Ie.x = a - n,
                Ie.y = o - i
            }
            function w(e) {
                var t,
                    a = 0,
                    o = 0,
                    n = 0,
                    i = 0,
                    r = this;
                if (t = e || window.event, t.changedTouches && t.changedTouches[0] && (t.changedTouches[0].pageX || t.changedTouches[0].pageY ? (a = t.changedTouches[0].pageX, o = t.changedTouches[0].pageY) : (t.changedTouches[0].clientX || t.changedTouches[0].clientY) && (a = t.changedTouches[0].clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = t.changedTouches[0].clientY + document.body.scrollTop + document.documentElement.scrollTop)), r && r.offsetParent)
                    do n += r.offsetLeft,
                    i += r.offsetTop;
                    while (r = r.offsetParent);
                Ie.x = a - n,
                Ie.y = o - i
            }
            function x(e) {
                return g(Y(e) < 0 ? "prev" : "next"), !1
            }
            function C(e) {
                var t,
                    a,
                    o,
                    n,
                    i,
                    r;
                if ("closed" === je)
                    if (t = {
                        x: (e.x - ae.domElement.offsetLeft) / ae.domElement.width * 2 - 1,
                        y: 2 * -((e.y - ae.domElement.offsetTop) / ae.domElement.height) + 1,
                        z: .5
                    }, a = new we.Vector3(t.x, t.y, t.z), a.unproject(te), o = new we.Raycaster(te.position, a.sub(te.position).normalize()), n = o.intersectObjects(pe.children, !0), n.length > 0) {
                        for (i = 0; i < n.length && "undefined" != typeof n[i].object.recordId; i++)
                            if (n[i].object.visible && n[i].object.recordId >= 0) {
                                r = Be[n[i].object.recordId];
                                break
                            }
                        r ? ke === r.id ? l() : c(r.id) : u()
                    } else
                        u();
                else
                    Ae.closeInfoPanelOnClick && d()
            }
            function E(e) {
                1 !== e.button && 2 !== e.button && (clearInterval(be), "closed" === je && y(!1, Ie.y), Le = {
                    x: Ie.x,
                    y: Ie.y
                })
            }
            function M(e) {
                Le = {
                    x: Ie.x,
                    y: Ie.y
                },
                w(e),
                clearInterval(be),
                "closed" === je && y(!0, Ie.y)
            }
            function T(e) {
                1 !== e.button && 2 !== e.button && (clearInterval(be), ae.domElement.classList.remove("grab"), !W(Le, Ie, Ae.scene.grabSensitivity) || e.target && e.target.hasAttribute("href") || C(Le))
            }
            function O(e) {
                clearInterval(be),
                ae.domElement.classList.remove("grab"),
                !W(Le, Ie, Ae.scene.grabSensitivity) || e.target && e.target.hasAttribute("href") || C(Le)
            }
            function A(e) {
                return e.preventDefault(), "opened" === je ? d() : u(), !1
            }
            function D(e) {
                37 === e.keyCode || 38 === e.keyCode ? g("next") : 39 === e.keyCode || 40 === e.keyCode ? g("prev") : "closed" === je && 13 === e.keyCode || 32 === e.keyCode ? l() : 27 === e.keyCode && ("opened" === je ? d() : u())
            }
            function z() {
                J(),
                Z(),
                ae.setSize(ve, ge),
                Oe.updateCameraAspect(ve / ge),
                ce.uniforms.tDepth.value = de,
                ce.uniforms.size.value.set(ve, ge),
                ce.uniforms.textel.value.set(1 / ve, 1 / ge),
                se.uniforms.resolution.value.set(1 / ve, 1 / ge)
            }
            function B(e) {
                X(Ae.elements.loadingContainer),
                setTimeout(e, 1e3)
            }
            function P(e) {
                _(Ae.elements.loadingContainer),
                setTimeout(e, 1e3)
            }
            function j() {
                var e;
                ee = new we.Scene(); // Create the scene
                ae = new we.WebGLRenderer({
                    antialias: true,
                    alpha: true // Enable alpha for a transparent background
                });
                ae.setSize(ve, ge);
                Ae.elements.canvasContainer.appendChild(ae.domElement);
                ae.domElement.id = "context";

                // Set clear color to transparent
                ae.setClearColor(0x000000, 0); // Black with 0 alpha for clear background

                // Initialize the camera and other elements
                Oe.init(ve / ge);
                te = Oe.getCamera();

                // Load the crate texture
                e = we.ImageUtils.loadTexture(Ae.crateTexture);
                e.anisotropy = ae.getMaxAnisotropy();
                Se = new we.MeshLambertMaterial({
                    map: e
                });

                he = new we.Object3D();
                pe = new we.Object3D();
                ee.add(he);
                he.add(pe);

                // Call other necessary functions
                k();
                H();

                // Set up point lights
                oe = new we.PointLight(16777215, 1.1 * Ae.lightIntensity);
                oe.position.set(300, 80, 0);
                ee.add(oe);

                ne = new we.PointLight(16777215, 0.6 * Ae.lightIntensity);
                ne.position.set(-100, 300, 1000);
                ee.add(ne);

                ie = new we.PointLight(16777215, 0.6 * Ae.lightIntensity);
                ie.position.set(-100, 300, -1000);
                ee.add(ie);

                F();
                b();

                // Set element positions
                Ae.elements.rootContainer.style.position = "relative";
                Ae.elements.canvasContainer.style.position = "absolute";
                Ae.elements.infoContainer.style.position = "absolute";
                Ae.elements.loadingContainer.style.position = "absolute";

                Z();
                K(Ae.elements.infoContainer);

                // Debug mode
                if (Ae.debug) {
                    I();
                    L();
                }

                u();
                o();

            }




            function F() {
                fe = we.ShaderLib.depthRGBA,
                ue = we.UniformsUtils.clone(fe.uniforms),
                me = new we.ShaderMaterial({
                    fragmentShader: fe.fragmentShader,
                    vertexShader: fe.vertexShader,
                    uniforms: ue
                }),
                me.blending = we.NoBlending,
                de = new we.WebGLRenderTarget(ve, ge, {
                    minFilter: we.NearestFilter,
                    magFilter: we.NearestFilter,
                    format: we.RGBAFormat
                }),
                re = new we.EffectComposer(ae),
                re.addPass(new we.RenderPass(ee, te)),
                ce = new we.ShaderPass(we.DoFShader),
                ce.uniforms.tDepth.value = de,
                ce.uniforms.size.value.set(ve, ge),
                ce.uniforms.textel.value.set(1 / ve, 1 / ge),
                ce.uniforms.znear.value = te.near,
                ce.uniforms.zfar.value = te.far,
                ce.uniforms.focalDepth.value = 5,
                ce.uniforms.focalLength.value = te.focalLength,
                ce.uniforms.fstop.value = 8,
                ce.uniforms.showFocus.value = !1,
                ce.uniforms.manualdof.value = !0,
                ce.uniforms.ndofstart.value = 11,
                ce.uniforms.ndofdist.value = 80,
                ce.uniforms.fdofstart.value = 0,
                ce.uniforms.fdofdist.value = 100,
                ce.uniforms.CoC.value = .03,
                ce.uniforms.vignetting.value = !1,
                ce.uniforms.autofocus.value = !0,
                ce.uniforms.focus.value.set(.35, .35),
                ce.uniforms.maxblur.value = Ae.blurAmount,
                ce.uniforms.threshold.value = 0,
                ce.uniforms.gain.value = 0,
                ce.uniforms.bias.value = 0,
                ce.uniforms.fringe.value = 0,
                se = new we.ShaderPass(we.FXAAShader),
                se.uniforms.resolution.value.set(1 / ve, 1 / ge),
                se.renderToScreen = !0,
                re.addPass(ce),
                re.addPass(se)
            }
            function I() {
                var e;
                $ = new Ce,
                $.domElement.style.position = "absolute",
                $.domElement.style.left = "0",
                $.domElement.style.top = "0",
                Ae.elements.rootContainer.appendChild($.domElement),
                e = new we.Mesh(new we.BoxGeometry(0, 0, 0, 1, 1, 1)),
                e.position.set(oe.position.x, oe.position.y, oe.position.z),
                ee.add(e)
            }
            function L() {
                var e,
                    t,
                    a;
                le = new Me.GUI,
                e = le.addFolder("Camera"),
                t = e.add(te, "focalLength", 5, 50).name("Focal Length"),
                t.onChange(R),
                Ae.postprocessing && (a = le.addFolder("Depth of Field"), a.add(ce.uniforms.focalDepth, "value", 0, 10).name("Focal Depth"), a.add(ce.uniforms.fstop, "value", 0, 22).name("F Stop"), a.add(ce.uniforms.maxblur, "value", 0, 3).name("max blur"), a.add(ce.uniforms.showFocus, "value").name("Show Focal Range"), a.add(ce.uniforms.manualdof, "value").name("Manual DoF"), a.add(ce.uniforms.ndofstart, "value", 0, 200).name("near start"), a.add(ce.uniforms.ndofdist, "value", 0, 200).name("near falloff"), a.add(ce.uniforms.fdofstart, "value", 0, 200).name("far start"), a.add(ce.uniforms.fdofdist, "value", 0, 200).name("far falloff"), a.add(ce.uniforms.CoC, "value", 0, .1).step(.001).name("circle of confusion"), a.add(ce.uniforms.vignetting, "value").name("Vignetting"), a.add(ce.uniforms.vignout, "value", 0, 2).name("outer border"), a.add(ce.uniforms.vignin, "value", 0, 1).step(.01).name("inner border"), a.add(ce.uniforms.vignfade, "value", 0, 22).name("fade at"), a.add(ce.uniforms.autofocus, "value").name("Autofocus"), a.add(ce.uniforms.focus.value, "x", 0, 1).name("focus x"), a.add(ce.uniforms.focus.value, "y", 0, 1).name("focus y"), a.add(ce.uniforms.threshold, "value", 0, 1).step(.01).name("threshold"), a.add(ce.uniforms.gain, "value", 0, 100).name("gain"), a.add(ce.uniforms.bias, "value", 0, 4).step(.01).name("bias"), a.add(ce.uniforms.fringe, "value", 0, 5).step(.01).name("fringe"), a.add(ce.uniforms.noise, "value").name("Use Noise"), a.add(ce.uniforms.namount, "value", 0, .001).step(1e-4).name("dither"), a.add(ce.uniforms.depthblur, "value").name("Blur Depth"), a.add(ce.uniforms.dbsize, "value", 0, 5).name("blur size")),
                le.close()
            }
            function R() {
                te.setLens(te.focalLength, te.frameSize),
                te.updateProjectionMatrix(),
                ce.uniforms.focalLength.value = te.focalLength
            }
            function k() {
                var e,
                    t;
                for (e = 0; e < Ae.nbCrates; e++)
                    t = N(e),
                    pe.add(t);
                pe.position.z = -(80 - 110 * Ae.nbCrates) / 2
            }
            function N(e) {
                var t, a, o, n, i;
                var thickness = 4;
                ze[e] = new we.Object3D;

                // BOTTOM
                t = new we.Mesh(new we.BoxGeometry(200, thickness, 100), Se);
                ze[e].add(t);

                // RIGHT
                a = new we.Mesh(new we.BoxGeometry(200, thickness, 80), Se);
                a.position.set(0, 35, -55);
                a.rotation.x = Math.PI / 2;
                ze[e].add(a);

                // LEFT
                o = new we.Mesh(new we.BoxGeometry(200, thickness, 80), Se);
                o.position.set(0, 35 - thickness, 55);
                o.rotation.x = Math.PI / 2;
                ze[e].add(o);

                // BACK
                n = new we.Mesh(new we.BoxGeometry(80, thickness, 120), Se);
                n.position.set(-105, 35, 0);
                n.rotation.z = Math.PI / 2;
                ze[e].add(n);

                // FRONT
                i = new we.Mesh(new we.BoxGeometry(50, thickness, 108), Se);
                i.position.set(95, 25 - thickness, 0);
                i.rotation.z = Math.PI / 2;
                ze[e].add(i);

                ze[e].position.z = -140 * e;

                return ze[e];
            }

            function H() {
                var e,
                    t,
                    a = 0;
                for (e = 0; e < ze.length; e++)
                    for (t = 0; t < Ae.recordsPerCrate; t++)
                        G(a, e, t),
                        a++
            }
            function G(e, t, a) {
                var o = new Te(e, t, a);
                ze[t].add(o.mesh),
                Be.push(o)
            }
            function U(e, t) {
                var a,
                    o,
                    n,
                    i = new Image,
                    r = 400,
                    s = 400,
                    c = document.createElement("canvas"),
                    l = new we.Texture(c);
                return i.crossOrigin = "Anonymous", i.src = e ? e : "", c.width = c.height = 400, l.minFilter = we.LinearFilter, i.onload = function() {
                    var e;
                    t ? (a = new Image, a.src = Ae.sleeveMaskTexture, a.onload = function() {
                        e = c.getContext("2d"),
                        e.translate(r / 2, s / 2),
                        e.rotate(Math.PI / 2),
                        e.translate(-r / 2, -s / 2),
                        e.drawImage(i, 130, 130, 135, 135),
                        e.drawImage(a, 0, 0, 400, 400),
                        l.needsUpdate = !0
                    }) : (e = c.getContext("2d"), e.translate(r / 2, s / 2), e.rotate(Math.PI / 2), e.translate(-r / 2, -s / 2), e.drawImage(i, 0, 0, 400, 400), l.needsUpdate = !0)
                }, o = new we.MeshLambertMaterial({
                    color: Ae.sleeveColor
                }), n = [o, o, o, new we.MeshLambertMaterial({
                    color: 16777215,
                    map: l
                }), o, o]
            }
            function Y(e) {
                var t;
                return t = e || window.event, t.detail < 0 ? 1 : t.wheelDelta > 0 ? 1 : -1
            }
            function W(e, t, a) {
                return Math.abs(e.x - t.x) <= a && Math.abs(e.y - t.y) <= a
            }
            function _(e) {
                var t;
                0 === e.style.opacity ? e.style.display = "none" : (t = V(e), t && (e.addEventListener(t, Q), e.style.opacity = 0))
            }
            function X(e) {
                var t;
                "" === e.style.opacity || "1" === e.style.opacity ? e.style.display = "block" : (t = V(e), e.style.display = "block", t && e.addEventListener(t, Q), setTimeout(function() {
                    e.style.opacity = 1
                }, 15))
            }
            function Q(e) {
                e.currentTarget.removeEventListener(e.type, Q),
                e.currentTarget.style.display = "0" === e.currentTarget.style.opacity ? "none" : "block"
            }
            function K(e) {
                e.style.opacity = 0,
                e.style.display = "none"
            }
            function V() {
                var e,
                    t = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in t)
                    if (void 0 !== document.body.style[e])
                        return t[e]
            }
            function J() {
                ve = Ae.canvasWidth ? Ae.canvasWidth : Ae.elements.rootContainer.clientWidth,
                ge = Ae.canvasHeight ? Ae.canvasHeight : Ae.elements.rootContainer.clientHeight
            }
            function Z() {
                Ae.elements.canvasContainer.style.height = ge + "px",
                Ae.elements.infoContainer.style.height = ge + "px",
                Ae.elements.loadingContainer.style.height = ge + "px",
                Ae.elements.canvasContainer.style.width = ve + "px",
                Ae.elements.infoContainer.style.width = ve + "px",
                Ae.elements.loadingContainer.style.width = ve + "px"
            }
            function q(e) {
                for (var t, a, o = e.length; o > 0;)
                    a = Math.floor(Math.random() * o),
                    o--,
                    t = e[o],
                    e[o] = e[a],
                    e[a] = t;
                return e
            }
            var $,
                ee,
                te,
                ae,
                oe,
                ne,
                ie,
                re,
                se,
                ce,
                le,
                de,
                fe,
                ue,
                me,
                he,
                pe,
                ve,
                ge,
                ye,
                be,
                Se,
                we = "undefined" != typeof window ? window.THREE : "undefined" != typeof a ? a.THREE : null,
                xe = e("tween.js"),
                Ce = e("stats-js"),
                Ee = "undefined" != typeof window ? window.Modernizr : "undefined" != typeof a ? a.Modernizr : null,
                Me = "undefined" != typeof window ? window.dat : "undefined" != typeof a ? a.dat : null,
                Te = e("./Record"),
                Oe = e("./CameraManager"),
                Ae = e("./Constants"),
                De = {},
                ze = [],
                Be = [],
                Pe = [],
                je = "closed",
                Fe = !0,
                Ie = {
                    x: 0,
                    y: 0
                },
                Le = {
                    x: 0,
                    y: 0
                },
                Re = {
                    x: 0,
                    y: 0
                },
                ke = -1,
                Ne = -1,
                He = 0;
            e("./threejs_modules/ShaderPass")(we),
            e("./threejs_modules/CopyShader")(we),
            e("./threejs_modules/RenderPass")(we),
            e("./threejs_modules/DoFShader")(we),
            e("./threejs_modules/FXAAShader")(we),
            e("./threejs_modules/MaskPass")(we),
            e("./threejs_modules/EffectComposer")(we),
            De.init = function(e) {
                if (Ae.extend(e), Ee.webgl) {
                    if (ye = void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1, !Ae.elements.rootContainer)
                        return void console.error("cratedigger.js - Init failed : can not find root container element.");
                    if (!Ae.elements.canvasContainer)
                        return void console.error("cratedigger.js - Init failed : can not find canvas container element.");
                    if (!Ae.elements.loadingContainer)
                        return void console.error("cratedigger.js - Init failed : can not find loading container element.");
                    if (!Ae.elements.infoContainer)
                        return void console.error("cratedigger.js - Init failed : can not find info container element.");
                    J(),
                    j()
                }
            },
            De.startRender = function() {
                Fe = !0,
                o()
            },
            De.stopRender = function() {
                Fe = !1
            },
            De.enablePostprocessing = function() {
                Ae.postprocessing = !0
            },
            De.disablePostprocessing = function() {
                Ae.postprocessing = !1
            },
            De.getCanvas = function() {
                return ae.domElement
            },
            De.getRecordsDataList = function() {
                return Pe
            },
            De.getLoadedRecords = function() {
                return He
            },
            De.getSelectedRecord = function() {
                return Be[ke]
            },
            De.loadRecords = r,
            De.unloadRecords = i,
            De.resetShownRecord = u,
            De.shuffleRecords = s,
            De.flipSelectedRecord = l,
            De.flipBackSelectedRecord = d,
            De.selectRecord = c,
            De.selectPrevRecord = m,
            De.selectNextRecord = h,
            De.showLoading = B,
            De.hideLoading = P,
            t.exports = De
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./CameraManager": 4,
        "./Constants": 5,
        "./Record": 6,
        "./threejs_modules/CopyShader": 8,
        "./threejs_modules/DoFShader": 9,
        "./threejs_modules/EffectComposer": 10,
        "./threejs_modules/FXAAShader": 11,
        "./threejs_modules/MaskPass": 12,
        "./threejs_modules/RenderPass": 13,
        "./threejs_modules/ShaderPass": 14,
        "stats-js": 2,
        "tween.js": 3
    }],
    8: [function(e, t, a) {
        t.exports = function(e) {
            e.CopyShader = {
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
            }
        }
    }, {}],
    9: [function(e, t, a) {
        t.exports = function(e) {
            e.DoFShader = {
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    tDepth: {
                        type: "t",
                        value: null
                    },
                    znear: {
                        type: "f",
                        value: 1
                    },
                    zfar: {
                        type: "f",
                        value: 1e3
                    },
                    size: {
                        type: "v2",
                        value: new e.Vector2(512, 512)
                    },
                    textel: {
                        type: "v2",
                        value: new e.Vector2(1 / 512, 1 / 512)
                    },
                    focalDepth: {
                        type: "f",
                        value: 200
                    },
                    focalLength: {
                        type: "f",
                        value: 28
                    },
                    fstop: {
                        type: "f",
                        value: 2.8
                    },
                    showFocus: {
                        type: "i",
                        value: 0
                    },
                    manualdof: {
                        type: "i",
                        value: 0
                    },
                    ndofstart: {
                        type: "f",
                        value: 1
                    },
                    ndofdist: {
                        type: "f",
                        value: 2
                    },
                    fdofstart: {
                        type: "f",
                        value: 1
                    },
                    fdofdist: {
                        type: "f",
                        value: 3
                    },
                    CoC: {
                        type: "f",
                        value: .03
                    },
                    vignetting: {
                        type: "i",
                        value: 1
                    },
                    vignout: {
                        type: "f",
                        value: 1.3
                    },
                    vignin: {
                        type: "f",
                        value: 0
                    },
                    vignfade: {
                        type: "f",
                        value: 22
                    },
                    autofocus: {
                        type: "i",
                        value: 1
                    },
                    focus: {
                        type: "v2",
                        value: new e.Vector2(.5, .5)
                    },
                    maxblur: {
                        type: "f",
                        value: 1
                    },
                    threshold: {
                        type: "f",
                        value: .8
                    },
                    gain: {
                        type: "f",
                        value: 1.7
                    },
                    bias: {
                        type: "f",
                        value: .5
                    },
                    fringe: {
                        type: "f",
                        value: .7
                    },
                    noise: {
                        type: "i",
                        value: 1
                    },
                    namount: {
                        type: "f",
                        value: 1e-4
                    },
                    depthblur: {
                        type: "i",
                        value: 0
                    },
                    dbsize: {
                        type: "f",
                        value: 1.25
                    }
                },
                vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                fragmentShader: ["precision mediump float;", "#define PI  3.14159265", "varying vec2 vUv;", "uniform sampler2D tDiffuse;", "uniform sampler2D tDepth;", "uniform vec2 size;", "uniform vec2 texel;", "uniform float focalDepth;", "uniform float focalLength;", "uniform float fstop;", "uniform bool showFocus;", "uniform float znear;", "uniform float zfar;", "uniform bool manualdof;", "uniform float ndofstart;", "uniform float ndofdist;", "uniform float fdofstart;", "uniform float fdofdist;", "uniform float CoC;", "uniform bool vignetting;", "uniform float vignout;", "uniform float vignin;", "uniform float vignfade;", "uniform bool autofocus;", "uniform vec2 focus;", "uniform float maxblur;", "uniform float threshold;", "uniform float gain;", "uniform float bias;", "uniform float fringe;", "uniform bool noise;", "uniform float namount;", "uniform bool depthblur;", "uniform float dbsize;", "int samples = 3;", "const int rings = 3;", "bool pentagon = false;", "float feather = 0.4;", "float unpackDepth( const in vec4 rgba_depth ) {", "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );", "float depth = dot( rgba_depth, bit_shift );", "return depth;", "}", "float penta(vec2 coords)", "{", "float scale = float(rings) - 1.3;", "vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);", "vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);", "vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);", "vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);", "vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);", "vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);", "vec4  one = vec4( 1.0 );", "vec4 P = vec4((coords),vec2(scale, scale));", "vec4 dist = vec4(0.0);", "float inorout = -4.0;", "dist.x = dot( P, HS0 );", "dist.y = dot( P, HS1 );", "dist.z = dot( P, HS2 );", "dist.w = dot( P, HS3 );", "dist = smoothstep( -feather, feather, dist );", "inorout += dot( dist, one );", "dist.x = dot( P, HS4 );", "dist.y = HS5.w - abs( P.z );", "dist = smoothstep( -feather, feather, dist );", "inorout += dist.x;", "return clamp( inorout, 0.0, 1.0 );", "}", "float bdepth(vec2 coords) //blurring depth", "{", "float d = 0.0;", "float kernel[9];", "vec2 offset[9];", "vec2 wh = vec2(texel.x, texel.y) * dbsize;", "offset[0] = vec2(-wh.x,-wh.y);", "offset[1] = vec2( 0.0, -wh.y);", "offset[2] = vec2( wh.x -wh.y);", "offset[3] = vec2(-wh.x,  0.0);", "offset[4] = vec2( 0.0,   0.0);", "offset[5] = vec2( wh.x,  0.0);", "offset[6] = vec2(-wh.x, wh.y);", "offset[7] = vec2( 0.0,  wh.y);", "offset[8] = vec2( wh.x, wh.y);", "kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;", "kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;", "kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;", "for( int i=0; i<9; i++ )", "{", "float tmp = unpackDepth(texture2D(tDepth, coords + offset[i]));", "d += tmp * kernel[i];", "}", "return d;", "}", "vec3 color(vec2 coords,float blur)", "{", "vec3 col = vec3(0.0);", "col.r = texture2D(tDiffuse,coords + vec2(0.0,1.0)*texel*fringe*blur).r;", "col.g = texture2D(tDiffuse,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;", "col.b = texture2D(tDiffuse,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;", "vec3 lumcoeff = vec3(0.299,0.587,0.114);", "float lum = dot(col.rgb, lumcoeff);", "float thresh = max((lum-threshold)*gain, 0.0);", "return col+mix(vec3(0.0),col,thresh*blur);", "}", "vec2 rand(vec2 coord) //generating noise/pattern texture for dithering", "{", "float noiseX = ((fract(1.0-coord.s*(size.x/2.0))*0.25)+(fract(coord.t*(size.y/2.0))*0.75))*2.0-1.0;", "float noiseY = ((fract(1.0-coord.s*(size.x/2.0))*0.75)+(fract(coord.t*(size.y/2.0))*0.25))*2.0-1.0;", "if (noise)", "{", "noiseX = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233))) * 43758.5453),0.0,1.0)*2.0-1.0;", "noiseY = clamp(fract(sin(dot(coord ,vec2(12.9898,78.233)*2.0)) * 43758.5453),0.0,1.0)*2.0-1.0;", "}", "return vec2(noiseX,noiseY);", "}", "vec3 debugFocus(vec3 col, float blur, float depth)", "{", "float edge = 0.002*depth; //distance based edge smoothing", "float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);", "float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);", "col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);", "col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);", "return col;", "}", "float linearize(float depth)", "{", "return -zfar * znear / (depth * (zfar - znear) - zfar);", "}", "float vignette()", "{", "float dist = distance(vUv, vec2(0.5,0.5));", "dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);", "return clamp(dist,0.0,1.0);", "}", "void main()", "{", "float depth = linearize(unpackDepth(texture2D(tDepth,vUv)));", "if (depthblur)", "{", "depth = linearize(bdepth(vUv));", "}", "float fDepth = focalDepth;", "if (autofocus)", "{", "fDepth = linearize(unpackDepth(texture2D(tDepth,focus)));", "}", "float blur = 0.0;", "if (manualdof)", "{", "float a = depth-fDepth;", "float b = (a-fdofstart)/fdofdist;", "float c = (-a-ndofstart)/ndofdist;", "blur = (a>0.0)?b:c;", "}", "else", "{", "float f = focalLength;", "float d = fDepth*1000.0;", "float o = depth*1000.0;", "float a = (o*f)/(o-f);", "float b = (d*f)/(d-f);", "float c = (d-f)/(d*fstop*CoC);", "blur = abs(a-b)*c;", "}", "blur = clamp(blur,0.0,1.0);", "vec2 noise = rand(vUv)*namount*blur;", "float w = (1.0/size.x)*blur*maxblur+noise.x;", "float h = (1.0/size.y)*blur*maxblur+noise.y;", "vec3 col = vec3(0.0);", "if(blur < 0.05)", "{", "col = texture2D(tDiffuse, vUv).rgb;", "}", "else", "{", "col = texture2D(tDiffuse, vUv).rgb;", "float s = 1.0;", "for (int i = 1; i <= rings; i += 1)", "{", "float ringsamples = float(i * samples);", "if(i == 1)", "{", "for (int j = 0 ; j < 3 ; j += 1)", "{", "float step = PI*2.0 / float(ringsamples);", "float pw = (cos(float(j)*step)*float(i));", "float ph = (sin(float(j)*step)*float(i));", "float p = 1.0;", "if (pentagon)", "{", "p = penta(vec2(pw,ph));", "}", "col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;", "s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;", "}", "}", "else if(i == 2)", "{", "for (int j = 0 ; j < 6 ; j += 1)", "{", "float step = PI*2.0 / float(ringsamples);", "float pw = (cos(float(j)*step)*float(i));", "float ph = (sin(float(j)*step)*float(i));", "float p = 1.0;", "if (pentagon)", "{", "p = penta(vec2(pw,ph));", "}", "col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;", "s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;", "}", "}", "else if(i == 3)", "{", "for (int j = 0 ; j < 9 ; j += 1)", "{", "float step = PI*2.0 / float(ringsamples);", "float pw = (cos(float(j)*step)*float(i));", "float ph = (sin(float(j)*step)*float(i));", "float p = 1.0;", "if (pentagon)", "{", "p = penta(vec2(pw,ph));", "}", "col += color(vUv + vec2(pw*w,ph*h),blur)*mix(1.0,(float(i))/(float(rings)),bias)*p;", "s += 1.0*mix(1.0,(float(i))/(float(rings)),bias)*p;", "}", "}", "}", "col /= s;", "}", "if (showFocus)", "{", "col = debugFocus(col, blur, depth);", "}", "if (vignetting)", "{", "col *= vignette();", "}", "gl_FragColor.rgb = col;", "gl_FragColor.a = 1.0;", "}"].join("\n")
            }
        }
    }, {}],
    10: [function(e, t, a) {
        t.exports = function(e) {
            e.EffectComposer = function(t, a) {
                if (this.renderer = t, void 0 === a) {
                    var o = window.innerWidth || 1,
                        n = window.innerHeight || 1,
                        i = {
                            minFilter: e.LinearFilter,
                            magFilter: e.LinearFilter,
                            format: e.RGBFormat,
                            stencilBuffer: !1
                        };
                    a = new e.WebGLRenderTarget(o, n, i)
                }
                this.renderTarget1 = a,
                this.renderTarget2 = a.clone(),
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2,
                this.passes = [],
                void 0 === e.CopyShader && console.error("THREE.EffectComposer relies on THREE.CopyShader"),
                this.copyPass = new e.ShaderPass(e.CopyShader)
            },
            e.EffectComposer.prototype = {
                swapBuffers: function() {
                    var e = this.readBuffer;
                    this.readBuffer = this.writeBuffer,
                    this.writeBuffer = e
                },
                addPass: function(e) {
                    this.passes.push(e)
                },
                insertPass: function(e, t) {
                    this.passes.splice(t, 0, e)
                },
                render: function(t) {
                    this.writeBuffer = this.renderTarget1,
                    this.readBuffer = this.renderTarget2;
                    var a,
                        o,
                        n = !1,
                        i = this.passes.length;
                    for (o = 0; i > o; o++)
                        if (a = this.passes[o], a.enabled) {
                            if (a.render(this.renderer, this.writeBuffer, this.readBuffer, t, n), a.needsSwap) {
                                if (n) {
                                    var r = this.renderer.context;
                                    r.stencilFunc(r.NOTEQUAL, 1, 4294967295),
                                    this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, t),
                                    r.stencilFunc(r.EQUAL, 1, 4294967295)
                                }
                                this.swapBuffers()
                            }
                            a instanceof e.MaskPass ? n = !0 : a instanceof e.ClearMaskPass && (n = !1)
                        }
                },
                reset: function(e) {
                    void 0 === e && (e = this.renderTarget1.clone(), e.width = window.innerWidth, e.height = window.innerHeight),
                    this.renderTarget1 = e,
                    this.renderTarget2 = e.clone(),
                    this.writeBuffer = this.renderTarget1,
                    this.readBuffer = this.renderTarget2
                },
                setSize: function(e, t) {
                    var a = this.renderTarget1.clone();
                    a.width = e,
                    a.height = t,
                    this.reset(a)
                }
            }
        }
    }, {}],
    11: [function(e, t, a) {
        t.exports = function(e) {
            e.FXAAShader = {
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    resolution: {
                        type: "v2",
                        value: new e.Vector2(1 / 1024, 1 / 512)
                    }
                },
                vertexShader: ["void main() {", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec2 resolution;", "#define FXAA_REDUCE_MIN   (1.0/128.0)", "#define FXAA_REDUCE_MUL   (1.0/8.0)", "#define FXAA_SPAN_MAX     8.0", "void main() {", "vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;", "vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;", "vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;", "vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;", "vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );", "vec3 rgbM  = rgbaM.xyz;", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float lumaNW = dot( rgbNW, luma );", "float lumaNE = dot( rgbNE, luma );", "float lumaSW = dot( rgbSW, luma );", "float lumaSE = dot( rgbSE, luma );", "float lumaM  = dot( rgbM,  luma );", "float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );", "float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );", "vec2 dir;", "dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));", "dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));", "float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );", "float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );", "dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),", "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),", "dir * rcpDirMin)) * resolution;", "vec4 rgbA = (1.0/2.0) * (", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));", "vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +", "texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));", "float lumaB = dot(rgbB, vec4(luma, 0.0));", "if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {", "gl_FragColor = rgbA;", "} else {", "gl_FragColor = rgbB;", "}", "}"].join("\n")
            }
        }
    }, {}],
    12: [function(e, t, a) {
        t.exports = function(e) {
            e.MaskPass = function(e, t) {
                this.scene = e,
                this.camera = t,
                this.enabled = !0,
                this.clear = !0,
                this.needsSwap = !1,
                this.inverse = !1
            },
            e.MaskPass.prototype = {
                render: function(e, t, a, o) {
                    var n = e.context;
                    n.colorMask(!1, !1, !1, !1),
                    n.depthMask(!1);
                    var i,
                        r;
                    this.inverse ? (i = 0, r = 1) : (i = 1, r = 0),
                    n.enable(n.STENCIL_TEST),
                    n.stencilOp(n.REPLACE, n.REPLACE, n.REPLACE),
                    n.stencilFunc(n.ALWAYS, i, 4294967295),
                    n.clearStencil(r),
                    e.render(this.scene, this.camera, a, this.clear),
                    e.render(this.scene, this.camera, t, this.clear),
                    n.colorMask(!0, !0, !0, !0),
                    n.depthMask(!0),
                    n.stencilFunc(n.EQUAL, 1, 4294967295),
                    n.stencilOp(n.KEEP, n.KEEP, n.KEEP)
                }
            },
            e.ClearMaskPass = function() {
                this.enabled = !0
            },
            e.ClearMaskPass.prototype = {
                render: function(e, t, a, o) {
                    var n = e.context;
                    n.disable(n.STENCIL_TEST)
                }
            }
        }
    }, {}],
    13: [function(e, t, a) {
        t.exports = function(e) {
            e.RenderPass = function(t, a, o, n, i) {
                this.scene = t,
                this.camera = a,
                this.overrideMaterial = o,
                this.clearColor = n,
                this.clearAlpha = void 0 !== i ? i : 1,
                this.oldClearColor = new e.Color,
                this.oldClearAlpha = 1,
                this.enabled = !0,
                this.clear = !0,
                this.needsSwap = !1
            },
            e.RenderPass.prototype = {
                render: function(e, t, a, o) {
                    this.scene.overrideMaterial = this.overrideMaterial,
                    this.clearColor && (this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)),
                    e.render(this.scene, this.camera, a, this.clear),
                    this.clearColor && e.setClearColor(this.oldClearColor, this.oldClearAlpha),
                    this.scene.overrideMaterial = null
                }
            }
        }
    }, {}],
    14: [function(e, t, a) {
        t.exports = function(e) {
            e.ShaderPass = function(t, a) {
                this.textureID = void 0 !== a ? a : "tDiffuse",
                this.uniforms = e.UniformsUtils.clone(t.uniforms),
                this.material = new e.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                }),
                this.renderToScreen = !1,
                this.enabled = !0,
                this.needsSwap = !0,
                this.clear = !1,
                this.camera = new e.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                this.scene = new e.Scene,
                this.quad = new e.Mesh(new e.PlaneBufferGeometry(2, 2), null),
                this.scene.add(this.quad)
            },
            e.ShaderPass.prototype = {
                render: function(e, t, a, o) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = a),
                    this.quad.material = this.material,
                    this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
                }
            }
        }
    }, {}]
}, {}, [1]);
