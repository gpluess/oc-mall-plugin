(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wishlistbutton"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wishlistbutton"}},[t._v("#")]),t._v(" WishlistButton")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("wishlistButton")]),t._v(" component displays a "),a("code",[t._v("Add to wishlist")]),t._v(" button.")]),t._v(" "),a("p",[t._v("The button includes a simple popup where the user can choose a specific\nwishlist or create a new one.")]),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("p",[t._v("You have to provide a product and variant ID of the product or variant\nto be added to the wishlist.")]),t._v(" "),a("p",[t._v("The variant id can be "),a("code",[t._v("null")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"styling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),a("p",[t._v("Take a look\nat "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme/blob/master/resources/scss/mall/wishlists.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("the relevant SCSS files in our demo repository"),a("OutboundLink")],1),t._v("\nto get an idea on how to style this component.")]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("This component emits a "),a("code",[t._v("mall.wishlist.productAdded")]),t._v(" JavaScript event when\na product was added to a wishlist. You can subscribe to this event\nand receive the added product's information.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mall.wishlist.productAdded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'product added to wishlist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"example-implementations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations"}},[t._v("#")]),t._v(" Example implementations")]),t._v(" "),a("h3",{attrs:{id:"display-the-wishlist-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-the-wishlist-button"}},[t._v("#")]),t._v(" Display the wishlist button")]),t._v(" "),a("p",[t._v("If you place this button inside the "),a("router-link",{attrs:{to:"/components/product.html"}},[t._v("Product component")]),t._v("\nyou can reference the "),a("code",[t._v("item")]),t._v(" variable to access the currenlty viewed product/variant.")],1),t._v(" "),a("p",[t._v("Checkout "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme/blob/master/partials/product/belowcartbutton.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("the source of the demo website"),a("OutboundLink")],1),t._v("\nto see an example implementation.")]),t._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[t._v("[wishlistButton]\n==")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("component")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("wishlistButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("product")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("product_id")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("variant")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("variant_id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);