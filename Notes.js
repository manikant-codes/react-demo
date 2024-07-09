// ----------------------------------------------------------------
// React Rouetr DOM
// ----------------------------------------------------------------

// Step 1:
// React router dom package install karna hai.
// Uske liye ye command follow karna hai:
// npm i react-router-dom
// App is tarah se -D nahi lagao ge:
// npm i react-router-dom -D
// -D yane app is dependency/package/library dev dependency ke tarah install karna chahte hoo.
// Dev dependencies/libraries sirf development tak hi rehti hai, jab app site live karo ge tab aap ke project me ye package/library nahi hogi.

// Step 2:
// App.jsx me jaa ke <BrowserRouter></BrowserRouter> se wrap karna hai.
// Uske baad <Routes></Routes> se wrap karna hai.
// Aur fir <Route /> component ka use kar ke apne route banane hai.
// Ye <Route path="" element={} /> component do prop leta hai path aur element.
// Path me aap define karte hoo ke kis location ke liye ye route hai. (Kaha dikhana hai.)
// Element me aap define karte hoo ke us location pe kon sa element dikhana hai. (Kya dikhana hai.)

// Ye components app ne nahi banaye hain to jo prop chahiye wahi dene hai, is case me path aur element yehi do prop dene hai.
// Jo components aur path <Routes></Routes> ke andar <Route path="" element={} /> me likho ge wahi dikhenge.
// Page rounte me rakhne keliye pehle page level components pages folder ke andar banane padenge.

// Step 3:
// Fir un page pe jane ke liye <Link to=""></Link> component ka use karna hai.
// Ise to prop me page ka path dena hai. Jo path aap ne app me define kiya hai us page ke liye wo path to prop me dena hai.

// Common Layout
// ----------------------------------------------------------------
// Agar common layout rakhna hoo to fir <Routes></Routes> ke baad <Route></Route> component ke andar baki ke routes rakhne hain.
