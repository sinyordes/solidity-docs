// metadata
export const version = "0.8.17"
export const title = "Değişkenler"
export const description = "Local, state and global variables"
export const codes = [
  {
    fileName: "Variables.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFZhcmlhYmxlcyB7CiAgICAvLyBTdGF0ZSB2YXJpYWJsZXMgYXJlIHN0b3JlZCBvbiB0aGUgYmxvY2tjaGFpbi4KICAgIHN0cmluZyBwdWJsaWMgdGV4dCA9ICJIZWxsbyI7CiAgICB1aW50IHB1YmxpYyBudW0gPSAxMjM7CgogICAgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSBwdWJsaWMgewogICAgICAgIC8vIExvY2FsIHZhcmlhYmxlcyBhcmUgbm90IHNhdmVkIHRvIHRoZSBibG9ja2NoYWluLgogICAgICAgIHVpbnQgaSA9IDQ1NjsKCiAgICAgICAgLy8gSGVyZSBhcmUgc29tZSBnbG9iYWwgdmFyaWFibGVzCiAgICAgICAgdWludCB0aW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7IC8vIEN1cnJlbnQgYmxvY2sgdGltZXN0YW1wCiAgICAgICAgYWRkcmVzcyBzZW5kZXIgPSBtc2cuc2VuZGVyOyAvLyBhZGRyZXNzIG9mIHRoZSBjYWxsZXIKICAgIH0KfQo=",
  },
]

const html = `<p>Solidity'de 3 tür değişken bulunur:</p>
<ul>
<li><strong>Yerel (local):</strong><ul>
<li>Fonksiyon içinde tanımlanan değişkenlerdir.</li>
<li>Bloğ zincirinde saklanmazlar, sadece ilgili fonksiyonun çalışma süresince kullanılırlar.
</li>
</ul>
</li>
<li><strong>Durumsal (state):</strong><ul>
<li>Fonksiyon dışında tanımlanan değişkenlerdir.</li>
<li>Bloğ zincirinde saklanır ve kalıcıdırlar.</li>
<li>Diğer fonksiyonlar tarafından erişilebilir ve değiştirilebilirler.</li>
</ul>
</li>
<li><strong>Global:</strong> blok zinciri hakkında bilgi sağlar.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Degiskenler</span> </span>{
    <span class="hljs-comment">// Durumsal değişkenler blok zincirinde saklanır.</span>
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> metin <span class="hljs-operator">=</span> <span class="hljs-string">"Merhaba"</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> sayi <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">birSeyYap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// // Yerel değişkenler blok zincirine kaydedilmez.</span>
        <span class="hljs-keyword">uint</span> numara <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;

        <span class="hljs-comment">// Bazı global değişkenler :</span>
        <span class="hljs-keyword">uint</span> timestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>; <span class="hljs-comment">// Geçerli blok zaman damgası</span>
        <span class="hljs-keyword">address</span> sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>; <span class="hljs-comment">// Fonksiyonu tetikleyen adres</span>
    }
}
</code></pre>
`

export default html
