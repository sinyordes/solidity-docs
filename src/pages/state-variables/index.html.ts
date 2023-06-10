// metadata
export const version = "0.8.17"
export const title = "Durum Değişkenini Okuma ve Yazma"

export const description = "Reading and Writing to a State Variable"
export const codes = [
  {
    fileName: "SimpleStorage.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFNpbXBsZVN0b3JhZ2UgewogICAgLy8gU3RhdGUgdmFyaWFibGUgdG8gc3RvcmUgYSBudW1iZXIKICAgIHVpbnQgcHVibGljIG51bTsKCiAgICAvLyBZb3UgbmVlZCB0byBzZW5kIGEgdHJhbnNhY3Rpb24gdG8gd3JpdGUgdG8gYSBzdGF0ZSB2YXJpYWJsZS4KICAgIGZ1bmN0aW9uIHNldCh1aW50IF9udW0pIHB1YmxpYyB7CiAgICAgICAgbnVtID0gX251bTsKICAgIH0KCiAgICAvLyBZb3UgY2FuIHJlYWQgZnJvbSBhIHN0YXRlIHZhcmlhYmxlIHdpdGhvdXQgc2VuZGluZyBhIHRyYW5zYWN0aW9uLgogICAgZnVuY3Rpb24gZ2V0KCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBudW07CiAgICB9Cn0K",
  },
]

const html = `<p>Bir durum değişkeni yazmak veya güncellemek için ağda bir işlem göndermeniz gerekir. Bunun için bir miktar fee ücreti ödersiniz.</p>
<p>Durum değişkenlerini okumak için herhangi bir fee ücreti ödemeniz gerekmez.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BasitDepolama</span> </span>{
    <span class="hljs-comment">// Sayı saklamak için durum değişkeni</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> sayi;

    <span class="hljs-comment">// Bir durum değişkeninde değişiklik yapmak için bir işlem göndermeniz gerekir.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">degistir</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _sayi</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        sayi <span class="hljs-operator">=</span> _sayi;
    }

    <span class="hljs-comment">// // Bir işlem göndermeden bir durum değişkenini okuyabilirsiniz.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">oku</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> sayi;
    }
}
</code></pre>
`

export default html
