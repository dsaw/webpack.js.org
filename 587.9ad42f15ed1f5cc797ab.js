(self.webpackChunk=self.webpackChunk||[]).push([[587],{587:n=>{n.exports='<p>To disambiguate in your <code>webpack.config.js</code> between <a href="/guides/development">development</a> and <a href="/guides/production">production builds</a> you may use environment variables.</p> <blockquote class="tip"> <p>webpack\'s environment variables are different from the <a href="https://en.wikipedia.org/wiki/Environment_variable">environment variables</a> of operating system shells like <code>bash</code> and <code>CMD.exe</code></p> </blockquote> <p>The webpack command line <a href="/api/cli/#environment-options">environment option</a> <code>--env</code> allows you to pass in as many environment variables as you like. Environment variables will be made accessible in your <code>webpack.config.js</code>. For example, <code>--env.production</code> or <code>--env.NODE_ENV=local</code> (<code>NODE_ENV</code> is conventionally used to define the environment type, see <a href="https://dzone.com/articles/what-you-should-know-about-node-env">here</a>.)</p> <pre><code class="hljs language-bash">webpack --env <span class="token assign-left variable">NODE_ENV</span><span class="token operator">=</span>local --env production --progress</code></pre> <blockquote class="tip"> <p>Setting up your <code>env</code> variable without assignment, <code>--env production</code> sets <code>--env production</code> to <code>true</code> by default. There are also other syntaxes that you can use. See the <a href="/api/cli/#environment-options">webpack CLI</a> documentation for more information.</p> </blockquote> <p>There is one change that you will have to make to your webpack config. Typically, <code>module.exports</code> points to the configuration object. To use the <code>env</code> variable, you must convert <code>module.exports</code> to a function:</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">env</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// Use env.&#x3C;YOUR VARIABLE> here:</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'NODE_ENV: \'</span><span class="token punctuation">,</span> env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'local\'</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Production: \'</span><span class="token punctuation">,</span> env<span class="token punctuation">.</span>production<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    entry<span class="token operator">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n    output<span class="token operator">:</span> <span class="token punctuation">{</span>\n      filename<span class="token operator">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> '}}]);