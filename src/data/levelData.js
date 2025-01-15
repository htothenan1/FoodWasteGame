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
import milk from "../assets/milk.png"
import shrimp from "../assets/shrimp.png"
import rolledoats from "../assets/rolledoats.png"
import bellpepper from "../assets/bellpepper.png"
import garlic from "../assets/garlic.png"
import kiwis from "../assets/kiwis.png"
import potatoes from "../assets/potatoes.png"
import avocadooil from "../assets/avocadooil.png"
import bananas from "../assets/bananas.png"
import peanuts from "../assets/peanuts.png"
import thyme from "../assets/thyme.png"
import cheese from "../assets/cheese.png"
import oatmeal from "../assets/oatmeal.png"
import chicken from "../assets/chicken.png"
import pears from "../assets/pears.png"
import lemons from "../assets/lemons.png"
import apples from "../assets/apple_art.png"
import cherries from "../assets/cherries.png"
import groundbeef from "../assets/groundbeef.png"
import sourdough from "../assets/sourdough.png"
import quinoa from "../assets/quinoa.png"
import cheddar from "../assets/cheddar.png"
import yogurt from "../assets/yogurt.png"
import grapes from "../assets/grapes.png"
import mangos from "../assets/mangos.png"
import garlicpowder from "../assets/garlicpowder.png"
import celery from "../assets/celery.png"
import wholewheat from "../assets/wholewheat_bread.png"
import parsley from "../assets/parsley.png"
import blackberries from "../assets/blackberries.png"
import carrots from "../assets/carrots.png"
import cucumbers from "../assets/cucumbers.png"
import ginger from "../assets/ginger.png"
import lettuce from "../assets/lettuce.png"
import lentils from "../assets/lentils.png"
import peanutoil from "../assets/peanutoil.png"
import cauliflower from "../assets/cauliflower.png"
import tomatoes from "../assets/tomatoes.png"
import turkey from "../assets/turkey.png"
import oranges from "../assets/oranges.png"
import cornmeal from "../assets/cornmeal.png"
import bacon from "../assets/bacon.png"
import ricenoodles from "../assets/ricenoodles.png"
import nectarines from "../assets/nectarines.png"
import whiterice from "../assets/whiterice.png"
import flaxseeds from "../assets/flaxseeds.png"
import mozzarella from "../assets/mozzarella.png"
import cinnamon from "../assets/cinnamon.png"

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
        item_id: "aa2e841a-2e45-4379-b100-3dc63e52993d",
        name: "milk",
        img: milk,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "yellow",
        exp_int: 5,
        category: "dairy",
        storage_tip:
          "As soon as you bring milk home from the store, place it in the refrigerator. Store milk in its original container to maintain its freshness. The packaging is designed to protect milk from light and air exposure.",
        whyEat:
          "Milk is a rich source of high-quality protein, calcium, and vitamins D and B12, supporting bone health, muscle growth, and overall nutrition. It also provides essential nutrients that promote heart health and immune function.",
      },
      {
        item_id: "d85cd186-56da-4445-aef5-4883146489f3",
        name: "shrimp",
        img: shrimp,
        price: 2.5,
        home: ["Fridge", "Freezer"],
        swapColor: "yellow",
        exp_int: 2,
        category: "seafoods",
        storage_tip:
          "Fresh raw shrimp should be used within 1-2 days of purchase. If you won't be using them within that time, consider freezing them to extend their shelf life.",
        whyEat:
          "Shrimp is a great source of high-quality protein, vitamins B12 and D, and minerals like selenium and iodine, supporting muscle health, immune function, and thyroid health. It is also low in fat and contains omega-3 fatty acids, promoting heart health.",
      },
      {
        item_id: "u2ev5u5b-3uv9-4u48-94v6-529dfeva4b77",
        name: "rolled oats",
        img: rolledoats,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store rolled oats in an airtight container in a cool, dry place, where they can last for up to 12 months. Once opened, consider refrigerating for longer storage.",
        whyEat:
          "Rolled oats are high in fiber and antioxidants, promoting heart health and stabilizing blood sugar. They are also a good source of vitamins and minerals like manganese, phosphorus, and iron.",
      },
      {
        item_id: "00479eae-d636-4cbe-bbcf-198ecb800f6c",
        name: "bell peppers",
        img: bellpepper,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 7,
        category: "vegetables",
        storage_tip:
          "Always keep the seeds and stems attached. Make sure the bell peppers are dry before storing them.",
        whyEat:
          "Bell peppers are rich in vitamins A and C, supporting immune health and vision. They also provide antioxidants and dietary fiber, promoting overall health and aiding digestion.",
      },
      {
        item_id: "cba633d0-fc26-438c-9ab4-8d2ab73adcaa",
        name: "garlic",
        img: garlic,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 14,
        category: "vegetables",
        storage_tip:
          "Keep garlic in a cool, dry, and well-ventilated area. Avoid storing it in areas with high humidity, as moisture can cause mold growth. Place garlic bulbs in a mesh bag or a basket to allow air circulation.",
        whyEat:
          "Garlic is rich in vitamins C and B6, manganese, and antioxidants, supporting immune health, reducing inflammation, and promoting heart health. It also contains compounds like allicin, which have antimicrobial properties and may help lower blood pressure.",
      },
      {
        item_id: "1987cb15-1560-48f5-9928-a4f975c8387c",
        name: "bananas",
        img: bananas,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 5,
        category: "fruits",
        goodsourceof: "potassium, vitamin c, folate",
        storage_tip:
          "If cut, sprinkle with lemon juice.  If your bananas are still in a bunch, consider separating them. This helps prevent them from ripening too quickly and becoming overripe.",
        whyEat:
          "Bananas are rich in potassium, vitamins B6 and C, and dietary fiber, supporting heart health, digestion, and energy levels. They also provide quick, natural energy and help maintain healthy blood pressure.",
      },
      {
        item_id: "26172199-6704-47be-a1dc-795e07ffee6f",
        name: "kiwis",
        img: kiwis,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 7,
        category: "fruits",
        storage_tip:
          "To store kiwis, keep them in the fridge when ripe to maintain freshness. Store unripe ones at room temperature until ready. Keep separate from ethylene-producing fruits like apples to prevent overripening.",
        whyEat:
          "Kiwis are rich in vitamins C and K, fiber, and antioxidants, supporting immune health, digestion, and skin health. They also contain potassium and folate, promoting heart health and overall well-being.",
      },
      {
        item_id: "b1250db6-bb11-4316-b4ac-2881332d8cf2",
        name: "potatoes",
        img: potatoes,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 14,
        category: "vegetables",
        storage_tip:
          "Cool, dimly lit, and dry. Avoid storing potatoes near onions, as onions release gases that can cause potatoes to spoil more quickly.",
        whyEat:
          "Potatoes are rich in vitamins C and B6, potassium, and fiber, supporting immune health, energy metabolism, and digestion. They also provide antioxidants and complex carbohydrates, offering sustained energy and overall well-being.",
      },
      {
        item_id: "v7ava7va-3djd-4djd-atd2-27ec8eqdece0",
        name: "avocado oil",
        img: avocadooil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Avocado oil is rich in monounsaturated fats, which support heart health by reducing bad cholesterol (LDL) levels. It also contains vitamin E, an antioxidant that promotes skin health and reduces inflammation.",
      },
      {
        item_id: "j48fj73j-3ejd-4qjd-aj42-274c83qdec50",
        name: "peanuts",
        img: peanuts,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Store peanuts in an airtight container in a cool, dark place, or refrigerate them to extend freshness for up to 9 months. For long-term storage, peanuts can be frozen for up to a year.",
        whyEat:
          "Peanuts are a rich source of healthy fats, protein, and fiber, which promote heart health and provide sustained energy. They are also packed with resveratrol, an antioxidant known to support brain health and reduce inflammation.",
      },
    ],
  },
  {
    level: 3,
    items: [
      {
        item_id: "de48f5a3-c7cf-4ab4-8947-b8c0eade8b30",
        name: "thyme",
        img: thyme,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "unranked",
        exp_int: 7,
        category: "spices and herbs",
        storage_tip:
          "Store fresh thyme wrapped in a slightly damp paper towel, inside a plastic bag, in the refrigerator. For longer storage, freeze thyme sprigs in airtight containers or bags.",
        whyEat:
          "Thyme is rich in vitamins A and C, antioxidants, and essential oils, supporting immune health, skin health, and overall well-being. It also has antimicrobial properties and may aid in digestion.",
      },
      {
        item_id: "58e3bdcb-f2bb-43b6-8ab7-c8b2f3b9b7cb",
        name: "swiss cheese",
        img: cheese,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "yellow",
        exp_int: 10,
        category: "dairy",
        storage_tip:
          "Store cheese in its original packaging or rewrap it in wax paper or parchment paper. Avoid using plastic wrap directly on the cheese, as it can trap moisture and affect the flavor. Keep different cheeses separate to prevent their flavors from mingling.",
        whyEat:
          "Cheese is a good source of protein, calcium, and vitamins A and B12, supporting muscle health, bone strength, and overall nutrition. However, it can be high in saturated fat and sodium, so it should be consumed in moderation.",
        compatibles: [
          "apples",
          "bread",
          "celery",
          "cherries",
          "ham",
          "dates",
          "figs",
          "grapes",
          "nuts",
          "hazelnuts",
          "pears",
        ],
      },
      {
        item_id: "121v515b-31v9-4118-91v6-529dfeva4b77",
        name: "oatmeal",
        img: oatmeal,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store oatmeal in a sealed container in a cool, dry pantry. Cooked oatmeal should be refrigerated and consumed within 3-5 days.",
        whyEat:
          "Oatmeal is an excellent source of fiber, promoting digestive health and helping to lower cholesterol. It’s also rich in vitamins and minerals, including magnesium and iron, which support energy production.",
      },
      {
        item_id: "w5a5w94w-efw8-43wb-9w3w-a8bwe32wa4w6",
        name: "chicken wings",
        img: chicken,
        price: 2.5,
        home: ["Fridge", "Freezer"],
        swapColor: "yellow",
        exp_int: 2,
        category: "meats",
        whyEat:
          "Chicken is a lean source of high-quality protein, essential for muscle growth and repair. It also provides important nutrients like B vitamins, which support energy metabolism, and selenium, which promotes immune function.",
        storage_tip:
          "For optimal quality, use chicken within 1-2 days of purchase. If you won't be using it within that time, consider freezing it to extend its shelf life.",
      },
      {
        item_id: "c679cbf8-bbe6-4995-868b-d6be98e19efb",
        name: "pears",
        img: pears,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Pears are often picked when slightly under ripe. Place them at room temperature to ripen. Check their firmness near the stem daily. Once they yield slightly to gentle pressure, they're ripe and ready to eat.",
        whyEat:
          "Pears are rich in dietary fiber, vitamins C and K, and antioxidants, supporting digestion, immune health, and bone health. They also provide hydration and essential minerals like potassium, promoting overall well-being.",
      },
      {
        item_id: "af4cb2f5-5a82-4489-a430-64a38fdfb980",
        name: "lemons",
        img: lemons,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "fruits",
        storage_tip:
          "Place them in the vegetable crisper drawer, where the temperature is slightly cooler and more humid. To prevent moisture loss, place lemons in a perforated plastic bag or an airtight container in the refrigerator.",
        whyEat:
          "Lemons are rich in vitamin C, antioxidants, and fiber, supporting immune health, skin health, and digestion. They also contain compounds that may aid in detoxification and improve heart health.",
      },
      {
        item_id: "987d40b6-711e-4ef9-bc0c-7949eef3ef54",
        name: "apples",
        img: apples,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "fruits",
        goodsourceof: "vitamin c, potassium, fiber",
        storage_tip:
          "Keep in crisper drawer, away from other fruit. Cook shriveled apples into pies and applesauce. Use peels to make tea, or use in smoothies.",
        whyEat:
          "Apples are rich in essential nutrients, antioxidants, and dietary fiber, which support heart health, aid digestion, and help regulate blood sugar levels. They also provide vitamins that boost immunity and promote overall well-being.",
      },
      {
        item_id: "2f7a58a7-fd20-499e-97b5-03bbb8115d0c",
        name: "cherries",
        img: cherries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 5,
        category: "fruits",
        storage_tip:
          "Cherries are sensitive to heat, so store them in the refrigerator as soon as possible. Place them in the crisper drawer, where the temperature is slightly cooler and more humid. Avoid washing cherries before storing them.",
        whyEat:
          "Cherries are rich in vitamins C and A, fiber, and antioxidants, supporting immune health, eye health, and digestion. They also contain compounds that may reduce inflammation and improve sleep quality.",
      },
      {
        item_id: "42f20ec2-7c9a-4ea8-b784-cbb3745f8b82",
        name: "ground beef",
        img: groundbeef,
        price: 2.5,
        home: ["Fridge", "Freezer"],
        swapColor: "red",
        exp_int: 2,
        category: "meats",
        storage_tip:
          "Ground beef is perishable and should be refrigerated as soon as possible after purchase. For optimal quality, use ground beef within 1-2 days of purchase. If you won't be using it within that time, consider freezing it to extend its shelf life.",
        whyEat:
          "Beef is a rich source of high-quality protein, iron, and B vitamins, supporting muscle growth, energy production, and overall health. However, it can be high in saturated fats, so it is best to choose lean cuts and consume in moderation.",
      },
      {
        item_id: "22ea5n5b-3049-4l48-94s6-529df4aa4b77",
        name: "sourdough bread",
        img: sourdough,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "green",
        exp_int: 5,
        category: "grains",
        storage_tip:
          "Store bread in a cool and dry place, away from direct sunlight and humidity. A pantry or bread box is a good option. Can be frozen, and defrosted before eating. Keep stale bread for breadcrumbs.",
        whyEat:
          "Bread provides quick energy and essential nutrients like fiber and B vitamins, especially when made from whole grains. Refined bread can spike blood sugar, so choose whole grain options and consume in moderation.",
      },
    ],
  },
  {
    level: 4,
    items: [
      {
        item_id: "2aev5a5a-30a9-41a8-94va-529afeva4b77",
        name: "quinoa",
        img: quinoa,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store dry quinoa in a sealed container in a cool, dry pantry. Once cooked, refrigerate and use within 3-5 days.",
        whyEat:
          "Quinoa is a complete protein, containing all nine essential amino acids. It is also rich in fiber and minerals like magnesium, which support muscle function and overall health.",
      },
      {
        item_id: "58b3hdbh-fvhb-43v6-8av7-c81gh3a9b7cb",
        name: "cheddar cheese",
        img: cheddar,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "yellow",
        exp_int: 10,
        category: "dairy",
        storage_tip:
          "Store cheese in its original packaging or rewrap it in wax paper or parchment paper. Avoid using plastic wrap directly on the cheese, as it can trap moisture and affect the flavor. Keep different cheeses separate to prevent their flavors from mingling.",
        whyEat:
          "Cheese is a good source of protein, calcium, and vitamins A and B12, supporting muscle health, bone strength, and overall nutrition. However, it can be high in saturated fat and sodium, so it should be consumed in moderation.",
        compatibles: [
          "apples",
          "bread",
          "celery",
          "cherries",
          "ham",
          "dates",
          "figs",
          "grapes",
          "nuts",
          "hazelnuts",
          "pears",
        ],
      },
      {
        item_id: "247eee49-c866-4d17-ae98-63cb420cefed",
        name: "yogurt",
        img: yogurt,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "yellow",
        exp_int: 10,
        category: "dairy",
        storage_tip:
          "Store towards back of fridge. Ensure the container's lid is tightly sealed after each use. This helps prevent moisture and contaminants from entering the yogurt container.",
        whyEat:
          "Yogurt is a good source of high-quality protein, calcium, and probiotics, supporting muscle health, bone strength, and digestion. It also provides vitamins B12 and D, promoting immune function and overall well-being.",
      },
      {
        item_id: "136a5934-9c30-45d2-80d0-db5b0d500e91",
        name: "grapes",
        img: grapes,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 7,
        category: "fruits",
        storage_tip:
          "Grapes are highly perishable and should be refrigerated as soon as possible after purchase. Place them in the vegetable crisper drawer of your refrigerator.",
        whyEat:
          "Grapes are rich in vitamins C and K, antioxidants, and fiber, supporting immune health, bone health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "b2203df3-b71f-4721-a081-635c1a9900f4",
        name: "mangos",
        img: mangos,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 7,
        category: "fruits",
        storage_tip:
          "If your mangos are not fully ripe when you buy them, leave them at room temperature to ripen. They will continue to ripen and become sweeter over a few days.",
        whyEat:
          "Mangos are rich in vitamins A, C, and E, as well as fiber and antioxidants, supporting immune health, skin health, and digestion. They also contain compounds that may help reduce inflammation and promote heart health.",
      },
      {
        item_id: "j48fj73j-3ejd-4qjd-aj42-274c83qdec50",
        name: "peanuts",
        img: peanuts,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Store peanuts in an airtight container in a cool, dark place, or refrigerate them to extend freshness for up to 9 months. For long-term storage, peanuts can be frozen for up to a year.",
        whyEat:
          "Peanuts are a rich source of healthy fats, protein, and fiber, which promote heart health and provide sustained energy. They are also packed with resveratrol, an antioxidant known to support brain health and reduce inflammation.",
      },
      {
        item_id: "j08tj7t0-3tjd-4qjd-aj72-274c03qdec50",
        name: "garlic powder",
        img: garlicpowder,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "spices and herbs",
        storage_tip:
          "Store dried spices in airtight containers in a cool, dry, and dark place, away from heat and moisture. Ideally, use within 6 months to 1 year for optimal flavor and potency, although they remain safe to consume beyond that timeframe.",
        whyEat:
          "Garlic powder retains many of the health benefits of fresh garlic, including its allicin content, which may help reduce blood pressure and improve cholesterol levels. It also has antimicrobial properties.",
      },
      {
        item_id: "7f445794-e2ee-47ac-a2e6-ef112dbb1993",
        name: "celery",
        img: celery,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 14,
        category: "vegetables",
        storage_tip:
          "Celery loves moisture, so wrap the celery stalks in a damp paper towel or cloth before placing them in a plastic bag. This helps maintain the humidity and prevents the celery from drying out. Before storing, trim the bottom ends of the celery stalks.",
        whyEat:
          "Celery is low in calories and high in vitamins K and C, fiber, and antioxidants, supporting bone health, digestion, and reducing inflammation. It also provides hydration due to its high water content.",
      },
      {
        item_id: "2237545b-30h9-4148-941f-529ddeaa4j77",
        name: "whole wheat bread",
        img: wholewheat,
        price: 2.5,
        home: ["Freezer", "Countertop"],
        swapColor: "green",
        exp_int: 5,
        category: "grains",
        storage_tip:
          "Store bread in a cool and dry place, away from direct sunlight and humidity. A pantry or bread box is a good option. Can be frozen, and defrosted before eating. Keep stale bread for breadcrumbs.",
        whyEat:
          "Bread provides quick energy and essential nutrients like fiber and B vitamins, especially when made from whole grains. Refined bread can spike blood sugar, so choose whole grain options and consume in moderation.",
      },
      {
        item_id: "bf8db6de-004d-4e88-9622-206ce1f06d25",
        name: "parsley",
        img: parsley,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 7,
        category: "spices and herbs",
        storage_tip:
          "Store fresh parsley stems in a glass of water, covered loosely with a plastic bag, in the refrigerator. Change the water every few days and trim stems as needed to keep the parsley fresh.",
        whyEat:
          "Parsley is rich in vitamins A, C, and K, as well as antioxidants, supporting eye health, immune function, and bone health. It also contains compounds that may help reduce inflammation and promote heart health.",
      },
    ],
  },
  {
    level: 5,
    items: [
      {
        item_id: "dd274862-4854-444e-b518-1c179a169054",
        name: "blackberries",
        img: blackberries,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "Always seperate the soggy or spoiled berries from the good ones. Blackberries are highly perishable and should be stored in the refrigerator as soon as possible. Place in shallow container lined with paper towels to absorb excess moisture.",
        whyEat:
          "Blackberries are packed with vitamins C and K, fiber, and antioxidants, supporting immune health, digestion, and reducing inflammation. They also contain manganese, which aids in bone health and metabolism.",
      },
      {
        item_id: "32e4c8b1-0f7a-4571-ac02-25c864ff3058",
        name: "carrots",
        img: carrots,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 14,
        category: "vegetables",
        storage_tip:
          "Carrots can wilt if they lose too much moisture. To prevent this, wrap them in a damp paper towel before placing them in a plastic bag or an airtight container.",
        whyEat:
          "Carrots are rich in beta-carotene, which converts to vitamin A, supporting eye health and immune function. They also provide fiber, aiding digestion and promoting overall health.",
      },
      {
        item_id: "ec340fb1-17d3-4aac-be90-6ca80ebc7695",
        name: "cucumbers",
        img: cucumbers,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 7,
        category: "vegetables",
        storage_tip:
          "Moisture can cause cucumbers to rot faster. Make sure the cucumbers are dry before storing them in the refrigerator. You can gently pat them dry with a paper towel if needed.",
        whyEat:
          "Cucumbers are low in calories and high in water content, promoting hydration and aiding in weight management. They also provide vitamins K and C, as well as antioxidants, supporting bone health and overall well-being.",
      },
      {
        item_id: "63151b0d-943f-43bb-bca2-d2b1af222867",
        name: "ginger",
        img: ginger,
        price: 2.5,
        home: ["Countertop"],
        swapColor: "green",
        exp_int: 14,
        category: "vegetables",
        storage_tip:
          "Moisture can cause ginger to mold or become mushy. Store ginger in a dry condition and avoid washing it until you're ready to use it. For longer storage, keep unpeeled ginger in the refrigerator.",
        whyEat:
          "Ginger contains powerful antioxidants and anti-inflammatory compounds, supporting digestive health, reducing nausea, and alleviating muscle pain. It also helps boost the immune system and may lower blood sugar levels.",
      },
      {
        item_id: "d36f4b78-a397-4793-861a-35fea4ff817b",
        name: "lettuce",
        img: lettuce,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 7,
        category: "vegetables",
        storage_tip:
          "Moisture can cause lettuce to become wilted and slimy. Make sure the lettuce leaves are dry before storing them. You can gently pat them dry with a paper towel if needed.",
        whyEat:
          "Lettuce is low in calories and provides vitamins A, C, and K, as well as fiber, supporting eye health, immune function, bone health, and digestion. It also offers hydration due to its high water content.",
      },
      {
        item_id: "q48kq73k-3ekd-4qkd-ak42-27kc83qdec50",
        name: "lentils",
        img: lentils,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "legumes",
        storage_tip:
          "Transfer cooked lentils to an airtight container and refrigerate for up to 5 days, or freeze for up to 3 months. Dried lentils can be stored in a cool, dark pantry for up to a year.",
        whyEat:
          "Lentils are high in protein, iron, and folate, making them a great option for supporting muscle growth and red blood cell production. They are also rich in fiber, which helps stabilize blood sugar levels and supports heart health.",
      },
      {
        item_id: "v7ava7va-3djd-46jd-a6d2-27ec8eqdece0",
        name: "peanut oil",
        img: peanutoil,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "oils",
        storage_tip:
          "Store oils in a cool, dark place away from direct sunlight and heat, tightly sealed to prevent oxidation and rancidity. Most oils can be stored at room temperature, but some oils like extra virgin olive oil or coconut oil may benefit from refrigeration to extend shelf life.",
        whyEat:
          "Peanut oil is high in monounsaturated fats, which help reduce bad cholesterol (LDL) and promote heart health. It’s also a good source of vitamin E, supporting immune and skin health.",
      },
      {
        item_id: "934bc9fd-bbdc-482c-b60b-25f3879fb40a",
        name: "cauliflower",
        img: cauliflower,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "green",
        exp_int: 7,
        category: "vegetables",
        storage_tip:
          "To prevent excess moisture, wrap the cauliflower head in a paper towel before placing it in a plastic bag or an airtight container. This helps absorb any moisture that might cause mold.",
        whyEat:
          "Cauliflower is rich in vitamins C and K, fiber, and antioxidants, supporting immune health, bone health, and digestion. It also contains compounds that may help reduce inflammation and protect against certain cancers.",
      },
      {
        item_id: "10043109-0a9b-415e-a8e4-e53571267f30",
        name: "tomatoes",
        img: tomatoes,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 7,
        category: "vegetables",
        storage_tip:
          "If your tomatoes are not fully ripe, you can leave them at room temperature to ripen. Once they are ripe, you can transfer them to the refrigerator to slow down further ripening.",
        whyEat:
          "Tomatoes are rich in vitamins C and K, potassium, and antioxidants like lycopene, supporting immune health, heart health, and reducing inflammation. They also promote skin health and overall well-being.",
      },
      {
        item_id: "a4f4a51a-ca1a-40a4-92aa-29a4f01a0a72",
        name: "ground turkey",
        img: turkey,
        price: 2.5,
        home: ["Fridge", "Freezer"],
        swapColor: "yellow",
        exp_int: 2,
        category: "meats",
        storage_tip:
          "Airtight container, inside fridge. Cooked turkey should be consumed within 3-4 days of cooking. If you won't use it within that time, consider freezing it.",
        whyEat:
          "Turkey is a lean source of high-quality protein, vitamins B6 and B12, and essential minerals like selenium and zinc, supporting muscle growth, energy production, and immune function. It is also low in fat, promoting heart health when consumed as part of a balanced diet.",
      },
    ],
  },
  {
    level: 6,
    items: [
      {
        item_id: "efb63f52-4ff6-4e77-9cf7-fa0619bcd4c2",
        name: "oranges",
        img: oranges,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 7,
        category: "fruits",
        storage_tip:
          "Place them in the vegetable crisper drawer, where the temperature is slightly cooler and more humid. To prevent moisture loss, place oranges in a perforated plastic bag or an airtight container in the refrigerator.",
        whyEat:
          "Oranges are rich in vitamin C, fiber, and antioxidants, supporting immune health, skin health, and digestion. They also provide potassium, which helps maintain healthy blood pressure and overall heart health.",
      },
      {
        item_id: "j2evj45b-3jv9-4j48-94v6-529dfeva4b77",
        name: "cornmeal",
        img: cornmeal,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store cornmeal in an airtight container in a cool, dry pantry for up to 12 months. For extended freshness, refrigerate or freeze it to prevent the natural oils from turning rancid.",
        whyEat:
          "Cornmeal is a good source of carbohydrates and provides fiber, which aids in digestion. It also contains small amounts of iron and B vitamins, which help with energy metabolism.",
      },
      {
        item_id: "1e1a9a8f-1d53-4231-b13a-abcf62eaf0bc",
        name: "bacon",
        img: bacon,
        price: 2.5,
        home: ["Fridge", "Freezer"],
        swapColor: "red",
        exp_int: 4,
        category: "meats",
        goodsourceof: "protein, b vitamins",
        storage_tip:
          "If unopened, the original packaging will protect the bacon well. Once opened, or if you've removed some slices, wrap the remaining bacon tightly in plastic wrap or aluminum foil. Consider dividing the bacon into smaller portions before freezing.",
        whyEat:
          "Bacon, while flavorful and a good source of protein, should be consumed in moderation due to its high levels of saturated fats, sodium, and potential preservatives. It can provide some essential nutrients like B vitamins and selenium but is best enjoyed occasionally as part of a balanced diet.",
      },
      {
        item_id: "d2evd45d-30d9-41d8-94v6-529dfeva4b77",
        name: "rice noodles",
        img: ricenoodles,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "yellow",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store uncooked rice noodles in an airtight container in a cool, dry place. Once cooked, refrigerate and use within 3 days.",
        whyEat:
          "Rice noodles are gluten-free and low in fat, making them a good option for those with gluten sensitivity. They provide carbohydrates for energy but are lower in protein than wheat-based noodles.",
      },
      {
        item_id: "af4cb2f5-5a82-4489-a430-64a38fdfb980",
        name: "lemons",
        img: lemons,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 10,
        category: "fruits",
        storage_tip:
          "Place them in the vegetable crisper drawer, where the temperature is slightly cooler and more humid. To prevent moisture loss, place lemons in a perforated plastic bag or an airtight container in the refrigerator.",
        whyEat:
          "Lemons are rich in vitamin C, antioxidants, and fiber, supporting immune health, skin health, and digestion. They also contain compounds that may aid in detoxification and improve heart health.",
      },
      {
        item_id: "78f2a31b-22b1-447b-9d60-9e4560312140",
        name: "nectarines",
        img: nectarines,
        price: 2.5,
        home: ["Fridge", "Countertop"],
        swapColor: "green",
        exp_int: 4,
        category: "fruits",
        storage_tip:
          "If your nectarines are not fully ripe when you buy them, leave them at room temperature to ripen. They will continue to ripen and become sweeter over a few days.",
        whyEat:
          "Nectarines are rich in vitamins A and C, fiber, and antioxidants, supporting immune health, skin health, and digestion. They also provide potassium, which helps maintain healthy blood pressure and overall heart health.",
      },
      {
        item_id: "2tev5t5a-3tat-41a8-94va-529afeva4b77",
        name: "white rice",
        img: whiterice,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "yellow",
        exp_int: 30,
        category: "grains",
        storage_tip:
          "Store uncooked rice in an airtight container in a cool, dry place. Cooked rice should be refrigerated and consumed within 3-5 days.",
        whyEat:
          "Rice is a staple carbohydrate that provides energy. It comes in various varieties, each offering different nutrients, such as fiber, vitamins, and minerals, depending on the type.",
      },
      {
        item_id: "5fe37fc3-f2fb-43f6-8af7-c812f3afb7cf",
        name: "mozzarella cheese",
        img: mozzarella,
        price: 2.5,
        home: ["Fridge"],
        swapColor: "yellow",
        exp_int: 10,
        category: "dairy",
        storage_tip:
          "Store cheese in its original packaging or rewrap it in wax paper or parchment paper. Avoid using plastic wrap directly on the cheese, as it can trap moisture and affect the flavor. Keep different cheeses separate to prevent their flavors from mingling.",
        whyEat:
          "Cheese is a good source of protein, calcium, and vitamins A and B12, supporting muscle health, bone strength, and overall nutrition. However, it can be high in saturated fat and sodium, so it should be consumed in moderation.",
      },
      {
        item_id: "j4jfj7jj-3jjd-4qjd-jj4j-274c83qdec50",
        name: "flax seeds",
        img: flaxseeds,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "green",
        exp_int: 21,
        category: "nuts and seeds",
        storage_tip:
          "Store flax seeds in an airtight container in a cool, dry place. Ground flax seeds should be refrigerated to maintain freshness and prevent rancidity.",
        whyEat:
          "Flax seeds are rich in omega-3 fatty acids and fiber, supporting heart health and digestion. They also contain lignans, plant compounds with antioxidant properties.",
      },
      {
        item_id: "j88tj7t8-3tj8-4qjd-aj72-274c83qdec50",
        name: "cinnamon",
        img: cinnamon,
        price: 2.5,
        home: ["Pantry"],
        swapColor: "unranked",
        exp_int: 60,
        category: "spices and herbs",
        storage_tip:
          "Store dried spices in airtight containers in a cool, dry, and dark place, away from heat and moisture. Ideally, use within 6 months to 1 year for optimal flavor and potency, although they remain safe to consume beyond that timeframe.",
        whyEat:
          "Cinnamon is rich in antioxidants, particularly polyphenols, which may help reduce inflammation and lower blood sugar levels. It is also known to support heart health by lowering cholesterol.",
      },
    ],
  },
]
