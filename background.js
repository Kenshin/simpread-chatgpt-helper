!function(){"use strict";function e(e){let t,n,o,r=!1;return function(a){void 0===t?(t=a,n=0,o=-1):t=function(e,t){const n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}(t,a);const i=t.length;let c=0;for(;n<i;){r&&(10===t[n]&&(c=++n),r=!1);let a=-1;for(;n<i&&-1===a;++n)switch(t[n]){case 58:-1===o&&(o=n-c);break;case 13:r=!0;case 10:a=n}if(-1===a)break;e(t.subarray(c,a),o),c=n,o=-1}c===i?t=void 0:0!==c&&(t=t.subarray(c),n-=c)}}var t=window&&window.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const n="text/event-stream",o="last-event-id";function r(e){const t=e.headers.get("content-type");if(!(null==t?void 0:t.startsWith(n)))throw new Error(`Expected content-type to be ${n}, Actual: ${t}`)}window.fetchEventSource=function(a,i){var{signal:c,headers:s,onopen:d,onmessage:l,onclose:u,onerror:f,openWhenHidden:w,fetch:b}=i,v=t(i,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise(((t,i)=>{const y=Object.assign({},s);let h;function g(){h.abort(),document.hidden||k()}y.accept||(y.accept=n),w||document.addEventListener("visibilitychange",g);let p=1e3,m=0;function O(){document.removeEventListener("visibilitychange",g),window.clearTimeout(m),h.abort()}null==c||c.addEventListener("abort",(()=>{O(),t()}));const j=null!=b?b:window.fetch,E=null!=d?d:r;async function k(){var n;h=new AbortController;try{const n=await j(a,Object.assign(Object.assign({},v),{headers:y,signal:h.signal}));await E(n),await async function(e,t){const n=e.getReader();let o;for(;!(o=await n.read()).done;)t(o.value)}(n.body,e(function(e,t,n){let o={data:"",event:"",id:"",retry:void 0};const r=new TextDecoder;return function(a,i){if(0===a.length)null==n||n(o),o={data:"",event:"",id:"",retry:void 0};else if(i>0){const n=r.decode(a.subarray(0,i)),c=i+(32===a[i+1]?2:1),s=r.decode(a.subarray(c));switch(n){case"data":o.data=o.data?o.data+"\n"+s:s;break;case"event":o.event=s;break;case"id":e(o.id=s);break;case"retry":const n=parseInt(s,10);isNaN(n)||t(o.retry=n)}}}}((e=>{e?y[o]=e:delete y[o]}),(e=>{p=e}),l))),null==u||u(),O(),t()}catch(e){if(!h.signal.aborted)try{const t=null!==(n=null==f?void 0:f(e))&&void 0!==n?n:p;window.clearTimeout(m),m=window.setTimeout(k,t)}catch(e){O(),i(e)}}}k()}))}}();

class ChatGPT {

    get UUID() {
        var __extends=void 0&&(void 0).__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return _extendStatics(d,b)};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __())}}();var ValueUUID=function(){function ValueUUID(_value){this._value=_value;this._value=_value}ValueUUID.prototype.asHex=function(){return this._value};return ValueUUID}();var V4UUID=function(_super){__extends(V4UUID,_super);function V4UUID(){return _super.call(this,[V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),'-',V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),'-','4',V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),'-',V4UUID._oneOf(V4UUID._timeHighBits),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),'-',V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex(),V4UUID._randomHex()].join(''))||this}V4UUID._oneOf=function(array){return array[Math.floor(array.length*Math.random())]};V4UUID._randomHex=function(){return V4UUID._oneOf(V4UUID._chars)};V4UUID._chars=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];V4UUID._timeHighBits=['8','9','a','b'];return V4UUID}(ValueUUID);function generateUuid(){return new V4UUID().asHex()}
        return generateUuid();
    }

    constructor( token ) {
        this.token = token;
    }

    async auth() {
        return new Promise(( resolve, reject ) => {
            const settings = {
                url: 'https://chat.openai.com/api/auth/session',
                method: 'GET',
            };
            $.ajax( settings ).done( response => {
                resolve({ token: response.accessToken });
            })
        });
    }

    promot( word, paragraph = false ) {
        if ( /[\u4e00-\u9fa5]/ig.test( word )) {
            return `你是一个百科大师，我会问你一些问题，请直接帮我解释，注意：不是翻译，而是解释，就像维基百科那样。我的问题是：\n${ word }`;
        } else if ( / /ig.test( word ) || paragraph ) {
            return `You are a professional translation engine, please translate the text into a colloquial, professional, elegant and fluent content, without the style of machine translation.  You must only translate the text content, never interpret it.\n\nTranslate from English to 简体中文. Return translated text only. Only translate the text between [[ and ]].:\n[[${ word }]]`;
        } else {
            return '你是一个翻译引擎，请翻译给出的文本，只需要翻译不需要解释。当且仅当文本只有一个单词时，请给出单词原始形态（如果有）、单词的语种、对应的音标或转写、所有含义（含词性）、双语示例，至少三条例句。如果你认为单词拼写错误，请提示我最可能的正确拼写，否则请严格按照下面格式给到翻译结果：\n    <单词>\n    [<语种>]· / <Pinyin>\n    [<词性缩写>] <中文含义>]\n    例句：\n    <序号><例句>(例句翻译)\n    词源：\n    <词源>\n\n好的，我明白了，请给我这个单词。:\n单词是：' + word;
        }
    }

    messages( word, prompt, paragraph = false ) {
        return [{
            id: this.UUID, 
            role: 'user',
            content: { 'content_type': 'text', parts: [ prompt ? prompt.replace( '{{content}}', word ) : this.promot( word, paragraph ) ]}
        }];
    }

    async translation( mode, word ) {
        return new Promise(( resolve, reject ) => {
            const body = { 
                action: 'next', 
                messages: this.messages( word ),
                model: mode, parent_message_id: this.UUID, stream: true,
            };
            const settings = {
                url: 'https://chat.openai.com/backend-api/conversation',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify( body )
            };
            $.ajax( settings ).done( response => {
                const arr  = response.trim().split( '\n\n' );
                const data = JSON.parse( arr[ arr.length - 2 ].replace( 'data: ', '' ));
                const str  = data.message.content.parts[0];
                const id   = data.conversation_id;
                resolve({ id, trans: str });
            });
        });
    }

    async remove( id ) {
        return new Promise(( resolve, reject ) => {
            const settings = {
                url: 'https://chat.openai.com/backend-api/conversation/' + id,
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({ is_visible: false })
            };
            $.ajax( settings ).done( response => {
                resolve({ result: response });
            });
        });
    }

    async sse( mode, word, callback, paragraph, prompt ) {
        return new Promise( async ( resolve, reject ) => {
            let i = 0, id = '', str = '';
            const body = { 
                action: 'next', 
                messages: this.messages( word, prompt, paragraph ),
                model: mode, parent_message_id: this.UUID, stream: true,
            };
            const ctrl = new AbortController();
            await new fetchEventSource( 'https://chat.openai.com/backend-api/conversation', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( body ),
                signal: ctrl.signal,
                onopen( response ) {
                    if ( response.status === 200 ) {
                        return;
                    }
                    throw new Error( `Failed to send message. HTTP ${ response.status } - ${ response.statusText }` );
                },
                onclose() {
                    throw new Error( 'Failed to send message. Server closed the connection unexpectedly.' );
                },
                onerror( err ) {
                    throw err;
                },
                onmessage( message ) {
                    if ( message.data === '[DONE]' ) {
                        ctrl.abort();
                        console.log( 'DONE' );
                        resolve({ id, trans: str });
                    }
                    if ( i >= 2 ) {
                        const result = JSON.parse( message.data );
                        id  = result.conversation_id;
                        str = result.message.content.parts[0];
                        callback && callback( str );
                    }
                    i++;
                }
            });
        });
    }
}

