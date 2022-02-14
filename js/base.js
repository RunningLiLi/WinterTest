$(async function () {
  let header = document.querySelector(".header");
  let shortcutdiv = document.querySelector(".shortcut-div");
  var load = document.querySelector(".load");
  var loadheader = document.querySelector('.load-header-span')
  var loadstop = document.querySelector(".load-stop");
  var loaddiv = document.querySelector(".load-div");
  var loadtel = document.querySelector(".load-tel");
  var loadcode = document.querySelector('.load-code');
  var butcode = document.querySelector('.load-VerificationCode')
  var butload = document.querySelector('.load-load');
  var butload2 = document.querySelector('.load-load2');
  var butload3 = document.querySelector('.load-load3');
  var loadregister = document.querySelector(".load-register");
  var registera = document.querySelector('.load-register-a');
  var loaddiv2 = document.querySelector(".load-div2");
  var loaddiv3 = document.querySelector(".load-resister-div");
  var loadpassword = document.querySelector(".load-password");
  var registercode = document.querySelector(".register-code");
  var registertel = document.querySelector(".register-tel");
  var inputtel = document.querySelector(".input-tel");
  var inputpassword = document.querySelector(".input-password")
  var input1 = document.querySelector(".input1");
  var input2 = document.querySelector(".input2");
  var input3 = document.querySelector(".input3");
  var input4 = document.querySelector(".input4");
  var welcome = document.querySelector(".welcome");
  let name = document.querySelector(".name");
  let begain = document.querySelector(".begain");
  let picturediv = document.querySelector("#picture-span");
  let personality = document.querySelector(".personality");
  let presonalitypicture = document.querySelector(".presonality-picture");
  let presonalityname = document.querySelector(".presonality-name");
  let presonalityGrade = document.querySelector(".presonality-Grade");
  let presonalitysign = document.querySelector(".presonality-sign");
  let presonalitydynamic = document.querySelector(".presonality-dynamic");
  let presonalityattention = document.querySelector(".presonality-attention");
  let presonalityfan = document.querySelector(".presonality-fan");
  let hotsongbody = document.querySelector(".hotsong-body");
  let hotsongspan = hotsongbody.querySelectorAll("span");
  let hotsongdiv = hotsongbody.querySelectorAll("div");
  let songsheet = document.querySelector(".song-sheet");
  let circlebigdiv = document.querySelector(".circle-bigdiv");
  let hotsong = document.querySelector(".hotsong");
  let songsheetdiv = document.querySelector(".songsheet-div");
  let songsheetheadhotdoor = document.querySelector(".songsheet-head-hotdoor");
  let songsheetbody = document.querySelector(".songsheet-body");
  let tailul = document.querySelector(".tail-ul");
  let lis = tailul.querySelectorAll("li");
  let recommandation = document.querySelector(".recommandation");
  let mymusichead=document.querySelector(".mymusichead");
  let mymusicbody=document.querySelector(".mymusicbody");
  let headerportraitleftimg = document.querySelector(".header-portrait-left-img");
  let headerrightheaderspan = document.querySelector(".header-right-header-span");
  let headerrightpersontimeimg = document.querySelector(".header-right-person-time-img");
  let headerrightpersontimea = document.querySelector(".header-right-person-time-a");
  let headerrightpersontimespan = document.querySelector(".header-right-person-time-span");

  let headerportraitleftimg2 = mymusichead.querySelector(".header-portrait-left-img");
  let headerrightheaderspan2 = mymusichead.querySelector(".header-right-header-span");
  let headerrightpersontimeimg2 = mymusichead.querySelector(".header-right-person-time-img");
  let headerrightpersontimea2 = mymusichead.querySelector(".header-right-person-time-a");
  let headerrightpersontimespan2 = mymusichead.querySelector(".header-right-person-time-span");

  let buttonsplay = document.querySelector(".buttons-play");
  let buttonsadd = document.querySelector(".buttons-add");
  let buttonscollection = document.querySelector(".buttons-collection");
  let buttonsshare = document.querySelector(".buttons-share");
  let buttonsdownload = document.querySelector(".buttons-download");
  let buttonscommand = document.querySelector(".buttons-command");
  let headerrighttags = document.querySelector(".header-right-tags");
  let headerrightintroduce = document.querySelector(".header-right-introduce");

  let buttonsplay2 = mymusichead.querySelector(".buttons-play");
  let buttonsadd2 = mymusichead.querySelector(".buttons-add");
  let buttonscollection2 = mymusichead.querySelector(".buttons-collection");
  let buttonsshare2 = mymusichead.querySelector(".buttons-share");
  let buttonsdownload2 = mymusichead.querySelector(".buttons-download");
  let buttonscommand2 = mymusichead.querySelector(".buttons-command");
  let headerrighttags2 = mymusichead.querySelector(".header-right-tags");
  let headerrightintroduce2 = mymusichead.querySelector(".header-right-introduce");
  let detaildivbody2 = mymusicbody.querySelector(".detail-div-body");
  let open2 = mymusicbody.querySelector(".open");
  let opena2 =mymusicbody.querySelector(".open-a");
  let songlisttbody2 =mymusicbody.querySelector(".songlist-tbody");
  let detaildivbodyheader2 =mymusicbody.querySelector(".detail-div-body-header");

  let detaildivbody = document.querySelector(".detail-div-body");
  let open = document.querySelector(".open");
  let opena = document.querySelector(".open-a");
  let detaildiv = document.querySelector(".detail-div");
  let songlisttbody = document.querySelector(".songlist-tbody");
  let detaildivbodyheader = document.querySelector(".detail-div-body-header");
  let audio = document.querySelector("audio");
  let volumediv = document.querySelector(".volumediv");
  let volumeico = document.querySelector(".volumeico");
  let detaildiv2 = document.querySelector(".detail-div2");
  let commandbodygood = document.querySelector(".command-body-good");
  let commandbodycommon = document.querySelector(".command-body-common");
  let commandbodybody = document.querySelector(".command-body-body");
  let commandbodybody2 = document.querySelector(".command-body-body2");
  let detailcommand = document.querySelector(".detail-command");
  let commandtogether = document.querySelector(".commandtogether");
  let together2 = document.querySelector(".together2");
  let commandbuttons = document.querySelector(".commandbuttons");
  let searchbigdiv=document.querySelector(".searchbigdiv");


  let controls = document.querySelector(".controls");
  let controlsdiv1 = document.querySelector(".controls-div1");
  let controlsdiv2 = document.querySelector(".controls-div2");
  let controlsplay = document.querySelector(".controls-play");
  let controlsleft = document.querySelector(".controls-left");
  let controlsright = document.querySelector(".controls-right");
  let controlsimg = document.querySelector(".controls-img");
  let controlsimgT = controlsimg.querySelector("img");
  let controlsprogressbar = document.querySelector(".controls-progressbar")
  let controlsprogressbarone = document.querySelector(".controls-progressbar-one");
  let controlsprogressbartwo = document.querySelector(".controls-progressbar-two");
  let controlsprogressbartwolong = document.querySelector(".controls-progressbar-two-long");
  let controlsprogressbarreally = document.querySelector(".controls-progressbar-really");
  let controlsprogressbartwocircle1 = document.querySelector(".controls-progressbar-two-circle1");
  let controlsprogressbartwocircle2 = document.querySelector(".controls-progressbar-two-circle2");
  let controlssmall = document.querySelector(".controls-small");
  let controlstime1 = document.querySelector(".controls-time1");
  let controlstime2 = document.querySelector(".controls-time2");
  let flag = 1; /判断注册和登录/
  let flag2 = 1; /判断密码和短信登录/
  let flag3 = 1; /判断是输入号码还是验证验证码/
  let flag5 = 0;
  let flag7 = 0;
  let flag8 = 1;
  let flag9=0;
  let flag10=1;
  let flag11=1;
  let flag12=1;
  let flag13=1;
  let record;
  let recordid;
  let recordid2;
  function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
      var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
  }
  function formatSeconds(value) {
    let result = '';
    if (value < 10) {
      result = "00:0" + value
    }
    else if (value >= 10 && value < 60) {
      result = "00:" + value;
    }
    else if (value >= 60) {
      let mtime = parseInt(value / 60);
      let stime = value % 60;
      if (stime < 10 && mtime < 10) {
        result = "0" + mtime + ":" + '0' + stime;
      }
      else if (stime >= 10 && mtime < 10) {
        result = '0' + mtime + ":" + stime;
      }
      else if (stime >= 10 && mtime >= 10) {
        result = mtime + ":" + stime;
      }
      else if (stime < 10 && mtime >= 10) {
        result = '0' + mtime + ":" + stime;
      }
    }
    return result
  }
  function dateFormat(time) {
    const t = new Date(time)
    const format = 'Y-m-d'
    const year = t.getFullYear()
    const month = t.getMonth() + 1
    const day = t.getDate()
    const hash = {
      'Y': year,
      'm': month,
      'd': day,
    }
    return format.replace(/\w/g, o => {
      return hash[o]
    })
  }
  load.addEventListener("click", () => {
    loaddiv.style.display = "block";
  })
  loadstop.addEventListener("click", () => {
    loaddiv.style.display = "none";
  })

  registera.addEventListener('click', () => {
    if (flag == 1) {
      loaddiv2.style.display = 'none';
      loaddiv3.style.display = "block";
      loadheader.innerHTML = '手机号注册';
      registera.innerHTML = '< 返回登录';
      registera.style.float = 'left';
      registera.style.color = 'rgb(42, 42, 221)';
      flag = 0;
    }
    else if (flag == 0) {
      loaddiv2.style.display = 'block';
      loaddiv3.style.display = "none";
      loadheader.innerHTML = '手机号登录';
      registera.innerHTML = '没有账号？免费注册 >';
      registera.style.float = 'right';
      registera.style.color = 'rgb(177, 173, 173)';
      registercode.style.display = 'none'
      flag = 1;
    }
  })
  loadpassword.addEventListener('click', () => {
    if (flag2 == 1) {
      loadcode.style.width = 167 + 'px';
      loadcode.placeholder = '请输入密码';
      butcode.style.display = 'none';
      loadpassword.innerHTML = '短信登陆';
      loadcode.type = 'password'

      flag2 = 0;
    }
    else if (flag2 == 0) {
      loadcode.style.width = 80 + 'px';
      loadcode.placeholder = '请输入验证码';
      butcode.style.display = 'inline';
      loadpassword.innerHTML = '密码登陆';
      flag2 = 1;
    }
  })
  butcode.addEventListener("click", async () => {
    let num = loadtel.value;
    let n = 60;
    let response = await fetch("http://redrock.udday.cn:2022/captcha/sent?phone=" + num, {
      method: 'POST',
    });
    let result = await response.json();
    if (result.code == 200) {
      butcode.disabled = 'ture';
      butcode.innerHTML = n;
      let timer = setInterval(() => {
        n--;
        butcode.innerHTML = n;
        if (n == 1) {
          clearInterval(timer);
          butcode.disabled = false;
          butcode.innerHTML = "获取验证码";
        }
      }, 1000);
    }
    else {
      alert(result.message);
    }
  });
  butload.addEventListener('click', async () => {
    let num = loadtel.value;
    let code = loadcode.value;
    if (flag2 == 1 && flag == 1) {
      let response = await fetch("http://redrock.udday.cn:2022/login/cellphone?phone=" + num + "&captcha=" + code, {
        method: 'POST',
      });
      let result = await response.json();
      console.log(result)
      if (result.data) {
        personality.style.display = 'block';
        loaddiv.style.display = 'none';
        let name = result.profile.nickname;
        console.log(result);
        load.remove();
        let img = document.createElement('img');
        img.src = result.profile.avatarUrl;
        picturediv.className = 'picture-div';
        picturediv.appendChild(img);
        let img2 = document.createElement('img');
        img2.src = result.profile.avatarUrl;
        presonalitypicture.appendChild(img2);
        presonalityname.innerHTML = name;
      } else {
        alert(result.message);
      }
    }
    else if (flag2 == 0 && flag == 1) {
      let num = loadtel.value;
      let password = loadcode.value;
      let response = await fetch("http://redrock.udday.cn:2022/login/cellphone?phone=" + num + "&password=" + password, {
        method: "POSt"
      });
      let result = await response.json();
      let cookie=result.cookie;
      console.log(result)
      if (result.code == 400) {
        alert('请输入正确的号码!')
      }
      else if (result.code != 200) {
        alert(result.msg);
      }
      else {
        personality.style.display = 'block';
        loaddiv.style.display = 'none';
        let name = result.profile.nickname;
        load.remove();
        let img = document.createElement('img');
        img.src = result.profile.avatarUrl;
        picturediv.className = 'picture-div';
        picturediv.appendChild(img);
        let img2 = document.createElement('img');
        img2.src = result.profile.avatarUrl;
        presonalitypicture.appendChild(img2);
        presonalityname.innerHTML = name;
        let mymusicbutton=document.querySelector(".mymusic");
        let findmusic=document.querySelector(".findmusic");
        let shortcutdiv=document.querySelector(".shortcut-div");
        let mymusicbigdiv=document.querySelector(".mymusicbigdiv");
        let mymusicsidebar=document.querySelector(".mymusicsidebar");
        let mymusicsonglist=document.querySelector(".mymusicsonglist");
        // let sidebarimg=document.querySelector(".sidebarimg");
        // let sidebarname=document.querySelector(".sidebarname");
        // let sidebarname=document.querySelector(".sidebarname");
        // let sidebarnum=document.querySelector(".sidebarnum");
        findmusic.style.backgroundColor='black';
        mymusicbutton.addEventListener("click",async()=>{
          mymusicbigdiv.style.display='block';
          mymusicsidebar.style.display='inline-block';
          shortcutdiv.style.display='none';
          searchbigdiv.style.display='none';
          circlebigdiv.style.display='none';
          hotsong.style.display='none';
          songsheetdiv.style.display='none';
          detaildiv.style.display='none';
          findmusic.style.backgroundColor='rgb(36, 36, 36)';
          mymusicbutton.style.backgroundColor='black';
          let responseA = await fetch('http://redrock.udday.cn:2022/user/playlist?uid='+result.account.id, {
               method: "POST"
             })
             let resultA= await responseA.json();
             mymusicsidebar.style.height=resultA.playlist.length*60+'px';
             for(let t=0;t<resultA.playlist.length;t++){
              let sidebarone=document.createElement("div");
              let sidebarimg=document.createElement("img");
              let sidebarname=document.createElement("span");
              let sidebarnum=document.createElement("span");
              sidebarone.className='sidebarone';
              sidebarimg.className='sidebarimg';
              sidebarname.className='sidebarname';
              sidebarnum.className='sidebarnum';
              mymusicsidebar.appendChild(sidebarone);
              sidebarone.appendChild(sidebarimg);
              sidebarone.appendChild(sidebarname);
              sidebarone.appendChild(sidebarnum);
              sidebarimg.src=resultA.playlist[t].coverImgUrl;
              sidebarname.innerHTML=resultA.playlist[t].name;
              sidebarnum.innerHTML=resultA.playlist[t].trackCount+'首';
               if (t == resultA.playlist.length - 1) {
                let sidebarones = document.querySelectorAll(".sidebarone");
                sidebarones[0].style.backgroundColor = 'rgb(200, 200, 200)';
                 for (let k = 0; k < resultA.playlist.length; k++) {
             sidebarones[k].addEventListener("click",async () => {
                      if(document.querySelectorAll(".divone")){
                        let divoness=document.querySelectorAll(".divone");
                        for(let j=0;j<divoness.length;j++){
                          divoness[j].remove();
                        }
                      }







                     for (let y = 0; y < sidebarones.length; y++) {
                       sidebarones[y].style.backgroundColor = 'white';
                     }
                     sidebarones[k].style.backgroundColor = 'rgb(200, 200, 200)';
                     headerrightheaderspan2.innerHTML=resultA.playlist[k].name;
                     headerportraitleftimg2.src = resultA.playlist[k].coverImgUrl;
                     headerrightpersontimeimg2.src = resultA.playlist[k].creator.avatarUrl;
                     headerrightpersontimea2.innerHTML = resultA.playlist[k].creator.nickname;
                     headerrightpersontimespan2.innerHTML = dateFormat(resultA.playlist[k].createTime);
                     if (resultA.playlist[k].subscribedCount != 0) { buttonscollection2.innerHTML = '(' + resultA.playlist[k].subscribedCount + ')'; }
                     if (resultA.playlist[k].sharedUsers != null) { buttonsshare2.innerHTML = '(' + resultA.playlist[k].sharedUsers + ')'; }
                     if (resultA.playlist[k].commentCount != undefined) { buttonscommand2.innerHTML = '(' + resultA.playlist[k].commentCount + ')'; }
                     if (resultA.playlist[k].tags[1] != undefined) {
                       headerrighttags2.childNodes[3].innerHTML = resultA.playlist[k].tags[0];
                     }
                     else {
                       headerrighttags2.style.display = 'none';
                     }
                     if (resultA.playlist[k].tags[1] != undefined) {
                       headerrighttags2.childNodes[5].innerHTML = resultA.playlist[k].tags[1];
                     }
                     if (resultA.playlist[k].tags[2] != undefined) {
                       headerrighttags2.childNodes[7].innerHTML = resultA.playlist[k].tags[2];
                     }
                     if (resultA.playlist[k].description != null) { headerrightintroduce2.childNodes[1].innerHTML = "介绍:" + resultA.playlist[k].description; }
                     else { headerrightintroduce2.style.display = 'none' }
                     detaildivbodyheader2.childNodes[3].innerHTML = resultA.playlist[k].trackCount + '首歌';
                     detaildivbodyheader2.childNodes[3].style.fontSize = '10px';
                     detaildivbodyheader2.childNodes[3].style.color = 'rgb(173, 170, 170)';
                     detaildivbodyheader2.childNodes[5].innerHTML = '播放:' + resultA.playlist[k].playCount + '次';
                     detaildivbodyheader2.childNodes[5].style.float = 'right';
                     detaildivbodyheader2.childNodes[5].style.fontSize = '15px';
                     detaildivbodyheader2.childNodes[5].style.color = 'rgb(223, 134, 134)';
                     let responseB = await fetch('http://redrock.udday.cn:2022/playlist/detail?cookie=' + cookie + '&id=' + resultA.playlist[k].id, {
                       method: "POST"
                     })
                     let resultB = await responseB.json();
                     console.log(resultB)
                     mymusicsonglist.style.height=resultA.playlist[k].trackCount*30+50+'px';
                     for (let i = 0; i < resultA.playlist[k].trackCount; i++) {
                       let divone = document.createElement("div");
                       let div11 = document.createElement("div");
                       let div12 = document.createElement("div");
                       let div13 = document.createElement("div");
                       let div14 = document.createElement("div");
                       let div15 = document.createElement("div");
                       let div16 = document.createElement("div");
                       mymusicsonglist.appendChild(divone);
                       divone.appendChild(div11);
                       divone.appendChild(div12);
                       divone.appendChild(div13);
                       divone.appendChild(div14);
                       divone.appendChild(div15);
                       divone.appendChild(div16);
                       divone.className = 'divone';
                       div11.className = 'div11';
                       div12.className = 'div12';
                       div13.className = 'div13';
                       div14.className = 'div14';
                       div15.className = 'div15';
                       div16.className = 'div16';
                       if (i % 2 == 0) {
                         divone.style.backgroundColor = 'rgb(214, 214, 214)';
                       }
                       div11.innerHTML = i + 1;
                       div12.innerHTML = '';
                    
                        new Promise(function (resolve, reject) {
                        let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                         resolve(response)
                       }).then((response)=>{
                         return response.json();
                       }).then((resultC)=>{
                        div13.innerHTML = resultC.songs[0].name;
                        div14.innerHTML = formatSeconds(parseInt(resultC.songs[0].dt / 1000));
                        div15.innerHTML = resultC.songs[0].ar[0].name;
                        div15.title = resultC.songs[0].ar[0].name;
                        div16.innerHTML = resultC.songs[0].al.name;
                        div16.title = resultC.songs[0].al.name;
                       });
          
                     
                       div12.addEventListener('click', async () => {
                        let responseD = await fetch('http://redrock.udday.cn:2022/song/url?id=' + resultB.privileges[i].id, {
                          method: "POST"
                        })
                        let resultD = await responseD.json();
                        audio.src=resultD.data[0].url;
                        audio.play();
                         new Promise(function (resolve, reject) {
                          let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                           resolve(response)
                         }).then((response)=>{
                           return response.json();
                         }).then((resultC)=>{
                          controlsimgT.src = resultC.songs[0].al.picUrl;
                          controlsprogressbarone.childNodes[1].innerHTML = resultC.songs[0].name;
                          controlsprogressbarone.childNodes[2].innerHTML = resultC.songs[0].ar[0].name;
                          let Timer = setInterval(() => {
                            let length = 450 / (resultC.songs[0].dt / 1000);
                            let controlswidth = controlsprogressbarreally.offsetWidth;
                            controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                            if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                              clearInterval(Timer)
                            }
                          }, 1000);
                          clearInterval(songlisttbody.getAttribute('data-timer-id'));
                          songlisttbody.setAttribute('data-timer-id', Timer);
                         });
                        
                         controls.style.display = 'block';
                         volumediv.style.display = 'none';
                         audio.play();
                         controlsplay.innerHTML = '';
                         controlsprogressbarreally.style.width = 0;
                        
                         controlsplay.onclick = () => {
                           if (flag5) {
                             audio.play();
                             controlsplay.innerHTML = '';
                             flag5 = 0;
                             new Promise(function (resolve, reject) {
                              let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                               resolve(response)
                             }).then((response)=>{
                               return response.json();
                             }).then((resultC)=>{
                              Timer4 = setInterval(() => {
                                let length = 450 / (resultC.songs[0].dt / 1000);
                                let controlswidth = controlsprogressbarreally.offsetWidth;
                                controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                                if (controlswidth >= 445 || audio.paused) {
                                  clearInterval(Timer4)
                                }
                              }, 1000);
                              clearInterval(songlisttbody.getAttribute('data-timer-id'));
                              songlisttbody.setAttribute('data-timer-id', Timer4);
                             });
                            
                           }
                           else {
                             controlsplay.innerHTML = '';
                             audio.pause();
                             flag5 = 1;
                           }
                         }
                         controlsleft.onclick = async () => {
                           let response5 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + resultB.privileges[i - 1].id, {
                             method: "POST"
                           })
                           let result5 = await response5.json();
                           let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i - 1].id, {
                             method: "POST"
                           })
                           let result31 = await response31.json();
                           // recordid = trackIds[i - 1].id;
                           // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                           let s1 = parseInt(result31.songs[0].dt / 1000) % 60;
                           let m1 = parseInt(parseInt(result31.songs[0].dt / 1000) / 60);
                           if (s1 < 10 && m1 < 10) {
                             controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                           }
                           else if (s1 > 10 && m1 > 10) {
                             controlstime2.innerHTML = m1 + ':' + s1;
                           }
                           else if (s1 < 10 && m1 > 10) {

                             controlstime2.innerHTML = m1 + ':0' + s1;
                           }
                           else if (s1 > 10 && m1 < 10) {
                             controlstime2.innerHTML = '0' + m1 + ':' + s1;
                           }
                           controlsprogressbarreally.style.width = 0;
                           Timer2 = setInterval(() => {
                             let length = 450 / (result31.songs[0].dt / 1000);
                             let controlswidth = controlsprogressbarreally.offsetWidth;
                             controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                             if (controlswidth >= 445 || audio.paused) {
                               clearInterval(Timer2)
                             }
                           }, 1000);
                           clearInterval(songlisttbody.getAttribute('data-timer-id'));
                           songlisttbody.setAttribute('data-timer-id', Timer2);
                           controlsprogressbarreally.style.width = 0;
                           controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                           controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                           controlsimgT.src = result31.songs[0].al.picUrl;
                           audio.src = result5.data[0].url;
                           controls.style.display = 'block';
                           audio.play();
                           controlsplay.innerHTML = '';
                           i--;
                         }
                         controlsright.onclick = async () => {
                           let response6 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + resultB.privileges[i + 1].id, {
                             method: "POST"
                           })
                           let result6 = await response6.json();
                           let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i + 1].id, {
                             method: "POST"
                           })
                           let result32 = await response32.json();
                           // recordid = trackIds[i + 1].id;
                           let s1 = parseInt(result32.songs[0].dt / 1000) % 60;
                           let m1 = parseInt(parseInt(result32.songs[0].dt / 1000) / 60);
                           if (s1 < 10 && m1 < 10) {
                             controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                           }
                           else if (s1 > 10 && m1 > 10) {
                             controlstime2.innerHTML = m1 + ':' + s1;
                           }
                           else if (s1 < 10 && m1 > 10) {

                             controlstime2.innerHTML = m1 + ':0' + s1;
                           }
                           else if (s1 > 10 && m1 < 10) {
                             controlstime2.innerHTML = '0' + m1 + ':' + s1;
                           }
                           controlsprogressbarreally.style.width = 0;
                           Timer3 = setInterval(() => {
                             let length = 450 / (result32.songs[0].dt / 1000);
                             let controlswidth = controlsprogressbarreally.offsetWidth;
                             controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                             if (controlswidth >= 445 || audio.paused) {
                               clearInterval(Timer3)
                             }
                           }, 1000);
                           clearInterval(songlisttbody.getAttribute('data-timer-id'));
                           songlisttbody.setAttribute('data-timer-id', Timer3);
                           controlsprogressbarreally.style.width = 0;
                           controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                           controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                           controlsimgT.src = result32.songs[0].al.picUrl;
                           audio.src = result6.data[0].url;
                           controls.style.display = 'block';
                           audio.play();
                           controlsplay.innerHTML = '';
                           i++;
                         }
                         setInterval(() => {
                           let time = formatSeconds(parseInt(audio.currentTime));
                           controlstime1.innerHTML = time + '/'
                         }, 1000);
                         new Promise(function (resolve, reject) {
                          let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                           resolve(response)
                         }).then((response)=>{
                           return response.json();
                         }).then((resultC)=>{
                          let s1 = parseInt(resultC.songs[0].dt / 1000) % 60;
                         let m1 = parseInt(parseInt(resultC.songs[0].dt / 1000) / 60);
                         if (s1 < 10 && m1 < 10) {
                           controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                         }
                         else if (s1 > 10 && m1 > 10) {
                           controlstime2.innerHTML = m1 + ':' + s1;
                         }
                         else if (s1 < 10 && m1 > 10) {

                           controlstime2.innerHTML = m1 + ':0' + s1;
                         }
                         else if (s1 > 10 && m1 < 10) {
                           controlstime2.innerHTML = '0' + m1 + ':' + s1;
                         }

                         });
                        


                       })
                     }











                     
                   })
                 }
               }


             }
            
             headerrightheaderspan2.innerHTML=resultA.playlist[0].name;
             headerportraitleftimg2.src=resultA.playlist[0].coverImgUrl;
             headerrightpersontimeimg2.src=resultA.playlist[0].creator.avatarUrl;
             headerrightpersontimea2.innerHTML=resultA.playlist[0].creator.nickname;
             headerrightpersontimespan2.innerHTML=dateFormat(resultA.playlist[0].createTime);
             if(resultA.playlist[0].subscribedCount!=0){ buttonscollection2.innerHTML='(' + resultA.playlist[0].subscribedCount + ')';}
             if(resultA.playlist[0].sharedUsers!=null){ buttonsshare2.innerHTML = '(' + resultA.playlist[0].sharedUsers + ')';}
             if(resultA.playlist[0].commentCount!=undefined){ buttonscommand2.innerHTML = '(' + resultA.playlist[0].commentCount + ')';}
             if(resultA.playlist[0].tags[1]!=undefined){
             headerrighttags2.childNodes[3].innerHTML = resultA.playlist[0].tags[0];
             }
             else{
              headerrighttags2.style.display='none';
             }
             if(resultA.playlist[0].tags[1]!=undefined){
             headerrighttags2.childNodes[5].innerHTML = resultA.playlist[0].tags[1];
             }
             if(resultA.playlist[0].tags[2]!=undefined){
             headerrighttags2.childNodes[7].innerHTML = resultA.playlist[0].tags[2];
             }
             if(resultA.playlist[0].description!=null){ headerrightintroduce2.childNodes[1].innerHTML = "介绍:" + resultA.playlist[0].description;}
             else{ headerrightintroduce2.style.display='none'}
             detaildivbodyheader2.childNodes[3].innerHTML =resultA.playlist[0].trackCount + '首歌';
             detaildivbodyheader2.childNodes[3].style.fontSize = '10px';
             detaildivbodyheader2.childNodes[3].style.color = 'rgb(173, 170, 170)';
             detaildivbodyheader2.childNodes[5].innerHTML = '播放:' + resultA.playlist[0].playCount + '次';
             detaildivbodyheader2.childNodes[5].style.float = 'right';
             detaildivbodyheader2.childNodes[5].style.fontSize = '15px';
             detaildivbodyheader2.childNodes[5].style.color = 'rgb(223, 134, 134)';
            //  /playlist/track/all?id=24381616&limit=10&offset=1
            let responseB = await fetch('http://redrock.udday.cn:2022/playlist/detail?cookie='+cookie+'&id='+ resultA.playlist[0].id,{
                method: "POST"
              })
              let resultB = await responseB.json();
              mymusicsonglist.style.height=resultA.playlist[0].trackCount*30+50+'px';
             for (let i = 0; i < resultA.playlist[0].trackCount; i++) {
               let divone=document.createElement("div");
               let div11=document.createElement("div");
               let div12=document.createElement("div");
               let div13=document.createElement("div");
               let div14=document.createElement("div");
               let div15=document.createElement("div");
               let div16=document.createElement("div");
               mymusicsonglist.appendChild(divone);
               divone.appendChild(div11);
               divone.appendChild(div12);
               divone.appendChild(div13);
               divone.appendChild(div14);
               divone.appendChild(div15);
               divone.appendChild(div16);
               divone.className='divone';
               div11.className='div11';
               div12.className='div12';
               div13.className='div13';
               div14.className='div14';
               div15.className='div15';
               div16.className='div16';
               if(i%2==0){
                divone.style.backgroundColor='rgb(214, 214, 214)';
               }
               div11.innerHTML=i+1;
               div12.innerHTML='';
               new Promise(function (resolve, reject) {
                let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                 resolve(response)
               }).then((response)=>{
                 return response.json();
               }).then((resultC)=>{
                div13.innerHTML = resultC.songs[0].name;
                div14.innerHTML = formatSeconds(parseInt(resultC.songs[0].dt / 1000));
                div15.innerHTML = resultC.songs[0].ar[0].name;
                div15.title = resultC.songs[0].ar[0].name;
                div16.innerHTML = resultC.songs[0].al.name;
                div16.title = resultC.songs[0].al.name;
               });
               div12.addEventListener('click',async()=>{
                    let responseD = await fetch('http://redrock.udday.cn:2022/song/url?id=' + resultB.privileges[i].id, {
                        method: "POST"
                      })
                      let resultD = await responseD.json();
                      audio.src=resultD.data[0].url;
                      audio.play();
                      new Promise(function (resolve, reject) {
                        let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                         resolve(response)
                       }).then((response)=>{
                         return response.json();
                       }).then((resultC)=>{
                        controlsimgT.src = resultC.songs[0].al.picUrl;
                        controlsprogressbarone.childNodes[1].innerHTML = resultC.songs[0].name;
                        controlsprogressbarone.childNodes[2].innerHTML = resultC.songs[0].ar[0].name;
                       });
                    
                      controls.style.display = 'block';
                      volumediv.style.display = 'none';
                      audio.play();
                      controlsplay.innerHTML = '';
                      controlsprogressbarreally.style.width = 0;
                      new Promise(function (resolve, reject) {
                        let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                         resolve(response)
                       }).then((response)=>{
                         return response.json();
                       }).then((resultC)=>{
                        let Timer = setInterval(() => {
                          let length = 450 / (resultC.songs[0].dt / 1000);
                          let controlswidth = controlsprogressbarreally.offsetWidth;
                          controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                          if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                            clearInterval(Timer)
                          }
                        }, 1000);
                        clearInterval(songlisttbody.getAttribute('data-timer-id'));
                        songlisttbody.setAttribute('data-timer-id', Timer);
                       });
                     
                      controlsplay.onclick = () => {
                        if (flag5) {
                          audio.play();
                          controlsplay.innerHTML = '';
                          flag5 = 0;
                          new Promise(function (resolve, reject) {
                            let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                             resolve(response)
                           }).then((response)=>{
                             return response.json();
                           }).then((resultC)=>{
                            let Timer = setInterval(() => {
                              let length = 450 / (resultC.songs[0].dt / 1000);
                              let controlswidth = controlsprogressbarreally.offsetWidth;
                              controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                              if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                                clearInterval(Timer)
                              }
                            }, 1000);
                            clearInterval(songlisttbody.getAttribute('data-timer-id'));
                            songlisttbody.setAttribute('data-timer-id', Timer);
                           });
                        }
                        else {
                          controlsplay.innerHTML = '';
                          audio.pause();
                          flag5 = 1;
                        }
                      }
                      controlsleft.onclick = async () => {
                        let response5 = await fetch('http://redrock.udday.cn:2022/song/url?id=' +  resultB.privileges[i-1].id, {
                          method: "POST"
                        })
                        let result5 = await response5.json();
                        let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i-1].id, {
                          method: "POST"
                        })
                        let result31 = await response31.json();
                        // recordid = trackIds[i - 1].id;
                        // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                        let s1 = parseInt(result31.songs[0].dt / 1000) % 60;
                        let m1 = parseInt(parseInt(result31.songs[0].dt / 1000) / 60);
                        if (s1 < 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                        }
                        else if (s1 > 10 && m1 > 10) {
                          controlstime2.innerHTML = m1 + ':' + s1;
                        }
                        else if (s1 < 10 && m1 > 10) {
            
                          controlstime2.innerHTML = m1 + ':0' + s1;
                        }
                        else if (s1 > 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + s1;
                        }
                        controlsprogressbarreally.style.width = 0;
                        Timer2 = setInterval(() => {
                          let length = 450 / (result31.songs[0].dt / 1000);
                          let controlswidth = controlsprogressbarreally.offsetWidth;
                          controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                          if (controlswidth >= 445 || audio.paused) {
                            clearInterval(Timer2)
                          }
                        }, 1000);
                        clearInterval(songlisttbody.getAttribute('data-timer-id'));
                        songlisttbody.setAttribute('data-timer-id', Timer2);
                        controlsprogressbarreally.style.width = 0;
                        controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                        controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                        controlsimgT.src = result31.songs[0].al.picUrl;
                        audio.src = result5.data[0].url;
                        controls.style.display = 'block';
                        audio.play();
                        controlsplay.innerHTML = '';
                        i--;
                      }
                      controlsright.onclick = async () => {
                        let response6 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + resultB.privileges[i+1].id, {
                          method: "POST"
                        })
                        let result6 = await response6.json();
                        let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i+1].id, {
                          method: "POST"
                        })
                        let result32 = await response32.json();
                        // recordid = trackIds[i + 1].id;
                        let s1 = parseInt(result32.songs[0].dt / 1000) % 60;
                        let m1 = parseInt(parseInt(result32.songs[0].dt / 1000) / 60);
                        if (s1 < 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                        }
                        else if (s1 > 10 && m1 > 10) {
                          controlstime2.innerHTML = m1 + ':' + s1;
                        }
                        else if (s1 < 10 && m1 > 10) {
            
                          controlstime2.innerHTML = m1 + ':0' + s1;
                        }
                        else if (s1 > 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + s1;
                        }
                        controlsprogressbarreally.style.width = 0;
                        Timer3 = setInterval(() => {
                          let length = 450 / (result32.songs[0].dt / 1000);
                          let controlswidth = controlsprogressbarreally.offsetWidth;
                          controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                          if (controlswidth >= 445 || audio.paused) {
                            clearInterval(Timer3)
                          }
                        }, 1000);
                        clearInterval(songlisttbody.getAttribute('data-timer-id'));
                        songlisttbody.setAttribute('data-timer-id', Timer3);
                        controlsprogressbarreally.style.width = 0;
                        controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                        controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                        controlsimgT.src = result32.songs[0].al.picUrl;
                        audio.src = result6.data[0].url;
                        controls.style.display = 'block';
                        audio.play();
                        controlsplay.innerHTML = '';
                        i++;
                      }
                      setInterval(() => {
                        let time = formatSeconds(parseInt(audio.currentTime));
                        controlstime1.innerHTML = time + '/'
                      }, 1000);
                      new Promise(function (resolve, reject) {
                        let response= fetch('http://redrock.udday.cn:2022/song/detail?ids=' + resultB.privileges[i].id);
                         resolve(response)
                       }).then((response)=>{
                         return response.json();
                       }).then((resultC)=>{
                        let s1 = parseInt(resultC.songs[0].dt / 1000) % 60;
                        let m1 = parseInt(parseInt(resultC.songs[0].dt / 1000) / 60);
                        if (s1 < 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                        }
                        else if (s1 > 10 && m1 > 10) {
                          controlstime2.innerHTML = m1 + ':' + s1;
                        }
                        else if (s1 < 10 && m1 > 10) {
              
                          controlstime2.innerHTML = m1 + ':0' + s1;
                        }
                        else if (s1 > 10 && m1 < 10) {
                          controlstime2.innerHTML = '0' + m1 + ':' + s1;
                        }
                       });
                    
                    
    
    
                  })
            }
            // let div12s=document.querySelectorAll(".div12");
            // for(let f=0;f<div12s.length;f++){
            //   div12s[f].addEventListener('click',async()=>{
            //    div12s[f].style.backgroundColor='red'
            //    controls.style.display='block';


            //   })
            // }



        })
        findmusic.addEventListener("click",()=>{
          mymusicbigdiv.style.display='none';
          mymusicsidebar.style.display='none';
          shortcutdiv.style.display='flex';
          searchbigdiv.style.display='none';
          circlebigdiv.style.display='block';
          hotsong.style.display='block';
          songsheetdiv.style.display='none';
          detaildiv.style.display='none';
          findmusic.style.backgroundColor='black';
          mymusicbutton.style.backgroundColor='rgb(36, 36, 36)';
        })
    








      }
    }
  })
  butload2.onclick = async () => {
    if (inputtel.value.length == 11) {
      let response = await fetch('http://redrock.udday.cn:2022/cellphone/existence/check?phone=' + inputtel.value, {
        method: 'POST'
      });
      let result = await response.json();
      if (result.exist) {
        alert("该号码已经被注册了");
      }
      var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}');
      if (pwdRegex.test(inputpassword.value) && result.exist != 1) {
        let num = inputtel.value;
        registertel.innerHTML = num[0] + num[1] + num[2] + "****" + num[7] + num[8] + num[9] + num[10];
        registercode.style.display = 'block';
        loaddiv3.style.display = 'none';
        input1.focus();
        await fetch("http://redrock.udday.cn:2022/captcha/sent?phone=" + num, { method: "POST" });
      } else if (result.exist != 1) {
        alert("您的密码复杂度太低（密码中必须包含字母、数字、特殊字符），请及时修改密码!");
      }
    }
    else {
      alert("号码有问题?");
    }
  }
  input1.onkeyup = () => {
    input2.focus();
    input1.style.borderBottom = 'solid 3px red';
  }
  input2.onkeyup = () => {
    input3.focus();
    input2.style.borderBottom = 'solid 3px red';
  }
  input3.onkeyup = () => {
    input4.focus();
    input3.style.borderBottom = 'solid 3px red';
  }
  input4.onkeyup = () => {
    input4.style.borderBottom = 'solid 3px red';
  }
  let captcha;
  let num;
  butload3.onclick = async function () {
    num = inputtel.value;
    let num1 = input1.value;
    let num2 = input2.value;
    let num3 = input3.value;
    let num4 = input4.value;
    captcha = num1 + num2 + num3 + num4;
    // /register/cellphone?phone=13xxx&password=xxxxx&captcha=1234&nickname=binary1345
    // /captcha/verify?phone=13xxx&captcha=1597
    let response = await fetch("http://redrock.udday.cn:2022/captcha/verify?phone=" + num + "&captcha=" + captcha, { method: "POST" });
    let result = await response.json();
    if (result.data) {
      registercode.style.display = 'none';    //注册成功     
      welcome.style.display = 'block';
      loadregister.style.display = "none";
    }
    else {
      alert("验证码错误!");
    }
  }
  begain.onclick = async () => {
    let NAME = name.value;
    if (NAME.length >= 4) {
      let reponse = await fetch('http://redrock.udday.cn:2022/register/cellphone?phone=' + num + '&password=' + inputpassword.value + '&captcha=' + captcha + '&nickname=' + NAME);
      let result = await reponse.json();
      console.log(result);
      if (result.code != 200) {
        alert(result.message);
      }
      else {
        let id = result.id;
      }
    }
  }
  let reponsesong = await fetch('http://redrock.udday.cn:2022/personalized?limit=8', {
    method: "POST"
  });
  resultsong = await reponsesong.json();
  for (let i = 0; i < 8; i++) {
    let img = document.createElement("img");
    let a = document.createElement('p');
    img.src = resultsong.result[i].picUrl;
    hotsongspan[i].appendChild(img);
    hotsongspan[i].appendChild(a);
    a.innerHTML = resultsong.result[i].name;
    if (resultsong.result[i].playCount.length <= 4) {
      hotsongdiv[i].innerHTML = result.result[i].playCount;
    } else {
      hotsongdiv[i].innerHTML = parseInt(resultsong.result[i].playCount / 1000) + '万';
    }
    a.style.position = 'absolute';
    a.style.top = '230px';
    a.style.fontSize = '15px';
    if (i >= 4) {
      a.style.top = '510px';
    }
    let id = resultsong.result[i].id;
    img.addEventListener('click', async () => {
      circlebigdiv.style.display = 'none';
      hotsong.style.display = 'none';
      let response2 = await fetch('http://redrock.udday.cn:2022/playlist/detail?id=' + id, {
        method: "POST"
      })
      let result2 = await response2.json();
      detaildiv.style.display = 'block';
      songsheetdiv.style.display = 'none';
      headerportraitleftimg.src = result2.playlist.coverImgUrl;
      headerrightheaderspan.innerHTML = result2.playlist.name;
      headerrightpersontimeimg.src = result2.playlist.creator.avatarUrl;
      headerrightpersontimea.innerHTML = result2.playlist.creator.nickname;
      headerrightpersontimespan.innerHTML = dateFormat(result2.playlist.createTime, 0) + ' 创建';
      buttonscollection.innerHTML = '(' + result2.playlist.subscribedCount + ')';
      buttonsshare.innerHTML = '(' + result2.playlist.commentCount + ')';
      buttonscommand.innerHTML = '(' + result2.playlist.commentCount + ')';
      headerrighttags.childNodes[3].innerHTML = result2.playlist.tags[0];
      headerrighttags.childNodes[5].innerHTML = result2.playlist.tags[1];
      headerrighttags.childNodes[7].innerHTML = result2.playlist.tags[2];
      headerrightintroduce.childNodes[1].innerHTML = "介绍:" + result2.playlist.description;
      if (headerrightintroduce.childNodes[1].offsetHeight > 190) {
        let num = headerrightintroduce.childNodes[1].offsetHeight + 190;
        open.style.display = "block";
        let flag4 = 1;
        open.onclick = () => {
          if (flag4) {
            headerrightintroduce.style.overflow = 'visible';
            opena.innerHTML = "收起";
            open.style.top = num + 'px';
            detailcommand.style.top = detaildiv2.offsetHeight + 50 + 'px';
            detaildivbody.style.top = num - 300 + 'px';
            const _style_ = document.createElement('style')
            _style_.innerText = `.open-a:after { content: ""}`
            document.body.appendChild(_style_)
            flag4 = 0;
          }
          else {
            headerrightintroduce.style.overflow = 'hidden';
            opena.innerHTML = "展开";
            open.style.top = 330 + 'px';
            detaildivbody.style.top = 0 + 'px';
            const _style_ = document.createElement('style');
            _style_.innerText = `.open-a:after { content: ""}`
            document.body.appendChild(_style_)
            flag4 = 1;
          }
        }
      }
      let trackIds = result2.playlist.trackIds;
      detaildivbodyheader.childNodes[3].innerHTML = trackIds.length + '首歌';
      detaildivbodyheader.childNodes[3].style.fontSize = '10px';
      detaildivbodyheader.childNodes[3].style.color = 'rgb(173, 170, 170)';
      detaildivbodyheader.childNodes[5].innerHTML = '播放:' + result2.playlist.playCount + '次';
      detaildivbodyheader.childNodes[5].style.float = 'right';
      detaildivbodyheader.childNodes[5].style.fontSize = '15px';
      detaildivbodyheader.childNodes[5].style.color = 'rgb(223, 134, 134)';
      detaildiv2.style.height = (510 + trackIds.length * 23.88) + 'px';
      detaildiv.style.height = (530 + trackIds.length * 23.88) + 10000 + 'px';
      detaildivbody.style.height = trackIds.length * 23.88 + 'px';
      for (let i = 0; i < trackIds.length; i++) {
        let response3 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i].id, {
          method: "POST"
        })
        let result3 = await response3.json();  ///////////////////////////////////////////////
        let response4 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i].id, {
          method: "POST"
        })
        let result4 = await response4.json();
        let tr = document.createElement('tr');
        songlisttbody.appendChild(tr);
        for (let m = 0; m < 5; m++) {
          let td = document.createElement("td");
          let div = document.createElement("div");
          td.appendChild(div);
          tr.appendChild(td);
        }
        let div1 = tr.childNodes[0].querySelector('div');
        let div2 = tr.childNodes[1].querySelector('div');
        let div3 = tr.childNodes[2].querySelector('div');
        let div4 = tr.childNodes[3].querySelector('div');
        let div5 = tr.childNodes[4].querySelector('div');
       
        div1.style.color = 'rgb(202, 199, 199);';
        controlsprogressbartwolong.onmousedown = (event) => {
          let width = event.clientX - controlsprogressbar.getBoundingClientRect().left;
          let rata = width / 450;
          let seconds = result3.songs[0].dt;
          let time = parseInt(seconds * rata / 1000);
          if (width < 450) {
            audio.currentTime = time;
            controlsprogressbarreally.style.width = event.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
          } else if (width = 450) {
            controlsplay.innerHTML = '';
            flag5 = 1;
          }

        }
        controlsprogressbartwocircle1.onmousedown = () => {
          controlsprogressbar.onmousemove = (event2) => {
            let width2 = event2.clientX - controlsprogressbar.getBoundingClientRect().left;
            let rata2 = width2 / 450;
            let seconds2 = result3.songs[0].dt;
            let time2 = parseInt(seconds2 * rata2 / 1000)
            if (width2 < 450) {
              audio.currentTime = time2;
              controlsprogressbarreally.style.width = event2.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
              document.onmouseup = () => {
                controlsprogressbar.onmousemove = null;
              }
            } else if (width2 = 450) {
              controlsplay.innerHTML = '';
              flag5 = 1;
            }
          }
        }
        div1.onclick = () => {
          recordid = trackIds[i].id;
          controlsimgT.src = result3.songs[0].al.picUrl;
          controlsprogressbarone.childNodes[1].innerHTML = result3.songs[0].name;
          controlsprogressbarone.childNodes[2].innerHTML = result3.songs[0].ar[0].name;
          audio.src = result4.data[0].url;
          controls.style.display = 'block';
          volumediv.style.display = 'none';
          audio.play();
          controlsplay.innerHTML = '';
          flag5 = 0;
          controlsprogressbarreally.style.width = 0;
          let Timer = setInterval(() => {
            let length = 450 / (result3.songs[0].dt / 1000);
            let controlswidth = controlsprogressbarreally.offsetWidth;
            controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
            if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
              clearInterval(Timer)
            }
          }, 1000);
          clearInterval(songlisttbody.getAttribute('data-timer-id'));
          songlisttbody.setAttribute('data-timer-id', Timer);
          controlsleft.onclick = async () => {
            let response5 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i - 1].id, {
              method: "POST"
            })
            let result5 = await response5.json();
            let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i - 1].id, {
              method: "POST"
            })
            let result31 = await response31.json();
            recordid = trackIds[i - 1].id;
            // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
            let s1 = parseInt(result31.songs[0].dt / 1000) % 60;
            let m1 = parseInt(parseInt(result31.songs[0].dt / 1000) / 60);
            if (s1 < 10 && m1 < 10) {
              controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
            }
            else if (s1 > 10 && m1 > 10) {
              controlstime2.innerHTML = m1 + ':' + s1;
            }
            else if (s1 < 10 && m1 > 10) {

              controlstime2.innerHTML = m1 + ':0' + s1;
            }
            else if (s1 > 10 && m1 < 10) {
              controlstime2.innerHTML = '0' + m1 + ':' + s1;
            }
            controlsprogressbarreally.style.width = 0;
            let Timer2 = setInterval(() => {
              let length = 450 / (result31.songs[0].dt / 1000);
              let controlswidth = controlsprogressbarreally.offsetWidth;
              controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
              if (controlswidth >= 445 || audio.paused) {
                clearInterval(Timer2)
              }
            }, 1000);
            clearInterval(songlisttbody.getAttribute('data-timer-id'));
            songlisttbody.setAttribute('data-timer-id', Timer2);
            controlsprogressbarreally.style.width = 0;
            controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
            controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
            controlsimgT.src = result31.songs[0].al.picUrl;
            audio.src = result5.data[0].url;
            controls.style.display = 'block';
            audio.play();
            controlsplay.innerHTML = '';
            i--;
          }
          controlsright.onclick = async () => {
            let response6 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i + 1].id, {
              method: "POST"
            })
            let result6 = await response6.json();
            let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i + 1].id, {
              method: "POST"
            })
            let result32 = await response32.json();
            recordid = trackIds[i + 1].id;
            let s1 = parseInt(result32.songs[0].dt / 1000) % 60;
            let m1 = parseInt(parseInt(result32.songs[0].dt / 1000) / 60);
            if (s1 < 10 && m1 < 10) {
              controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
            }
            else if (s1 > 10 && m1 > 10) {
              controlstime2.innerHTML = m1 + ':' + s1;
            }
            else if (s1 < 10 && m1 > 10) {

              controlstime2.innerHTML = m1 + ':0' + s1;
            }
            else if (s1 > 10 && m1 < 10) {
              controlstime2.innerHTML = '0' + m1 + ':' + s1;
            }
            controlsprogressbarreally.style.width = 0;
            let Timer3 = setInterval(() => {
              let length = 450 / (result32.songs[0].dt / 1000);
              let controlswidth = controlsprogressbarreally.offsetWidth;
              controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
              if (controlswidth >= 445 || audio.paused) {
                clearInterval(Timer3)
              }
            }, 1000);
            clearInterval(songlisttbody.getAttribute('data-timer-id'));
            songlisttbody.setAttribute('data-timer-id', Timer3);
            controlsprogressbarreally.style.width = 0;
            controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
            controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
            controlsimgT.src = result32.songs[0].al.picUrl;
            audio.src = result6.data[0].url;
            controls.style.display = 'block';
            audio.play();
            controlsplay.innerHTML = '';
            i++;
          }
          setInterval(() => {
            let time = formatSeconds(parseInt(audio.currentTime));
            controlstime1.innerHTML = time + '/'
          }, 1000);
          let s1 = parseInt(result3.songs[0].dt / 1000) % 60;
          let m1 = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
          if (s1 < 10 && m1 < 10) {
            controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
          }
          else if (s1 > 10 && m1 > 10) {
            controlstime2.innerHTML = m1 + ':' + s1;
          }
          else if (s1 < 10 && m1 > 10) {

            controlstime2.innerHTML = m1 + ':0' + s1;
          }
          else if (s1 > 10 && m1 < 10) {
            controlstime2.innerHTML = '0' + m1 + ':' + s1;
          }
        }
        controlsplay.onclick = () => {
          if (flag5) {
            audio.play();
            controlsplay.innerHTML = '';
            flag5 = 0;
            Timer4 = setInterval(() => {
              let length = 450 / (result3.songs[0].dt / 1000);
              let controlswidth = controlsprogressbarreally.offsetWidth;
              controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
              if (controlswidth >= 445 || audio.paused) {
                clearInterval(Timer4)
              }
            }, 1000);
            clearInterval(songlisttbody.getAttribute('data-timer-id'));
            songlisttbody.setAttribute('data-timer-id', Timer4);
          }
          else {
            controlsplay.innerHTML = '';
            audio.pause();
            flag5 = 1;
          }
        }
        if (i % 2 == 0) {
          tr.style.backgroundColor = 'rgb(221, 220, 220)';
        }
        div1.innerHTML = '&nbsp;&nbsp;&nbsp;' + (i + 1);
        tr.className = 'body-songlist-tr-body';
        //歌名
        if (result3.songs[0].name.length > 30) {
          div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name.substring(0, 28) + '...';
        }
        else {
          div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name;
        }
        div2.title = result3.songs[0].name;
        //时间
        let s = parseInt(result3.songs[0].dt / 1000) % 60;
        let m = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
        if (s < 10 && m < 10) {
          div3.innerHTML = '0' + m + ':' + '0' + s;
        }
        else if (s > 10 && m > 10) {
          div3.innerHTML = m + ':' + s;
        }
        else if (s < 10 && m > 10) {
          div3.innerHTML = m + ':0' + s;
        }
        else if (s > 10 && m < 10) {
          div3.innerHTML = '0' + m + ':' + s;
        }
        //作者
        if (result3.songs[0].ar[0].name.length > 15) {
          div4.innerHTML = result3.songs[0].name.substring(0, 13) + '...';
        }
        else {
          div4.innerHTML = result3.songs[0].ar[0].name;
        }
        div4.title = result3.songs[0].ar[0].name;
        //专辑
        if (result3.songs[0].al.name.length > 26) {
          div5.innerHTML = result3.songs[0].al.name.substring(0, 24) + '...';
        }
        else {
          div5.innerHTML = result3.songs[0].al.name;
        }
        div5.title = result3.songs[0].al.name;
      }
    })
    img.addEventListener("click", async () => {
      let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
        method: "POST"
      })
      let result2 = await response2.json();
      if (result2.hotComments.length != 0) {
        for (let b = 0; b < result2.hotComments.length; b++) {
          let onecommand = document.createElement("div");
          let headportrait = document.createElement("img");
          let onecommandlf = document.createElement("div");
          let onecommandlf1 = document.createElement("div");
          let onecommandlf2 = document.createElement("div");
          let onecommandlf3 = document.createElement("div");
          let onecommandlf1a = document.createElement("a");
          let onecommandlf1span = document.createElement("span");
          let onecommandlf2a = document.createElement("a");
          let onecommandlf2span = document.createElement("span");
          let triangle = document.createElement("div");
          let timestr = document.createElement("span");
          let likedcount = document.createElement("span");
          let likedcountspan = document.createElement("span");
          let l = document.createElement("span");
          let response = document.createElement("span");
          let hr = document.createElement("hr");
          onecommandlf1.className = 'one-commandlf1';
          onecommandlf1a.className = 'one-command-lf1a';
          onecommandlf2a.className = 'one-command-lf1a';
          onecommand.className = 'one-command';
          headportrait.className = 'head-portrait';
          onecommandlf.className = 'one-command-lf';
          onecommandlf1span.className = 'one-command-lf1span';
          onecommandlf2span.className = 'one-command-lf2span';
          onecommandlf2.className = 'one-command-lf2';
          onecommandlf3.className = 'one-command-lf3';
          triangle.className = 'triangle';
          timestr.className = 'timestr';
          likedcount.className = 'likedcount';
          likedcountspan.className = 'likedcountspan';
          l.className = 'l';
          response.className = 'response';
          hr.className = 'hr';
          commandbodybody.appendChild(onecommand);
          commandbodybody.appendChild(hr);
          onecommand.appendChild(headportrait);
          onecommand.appendChild(onecommandlf);
          onecommandlf.appendChild(onecommandlf1);
          onecommandlf.appendChild(onecommandlf2);
          onecommandlf.appendChild(onecommandlf3);
          onecommandlf1.appendChild(onecommandlf1a);
          onecommandlf1.appendChild(onecommandlf1span);
          onecommandlf2.appendChild(onecommandlf2a);
          onecommandlf2.appendChild(onecommandlf2span);
          onecommandlf2.appendChild(triangle);
          onecommandlf3.appendChild(timestr);
          onecommandlf3.appendChild(likedcount);
          onecommandlf3.appendChild(l);
          onecommandlf3.appendChild(response);
          onecommandlf3.appendChild(likedcountspan);
          timestr.innerHTML = result2.hotComments[b].timeStr;
          likedcount.innerHTML = '';
          likedcountspan.innerHTML = "(" + result2.hotComments[b].likedCount + ")";
          l.innerHTML = "|";
          response.innerHTML = '回复';
          onecommandlf1span.innerHTML = ":" + result2.hotComments[b].content;
          onecommandlf1a.innerHTML = result2.hotComments[b].user.nickname;
          headportrait.src = result2.hotComments[b].user.avatarUrl;
          if (result2.hotComments[b].beReplied.length != 0) {
            onecommandlf2a.innerHTML = result2.hotComments[b].beReplied[0].user.nickname;
            onecommandlf2span.innerHTML = ":" + result2.hotComments[b].beReplied[0].content;
            onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
            setTimeout(() => {
              onecommand.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
              onecommandlf.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
            }, 500)
          }
          else {
            onecommandlf2.style.display = 'none';
          }
          setTimeout(() => {
            onecommand.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
            onecommandlf.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
          }, 500)
        }
      }
      else {                                                                   /////////////////////////////////////////////////////////////////////
        commandbodygood.style.display = 'none';
      }
    })
    img.addEventListener("click", async () => {
      let response21 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
        method: "POST"
      })
      let result21 = await response21.json();
      let commandbuttonsafist = document.createElement('a');
      let commandbuttonsalast = document.createElement('a');
      commandbuttonsafist.className = 'commandbuttonsafist';
      commandbuttonsalast.className = 'commandbuttonsalast';
      commandbuttons.appendChild(commandbuttonsafist);
      commandbuttonsafist.innerHTML = '&lt;上一页';
      commandbuttonsalast.innerHTML = '下一页&gt;';
      for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
        let commandbuttonsa = document.createElement('a');
        commandbuttonsa.className = 'commandbuttonsa';
        commandbuttons.appendChild(commandbuttonsa);
        commandbuttonsa.innerHTML = a + 1;
        commandbuttonsa.setAttribute('number', a);
      }
      if ((parseInt(result21.total / 20) + 1) > 9) {
        let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
        commandbuttonsas[8].innerHTML = '...';
        commandbuttonsas[8].style.border = 'none';
        commandbuttonsas[8].style.width = '5px';
        commandbuttonsas[8].style.marginLeft = 0;
        for (let d = 9; d < parseInt(result21.total / 20); d++) {
          commandbuttonsas[d].style.display = 'none';
        }
      }
      commandbuttons.appendChild(commandbuttonsalast);
      let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
      commandbuttonsas[0].style.backgroundColor = 'red';
      commandbuttonsas[0].style.color = 'white';
      let total = (parseInt(result21.total / 20) + 1);
      for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
        commandbuttonsas[a].addEventListener('click', () => {
          flag7 = commandbuttonsas[a].getAttribute('number');
          for (let c = 0; c < (parseInt(result21.total / 20) + 1); c++) {
            commandbuttonsas[c].style.backgroundColor = 'white';
            commandbuttonsas[c].style.color = 'black';
          }
          commandbuttonsas[a].style.backgroundColor = 'red';
          commandbuttonsas[a].style.color = 'white';
        });

        commandbuttonsas[a].addEventListener('click', () => {
          flag7 = parseInt(commandbuttonsas[a].getAttribute('number'));
          if (flag7 >= 5 && flag7 <= (parseInt(result21.total / 20) - 5) && total >= 10) {
            commandbuttonsas[8].innerHTML = '9';
            commandbuttonsas[8].style.width = '20px';
            commandbuttonsas[8].style.border = '1px solid black';
            commandbuttonsas[8].style.marginLeft = '5px';
            commandbuttonsas[1].innerHTML = '...';
            commandbuttonsas[1].style.border = 'none';
            commandbuttonsas[1].style.width = '5px';
            commandbuttonsas[1].style.marginLeft = 0;
            commandbuttonsas[total - 2].style.display = 'inline-block';
            commandbuttonsas[total - 2].innerHTML = '...';
            commandbuttonsas[total - 2].style.border = 'none';
            commandbuttonsas[total - 2].style.width = '5px';
            commandbuttonsas[total - 2].style.marginLeft = 0;
            if (flag7 >= flag8) {
              for (let d = 2; d < flag7 - 3; d++) {
                commandbuttonsas[d].style.display = 'none';
              }
              for (let f = flag7; f <= parseInt(flag7) + 3; f++) {
                commandbuttonsas[f].style.display = 'inline-block';
              }
              flag8 = flag7;
            }
            else {
              for (let d = flag7 + 4; d < total - 2; d++) {
                commandbuttonsas[d].style.display = 'none';
              }
              for (let f = flag7; f >= parseInt(flag7) - 3; f--) {
                commandbuttonsas[f].style.display = 'inline-block';
              }
              flag8 = flag7;
            }
          }
          else if (flag7 < 5 && total >= 10) {
            commandbuttonsas[8].style.display = 'inline-block'
            commandbuttonsas[8].innerHTML = '...';
            commandbuttonsas[8].style.border = 'none';
            commandbuttonsas[8].style.width = '5px';
            commandbuttonsas[8].style.marginLeft = 0;
            commandbuttonsas[1].innerHTML = '2';
            commandbuttonsas[1].style.border = '1px solid black';
            commandbuttonsas[1].style.width = '20px';
            commandbuttonsas[1].style.marginLeft = '5px';
            for (let x = 0; x < 8; x++) {
              commandbuttonsas[x].style.display = 'inline-block';
            }
            for (let x = 9; x < total - 1; x++) {
              commandbuttonsas[x].style.display = 'none';
            }
          }
          else if (flag7 > (parseInt(result21.total / 20) - 5) && total >= 10) {
            commandbuttonsas[total - 2].style.display = 'inline-block';
            commandbuttonsas[total - 2].innerHTML = total - 1;
            commandbuttonsas[total - 2].style.border = '1px solid black';
            commandbuttonsas[total - 2].style.width = '20px';
            commandbuttonsas[total - 2].style.marginLeft = '5px';
            commandbuttonsas[1].display = 'inline-block';
            commandbuttonsas[1].innerHTML = '...';
            commandbuttonsas[1].style.border = 'none';
            commandbuttonsas[1].style.width = '5px';
            commandbuttonsas[1].style.marginLeft = 0;
            for (let x = total - 8; x < total; x++) {
              commandbuttonsas[x].style.display = 'inline-block';
            }
            for (let x = 2; x < total - 8; x++) {
              commandbuttonsas[x].style.display = 'none';
            }
          }
        })
      }
      let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
        method: "POST"
      })
      let result2 = await response2.json();
      if (result2.comments.length != 0) {
        for (let b = 0; b < result2.comments.length; b++) {
          let onecommand = document.createElement("div");
          let headportrait = document.createElement("img");
          let onecommandlf = document.createElement("div");
          let onecommandlf11 = document.createElement("div");
          let onecommandlf2 = document.createElement("div");
          let onecommandlf3 = document.createElement("div");
          let onecommandlf1a = document.createElement("a");
          let onecommandlf1span = document.createElement("span");
          let onecommandlf2a = document.createElement("a");
          let onecommandlf2span = document.createElement("span");
          let triangle = document.createElement("div");
          let timestr = document.createElement("span");
          let likedcount = document.createElement("span");
          let likedcountspan = document.createElement("span");
          let l = document.createElement("span");
          let response = document.createElement("span");
          let hr = document.createElement("hr");
          onecommandlf11.className = 'one-commandlf1';
          onecommandlf1a.className = 'one-command-lf1a';
          onecommandlf2a.className = 'one-command-lf1a';
          onecommand.className = 'one-command';
          headportrait.className = 'head-portrait';
          onecommandlf.className = 'one-command-lf';
          onecommandlf1span.className = 'one-command-lf1span';
          onecommandlf2span.className = 'one-command-lf2span';
          onecommandlf2.className = 'one-command-lf2';
          onecommandlf3.className = 'one-command-lf3';
          triangle.className = 'triangle';
          timestr.className = 'timestr';
          likedcount.className = 'likedcount';
          likedcountspan.className = 'likedcountspan';
          l.className = 'l';
          response.className = 'response';
          hr.className = 'hr';
          commandbodybody2.appendChild(onecommand);
          commandbodybody2.appendChild(hr);
          onecommand.appendChild(headportrait);
          onecommand.appendChild(onecommandlf);
          onecommandlf.appendChild(onecommandlf11);
          onecommandlf.appendChild(onecommandlf2);
          onecommandlf.appendChild(onecommandlf3);
          onecommandlf11.appendChild(onecommandlf1a);
          onecommandlf11.appendChild(onecommandlf1span);
          onecommandlf2.appendChild(onecommandlf2a);
          onecommandlf2.appendChild(onecommandlf2span);
          onecommandlf2.appendChild(triangle);
          onecommandlf3.appendChild(timestr);
          onecommandlf3.appendChild(likedcount);
          onecommandlf3.appendChild(l);
          onecommandlf3.appendChild(response);
          onecommandlf3.appendChild(likedcountspan);
          timestr.innerHTML = result2.comments[b].timeStr;
          likedcount.innerHTML = '';
          likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
          l.innerHTML = "|";
          response.innerHTML = '回复';
          onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
          onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
          headportrait.src = result2.comments[b].user.avatarUrl;
          together2.innerHTML = '(' + result2.total + ')';
          commandtogether.innerHTML = "共" + result2.total + "条评论";
          if (result2.comments[b].beReplied.length != 0) {
            onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
            onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
            setTimeout(() => {
              onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
              onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
            }, 500)
          }
          else {
            onecommandlf2.style.display = 'none';
          }
          setTimeout(() => {
            onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
            onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
          }, 500)
        }
      }
      else {                                                              /////////////////////////////////////////////////////////////////////
        commandbodycommon.style.display = 'none';
      }
      detailcommand.style.height = result2.hotComments.length * 150 + result2.comments.length * 150 + "px";
      setTimeout(() => {
        detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px';
      }, 200);

      let u = 0;
      setInterval(async () => {
        if (u != flag7) {

          let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id + '&offset=' + flag7 * 20 + '&limit=20', {
            method: "POST"
          })
          let result2 = await response2.json();
          let response2a = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
            method: "POST"
          })
          let result2a = await response2a.json();
          for (let g = 1; g <= result2.comments.length * 2; g++) {
            commandbodybody2.childNodes[1].remove();
          }
          if (result2.comments.length != 0) {
            for (let b = 0; b < result2.comments.length; b++) {
              let onecommand = document.createElement("div");
              let headportrait = document.createElement("img");
              let onecommandlf = document.createElement("div");
              let onecommandlf11 = document.createElement("div");
              let onecommandlf2 = document.createElement("div");
              let onecommandlf3 = document.createElement("div");
              let onecommandlf1a = document.createElement("a");
              let onecommandlf1span = document.createElement("span");
              let onecommandlf2a = document.createElement("a");
              let onecommandlf2span = document.createElement("span");
              let triangle = document.createElement("div");
              let timestr = document.createElement("span");
              let likedcount = document.createElement("span");
              let likedcountspan = document.createElement("span");
              let l = document.createElement("span");
              let response = document.createElement("span");
              let hr = document.createElement("hr");
              onecommandlf11.className = 'one-commandlf1';
              onecommandlf1a.className = 'one-command-lf1a';
              onecommandlf2a.className = 'one-command-lf1a';
              onecommand.className = 'one-command';
              headportrait.className = 'head-portrait';
              onecommandlf.className = 'one-command-lf';
              onecommandlf1span.className = 'one-command-lf1span';
              onecommandlf2span.className = 'one-command-lf2span';
              onecommandlf2.className = 'one-command-lf2';
              onecommandlf3.className = 'one-command-lf3';
              triangle.className = 'triangle';
              timestr.className = 'timestr';
              likedcount.className = 'likedcount';
              likedcountspan.className = 'likedcountspan';
              l.className = 'l';
              response.className = 'response';
              hr.className = 'hr';
              commandbodybody2.appendChild(onecommand);
              commandbodybody2.appendChild(hr);
              onecommand.appendChild(headportrait);
              onecommand.appendChild(onecommandlf);
              onecommandlf.appendChild(onecommandlf11);
              onecommandlf.appendChild(onecommandlf2);
              onecommandlf.appendChild(onecommandlf3);
              onecommandlf11.appendChild(onecommandlf1a);
              onecommandlf11.appendChild(onecommandlf1span);
              onecommandlf2.appendChild(onecommandlf2a);
              onecommandlf2.appendChild(onecommandlf2span);
              onecommandlf2.appendChild(triangle);
              onecommandlf3.appendChild(timestr);
              onecommandlf3.appendChild(likedcount);
              onecommandlf3.appendChild(l);
              onecommandlf3.appendChild(response);
              onecommandlf3.appendChild(likedcountspan);
              timestr.innerHTML = result2.comments[b].timeStr;
              likedcount.innerHTML = '';
              likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
              l.innerHTML = "|";
              response.innerHTML = '回复';
              onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
              onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
              headportrait.src = result2.comments[b].user.avatarUrl;
              together2.innerHTML = '(' + result2.total + ')';
              commandtogether.innerHTML = "共" + result2.total + "条评论";
              if (result2.comments[b].beReplied.length != 0) {
                onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
                onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
                setTimeout(() => {
                  onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
                  onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                }, 500)
              }
              else {
                onecommandlf2.style.display = 'none';
              }
              setTimeout(() => {
                onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
              }, 500)
            }
          }
          else {                                                              /////////////////////////////////////////////////////////////////////
            commandbodycommon.style.display = 'none';
          }
          detailcommand.style.height = result2a.hotComments.length * 150 + 10000 + "px";
          setTimeout(() => { detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px'; }, 200)
          u = flag7;
        }
      }, 1000)
    })
  }
  // let controlsimg = document.querySelector(".controls-img");
  let imgfloat = document.querySelector(".imgfloat");
  let songdetailimg = document.querySelector(".songdetail-img");
  controlsimg.addEventListener("mouseover", () => {
    if(flag11==1){
    imgfloat.style.opacity = '0.6';
    imgfloat.innerHTML = '⬆';
    }
  })
  controlsimg.addEventListener("mouseleave", () => {
    
    if(flag11==1){
      console.log(1)
    imgfloat.style.opacity = '0';
    imgfloat.innerHTML = '';
   
    }
  })


  controlsimg.addEventListener("click", async () => {
    let songdetail=document.querySelector(".songdetail");
    let songdetailwords=document.querySelector(".songdetail-words");
    let songdetailwordsreally=document.querySelector(".songdetail-wordsreally");
    let songname=document.querySelector(".songname");
    let songsheetname=document.querySelector(".songsheetname");
    if(flag11==1){
    songdetail.style.display='block'
    detaildiv2.style.display = 'none';
    imgfloat.style.opacity = '1';
    imgfloat.innerHTML = '⬇';
    flag11=0;
    }else{
     songdetail.style.display='none'
     detaildiv2.style.display = 'block';
     flag11=1;
    }
    setInterval(async () => {
      if (recordid != recordid2) {
        let responsedetail = await fetch("http://redrock.udday.cn:2022/song/detail?ids=" + recordid, { method: "POST" });
        let resultdetail = await responsedetail.json();
        songdetailimg.src = resultdetail.songs[0].al.picUrl;
        songname.innerHTML=resultdetail.songs[0].name;
        songsheetname.innerHTML=resultdetail.songs[0].ar[0].name+'-'+resultdetail.songs[0].al.name;
        recordid2 = recordid;
        let responsewords= await fetch("http://redrock.udday.cn:2022/lyric?id=" + recordid, { method: "POST" });
        let resultwords = await responsewords.json();
        let songwords2=resultwords.lrc.lyric.split("\n");
        let ps=songdetailwordsreally.querySelectorAll('p');
        for(let r=0;r<ps.length;r++){
          ps[r].remove();
        }
        for(let g=0;g<songwords2.length-1;g++){
        let songwords3=songwords2[g].split("]");
        let songwords4;
        let songwords5;
        let songwords6;
        let songdetailwordsp=document.createElement("p");
         songwords4=songwords3[0].split('[');
         songwords5=songwords4[1].split('.');
         songwords6=songwords5[0].split(':');
         songdetailwordsp.id='time'+(parseInt(songwords6[0]*60)+parseInt(songwords6[1]));
         songdetailwordsp.innerHTML=songwords3[1];
         songdetailwordsreally.appendChild(songdetailwordsp);
        }
      }
    }, 200)
   
    audio.addEventListener("timeupdate",()=>{
      let curtime=parseInt(audio.currentTime);
      if(document.querySelector('#time'+curtime)&&flag10==1){
        let ps=songdetailwordsreally.querySelectorAll('p');
        flag9++;
        for(let h=0;h<ps.length;h++){
          ps[h].style.fontSize='20px';
          ps[h].style.fontWight='300';
          ps[h].style.color='rgb(192, 192, 192)';
          ps[h].setAttribute("top",h*46);
          ps[h].setAttribute("time",ps[h].id.replace("time",''));
        }
        document.querySelector('#time'+curtime).style.fontSize='30px';
        document.querySelector('#time'+curtime).style.fontWight='500';
        document.querySelector('#time'+curtime).style.color='black';
        setInterval(()=>{
          for(let a=0;a<ps.length;a++){
            if(parseInt(audio.currentTime)==ps[a].getAttribute('time')){
              songdetailwordsreally.style.top=-ps[a].getAttribute('top')+'px'
            }
          }
         
        },1000)
        flag10=0;
        setTimeout(()=>{
         flag10=1
        },1000)
      }
    })
   
    let rotateVal = 0;
    if(flag5==0){
    let songdetailimg2d = setInterval(() => {
      rotateVal += 1;
      songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
      songdetailimg.style.transition = '1s linear';
    }, 100)
    clearInterval(songdetailimg.getAttribute("name2d"));
    songdetailimg.setAttribute("name2d", songdetailimg2d);
    
  }
    let controlsplay=document.querySelector(".controls-play");
    let controlsleft=document.querySelector(".controls-left");
    let controlsright=document.querySelector(".controls-right");
  
    controlsplay.addEventListener("click",()=>{
      if(flag5){
        clearInterval(songdetailimg.getAttribute("name2d"));
      }else{
        let songdetailimg2d = setInterval(() => {
          rotateVal += 1;
          songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
          songdetailimg.style.transition = '1s linear';
        }, 100)
        clearInterval(songdetailimg.getAttribute("name2d"));
        songdetailimg.setAttribute("name2d", songdetailimg2d);
      }
    })
    controlsleft.addEventListener("click",()=>{
      flag9=0;
      let songdetailimg2d = setInterval(() => {
        rotateVal += 1;
        songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
        songdetailimg.style.transition = '1s linear';
      }, 100)
      clearInterval(songdetailimg.getAttribute("name2d"));
      songdetailimg.setAttribute("name2d", songdetailimg2d);
    })
    controlsright.addEventListener("click",()=>{
      flag9=0;
      let songdetailimg2d = setInterval(() => {
        rotateVal += 1;
        songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
        songdetailimg.style.transition = '1s linear';
      }, 100)
      clearInterval(songdetailimg.getAttribute("name2d"));
      songdetailimg.setAttribute("name2d", songdetailimg2d);
    })
  })

  let volumelong = document.querySelector("#volume-long");
  let volumereally = document.querySelector("#volume-really");
  let volumebigc = document.querySelector("#volume-bigc");
  let volumesmallc = document.querySelector("#volume-smallc");
  let flag6 = 1;
  volumeico.onclick = () => {
    if (flag6) {
      volumediv.style.display = 'block';
      flag6 = 0;
    }
    else {
      volumediv.style.display = 'none';
      flag6 = 1;
    }
  }

  volumelong.onmousedown = (event3) => {
    let volumeHeight = getClientHeight() - event3.clientY - 50;
    volumereally.style.height = volumeHeight + 'px';
    audio.volume = volumeHeight / 80;
    if (volumeHeight >= 80) {
      volumereally.onmousedown = () => {
        volumelong.onmousedown = null;
      }
      volumelong.onmousedown = null;
      audio.volume = 1;
    } else if (volumeHeight <= 0) {
      audio.volume = 0;
    }

  }
  volumebigc.onmousedown = () => {
    volumediv.onmousemove = (event4) => {
      let volumeHeight = getClientHeight() - event4.clientY - 50;
      volumereally.style.height = volumeHeight + 'px';
      audio.volume = volumeHeight / 80;
      if (volumereally.offsetHeight >= 80) {
        volumediv.onmousemove = null;
        audio.volume = 1;
      }
      else if (volumeHeight <= 0) {
        audio.volume = 0;
      }
    }
    document.onmouseup = () => {
      volumediv.onmousemove = null;
    }
    volumereally.onmousemove = () => {
      if (volumereally.offsetHeight >= 80) {
        volumediv.onmousemove = null;
        audio.volume = 1;
      }
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  recommandation.style.backgroundColor = 'rgb(54, 53, 53)';
  recommandation.addEventListener("click",()=>{
    searchbigdiv.style.display='none';
  })
  songsheet.addEventListener('click', async () => {
    songsheet.style.backgroundColor = 'rgb(54, 53, 53)';
    circlebigdiv.style.display = 'none';
    recommandation.style.backgroundColor = 'rgb(194, 12, 12)';
    hotsong.style.display = 'none';
    hotsongbody.style.display = 'none';
    let songdetail=document.querySelector(".songdetail");
    songdetail.style.display='none';
    searchbigdiv.style.display='none';
      detaildiv2.style.display = 'block';
    for (let h = 0; h < 3; h++) {
      lis[h].style.backgroundColor = 'white';
    }
    lis[0].style.backgroundColor = 'red';
    if (songsheetbody.querySelectorAll("div").length > 8) {
      let songsheetbodydiv = songsheetbody.querySelectorAll("div");
      for (let i = 0; i < songsheetbody.querySelectorAll("div").length; i++) {
        songsheetbodydiv[i].style.display = 'none';
      }
    }
    songsheetdiv.style.display = 'block';
    detaildiv.style.display = 'none';
    let count = 1;
    if (count == 1) {
      let response = await fetch('http://redrock.udday.cn:2022/top/playlist/highquality?limit=35', {
        method: 'POST'
      });
      let result = await response.json();
      if (songlisttbody.querySelectorAll("tr").length > 1) {
        let songlisttbodytr = songlisttbody.querySelectorAll("tr");
        for (let i = 0; i < songlisttbody.querySelectorAll("tr").length; i++) {
          songlisttbodytr[i].style.display = 'none';
        }
      }
      for (let i = 0; i < 35; i++) {
        let divs = document.createElement('div');
        let spans = document.createElement('span');
        let imgs = document.createElement('img');
        let ps = document.createElement('p');
        if (result.playlists[i].playCount.length <= 4) {
          ps.innerHTML = result.playlists[i].playCount;
        } else {
          ps.innerHTML = parseInt(result.playlists[i].playCount / 1000) + '万';
        }
        imgs.src = result.playlists[i].coverImgUrl;
        songsheetbody.appendChild(divs);
        divs.appendChild(imgs);
        divs.appendChild(spans);
        divs.appendChild(ps);
        spans.innerHTML = result.playlists[i].name;
        let id = result.playlists[i].id;
        imgs.addEventListener('click', async () => {
          let response2 = await fetch('http://redrock.udday.cn:2022/playlist/detail?id=' + id, {
            method: "POST"
          })
          let result2 = await response2.json();  ///////////////////////////////////////////////
          // let imgid=img
          detaildiv.style.display = 'block';
          songsheetdiv.style.display = 'none';
          headerportraitleftimg.src = result2.playlist.coverImgUrl;
          headerrightheaderspan.innerHTML = result2.playlist.name;
          headerrightpersontimeimg.src = result2.playlist.creator.avatarUrl;
          headerrightpersontimea.innerHTML = result2.playlist.creator.nickname;
          headerrightpersontimespan.innerHTML = dateFormat(result2.playlist.createTime, 0) + ' 创建';
          buttonscollection.innerHTML = '(' + result2.playlist.subscribedCount + ')';
          buttonsshare.innerHTML = '(' + result2.playlist.commentCount + ')';
          buttonscommand.innerHTML = '(' + result2.playlist.commentCount + ')';
          headerrighttags.childNodes[3].innerHTML = result2.playlist.tags[0];
          headerrighttags.childNodes[5].innerHTML = result2.playlist.tags[1];
          headerrighttags.childNodes[7].innerHTML = result2.playlist.tags[2];
          headerrightintroduce.childNodes[1].innerHTML = "介绍:" + result2.playlist.description;
          if (headerrightintroduce.childNodes[1].offsetHeight > 190) {
            let num = headerrightintroduce.childNodes[1].offsetHeight + 190;
            open.style.display = "block";
            let flag4 = 1;
            open.onclick = () => {
              if (flag4) {
                headerrightintroduce.style.overflow = 'visible';
                opena.innerHTML = "收起";
                open.style.top = num + 'px';
                detailcommand.style.top = detaildiv2.offsetHeight - 300 + 'px';
                detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px'
                detaildivbody.style.top = num - 300 + 'px';
                const _style_ = document.createElement('style')
                _style_.innerText = `.open-a:after { content: ""}`
                document.body.appendChild(_style_)
                flag4 = 0;
              }
              else {
                headerrightintroduce.style.overflow = 'hidden';
                opena.innerHTML = "展开";
                open.style.top = 330 + 'px';
                detaildivbody.style.top = 0 + 'px';
                const _style_ = document.createElement('style');
                _style_.innerText = `.open-a:after { content: ""}`
                document.body.appendChild(_style_)
                flag4 = 1;
              }
            }
          }
          // /playlist/track/all
          // /playlist/track/all?id=24381616&limit=10&offset=1
          let trackIds = result2.playlist.trackIds;
          detaildivbodyheader.childNodes[3].innerHTML = trackIds.length + '首歌';
          detaildivbodyheader.childNodes[3].style.fontSize = '10px';
          detaildivbodyheader.childNodes[3].style.color = 'rgb(173, 170, 170)';
          detaildivbodyheader.childNodes[5].innerHTML = '播放:' + result2.playlist.playCount + '次';
          detaildivbodyheader.childNodes[5].style.float = 'right';
          detaildivbodyheader.childNodes[5].style.fontSize = '15px';
          detaildivbodyheader.childNodes[5].style.color = 'rgb(223, 134, 134)';
          detaildiv2.style.height = (510 + trackIds.length * 23.88) + 'px';
          detaildiv.style.height = (530 + trackIds.length * 23.88) + 1000 + 'px';
          detaildivbody.style.height = trackIds.length * 23.88 + 'px';
          for (let i = 0; i < trackIds.length; i++) {
            let response3 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i].id, {
              method: "POST"
            })
            let result3 = await response3.json();
            let response4 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i].id, {
              method: "POST"
            })
            let result4 = await response4.json();
            let tr = document.createElement('tr');
            songlisttbody.appendChild(tr);
            for (let m = 0; m < 5; m++) {
              let td = document.createElement("td");
              let div = document.createElement("div");
              td.appendChild(div);
              tr.appendChild(td);
            }
            // let audio=document.createElement("audio");
            let controls = document.querySelector(".controls");
            let div1 = tr.childNodes[0].querySelector('div');
            let div2 = tr.childNodes[1].querySelector('div');
            let div3 = tr.childNodes[2].querySelector('div');
            let div4 = tr.childNodes[3].querySelector('div');
            let div5 = tr.childNodes[4].querySelector('div');
            let controlsdiv1 = document.querySelector(".controls-div1");
            let controlsdiv2 = document.querySelector(".controls-div2");
            // let controlsspan1=controlsdiv1.childNodes[0];
            // let controlsspan2=controlsdiv1.childNodes[1];
            // let controlsspan3=controlsdiv1.childNodes[2];
            let controlsspan4 = controlsdiv2.childNodes[0];
            // let controlsspan5=controlsdiv2.childNodes[1];
            // let controlsspan6=controlsdiv2.childNodes[2];
            let controlsplay = document.querySelector(".controls-play");
            let controlsleft = document.querySelector(".controls-left");
            let controlsright = document.querySelector(".controls-right");
            let controlsimg = document.querySelector(".controls-img");
            let controlsimgT = controlsimg.querySelector("img");
            let controlsprogressbar = document.querySelector(".controls-progressbar")
            let controlsprogressbarone = document.querySelector(".controls-progressbar-one");
            let controlsprogressbartwo = document.querySelector(".controls-progressbar-two");
            let controlsprogressbartwolong = document.querySelector(".controls-progressbar-two-long");
            let controlsprogressbarreally = document.querySelector(".controls-progressbar-really");
            let controlsprogressbartwocircle1 = document.querySelector(".controls-progressbar-two-circle1");
            let controlsprogressbartwocircle2 = document.querySelector(".controls-progressbar-two-circle2");
            let controlssmall = document.querySelector(".controls-small");
            let controlstime1 = document.querySelector(".controls-time1");
            let controlstime2 = document.querySelector(".controls-time2");
            div1.style.color = 'rgb(202, 199, 199);';
            controlsprogressbartwolong.onmousedown = (event) => {
              let width = event.clientX - controlsprogressbar.getBoundingClientRect().left;
              let rata = width / 450;
              let seconds = result3.songs[0].dt;
              let time = parseInt(seconds * rata / 1000);
              if (width < 450) {
                audio.currentTime = time;
                controlsprogressbarreally.style.width = event.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
              } else if (width = 450) {
                controlsplay.innerHTML = '';
                flag5 = 1;
              }

            }
            controlsprogressbartwocircle1.onmousedown = () => {
              controlsprogressbar.onmousemove = (event2) => {
                let width2 = event2.clientX - controlsprogressbar.getBoundingClientRect().left;
                let rata2 = width2 / 450;
                let seconds2 = result3.songs[0].dt;
                let time2 = parseInt(seconds2 * rata2 / 1000)
                if (width2 < 450) {
                  audio.currentTime = time2;
                  controlsprogressbarreally.style.width = event2.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
                  document.onmouseup = () => {
                    controlsprogressbar.onmousemove = null;
                  }
                } else if (width2 = 450) {
                  controlsplay.innerHTML = '';
                  flag5 = 1;
                }
              }
            }
            div1.onclick = () => {
              recordid = trackIds[i].id;
              controlsimgT.src = result3.songs[0].al.picUrl;
              controlsprogressbarone.childNodes[1].innerHTML = result3.songs[0].name;
              controlsprogressbarone.childNodes[2].innerHTML = result3.songs[0].ar[0].name;
              audio.src = result4.data[0].url;
              controls.style.display = 'block';
              audio.play();
              controlsplay.innerHTML = '';
              flag5 = 0;
              controlsprogressbarreally.style.width = 0;
              let Timer = setInterval(() => {
                let length = 450 / (result3.songs[0].dt / 1000);
                let controlswidth = controlsprogressbarreally.offsetWidth;
                controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                  clearInterval(Timer)
                }
              }, 1000);
              clearInterval(songlisttbody.getAttribute('data-timer-id'));
              songlisttbody.setAttribute('data-timer-id', Timer);
              controlsleft.onclick = async () => {
                recordid = trackIds[i-1].id;
                let response5 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i - 1].id, {
                  method: "POST"
                })
                let result5 = await response5.json();
                let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i - 1].id, {
                  method: "POST"
                })
                let result31 = await response31.json();
                // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                let s1 = parseInt(result31.songs[0].dt / 1000) % 60;
                let m1 = parseInt(parseInt(result31.songs[0].dt / 1000) / 60);
                if (s1 < 10 && m1 < 10) {
                  controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                }
                else if (s1 > 10 && m1 > 10) {
                  controlstime2.innerHTML = m1 + ':' + s1;
                }
                else if (s1 < 10 && m1 > 10) {

                  controlstime2.innerHTML = m1 + ':0' + s1;
                }
                else if (s1 > 10 && m1 < 10) {
                  controlstime2.innerHTML = '0' + m1 + ':' + s1;
                }
                controlsprogressbarreally.style.width = 0;
                Timer2 = setInterval(() => {
                  let length = 450 / (result31.songs[0].dt / 1000);
                  let controlswidth = controlsprogressbarreally.offsetWidth;
                  controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                  if (controlswidth >= 445 || audio.paused) {
                    clearInterval(Timer2)
                  }
                }, 1000);
                clearInterval(songlisttbody.getAttribute('data-timer-id'));
                songlisttbody.setAttribute('data-timer-id', Timer2);
                controlsprogressbarreally.style.width = 0;
                controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                controlsimgT.src = result31.songs[0].al.picUrl;

                audio.src = result5.data[0].url;
                controls.style.display = 'block';
                audio.play();
                controlsplay.innerHTML = '';
                i--;
              }
              controlsright.onclick = async () => {
                recordid = trackIds[i+1].id;
                let response6 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i + 1].id, {
                  method: "POST"
                })
                let result6 = await response6.json();
                let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i + 1].id, {
                  method: "POST"
                })
                let result32 = await response32.json();
                let s1 = parseInt(result32.songs[0].dt / 1000) % 60;
                let m1 = parseInt(parseInt(result32.songs[0].dt / 1000) / 60);
                if (s1 < 10 && m1 < 10) {
                  controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                }
                else if (s1 > 10 && m1 > 10) {
                  controlstime2.innerHTML = m1 + ':' + s1;
                }
                else if (s1 < 10 && m1 > 10) {

                  controlstime2.innerHTML = m1 + ':0' + s1;
                }
                else if (s1 > 10 && m1 < 10) {
                  controlstime2.innerHTML = '0' + m1 + ':' + s1;
                }
                controlsprogressbarreally.style.width = 0;
                Timer3 = setInterval(() => {
                  let length = 450 / (result32.songs[0].dt / 1000);
                  let controlswidth = controlsprogressbarreally.offsetWidth;
                  controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                  if (controlswidth >= 445 || audio.paused) {
                    clearInterval(Timer3)
                  }
                }, 1000);
                clearInterval(songlisttbody.getAttribute('data-timer-id'));
                songlisttbody.setAttribute('data-timer-id', Timer3);
                controlsprogressbarreally.style.width = 0;
                controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                controlsimgT.src = result32.songs[0].al.picUrl;
                audio.src = result6.data[0].url;
                controls.style.display = 'block';
                audio.play();
                controlsplay.innerHTML = '';
                i++;
              }
              setInterval(() => {
                let time = formatSeconds(parseInt(audio.currentTime));
                controlstime1.innerHTML = time + '/'
              }, 1000);
              let s1 = parseInt(result3.songs[0].dt / 1000) % 60;
              let m1 = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
              if (s1 < 10 && m1 < 10) {
                controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
              }
              else if (s1 > 10 && m1 > 10) {
                controlstime2.innerHTML = m1 + ':' + s1;
              }
              else if (s1 < 10 && m1 > 10) {

                controlstime2.innerHTML = m1 + ':0' + s1;
              }
              else if (s1 > 10 && m1 < 10) {
                controlstime2.innerHTML = '0' + m1 + ':' + s1;
              }
            }
            controlsplay.onclick = () => {
              if (flag5) {
                audio.play();
                controlsplay.innerHTML = '';
                flag5 = 0;
                Timer4 = setInterval(() => {
                  let length = 450 / (result3.songs[0].dt / 1000);
                  let controlswidth = controlsprogressbarreally.offsetWidth;
                  controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                  if (controlswidth >= 445 || audio.paused) {
                    clearInterval(Timer4)
                  }
                }, 1000);
                clearInterval(songlisttbody.getAttribute('data-timer-id'));
                songlisttbody.setAttribute('data-timer-id', Timer4);
              }
              else {
                controlsplay.innerHTML = '';
                audio.pause();
                flag5 = 1;
              }
            }
            if (i % 2 == 0) {
              tr.style.backgroundColor = 'rgb(221, 220, 220)';
            }
            div1.innerHTML = '&nbsp;&nbsp;&nbsp;' + (i + 1);
            tr.className = 'body-songlist-tr-body';
            //歌名
            if (result3.songs[0].name.length > 30) {
              div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name.substring(0, 28) + '...';
            }
            else {
              div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name;
            }
            div2.title = result3.songs[0].name;
            //时间
            let s = parseInt(result3.songs[0].dt / 1000) % 60;
            let m = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
            if (s < 10 && m < 10) {
              div3.innerHTML = '0' + m + ':' + '0' + s;
            }
            else if (s > 10 && m > 10) {
              div3.innerHTML = m + ':' + s;
            }
            else if (s < 10 && m > 10) {
              div3.innerHTML = m + ':0' + s;
            }
            else if (s > 10 && m < 10) {
              div3.innerHTML = '0' + m + ':' + s;
            }
            //作者
            if (result3.songs[0].ar[0].name.length > 15) {
              div4.innerHTML = result3.songs[0].name.substring(0, 13) + '...';
            }
            else {
              div4.innerHTML = result3.songs[0].ar[0].name;
            }
            div4.title = result3.songs[0].ar[0].name;
            //专辑
            if (result3.songs[0].al.name.length > 26) {
              div5.innerHTML = result3.songs[0].al.name.substring(0, 24) + '...';
            }
            else {
              div5.innerHTML = result3.songs[0].al.name;
            }
            div5.title = result3.songs[0].al.name;
          }
        })

        imgs.addEventListener("click", async () => {
          let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
            method: "POST"
          })
          let result2 = await response2.json();
          detailcommand.style.height = result2.hotComments.length * 150 + 300 + "px";
          detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px';
          if (result2.hotComments.length != 0) {
            for (let b = 0; b < result2.hotComments.length; b++) {
              let onecommand = document.createElement("div");
              let headportrait = document.createElement("img");
              let onecommandlf = document.createElement("div");
              let onecommandlf1 = document.createElement("div");
              let onecommandlf2 = document.createElement("div");
              let onecommandlf3 = document.createElement("div");
              let onecommandlf1a = document.createElement("a");
              let onecommandlf1span = document.createElement("span");
              let onecommandlf2a = document.createElement("a");
              let onecommandlf2span = document.createElement("span");
              let triangle = document.createElement("div");
              let timestr = document.createElement("span");
              let likedcount = document.createElement("span");
              let likedcountspan = document.createElement("span");
              let l = document.createElement("span");
              let response = document.createElement("span");
              let hr = document.createElement("hr");
              onecommandlf1a.className = 'one-command-lf1a';
              onecommandlf2a.className = 'one-command-lf1a';
              onecommand.className = 'one-command';
              headportrait.className = 'head-portrait';
              onecommandlf.className = 'one-command-lf';
              onecommandlf1span.className = 'one-command-lf1span';
              onecommandlf2span.className = 'one-command-lf2span';
              onecommandlf2.className = 'one-command-lf2';
              onecommandlf3.className = 'one-command-lf3';
              triangle.className = 'triangle';
              timestr.className = 'timestr';
              likedcount.className = 'likedcount';
              likedcountspan.className = 'likedcountspan';
              l.className = 'l';
              response.className = 'response';
              hr.className = 'hr';
              commandbodybody.appendChild(onecommand);
              commandbodybody.appendChild(hr);
              onecommand.appendChild(headportrait);
              onecommand.appendChild(onecommandlf);
              onecommandlf.appendChild(onecommandlf1);
              onecommandlf.appendChild(onecommandlf2);
              onecommandlf.appendChild(onecommandlf3);
              onecommandlf1.appendChild(onecommandlf1a);
              onecommandlf1.appendChild(onecommandlf1span);
              onecommandlf2.appendChild(onecommandlf2a);
              onecommandlf2.appendChild(onecommandlf2span);
              onecommandlf2.appendChild(triangle);
              onecommandlf3.appendChild(timestr);
              onecommandlf3.appendChild(likedcount);
              onecommandlf3.appendChild(l);
              onecommandlf3.appendChild(response);
              onecommandlf3.appendChild(likedcountspan);
              timestr.innerHTML = result2.hotComments[b].timeStr;
              likedcount.innerHTML = '';
              likedcountspan.innerHTML = "(" + result2.hotComments[b].likedCount + ")";
              l.innerHTML = "|";
              response.innerHTML = '回复';
              onecommandlf1span.innerHTML = ":" + result2.hotComments[b].content;
              onecommandlf1a.innerHTML = result2.hotComments[b].user.nickname;
              headportrait.src = result2.hotComments[b].user.avatarUrl;
              if (result2.hotComments[b].beReplied.length != 0) {
                onecommandlf2a.innerHTML = result2.hotComments[b].beReplied[0].user.nickname;
                onecommandlf2span.innerHTML = ":" + result2.hotComments[b].beReplied[0].content;
                setTimeout(() => {
                  onecommandlf2.style.top = onecommandlf1.offsetHeight + 20 + "px";
                  onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                }, 500)

              }
              else {
                onecommandlf2.style.display = 'none';
              }
              setTimeout(() => {
                onecommand.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                onecommandlf.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
              }, 500)

            }
          }
          else {                                                                   /////////////////////////////////////////////////////////////////////
            commandbodygood.style.display = 'none';
          }
        })
        imgs.addEventListener("click", async () => {
          let response21 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
            method: "POST"
          })
          let result21 = await response21.json();
          let commandbuttonsafist = document.createElement('a');
          let commandbuttonsalast = document.createElement('a');
          commandbuttonsafist.className = 'commandbuttonsafist';
          commandbuttonsalast.className = 'commandbuttonsalast';
          commandbuttons.appendChild(commandbuttonsafist);
          commandbuttonsafist.innerHTML = '&lt;上一页';
          commandbuttonsalast.innerHTML = '下一页&gt;';
          for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
            let commandbuttonsa = document.createElement('a');
            commandbuttonsa.className = 'commandbuttonsa';
            commandbuttons.appendChild(commandbuttonsa);
            commandbuttonsa.innerHTML = a + 1;
            commandbuttonsa.setAttribute('number', a);
          }
          if ((parseInt(result21.total / 20) + 1) > 9) {
            let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
            commandbuttonsas[8].innerHTML = '...';
            commandbuttonsas[8].style.border = 'none';
            commandbuttonsas[8].style.width = '5px';
            commandbuttonsas[8].style.marginLeft = 0;
            for (let d = 9; d < parseInt(result21.total / 20); d++) {
              commandbuttonsas[d].style.display = 'none';
            }
          }
          commandbuttons.appendChild(commandbuttonsalast);
          let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
          commandbuttonsas[0].style.backgroundColor = 'red';
          commandbuttonsas[0].style.color = 'white';
          let total = (parseInt(result21.total / 20) + 1);
          for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
            commandbuttonsas[a].addEventListener('click', () => {
              flag7 = commandbuttonsas[a].getAttribute('number');
              for (let c = 0; c < (parseInt(result21.total / 20) + 1); c++) {
                commandbuttonsas[c].style.backgroundColor = 'white';
                commandbuttonsas[c].style.color = 'black';
              }
              commandbuttonsas[a].style.backgroundColor = 'red';
              commandbuttonsas[a].style.color = 'white';
            });

            commandbuttonsas[a].addEventListener('click', () => {
              flag7 = parseInt(commandbuttonsas[a].getAttribute('number'));
              if (flag7 >= 5 && flag7 <= (parseInt(result21.total / 20) - 5) && total >= 10) {
                commandbuttonsas[8].innerHTML = '9';
                commandbuttonsas[8].style.width = '20px';
                commandbuttonsas[8].style.border = '1px solid black';
                commandbuttonsas[8].style.marginLeft = '5px';
                commandbuttonsas[1].innerHTML = '...';
                commandbuttonsas[1].style.border = 'none';
                commandbuttonsas[1].style.width = '5px';
                commandbuttonsas[1].style.marginLeft = 0;
                commandbuttonsas[total - 2].style.display = 'inline-block';
                commandbuttonsas[total - 2].innerHTML = '...';
                commandbuttonsas[total - 2].style.border = 'none';
                commandbuttonsas[total - 2].style.width = '5px';
                commandbuttonsas[total - 2].style.marginLeft = 0;
                if (flag7 >= flag8) {
                  for (let d = 2; d < flag7 - 3; d++) {
                    commandbuttonsas[d].style.display = 'none';
                  }
                  for (let f = flag7; f <= parseInt(flag7) + 3; f++) {
                    commandbuttonsas[f].style.display = 'inline-block';
                  }
                  flag8 = flag7;
                }
                else {
                  for (let d = flag7 + 4; d < total - 2; d++) {
                    commandbuttonsas[d].style.display = 'none';
                  }
                  for (let f = flag7; f >= parseInt(flag7) - 3; f--) {
                    commandbuttonsas[f].style.display = 'inline-block';
                  }
                  flag8 = flag7;
                }
              }
              else if (flag7 < 5 && total >= 10) {
                commandbuttonsas[8].style.display = 'inline-block'
                commandbuttonsas[8].innerHTML = '...';
                commandbuttonsas[8].style.border = 'none';
                commandbuttonsas[8].style.width = '5px';
                commandbuttonsas[8].style.marginLeft = 0;
                commandbuttonsas[1].innerHTML = '2';
                commandbuttonsas[1].style.border = '1px solid black';
                commandbuttonsas[1].style.width = '20px';
                commandbuttonsas[1].style.marginLeft = '5px';
                for (let x = 0; x < 8; x++) {
                  commandbuttonsas[x].style.display = 'inline-block';
                }
                for (let x = 9; x < total - 1; x++) {
                  commandbuttonsas[x].style.display = 'none';
                }
              }
              else if (flag7 > (parseInt(result21.total / 20) - 5) && total >= 10) {
                commandbuttonsas[total - 2].style.display = 'inline-block';
                commandbuttonsas[total - 2].innerHTML = total - 1;
                commandbuttonsas[total - 2].style.border = '1px solid black';
                commandbuttonsas[total - 2].style.width = '20px';
                commandbuttonsas[total - 2].style.marginLeft = '5px';
                commandbuttonsas[1].display = 'inline-block';
                commandbuttonsas[1].innerHTML = '...';
                commandbuttonsas[1].style.border = 'none';
                commandbuttonsas[1].style.width = '5px';
                commandbuttonsas[1].style.marginLeft = 0;
                for (let x = total - 8; x < total; x++) {
                  commandbuttonsas[x].style.display = 'inline-block';
                }
                for (let x = 2; x < total - 8; x++) {
                  commandbuttonsas[x].style.display = 'none';
                }
              }
            })
          }
          let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
            method: "POST"
          })
          let result2 = await response2.json();
          if (result2.comments.length != 0) {
            for (let b = 0; b < result2.comments.length; b++) {
              let onecommand = document.createElement("div");
              let headportrait = document.createElement("img");
              let onecommandlf = document.createElement("div");
              let onecommandlf11 = document.createElement("div");
              let onecommandlf2 = document.createElement("div");
              let onecommandlf3 = document.createElement("div");
              let onecommandlf1a = document.createElement("a");
              let onecommandlf1span = document.createElement("span");
              let onecommandlf2a = document.createElement("a");
              let onecommandlf2span = document.createElement("span");
              let triangle = document.createElement("div");
              let timestr = document.createElement("span");
              let likedcount = document.createElement("span");
              let likedcountspan = document.createElement("span");
              let l = document.createElement("span");
              let response = document.createElement("span");
              let hr = document.createElement("hr");
              onecommandlf11.className = 'one-commandlf1';
              onecommandlf1a.className = 'one-command-lf1a';
              onecommandlf2a.className = 'one-command-lf1a';
              onecommand.className = 'one-command';
              headportrait.className = 'head-portrait';
              onecommandlf.className = 'one-command-lf';
              onecommandlf1span.className = 'one-command-lf1span';
              onecommandlf2span.className = 'one-command-lf2span';
              onecommandlf2.className = 'one-command-lf2';
              onecommandlf3.className = 'one-command-lf3';
              triangle.className = 'triangle';
              timestr.className = 'timestr';
              likedcount.className = 'likedcount';
              likedcountspan.className = 'likedcountspan';
              l.className = 'l';
              response.className = 'response';
              hr.className = 'hr';
              commandbodybody2.appendChild(onecommand);
              commandbodybody2.appendChild(hr);
              onecommand.appendChild(headportrait);
              onecommand.appendChild(onecommandlf);
              onecommandlf.appendChild(onecommandlf11);
              onecommandlf.appendChild(onecommandlf2);
              onecommandlf.appendChild(onecommandlf3);
              onecommandlf11.appendChild(onecommandlf1a);
              onecommandlf11.appendChild(onecommandlf1span);
              onecommandlf2.appendChild(onecommandlf2a);
              onecommandlf2.appendChild(onecommandlf2span);
              onecommandlf2.appendChild(triangle);
              onecommandlf3.appendChild(timestr);
              onecommandlf3.appendChild(likedcount);
              onecommandlf3.appendChild(l);
              onecommandlf3.appendChild(response);
              onecommandlf3.appendChild(likedcountspan);
              timestr.innerHTML = result2.comments[b].timeStr;
              likedcount.innerHTML = '';
              likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
              l.innerHTML = "|";
              response.innerHTML = '回复';
              onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
              onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
              headportrait.src = result2.comments[b].user.avatarUrl;
              together2.innerHTML = '(' + result2.total + ')';
              commandtogether.innerHTML = "共" + result2.total + "条评论";
              if (result2.comments[b].beReplied.length != 0) {
                onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
                onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
                setTimeout(() => {
                  onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
                  onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                }, 500)
              }
              else {
                onecommandlf2.style.display = 'none';
              }
              setTimeout(() => {
                onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
              }, 500)
            }
          }
          else {                                                              /////////////////////////////////////////////////////////////////////
            commandbodycommon.style.display = 'none';
          }
          detailcommand.style.height = result2.hotComments.length * 150 + result2.comments.length * 150 + "px";
          setTimeout(() => {
            detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px';
          }, 200);

          let u = 0;
          setInterval(async () => {
            if (u != flag7) {

              let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id + '&offset=' + flag7 * 20 + '&limit=20', {
                method: "POST"
              })
              let result2 = await response2.json();
              let response2a = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
                method: "POST"
              })
              let result2a = await response2a.json();
              for (let g = 1; g <= result2.comments.length * 2; g++) {
                console.log(g)
                commandbodybody2.childNodes[1].remove();
              }
              if (result2.comments.length != 0) {
                for (let b = 0; b < result2.comments.length; b++) {
                  let onecommand = document.createElement("div");
                  let headportrait = document.createElement("img");
                  let onecommandlf = document.createElement("div");
                  let onecommandlf11 = document.createElement("div");
                  let onecommandlf2 = document.createElement("div");
                  let onecommandlf3 = document.createElement("div");
                  let onecommandlf1a = document.createElement("a");
                  let onecommandlf1span = document.createElement("span");
                  let onecommandlf2a = document.createElement("a");
                  let onecommandlf2span = document.createElement("span");
                  let triangle = document.createElement("div");
                  let timestr = document.createElement("span");
                  let likedcount = document.createElement("span");
                  let likedcountspan = document.createElement("span");
                  let l = document.createElement("span");
                  let response = document.createElement("span");
                  let hr = document.createElement("hr");
                  onecommandlf11.className = 'one-commandlf1';
                  onecommandlf1a.className = 'one-command-lf1a';
                  onecommandlf2a.className = 'one-command-lf1a';
                  onecommand.className = 'one-command';
                  headportrait.className = 'head-portrait';
                  onecommandlf.className = 'one-command-lf';
                  onecommandlf1span.className = 'one-command-lf1span';
                  onecommandlf2span.className = 'one-command-lf2span';
                  onecommandlf2.className = 'one-command-lf2';
                  onecommandlf3.className = 'one-command-lf3';
                  triangle.className = 'triangle';
                  timestr.className = 'timestr';
                  likedcount.className = 'likedcount';
                  likedcountspan.className = 'likedcountspan';
                  l.className = 'l';
                  response.className = 'response';
                  hr.className = 'hr';
                  commandbodybody2.appendChild(onecommand);
                  commandbodybody2.appendChild(hr);
                  onecommand.appendChild(headportrait);
                  onecommand.appendChild(onecommandlf);
                  onecommandlf.appendChild(onecommandlf11);
                  onecommandlf.appendChild(onecommandlf2);
                  onecommandlf.appendChild(onecommandlf3);
                  onecommandlf11.appendChild(onecommandlf1a);
                  onecommandlf11.appendChild(onecommandlf1span);
                  onecommandlf2.appendChild(onecommandlf2a);
                  onecommandlf2.appendChild(onecommandlf2span);
                  onecommandlf2.appendChild(triangle);
                  onecommandlf3.appendChild(timestr);
                  onecommandlf3.appendChild(likedcount);
                  onecommandlf3.appendChild(l);
                  onecommandlf3.appendChild(response);
                  onecommandlf3.appendChild(likedcountspan);
                  timestr.innerHTML = result2.comments[b].timeStr;
                  likedcount.innerHTML = '';
                  likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
                  l.innerHTML = "|";
                  response.innerHTML = '回复';
                  onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
                  onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
                  headportrait.src = result2.comments[b].user.avatarUrl;
                  together2.innerHTML = '(' + result2.total + ')';
                  commandtogether.innerHTML = "共" + result2.total + "条评论";
                  if (result2.comments[b].beReplied.length != 0) {
                    onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
                    onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
                    setTimeout(() => {
                      onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
                      onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                    }, 500)
                  }
                  else {
                    onecommandlf2.style.display = 'none';
                  }
                  setTimeout(() => {
                    onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                    onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                  }, 500)
                }
              }
              else {                                                              /////////////////////////////////////////////////////////////////////
                commandbodycommon.style.display = 'none';
              }
              detailcommand.style.height = result2a.hotComments.length * 150 + 10000 + "px";
              setTimeout(() => { detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px'; }, 200)
              u = flag7;
            }
          }, 1000)
          
        })
       
   }
   let controlsimg = document.querySelector(".controls-img");
   let imgfloat = document.querySelector(".imgfloat");
   let songdetailimg = document.querySelector(".songdetail-img");
   controlsimg.addEventListener("mouseover", () => {
     if(flag12==1){
     imgfloat.style.opacity = '0.6';
     imgfloat.innerHTML = '⬆';
     }
   })
   controlsimg.addEventListener("mouseleave", () => {
     
     if(flag12==1){

     imgfloat.style.opacity = '0';
     imgfloat.innerHTML = '';
    
     }
   })
 
 
   controlsimg.addEventListener("click", async () => {
     let songdetail=document.querySelector(".songdetail");
     let songdetailwords=document.querySelector(".songdetail-words");
     let songdetailwordsreally=document.querySelector(".songdetail-wordsreally");
     let songname=document.querySelector(".songname");
     let songsheetname=document.querySelector(".songsheetname");
   
     if(flag12==1){
     songdetail.style.display='block'
     detaildiv2.style.display = 'none';
     imgfloat.style.opacity = '1';
     imgfloat.innerHTML = '⬇';
     flag12=0;
     }else{
      songdetail.style.display='none'
      detaildiv2.style.display = 'block';
      flag12=1;
     }
     setInterval(async () => {
       if (recordid != recordid2) {
         let responsedetail = await fetch("http://redrock.udday.cn:2022/song/detail?ids=" + recordid, { method: "POST" });
         let resultdetail = await responsedetail.json();
         songdetailimg.src = resultdetail.songs[0].al.picUrl;
         songname.innerHTML=resultdetail.songs[0].name;
         songsheetname.innerHTML=resultdetail.songs[0].ar[0].name+'-'+resultdetail.songs[0].al.name;
         recordid2 = recordid;
         let responsewords= await fetch("http://redrock.udday.cn:2022/lyric?id=" + recordid, { method: "POST" });
         let resultwords = await responsewords.json();
         let songwords2=resultwords.lrc.lyric.split("\n");
         let ps=songdetailwordsreally.querySelectorAll('p');
         for(let r=0;r<ps.length;r++){
           ps[r].remove();
         }
         for(let g=0;g<songwords2.length-1;g++){
         let songwords3=songwords2[g].split("]");
         let songwords4;
         let songwords5;
         let songwords6;
         let songdetailwordsp=document.createElement("p");
          songwords4=songwords3[0].split('[');
          songwords5=songwords4[1].split('.');
          songwords6=songwords5[0].split(':');
          songdetailwordsp.id='time'+(parseInt(songwords6[0]*60)+parseInt(songwords6[1]));
          songdetailwordsp.innerHTML=songwords3[1];
          songdetailwordsreally.appendChild(songdetailwordsp);
         }
       }
     }, 200)
    
     audio.addEventListener("timeupdate",()=>{
      let curtime=parseInt(audio.currentTime);
      if(document.querySelector('#time'+curtime)&&flag10==1){
        let ps=songdetailwordsreally.querySelectorAll('p');
        flag9++;
        for(let h=0;h<ps.length;h++){
          ps[h].style.fontSize='20px';
          ps[h].style.fontWight='300';
          ps[h].style.color='rgb(192, 192, 192)';
          ps[h].setAttribute("top",h*46);
          ps[h].setAttribute("time",ps[h].id.replace("time",''));
        }
        document.querySelector('#time'+curtime).style.fontSize='30px';
        document.querySelector('#time'+curtime).style.fontWight='500';
        document.querySelector('#time'+curtime).style.color='black';
        setInterval(()=>{
          for(let a=0;a<ps.length;a++){
            if(parseInt(audio.currentTime)==ps[a].getAttribute('time')){
              songdetailwordsreally.style.top=-ps[a].getAttribute('top')+'px'
            }
          }
         
        },1000)
        flag10=0;
        setTimeout(()=>{
         flag10=1
        },1000)
      }
    })
 
     let rotateVal = 0;
     if(flag5==0){
     let songdetailimg2d = setInterval(() => {
       rotateVal += 1;
       songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
       songdetailimg.style.transition = '1s linear';
     }, 100)
     clearInterval(songdetailimg.getAttribute("name2d"));
     songdetailimg.setAttribute("name2d", songdetailimg2d);
     
   }
     let controlsplay=document.querySelector(".controls-play");
     let controlsleft=document.querySelector(".controls-left");
     let controlsright=document.querySelector(".controls-right");
   
     controlsplay.addEventListener("click",()=>{
       if(flag5){
         clearInterval(songdetailimg.getAttribute("name2d"));
       }else{
         let songdetailimg2d = setInterval(() => {
           rotateVal += 1;
           songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
           songdetailimg.style.transition = '1s linear';
         }, 100)
         clearInterval(songdetailimg.getAttribute("name2d"));
         songdetailimg.setAttribute("name2d", songdetailimg2d);
       }
     })
     controlsleft.addEventListener("click",()=>{
       flag9=0;
       let songdetailimg2d = setInterval(() => {
         rotateVal += 1;
         songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
         songdetailimg.style.transition = '1s linear';
       }, 100)
       clearInterval(songdetailimg.getAttribute("name2d"));
       songdetailimg.setAttribute("name2d", songdetailimg2d);
     })
     controlsright.addEventListener("click",()=>{
       flag9=0;
       let songdetailimg2d = setInterval(() => {
         rotateVal += 1;
         songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
         songdetailimg.style.transition = '1s linear';
       }, 100)
       clearInterval(songdetailimg.getAttribute("name2d"));
       songdetailimg.setAttribute("name2d", songdetailimg2d);
     })
   })
      for (let j = 0; j < 3; j++) {
        lis[j].onclick = async () => {
          // /top/playlist/highquality?before=1503639064232&limit=3
          let response = await fetch('http://redrock.udday.cn:2022/top/playlist/highquality?limit=' + (j + 1) * 35);
          let result = await response.json();

          for (let h = 0; h < 3; h++) {
            lis[h].style.backgroundColor = 'white';
          }
          lis[j].style.backgroundColor = 'red';
          let songsheetbodydiv = songsheetbody.querySelectorAll('div');
          for (let i = 0; i < songsheetbodydiv.length; i++) {
            songsheetbodydiv[i].style.display = 'none';
          }
          for (let k = ((j) * 35); k < (j + 1) * 35; k++) {
            let divs = document.createElement('div');
            let spans = document.createElement('span');
            let imgs = document.createElement('img');
            let ps = document.createElement('p');
            if (result.playlists[k].playCount.length <= 4) {
              ps.innerHTML = result.playlists[k].playCount;
            }
            else {
              ps.innerHTML = parseInt(result.playlists[k].playCount / 1000) + '万';
            }
            imgs.src = result.playlists[k].coverImgUrl;
            songsheetbody.appendChild(divs);
            divs.appendChild(imgs);
            divs.appendChild(spans);
            divs.appendChild(ps);
            spans.innerHTML = result.playlists[k].name;
            let id = result.playlists[k].id;
            imgs.addEventListener('click', async () => {
              let response2 = await fetch('http://redrock.udday.cn:2022/playlist/detail?id=' + id, {
                method: "POST"
              })
              let result2 = await response2.json();  ///////////////////////////////////////////////
              detaildiv.style.display = 'block';
              songsheetdiv.style.display = 'none';
              headerportraitleftimg.src = result2.playlist.coverImgUrl;
              headerrightheaderspan.innerHTML = result2.playlist.name;
              headerrightpersontimeimg.src = result2.playlist.creator.avatarUrl;
              headerrightpersontimea.innerHTML = result2.playlist.creator.nickname;
              headerrightpersontimespan.innerHTML = dateFormat(result2.playlist.createTime, 0) + ' 创建';
              buttonscollection.innerHTML = '(' + result2.playlist.subscribedCount + ')';
              buttonsshare.innerHTML = '(' + result2.playlist.commentCount + ')';
              buttonscommand.innerHTML = '(' + result2.playlist.commentCount + ')';
              headerrighttags.childNodes[3].innerHTML = result2.playlist.tags[0];
              headerrighttags.childNodes[5].innerHTML = result2.playlist.tags[1];
              headerrighttags.childNodes[7].innerHTML = result2.playlist.tags[2];
              headerrightintroduce.childNodes[1].innerHTML = "介绍:" + result2.playlist.description;
              if (headerrightintroduce.childNodes[1].offsetHeight > 190) {
                let num = headerrightintroduce.childNodes[1].offsetHeight + 190;
                open.style.display = "block";
                let flag4 = 1;
                open.onclick = () => {
                  if (flag4) {
                    headerrightintroduce.style.overflow = 'visible';
                    opena.innerHTML = "收起";
                    open.style.top = num + 'px';
                    detaildivbody.style.top = num - 300 + 'px';
                    const _style_ = document.createElement('style')
                    _style_.innerText = `.open-a:after { content: ""}`
                    document.body.appendChild(_style_)
                    flag4 = 0;
                  }
                  else {
                    headerrightintroduce.style.overflow = 'hidden';
                    opena.innerHTML = "展开";
                    open.style.top = 330 + 'px';
                    detaildivbody.style.top = 0 + 'px';
                    const _style_ = document.createElement('style')
                    _style_.innerText = `.open-a:after { content: ""}`
                    document.body.appendChild(_style_)
                    flag4 = 1;
                  }
                }
              }
              let trackIds = result2.playlist.trackIds;
              console.log(trackIds.length);
              detaildivbodyheader.childNodes[3].innerHTML = trackIds.length + '首歌';
              detaildivbodyheader.childNodes[3].style.fontSize = '10px';
              detaildivbodyheader.childNodes[3].style.color = 'rgb(173, 170, 170)';
              detaildivbodyheader.childNodes[5].innerHTML = '播放:' + result2.playlist.playCount + '次';
              detaildivbodyheader.childNodes[5].style.float = 'right';
              detaildivbodyheader.childNodes[5].style.fontSize = '15px';
              detaildivbodyheader.childNodes[5].style.color = 'rgb(223, 134, 134)';
              detaildiv2.style.height = (510 + trackIds.length * 23.88) + 'px';
              detaildiv.style.height = (530 + trackIds.length * 23.88) + 1000 + 'px';
              detaildivbody.style.height = trackIds.length * 23.88 + 'px';
              for (let i = 0; i < trackIds.length; i++) {
                let response3 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i].id, {
                  method: "POST"
                })
                let result3 = await response3.json();  ///////////////////////////////////////////////
                let response4 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i].id, {
                  method: "POST"
                })
                let result4 = await response4.json();
                let tr = document.createElement('tr');
                songlisttbody.appendChild(tr);
                for (let m = 0; m < 5; m++) {
                  let td = document.createElement("td");
                  let div = document.createElement("div");
                  td.appendChild(div);
                  tr.appendChild(td);
                }
                let div1 = tr.childNodes[0].querySelector('div');
                let div2 = tr.childNodes[1].querySelector('div');
                let div3 = tr.childNodes[2].querySelector('div');
                let div4 = tr.childNodes[3].querySelector('div');
                let div5 = tr.childNodes[4].querySelector('div');
                let controls = document.querySelector(".controls");
                let controlsdiv1 = document.querySelector(".controls-div1");
                let controlsdiv2 = document.querySelector(".controls-div2");
                // let controlsspan1=controlsdiv1.childNodes[0];
                // let controlsspan2=controlsdiv1.childNodes[1];
                // let controlsspan3=controlsdiv1.childNodes[2];
                // let controlsspan4=controlsdiv2.childNodes[0];
                // let controlsspan5=controlsdiv2.childNodes[1];
                // let controlsspan6=controlsdiv2.childNodes[2];
                let controlsplay = document.querySelector(".controls-play");
                let controlsleft = document.querySelector(".controls-left");
                let controlsright = document.querySelector(".controls-right");
                let controlsimg = document.querySelector(".controls-img");
                let controlsimgT = controlsimg.querySelector("img");
                let controlsprogressbar = document.querySelector(".controls-progressbar")
                let controlsprogressbarone = document.querySelector(".controls-progressbar-one");
                let controlsprogressbartwo = document.querySelector(".controls-progressbar-two");
                let controlsprogressbartwolong = document.querySelector(".controls-progressbar-two-long");
                let controlsprogressbarreally = document.querySelector(".controls-progressbar-really");
                let controlsprogressbartwocircle1 = document.querySelector(".controls-progressbar-two-circle1");
                let controlsprogressbartwocircle2 = document.querySelector(".controls-progressbar-two-circle2");
                let controlssmall = document.querySelector(".controls-small");
                let controlstime1 = document.querySelector(".controls-time1");
                let controlstime2 = document.querySelector(".controls-time2");
                div1.style.color = 'rgb(202, 199, 199);';
                controlsprogressbartwolong.onmousedown = (event) => {
                  let width = event.clientX - controlsprogressbar.getBoundingClientRect().left;
                  let rata = width / 450;
                  let seconds = result3.songs[0].dt;
                  let time = parseInt(seconds * rata / 1000);
                  if (width < 450) {
                    audio.currentTime = time;
                    controlsprogressbarreally.style.width = event.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
                  } else if (width = 450) {
                    controlsplay.innerHTML = '';
                    flag5 = 1;
                  }

                }
                controlsprogressbartwocircle1.onmousedown = () => {
                  controlsprogressbar.onmousemove = (event2) => {
                    let width2 = event2.clientX - controlsprogressbar.getBoundingClientRect().left;
                    let rata2 = width2 / 450;
                    let seconds2 = result3.songs[0].dt;
                    let time2 = parseInt(seconds2 * rata2 / 1000)
                    if (width2 < 450) {
                      audio.currentTime = time2;
                      controlsprogressbarreally.style.width = event2.clientX - controlsprogressbar.getBoundingClientRect().left + 'px';
                      document.onmouseup = () => {
                        controlsprogressbar.onmousemove = null;
                      }
                    } else if (width2 = 450) {
                      controlsplay.innerHTML = '';
                      flag5 = 1;
                    }
                  }
                }
                div1.onclick = () => {
                  recordid = trackIds[i].id;
                  controlsimgT.src = result3.songs[0].al.picUrl;
                  controlsprogressbarone.childNodes[1].innerHTML = result3.songs[0].name;
                  controlsprogressbarone.childNodes[2].innerHTML = result3.songs[0].ar[0].name;
                  audio.src = result4.data[0].url;
                  controls.style.display = 'block';
                  audio.play();
                  controlsplay.innerHTML = '';
                  flag5 = 0;
                  controlsprogressbarreally.style.width = 0;
                  let Timer = setInterval(() => {
                    let length = 450 / (result3.songs[0].dt / 1000);
                    let controlswidth = controlsprogressbarreally.offsetWidth;
                    controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                    if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                      clearInterval(Timer)
                    }
                  }, 1000);
                  clearInterval(songlisttbody.getAttribute('data-timer-id'));
                  songlisttbody.setAttribute('data-timer-id', Timer);
                  controlsleft.onclick = async () => {
                    recordid = trackIds[i-1].id;
                    let response5 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i - 1].id, {
                      method: "POST"
                    })
                    let result5 = await response5.json();
                    let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i - 1].id, {
                      method: "POST"
                    })
                    let result31 = await response31.json();
                    // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                    let s1 = parseInt(result31.songs[0].dt / 1000) % 60;
                    let m1 = parseInt(parseInt(result31.songs[0].dt / 1000) / 60);
                    if (s1 < 10 && m1 < 10) {
                      controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                    }
                    else if (s1 > 10 && m1 > 10) {
                      controlstime2.innerHTML = m1 + ':' + s1;
                    }
                    else if (s1 < 10 && m1 > 10) {

                      controlstime2.innerHTML = m1 + ':0' + s1;
                    }
                    else if (s1 > 10 && m1 < 10) {
                      controlstime2.innerHTML = '0' + m1 + ':' + s1;
                    }
                    controlsprogressbarreally.style.width = 0;
                    Timer2 = setInterval(() => {
                      let length = 450 / (result31.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlswidth >= 445 || audio.paused) {
                        clearInterval(Timer2)
                      }
                    }, 1000);
                    clearInterval(songlisttbody.getAttribute('data-timer-id'));
                    songlisttbody.setAttribute('data-timer-id', Timer2);
                    controlsprogressbarreally.style.width = 0;
                    controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                    controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                    controlsimgT.src = result31.songs[0].al.picUrl;

                    audio.src = result5.data[0].url;
                    controls.style.display = 'block';
                    audio.play();
                    controlsplay.innerHTML = '';
                    i--;
                  }
                  controlsright.onclick = async () => {
                    recordid = trackIds[i+1].id;
                    let response6 = await fetch('http://redrock.udday.cn:2022/song/url?id=' + trackIds[i + 1].id, {
                      method: "POST"
                    })
                    let result6 = await response6.json();
                    let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + trackIds[i + 1].id, {
                      method: "POST"
                    })
                    let result32 = await response32.json();
                    let s1 = parseInt(result32.songs[0].dt / 1000) % 60;
                    let m1 = parseInt(parseInt(result32.songs[0].dt / 1000) / 60);
                    if (s1 < 10 && m1 < 10) {
                      controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                    }
                    else if (s1 > 10 && m1 > 10) {
                      controlstime2.innerHTML = m1 + ':' + s1;
                    }
                    else if (s1 < 10 && m1 > 10) {

                      controlstime2.innerHTML = m1 + ':0' + s1;
                    }
                    else if (s1 > 10 && m1 < 10) {
                      controlstime2.innerHTML = '0' + m1 + ':' + s1;
                    }
                    controlsprogressbarreally.style.width = 0;
                    Timer3 = setInterval(() => {
                      let length = 450 / (result32.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlswidth >= 445 || audio.paused) {
                        clearInterval(Timer3)
                      }
                    }, 1000);
                    clearInterval(songlisttbody.getAttribute('data-timer-id'));
                    songlisttbody.setAttribute('data-timer-id', Timer3);
                    controlsprogressbarreally.style.width = 0;
                    controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                    controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                    controlsimgT.src = result32.songs[0].al.picUrl;
                    audio.src = result6.data[0].url;
                    controls.style.display = 'block';
                    audio.play();
                    controlsplay.innerHTML = '';
                    i++;
                  }
                  setInterval(() => {
                    let time = formatSeconds(parseInt(audio.currentTime));
                    controlstime1.innerHTML = time + '/'
                  }, 1000);
                  let s1 = parseInt(result3.songs[0].dt / 1000) % 60;
                  let m1 = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
                  if (s1 < 10 && m1 < 10) {
                    controlstime2.innerHTML = '0' + m1 + ':' + '0' + s1;
                  }
                  else if (s1 > 10 && m1 > 10) {
                    controlstime2.innerHTML = m1 + ':' + s1;
                  }
                  else if (s1 < 10 && m1 > 10) {

                    controlstime2.innerHTML = m1 + ':0' + s1;
                  }
                  else if (s1 > 10 && m1 < 10) {
                    controlstime2.innerHTML = '0' + m1 + ':' + s1;
                  }
                }
                controlsplay.onclick = () => {
                  if (flag5) {
                    audio.play();
                    controlsplay.innerHTML = '';
                    flag5 = 0;
                    Timer4 = setInterval(() => {
                      let length = 450 / (result3.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlswidth >= 445 || audio.paused) {
                        clearInterval(Timer4)
                      }
                    }, 1000);
                    clearInterval(songlisttbody.getAttribute('data-timer-id'));
                    songlisttbody.setAttribute('data-timer-id', Timer4);
                  }
                  else {
                    controlsplay.innerHTML = '';
                    audio.pause();
                    flag5 = 1;
                  }
                }
                if (i % 2 == 0) {
                  tr.style.backgroundColor = 'rgb(221, 220, 220)';
                }
                div1.innerHTML = '&nbsp;&nbsp;&nbsp;' + (i + 1);
                tr.className = 'body-songlist-tr-body';
                //歌名
                if (result3.songs[0].name.length > 30) {
                  div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name.substring(0, 28) + '...';
                }
                else {
                  div2.innerHTML = '&nbsp;&nbsp;&nbsp;' + result3.songs[0].name;
                }
                div2.title = result3.songs[0].name;
                //时间
                let s = parseInt(result3.songs[0].dt / 1000) % 60;
                let m = parseInt(parseInt(result3.songs[0].dt / 1000) / 60);
                if (s < 10 && m < 10) {
                  div3.innerHTML = '0' + m + ':' + '0' + s;
                }
                else if (s > 10 && m > 10) {
                  div3.innerHTML = m + ':' + s;
                }
                else if (s < 10 && m > 10) {
                  div3.innerHTML = m + ':0' + s;
                }
                else if (s > 10 && m < 10) {
                  div3.innerHTML = '0' + m + ':' + s;
                }
                //作者
                if (result3.songs[0].ar[0].name.length > 15) {
                  div4.innerHTML = result3.songs[0].name.substring(0, 13) + '...';
                }
                else {
                  div4.innerHTML = result3.songs[0].ar[0].name;
                }
                div4.title = result3.songs[0].ar[0].name;
                //专辑
                if (result3.songs[0].al.name.length > 26) {
                  div5.innerHTML = result3.songs[0].al.name.substring(0, 24) + '...';
                }
                else {
                  div5.innerHTML = result3.songs[0].al.name;
                }
                div5.title = result3.songs[0].al.name;
              }
            })
            imgs.addEventListener("click", async () => {
              let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
                method: "POST"
              })
              let result2 = await response2.json();
              console.log(result2);
              detailcommand.style.height = result2.hotComments.length * 150 + 300 + "px";
              detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px';
              if (result2.hotComments.length != 0) {
                for (let b = 0; b < result2.hotComments.length; b++) {
                  let onecommand = document.createElement("div");
                  let headportrait = document.createElement("img");
                  let onecommandlf = document.createElement("div");
                  let onecommandlf1 = document.createElement("div");
                  let onecommandlf2 = document.createElement("div");
                  let onecommandlf3 = document.createElement("div");
                  let onecommandlf1a = document.createElement("a");
                  let onecommandlf1span = document.createElement("span");
                  let onecommandlf2a = document.createElement("a");
                  let onecommandlf2span = document.createElement("span");
                  let triangle = document.createElement("div");
                  let timestr = document.createElement("span");
                  let likedcount = document.createElement("span");
                  let likedcountspan = document.createElement("span");
                  let l = document.createElement("span");
                  let response = document.createElement("span");
                  let hr = document.createElement("hr");
                  onecommandlf1.className = 'one-commandlf1';
                  onecommandlf1a.className = 'one-command-lf1a';
                  onecommandlf2a.className = 'one-command-lf1a';
                  onecommand.className = 'one-command';
                  headportrait.className = 'head-portrait';
                  onecommandlf.className = 'one-command-lf';
                  onecommandlf1span.className = 'one-command-lf1span';
                  onecommandlf2span.className = 'one-command-lf2span';
                  onecommandlf2.className = 'one-command-lf2';
                  onecommandlf3.className = 'one-command-lf3';
                  triangle.className = 'triangle';
                  timestr.className = 'timestr';
                  likedcount.className = 'likedcount';
                  likedcountspan.className = 'likedcountspan';
                  l.className = 'l';
                  response.className = 'response';
                  hr.className = 'hr';
                  commandbodybody.appendChild(onecommand);
                  commandbodybody.appendChild(hr);
                  onecommand.appendChild(headportrait);
                  onecommand.appendChild(onecommandlf);
                  onecommandlf.appendChild(onecommandlf1);
                  onecommandlf.appendChild(onecommandlf2);
                  onecommandlf.appendChild(onecommandlf3);
                  onecommandlf1.appendChild(onecommandlf1a);
                  onecommandlf1.appendChild(onecommandlf1span);
                  onecommandlf2.appendChild(onecommandlf2a);
                  onecommandlf2.appendChild(onecommandlf2span);
                  onecommandlf2.appendChild(triangle);
                  onecommandlf3.appendChild(timestr);
                  onecommandlf3.appendChild(likedcount);
                  onecommandlf3.appendChild(l);
                  onecommandlf3.appendChild(response);
                  onecommandlf3.appendChild(likedcountspan);
                  timestr.innerHTML = result2.hotComments[b].timeStr;
                  likedcount.innerHTML = '';
                  likedcountspan.innerHTML = "(" + result2.hotComments[b].likedCount + ")";
                  l.innerHTML = "|";
                  response.innerHTML = '回复';
                  onecommandlf1span.innerHTML = ":" + result2.hotComments[b].content;
                  onecommandlf1a.innerHTML = result2.hotComments[b].user.nickname;
                  headportrait.src = result2.hotComments[b].user.avatarUrl;
                  if (result2.hotComments[b].beReplied.length != 0) {
                    onecommandlf2a.innerHTML = result2.hotComments[b].beReplied[0].user.nickname;
                    onecommandlf2span.innerHTML = ":" + result2.hotComments[b].beReplied[0].content;
                    setTimeout(() => {
                      onecommandlf2.style.top = onecommandlf1.offsetHeight + 20 + "px";
                      onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                    }, 500)


                  }
                  else {
                    onecommandlf2.style.display = 'none';
                  }
                  setTimeout(() => {
                    onecommand.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                    onecommandlf.style.height = onecommandlf1.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px'
                  }, 500)
                    ;
                }
              }
              else {                                                                   /////////////////////////////////////////////////////////////////////
                commandbodygood.style.display = 'none';
              }
            })
            imgs.addEventListener("click", async () => {
              let response21 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
                method: "POST"
              })
              let result21 = await response21.json();
              let commandbuttonsafist = document.createElement('a');
              let commandbuttonsalast = document.createElement('a');
              commandbuttonsafist.className = 'commandbuttonsafist';
              commandbuttonsalast.className = 'commandbuttonsalast';
              commandbuttons.appendChild(commandbuttonsafist);
              commandbuttonsafist.innerHTML = '&lt;上一页';
              commandbuttonsalast.innerHTML = '下一页&gt;';
              for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
                let commandbuttonsa = document.createElement('a');
                commandbuttonsa.className = 'commandbuttonsa';
                commandbuttons.appendChild(commandbuttonsa);
                commandbuttonsa.innerHTML = a + 1;
                commandbuttonsa.setAttribute('number', a);
              }
              if ((parseInt(result21.total / 20) + 1) > 9) {
                let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
                commandbuttonsas[8].innerHTML = '...';
                commandbuttonsas[8].style.border = 'none';
                commandbuttonsas[8].style.width = '5px';
                commandbuttonsas[8].style.marginLeft = 0;
                for (let d = 9; d < parseInt(result21.total / 20); d++) {
                  commandbuttonsas[d].style.display = 'none';
                }
              }
              commandbuttons.appendChild(commandbuttonsalast);
              let commandbuttonsas = document.querySelectorAll(".commandbuttonsa");
              commandbuttonsas[0].style.backgroundColor = 'red';
              commandbuttonsas[0].style.color = 'white';
              let total = (parseInt(result21.total / 20) + 1);
              for (let a = 0; a < (parseInt(result21.total / 20) + 1); a++) {
                commandbuttonsas[a].addEventListener('click', () => {
                  flag7 = commandbuttonsas[a].getAttribute('number');
                  for (let c = 0; c < (parseInt(result21.total / 20) + 1); c++) {
                    commandbuttonsas[c].style.backgroundColor = 'white';
                    commandbuttonsas[c].style.color = 'black';
                  }
                  commandbuttonsas[a].style.backgroundColor = 'red';
                  commandbuttonsas[a].style.color = 'white';
                });

                commandbuttonsas[a].addEventListener('click', () => {
                  flag7 = parseInt(commandbuttonsas[a].getAttribute('number'));
                  if (flag7 >= 5 && flag7 <= (parseInt(result21.total / 20) - 5) && total >= 10) {
                    commandbuttonsas[8].innerHTML = '9';
                    commandbuttonsas[8].style.width = '20px';
                    commandbuttonsas[8].style.border = '1px solid black';
                    commandbuttonsas[8].style.marginLeft = '5px';
                    commandbuttonsas[1].innerHTML = '...';
                    commandbuttonsas[1].style.border = 'none';
                    commandbuttonsas[1].style.width = '5px';
                    commandbuttonsas[1].style.marginLeft = 0;
                    commandbuttonsas[total - 2].style.display = 'inline-block';
                    commandbuttonsas[total - 2].innerHTML = '...';
                    commandbuttonsas[total - 2].style.border = 'none';
                    commandbuttonsas[total - 2].style.width = '5px';
                    commandbuttonsas[total - 2].style.marginLeft = 0;
                    if (flag7 >= flag8) {
                      for (let d = 2; d < flag7 - 3; d++) {
                        commandbuttonsas[d].style.display = 'none';
                      }
                      for (let f = flag7; f <= parseInt(flag7) + 3; f++) {
                        commandbuttonsas[f].style.display = 'inline-block';
                      }
                      flag8 = flag7;
                    }
                    else {
                      for (let d = flag7 + 4; d < total - 2; d++) {
                        commandbuttonsas[d].style.display = 'none';
                      }
                      for (let f = flag7; f >= parseInt(flag7) - 3; f--) {
                        commandbuttonsas[f].style.display = 'inline-block';
                      }
                      flag8 = flag7;
                    }
                  }
                  else if (flag7 < 5 && total >= 10) {
                    commandbuttonsas[8].style.display = 'inline-block'
                    commandbuttonsas[8].innerHTML = '...';
                    commandbuttonsas[8].style.border = 'none';
                    commandbuttonsas[8].style.width = '5px';
                    commandbuttonsas[8].style.marginLeft = 0;
                    commandbuttonsas[1].innerHTML = '2';
                    commandbuttonsas[1].style.border = '1px solid black';
                    commandbuttonsas[1].style.width = '20px';
                    commandbuttonsas[1].style.marginLeft = '5px';
                    for (let x = 0; x < 8; x++) {
                      commandbuttonsas[x].style.display = 'inline-block';
                    }
                    for (let x = 9; x < total - 1; x++) {
                      commandbuttonsas[x].style.display = 'none';
                    }
                  }
                  else if (flag7 > (parseInt(result21.total / 20) - 5) && total >= 10) {
                    commandbuttonsas[total - 2].style.display = 'inline-block';
                    commandbuttonsas[total - 2].innerHTML = total - 1;
                    commandbuttonsas[total - 2].style.border = '1px solid black';
                    commandbuttonsas[total - 2].style.width = '20px';
                    commandbuttonsas[total - 2].style.marginLeft = '5px';
                    commandbuttonsas[1].display = 'inline-block';
                    commandbuttonsas[1].innerHTML = '...';
                    commandbuttonsas[1].style.border = 'none';
                    commandbuttonsas[1].style.width = '5px';
                    commandbuttonsas[1].style.marginLeft = 0;
                    for (let x = total - 8; x < total; x++) {
                      commandbuttonsas[x].style.display = 'inline-block';
                    }
                    for (let x = 2; x < total - 8; x++) {
                      commandbuttonsas[x].style.display = 'none';
                    }
                  }
                })
              }
              let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
                method: "POST"
              })
              let result2 = await response2.json();
              if (result2.comments.length != 0) {
                for (let b = 0; b < result2.comments.length; b++) {
                  let onecommand = document.createElement("div");
                  let headportrait = document.createElement("img");
                  let onecommandlf = document.createElement("div");
                  let onecommandlf11 = document.createElement("div");
                  let onecommandlf2 = document.createElement("div");
                  let onecommandlf3 = document.createElement("div");
                  let onecommandlf1a = document.createElement("a");
                  let onecommandlf1span = document.createElement("span");
                  let onecommandlf2a = document.createElement("a");
                  let onecommandlf2span = document.createElement("span");
                  let triangle = document.createElement("div");
                  let timestr = document.createElement("span");
                  let likedcount = document.createElement("span");
                  let likedcountspan = document.createElement("span");
                  let l = document.createElement("span");
                  let response = document.createElement("span");
                  let hr = document.createElement("hr");
                  onecommandlf11.className = 'one-commandlf1';
                  onecommandlf1a.className = 'one-command-lf1a';
                  onecommandlf2a.className = 'one-command-lf1a';
                  onecommand.className = 'one-command';
                  headportrait.className = 'head-portrait';
                  onecommandlf.className = 'one-command-lf';
                  onecommandlf1span.className = 'one-command-lf1span';
                  onecommandlf2span.className = 'one-command-lf2span';
                  onecommandlf2.className = 'one-command-lf2';
                  onecommandlf3.className = 'one-command-lf3';
                  triangle.className = 'triangle';
                  timestr.className = 'timestr';
                  likedcount.className = 'likedcount';
                  likedcountspan.className = 'likedcountspan';
                  l.className = 'l';
                  response.className = 'response';
                  hr.className = 'hr';
                  commandbodybody2.appendChild(onecommand);
                  commandbodybody2.appendChild(hr);
                  onecommand.appendChild(headportrait);
                  onecommand.appendChild(onecommandlf);
                  onecommandlf.appendChild(onecommandlf11);
                  onecommandlf.appendChild(onecommandlf2);
                  onecommandlf.appendChild(onecommandlf3);
                  onecommandlf11.appendChild(onecommandlf1a);
                  onecommandlf11.appendChild(onecommandlf1span);
                  onecommandlf2.appendChild(onecommandlf2a);
                  onecommandlf2.appendChild(onecommandlf2span);
                  onecommandlf2.appendChild(triangle);
                  onecommandlf3.appendChild(timestr);
                  onecommandlf3.appendChild(likedcount);
                  onecommandlf3.appendChild(l);
                  onecommandlf3.appendChild(response);
                  onecommandlf3.appendChild(likedcountspan);
                  timestr.innerHTML = result2.comments[b].timeStr;
                  likedcount.innerHTML = '';
                  likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
                  l.innerHTML = "|";
                  response.innerHTML = '回复';
                  onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
                  onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
                  headportrait.src = result2.comments[b].user.avatarUrl;
                  together2.innerHTML = '(' + result2.total + ')';
                  commandtogether.innerHTML = "共" + result2.total + "条评论";
                  if (result2.comments[b].beReplied.length != 0) {
                    onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
                    onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
                    setTimeout(() => {
                      onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
                      onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                    }, 500)
                  }
                  else {
                    onecommandlf2.style.display = 'none';
                  }
                  setTimeout(() => {
                    onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                    onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                  }, 500)
                }
              }
              else {                                                              /////////////////////////////////////////////////////////////////////
                commandbodycommon.style.display = 'none';
              }
              detailcommand.style.height = result2.hotComments.length * 150 + result2.comments.length * 150 + "px";
              setTimeout(() => {
                detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px';
              }, 200);

              let u = 0;
              setInterval(async () => {
                if (u != flag7) {

                  let response2 = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id + '&offset=' + flag7 * 20 + '&limit=20', {
                    method: "POST"
                  })
                  let result2 = await response2.json();
                  let response2a = await fetch('http://redrock.udday.cn:2022/comment/playlist?id=' + id, {
                    method: "POST"
                  })
                  let result2a = await response2a.json();
                  for (let g = 1; g <= result2.comments.length * 2; g++) {
                    console.log(g)
                    commandbodybody2.childNodes[1].remove();
                  }
                  if (result2.comments.length != 0) {
                    for (let b = 0; b < result2.comments.length; b++) {
                      let onecommand = document.createElement("div");
                      let headportrait = document.createElement("img");
                      let onecommandlf = document.createElement("div");
                      let onecommandlf11 = document.createElement("div");
                      let onecommandlf2 = document.createElement("div");
                      let onecommandlf3 = document.createElement("div");
                      let onecommandlf1a = document.createElement("a");
                      let onecommandlf1span = document.createElement("span");
                      let onecommandlf2a = document.createElement("a");
                      let onecommandlf2span = document.createElement("span");
                      let triangle = document.createElement("div");
                      let timestr = document.createElement("span");
                      let likedcount = document.createElement("span");
                      let likedcountspan = document.createElement("span");
                      let l = document.createElement("span");
                      let response = document.createElement("span");
                      let hr = document.createElement("hr");
                      onecommandlf11.className = 'one-commandlf1';
                      onecommandlf1a.className = 'one-command-lf1a';
                      onecommandlf2a.className = 'one-command-lf1a';
                      onecommand.className = 'one-command';
                      headportrait.className = 'head-portrait';
                      onecommandlf.className = 'one-command-lf';
                      onecommandlf1span.className = 'one-command-lf1span';
                      onecommandlf2span.className = 'one-command-lf2span';
                      onecommandlf2.className = 'one-command-lf2';
                      onecommandlf3.className = 'one-command-lf3';
                      triangle.className = 'triangle';
                      timestr.className = 'timestr';
                      likedcount.className = 'likedcount';
                      likedcountspan.className = 'likedcountspan';
                      l.className = 'l';
                      response.className = 'response';
                      hr.className = 'hr';
                      commandbodybody2.appendChild(onecommand);
                      commandbodybody2.appendChild(hr);
                      onecommand.appendChild(headportrait);
                      onecommand.appendChild(onecommandlf);
                      onecommandlf.appendChild(onecommandlf11);
                      onecommandlf.appendChild(onecommandlf2);
                      onecommandlf.appendChild(onecommandlf3);
                      onecommandlf11.appendChild(onecommandlf1a);
                      onecommandlf11.appendChild(onecommandlf1span);
                      onecommandlf2.appendChild(onecommandlf2a);
                      onecommandlf2.appendChild(onecommandlf2span);
                      onecommandlf2.appendChild(triangle);
                      onecommandlf3.appendChild(timestr);
                      onecommandlf3.appendChild(likedcount);
                      onecommandlf3.appendChild(l);
                      onecommandlf3.appendChild(response);
                      onecommandlf3.appendChild(likedcountspan);
                      timestr.innerHTML = result2.comments[b].timeStr;
                      likedcount.innerHTML = '';
                      likedcountspan.innerHTML = "(" + result2.comments[b].likedCount + ")";
                      l.innerHTML = "|";
                      response.innerHTML = '回复';
                      onecommandlf1span.innerHTML = ":" + result2.comments[b].content;
                      onecommandlf1a.innerHTML = result2.comments[b].user.nickname;
                      headportrait.src = result2.comments[b].user.avatarUrl;
                      together2.innerHTML = '(' + result2.total + ')';
                      commandtogether.innerHTML = "共" + result2.total + "条评论";
                      if (result2.comments[b].beReplied.length != 0) {
                        onecommandlf2a.innerHTML = result2.comments[b].beReplied[0].user.nickname;
                        onecommandlf2span.innerHTML = ":" + result2.comments[b].beReplied[0].content;
                        setTimeout(() => {
                          onecommandlf2.style.top = onecommandlf11.offsetHeight + 20 + "px";
                          onecommandlf2.style.height = onecommandlf2span.offsetHeight + 'px';
                        }, 500)
                      }
                      else {
                        onecommandlf2.style.display = 'none';
                      }
                      setTimeout(() => {
                        onecommand.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                        onecommandlf.style.height = onecommandlf11.offsetHeight + onecommandlf2.offsetHeight + onecommandlf3.offsetHeight + 40 + 'px';
                      }, 500)
                    }
                  }
                  else {                                                              /////////////////////////////////////////////////////////////////////
                    commandbodycommon.style.display = 'none';
                  }
                  detailcommand.style.height = result2a.hotComments.length * 150 + 10000 + "px";
                  setTimeout(() => { detaildiv.style.height = detaildiv2.offsetHeight + detailcommand.offsetHeight + 'px'; }, 200)
                  u = flag7;
                }
              }, 1000)
            })
          }
          let controlsimg = document.querySelector(".controls-img");
          let imgfloat = document.querySelector(".imgfloat");
          let songdetailimg = document.querySelector(".songdetail-img");
          controlsimg.addEventListener("mouseover", () => {
            if(flag13==1){
            imgfloat.style.opacity = '0.6';
            imgfloat.innerHTML = '⬆';
            }
          })
          controlsimg.addEventListener("mouseleave", () => {
            
            if(flag13==1){
       
            imgfloat.style.opacity = '0';
            imgfloat.innerHTML = '';
           
            }
          })
        
        
          controlsimg.addEventListener("click", async () => {
            let songdetail=document.querySelector(".songdetail");
            let songdetailwords=document.querySelector(".songdetail-words");
            let songdetailwordsreally=document.querySelector(".songdetail-wordsreally");
            let songname=document.querySelector(".songname");
            let songsheetname=document.querySelector(".songsheetname");
          
            if(flag13==1){
            songdetail.style.display='block'
            detaildiv2.style.display = 'none';
            imgfloat.style.opacity = '1';
            imgfloat.innerHTML = '⬇';
            flag13=0;
            }else{
             songdetail.style.display='none'
             detaildiv2.style.display = 'block';
             flag13=1;
            }
            setInterval(async () => {
              if (recordid != recordid2) {
                let responsedetail = await fetch("http://redrock.udday.cn:2022/song/detail?ids=" + recordid, { method: "POST" });
                let resultdetail = await responsedetail.json();
                songdetailimg.src = resultdetail.songs[0].al.picUrl;
                songname.innerHTML=resultdetail.songs[0].name;
                songsheetname.innerHTML=resultdetail.songs[0].ar[0].name+'-'+resultdetail.songs[0].al.name;
                recordid2 = recordid;
                let responsewords= await fetch("http://redrock.udday.cn:2022/lyric?id=" + recordid, { method: "POST" });
                let resultwords = await responsewords.json();
                let songwords2=resultwords.lrc.lyric.split("\n");
                let ps=songdetailwordsreally.querySelectorAll('p');
                for(let r=0;r<ps.length;r++){
                  ps[r].remove();
                }
                for(let g=0;g<songwords2.length-1;g++){
                let songwords3=songwords2[g].split("]");
                let songwords4;
                let songwords5;
                let songwords6;
                let songdetailwordsp=document.createElement("p");
                 songwords4=songwords3[0].split('[');
                 songwords5=songwords4[1].split('.');
                 songwords6=songwords5[0].split(':');
                 songdetailwordsp.id='time'+(parseInt(songwords6[0]*60)+parseInt(songwords6[1]));
                 songdetailwordsp.innerHTML=songwords3[1];
                 songdetailwordsreally.appendChild(songdetailwordsp);
                }
              }
            }, 200)
           
            audio.addEventListener("timeupdate",()=>{
              let curtime=parseInt(audio.currentTime);
              if(document.querySelector('#time'+curtime)&&flag10==1){
                let ps=songdetailwordsreally.querySelectorAll('p');
                flag9++;
                for(let h=0;h<ps.length;h++){
                  ps[h].style.fontSize='20px';
                  ps[h].style.fontWight='300';
                  ps[h].style.color='rgb(192, 192, 192)';
                  ps[h].setAttribute("top",h*46);
                  ps[h].setAttribute("time",ps[h].id.replace("time",''));
                }
                document.querySelector('#time'+curtime).style.fontSize='30px';
                document.querySelector('#time'+curtime).style.fontWight='500';
                document.querySelector('#time'+curtime).style.color='black';
                setInterval(()=>{
                  for(let a=0;a<ps.length;a++){
                    if(parseInt(audio.currentTime)==ps[a].getAttribute('time')){
                      songdetailwordsreally.style.top=-ps[a].getAttribute('top')+'px'
                    }
                  }
                 
                },1000)
                flag10=0;
                setTimeout(()=>{
                 flag10=1
                },1000)
              }
            })
        
            let rotateVal = 0;
            if(flag5==0){
            let songdetailimg2d = setInterval(() => {
              rotateVal += 1;
              songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
              songdetailimg.style.transition = '1s linear';
            }, 100)
            clearInterval(songdetailimg.getAttribute("name2d"));
            songdetailimg.setAttribute("name2d", songdetailimg2d);
            
          }
            let controlsplay=document.querySelector(".controls-play");
            let controlsleft=document.querySelector(".controls-left");
            let controlsright=document.querySelector(".controls-right");
          
            controlsplay.addEventListener("click",()=>{
              if(flag5){
                clearInterval(songdetailimg.getAttribute("name2d"));
              }else{
                let songdetailimg2d = setInterval(() => {
                  rotateVal += 1;
                  songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
                  songdetailimg.style.transition = '1s linear';
                }, 100)
                clearInterval(songdetailimg.getAttribute("name2d"));
                songdetailimg.setAttribute("name2d", songdetailimg2d);
              }
            })
            controlsleft.addEventListener("click",()=>{
              flag9=0;
              let songdetailimg2d = setInterval(() => {
                rotateVal += 1;
                songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
                songdetailimg.style.transition = '1s linear';
              }, 100)
              clearInterval(songdetailimg.getAttribute("name2d"));
              songdetailimg.setAttribute("name2d", songdetailimg2d);
            })
            controlsright.addEventListener("click",()=>{
              flag9=0;
              let songdetailimg2d = setInterval(() => {
                rotateVal += 1;
                songdetailimg.style.transform = 'rotate(' + rotateVal + 'deg)';
                songdetailimg.style.transition = '1s linear';
              }, 100)
              clearInterval(songdetailimg.getAttribute("name2d"));
              songdetailimg.setAttribute("name2d", songdetailimg2d);
            })
          })
        }
      }
    }
  })
  songsheetheadhotdoor.onmouseenter = () => {
    songsheetheadhotdoor.style.textDecoration = 'underline';
  }
  songsheetheadhotdoor.onmouseleave = () => {
    songsheetheadhotdoor.style.textDecoration = 'none';
  }
  recommandation.onclick = () => {
    recommandation.style.backgroundColor = 'rgb(54, 53, 53)';
    songsheet.style.backgroundColor = 'rgb(194, 12, 12)';
    circlebigdiv.style.display = 'block';
    hotsong.style.display = 'block';
    hotsongbody.style.display = 'block';
    songsheetdiv.style.display = 'none';
    detaildiv.style.display = 'none';
  }

})