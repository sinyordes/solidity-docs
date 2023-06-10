// metadata
export const version = "0.8.17"
export const title = "If / Else"
export const description = "If / Else conditional statement in Solidity"
export const codes = [
  {
    fileName: "IfElse.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IElmRWxzZSB7CiAgICBmdW5jdGlvbiBmb28odWludCB4KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgaWYgKHggPCAxMCkgewogICAgICAgICAgICByZXR1cm4gMDsKICAgICAgICB9IGVsc2UgaWYgKHggPCAyMCkgewogICAgICAgICAgICByZXR1cm4gMTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICByZXR1cm4gMjsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVybmFyeSh1aW50IF94KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgLy8gaWYgKF94IDwgMTApIHsKICAgICAgICAvLyAgICAgcmV0dXJuIDE7CiAgICAgICAgLy8gfQogICAgICAgIC8vIHJldHVybiAyOwoKICAgICAgICAvLyBzaG9ydGhhbmQgd2F5IHRvIHdyaXRlIGlmIC8gZWxzZSBzdGF0ZW1lbnQKICAgICAgICAvLyB0aGUgIj8iIG9wZXJhdG9yIGlzIGNhbGxlZCB0aGUgdGVybmFyeSBvcGVyYXRvcgogICAgICAgIHJldHVybiBfeCA8IDEwID8gMSA6IDI7CiAgICB9Cn0K",
  },
]

const html = `<p>Solidity <code>if</code>, <code>else if</code> ve <code>else</code> koşullu ifadelerini destekler.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">IfElse</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">kontrol</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
    <span class="hljs-comment">//Bu örnekte kontrol fonksiyonu x değeri ile çalıştırılır.</span> 
        
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            <span class="hljs-comment">// Eğer x 10'dan küçükse 0 değerini döndür.</span> 

            <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&lt;</span> <span class="hljs-number">20</span>) {
           <span class="hljs-comment">// // Eğer x 10'dan büyük veya eşit, 20'den küçükse 1 değerini döndür.</span> 
            
           <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        } <span class="hljs-keyword">else</span> {
             <span class="hljs-comment"> // Yukarıdaki koşullar sağlanmazsa 2 değerini döndür.</span> 
                    
            <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ternary</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// if (_x &lt; 10) {</span>
        <span class="hljs-comment">//     return 1;</span>
        <span class="hljs-comment">// }</span>
        <span class="hljs-comment">// return 2;</span>

        <span class="hljs-comment">// If/else ifadesinin kısa yolu</span>
        <span class="hljs-comment">// "?" operatörü ternary operatör olarak adlandırılır</span>
        <span class="hljs-keyword">return</span> _x <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span> ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;
        <span class="hljs-comment">// Eğer _x 10'dan küçükse 1 değerini döndür, değilse 2 değerini döndür</span>

    }
}
</code></pre>
`

export default html