class Tab {
    constructor( chatgpt, queue = [], i = 0, is_end = false ) {
        this.chatgpt = chatgpt;
        this.queue   = queue;
        this.i       = i;
        this.is_end  = is_end;
    }
}

let tabs = new Map();

chrome.runtime.onMessageExternal.addListener( async ( request, sender, sendResponse ) => {
    console.log( 'current simpread chatgpt stream:', request, sender, sendResponse )
    const { type, status, word, mode, uid, paragraph, delay, prompt } = request;
    if ( type != 'simpread_chatgpt_stream' ) return;
    console.log( 'status: ', status )
    if ( status == 'start' ) {
        const tab       = new Tab();
        tab.chatgpt     = new ChatGPT();
        const { token } = await tab.chatgpt.auth();
        console.log( 'token: ', token )
        tab.chatgpt.token   = token;
        tabs.set( uid, tab );
        const { id, trans } = await tab.chatgpt.sse( mode, word, str => {
            //console.log( str );
            tab.queue.push( str );
            if ( tab.i == 0 ) {
                sendResponse({ str, status: 'pending' });
                tab.i++;
            }
        }, paragraph, prompt );
        tab.is_end  = true;
        await tab.chatgpt.remove( id );
    } else if ( status == 'pending' ) {
        const tab = tabs.get( uid );
        if ( !tab ) return;
        setTimeout(() => {
            if ( tab.is_end && tab.i >= tab.queue.length ) {
                sendResponse({ str: tab.queue[tab.i], status: 'end' });
            } else {
                sendResponse({ str: tab.queue[tab.i], status: 'pending' });
                tab.i++;
            }
        }, delay || 70 );
    } else if ( status == 'end' ) {
        tabs.delete( uid );
    }
    return true;
});