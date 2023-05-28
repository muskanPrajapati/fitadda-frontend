const stroreProducts = [
    {        
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/XoFAZMGfvQufXMSKisBgsnAd" ,
        "name": "FITADDA SPORT",
       "description": "Resistance Band (7-16 Kg)",
        "price":  799,
        "discount": 20,
        "size": ["S", "M", "L", "XL"]
    },
    {        
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/hT9rfUJQJrrTmCXqVjCLRY2i",
        "name": "FITADDA SPORT",
       "description": "Resistance Band (7-16 Kg)",
        "price":  1199,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {       
         image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/UZ98jkaDsvS3DRoUmbyJD7Ei",
        "name": "FITADDA SPORT",
       "description": "FITADDA Kettlebell - 4Kg*1Pc",
        "price":  1999,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {       
         image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/seKiZLxX7QDun9USKXHGkMZt",
        "name": "FITADDA SPORT",
       "description": "FITADDA Kettlebell - 6Kg*1Pc",
        "price":  2499,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {      
          image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/MUFRrZLsq5rn7Lvqu7umhJxh",
        "name": "FITADDA SPORT",
       "description": "FITADDA Kettlebell - 8Kg*1Pc",
        "price":  3299,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {     
           image: "https://contents.mediadecathlon.com/p2253220/e076cc9608716442198d709f86e84450/p2253220.jpg",
        "name": "FITADDA SPORT",
       "description": "FormFit High Impact Celo Sports Bra",
        "price":  1599,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {      
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrjh0E1AS6cNMFcAB9EYrvDRojTIT2fI9ag&usqp=CAU",
        "name": "FITADDA SPORT",
       "description": "FormFit High Impact Celo GYM cloths for  MEN",
        "price":  1599,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {     
           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFrjh0E1AS6cNMFcAB9EYrvDRojTIT2fI9ag&usqp=CAU",
        "name": "FITADDA SPORT",
       "description": "FormFit High Impact Ivy Sports Bra",
        "price":  1699,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {       
         image: "https://i.pinimg.com/474x/47/bd/22/47bd222c7af5d30e6fc3cb14ecd25d9d--sport-bras-gym.jpg",
        "name": "FITADDA SPORT",
       "description": "FormFit High Impact Ivy Sports Bra",
        "price":  1699,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FLeggings-Adjustable-Quick-Dry-Breathable-Compression%2Fdp%2FB097L9ZVVL&psig=AOvVaw263Gt2Ov_5M7nuR2VdzerV&ust=1680418335002000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjBqKKMiP4CFQAAAAAdAAAAABAG",
        "name": "FITADDA SPORT",
       "description": "FormFit High Impact Ivy Sports Bra",
        "price":  1699,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://contents.mediadecathlon.com/p2455939/ef6d43587d7194e4ef1cce52c08365c2/p2455939.jpg?format=auto&quality=70&f=650x0",
        "name": "FITADDA SPORT",
       "description": "Women's Adjustable Training Leggi...",
        "price":  1399,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://contents.mediadecathlon.com/p2455939/ef6d43587d7194e4ef1cce52c08365c2/p2455939.jpg?format=auto&quality=70&f=650x0",
        "name": "FITADDA SPORT",
       "description": "Women's High-Intensity Training Le...",
        "price":  1399,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://contents.mediadecathlon.com/p2188908/k$f727424efe25ac3afec2b6ec20f2b58a/women-s-cotton-blend-gym-leggings-520-black.jpg?format=auto&quality=70&f=300x0",
        "name": "FITADDA SPORT",
       "description": "Women's High-Intensity Training Le...",
        "price":  1399,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://rukminim1.flixcart.com/image/612/612/km82d8w0/tight/w/d/7/s-women-tights-ld-06-arcticblue-the-dance-bible-original-imagf6gfayqakgdg.jpeg?q=70",
        "name": "FITADDA SPORT",
       "description": "Women's High-Intensity Training Le...",
        "price":  1399,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/jGnCDaeq22zPM83HRrxWCPzw",
        "name": "FITADDA SPORT",
       "description": "Women's Super Flexible Workout Leggings",
        "price":  1139,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/MYrB2xZNgDrjBcTs7KkvRZHx",
        "name": "FITADDA SPORT",
       "description": "Conversational Polo Tshirt",
        "price":  1499,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/zivcKWWyaZKx7Tyo2m5zdfg9",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1439,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/usEz2Td8m6WvoEdZewyiGQYg",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1739,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/g7MKPbH26Baj3HXm6cv85THa",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1739,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://sc04.alicdn.com/kf/Ha10f2b02f39f42898db8a2a4fb1ffacff.jpg",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1739,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/Qx91FGw3LbAWwBrYTsMMDqXm",
        "name": "FITADDA SPORT",
       "description": "FAB Men's Color Blocked Worked T-shirt",
        "price":  1739,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/2oN2wy2uPKbtyw28V1DFQmxm",
        "name": "FITADDA SPORT",
       "description": "FAB Men's Polo T-shirt",
        "price":  1299,
        "discount":60,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/s5AftQ6DEKS9M3xNm4pJsBLr",
        "name": "FITADDA SPORT",
       "description": "FAB Men's Polo T-shirt",
        "price": 599,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/RLUSjvRM7EBSPSE5mBPh6WSD",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1739,
        "discount":30,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/KtauJGiwiBQonsSsv14aUdC8",
        "name": "FITADDA SPORT",
       "description": "Flexoft Men's Lounge Joggers",
        "price":  1739,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/fXQ1QZFLck5Vi1putFdVtQYE",
        "name": "FITADDA SPORT",
       "description": "Knockout Vital Workout Shorts",
        "price":  1939,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/tYmyTjHmVY3NZduAix8GpTNW",
        "name": "FITADDA SPORT",
       "description": "Knockout Mesh Panel T-shirt",
        "price":  1299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/rE3iEDaiQZdnDMUKwUNCPkde",
        "name": "FITADDA SPORT",
       "description": "Knockout Signature T-shirt",
        "price":  1739,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/PeSM38vuqP4Z76VZvSLhoPyS",
        "name": "FITADDA SPORT",
       "description": "Knockout Mesh Panel T-shirt",
        "price":  1739,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/XPegb9QMtUiN7PGvKMdpu1d8",
        "name": "FITADDA SPORT",
       "description": "Knockout Mesh Panel T-shirt",
        "price":  799,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/4kKDrsij6gsjamikTvworAFN",
        "name": "FITADDA SPORT",
       "description": "Absolute Fit Power Mesh Leggings",
        "price":  1399,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/6127o2uaL8L._UL1500_.jpg",
        "name": "FITADDA SPORT",
       "description": "Absolute Fit Women's Abstract Leggings",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/7PdDke4aydz41xZe41CsTBB7",
        "name": "FITADDA SPORT",
       "description": "Knockout Mesh Panel T-shirt",
        "price":  799,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/Jsacr1pRmpBvLm5f9BbZ4zqv",
        "name": "FITADDA SPORT",
       "description": "Absolute Fit Women's Bold Legging",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61naFQfxgwS._UL1500_.jpg",
        "name": "FITADDA SPORT",
       "description": "Absolute Fit Women's Camo Leggings",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/seKiZLxX7QDun9USKXHGkMZt",
        "name": "FITADDA SPORT",
       "description": "fitadda Kettlebell - 6 kg*1 pc",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/2nCpSvsh5pXuWKJLMBAcPLvd",
        "name": "FITADDA SPORT",
       "description": "fitadda Kettlebell - 10 kg*1 pc",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/UZ98jkaDsvS3DRoUmbyJD7Ei",
        "name": "FITADDA SPORT",
       "description": "fitadda Kettlebell - 4 kg*1 pc",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/fnkZ83CohTxTv33h2A1ZoTU2",
        "name": "FITADDA SPORT",
       "description": "fit Kettlebell - 16 kg*1 pc",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/HChpb8aSouvvEn1hEgUgwkUJ",
        "name": "FITADDA SPORT",
       "description": "fitadda Kettlebell - 12 kg*1 pc",
        "price":  1899,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/XLKUQrNJ7tfeyE3D7uqbkMkN",
        "name": "FITADDA SPORT",
       "description": "Steel Gray Sweatshirt",
        "price":  3299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/3QTYMLNnHuziWSDYHGFQKbfp",
        "name": "FITADDA SPORT",
       "description": "D Structure Black Graphic Sweatshirt",
        "price":  2599,
        "discount":60,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/UmpS1t1UhwuodhVytdZ1N6Cz",
        "name": "FITADDA SPORT",
       "description": "D Structure Navy Graphic Sweatshir",
        "price":  1899,
        "discount":60,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/ivihCTV58yHVkQQNmxjNZcZc",
        "name": "FITADDA SPORT",
       "description": "Vital Emerge Black Zip Sweatshirt",
        "price":  2899,
        "discount":60,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/ZeYSggQuMpvW26VEDLPUAhNU",
        "name": "FITADDA SPORT",
       "description": "Brisk Marble White Jacke",
        "price":  3199,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/aPL6Uq1Tsgn5tM7kz8MsBy6x",
        "name": "FITADDA SPORT",
       "description": "out Shorts",
        "price":  1999,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/aPL6Uq1Tsgn5tM7kz8MsBy6x",
        "name": "FITADDA SPORT",
       "description": "Vital Blaze Navy Gym Shorts",
        "price":  1299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/zUXmN3PXNtWEhngCLccVBUWE",
        "name": "FITADDA SPORT",
       "description": "Vital Rep Red Gym Shorts",
        "price":  1399,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/XipwZY9AFn4fLcFajHFvQGXr",
        "name": "FITADDA SPORT",
       "description": "Brisk Marble White Jacke",
        "price":  3199,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/3nBTeHuyAXQ9UqMp3kAqFe58",
        "name": "FITADDA SPORT",
       "description": "Vital Finish Blue Gym Shorts",
        "price":  1299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/g7Hpc2YBypZWtsB7qkj8CSgz",
        "name": "FITADDA SPORT",
       "description": "Signature Cannon Black Duffel",
        "price":  1299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/dgrYNawEMc3CEFYMBmTq98tz",
        "name": "FITADDA SPORT",
       "description": "Signature Cannon Grey Duffel",
        "price":  2199,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },
    {
        image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,c_fill/dpr_2/cultgear-content/xVNbpiSeNTmok4UaxufzTuF1",
        "name": "FITADDA SPORT",
       "description": "Vital Prism Orange Backpack",
        "price":  1299,
        "discount":40,
        "size": ["S", "M", "L", "XL"]
    },

]