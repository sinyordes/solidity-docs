// metadata
export const version = "0.8.17"
export const title = "Değişmezler"
export const description = "Değişmezler"
export const codes = [
  {
    fileName: "Immutable.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IEltbXV0YWJsZSB7CiAgICAvLyBjb2RpbmcgY29udmVudGlvbiB0byB1cHBlcmNhc2UgY29uc3RhbnQgdmFyaWFibGVzCiAgICBhZGRyZXNzIHB1YmxpYyBpbW11dGFibGUgTVlfQUREUkVTUzsKICAgIHVpbnQgcHVibGljIGltbXV0YWJsZSBNWV9VSU5UOwoKICAgIGNvbnN0cnVjdG9yKHVpbnQgX215VWludCkgewogICAgICAgIE1ZX0FERFJFU1MgPSBtc2cuc2VuZGVyOwogICAgICAgIE1ZX1VJTlQgPSBfbXlVaW50OwogICAgfQp9Cg==",
  },
]

const html = `<p>Değişmez değişkenler sabitler gibidir. Değişmez değişkenlerin değerleri sözleşmeyi ağda yayınlarken ayarlanabilir ancak daha sonra değiştirilemez.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Degismezler</span> </span>{
    <span class="hljs-comment">// sabit değişkenleri büyük harfe kodlama kuralı</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> cuzdanAdresi;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> sayi;

    <span class="hljs-comment">// constructor içerisindeki değerler sözleşme yayınlanırken tanımlanır. </span>
    <span class="hljs-comment">/* Bu örnekte _sayi değeri manuel girilecek ancak cuzdanAdresi değişkenine sözleşmeyi ağda </span>
    <span class="hljs-comment">yayınlayan adres (msg.sender) otomatik olarak tanımlanacak.*/</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _sayi</span>) </span>{
        <span class="hljs-comment">/* constructor(uint _sayi) ifadesi aşağıda sayi değişkenine tanımlanan </span>
        <span class="hljs-comment">_sayi parametresini sözleşme ağda yayınlanırken belirlememizi sağlar. */ </span>

        cuzdanAdresi <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        sayi <span class="hljs-operator">=</span> _sayi;
    }
}
</code></pre>
`

export default html
