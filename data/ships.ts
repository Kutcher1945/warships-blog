export interface Ship {
  id: string
  name: string
  class: string
  nation: string
  image: string
  year: string
  crew: string
  displacement: string
  speed: string
  armament: string
  description: string
  history: string
  fate?: string
  battles?: string[]
  model3dUrl?: string
  badgeVariant: 'battleship' | 'cruiser' | 'destroyer' | 'submarine'
}

export const ships: Ship[] = [
  {
    id: 'sms-prinz-eugen',
    name: 'SMS Prinz Eugen',
    class: 'Battlecruiser',
    nation: 'Austro-Hungarian Navy',
    image: '/prinz_eugen.jpeg',
    year: '1912',
    crew: '1,087 crew',
    displacement: '15,400 tons',
    speed: '27 knots',
    armament: '12× 24 cm guns, 12× 15 cm guns, 4× 53.3 cm torpedo tubes',
    description: 'Powerful Austro-Hungarian battlecruiser of the Tegetthoff class',
    history: 'SMS Prinz Eugen was one of four Tegetthoff-class dreadnought battleships built for the Austro-Hungarian Navy. Named after Prince Eugene of Savoy, she served in the Adriatic Sea during WWI. Though she saw limited action, she represented the peak of Austro-Hungarian naval power and was one of the most modern warships of her time.',
    fate: 'Ceded to France as war reparation in 1920, scrapped in 1922',
    battles: ['Bombardment of Ancona', 'Adriatic Sea patrols'],
    model3dUrl: 'https://sketchfab.com/models/6c344002b9944856941902a259a0641e/embed?autostart=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0',
    badgeVariant: 'destroyer'
  },
  {
    id: 'hms-dreadnought',
    name: 'HMS Dreadnought',
    class: 'Battleship',
    nation: 'Royal Navy',
    image: '/hms-dreadnought-battleship-wwi.jpg',
    year: '1906',
    crew: '773 crew',
    displacement: '18,120 tons',
    speed: '21 knots',
    armament: '10× 12-inch guns, 27× 12-pounder guns, 5× 18-inch torpedo tubes',
    description: 'Revolutionary battleship that gave its name to an entire class of warships',
    history: 'HMS Dreadnought revolutionized naval power with her "all-big-gun" armament and steam turbine propulsion. She made all previous battleships obsolete overnight and sparked a naval arms race. Launched in 1906, she represented the most advanced naval technology of her time and changed the course of naval history.',
    fate: 'Sold for scrap in 1923',
    battles: ['Battle of Jutland (support role)'],
    badgeVariant: 'battleship'
  },
  {
    id: 'sms-emden',
    name: 'SMS Emden',
    class: 'Light Cruiser',
    nation: 'Imperial German Navy',
    image: '/sms-emden-german-cruiser-wwi.jpg',
    year: '1908',
    crew: '361 crew',
    displacement: '3,664 tons',
    speed: '24.5 knots',
    armament: '10× 10.5 cm guns, 2× 45 cm torpedo tubes',
    description: 'German light cruiser famous for its commerce raiding in the Indian Ocean',
    history: 'SMS Emden became one of the most successful commerce raiders of WWI, capturing or sinking 30 Allied vessels in the Indian Ocean before being destroyed by HMAS Sydney in November 1914. Her captain, Karl von Müller, was known for his chivalrous treatment of captured crews.',
    fate: 'Sunk by HMAS Sydney on 9 November 1914',
    battles: ['Battle of Cocos', 'Indian Ocean commerce raids'],
    badgeVariant: 'cruiser'
  },
  {
    id: 'hms-hood',
    name: 'HMS Hood',
    class: 'Battlecruiser',
    nation: 'Royal Navy',
    image: '/hms-hood-battlecruiser-wwi.jpg',
    year: '1918',
    crew: '1,477 crew',
    displacement: '46,680 tons',
    speed: '31 knots',
    armament: '8× 15-inch guns, 12× 5.5-inch guns, 4× 21-inch torpedo tubes',
    description: 'The largest battlecruiser ever built, pride of the Royal Navy',
    history: 'HMS Hood was the largest warship in the world for 20 years. Though commissioned just after WWI ended, she served as a symbol of British naval might throughout the interwar period. Her combination of firepower and speed made her a formidable vessel.',
    fate: 'Sunk by Bismarck in WWII (1941)',
    battles: ['Interwar period service'],
    badgeVariant: 'destroyer'
  },
  {
    id: 'uss-texas',
    name: 'USS Texas',
    class: 'Battleship',
    nation: 'United States Navy',
    image: '/placeholder.jpg',
    year: '1912',
    crew: '1,054 crew',
    displacement: '27,000 tons',
    speed: '21 knots',
    armament: '10× 14-inch guns, 21× 5-inch guns',
    description: 'First US battleship to mount 14-inch guns',
    history: 'USS Texas (BB-35) served in both World Wars and is now a museum ship. She was the first US battleship to launch an aircraft and mount anti-aircraft guns. Her service during WWI included convoy escort duties in the Atlantic.',
    fate: 'Museum ship in Texas',
    battles: ['Atlantic convoy escort', 'D-Day (WWII)'],
    badgeVariant: 'battleship'
  },
  {
    id: 'sms-bayern',
    name: 'SMS Bayern',
    class: 'Battleship',
    nation: 'Imperial German Navy',
    image: '/placeholder.jpg',
    year: '1915',
    crew: '1,187 crew',
    displacement: '28,600 tons',
    speed: '22 knots',
    armament: '8× 15-inch guns, 16× 5.9-inch guns',
    description: 'Most powerful battleship of the Imperial German Navy',
    history: 'SMS Bayern was the lead ship of her class and one of the most powerful battleships built during WWI. She featured excellent armor protection and powerful 15-inch guns. She saw limited action due to her late commissioning but represented the pinnacle of German battleship design.',
    fate: 'Scuttled at Scapa Flow, 1919',
    battles: ['Battle of Jutland (limited action)'],
    badgeVariant: 'battleship'
  },
  {
    id: 'hms-warspite',
    name: 'HMS Warspite',
    class: 'Battleship',
    nation: 'Royal Navy',
    image: '/placeholder.jpg',
    year: '1913',
    crew: '925 crew',
    displacement: '31,500 tons',
    speed: '24 knots',
    armament: '8× 15-inch guns, 14× 6-inch guns',
    description: 'One of the most distinguished Royal Navy battleships',
    history: 'HMS Warspite served with distinction in both World Wars, earning the most battle honours of any Royal Navy ship. During WWI, she fought at the Battle of Jutland where she was severely damaged but continued fighting. Known as the "Grand Old Lady" of the Royal Navy.',
    fate: 'Ran aground while being towed for scrap, 1947',
    battles: ['Battle of Jutland', 'Battle of Narvik (WWII)'],
    badgeVariant: 'battleship'
  },
  {
    id: 'hms-iron-duke',
    name: 'HMS Iron Duke',
    class: 'Battleship',
    nation: 'Royal Navy',
    image: '/placeholder.jpg',
    year: '1912',
    crew: '925 crew',
    displacement: '25,000 tons',
    speed: '21.6 knots',
    armament: '10× 13.5-inch guns, 12× 6-inch guns',
    description: 'Admiral Jellicoe\'s flagship at Jutland',
    history: 'HMS Iron Duke served as Admiral Sir John Jellicoe\'s flagship during the Battle of Jutland, the largest naval battle of WWI. She led the Grand Fleet throughout most of the war and represented the backbone of British naval supremacy.',
    fate: 'Used as gunnery training ship, scrapped 1946',
    battles: ['Battle of Jutland'],
    badgeVariant: 'battleship'
  },
  {
    id: 'hms-lion',
    name: 'HMS Lion',
    class: 'Battlecruiser',
    nation: 'Royal Navy',
    image: '/placeholder.jpg',
    year: '1910',
    crew: '997 crew',
    displacement: '26,270 tons',
    speed: '28 knots',
    armament: '8× 13.5-inch guns, 16× 4-inch guns',
    description: 'Powerful battlecruiser and fleet flagship',
    history: 'HMS Lion served as Admiral Beatty\'s flagship during WWI and fought in several major engagements including Dogger Bank and Jutland. She was hit multiple times during battle but her crew\'s damage control saved her from destruction.',
    fate: 'Sold for scrap in 1924',
    battles: ['Battle of Heligoland Bight', 'Battle of Dogger Bank', 'Battle of Jutland'],
    badgeVariant: 'destroyer'
  },
  {
    id: 'sms-seydlitz',
    name: 'SMS Seydlitz',
    class: 'Battlecruiser',
    nation: 'Imperial German Navy',
    image: '/placeholder.jpg',
    year: '1912',
    crew: '1,068 crew',
    displacement: '24,988 tons',
    speed: '26.5 knots',
    armament: '10× 11.1-inch guns, 12× 5.9-inch guns',
    description: 'Legendary German battlecruiser known for her toughness',
    history: 'SMS Seydlitz was renowned for her ability to absorb damage. At Jutland, she was hit by 21 heavy shells and a torpedo but survived. Her superior damage control and compartmentalization demonstrated German engineering excellence.',
    fate: 'Scuttled at Scapa Flow, 1919',
    battles: ['Battle of Dogger Bank', 'Battle of Jutland'],
    badgeVariant: 'destroyer'
  },
  {
    id: 'hms-queen-elizabeth',
    name: 'HMS Queen Elizabeth',
    class: 'Battleship',
    nation: 'Royal Navy',
    image: '/placeholder.jpg',
    year: '1913',
    crew: '951 crew',
    displacement: '31,500 tons',
    speed: '24 knots',
    armament: '8× 15-inch guns, 16× 6-inch guns',
    description: 'Lead ship of the legendary Queen Elizabeth class',
    history: 'HMS Queen Elizabeth was the lead ship of the most successful class of battleships ever built by the Royal Navy. She combined speed, armor, and firepower in revolutionary design that influenced battleship construction worldwide.',
    fate: 'Scrapped in 1948',
    battles: ['Dardanelles Campaign', 'WWII Mediterranean operations'],
    badgeVariant: 'battleship'
  },
  {
    id: 'uss-pennsylvania',
    name: 'USS Pennsylvania',
    class: 'Battleship',
    nation: 'United States Navy',
    image: '/placeholder.jpg',
    year: '1915',
    crew: '1,358 crew',
    displacement: '31,400 tons',
    speed: '21 knots',
    armament: '12× 14-inch guns, 22× 5-inch guns',
    description: 'Powerful American super-dreadnought',
    history: 'USS Pennsylvania (BB-38) was a formidable super-dreadnought that served in WWI convoy operations and later became famous for surviving Pearl Harbor and fighting throughout WWII. She represented American industrial might.',
    fate: 'Sunk as target in 1948',
    battles: ['WWI Atlantic operations', 'Pearl Harbor (WWII)'],
    badgeVariant: 'battleship'
  },
  {
    id: 'hms-tiger',
    name: 'HMS Tiger',
    class: 'Battlecruiser',
    nation: 'Royal Navy',
    image: '/placeholder.jpg',
    year: '1913',
    crew: '1,121 crew',
    displacement: '28,430 tons',
    speed: '28 knots',
    armament: '8× 13.5-inch guns, 12× 6-inch guns',
    description: 'Fast and powerful battlecruiser',
    history: 'HMS Tiger was the most powerful battlecruiser in the world when completed. She fought at Dogger Bank and Jutland, demonstrating both the strengths and vulnerabilities of the battlecruiser concept.',
    fate: 'Sold for scrap in 1932',
    battles: ['Battle of Dogger Bank', 'Battle of Jutland'],
    badgeVariant: 'destroyer'
  }
]

export const nations = ['All Nations', 'Royal Navy', 'Imperial German Navy', 'United States Navy', 'Austro-Hungarian Navy']
export const shipTypes = ['All Types', 'Battleship', 'Battlecruiser', 'Light Cruiser']
export const years = ['All Years', '1906-1910', '1911-1915', '1916-1920']
