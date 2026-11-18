// เซิร์ฟเวอร์ไฟล์สถิตแบบไม่ต้องติดตั้งอะไรเพิ่ม:  node server.js  → http://localhost:3000
const http=require("http"),fs=require("fs"),path=require("path");
const T={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css",".webp":"image/webp",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"};
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split("?")[0]);if(p.endsWith("/"))p+="index.html";
 const f=path.join(__dirname,path.normalize(p));if(!f.startsWith(__dirname)){r.writeHead(403);return r.end()}
 fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);return r.end("Not found")}r.writeHead(200,{"Content-Type":T[path.extname(f)]||"application/octet-stream","Cache-Control":"public, max-age=3600"});r.end(d)})
}).listen(process.env.PORT||3000,()=>console.log("เปิดที่ http://localhost:"+(process.env.PORT||3000)));
