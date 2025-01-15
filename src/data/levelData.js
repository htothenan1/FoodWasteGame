import artichokes from "../assets/artichoke.png"
import avocado from "../assets/avocado.png"
import blueberries from "../assets/blueberries.png"
import bagel from "../assets/bagel.png"
import raspberries from "../assets/raspberries.png"
import garbanzobeans from "../assets/garbanzobeans.png"
import oliveoil from "../assets/oliveoil.png"
import pumpkinseeds from "../assets/pumpkinseeds.png"
import allpurposeflour from "../assets/allpurposeflour.png"
import onions from "../assets/onions.png"

export const levelData = [
  {
    level: 1,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
  {
    level: 2,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
  {
    level: 3,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
  {
    level: 4,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
  {
    level: 5,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
  {
    level: 6,
    items: [
      {
        item_id: "78181637-dca9-433d-b8bc-001a2caed64c",
        name: "artichokes",
        img: artichokes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "vegetables",
        goodsourceof: "fiber, folate, vitamin k",
        storage_tip:
          "Keep in a crisper drawer, plastic bag, and leave unwashed. Artichokes are best when consumed soon after purchase. To prevent artichokes from drying out, wrap them loosely in a damp paper towel or cloth and place them in a plastic bag.",
        whyEat:
          "Artichokes are rich in fiber, antioxidants, and vitamins C and K, promoting digestive health, boosting the immune system, and supporting bone health. They also contain compounds that may improve liver function and help maintain healthy cholesterol levels.",
      },
      {
        item_id: "ab9288a3-dfed-45b5-ae06-614915238d4c",
        name: "avocados",
        img: avocado,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "vegetables",
        goodsourceof: "magnesium, potassium, vitamins c, e, and k",
        storage_tip:
          "Store on the counter until ripe, then refrigerate. If you've cut an avocado and have leftover halves, keep the pit in the unused half and wrap it tightly in plastic wrap or place it in an airtight container. This helps minimize exposure to air and slows down browning.",
        whyEat:
          "Avocados are nutrient-dense, providing healthy monounsaturated fats, vitamins K, E, C, and B-6, which support heart health, brain function, and immune system. They also contain fiber and potassium, promoting digestive health and maintaining healthy blood pressure levels.",
      },
      {
        item_id: "f25398b7-f354-4b92-bf61-0a26e30c93eb",
        name: "blueberries",
        img: blueberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 8,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blueberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blueberries are rich in vitamins C and K, fiber, and powerful antioxidants, supporting immune health, heart health, and cognitive function. They also help reduce inflammation and improve overall well-being.",
      },
      {
        item_id: "f889beec-f422-4f35-88b7-cb0a7598d589",
        name: "bagels",
        img: bagel,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "yellow",
        exp_int: 5,
        category: "grains",
        whyEat:
          "Bagels provide quick energy and essential nutrients like iron and B vitamins. However, they are high in calories and refined carbs, so they should be eaten in moderation.",
        goodsourceof: "refined carbs (depending on brand)",
        storage_tip:
          "Freeze bagels, and defrost before eating.  If you prefer toasting your bagels, you can slice them before freezing. This makes it easier to take out individual slices for toasting without needing to thaw the entire bagel.",
      },
      {
        item_id: "b3ea65c66-af72-43da-b62b-6f0e8f3f19cee5b25d9",
        name: "raspberries",
        img: raspberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Remove soggy or spoiled berries before storing. Transfer raspberries to a shallow container or a paper towel-lined plate. This helps prevent crushing and allows for proper air circulation.",
        whyEat:
          "Raspberries are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "qmlfq7ml-3emd-4qld-afm2-274l8mqdec50",
        name: "garbanzo beans",
        img: garbanzobeans,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Refrigerate leftover chickpeas in a sealed container and consume them within 3 days, or freeze them for up to 3 months. Unopened canned chickpeas can be stored in a cool, dry pantry for up to two years.",
        whyEat:
          "Chickpeas are an excellent source of protein and dietary fiber, which promote satiety and support digestion. They are also rich in manganese and copper, which are essential for bone health and energy production.",
      },
      {
        item_id: "v7aya7ya-3yjd-4djd-atd2-27ec8eqdece0",
        name: "olive oil",
        img: oliveoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Olive oil, especially extra virgin, is packed with monounsaturated fats and antioxidants like oleocanthal, which reduce inflammation and support heart health. It is also rich in vitamin E, benefiting skin and immune function.",
      },
      {
        item_id: "jy8fjy3j-3yjd-4yjd-aj42-274c83qdec50",
        name: "pumpkin seeds",
        img: pumpkinseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store pumpkin seeds in a sealed container in a cool, dry place for up to 6 months, or refrigerate for up to 1 year.",
        whyEat:
          "Pumpkin seeds are high in magnesium, which supports muscle function, and zinc, which promotes immune health. They are also a great source of protein and healthy fats.",
      },
      {
        item_id: "kkev5k5k-30k9-41k8-94v6-529dfeva4b77",
        name: "all-purpose flour",
        img: allpurposeflour,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store flour in an airtight container in a cool, dry place, and use it within 6-8 months. To extend its shelf life, refrigerate or freeze it, especially in humid environments.",
        whyEat:
          "All-purpose flour is a versatile ingredient, but it is lower in fiber than whole-grain alternatives. It provides carbohydrates for energy and small amounts of protein and iron.",
      },
      {
        item_id: "2cc700bd-452c-470f-b81d-c83cc0491588",
        name: "onions",
        img: onions,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Keep onions away from potatoes, as they release moisture and gases that can cause onions to spoil more quickly. Avoid storing onions in plastic bags.",
        whyEat:
          "Onions are rich in vitamins C and B6, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain compounds that may help regulate blood sugar levels and promote heart health.",
      },
    ],
  },
]
