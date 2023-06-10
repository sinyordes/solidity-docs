// metadata
export const version = "0.8.17"
export const title = "Ether ve Wei"
export const description = "An example of Ether and Wei in Solidity"
export const codes = [
  {
    fileName: "EtherUnits.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IEV0aGVyVW5pdHMgewogICAgdWludCBwdWJsaWMgb25lV2VpID0gMSB3ZWk7CiAgICAvLyAxIHdlaSBpcyBlcXVhbCB0byAxCiAgICBib29sIHB1YmxpYyBpc09uZVdlaSA9IDEgd2VpID09IDE7CgogICAgdWludCBwdWJsaWMgb25lRXRoZXIgPSAxIGV0aGVyOwogICAgLy8gMSBldGhlciBpcyBlcXVhbCB0byAxMF4xOCB3ZWkKICAgIGJvb2wgcHVibGljIGlzT25lRXRoZXIgPSAxIGV0aGVyID09IDFlMTg7Cn0K",
  },
]

const html = `<p>Ethereum ağında işlemler için gereken fee ücreti <code>ether</code> ile ödenir.</p>
<p>Bir doların 100 cent'e eşit olması gibi, bir <code>eter</code> de 10<sup>18</sup> <code>wei</code>'ye eşittir.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherBirimleri</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span>;
    <span class="hljs-comment">// 1 wei 1'e eşittir</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-comment">// 1 eter eşittir 10^18 wei</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
}
</code></pre>
`

export default html
