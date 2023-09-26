function header() {
    document.write(` <header>
    <script src="tinynav.min.js"></script>
    <script type="text/javascript">
    $(function () {

    });
    </script>

    <div class="headline">
        <p class="title-pc">basic-tutorial</p>
        <p class="title-smartphone" align="center">basic</p>
        <p class="title-smartphone" align="center">tutorial</p>

        <div class="hamburger-menu">
            <input type="checkbox" id="menu-btn-check" style="display:none">
            <label for="menu-btn-check" class="menu-btn"><span></span></label>
            <!--ここからメニュー-->
            <div class="menu-content">
                <ul class="dropdownlist">
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="assets.html">画像集</a></li>
                    <li class="nav-list-item"><a href="rights.html">権利について</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                </ul>
            </div>
            <!--ここまでメニュー-->
        </div>
    </div>
    <nav>
        <ul class="nav-list">
            <li class="dropdown">
                <ul class="dropdownlist">
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                    <li class="nav-list-item"><a href="index.html">トップページ</a></li>
                </ul>
            </li>
        </ul>





    </nav>


</header>`);
}

function foooooter() {
    document.write(`    <footer>
    <div class="social" align="center">
    <li class="l-globalHeader_snsItem">
        <a target="_blank" href="https://x.com/nikachu2012">
            <svg width="30" height="30" id="_レイヤー_2" data-name="レイヤー 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"style="
            padding-left: 58px;
        ">
                <g id="_レイヤー_1-2" data-name="レイヤー 1">
                  <g>
                    <path class="cls-1" d="m166.05,136.58l63.63-74.42h-15.06l-55.31,64.7-44.85-64.7h-50.69l67.55,97.44-66.89,78.24h15.06l58.57-68.51,47.49,68.51h50.69l-70.19-101.26Zm-80.51-62.84h23.21l105.72,152.51h-23.21L85.53,73.74Z"/>
                  </g>
                </g>
              </svg>
        </a>
    </li>
</div>
    <p>©Copyright © css_py,nikachu2012,ChameleonColin,Kesan92231298</p>
    <p>画像以外の無断コピーを固く禁ずる。</p>

</footer>`);
}