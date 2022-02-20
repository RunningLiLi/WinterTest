$(async function () {
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
    let searchhot = document.querySelector(".searchhot");
    let searchbigdiv=document.querySelector(".searchbigdiv");
    let circlebigdiv = document.querySelector(".circle-bigdiv");
    let hotsong = document.querySelector(".hotsong");
    let songsheetdiv = document.querySelector(".songsheet-div");
    let detaildiv = document.querySelector(".detail-div");
    let searchbody=document.querySelector(".searchbody");
    let searchhh=document.querySelector(".searchhh");
    // let hotone=document.querySelector(".hotone");
    // let hotnum=document.querySelector(".hotnum");
    // let songnames=document.querySelector(".songnames");
    // let songcount=document.querySelector(".songcount");
    // let songhotico=document.querySelector(".songhotico");
    let searchinput = document.querySelector(".search-input");
    let audio=document.querySelector("audio");
    let tr = document.createElement('tr');
    // let div1 = tr.childNodes[0].querySelector('div');
    // let div2 = tr.childNodes[1].querySelector('div');
    // let div3 = tr.childNodes[2].querySelector('div');
    // let div4 = tr.childNodes[3].querySelector('div');
    // let div5 = tr.childNodes[4].querySelector('div');
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
    let songlisttbody=document.querySelector(".songlisttbody");
    let id;
    let recordid;
    let flag5=1;
    let result = await fetch("http://redrock.udday.cn:2022/search/default", {
        method: "POST"
    });
    let response = await result.json();
    searchinput.placeholder = response.data.realkeyword;
    searchinput.addEventListener("keypress", async (event) => {
        let keyword;
        if (event.keyCode == 13) {
            if (searchinput.value != '') {
                keyword = searchinput.value;
                  let result3=await fetch("http://redrock.udday.cn:2022/cloudsearch?keywords="+keyword);
                  let response3=await result3.json();
                  if(document.querySelectorAll(".searchone")){
                    let searchones=document.querySelectorAll(".searchone");
                        for(let h=0;h<searchones.length;h++){
                          searchones[h].remove();
                        }
                    }
                  searchhh.innerHTML='搜索&nbsp;'+keyword;
                  searchbigdiv.style.display='block';
                  circlebigdiv.style.display='none';
                  hotsong.style.display='none';
                  songsheetdiv.style.display='none';
                  detaildiv.style.display='none';
                  for(let j=0;j<response3.result.songs.length;j++){
                    let searchone=document.createElement("div");
                    let searchoneico=document.createElement("span");
                    let searchonename=document.createElement("span");
                    let searchoneperson=document.createElement("span");
                    let searchonesongsheet=document.createElement("span");
                    let searchonetime=document.createElement("span");
                    searchbody.appendChild(searchone);
                    searchone.appendChild(searchoneico);
                    searchone.appendChild(searchonename);
                    searchone.appendChild(searchoneperson);
                    searchone.appendChild(searchonesongsheet);
                    searchone.appendChild(searchonetime);
                    searchone.className='searchone';
                    searchoneico.className='searchoneico';
                    searchonename.className='searchonename';
                    searchoneperson.className='searchoneperson';
                    searchonesongsheet.className='searchonesongsheet';
                    searchonetime.className='searchonetime';
                    searchonename.innerHTML=response3.result.songs[j].name;
                    searchoneico.innerHTML=''
                    searchoneperson.innerHTML=response3.result.songs[j].ar[0].name;
                    searchonesongsheet.innerHTML=response3.result.songs[j].al.name; 
                    searchonesongsheet.title=response3.result.songs[j].al.name;  
                    searchonetime.innerHTML= formatSeconds(parseInt(response3.result.songs[j].dt/1000));
                    if(j%2==0){
                      searchone.style.backgroundColor= ' rgb(230, 230, 230)';
                    }
                    let ids=response3.result.songs[j].id;
                    searchoneico.addEventListener('click',async()=>{
                      let response4=await fetch('http://redrock.udday.cn:2022/song/url?id='+ids);
                      let result4=await response4.json();
                      let response5 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + ids, {
                      method: "POST"
                       })
                      let result5 = await response5.json();
                      let searchoneicos=document.querySelectorAll(".searchoneico");
                      flag5=0;
                      audio.src=result4.data[0].url;
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid = j;
                      searchoneicos[recordid].style.color='red'
                      controlsimgT.src = result5.songs[0].al.picUrl;
                      controlsprogressbarone.childNodes[1].innerHTML = result5.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result5.songs[0].ar[0].name;
                      controls.style.display = 'block';
                      volumediv.style.display = 'none';
                      audio.play();
                      controlsplay.innerHTML = '';
                      // flag5 = 0;
                      controlsprogressbarreally.style.width = 0;
                      let Timer = setInterval(() => {
                        let length = 450 / (result5.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                          clearInterval(Timer)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer);    
                      let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                      let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsleft.onclick = async () => {
                      let response51 = await fetch('http://redrock.udday.cn:2022/song/url?id='+response3.result.songs[recordid-1].id, {
                        method: "POST"
                      })
                      let result51 = await response51.json();
                      let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid-1].id, {
                        method: "POST"
                      })
                      let result31 = await response31.json();
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid = recordid-1;
                      searchoneicos[recordid].style.color='red'
                      // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                      let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                      let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsprogressbarreally.style.width = 0;
                      let Timer2 = setInterval(() => {
                        let length = 450 / (result31.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlswidth >= 445 || audio.paused) {
                          clearInterval(Timer2)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer2);
                      controlsprogressbarreally.style.width = 0;
                      controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                      controlsimgT.src = result31.songs[0].al.picUrl;
                      audio.src = result51.data[0].url;
                      controls.style.display = 'block';
                      audio.play();
                      controlsplay.innerHTML = '';
                    }
                    
                    controlsright.onclick = async () => {
                      let response61= await fetch('http://redrock.udday.cn:2022/song/url?id=' + response3.result.songs[recordid+1].id, {
                        method: "POST"
                      })
                      let result61 = await response61.json();
                      let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid+1].id, {
                        method: "POST"
                      })
                      let result32 = await response32.json();
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid++;
                      searchoneicos[recordid].style.color='red';
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsprogressbarreally.style.width = 0;
                      let Timer3 = setInterval(() => {
                        let length = 450 / (result32.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlswidth >= 445 || audio.paused) {
                          clearInterval(Timer3)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer3);
                      controlsprogressbarreally.style.width = 0;
                      controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                      controlsimgT.src = result32.songs[0].al.picUrl;
                      audio.src = result61.data[0].url;
                      controls.style.display = 'block';
                      audio.play();
                      controlsplay.innerHTML = '';
                    }
                    controlsplay.onclick = () => {
                      if (flag5) {
                        audio.play();
                        controlsplay.innerHTML = '';
                        flag5 = 0;
                       let Timer4 = setInterval(() => {
                         
                          let length = 450 / (result5.songs[0].dt / 1000);
                          let controlswidth = controlsprogressbarreally.offsetWidth;
                          controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                          if (controlswidth >= 445 || audio.paused) {
                            clearInterval(Timer4)
                          }
                        }, 1000);
                        clearInterval(controls.getAttribute('data-timer-id'));
                        controls.setAttribute('data-timer-id', Timer4);
                      }
                      else {
                        controlsplay.innerHTML = '';
                        audio.pause();
                        flag5 = 1;
                      }
                    }
  
                    })
                   
                  }
            }
            else {
                keyword = searchinput.placeholder;
                let result3=await fetch("http://redrock.udday.cn:2022/cloudsearch?keywords="+keyword);
                  let response3=await result3.json();
                  if(document.querySelectorAll(".searchone")){
                  let searchones=document.querySelectorAll(".searchone");
                      for(let h=0;h<searchones.length;h++){
                        searchones[h].remove();
                      }
                  }
                  searchhh.innerHTML='搜索&nbsp;'+keyword;
                  searchbigdiv.style.display='block';
                  circlebigdiv.style.display='none';
                  hotsong.style.display='none';
                  songsheetdiv.style.display='none';
                  detaildiv.style.display='none';
                  for(let j=0;j<response3.result.songs.length;j++){
                    let searchone=document.createElement("div");
                    let searchoneico=document.createElement("span");
                    let searchonename=document.createElement("span");
                    let searchoneperson=document.createElement("span");
                    let searchonesongsheet=document.createElement("span");
                    let searchonetime=document.createElement("span");
                    searchbody.appendChild(searchone);
                    searchone.appendChild(searchoneico);
                    searchone.appendChild(searchonename);
                    searchone.appendChild(searchoneperson);
                    searchone.appendChild(searchonesongsheet);
                    searchone.appendChild(searchonetime);
                    searchone.className='searchone';
                    searchoneico.className='searchoneico';
                    searchonename.className='searchonename';
                    searchoneperson.className='searchoneperson';
                    searchonesongsheet.className='searchonesongsheet';
                    searchonetime.className='searchonetime';
                    searchonename.innerHTML=response3.result.songs[j].name;
                    searchoneico.innerHTML=''
                    searchoneperson.innerHTML=response3.result.songs[j].ar[0].name;
                    searchonesongsheet.innerHTML=response3.result.songs[j].al.name; 
                    searchonesongsheet.title=response3.result.songs[j].al.name;  
                    searchonetime.innerHTML= formatSeconds(parseInt(response3.result.songs[j].dt/1000));
                    if(j%2==0){
                      searchone.style.backgroundColor= ' rgb(230, 230, 230)';
                    }
                    let ids=response3.result.songs[j].id;
                    searchoneico.addEventListener('click',async()=>{
                      let response4=await fetch('http://redrock.udday.cn:2022/song/url?id='+ids);
                      let result4=await response4.json();
                      let response5 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + ids, {
                      method: "POST"
                       })
                      let result5 = await response5.json();
                      let searchoneicos=document.querySelectorAll(".searchoneico");
                      flag5=0;
                      audio.src=result4.data[0].url;
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid = j;
                      searchoneicos[recordid].style.color='red'
                      controlsimgT.src = result5.songs[0].al.picUrl;
                      controlsprogressbarone.childNodes[1].innerHTML = result5.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result5.songs[0].ar[0].name;
                      controls.style.display = 'block';
                      volumediv.style.display = 'none';
                      audio.play();
                      controlsplay.innerHTML = '';
                      // flag5 = 0;
                      controlsprogressbarreally.style.width = 0;
                      let Timer = setInterval(() => {
                        let length = 450 / (result5.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                          clearInterval(Timer)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer);    
                      let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                      let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsleft.onclick = async () => {
                      let response51 = await fetch('http://redrock.udday.cn:2022/song/url?id='+response3.result.songs[recordid-1].id, {
                        method: "POST"
                      })
                      let result51 = await response51.json();
                      let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid-1].id, {
                        method: "POST"
                      })
                      let result31 = await response31.json();
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid = recordid-1;
                      searchoneicos[recordid].style.color='red'
                      // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                      let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                      let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsprogressbarreally.style.width = 0;
                      let Timer2 = setInterval(() => {
                        let length = 450 / (result31.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlswidth >= 445 || audio.paused) {
                          clearInterval(Timer2)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer2);
                      controlsprogressbarreally.style.width = 0;
                      controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                      controlsimgT.src = result31.songs[0].al.picUrl;
                      audio.src = result51.data[0].url;
                      controls.style.display = 'block';
                      audio.play();
                      controlsplay.innerHTML = '';
                    }
                    
                    controlsright.onclick = async () => {
                      let response61= await fetch('http://redrock.udday.cn:2022/song/url?id=' + response3.result.songs[recordid+1].id, {
                        method: "POST"
                      })
                      let result61 = await response61.json();
                      let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid+1].id, {
                        method: "POST"
                      })
                      let result32 = await response32.json();
                      for(let m=0;m<response3.result.songs.length;m++){
                        searchoneicos[m].style.color='rgb(105, 105, 105)'
                      }
                      recordid++;
                      searchoneicos[recordid].style.color='red';
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
                      setInterval(()=>{
                        controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                      },1000)
                      controlsprogressbarreally.style.width = 0;
                      let Timer3 = setInterval(() => {
                        let length = 450 / (result32.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlswidth >= 445 || audio.paused) {
                          clearInterval(Timer3)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer3);
                      controlsprogressbarreally.style.width = 0;
                      controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                      controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                      controlsimgT.src = result32.songs[0].al.picUrl;
                      audio.src = result61.data[0].url;
                      controls.style.display = 'block';
                      audio.play();
                      controlsplay.innerHTML = '';
                    }
                    controlsplay.onclick = () => {
                      if (flag5) {
                        audio.play();
                        controlsplay.innerHTML = '';
                        flag5 = 0;
                       let Timer4 = setInterval(() => {
                         
                          let length = 450 / (result5.songs[0].dt / 1000);
                          let controlswidth = controlsprogressbarreally.offsetWidth;
                          controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                          if (controlswidth >= 445 || audio.paused) {
                            clearInterval(Timer4)
                          }
                        }, 1000);
                        clearInterval(controls.getAttribute('data-timer-id'));
                        controls.setAttribute('data-timer-id', Timer4);
                      }
                      else {
                        controlsplay.innerHTML = '';
                        audio.pause();
                        flag5 = 1;
                      }
                    }
                      
  
  
  
  
  

                    })
                   
                  }
            }
        }






    })
    searchinput.addEventListener("focus", async () => {
        let result2 = await fetch("http://redrock.udday.cn:2022/search/hot/detail");
        let response2 = await result2.json();
        searchhot.style.display = 'block';
        console.log(response2);
        for (let i = 0; i < 20; i++) {
            let hotone = document.createElement("div");
            let hotnum = document.createElement("span");
            let songnames = document.createElement("span");
            let songcount = document.createElement("songcount");
            let songhotico = document.createElement("img");
            hotone.className = 'hotone';
            hotnum.className = 'hotnum';
            songnames.className = 'songnames';
            songcount.className = 'songcount';
            songhotico.className = 'songhotico';
            searchhot.appendChild(hotone);
            hotone.appendChild(hotnum);
            hotone.appendChild(songnames);
            hotone.appendChild(songcount);
            hotnum.innerHTML = i + 1;
            songnames.innerHTML = response2.data[i].searchWord;
            songcount.innerHTML = response2.data[i].score;
            if (response2.data[i].iconUrl != null) {
                hotone.appendChild(songhotico);
                songhotico.src = response2.data[i].iconUrl;
            }
            hotone.addEventListener('mouseover',()=>{
                hotone.style.backgroundColor='rgb(230, 230, 230)';
            })
            hotone.addEventListener('mouseleave',()=>{
                hotone.style.backgroundColor='white';
            })
            hotone.addEventListener('click',async()=>{
                let result3=await fetch("http://redrock.udday.cn:2022/cloudsearch?keywords="+response2.data[i].searchWord);
                let response3=await result3.json();
                if(document.querySelectorAll(".searchone")){
                  let searchones=document.querySelectorAll(".searchone");
                      for(let h=0;h<searchones.length;h++){
                        searchones[h].remove();
                      }
                  }
                searchhh.innerHTML='搜索&nbsp;'+response2.data[i].searchWord;
                searchbigdiv.style.display='block';
                circlebigdiv.style.display='none';
                hotsong.style.display='none';
                songsheetdiv.style.display='none';
                detaildiv.style.display='none';
                for(let j=0;j<response3.result.songs.length;j++){
                  let searchone=document.createElement("div");
                  let searchoneico=document.createElement("span");
                  let searchonename=document.createElement("span");
                  let searchoneperson=document.createElement("span");
                  let searchonesongsheet=document.createElement("span");
                  let searchonetime=document.createElement("span");
                  searchbody.appendChild(searchone);
                  searchone.appendChild(searchoneico);
                  searchone.appendChild(searchonename);
                  searchone.appendChild(searchoneperson);
                  searchone.appendChild(searchonesongsheet);
                  searchone.appendChild(searchonetime);
                  searchone.className='searchone';
                  searchoneico.className='searchoneico';
                  searchonename.className='searchonename';
                  searchoneperson.className='searchoneperson';
                  searchonesongsheet.className='searchonesongsheet';
                  searchonetime.className='searchonetime';
                  searchonename.innerHTML=response3.result.songs[j].name;
                  searchoneico.innerHTML=''
                  searchoneperson.innerHTML=response3.result.songs[j].ar[0].name;
                  searchonesongsheet.innerHTML=response3.result.songs[j].al.name; 
                  searchonesongsheet.title=response3.result.songs[j].al.name;  
                  searchonetime.innerHTML= formatSeconds(parseInt(response3.result.songs[j].dt/1000));
                  if(j%2==0){
                    searchone.style.backgroundColor= ' rgb(230, 230, 230)';
                  }
                  let ids=response3.result.songs[j].id;
                  searchoneico.addEventListener('click',async()=>{
                    let response4=await fetch('http://redrock.udday.cn:2022/song/url?id='+ids);
                    let result4=await response4.json();
                    let response5 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + ids, {
                    method: "POST"
                     })
                    let result5 = await response5.json();
                    let searchoneicos=document.querySelectorAll(".searchoneico");
                    flag5=0;
                    audio.src=result4.data[0].url;
                    for(let m=0;m<response3.result.songs.length;m++){
                      searchoneicos[m].style.color='rgb(105, 105, 105)'
                    }
                    recordid = j;
                    searchoneicos[recordid].style.color='red'
                    controlsimgT.src = result5.songs[0].al.picUrl;
                    controlsprogressbarone.childNodes[1].innerHTML = result5.songs[0].name;
                    controlsprogressbarone.childNodes[2].innerHTML = result5.songs[0].ar[0].name;
                    controls.style.display = 'block';
                    volumediv.style.display = 'none';
                    audio.play();
                    controlsplay.innerHTML = '';
                    // flag5 = 0;
                    controlsprogressbarreally.style.width = 0;
                    let Timer = setInterval(() => {
                      let length = 450 / (result5.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlsprogressbarreally.offsetWidth >= 445 || audio.paused) {
                        clearInterval(Timer)
                      }
                    }, 1000);
                    clearInterval(controls.getAttribute('data-timer-id'));
                    controls.setAttribute('data-timer-id', Timer);    
                    let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                    let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                    setInterval(()=>{
                      controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                    },1000)
                    controlsleft.onclick = async () => {
                    let response51 = await fetch('http://redrock.udday.cn:2022/song/url?id='+response3.result.songs[recordid-1].id, {
                      method: "POST"
                    })
                    let result51 = await response51.json();
                    let response31 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid-1].id, {
                      method: "POST"
                    })
                    let result31 = await response31.json();
                    for(let m=0;m<response3.result.songs.length;m++){
                      searchoneicos[m].style.color='rgb(105, 105, 105)'
                    }
                    recordid = recordid-1;
                    searchoneicos[recordid].style.color='red'
                    // controlsprogressbarreally.style.width=audio.currentTime/(result31.songs[0].dt / 1000)*450+'px';
                    let s1 = parseInt(result5.songs[0].dt / 1000) % 60;
                    let m1 = parseInt(parseInt(result5.songs[0].dt / 1000) / 60);
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
                    setInterval(()=>{
                      controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                    },1000)
                    controlsprogressbarreally.style.width = 0;
                    let Timer2 = setInterval(() => {
                      let length = 450 / (result31.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlswidth >= 445 || audio.paused) {
                        clearInterval(Timer2)
                      }
                    }, 1000);
                    clearInterval(controls.getAttribute('data-timer-id'));
                    controls.setAttribute('data-timer-id', Timer2);
                    controlsprogressbarreally.style.width = 0;
                    controlsprogressbarone.childNodes[1].innerHTML = result31.songs[0].name;
                    controlsprogressbarone.childNodes[2].innerHTML = result31.songs[0].ar[0].name;
                    controlsimgT.src = result31.songs[0].al.picUrl;
                    audio.src = result51.data[0].url;
                    controls.style.display = 'block';
                    audio.play();
                    controlsplay.innerHTML = '';
                  }
                  
                  controlsright.onclick = async () => {
                    let response61= await fetch('http://redrock.udday.cn:2022/song/url?id=' + response3.result.songs[recordid+1].id, {
                      method: "POST"
                    })
                    let result61 = await response61.json();
                    let response32 = await fetch('http://redrock.udday.cn:2022/song/detail?ids=' + response3.result.songs[recordid+1].id, {
                      method: "POST"
                    })
                    let result32 = await response32.json();
                    for(let m=0;m<response3.result.songs.length;m++){
                      searchoneicos[m].style.color='rgb(105, 105, 105)'
                    }
                    recordid++;
                    searchoneicos[recordid].style.color='red';
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
                    setInterval(()=>{
                      controlstime1.innerHTML=formatSeconds(parseInt(audio.currentTime))+'/';
                    },1000)
                    controlsprogressbarreally.style.width = 0;
                    let Timer3 = setInterval(() => {
                      let length = 450 / (result32.songs[0].dt / 1000);
                      let controlswidth = controlsprogressbarreally.offsetWidth;
                      controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                      if (controlswidth >= 445 || audio.paused) {
                        clearInterval(Timer3)
                      }
                    }, 1000);
                    clearInterval(controls.getAttribute('data-timer-id'));
                    controls.setAttribute('data-timer-id', Timer3);
                    controlsprogressbarreally.style.width = 0;
                    controlsprogressbarone.childNodes[1].innerHTML = result32.songs[0].name;
                    controlsprogressbarone.childNodes[2].innerHTML = result32.songs[0].ar[0].name;
                    controlsimgT.src = result32.songs[0].al.picUrl;
                    audio.src = result61.data[0].url;
                    controls.style.display = 'block';
                    audio.play();
                    controlsplay.innerHTML = '';
                  }
                  controlsplay.onclick = () => {
                    if (flag5) {
                      audio.play();
                      controlsplay.innerHTML = '';
                      flag5 = 0;
                     let Timer4 = setInterval(() => {
                       
                        let length = 450 / (result5.songs[0].dt / 1000);
                        let controlswidth = controlsprogressbarreally.offsetWidth;
                        controlsprogressbarreally.style.width = (controlsprogressbarreally.offsetWidth + length) + 'px';
                        if (controlswidth >= 445 || audio.paused) {
                          clearInterval(Timer4)
                        }
                      }, 1000);
                      clearInterval(controls.getAttribute('data-timer-id'));
                      controls.setAttribute('data-timer-id', Timer4);
                    }
                    else {
                      controlsplay.innerHTML = '';
                      audio.pause();
                      flag5 = 1;
                    }
                  }
                    


















                  })
                 
                }
               





            })

        }
    })
    searchinput.addEventListener("blur", () => {
        setTimeout(()=>{
            searchhot.style.display = 'none';
        },100)
          
    })
  

})