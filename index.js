const _0xbe2dbc=_0xea2f;(function(_0x72e226,_0x156a15){const _0x54804d=_0xea2f,_0x3b1673=_0x72e226();while(!![]){try{const _0x7e5913=-parseInt(_0x54804d(0x23e))/0x1+-parseInt(_0x54804d(0x242))/0x2+-parseInt(_0x54804d(0x1e6))/0x3+parseInt(_0x54804d(0x1ef))/0x4*(parseInt(_0x54804d(0x21a))/0x5)+-parseInt(_0x54804d(0x1ed))/0x6*(parseInt(_0x54804d(0x244))/0x7)+-parseInt(_0x54804d(0x1e7))/0x8*(-parseInt(_0x54804d(0x22b))/0x9)+parseInt(_0x54804d(0x239))/0xa;if(_0x7e5913===_0x156a15)break;else _0x3b1673['push'](_0x3b1673['shift']());}catch(_0x281592){_0x3b1673['push'](_0x3b1673['shift']());}}}(_0x40b5,0x6b7de),require(_0xbe2dbc(0x21d))[_0xbe2dbc(0x246)]());const net=require(_0xbe2dbc(0x224)),{TextDecoder}=require(_0xbe2dbc(0x216)),{WebSocket,createWebSocketStream}=require('ws'),axios=require(_0xbe2dbc(0x1fc)),ThrottleGroup=require(_0xbe2dbc(0x20b))[_0xbe2dbc(0x1eb)],NodeCache=require(_0xbe2dbc(0x1fa)),{PORT=0x1f90,UUID_LIST_URL,SPEED_LIMIT_MBPS=0x5,REFRESH_UUID_INTERVAL=0x493e0,DISCORD_WEBHOOK_URL}=process[_0xbe2dbc(0x21c)],BYTE_TO_MBPS=0x400*0x400/0x8,SPEED_LIMIT_BYTES=SPEED_LIMIT_MBPS*BYTE_TO_MBPS;let stats={'totalConnections':0x0,'activeConnections':0x0,'failedConnections':0x0,'authFailures':0x0,'totalTrafficBytes':0x0};const uuidCache=new NodeCache({'stdTTL':0x258}),uploadThrottle=new ThrottleGroup({'rate':SPEED_LIMIT_BYTES}),downloadThrottle=new ThrottleGroup({'rate':SPEED_LIMIT_BYTES});function _0x40b5(){const _0x19c21d=['\x20with\x20UUID:\x20','join','Total\x20Traffic','connect','totalTrafficBytes','Failed\x20Connections:\x20','get','node-cache','Total\x20Connections:\x20','axios','includes','Failed\x20Connections','Failed\x20to\x20send\x20Discord\x20webhook:','once','warn','length','max','WebSocket\x20stream\x20error:\x20','post','\x20MB','Authentication\x20failed\x20for\x20IP:\x20','authFailures','Connection\x20established','uncaughtException','stream-throttle','connection','readUInt8','Authentication\x20failed','readUInt16BE','Connection\x20failed:\x20','pipe','send','hex','toUpperCase','Authentication\x20Failure','util','Authentication\x20Failures:\x20','Target\x20connection\x20established:\x20','Active\x20Connections','15LyEzhm','close','env','dotenv','activeConnections','socket','map','...]','write','message','net','totalConnections','error','\x20UUIDs\x20loaded','set','Uncaught\x20Exception:','replace','1521ZfYHYd','throttle','concat','Speed\x20Limit','Socket\x20error:\x20','New\x20connection\x20from\x20','Message\x20handling\x20error\x20from\x20','data','reduce','Connection\x20established:\x20','slice','authorized_uuids','success','Total\x20Auth\x20Failures','15612830bWGNhP','Authentication\x20failed\x20for\x20UUID:\x20','trim','Active\x20Connections:\x20','Connection\x20failed','840097doWVzq','VLESS\x20Server\x20','toLowerCase','UUID\x20list\x20refreshed','772410BCLwPO','unhandledRejection','21YYchbZ','toFixed','config','Server\x20Statistics','\x20→\x20','Failed\x20to\x20fetch\x20UUID\x20list:\x20','failedConnections','Server\x20started\x20on\x20port:\x20','Auth\x20Failures','info','toString','UUIDs\x20Loaded','2356017uiYqKh','40088ozPYMm','remoteAddress','===\x20Server\x20Statistics\x20===','Total\x20Traffic:\x20','ThrottleGroup','Server','695316leXpZx','Unhandled\x20Rejection\x20at:','521924KftECz',',\x20Active\x20connections:\x20','decode','\x20Mbps'];_0x40b5=function(){return _0x19c21d;};return _0x40b5();}async function sendDiscordLog(_0x48352f,_0x5d69f0,_0x43dd29=[]){const _0x30dedf=_0xbe2dbc;if(!DISCORD_WEBHOOK_URL)return;const _0x142184={'success':0x2ecc71,'error':0xe74c3c,'info':0x3498db};try{const _0x3e1383={'embeds':[{'title':_0x30dedf(0x23f)+_0x48352f[_0x30dedf(0x214)](),'description':_0x5d69f0,'color':_0x142184[_0x48352f]||_0x142184[_0x30dedf(0x1e3)],'fields':_0x43dd29,'timestamp':new Date()['toISOString']()}]};await axios[_0x30dedf(0x205)](DISCORD_WEBHOOK_URL,_0x3e1383);}catch(_0x4575fc){console[_0x30dedf(0x226)](_0x30dedf(0x1ff),_0x4575fc[_0x30dedf(0x223)]);}}const log=(_0x3f794b,..._0x40ee7f)=>{const _0x37c879=_0xbe2dbc,_0x508522=new Date()['toISOString'](),_0x57715=_0x40ee7f[_0x37c879(0x1f4)]('\x20');console[_0x3f794b]('['+_0x508522+']\x20'+_0x3f794b['toUpperCase']()+':\x20'+_0x57715);switch(_0x3f794b){case _0x37c879(0x226):_0x57715[_0x37c879(0x1fd)](_0x37c879(0x20e))&&(stats[_0x37c879(0x208)]++,sendDiscordLog(_0x37c879(0x226),_0x57715,[{'name':'Type','value':_0x37c879(0x215),'inline':!![]},{'name':_0x37c879(0x238),'value':stats[_0x37c879(0x208)]['toString'](),'inline':!![]}]));_0x57715['includes'](_0x37c879(0x23d))&&(stats[_0x37c879(0x1e0)]++,sendDiscordLog(_0x37c879(0x226),_0x57715));break;case _0x37c879(0x1e3):_0x57715[_0x37c879(0x1fd)](_0x37c879(0x209))&&sendDiscordLog(_0x37c879(0x237),_0x57715,[{'name':_0x37c879(0x219),'value':stats[_0x37c879(0x21e)]['toString'](),'inline':!![]}]);break;}},logStats=async()=>{const _0x259333=_0xbe2dbc,_0x37754a=[_0x259333(0x1e9),_0x259333(0x1fb)+stats[_0x259333(0x225)],_0x259333(0x23c)+stats[_0x259333(0x21e)],_0x259333(0x1f8)+stats['failedConnections'],_0x259333(0x217)+stats[_0x259333(0x208)],_0x259333(0x1ea)+(stats[_0x259333(0x1f7)]/(0x400*0x400))['toFixed'](0x2)+_0x259333(0x206)]['join']('\x0a');log('info',_0x37754a),await sendDiscordLog(_0x259333(0x1e3),_0x259333(0x247),[{'name':'Total\x20Connections','value':stats[_0x259333(0x225)][_0x259333(0x1e4)](),'inline':!![]},{'name':_0x259333(0x219),'value':stats[_0x259333(0x21e)][_0x259333(0x1e4)](),'inline':!![]},{'name':_0x259333(0x1fe),'value':stats[_0x259333(0x1e0)][_0x259333(0x1e4)](),'inline':!![]},{'name':_0x259333(0x1e2),'value':stats[_0x259333(0x208)]['toString'](),'inline':!![]},{'name':_0x259333(0x1f5),'value':(stats[_0x259333(0x1f7)]/(0x400*0x400))[_0x259333(0x245)](0x2)+_0x259333(0x206),'inline':!![]}]);};setInterval(logStats,0x493e0);function normalizeUUID(_0x460810){const _0x5acc3c=_0xbe2dbc;return _0x460810[_0x5acc3c(0x22a)](/-/g,'')[_0x5acc3c(0x240)]();}async function refreshUUIDList(){const _0xd8eda3=_0xbe2dbc;try{const _0x204c1a=await axios[_0xd8eda3(0x1f9)](UUID_LIST_URL),_0x3cf736=_0x204c1a[_0xd8eda3(0x232)][_0xd8eda3(0x23b)]()['split']('\x0a')[_0xd8eda3(0x220)](_0x32536f=>normalizeUUID(_0x32536f[_0xd8eda3(0x23b)]()));uuidCache[_0xd8eda3(0x228)](_0xd8eda3(0x236),_0x3cf736),log(_0xd8eda3(0x1e3),'UUID\x20list\x20refreshed\x20successfully.\x20'+_0x3cf736[_0xd8eda3(0x202)]+_0xd8eda3(0x227)),await sendDiscordLog('info',_0xd8eda3(0x241),[{'name':_0xd8eda3(0x1e5),'value':_0x3cf736['length']['toString'](),'inline':!![]}]);}catch(_0x5ce2f7){log(_0xd8eda3(0x226),'Failed\x20to\x20fetch\x20UUID\x20list:',_0x5ce2f7[_0xd8eda3(0x223)]),await sendDiscordLog(_0xd8eda3(0x226),_0xd8eda3(0x1df)+_0x5ce2f7[_0xd8eda3(0x223)]);}}function _0xea2f(_0x4d5391,_0x3e1125){const _0x40b5f9=_0x40b5();return _0xea2f=function(_0xea2f7e,_0x1b3f02){_0xea2f7e=_0xea2f7e-0x1df;let _0x144800=_0x40b5f9[_0xea2f7e];return _0x144800;},_0xea2f(_0x4d5391,_0x3e1125);}refreshUUIDList(),setInterval(refreshUUIDList,REFRESH_UUID_INTERVAL);function isUUIDAuthorized(_0x5d146d){const _0x11c560=_0xbe2dbc,_0xf3b760=uuidCache[_0x11c560(0x1f9)](_0x11c560(0x236))||[],_0x36717c=normalizeUUID(_0x5d146d),_0x5d67d4=_0xf3b760['includes'](_0x36717c);return!_0x5d67d4&&log(_0x11c560(0x201),_0x11c560(0x23a)+_0x5d146d),_0x5d67d4;}const wss=new WebSocket[(_0xbe2dbc(0x1ec))]({'port':PORT},()=>{const _0x3fb547=_0xbe2dbc;log(_0x3fb547(0x1e3),_0x3fb547(0x1e1)+PORT),log(_0x3fb547(0x1e3),'Speed\x20limit\x20set\x20to:\x20'+SPEED_LIMIT_MBPS+_0x3fb547(0x1f2)),sendDiscordLog(_0x3fb547(0x1e3),'Server\x20Started',[{'name':'Port','value':PORT[_0x3fb547(0x1e4)](),'inline':!![]},{'name':_0x3fb547(0x22e),'value':SPEED_LIMIT_MBPS+_0x3fb547(0x1f2),'inline':!![]}]);});wss['on'](_0xbe2dbc(0x20c),(_0x630ce3,_0x32b015)=>{const _0x588a31=_0xbe2dbc,_0x13fbe8=_0x32b015[_0x588a31(0x21f)][_0x588a31(0x1e8)];stats[_0x588a31(0x225)]++,stats[_0x588a31(0x21e)]++,log(_0x588a31(0x1e3),_0x588a31(0x230)+_0x13fbe8+'\x20(Active:\x20'+stats['activeConnections']+')'),_0x630ce3[_0x588a31(0x200)]('message',_0x51b04c=>handleMessage(_0x51b04c,_0x630ce3,_0x13fbe8)),_0x630ce3['on'](_0x588a31(0x21b),()=>{const _0x490e12=_0x588a31;stats['activeConnections']=Math[_0x490e12(0x203)](0x0,stats[_0x490e12(0x21e)]-0x1),log(_0x490e12(0x1e3),'Connection\x20closed\x20for\x20IP:\x20'+_0x13fbe8+_0x490e12(0x1f0)+stats[_0x490e12(0x21e)]),logStats();}),_0x630ce3['on'](_0x588a31(0x226),_0x27d1fc=>{const _0xcf7c93=_0x588a31;log(_0xcf7c93(0x226),'WebSocket\x20error\x20from\x20'+_0x13fbe8+':',_0x27d1fc['message']),stats['activeConnections']=Math[_0xcf7c93(0x203)](0x0,stats['activeConnections']-0x1);});});const handleMessage=(_0x4c04b0,_0x322d06,_0x2d2761)=>{const _0x35bf4b=_0xbe2dbc;try{const _0x51994a=_0x4c04b0[_0x35bf4b(0x235)](0x1,0x11)[_0x35bf4b(0x1e4)](_0x35bf4b(0x213));if(!isUUIDAuthorized(_0x51994a)){log(_0x35bf4b(0x226),_0x35bf4b(0x207)+_0x2d2761+_0x35bf4b(0x1f3)+_0x51994a),_0x322d06['close']();return;}const [_0x2e5bdc]=_0x4c04b0;let _0x5df03b=_0x4c04b0['slice'](0x11,0x12)[_0x35bf4b(0x20d)]()+0x13;const _0x17a782=_0x4c04b0['slice'](_0x5df03b,_0x5df03b+=0x2)[_0x35bf4b(0x20f)](0x0),_0x288bb3=_0x4c04b0[_0x35bf4b(0x235)](_0x5df03b,_0x5df03b+=0x1)['readUInt8'](),_0x6f0bfc={0x1:()=>_0x4c04b0['slice'](_0x5df03b,_0x5df03b+=0x4)['join']('.'),0x2:()=>new TextDecoder()[_0x35bf4b(0x1f1)](_0x4c04b0['slice'](_0x5df03b+0x1,_0x5df03b+=0x1+_0x4c04b0[_0x35bf4b(0x235)](_0x5df03b,_0x5df03b+0x1)[_0x35bf4b(0x20d)]())),0x3:()=>_0x4c04b0[_0x35bf4b(0x235)](_0x5df03b,_0x5df03b+=0x10)[_0x35bf4b(0x233)]((_0x206bbc,_0x5ab7d8,_0x2869a9,_0x4b20e4)=>_0x2869a9%0x2?_0x206bbc[_0x35bf4b(0x22d)](_0x4b20e4[_0x35bf4b(0x235)](_0x2869a9-0x1,_0x2869a9+0x1)):_0x206bbc,[])[_0x35bf4b(0x220)](_0x3abac7=>_0x3abac7[_0x35bf4b(0x20f)](0x0)[_0x35bf4b(0x1e4)](0x10))[_0x35bf4b(0x1f4)](':')},_0x5c186c=_0x6f0bfc[_0x288bb3]?_0x6f0bfc[_0x288bb3]():'';log(_0x35bf4b(0x1e3),_0x35bf4b(0x234)+_0x2d2761+'\x20→\x20'+_0x5c186c+':'+_0x17a782+'\x20[UUID:\x20'+_0x51994a[_0x35bf4b(0x235)](0x0,0x8)+_0x35bf4b(0x221)),_0x322d06[_0x35bf4b(0x212)](new Uint8Array([_0x2e5bdc,0x0]));const _0x3acab7=createWebSocketStream(_0x322d06),_0xce5af0=uploadThrottle[_0x35bf4b(0x22c)](),_0x25aeb0=downloadThrottle[_0x35bf4b(0x22c)]();_0xce5af0['on']('data',_0x370a3b=>{const _0x5c7542=_0x35bf4b;stats[_0x5c7542(0x1f7)]+=_0x370a3b['length'];}),_0x25aeb0['on']('data',_0x53f86e=>{const _0x46bc52=_0x35bf4b;stats[_0x46bc52(0x1f7)]+=_0x53f86e[_0x46bc52(0x202)];}),establishConnection(_0x5c186c,_0x17a782,_0x4c04b0[_0x35bf4b(0x235)](_0x5df03b),_0x3acab7,_0xce5af0,_0x25aeb0,_0x2d2761);}catch(_0x439f66){log(_0x35bf4b(0x226),_0x35bf4b(0x231)+_0x2d2761+':',_0x439f66[_0x35bf4b(0x223)]),_0x322d06[_0x35bf4b(0x21b)]();}},establishConnection=(_0x19c23e,_0x53dde7,_0x45191b,_0x1b79b4,_0x1dff56,_0x550cb7,_0xef089b)=>{const _0x50b3ba=_0xbe2dbc,_0x50955f=net[_0x50b3ba(0x1f6)]({'host':_0x19c23e,'port':_0x53dde7},function(){const _0x3e841f=_0x50b3ba;log(_0x3e841f(0x1e3),_0x3e841f(0x218)+_0xef089b+_0x3e841f(0x248)+_0x19c23e+':'+_0x53dde7),this[_0x3e841f(0x222)](_0x45191b),_0x1b79b4['on'](_0x3e841f(0x226),()=>{const _0x1cc43a=_0x3e841f;log(_0x1cc43a(0x226),_0x1cc43a(0x204)+_0xef089b+_0x1cc43a(0x248)+_0x19c23e+':'+_0x53dde7);})['pipe'](_0x1dff56)['pipe'](this)['on']('error',()=>{const _0x24cf0e=_0x3e841f;log(_0x24cf0e(0x226),_0x24cf0e(0x22f)+_0xef089b+_0x24cf0e(0x248)+_0x19c23e+':'+_0x53dde7);})[_0x3e841f(0x211)](_0x550cb7)[_0x3e841f(0x211)](_0x1b79b4);})['on'](_0x50b3ba(0x226),_0x2eaddc=>{const _0x1d81a1=_0x50b3ba;log(_0x1d81a1(0x226),_0x1d81a1(0x210)+_0xef089b+'\x20→\x20'+_0x19c23e+':'+_0x53dde7+'\x20-\x20'+_0x2eaddc['message']),stats['failedConnections']++,_0x1b79b4['destroy']();});};process['on'](_0xbe2dbc(0x20a),_0xac7faa=>{const _0x3b1949=_0xbe2dbc;log(_0x3b1949(0x226),_0x3b1949(0x229),_0xac7faa['message']),sendDiscordLog(_0x3b1949(0x226),'Uncaught\x20Exception:\x20'+_0xac7faa[_0x3b1949(0x223)]);}),process['on'](_0xbe2dbc(0x243),(_0x14b0ad,_0xf65092)=>{const _0x6e575d=_0xbe2dbc;log(_0x6e575d(0x226),_0x6e575d(0x1ee),_0xf65092,'reason:',_0x14b0ad),sendDiscordLog('error','Unhandled\x20Rejection:\x20'+_0x14b0ad);}),logStats();