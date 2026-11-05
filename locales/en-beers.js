// English copy only; names, measurements and images come from the shared catalog.
const englishBeers = {
 'Chiflón del Diablo': {
  description: 'Dedicated to the effort, tenacity, sacrifice and struggle of the miners of Lota.\n\nA malt-focused ale with a dark amber colour, low bitterness and a dry, refreshing finish.\n\nWe imagine it as the beer a miner would drink after a hard day underground.',
  pairing: 'Ideal with barbecued meats, smoked salmon and chips.'
 },
 'Chorero Porter': {
  description: 'The nickname for the people of Talcahuano inspires a beer that is robust, strong, hardworking and brave.\n\nA black English-style porter focused on dark and toasted malts, without heavily roasted notes.\n\nWe imagine it as the beer seafarers would drink before setting sail: comforting, intense and a true breakfast of champions.',
  pairing: 'Ideal with grilled meat, smoked foods and chocolate desserts.'
 },
 'Rey de la Araucanía': {
  description: 'Orélie Antoine de Tounens, a French adventurer, persuaded Mapuche leaders to proclaim his kingdom and make him their monarch. He created coins, a flag, a coat of arms and an anthem. His story inspires this beer.\n\nRey de la Araucanía is a hoppy beer with tropical, fruity aromas that evoke summer without being bitter. Fresh and smooth, it is easy to drink and made for unhurried moments, laughter and good company.',
  pairing: 'Refreshing and versatile, it pairs well with fish, seafood, pizza, burgers and sharing plates.'
 },
 'Llacolén': {
  style: 'Raspberry Gose',
  description: 'Millantú’s fiancée falls in love with a Spanish warrior. When Millantú discovers this, the two men fight to the death. Faced with the tragedy, Llacolén enters her lagoon and drowns. Love dies, and a legend is born.\n\nA kettle sour made with wheat and lactic fermentation, with a mineral character that complements raspberries and coriander seeds.\n\nRefreshing, tart, dry and light.',
  pairing: 'An aperitif beer, ideal at the start of a barbecue or for late-afternoon drinks. Excellent with ceviche, fresh dishes and fruit desserts.'
 },
 'Mocha Dick - Barleywine': {
  description: 'A tribute to the strength of the real white whale that lived off Isla Mocha in southern Chile and inspired the story of Moby Dick.\n\nAn intense, dark amber beer with a full body, rich malt character and high alcohol content. Its complexity recalls sherry and cognac.\n\nThis beer defines us: it represents the toughness and strength of the whale, nature and everything that remains untamed.',
  pairing: 'Ideal with rich dishes and strong cheeses, or as an after-dinner drink.'
 },
 'Mocha Dick - Canelo Austral': {
  style: 'Barleywine with southern canelo pepper',
  description: 'Full-bodied and dark amber, this barleywine reveals notes of toffee, deep caramel, dried fruit, sherry and cognac. Canelo pepper adds a warm, spicy layer, with an elegant, subtle heat that complements the beer’s alcoholic strength and gives it a deep, lingering southern character.',
  pairing: 'Pairs with rich dishes, strong cheeses, smoked meats, lamb, dark chocolate desserts or nuts. It can also be enjoyed on its own as a slow, ceremonial beer with character.'
 },
 'Carmela': {
  style: 'Moscatel Golden Grape Ale',
  description: 'Carmela brings together Viña San Roke and Cerveza Indomable: a collaboration that blends beer with Moscatel grape must to create a fragrant, dry grape ale with a southern soul.\n\nInspired by Carmela from La Pérgola de las Flores, the story moves to a new setting: she leaves San Rosendo and arrives in Concepción carrying baskets, the grape harvest and the countryside with her. She brings the scent of Moscatel, memories of the vineyard and a distinctly local blend of folk tradition, craft and celebration.\n\nThe beer base provides body and drinkability, while the grapes bring floral and fruity aromas. Hops support rather than dominate. The result is a bright, elegant hybrid beer in which Moscatel expresses itself naturally, ending with a dry, fresh and delicate finish.\n\nA collaboration between vineyard and brewery. A beer born among vines, grains and the south.'
 },
 'Nonguén': {
  style: 'Imperial Stout with coffee beans',
  description: 'In 1995, the community of Concepción decided to protect and conserve the Nonguén estate. We celebrate that decision and enjoy our nature reserve.\n\nA complex beer with harmonious layers of nuts and coffee, a warm alcoholic finish, added chancaca (unrefined cane sugar) and an infusion of whole coffee beans.\n\nThis beer celebrates a job well done: that moment at the end of a working day when we reflect with pride on what we have achieved, such as choosing to protect our habitat. We celebrate that moment with a Nonguén.',
  pairing: 'Pairs with rich dishes, mature cheeses, charcoal-grilled meats, and coffee or chocolate desserts.'
 },
 'San Sebastián - Belgian Tripel': {
  description: 'Every year, thousands of pilgrims visit the sanctuary of Yumbel to fulfil their vows and give thanks for favours granted by the saint known for answering prayers. This story inspired our blend of flavours.\n\nA deep golden abbey-style beer with a high alcohol content. Spicy, dry and highly aromatic.\n\nA beer to accompany our summer pilgrimage as we honour our promises to the saint.\n\nGolden, strong and deceptively easy to drink.',
  pairing: 'Pairs with pasta, pizza, creamy cheeses and fruit desserts.'
 },
 'Berry Red Ale': {style: 'Calafate berry-flavoured beer'},
 'San Sebastián - Ulmo de la Araucanía': {
  style: 'Belgian Tripel with ulmo honey from the forests of southern Araucanía',
  description: 'It retains the character of a Belgian tripel: golden, intense, dry, spicy and deceptively easy to drink. Ulmo honey adds a floral, honeyed layer rather than sweetness, complementing the esters and phenols of Belgian fermentation. The result is a bright, aromatic beer with clean alcohol, gentle spice, a medium body and a dry finish that invites another sip.',
  pairing: 'Excellent with creamy cheeses, white pizza, pasta with mild sauces, spiced chicken, oily fish, honey or mustard dishes, and fruit desserts. It also makes an elegant, floral and intense after-dinner beer.'
 },
 'Ira': {
  appearance: 'Bright, clear reddish amber, with lively white foam and medium head retention.',
  aroma: 'Caramel, biscuit and bread, with no hop aromas.',
  flavor: 'Malty toffee and sponge cake notes, with little hop bitterness and a dry finish. Highly drinkable.'
 },
 'Gula': {
  appearance: 'Bright golden colour with a semi-creamy white head and medium retention.',
  aroma: 'Bread from pale malts and a light citrus sweetness from dry hopping during maturation.',
  flavor: 'Lively and malty with gentle bitterness. Balanced between bitterness and sweetness, with high drinkability.'
 },
 'Avaricia': {
  style: 'Belgian Blonde',
  appearance: 'Medium golden colour with a semi-creamy white head and medium retention.',
  aroma: 'Spicy phenols, intense pilsner malt and Belgian yeast, with banana, clove and honey notes.',
  flavor: 'Intense sweetness, warming alcohol, caramel and honey. Almost imperceptible hops, with a spicy, dry finish.'
 },
 'Lujuria': {
  appearance: 'Pale golden colour with a white head and medium retention.',
  aroma: 'Subtle, seeking balance between malt and hops.',
  flavor: 'A medium-low malt profile with gentle sweet notes reminiscent of corn. Smooth and refreshing.'
 },
 'Soberbia': {
  appearance: 'Good body, bright with a slight reddish hue and medium-density foam.',
  aroma: 'Intense resin, pine and red fruit notes, with little malt and subtle caramel.',
  flavor: 'Medium carbonation and body, medium-high bitterness and a hoppy impression of resin, fruit and pine. A moderately bitter aftertaste, gentle hop spice, faint malt and caramel, and a dry finish. The hop combination recalls the forest.'
 },
 'Pereza': {
  appearance: 'Thick and intensely yellow, hazy like juice. Dense foam with medium to high retention.',
  aroma: 'Strong tropical aromas of mango, peach, coconut and tropical bubble gum.',
  flavor: 'Medium carbonation, a robust, creamy, thick body, medium-high bitterness and a fresh, juicy hop character.'
 },
 'Envidia': {
  appearance: 'Light yet chewy body, with a dense, creamy, long-lasting head and a bright, intense black colour.',
  aroma: 'Coffee and toasted caramel, with dark malt and baked coconut notes.',
  flavor: 'Creamy, with medium-high bitterness and great intensity for its light alcohol level. A German-style lager with a long brewing process and high drinkability.'
 },
 'Reincidente': {
  appearance: 'Full-bodied, with dense foam, medium to high head retention and a deep brown to black colour.',
  aroma: 'Coffee, chocolate and burnt grain, with prominent vanilla, cinnamon and clove, and a subtle liqueur-like note.',
  flavor: 'Malty, with roasted wheat coffee notes, medium bitterness and a little astringency from dark grains. Reminiscent of Chilean Christmas cake and dark chocolate. Hops are not noticeable; intense and distinctive.'
 },
 'Don Francisco': {
  appearance: 'Full-bodied and brown, with dense foam and medium to high head retention.',
  aroma: 'Complex, with sweet malt, ripe fruit such as raisins and plums, caramel, toffee and subtle spices.',
  flavor: 'Sponge cake crust, toasted caramel and molasses. Esters evoke nuts, cashews and dried fruit; spicy phenols suggest coconut and vanilla, alongside rum-like notes. Smooth and silky, with a full body and a warming sensation from its high alcohol content.'
 },
 'Papaya Asesina': {
  style: 'Double Hazy IPA',
  appearance: 'Golden orange, hazy from generous hopping, with a generous, compact and persistent head.',
  aroma: 'Tropical fruit, stone fruit and citrus: papaya, mango, peach, orange and grapefruit, with a slightly resinous finish.',
  flavor: 'Full-bodied and silky, with balanced bitterness and medium carbonation. The tropical fruit, stone fruit and citrus aromas carry through to the palate.'
 },
 'Tres Pascualas': {}
};
