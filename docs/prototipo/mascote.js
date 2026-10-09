(function(){
const PAL={K:'#000000',B:'#452b1d',C:'#613b27',D:'#322017',E:'#221813',T:'#1f1f1f',G:'#ed8657',S:'#f6ad7d',P:'#e4caad',N:'#8f745f',W:'#ffffff',w:'#bdb6aa',
  g:'#8b8f96',h:'#6b6f76',L:'#c9ccd2',l:'#a6aab2',X:'#bcd3ea',R:'#9a6b45',r:'#7a5234',M:'#ece6da',v:'#b9bec6'};
const BASE=[
"......KKKKK....",
"...KKKKBCCKKKK.",
"..KCDECCDTCCCKK",
".KCEECEETBEKKCK",
".KEEKDEKDEKKKDK",
"KEEEEDGSKKKKKT.",
"KEBCBESSSSSSSK.",
"KECCCSSKKKSSKK.",
".KBCCSSSSSSSSK.",
"KSSCBSSSKSSSKK.",
"KSGSDSSSKSSSKK.",
"KSSSECSSSDDDSK.",
".KSSTCCSDDDDSK.",
"..KKKECCESBSD..",
"...KGKEEEBBBK..",
"..KTKSSGGKKK...",
".KTTTKKKKKTTK..",
".KTTTTTTTTTTTK.",
"KTTTKTTTTTTKTK.",
"KTTTKTTTTTTKTK.",
"KTTKKTTTTTTKTTK",
"KTKKKTTTTTTKKTK",
"KSSGKKKKKKKKSSK",
".KKKPPPPSPPPKK.",
"..KSPPPSNSPPK..",
"..KPPPSKSPPPK..",
".KSPPPKKSPPPK..",
".KPPPPK.KPPSK..",
".KKKPSK.KPKKK..",
"KTWTKK..KKTWWKK",
"KWWWPK..KWWWWWK",
"KKKKKK..KKKKKKK"].map(r=>r.split(''));
const ARM=[[
"..K.K.",
".KSKSK",
".KSSSK",
".KSSSK",
"..KSK.",
"..KTK.",
"..KTK.",
".KTTK.",
"KTTK..",
"TTK...",
"TK...."],[
"...K.K",
"..KSKS",
"..KSSS",
"..KSSS",
"..KSSK",
"..KTK.",
"..KTK.",
".KTTK.",
"KTTK..",
"TTK...",
"TK...."]];
function G(w,h){const g=[];for(let y=0;y<h;y++)g.push(new Array(w).fill(0));return g;}
function put(g,x,y,c){if(y>=0&&y<g.length&&x>=0&&x<g[0].length)g[y][x]=c;}
function box(g,x,y,w,h,c){for(let j=0;j<h;j++)for(let i=0;i<w;i++)put(g,x+i,y+j,(i===0||j===0||i===w-1||j===h-1)?'K':c);}
function stamp(g,src,ox,oy,rows){(rows||src).forEach((r,j)=>{for(let i=0;i<r.length;i++){const c=r[i];if(c!=='.')put(g,ox+i,oy+j,c);}});}
function body(o){const b=BASE.map(r=>r.slice());if(o.blink)b[9][8]='S';return b;}
function liftFoot(b,x0,x1){for(let y=27;y<=31;y++)for(let x=x0;x<=x1;x++)b[y-1][x]=b[y][x];for(let x=x0;x<=x1;x++)b[31][x]='.';}
// 4-frame walk: base, left foot up, base, right foot up
function walk(i,o){o=o||{};const g=G(20,34),b=body(o),f=i%4;
  if(f===1)liftFoot(b,0,6);if(f===3)liftFoot(b,8,14);
  stamp(g,b,1,2);return g;}
function idle(blink){return walk(0,{blink});}
function wave(i,o){o=o||{};const g=G(20,34),b=body(o);
  for(let y=18;y<=22;y++)for(let x=12;x<=14;x++)b[y][x]='.';
  stamp(g,b,1,2);stamp(g,ARM[i%2],14,8);return g;}
function work(i,o){o=o||{};const g=G(30,34),b=body(o),ox=3,oy=2;
  box(g,0,15,3,14,'g');
  stamp(g,b.slice(0,23),ox,oy);
  box(g,0,25,30,3,'R');for(let x=1;x<29;x++)put(g,x,26,'r');
  box(g,2,27,26,7,'D');box(g,11,29,8,3,'D');put(g,14,30,'R');put(g,15,30,'R');
  // laptop: base + lid seen from the side, screen glow toward him
  box(g,15,23,9,2,'L');
  for(let y=14;y<=23;y++){const x=24-Math.round((y-14)/4);put(g,x-1,y,'X');put(g,x,y,'l');put(g,x+1,y,'K');put(g,x-2,y,'K');}
  // mug + steam
  box(g,25,20,4,5,'M');put(g,29,22,'K');
  const st=(o.steam||0)%2;put(g,26+st,18,'v');put(g,27-st,17,'v');
  // hands on keys (typing = lift one hand a row)
  const L=o.tl?1:0,R=o.tr?1:0,y=oy+22;
  if(L){put(g,ox+1,y,'T');put(g,ox+2,y,'T');put(g,ox+3,y,'T');put(g,ox+1,y-1,'S');put(g,ox+2,y-1,'S');put(g,ox+3,y-1,'G');}
  if(R){put(g,ox+12,y,'T');put(g,ox+13,y,'T');put(g,ox+12,y-1,'S');put(g,ox+13,y-1,'S');}
  else{put(g,ox+12,y,'S');put(g,ox+13,y,'S');put(g,ox+14,y,'K');}
  return g;}
function draw(ctx,g,s,ox,oy){ox=ox||0;oy=oy||0;for(let y=0;y<g.length;y++)for(let x=0;x<g[0].length;x++){const c=g[y][x];if(!c||c==='.')continue;ctx.fillStyle=PAL[c]||'#000';ctx.fillRect(ox+x*s,oy+y*s,s,s);}}
function paint(canvas,g,s){const w=g[0].length*s,h=g.length*s;if(canvas.width!==w)canvas.width=w;if(canvas.height!==h)canvas.height=h;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,w,h);draw(ctx,g,s);}
window.Mascote={PAL,walk,idle,wave,work,draw,paint,W:20,H:34};

if(!customElements.get('eric-mascote'))customElements.define('eric-mascote',class extends HTMLElement{
  connectedCallback(){if(this._on)return;this._on=1;queueMicrotask(()=>this.setup());}
  disconnectedCallback(){this._on=0;clearInterval(this.iv);this.io&&this.io.disconnect();this.mq&&this.mq.removeEventListener('change',this.applyMq);this.innerHTML='';}
  setup(){
    const mode=this.mode=this.getAttribute('mode')||'walk',s=this.s=+(this.getAttribute('size')||4);this.sp=+(this.getAttribute('speed')||1);
    const st=this.style,cw=(mode==='work'?30:20)*s,ch=34*s;
    st.position='relative';st.flexShrink='0';
    if(mode==='walk'){st.width='100%';st.height=ch+'px';st.pointerEvents='none';}
    if(mode==='work'){st.width=cw+'px';st.height=ch+'px';}
    if(mode==='hi'){st.width=(cw+84)+'px';st.height=(ch+44)+'px';st.overflow='hidden';st.cursor='pointer';
      this.addEventListener('mouseenter',()=>this.waveUntil=performance.now()+2200);}
    const c=this.c=document.createElement('canvas');Object.assign(c.style,{position:'absolute',bottom:'0',left:'0',imageRendering:'pixelated',display:'block'});
    this.setAttribute('aria-hidden','true');this.appendChild(c);
    if(mode==='hi'){const b=this.b=document.createElement('span');b.textContent=this.getAttribute('text')||'E aí!';
      Object.assign(b.style,{position:'absolute',left:(cw-6)+'px',top:'4px',padding:'6px 10px',background:'#fff',color:'#101014',border:'2px solid #101014',boxShadow:'3px 3px 0 #101014',fontFamily:'inherit',fontWeight:'700',fontSize:'15px',lineHeight:'1',whiteSpace:'nowrap',opacity:'0'});this.appendChild(b);}
    const hideM=this.hasAttribute('mobile')?this.getAttribute('mobile')==='hide':mode!=='hi';
    this.mq=matchMedia(`(max-width: ${this.getAttribute('hide-below')||760}px)`);this.applyMq=()=>{st.display=hideM&&this.mq.matches?'none':'block';};this.applyMq();this.mq.addEventListener('change',this.applyMq);
    this.rm=false;
    this.wx=0;this.fx=1;this.pause=0;this.lastStep=-1;
    this.draw0();
    this.io=new IntersectionObserver(e=>{const v=e[e.length-1].isIntersecting;if(v&&this.t0==null)this.t0=performance.now();this.vis=v;},{threshold:this.mode==='hi'?0:.2});
    this.io.observe(this);clearInterval(this.iv);this.iv=setInterval(()=>{if(this.vis&&this.t0!=null)this.loop();},1000/(6*this.sp));
  }
  draw0(){const M=window.Mascote;if(this.mode==='work')M.paint(this.c,M.work(0,{}),this.s);else M.paint(this.c,M.idle(false),this.s);
    if(this.mode==='hi'&&!this.rm)this.c.style.transform=`translateY(${34*this.s}px)`;}
  loop(){const M=window.Mascote,now=performance.now(),t=(now-this.t0)/1000,s=this.s,sp=this.sp;
    const step=++this.lastStep;
    const blink=(t%3.4)<0.2;
    if(this.mode==='walk'){const W=this.clientWidth,fw=20*s;
      if(this.pause>0){this.pause-=1/(6*sp);M.paint(this.c,M.idle(this.pause<.7&&this.pause>.4),s);if(this.pause<=0)this.fx*=-1;}
      else{this.wx+=this.fx*2*s;if(this.wx>W-fw){this.wx=W-fw;this.pause=1.8;}if(this.wx<0){this.wx=0;this.pause=1.8;}M.paint(this.c,M.walk(step),s);}
      this.c.style.transform=`translateX(${this.wx}px) scaleX(${this.fx})`;}
    else if(this.mode==='hi'){let y=0,wav=false;
      if(t<.6)y=Math.round((1-(1-Math.pow(1-t/.6,3)))*34);
      else wav=t<3.4||now<(this.waveUntil||0)||((t-.6)%14)>12;
      M.paint(this.c,wav?M.wave(Math.floor(t*3)):M.idle(blink),s);this.c.style.transform=`translateY(${y*s}px)`;this.b.style.opacity=wav?1:0;}
    else{const c=t%6,typing=c<4.2,p=[[1,0],[0,1],[1,0],[0,0],[0,1],[1,0]][step%6];
      M.paint(this.c,M.work(0,{tl:typing?p[0]:0,tr:typing?p[1]:0,blink,steam:Math.floor(t*2)}),s);}
  }
});
})();
