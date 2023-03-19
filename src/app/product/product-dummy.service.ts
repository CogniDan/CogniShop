import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from '@apollo/client';
import { map, Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDummyService {

  constructor(private http: HttpClient) { }

  public getProducts = () => of(dummyProducts)

  public getDynamicProducts() : Observable<Product[]>{
    return this.http.get("https://fakestoreapi.com/products")
    .pipe(
      map((res:any) =>{
      return res.map((rec: any) => {
        let p : Product = { 
          id: rec.Id,
          name: rec.title,
          quantity: rec.rating.count,
          price: rec.rating.rate,
          description: rec.description,
          images: [rec.image]
        }
        return p;
      }
        )
      
    }));
  }
}

const dummyProducts: Product[] = [
  { "id": "sUircBJR6", "name": "Sherbet - Raspberry", "description": "-1E2", "price": 83.67223, "quantity": 1 },
  { "id": "JQVwFMs2B", "name": "Salmon - Sockeye Raw", "description": "`⁄€‹›ﬁﬂ‡°·‚—±", "price": 60.74813, "quantity": 4 },
  { "id": "gx0nTVm0E", "name": "Tea Leaves - Oolong", "description": "울란바토르", "price": 42.11025, "quantity": 7 },
  { "id": "znQIzZRlf", "name": "Plaintain", "description": "'", "price": 14.3953, "quantity": 59 },
  { "id": "MlnqIylKd", "name": "Cheese - Feta", "description": "!@#$%^&*()", "price": 48.95397, "quantity": 84 },
  { "id": "60T7IQmlu", "name": "Flour - All Purpose", "description": "᠎", "price": 9.73883, "quantity": 75 },
  { "id": "SmMnK5Gyu", "name": "Straws - Cocktale", "description": "1/2", "price": 99.91213, "quantity": 22 },
  { "id": "gxLtu91TV", "name": "Tea - Lemon Green Tea", "description": "␢", "price": 40.11947, "quantity": 10 },
  { "id": "d22MSyaFW", "name": "Pasta - Penne, Lisce, Dry", "description": "‪‪test‪", "price": 57.33399, "quantity": 36 },
  { "id": "tpGRijtq3", "name": "Wine - Blue Nun Qualitatswein", "description": "␢", "price": 51.64973, "quantity": 79 },
  { "id": "cCROBoUF5", "name": "Dasheen", "description": "בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ", "price": 50.76041, "quantity": 4 },
  { "id": "loNCuTk9J", "name": "Wine - Peller Estates Late", "description": "\"''''\"'\"", "price": 78.90397, "quantity": 77 },
  { "id": "G2VzvSVWQ", "name": "Sausage - Meat", "description": "1.00", "price": 86.15822, "quantity": 82 },
  { "id": "vnz6r2VYd", "name": "Bandage - Flexible Neon", "description": "0/0", "price": 84.33862, "quantity": 31 },
  { "id": "yHGstBZ0v", "name": "Ham - Smoked, Bone - In", "description": "<>?:\"{}|_+", "price": 77.7474, "quantity": 78 },
  { "id": "lznCja3qT", "name": "Star Fruit", "description": "⁰⁴⁵", "price": 19.13871, "quantity": 85 },
  { "id": "I8ofgw3bU", "name": "Spinach - Spinach Leaf", "description": "test⁠test‫", "price": 83.21456, "quantity": 35 },
  { "id": "OYyVGBg7F", "name": "Foie Gras", "description": "1.00", "price": 1.3014, "quantity": 27 },
  { "id": "Zlgg48zTC", "name": "Tomatoes - Cherry, Yellow", "description": "\"", "price": 64.37689, "quantity": 66 },
  { "id": "7VbwBUjLB", "name": "Cleaner - Pine Sol", "description": "(｡◕ ∀ ◕｡)", "price": 26.18239, "quantity": 12 },
  { "id": "B44r7Ze4x", "name": "Lamb - Sausage Casings", "description": "␡", "price": 62.65829, "quantity": 39 },
  { "id": "G3SbpEO2o", "name": "Apple - Delicious, Golden", "description": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "price": 88.68384, "quantity": 31 },
  { "id": "Jcf1gITYe", "name": "Tart Shells - Sweet, 3", "description": "-1E2", "price": 12.03256, "quantity": 49 },
  { "id": "jqXEvDjww", "name": "Juice - Clam, 46 Oz", "description": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "price": 19.75172, "quantity": 100 },
  { "id": "oc83SIpHb", "name": "Pork - Ground", "description": "̦H̬̤̗̤͝e͜ ̜̥̝̻͍̟́w̕h̖̯͓o̝͙̖͎̱̮ ҉̺̙̞̟͈W̷̼̭a̺̪͍į͈͕̭͙̯̜t̶̼̮s̘͙͖̕ ̠̫̠B̻͍͙͉̳ͅe̵h̵̬͇̫͙i̹͓̳̳̮͎̫̕n͟d̴̪̜̖ ̰͉̩͇͙̲͞ͅT͖̼͓̪͢h͏͓̮̻e̬̝̟ͅ ̤̹̝W͙̞̝͔͇͝ͅa͏͓͔̹̼̣l̴͔̰̤̟͔ḽ̫.͕", "price": 59.972, "quantity": 17 },
  { "id": "RkijpfhBI", "name": "Wine - Red, Mouton Cadet", "description": "$1.00", "price": 40.1699, "quantity": 4 },
  { "id": "XOSSEQmjh", "name": "Cloves - Ground", "description": "␣", "price": 49.60502, "quantity": 75 },
  { "id": "ZtMnQZd54", "name": "Mushroom - Oyster, Fresh", "description": "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }", "price": 99.49047, "quantity": 78 },
  { "id": "yQmbKUFKQ", "name": "Bread Base - Gold Formel", "description": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥", "price": 2.05737, "quantity": 27 },
  { "id": "xPIQi0Rfc", "name": "Tomatoes - Cherry, Yellow", "description": "null", "price": 26.58259, "quantity": 24 },
  { "id": "VSStQRrZg", "name": "Sugar - Brown, Individual", "description": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "price": 73.5198, "quantity": 23 },
  { "id": "Ev5vgPDi3", "name": "Fruit Salad Deluxe", "description": "NULL", "price": 55.89945, "quantity": 29 },
  { "id": "0IUy8ophg", "name": "Fudge - Chocolate Fudge", "description": "בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ", "price": 1.04855, "quantity": 93 },
  { "id": "ebQrzCHGv", "name": "Ham - Cooked", "description": "１２３", "price": 75.00047, "quantity": 36 },
  { "id": "cEEGB2hkj", "name": "Puree - Kiwi", "description": "-$1.00", "price": 29.5624, "quantity": 14 },
  { "id": "GKtvw4Ms2", "name": "Sugar - Sweet N Low, Individual", "description": "ÅÍÎÏ˝ÓÔÒÚÆ☃", "price": 80.87248, "quantity": 69 },
  { "id": "GyjtPlWX2", "name": "Wine - Placido Pinot Grigo", "description": "../../../../../../../../../../../etc/hosts", "price": 18.83073, "quantity": 67 },
  { "id": "qeyT4g6Ad", "name": "Shark - Loin", "description": "␢", "price": 18.65758, "quantity": 20 },
  { "id": "DozIA0VAx", "name": "Edible Flower - Mixed", "description": "1;DROP TABLE users", "price": 74.16648, "quantity": 22 },
  { "id": "omJwGKOWY", "name": "Bread - Raisin", "description": "和製漢語", "price": 62.95863, "quantity": 16 },
  { "id": "Q8vpvheEl", "name": "Beer - Moosehead", "description": "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", "price": 81.70121, "quantity": 52 },
  { "id": "PgKoAkRHr", "name": "Cheese - Woolwich Goat, Log", "description": "‫test‫", "price": 67.92968, "quantity": 91 },
  { "id": "ZM9vz6lB2", "name": "Beef Wellington", "description": "-1.00", "price": 54.82623, "quantity": 97 },
  { "id": "26lKZTt2G", "name": "Ham - Procutinni", "description": "1/0", "price": 12.70534, "quantity": 62 },
  { "id": "3B7tMk6bj", "name": "Triple Sec - Mcguinness", "description": "사회과학원 어학연구소", "price": 56.55109, "quantity": 92 },
  { "id": "7w4SH4FdU", "name": "Bread Roll Foccacia", "description": "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }", "price": 56.44168, "quantity": 83 },
  { "id": "PQlgUfYT1", "name": "Coconut - Shredded, Unsweet", "description": "-1E+02", "price": 61.18425, "quantity": 6 },
  { "id": "6wmA6Csgb", "name": "Devonshire Cream", "description": "(ﾉಥ益ಥ）ﾉ﻿ ┻━┻", "price": 68.0425, "quantity": 89 },
  { "id": "LaOJly6vW", "name": "Sauce - Rosee", "description": "1/2", "price": 74.13159, "quantity": 3 },
  { "id": "KNkbydcXe", "name": "Beef - Ground Lean Fresh", "description": "'\"'", "price": 96.9039, "quantity": 31 },
  { "id": "mtmmsMqFj", "name": "Apple - Royal Gala", "description": "部落格", "price": 50.10764, "quantity": 71 },
  { "id": "bW0tPO1Bo", "name": "Turnip - Mini", "description": "田中さんにあげて下さい", "price": 4.18128, "quantity": 12 },
  { "id": "yntlDuuGZ", "name": "Kellogs Raisan Bran Bars", "description": "__ﾛ(,_,*)", "price": 27.54251, "quantity": 5 },
  { "id": "UknMTCAGA", "name": "Appetizer - Mushroom Tart", "description": "Ṱ̺̺̕o͞ ̷i̲̬͇̪͙n̝̗͕v̟̜̘̦͟o̶̙̰̠kè͚̮̺̪̹̱̤ ̖t̝͕̳̣̻̪͞h̼͓̲̦̳̘̲e͇̣̰̦̬͎ ̢̼̻̱̘h͚͎͙̜̣̲ͅi̦̲̣̰̤v̻͍e̺̭̳̪̰-m̢iͅn̖̺̞̲̯̰d̵̼̟͙̩̼̘̳ ̞̥̱̳̭r̛̗̘e͙p͠r̼̞̻̭̗e̺̠̣͟s̘͇̳͍̝͉e͉̥̯̞̲͚̬͜ǹ̬͎͎̟̖͇̤t͍̬̤͓̼̭͘ͅi̪̱n͠g̴͉ ͏͉ͅc̬̟h͡a̫̻̯͘o̫̟̖͍̙̝͉s̗̦̲.̨̹͈̣", "price": 20.57391, "quantity": 5 },
  { "id": "hbMDmX44g", "name": "Chicken - Bones", "description": "1/0", "price": 37.50701, "quantity": 7 },
  { "id": "8Z37FMx6i", "name": "Roe - White Fish", "description": "🐵 🙈 🙉 🙊", "price": 78.81792, "quantity": 14 },
  { "id": "H0STAmmAl", "name": "Wine - Baron De Rothschild", "description": "`⁄€‹›ﬁﬂ‡°·‚—±", "price": 16.31872, "quantity": 41 },
  { "id": "to5GApzzy", "name": "Yogurt - French Vanilla", "description": "null", "price": 75.76753, "quantity": 97 },
  { "id": "xv9Xa8f7x", "name": "Sprouts - Brussel", "description": "null", "price": 39.47929, "quantity": 8 },
  { "id": "jqHsQPvVf", "name": "Shrimp - 100 / 200 Cold Water", "description": "​", "price": 83.975, "quantity": 45 },
  { "id": "OPAOYpVrV", "name": "Syrup - Golden, Lyles", "description": "👾 🙇 💁 🙅 🙆 🙋 🙎 🙍 ", "price": 73.02025, "quantity": 77 },
  { "id": "NIQLH1CKM", "name": "Cakes Assorted", "description": "١٢٣", "price": 6.66022, "quantity": 39 },
  { "id": "9LfCi1PqU", "name": "Pork Salted Bellies", "description": "𠜎𠜱𠝹𠱓𠱸𠲖𠳏", "price": 82.44048, "quantity": 35 },
  { "id": "RuEHWrMDe", "name": "Pastry - Carrot Muffin - Mini", "description": "הָיְתָהtestالصفحات التّحول", "price": 10.34973, "quantity": 8 },
  { "id": "7bshz9t9b", "name": "Beef - Rib Roast, Cap On", "description": "-1E2", "price": 92.45143, "quantity": 22 },
  { "id": "eyR5YZLQB", "name": "Pie Filling - Apple", "description": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥", "price": 11.21129, "quantity": 4 },
  { "id": "KM5yIPlPd", "name": "Juice - Lime", "description": "() { _; } >_[$($())] { touch /tmp/blns.shellshock2.fail; }", "price": 55.47598, "quantity": 68 },
  { "id": "7LmtPoFQG", "name": "Puree - Kiwi", "description": "'\"'", "price": 49.68211, "quantity": 70 },
  { "id": "P3bRv1sue", "name": "Amaretto", "description": "åß∂ƒ©˙∆˚¬…æ", "price": 70.66927, "quantity": 12 },
  { "id": "Sc5hYsRJu", "name": "Apple - Custard", "description": "1E2", "price": 57.48066, "quantity": 88 },
  { "id": "sSGb22Taj", "name": "Tortillas - Flour, 10", "description": "和製漢語", "price": 72.90399, "quantity": 28 },
  { "id": "kogfldyKA", "name": "Pear - Packum", "description": "⁦test⁧", "price": 81.15844, "quantity": 60 },
  { "id": "nMi5V1cw2", "name": "Wine - Redchard Merritt", "description": "00˙Ɩ$-", "price": 5.18646, "quantity": 94 },
  { "id": "lubaQ6Edy", "name": "Pastry - Choclate Baked", "description": "`⁄€‹›ﬁﬂ‡°·‚—±", "price": 34.70309, "quantity": 21 },
  { "id": "NkKcunpX6", "name": "Wine - Baron De Rothschild", "description": "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟", "price": 7.83164, "quantity": 72 },
  { "id": "WzpXih6ik", "name": "Grapes - Black", "description": "-1E+02", "price": 18.04524, "quantity": 4 },
  { "id": "oWmURbnvh", "name": "Kellogs Cereal In A Cup", "description": "null", "price": 10.21767, "quantity": 73 },
  { "id": "48B4kyVEc", "name": "The Pop Shoppe - Root Beer", "description": "　", "price": 99.22426, "quantity": 88 },
  { "id": "6aI53ZjkW", "name": "Mustard Prepared", "description": "Ω≈ç√∫˜µ≤≥÷", "price": 56.1408, "quantity": 9 },
  { "id": "pujsxVVpx", "name": "Tamarillo", "description": "<svg><script>0<1>alert('XSS')</script>", "price": 50.31258, "quantity": 54 },
  { "id": "ipfWrUJnF", "name": "Sauce - Apple, Unsweetened", "description": "'\"'", "price": 50.13862, "quantity": 89 },
  { "id": "Tc9LnjyNZ", "name": "Broom - Push", "description": "␣", "price": 76.02722, "quantity": 51 },
  { "id": "R420ywhYf", "name": "Cookie Dough - Double", "description": "␢", "price": 41.07914, "quantity": 60 },
  { "id": "X1YJWA0zV", "name": "Ham - Cooked Bayonne Tinned", "description": "울란바토르", "price": 51.12036, "quantity": 19 },
  { "id": "CB6V5zJHw", "name": "Beans - Navy, Dry", "description": "åß∂ƒ©˙∆˚¬…æ", "price": 7.63366, "quantity": 95 },
  { "id": "nEnZQ1eWp", "name": "Pork - Back, Short Cut, Boneless", "description": "🐵 🙈 🙉 🙊", "price": 27.9611, "quantity": 70 },
  { "id": "OlgMsAVDU", "name": "Pastry - Chocolate Chip Muffin", "description": " ", "price": 53.65989, "quantity": 38 },
  { "id": "s1gxrn8BB", "name": "Wine - Wyndham Estate Bin 777", "description": "部落格", "price": 14.0626, "quantity": 73 },
  { "id": "pNLWj4BTF", "name": "Wakami Seaweed", "description": "בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ", "price": 19.93665, "quantity": 65 },
  { "id": "PUaW1ry6S", "name": "Wine - Charddonnay Errazuriz", "description": "0.00", "price": 51.41254, "quantity": 32 },
  { "id": "f2cWGOvUJ", "name": "Mountain Dew", "description": "-1E2", "price": 92.53136, "quantity": 86 },
  { "id": "NTT1MgjeT", "name": "Tomatoes - Cherry, Yellow", "description": ",。・:*:・゜’( ☻ ω ☻ )。・:*:・゜’", "price": 48.95565, "quantity": 76 },
  { "id": "A31Ovl8fW", "name": "Wine - Champagne Brut Veuve", "description": "../../../../../../../../../../../etc/hosts", "price": 46.86073, "quantity": 10 },
  { "id": "Yw7VcAybj", "name": "Aspic - Clear", "description": "1/2", "price": 48.21157, "quantity": 68 },
  { "id": "HQFnn9pl8", "name": "Sugar - Fine", "description": "👩🏽", "price": 23.12328, "quantity": 38 },
  { "id": "Co7kc9YGW", "name": "Foam Tray S2", "description": "˙ɐnbᴉlɐ ɐuƃɐɯ ǝɹolop ʇǝ ǝɹoqɐl ʇn ʇunpᴉpᴉɔuᴉ ɹodɯǝʇ poɯsnᴉǝ op pǝs 'ʇᴉlǝ ƃuᴉɔsᴉdᴉpɐ ɹnʇǝʇɔǝsuoɔ 'ʇǝɯɐ ʇᴉs ɹolop ɯnsdᴉ ɯǝɹo˥", "price": 74.24074, "quantity": 16 },
  { "id": "f5pGq8nUf", "name": "Cheese - Blue", "description": "<>?:\"{}|_+", "price": 81.67902, "quantity": 45 },
  { "id": "x8MdWjOWI", "name": "Cheese - Bocconcini", "description": "社會科學院語學研究所", "price": 30.69682, "quantity": 78 },
  { "id": "9VrjZLW3O", "name": "Figs", "description": "␢", "price": 20.5224, "quantity": 18 },
  { "id": "1hBhBwQAO", "name": "Scallops - In Shell", "description": "⁰⁴⁵₀₁₂", "price": 82.10992, "quantity": 21 }] 
