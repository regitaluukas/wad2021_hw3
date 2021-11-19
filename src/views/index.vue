<template>
  <body>
    <header class="header" id="header">
      <nav class="header_inside">
        <div>
          <img src="res/images/logo.png" alt="logo" />
        </div>
        <div class="search-container">
          <input type="text" /><button>Search</button>
        </div>
        <div class="dropdown">
          <img id="dropimg" src="res/images/me.png" alt="icon" />
          <div class="dropdown-content" id="myDropdown">
            <p>John Doe</p>
            <p>john.doe@example.com</p>
            <a href="login.html">Log out</a>
          </div>
        </div>
      </nav>
    </header>
    <div id="posts_container">
    </div>
  </body>
</template>
