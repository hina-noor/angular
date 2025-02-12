import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productCategories = {
    "Clothes": [
      { id: 1, name: "Frock", description: "Printed frock with belt and collar design", price: 90, image: "assets/c1.jpg" },
      { id: 2, name: "Maxi", description: "Blue maxi dress with bell sleeves", price: 100, image: "assets/c2.jpg" },
      { id: 3, name: "Track Suit", description: "Kids Ready to wear track suit", price: 70, image: "assets/c3.jpg" },
      { id: 4, name: "Mens Wear", description: "Lining Shirt with blue jeans", price: 1500, image: "assets/c4.jpg" },
      { id: 5, name: "Leather Jacket", description: "Brown leathery jacket with shoes", price: 200, image: "assets/c5.avif" }
    ],
    "Shoes": [
      { id: 6, name: "Sneakers", description: "Stylish and comfortable sneakers.", price: 70, image: "assets/shoe1.jpg" },
      { id: 7, name: "Blue Sneakers", description: "Wear blue with style and comfort", price: 560, image: "assets/s2.avif" },
      { id: 8, name: "Beige Flats", description: "Beige Flats with casual wears", price: 530, image: "assets/s3.jpg" },
      { id: 9, name: "Black knee length shoes", description: "Step out in style with these chic black long boots", price: 600, image: "assets/s4.jpg" },
      { id: 10, name: "Brown Boots", description: "Classic long boots in brown, perfect for any occasion.", price: 820, image: "assets/s5.jpg" }
    ],
    "Bags": [
      { id: 11, name: "Black Backpack", description: "Spacious and trendy black backpack ", price: 35, image: "assets/bagpack.jpg" },
      { id: 12, name: "Handbag", description: "Pastel pink bag for formal occasion", price: 50, image: "assets/handbag1.jpg" },
      { id: 13, name: "Handbag", description: "Pink Kitty bag for school girlies", price: 20, image: "assets/bag2.avif" },
      { id: 14, name: "Handbag", description: "Vintage Motorcycle bag", price: 56, image: "assets/sbag3.jfif" },
      { id: 15, name: "Handbag", description: "Princess School bag for girls", price: 32, image: "assets/sbag.jpg" }
    ],
    "Cosmetics": [
      { id: 16, name: "Foundation", description: "Smooth and lightweight High coverage foundation", price: 30, image: "assets/cs1.webp" },
      { id: 17, name: "Matte Lipstick", description: "Dark Pink Shade Rivaj Lipstick", price: 30, image: "assets/cs2.webp" },
      { id: 18, name: "Matte Eyeshade palette", description: "Multi Shade eyepalette for dramatic look", price: 30, image: "assets/cs3.webp" },
      { id: 19, name: "Concealer", description: "High coverage concealer", price: 30, image: "assets/cs4.jpg" },
      { id: 20, name: "Shiny Nail Paint", description: "Bella B Green Shimmery Nail Paint", price: 30, image: "assets/cs5.jpg" }
    ]
  };
  
 }
// // src/app/home/home.component.ts
// import { Component } from '@angular/core';
// import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
// import { Auth } from '@angular/fire/auth';

// @Component({
//   selector: 'app-home',
//   standalone:false,
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   productCategories = { 
//     "Clothes": [
//       { id: 1, name: "Frock", description: "Printed frock with belt and collar design", price: 90, image: "assets/c1.jpg" },
//       { id: 2, name: "Maxi", description: "Blue maxi dress with bell sleeves", price: 100, image: "assets/c2.jpg" },
//       { id: 3, name: "Track Suit", description: "Kids Ready to wear track suit", price: 70, image: "assets/c3.jpg" },
//       { id: 4, name: "Mens Wear", description: "Lining Shirt with blue jeans", price: 1500, image: "assets/c4.jpg" },
//       { id: 5, name: "Leather Jacket", description: "Brown leathery jacket with shoes", price: 200, image: "assets/c5.avif" }
//     ],
//     "Shoes": [
//       { id: 6, name: "Sneakers", description: "Stylish and comfortable sneakers.", price: 70, image: "assets/shoe1.jpg" },
//       { id: 7, name: "Blue Sneakers", description: "Wear blue with style and comfort", price: 560, image: "assets/s2.avif" },
//       { id: 8, name: "Beige Flats", description: "Beige Flats with casual wears", price: 530, image: "assets/s3.jpg" },
//       { id: 9, name: "Black knee length shoes", description: "Step out in style with these chic black long boots", price: 600, image: "assets/s4.jpg" },
//       { id: 10, name: "Brown Boots", description: "Classic long boots in brown, perfect for any occasion.", price: 820, image: "assets/s5.jpg" }
//     ]
//   };

//   constructor(private firestore: Firestore, private auth: Auth) {}

//   // Add product to the cart
//   async addToCart(product: any) {
//     const user = this.auth.currentUser;
//     if (!user) {
//       alert("Please login to add items to cart!");
//       return;
//     }

//     const cartRef = doc(this.firestore, `cart/${user.email}`);
//     const cartSnap = await getDoc(cartRef);

//     let cartData = cartSnap.exists() ? cartSnap.data()?.['items'] || [] : [];

//     // Prevent duplicate items
//     if (!cartData.some((item: any) => item.id === product.id)) {
//       cartData.push(product);
//       await setDoc(cartRef, { items: cartData });
//       alert(`${product.name} added to cart!`);
//     } else {
//       alert(`${product.name} is already in the cart!`);
//     }
//   }
// }
