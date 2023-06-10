// metadata
export const version = "0.8.17"
export const title = "Veri Türleri"
export const description = "Veri Türleri"
export const codes = [
  {
    fileName: "Primitives.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFByaW1pdGl2ZXMgewogICAgYm9vbCBwdWJsaWMgYm9vID0gdHJ1ZTsKCiAgICAvKgogICAgdWludCBzdGFuZHMgZm9yIHVuc2lnbmVkIGludGVnZXIsIG1lYW5pbmcgbm9uIG5lZ2F0aXZlIGludGVnZXJzCiAgICBkaWZmZXJlbnQgc2l6ZXMgYXJlIGF2YWlsYWJsZQogICAgICAgIHVpbnQ4ICAgcmFuZ2VzIGZyb20gMCB0byAyICoqIDggLSAxCiAgICAgICAgdWludDE2ICByYW5nZXMgZnJvbSAwIHRvIDIgKiogMTYgLSAxCiAgICAgICAgLi4uCiAgICAgICAgdWludDI1NiByYW5nZXMgZnJvbSAwIHRvIDIgKiogMjU2IC0gMQogICAgKi8KICAgIHVpbnQ4IHB1YmxpYyB1OCA9IDE7CiAgICB1aW50IHB1YmxpYyB1MjU2ID0gNDU2OwogICAgdWludCBwdWJsaWMgdSA9IDEyMzsgLy8gdWludCBpcyBhbiBhbGlhcyBmb3IgdWludDI1NgoKICAgIC8qCiAgICBOZWdhdGl2ZSBudW1iZXJzIGFyZSBhbGxvd2VkIGZvciBpbnQgdHlwZXMuCiAgICBMaWtlIHVpbnQsIGRpZmZlcmVudCByYW5nZXMgYXJlIGF2YWlsYWJsZSBmcm9tIGludDggdG8gaW50MjU2CiAgICAKICAgIGludDI1NiByYW5nZXMgZnJvbSAtMiAqKiAyNTUgdG8gMiAqKiAyNTUgLSAxCiAgICBpbnQxMjggcmFuZ2VzIGZyb20gLTIgKiogMTI3IHRvIDIgKiogMTI3IC0gMQogICAgKi8KICAgIGludDggcHVibGljIGk4ID0gLTE7CiAgICBpbnQgcHVibGljIGkyNTYgPSA0NTY7CiAgICBpbnQgcHVibGljIGkgPSAtMTIzOyAvLyBpbnQgaXMgc2FtZSBhcyBpbnQyNTYKCiAgICAvLyBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIGludAogICAgaW50IHB1YmxpYyBtaW5JbnQgPSB0eXBlKGludCkubWluOwogICAgaW50IHB1YmxpYyBtYXhJbnQgPSB0eXBlKGludCkubWF4OwoKICAgIGFkZHJlc3MgcHVibGljIGFkZHIgPSAweENBMzViN2Q5MTU0NThFRjU0MGFEZTYwNjhkRmUyRjQ0RThmYTczM2M7CgogICAgLyoKICAgIEluIFNvbGlkaXR5LCB0aGUgZGF0YSB0eXBlIGJ5dGUgcmVwcmVzZW50IGEgc2VxdWVuY2Ugb2YgYnl0ZXMuIAogICAgU29saWRpdHkgcHJlc2VudHMgdHdvIHR5cGUgb2YgYnl0ZXMgdHlwZXMgOgoKICAgICAtIGZpeGVkLXNpemVkIGJ5dGUgYXJyYXlzCiAgICAgLSBkeW5hbWljYWxseS1zaXplZCBieXRlIGFycmF5cy4KICAgICAKICAgICBUaGUgdGVybSBieXRlcyBpbiBTb2xpZGl0eSByZXByZXNlbnRzIGEgZHluYW1pYyBhcnJheSBvZiBieXRlcy4gCiAgICAgSXTigJlzIGEgc2hvcnRoYW5kIGZvciBieXRlW10gLgogICAgKi8KICAgIGJ5dGVzMSBhID0gMHhiNTsgLy8gIFsxMDExMDEwMV0KICAgIGJ5dGVzMSBiID0gMHg1NjsgLy8gIFswMTAxMDExMF0KCiAgICAvLyBEZWZhdWx0IHZhbHVlcwogICAgLy8gVW5hc3NpZ25lZCB2YXJpYWJsZXMgaGF2ZSBhIGRlZmF1bHQgdmFsdWUKICAgIGJvb2wgcHVibGljIGRlZmF1bHRCb287IC8vIGZhbHNlCiAgICB1aW50IHB1YmxpYyBkZWZhdWx0VWludDsgLy8gMAogICAgaW50IHB1YmxpYyBkZWZhdWx0SW50OyAvLyAwCiAgICBhZGRyZXNzIHB1YmxpYyBkZWZhdWx0QWRkcjsgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCn0K",
  },
]

