!function(){"use strict"
var r=function(){var r,n,o,t,e,i,s,c,h,u,l
return l=4*(1<<30),r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479],u=function(r){return 0>r&&(r+=l),("00000000"+r.toString(16)).slice(-8)},i=[[16,50,84,118,152,186,220,254],[174,132,249,109,193,32,123,53],[139,12,37,223,234,99,23,73],[151,19,205,235,98,165,4,143],[9,117,66,250,30,203,134,211],[194,166,176,56,212,87,239,145],[92,241,222,164,112,54,41,184],[189,231,28,147,5,79,104,162],[246,158,59,128,44,125,65,90],[42,72,103,81,191,233,195,13]],s=function(r,n,o){var t=c[r]^c[n]
c[r]=t>>>o|t<<32-o},n=function(r,n,u,l,a){var f=t+i[o][r]%16,g=t+(i[o][r]>>4)
n%=4,u=4+u%4,l=8+l%4,a=12+a%4,c[n]+=c[u]+(h[f]^e[g%16]),s(a,n,16),c[l]+=c[a],s(u,l,12),c[n]+=c[u]+(h[g]^e[f%16]),s(a,n,8),c[l]+=c[a],s(u,l,7)},function(i,s){s instanceof Array&&4===s.length||(s=[0,0,0,0])
var l,a,f,g,p,v,d,m
for(a=r.slice(0),l=e.slice(0,8),o=0;4>o;o+=1)l[o]^=s[o]
if(f=16*i.length,p=f%512>446||f%512===0?0:f,f%512===432)i+="老"
else{for(i+="耀";i.length%32!==27;)i+="\x00"
i+=""}for(h=[],m=0;m<i.length;m+=2)h.push(65536*i.charCodeAt(m)+i.charCodeAt(m+1))
for(h.push(0),h.push(f),v=h.length-16,d=0,t=0;t<h.length;t+=16){for(d+=512,g=t===v?p:Math.min(f,d),c=a.concat(l),c[12]^=g,c[13]^=g,o=0;10>o;o+=1)for(m=0;8>m;m+=1)4>m?n(m,m,m,m,m):n(m,m,m+1,m+2,m+3)
for(m=0;8>m;m+=1)a[m]^=s[m%4]^c[m]^c[m+8]}return a.map(u).join("")}}()
exports.blake32=r
var n=function(){var r,n,o,t,e,i,s,c,h,u,l,a,f,g,p
for(u=function(r){return("00"+r.toString(16)).slice(-2)},l=function(r){return u(255&r)+u(r>>>8)+u(r>>>16)+u(r>>>24)},r=[],n=[],t=[],o=0;16>o;o+=1)n[o]=2863311520+o,r[o]=1078018627+67372036*o,t[o]=89478485*(o+16)
return f=function(r,n){return(r<<n)+(r>>>32-n)},e=[19,23,25,29,4,8,12,15,3,2,1,2,1,1,2,2],g=function(r,n){return 4>n?f(r,e[n])^f(r,e[n+4])^r<<e[n+8]^r>>>e[n+12]:r^r>>>n-3},i=[21,7,5,1,3,22,4,11,24,6,22,20,3,4,7,2,5,24,21,21,16,6,22,18],p=function(r,n){return n=i[n],16>n?r>>>n:r<<n-16},s=[29,13,27,13,25,21,18,4,5,11,17,24,19,31,5,24],c=[5,7,10,13,14],h=[0,3,7,13,16,19,23,27],a=function(r,n){var o,e,i,u,l,a,v,d
for(d=[],i=0;16>i;i+=1){for(a=0,u=0;5>u;u+=1)l=(i+c[u])%16,v=n[l]^r[l],a+=(s[i]>>u)%2?v:-v
d[i]=n[(i+1)%16]+g(a,i%5)}for(i=0;16>i;i+=1)for(a=(i+3)%16,v=(i+10)%16,d[i+16]=n[(i+7)%16]^t[i]+f(r[i],1+i)+f(r[a],1+a)-f(r[v],1+v),l=1;17>l;l+=1)a=d[i+l-1],d[i+16]+=2>i?g(a,l%4):l>14?g(a,l-11):l%2?a:f(a,h[l/2])
for(o=e=0,i=16;24>i;i+=1)o^=d[i],e^=d[i+8]
for(e^=o,i=0;16>i;i+=1)n[i]=8>i?(o^d[i]^d[i+24])+(r[i]^p(e,i)^p(d[i+16],i+16)):(e^r[i]^d[i+16])+(d[i]^p(o,i)^d[16+(i-1)%8])+f(n[(i-4)%8],i+1)
return n},function(o){var t,e,i,s
for(t=16*o.length,o+="";o.length%32!==28;)o+="\x00"
for(i=[],e=0;e<o.length;e+=2)i.push(o.charCodeAt(e)+65536*o.charCodeAt(e+1))
for(i.push(t),i.push(0),s=r.slice(0),e=0;e<i.length;e+=16)a(i.slice(e,e+16),s)
return a(s,n.slice(0)).slice(8,16).map(l).join("")}}()
exports.bmw=n
var o=function(){var r,n,o,t,e,i,s,c,h,u,l,a,f
return e=256,r=[e/8,32,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],u=function(n,o){for(s=0;16>s;s+=1)r[16+s]+=r[s],r[s]=r[s]<<n^r[s]>>>o},l=function(n,o){for(s=0;16>s;s+=1)s&n&&(c=s^n,i=r[s]^r[c+16],r[s]=r[c]^r[s+16],r[c]=i)
for(s=16;32>s;s+=1)s&o&&(c=s^o,i=r[s],r[s]=r[c],r[c]=i)},n=function(r){for(r*=16,h=0;r>h;h+=1)u(7,25),l(8,2),u(11,21),l(4,1)},n(10),t=r.slice(0),a=function(r){return("00"+r.toString(16)).slice(-2)},f=function(r){return a(255&r)+a(r>>>8)+a(r>>>16)+a(r>>>24)},function(i){var s,c
for(r=t.slice(0),i+="";i.length%16>0;)i+="\x00"
for(o=[],c=0;c<i.length;c+=2)o.push(i.charCodeAt(c)+65536*i.charCodeAt(c+1))
for(s=0;s<o.length;s+=8){for(c=0;8>c;c+=1)r[c]^=o[s+c]
n(1)}return r[31]^=1,n(10),r.map(f).join("").substring(0,e/4)}}()
exports.cubehash=o
var t=function(){var r,n,o,t,e,i,s,c,h,u,l,a
return a=function(r,n){this.lo=r?r:0,this.hi=n?n:0},a.clone=function(r){return new a(r.lo,r.hi)},a.prototype={xor:function(r){return this.lo^=r.lo,this.hi^=r.hi,this},plus:function(){var r,n
return r=4*(1<<30),n=function(n,o){var t=n+o
return 0>n&&(t+=r),0>o&&(t+=r),t},function(o){return this.lo=n(this.lo,o.lo),this.hi=(n(this.hi,o.hi)+(this.lo>=r?1:0))%r,this.lo=this.lo%r,this}}(),circ:function(r){var n,o
return r>=32&&(n=this.lo,this.lo=this.hi,this.hi=n,r-=32),o=32-r,n=(this.hi<<r)+(this.lo>>>o),this.lo=(this.lo<<r)+(this.hi>>>o),this.hi=n,this},toString:function(){var r,n
return r=function(r){return("00"+r.toString(16)).slice(-2)},n=function(n){return r(255&n)+r(n>>>8)+r(n>>>16)+r(n>>>24)},function(){return n(this.lo)+n(this.hi)}}()},r=[0,2,4,6,2,4,6,0,4,6,0,2,6,0,2,4],n=[1,3,5,7,1,7,5,3,1,3,5,7,1,7,5,3],o=String.fromCharCode,t=o(0),e=t+t+t+t,e+=e+e+e,e+=e,i=[[46,36,19,37,33,27,14,42,17,49,36,39,44,9,54,56],[39,30,34,24,13,50,10,17,25,29,39,43,8,35,56,22]],l=function(r,n,o){for(var t=0;8>t;t+=1)h[t].plus(r[(o+t)%9])
h[5].plus(n[o%3]),h[6].plus(n[(o+1)%3]),h[7].plus(new a(o))},u=function(o){var t,e,i
for(i=0;16>i;i+=1)t=r[i],e=n[i],h[t].plus(h[e]),h[e].circ(o[i]).xor(h[t])},s=function(r,n){var o,t,s,c,f,g,p,v,d,m
for(m=n.length,m%32?n+=e.slice(m%32):0===m&&(n=e),t=[],c=0,s=0;s<n.length;s+=4)t[c]=new a(n.charCodeAt(s)+65536*n.charCodeAt(s+1),n.charCodeAt(s+2)+65536*n.charCodeAt(s+3)),c+=1
for(p=1<<30,r<<=24,v=t.length-8,f=0;v>=f;f+=8){for(d=f===v?[new a(2*m),new a(0,p+r+(1<<31))]:[new a(8*f+64),new a(0,p+r)],d[2]=(new a).xor(d[0]).xor(d[1]),o=h,o[8]=new a(2851871266,466688986),s=0;8>s;s+=1)o[8].xor(o[s])
for(h=t.slice(f,f+8).map(a.clone),g=0;18>g;g+=1)l(o,d,g),u(i[g%2])
for(l(o,d,g),s=0;8>s;s+=1)h[s].xor(t[f+s])
p=0}},h=[new a,new a,new a,new a,new a,new a,new a,new a],s(4,o(18515,13121,1,0,512)+e.slice(5,16)),c=h,function(r){return h=c.map(a.clone),s(48,r),s(63,t+t+t+t),h.join("")}}()
exports.skein=t
var e=function(){var r,n,o,t,e,i,s,c,h,u,l,a,f
return r=[0,2,4,6,2,4,6,0,4,6,0,2,6,0,2,4],n=[1,3,5,7,1,7,5,3,1,3,5,7,1,7,5,3],o=String.fromCharCode,t=o(0),e=t+t+t+t,e+=e+e+e,i=[[5,16,17,10,11,9,7,25,6,12,20,28,17,12,6,25],[24,2,2,21,17,15,13,11,21,12,4,22,15,23,18,5]],f=function(r,n,o){for(var t=0;8>t;t+=1)h[t]+=r[(o+t)%9]
h[5]+=n[o%5],h[6]+=n[(o+1)%5],h[7]+=o},u=function(o){var t,e,i
for(i=0;16>i;i+=1)t=r[i],e=n[i],h[t]+=h[e],h[e]=h[t]^(h[e]<<o[i]|h[e]>>>32-o[i])},s=function(r,n){var o,t,s,c,l,a,g,p,v,d
for(d=n.length,d%16?n+=e.slice(d%16):0===d&&(n=e),t=[],c=0,s=0;s<n.length;s+=2)t[c]=n.charCodeAt(s)+65536*n.charCodeAt(s+1),c+=1
for(g=1<<30,r<<=24,p=t.length-8,l=0;p>=l;l+=8){for(v=l===p?[2*d,0,0,g+r+(1<<31)]:[4*l+32,0,0,g+r],v[4]=v[0]^v[3],o=h,o[8]=1431655765,s=0;8>s;s+=1)o[8]^=o[s]
for(h=t.slice(l,l+8),a=0;18>a;a+=1)f(o,v,a),u(i[a%2])
for(f(o,v,a),s=0;8>s;s+=1)h[s]^=t[l+s]
g=0}},l=function(r){return("00"+r.toString(16)).slice(-2)},a=function(r){return l(255&r)+l(r>>>8)+l(r>>>16)+l(r>>>24)},h=[0,0,0,0,0,0,0,0],s(4,o(21352,28267,1,0,256)+e.slice(5)),c=h,function(r){return h=c.slice(0),s(48,r),s(63,t+t+t+t),h.map(a).join("")}}()
exports.halfskein=e
var i=function(){var r,n,o,t,e,i,s,c,h,u,l,a
for(e=function(r,n){return(r<<n)+(r>>>32-n)},l=function(r){return("00"+r.toString(16)).slice(-2)},a=function(r){return l(255&r)+l(r>>>8)+l(r>>>16)+l(r>>>24)},i=function(i,s,c){var h,u,l
for(h=0;16>h;h+=1)n[h]=e(n[h]+t[i+h],17)
for(r[0]^=s,r[1]^=c,u=0;3>u;u+=1)for(h=0;16>h;h+=1)l=(h+16*u)%12,r[l]=3*(r[l]^5*e(r[(l+11)%12],15)^o[(24-h)%16])^n[(h+13)%16]^n[(h+9)%16]&~n[(h+6)%16]^t[i+h],n[h]=e(n[h],1)^~r[l]
for(u=0;36>u;u+=1)r[u%12]+=o[(u+3)%16]
for(h=0;16>h;h+=1)o[h]-=t[i+h]
l=n,n=o,o=l},n=[],o=[],t=[],u=0;16>u;u+=1)n[u]=o[u]=0,t[u]=256+u,t[u+16]=272+u
return r=n.slice(4),i(0,-1,-1),i(16,0,0),s=r,c=n,h=o,function(e){var u,l=0
for(r=s.slice(0),n=c.slice(0),o=h.slice(0),e+="";e.length%32;)e+="\x00"
for(t=[],u=0;u<e.length;u+=2)t.push(e.charCodeAt(u)+65536*e.charCodeAt(u+1))
for(u=0;u<t.length;u+=16)l+=1,i(u,l,0)
return u-=16,i(u,l,0),i(u,l,0),i(u,l,0),o.slice(8,16).map(a).join("")}}()
exports.shabal=i
var s=function(){var r,n,o,t,e,i,s,c
return o=function(r,n){this.lo=r?r:0,this.hi=n?n:0},o.clone=function(r){return new o(r.lo,r.hi)},o.prototype={xor:function(r){return this.lo^=r.lo,this.hi^=r.hi,this},not:function(){return new o(~this.lo,~this.hi)},and:function(r){return this.lo&=r.lo,this.hi&=r.hi,this},circ:function(r){var n,o
return r>=32&&(n=this.lo,this.lo=this.hi,this.hi=n,r-=32),0===r?this:(o=32-r,n=(this.hi<<r)+(this.lo>>>o),this.lo=(this.lo<<r)+(this.hi>>>o),this.hi=n,this)},toString:function(){var r,n
return r=function(r){return("00"+r.toString(16)).slice(-2)},n=function(n){return r(255&n)+r(n>>>8)+r(n>>>16)+r(n>>>24)},function(){return n(this.lo)+n(this.hi)}}()},e=function(r){var n,t=[]
for(n=0;r>n;n+=1)t[n]=new o
return t},n=function(r){var t=function(r,n){return t.array[r%5+5*(n%5)]}
return t.array=r?r:e(25),t.clone=function(){return new n(t.array.map(o.clone))},t},t=[0,10,20,5,15,16,1,11,21,6,7,17,2,12,22,23,8,18,3,13,14,24,9,19,4],i="0,1;0,8082;z,808A;z,yy;0,808B;0,y0001;z,y8081;z,8009;0,8A;0,88;0,y8009;0,y000A;0,y808B;z,8B;z,8089;z,8003;z,8002;z,80;0,800A;z,y000A;z,y8081;z,8080;0,y0001;z,y8008".replace(/z/g,"80000000").replace(/y/g,"8000").split(";").map(function(r){var n=r.split(",")
return new o(parseInt(n[1],16),parseInt(n[0],16))}),s=[0,1,62,28,27,36,44,6,55,20,3,10,43,25,39,41,45,15,21,8,18,2,61,56,14],c=function(){var n,c,h,u,l,a,f,g
for(f=0;24>f;f+=1){for(l=e(5),n=0;5>n;n+=1)for(c=0;5>c;c+=1)l[n].xor(r(n,c))
for(a=l.map(o.clone),a=a.concat(a.splice(0,1)),n=0;5>n;n+=1)a[n].circ(1).xor(l[(n+4)%5])
for(n=0;5>n;n+=1)for(c=0;5>c;c+=1)r(n,c).xor(a[n])
for(n=0;5>n;n+=1)for(c=0;5>c;c+=1)r(n,c).circ(s[5*c+n])
for(g=r.array.slice(0),h=0;25>h;h+=1)r.array[t[h]]=g[h]
for(u=r.clone(),n=0;5>n;n+=1)for(c=0;5>c;c+=1)r(n,c).xor(u(n+1,c).not().and(u(n+2,c)))
r(0,0).xor(i[f])}},function(t){for(r=new n,t+=" ƈ";t.length%68!==0;)t+="\x00"
var e,i
for(e=0;e<t.length;e+=68){for(i=0;68>i;i+=4)r.array[i/4].xor(new o(t.charCodeAt(e+i)+65536*t.charCodeAt(e+i+1),t.charCodeAt(e+i+2)+65536*t.charCodeAt(e+i+3)))
c()}return r.array.slice(0,4).join("")}}()
if(exports.keccak=s,require.main===module){var c=require("commander")
c.version("0.0.6").usage("[options] 'TEXT' \n  PS: Don't use double quotes, use single quotes! \n\n  Examples: \n  insanehash -b 'Hello World!' \n  insanehash --skein 'Hello World!'").option("-b, --blake32","Use the blake32 algorithm").option("-m, --bmw","Use the bmw algorithm").option("-c, --cubehash","Use the cubehash algorithm").option("-s, --skein","Use the skein algorithm").option("-k, --halfskein","Use the halfskein algorithm").option("-a, --shabal","Use the shabal algorithm").option("-e, --keccak","Use the keccak algorithm").parse(process.argv),c.args.length||(c.help(),process.exit(1)),void 0!==c.blake32?console.log(r(c.args[0])):void 0!==c.bmw?console.log(n(c.args[0])):void 0!==c.cubehash?console.log(o(c.args[0])):void 0!==c.skein?console.log(t(c.args[0])):void 0!==c.halfskein?console.log(e(c.args[0])):void 0!==c.shabal?console.log(i(c.args[0])):void 0!==c.keccak&&console.log(s(c.args[0]))}}()
