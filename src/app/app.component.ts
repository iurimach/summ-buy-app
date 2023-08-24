import { Component, OnInit } from '@angular/core';
interface Item {
  price: any
  name: string;
  ebaut: string;
  src: string;
  checked: boolean;
  id:number;
  
 
}
interface CartItem{
  id?: number;
  name?: string;
  price?: number;
  src?: string;
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'summapp';
 


  items: Item[] = [
    {
      id: 1,
      price: 1500 ,
      name: 'guitar',
      ebaut: ' produqtia magari, telefoni xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: "https://castelo.pl/789-large_default/gitara-akustyczna-castelo-g3-czerwona.jpg",
      checked: false
    },
    {
      id: 2,
      price: 340,
      name: 'Hiking bag',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://ae01.alicdn.com/kf/S89dca96122044221b2bb16beb1250f36u/90L-Travel-Bag-Camping-Backpack-Hiking-Army-Climbing-Bags-Mountaineering-Large-Capacity-Sport-Bag-Outdoor-Military.jpg',
      checked: false
    }, {
      id: 3,
      price: 270,
      name: 'Hiking bag',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCu_Gk9gKd8UWxDCtEFWjL8roL9W3HSXQFcpalaYku_OOJPDlmxTG-0qlDAjEtuzuk0M&usqp=CAU',
      checked: false
    },
    {
      id: 4,
      price: 2340,
      name: 'Rolex watch',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://i0.wp.com/shopprestige.com/wp-content/uploads/2021/07/Rolex-Submariner-Watch-5.jpg?fit=1020%2C768&ssl=1',
      checked: false
    },
    {
      id: 5,
      price: 400,
      name: 'Hiking bag',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://www.jiomart.com/images/product/original/rvttqgpyks/impulse-sky-blue-keep-discovering-heavy-waterproof-travel-backpack-with-rain-cover-80-l-product-images-orvttqgpyks-p591025957-0-202201281614.jpg?im=Resize=(420,420)',
      checked: false
    },
    {
      id: 2,
      price: 340,
      name: 'Hiking bag',
      ebaut: ' produqtia magari, leptopi xxxxxxxxxxxx : xxxxxxxxxx : xxxxxx xxxxxxxxx  xxxxx xxxxx',
      src: 'https://ae01.alicdn.com/kf/S89dca96122044221b2bb16beb1250f36u/90L-Travel-Bag-Camping-Backpack-Hiking-Army-Climbing-Bags-Mountaineering-Large-Capacity-Sport-Bag-Outdoor-Military.jpg',
      checked: false
    },

    
   
  ];
  cart: CartItem[] = [];
  




   jami: number[] =[];  
   
   


 public summ():any{   //ეს ფუნქცია გაშვებულ მაქ ქვემოთ ფუნქიაში--ჩეკზე გაიშვებს ავტომატურად
    
  this.jami =[]
  this.cart.forEach((item:any)=> {
    this.jami.push(item?.price)
    
    console.log("gaishva konsolma chek")
  })
     
     const result:any = this.jami.reduce((a, b) =>  a + b, 0);

   
     var dedamotynulip=document.querySelector(".summp") as HTMLLIElement
     dedamotynulip.textContent=result
     var zoro88=dedamotynulip
    
  }
  


  ngOnInit() { this.summ();}
  addToCart(item: Item) {
    if (item.checked) {
      this.cart.push({ id: item.id, name: item.name, price: item.price, src:item.src });
      const urika=document.querySelector(".urika")as HTMLLIElement
      urika.style.background="yellow"
      this.summ()
       
     
    } 
    else {
      const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        const urika=document.querySelector(".urika")as HTMLLIElement
        urika.style.background="none"
        this.summ()   
      }
      
    }

  }
 
  isToggled = false;
  onToggle() {
    
    this.isToggled = !this.isToggled; 
  }
 
  alert(){
    alert("The buy function has not been added")
   }
    
  
  
  
}