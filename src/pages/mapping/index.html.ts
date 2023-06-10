// metadata
export const version = "0.8.17"
export const title = "Mapping"
export const description = "Example of using mapping in Solidity"
export const codes = [
  {
    fileName: "Mapping.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IE1hcHBpbmcgewogICAgLy8gTWFwcGluZyBmcm9tIGFkZHJlc3MgdG8gdWludAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBteU1hcDsKCiAgICBmdW5jdGlvbiBnZXQoYWRkcmVzcyBfYWRkcikgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIC8vIE1hcHBpbmcgYWx3YXlzIHJldHVybnMgYSB2YWx1ZS4KICAgICAgICAvLyBJZiB0aGUgdmFsdWUgd2FzIG5ldmVyIHNldCwgaXQgd2lsbCByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuCiAgICAgICAgcmV0dXJuIG15TWFwW19hZGRyXTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoYWRkcmVzcyBfYWRkciwgdWludCBfaSkgcHVibGljIHsKICAgICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIGF0IHRoaXMgYWRkcmVzcwogICAgICAgIG15TWFwW19hZGRyXSA9IF9pOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZShhZGRyZXNzIF9hZGRyKSBwdWJsaWMgewogICAgICAgIC8vIFJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgZGVmYXVsdCB2YWx1ZS4KICAgICAgICBkZWxldGUgbXlNYXBbX2FkZHJdOwogICAgfQp9Cgpjb250cmFjdCBOZXN0ZWRNYXBwaW5nIHsKICAgIC8vIE5lc3RlZCBtYXBwaW5nIChtYXBwaW5nIGZyb20gYWRkcmVzcyB0byBhbm90aGVyIG1hcHBpbmcpCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyh1aW50ID0+IGJvb2wpKSBwdWJsaWMgbmVzdGVkOwoKICAgIGZ1bmN0aW9uIGdldChhZGRyZXNzIF9hZGRyMSwgdWludCBfaSkgcHVibGljIHZpZXcgcmV0dXJucyAoYm9vbCkgewogICAgICAgIC8vIFlvdSBjYW4gZ2V0IHZhbHVlcyBmcm9tIGEgbmVzdGVkIG1hcHBpbmcKICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgbm90IGluaXRpYWxpemVkCiAgICAgICAgcmV0dXJuIG5lc3RlZFtfYWRkcjFdW19pXTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoYWRkcmVzcyBfYWRkcjEsIHVpbnQgX2ksIGJvb2wgX2JvbykgcHVibGljIHsKICAgICAgICBuZXN0ZWRbX2FkZHIxXVtfaV0gPSBfYm9vOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZShhZGRyZXNzIF9hZGRyMSwgdWludCBfaSkgcHVibGljIHsKICAgICAgICBkZWxldGUgbmVzdGVkW19hZGRyMV1bX2ldOwogICAgfQp9Cg==",
  },
]

const html = `<p>Mapping işlemi, <code>mapping(keyType => valueType)</code> sözdizimiyle oluşturulur. Bir anahtara karşılık tutulan değeri saklar , birden fazla anahtar olabilir. Örnek kullanım senaryosu olarak adreslere ait bakiyeler bu şekilde saklanabilir.</p>

<p><code>keyType</code>, herhangi bir yerleşik değer tipi, baytlar, dize veya herhangi bir sözleşme olabilir.</p>
<p><code>valueType</code>, başka bir Mapp işlemi veya dizi de dahil olmak üzere herhangi bir tür olabilir.</p>
<p>Mapping yinelemeye tabi değildir.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mapping</span> </span>{
<span class="hljs-comment">// Adresten uint'a Mapp işlemi</span>
<span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> => <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> myMap;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">oku</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
    
    <span class="hljs-comment">// Mapp işlemi her zaman bir değer döndürür.</span>
    <span class="hljs-comment">// Değer ayarlanmamışsa, varsayılan değeri döndürür.</span>
    <span class="hljs-keyword">return</span> myMap[_addr];

}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ayarla</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    <span class="hljs-comment">// Bu adresteki değeri güncelle</span>
    myMap[_addr] = _i;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sil</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    <span class="hljs-comment">// Değeri varsayılan değere sıfırla</span>
    <span class="hljs-keyword">delete</span> myMap[_addr];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CokluMapp</span> </span>{

<span class="hljs-comment">// Çoklu Mapp işlemi (adresten başka bir Mapp işlemiya)</span>

<span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> => <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> => <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> nested;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">al</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
    <span class="hljs-comment">// İlgili Mapp işlemidan değerleri alabilirsiniz</span>
    <span class="hljs-comment">// Başlatılmamış olsa bile</span>
    <span class="hljs-keyword">return</span> nested[_addr1][_i];
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ayarla</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i, <span class="hljs-keyword">bool</span> _boo</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    nested[_addr1][_i] = _boo;
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sil</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    <span class="hljs-keyword">delete</span> nested[_addr1][_i];
    }
}
</code></pre>
`

export default html
