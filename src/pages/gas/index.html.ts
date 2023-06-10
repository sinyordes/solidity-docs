// metadata
export const version = "0.8.17"
export const title = "Gas"
export const description = "Example of gas and gas limit in Solidity"
export const codes = [
  {
    fileName: "Gas.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IEdhcyB7CiAgICB1aW50IHB1YmxpYyBpID0gMDsKCiAgICAvLyBVc2luZyB1cCBhbGwgb2YgdGhlIGdhcyB0aGF0IHlvdSBzZW5kIGNhdXNlcyB5b3VyIHRyYW5zYWN0aW9uIHRvIGZhaWwuCiAgICAvLyBTdGF0ZSBjaGFuZ2VzIGFyZSB1bmRvbmUuCiAgICAvLyBHYXMgc3BlbnQgYXJlIG5vdCByZWZ1bmRlZC4KICAgIGZ1bmN0aW9uIGZvcmV2ZXIoKSBwdWJsaWMgewogICAgICAgIC8vIEhlcmUgd2UgcnVuIGEgbG9vcCB1bnRpbCBhbGwgb2YgdGhlIGdhcyBhcmUgc3BlbnQKICAgICAgICAvLyBhbmQgdGhlIHRyYW5zYWN0aW9uIGZhaWxzCiAgICAgICAgd2hpbGUgKHRydWUpIHsKICAgICAgICAgICAgaSArPSAxOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<h3 id="how-much-ether-do-you-need-to-pay-for-a-transaction">Bir işlem için ne kadar <code>ether</code> ödemeniz gerekiyor?</h3>

<p>Bir işlem için ödediğiniz miktar, <code>harcanan gas * gas fiyatı</code> ile hesaplanır.</p>
<ul>
<li><code>gas</code>, bir hesaplama birimidir</li>
<li><code>harcanan gas</code>, bir işlemde kullanılan toplam <code>gas</code> miktarıdır</li>
<li><code>gas fiyatı</code>, her bir <code>gas</code> için ne kadar <code>ether</code> ödemeye istekli olduğunuzdur</li>
</ul>
<p>Daha yüksek gas fiyatına sahip işlemler, bir bloğa dahil edilmek için daha yüksek önceliğe sahiptir.</p>
<p>Harcanmamış gas iade edilir.</p>
<h3 id="gas-limit">Gas Limiti</h3>
<p>Harcamak istediğiniz gas miktarı için 2 üst sınır bulunmaktadır</p>
<ul>
<li><code>gas limiti</code> (işleminiz için kullanmak istediğiniz maksimum gas miktarı, sizin tarafınızdan belirlenir)</li>
<li><code>blok gas limiti</code> (bir blokta izin verilen maksimum gas miktarı, ağ tarafından belirlenir)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Gas</span> </span>{

<span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

<span class="hljs-comment">// Gönderdiğiniz tüm gas'ı kullanmak işleminizin başarısız olmasına neden olur.</span>
<span class="hljs-comment">// Durum değişiklikleri geri alınır.</span>
<span class="hljs-comment">// Harcanan gas geri ödenmez.</span>

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sürekli</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
   
    <span class="hljs-comment">// Burada, tüm harcanan gasa kadar bir döngü çalıştırıyoruz</span>
    <span class="hljs-comment">// ve işlem başarısız oluyor</span>
   
    <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
        i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
    
  }
  
}
</code></pre>
`

export default html
