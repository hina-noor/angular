// // src/app/cart/cart.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Firestore, doc, getDoc, setDoc, deleteDoc } from '@angular/fire/firestore';
// import { Auth } from '@angular/fire/auth';
// import { db } from '../firebase'; // Import Firestore instance from firebase.ts

// @Component({
//   selector: 'app-cart',
//   standalone:false,
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];

//   constructor(private firestore: Firestore, private auth: Auth) {}

//   // Fetch the user's cart items from Firestore on initialization
//   async ngOnInit() {
//     const user = this.auth.currentUser;
//     if (user) {
//       const cartRef = doc(this.firestore, `cart/${user.email}`);
//       const cartSnap = await getDoc(cartRef);
//       this.cartItems = cartSnap.exists() ? cartSnap.data()?.['items'] || [] : [];
//     }
//   }

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

//   // Remove product from the cart
//   async removeFromCart(product: any) {
//     const user = this.auth.currentUser;
//     if (!user) return;

//     const cartRef = doc(this.firestore, `cart/${user.email}`);
//     this.cartItems = this.cartItems.filter(item => item.id !== product.id);

//     // If cart is empty, delete the cart document from Firestore
//     if (this.cartItems.length === 0) {
//       await deleteDoc(cartRef);
//     } else {
//       await setDoc(cartRef, { items: this.cartItems });
//     }

//     alert(`${product.name} removed from cart!`);
//   }
// }
