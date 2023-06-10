// metadata
export const version = "0.8.17"
export const title = "Örnek Uygulama"
export const description = "Example of smart contract in Solidity"
export const codes = [
  {
    fileName: "Counter.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IENvdW50ZXIgewogICAgdWludCBwdWJsaWMgY291bnQ7CgogICAgLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IGNvdW50CiAgICBmdW5jdGlvbiBnZXQoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIGNvdW50OwogICAgfQoKICAgIC8vIEZ1bmN0aW9uIHRvIGluY3JlbWVudCBjb3VudCBieSAxCiAgICBmdW5jdGlvbiBpbmMoKSBwdWJsaWMgewogICAgICAgIGNvdW50ICs9IDE7CiAgICB9CgogICAgLy8gRnVuY3Rpb24gdG8gZGVjcmVtZW50IGNvdW50IGJ5IDEKICAgIGZ1bmN0aW9uIGRlYygpIHB1YmxpYyB7CiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGZhaWwgaWYgY291bnQgPSAwCiAgICAgICAgY291bnQgLT0gMTsKICAgIH0KfQo=",
  },
]

const html = `<p>Basit bir sayaç sözleşmesi , bu sözleşmede sayi değişkenini arttırıp azaltan fonksiyonlar verilmiştir.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Sayac</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> sayi;
    <span class="hljs-comment">// Herkes tarafından okunabilir durumda uint tipinde sayi değişkeni tanımlanmıştır. Varsayılan değeri 0</span>
    
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">oku</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> count;
    }
    <span class="hljs-comment">// sayi değişkeninin değerini döndüren fonksiyon.</span>
    <span class="hljs-comment">// public : Fonksiyonun herkes tarafından çağrılabileceğini ifade eder. </span>
    <span class="hljs-comment">// view  : Fonksiyonun bir read fonksiyonu olduğu anlamına gelir. Bu fonksiyon okuma işlemleri haricinde bir işlem yapamaz. </span>


    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arttir</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        sayi <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
    <span class="hljs-comment">// arttir fonksiyonu çalıştırıldığında yukarda tanımlanan sayi değişkeninin değeri 1 arttırılır.</span>
    

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">azalt</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// sayi değişkenin değeri 0'dan büyük olmalıdır. 0 olması durumunda işlem başarısız olacaktır.</span>
        sayi <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
    <span class="hljs-comment">// azalt fonksiyonu çalıştırıldığında yukarda tanımlanan sayi değişkeninin değeri 1 azaltılır.</span>
}
</code></pre>
`

export default html
