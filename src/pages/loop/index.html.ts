// metadata
export const version = "0.8.17"
export const title = "For ve While Döngüleri"
export const description = "Example of for and while loop in Solidity"
export const codes = [
  {
    fileName: "Loop.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IExvb3AgewogICAgZnVuY3Rpb24gbG9vcCgpIHB1YmxpYyB7CiAgICAgICAgLy8gZm9yIGxvb3AKICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7CiAgICAgICAgICAgIGlmIChpID09IDMpIHsKICAgICAgICAgICAgICAgIC8vIFNraXAgdG8gbmV4dCBpdGVyYXRpb24gd2l0aCBjb250aW51ZQogICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaWYgKGkgPT0gNSkgewogICAgICAgICAgICAgICAgLy8gRXhpdCBsb29wIHdpdGggYnJlYWsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyB3aGlsZSBsb29wCiAgICAgICAgdWludCBqOwogICAgICAgIHdoaWxlIChqIDwgMTApIHsKICAgICAgICAgICAgaisrOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<p>Solidity, <code>for</code>, <code>while</code> ve <code>do while</code> döngülerini destekler.</p>
<p>Gaz limitine ulaşan ve işlemi başarısız kılan sınırsız döngüler yazılmamalıdır.</p>
<p>Bu nedenle, <code>while</code> ve <code>do while</code> döngüleri nadiren kullanılır.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Dongu</span> </span>{

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dongu</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{

<span class="hljs-comment">// for döngüsü</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i < <span class="hljs-number">10</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {

<span class="hljs-keyword">if</span> (i == <span class="hljs-number">3</span>) {
<span class="hljs-comment">// Devam etmek için continue kullanarak bir sonraki döngüye geç</span>
<span class="hljs-keyword">continue</span>;
    }
    
<span class="hljs-keyword">if</span> (i == <span class="hljs-number">5</span>) {
<span class="hljs-comment">// Döngüyü sonlandırmak için break kullanabilirsiniz.</span>
<span class="hljs-keyword">break</span>;
    }

}
    <span class="hljs-comment">// while döngüsü</span>
    <span class="hljs-keyword">uint</span> j;
    <span class="hljs-keyword">while</span> (j < <span class="hljs-number">10</span>) {
        j<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
    }
  }
}
</code></pre>
`

export default html