const html = `<p>Solidity'de bulunan bazı veri türleri :</p>
<ul>
<li><code>boolean</code>  <span>: True veya false</span></li>

<li><code>uint256</code>  <span>:  0'dan 2^256 - 1'e kadar olan tüm tamsayı değerlerini ifade edebilir. Bu değer, oldukça büyük bir aralığı kapsar.</span></li>
<li><code>int256</code>   <span>:  -2^255'den başlayarak 2^255 - 1'e kadar olan tamsayı değerlerini ifade edebilir. int256, hem negatif hem de pozitif tamsayı değerlerini ifade edebilir. </span></li>
<li><code>address</code>  <span>: Ethereum cüzdan adresleri ve akıllı sözleşmelerin adresleri için kullanılır.</span></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Veriturleri</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> durum <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;<span class="hljs-comment"> // bool , sadece true veya false olabilir.</span>
    
  
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> sayi8 <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> sayi256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> sayi <span class="hljs-operator">=</span> <span class="hljs-number">123</span>; <span class="hljs-comment">// uint, uint256'nın aynısıdır</span>
    <span class="hljs-comment">/*
    uint, 0 ve 0'dan büyük tüm tamsayı değerlerini ifade edebilir.
    
    Farklı boyutlar kullanılabilir:
    
    uint8   0 ile 2 ** 8 - 1 arasında değer alır
    uint16  0 ile 2 ** 16 - 1 arasında değer alır
    ...
    uint256 0 ile 2 ** 256 - 1 arasında değer alır
    
    */
    </span>
   
    <span class="hljs-keyword">int8</span> <span class="hljs-keyword">public</span> tamsayi8 <span class="hljs-operator">=</span> <span class="hljs-number">-1</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> tamsayi256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> tamsayi <span class="hljs-operator">=</span> <span class="hljs-number">-123</span>; <span class="hljs-comment">// int, int256'nın aynısıdır</span>

    <span class="hljs-comment">// int veri türünün minimum ve maksimum değerleri</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> minInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">min</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> maxInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">max</span>;
    <span class="hljs-comment"> /*
    int türleri için negatif sayılara izin verilir.
    uint gibi, int8'den int256'ya kadar farklı aralıklar mevcuttur.

    int256 -2 ** 255 ile 2 ** 255 - 1 arasında değer alır
    int128 -2 ** 127 ile 2 ** 127 - 1 arasında değer alır
    */
    </span>
    
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xEbb572059363FA4FfF24781b24650Dc8ea74d33F</span>;
    <span class="hljs-comment"> // address , cüzdan adresleri ve akıllı sözleşme adresleri için kullanılır.</span>

 
    <span class="hljs-keyword">bytes1</span> a <span class="hljs-operator">=</span> <span class="hljs-number">0xb5</span>; <span class="hljs-comment">//  [10110101]</span>
    <span class="hljs-keyword">bytes1</span> b <span class="hljs-operator">=</span> <span class="hljs-number">0x56</span>; <span class="hljs-comment">//  [01010110]</span>
    <span class="hljs-comment">/*
    Solidity'de, "byte" veri tipi bir byte dizisini temsil eder. 
    Solidity'de iki tür byte tipi bulunur:

     - Sabit boyutlu byte dizileri
     - Dinamik boyutlu byte dizileri.
 
    "bytes" terimi, Solidity'de dinamik bir byte dizisini temsil eder. 
    "byte[]" için bir kısaltmadır.
    */</span>
    
    
    <span class="hljs-comment">// Varsayılan değerler</span>
    <span class="hljs-comment">// Herhangi bir değer atanmamış değişkenlerin varsayılan değeri vardır</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> varsayilanBoo; <span class="hljs-comment">// false</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> varsayilanUint; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> varsayilanInt; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> varsayilanAdres; <span class="hljs-comment">// 0x0000000000000000000000000000000000000000</span>
}
</code></pre>
`

export default html
