const GAGE = {
  name:"Gage",
  type:"Merc (Former Convoy Security)",
  species:"Male / Barabel",
  age:"43",
  height:"2.08 m",
  weight:"142 kg",
  move:"10",
  quote:"Violence is easy. Living with it isn't.",
  attributes:{Dexterity:"4D",Perception:"3D",Knowledge:"2D",Strength:"4D",Mechanical:"2D+2",Technical:"3D"},
  skills:[
    {group:"Dexterity",name:"Blaster",value:"6D",dice:6,trained:true,desc:"Firing blaster pistols, heavy blasters, carbines and rifles.",examples:["Heavy blaster pistol","Carbine fire","Covering the party"]},
    {group:"Dexterity",name:"Brawling Parry",value:"4D",dice:4,trained:false,desc:"Blocking punches, kicks and unarmed attacks.",examples:["Stop a punch","Control a grapple","Protect the Captain"]},
    {group:"Dexterity",name:"Dodge",value:"6D",dice:6,trained:true,desc:"Avoiding blaster fire, grenades and ranged attacks.",examples:["Dive behind cover","Cross open ground","Survive ambushes"]},
    {group:"Dexterity",name:"Grenade",value:"4D",dice:4,trained:false,desc:"Throwing smoke, stun, flash or fragmentation grenades.",examples:["Smoke extraction","Stun a room","Flush out cover"]},
    {group:"Dexterity",name:"Melee Combat",value:"5D",dice:5,trained:true,desc:"Attacking with vibroblades, knives, clubs or improvised melee weapons.",examples:["Boarding action","Close quarters","Last resort"]},
    {group:"Dexterity",name:"Melee Parry",value:"5D",dice:5,trained:true,desc:"Blocking melee weapons.",examples:["Vibro-axe","Knife attack","Improvised weapon"]},
    {group:"Dexterity",name:"Vehicle Blasters",value:"4D",dice:4,trained:false,desc:"Firing weapons mounted on ground vehicles.",examples:["Speeder gun","Mounted turret","Convoy defense"]},

    {group:"Perception",name:"Command",value:"4D",dice:4,trained:true,desc:"Giving clear orders under pressure.",examples:["Behind me","Hold fire","Medic move","Cover the ramp"]},
    {group:"Perception",name:"Con",value:"3D",dice:3,trained:false,desc:"Lying, bluffing and playing innocent.",examples:["Delay customs","Hide intent","Play dumb"]},
    {group:"Perception",name:"Gambling",value:"3D",dice:3,trained:false,desc:"Games of chance, risk and reading a table.",examples:["Sabacc","Spot a cheat","Read a gambler"]},
    {group:"Perception",name:"Hide",value:"3D",dice:3,trained:false,desc:"Hiding objects, weapons or contraband.",examples:["Hide a blaster","Stash evidence","Conceal gear"]},
    {group:"Perception",name:"Search",value:"4D",dice:4,trained:true,desc:"Spotting ambushes, weapons, traps, hidden exits and threats.",examples:["Hidden blaster","Smuggler compartment","Nervous hands","Trap"]},
    {group:"Perception",name:"Sneak",value:"3D",dice:3,trained:false,desc:"Moving quietly and avoiding detection.",examples:["Silent corridor","Avoid patrol","Boarding quietly"]},

    {group:"Knowledge",name:"Alien Species",value:"2D",dice:2,trained:false,desc:"Knowledge of species, behavior and special abilities.",examples:["Know a species trait","Avoid insult","Read alien body language"]},
    {group:"Knowledge",name:"Languages",value:"2D",dice:2,trained:false,desc:"Understanding and speaking languages.",examples:["Recognize dialect","Basic translation","Spot coded slang"]},
    {group:"Knowledge",name:"Planetary Systems",value:"2D",dice:2,trained:false,desc:"Planets, trade routes, local hazards and system knowledge.",examples:["Trade route","Local law","System risk"]},
    {group:"Knowledge",name:"Streetwise",value:"2D",dice:2,trained:false,desc:"Underworld contacts, criminal habits and local risk.",examples:["Find a fixer","Know gang colors","Avoid a trap deal"]},
    {group:"Knowledge",name:"Survival",value:"2D",dice:2,trained:false,desc:"Surviving deserts, snow, jungles, wilderness and hostile environments.",examples:["Find shelter","Conserve water","Read weather"]},

    {group:"Strength",name:"Brawling",value:"4D",dice:4,trained:false,desc:"Unarmed fighting: punches, kicks, holds and grapples.",examples:["Non-lethal takedown","Grapple a gun hand","Bar fight"]},
    {group:"Strength",name:"Climbing/Jumping",value:"4D",dice:4,trained:false,desc:"Climbing, jumping and crossing obstacles.",examples:["Boarding gantry","Leap gap","Climb cargo"]},
    {group:"Strength",name:"Lifting",value:"4D",dice:4,trained:false,desc:"Lifting, carrying and forcing things open.",examples:["Lift debris","Carry wounded","Force door"]},
    {group:"Strength",name:"Stamina",value:"4D",dice:4,trained:false,desc:"Endurance, heat, cold, fatigue, poison and pain.",examples:["Long watch","March wounded","Stay standing"]},
    {group:"Strength",name:"Swimming",value:"4D",dice:4,trained:false,desc:"Swimming and surviving water environments.",examples:["Cross water","Escape sinking craft","Rescue crew"]},

    {group:"Mechanical",name:"Beast Riding",value:"2D+2",dice:2,mod:"+2",trained:false,desc:"Riding living mounts.",examples:["Ride local beast","Stay mounted","Control panicked animal"]},
    {group:"Mechanical",name:"Ground Vehicle Operation",value:"2D+2",dice:2,mod:"+2",trained:false,desc:"Driving ground vehicles.",examples:["Truck","Crawler","Convoy vehicle"]},
    {group:"Mechanical",name:"Repulsorlift Operation",value:"2D+2",dice:2,mod:"+2",trained:false,desc:"Driving landspeeders, airspeeders and speeder bikes.",examples:["Speeder chase","Docking bay escape","Patrol route"]},
    {group:"Mechanical",name:"Starship Gunnery",value:"4D",dice:4,trained:true,desc:"Firing ship cannons, turrets and weapon systems.",examples:["Turret fire","Defensive fire","Cover the jump"]},
    {group:"Mechanical",name:"Walker Operation",value:"2D+2",dice:2,mod:"+2",trained:false,desc:"Operating walkers.",examples:["Move walker","Basic controls","Emergency use"]},

    {group:"Technical",name:"Computer Programming/Repair",value:"3D",dice:3,trained:false,desc:"Hacking, programming and repairing computers.",examples:["Terminal access","Repair console","Find logs"]},
    {group:"Technical",name:"Demolitions",value:"3D",dice:3,trained:false,desc:"Placing, understanding or disarming explosives.",examples:["Spot charge","Set breaching charge","Disarm trap"]},
    {group:"Technical",name:"First Aid",value:"4D",dice:4,trained:true,desc:"Stabilizing injured allies until the medic takes over.",examples:["Stop bleeding","Keep conscious","Buy time"]},
    {group:"Technical",name:"Security",value:"4D",dice:4,trained:true,desc:"Locks, alarms, cameras, doors, weapon lockers and security systems.",examples:["Open blast door","Disable alarm","Secure ship","Bypass keypad"]}
  ],
  weapons:[
    {name:"BlasTech DL-6H Heavy Blaster Pistol",damage:"5D",skill:"Blaster 6D",attackDice:6,damageDice:5,range:"3-10 / 30 / 120",ammo:"25",note:"Service weapon. Always holstered. Always maintained."},
    {name:"SoroSuub QuickSnap 36T Blaster Carbine",damage:"5D",skill:"Blaster 6D",attackDice:6,damageDice:5,range:"3-25 / 50 / 250",ammo:"100",note:"Primary boarding weapon. Compact and reliable."},
    {name:"Military Vibroblade",damage:"STR + bonus",skill:"Melee Combat 5D",attackDice:5,damageDice:6,range:"Melee",ammo:"—",note:"Usually a tool. If he fights with it, things have gone wrong."}
  ],
  gear:[
    {name:"DL-6H Heavy Blaster Pistol",tag:"Weapon",desc:"Gage's service weapon. Heavy, reliable, always cleaned."},
    {name:"QuickSnap 36T Blaster Carbine",tag:"Weapon",desc:"Compact carbine for corridors, boarding and shipboard fighting."},
    {name:"Military Vibroblade",tag:"Tool / Weapon",desc:"Normally a tool. If he fights with it, things have gone wrong."},
    {name:"Comlink",tag:"Communication",desc:"Basic party communication. Gage always wants to know where the Captain and medic are."},
    {name:"Motion Tracker",tag:"Security",desc:"Detects movement in corridors, cargo holds, ruins or derelicts."},
    {name:"Macrobinoculars",tag:"Recon",desc:"Long-distance observation, watching meeting sites and checking landing zones."},
    {name:"Smoke Grenades",tag:"Non-lethal",desc:"Creates cover for retreat, extraction or protecting the Captain."},
    {name:"Medpac",tag:"Medical",desc:"First aid until the real medic takes over. Everyone comes home."},
    {name:"Binder Cuffs",tag:"Control",desc:"For ending problems without killing anyone. Gage prefers prisoners to bodies."},
    {name:"Breath Mask",tag:"Survival",desc:"Toxic atmosphere, smoke, gas and damaged ships."},
    {name:"Power Packs",tag:"Ammo",desc:"Extra ammunition for blasters. No serious security chief runs dry."},
    {name:"Protective Combat Helmet",tag:"Armor",desc:"Practical protection, not intimidation. Function over style."},
    {name:"Backpack",tag:"Utility",desc:"Carries what cannot be lost. Gage's go-bag."},
    {name:"Personal token from The Squad",tag:"Memory",desc:"No mechanical effect. Strong roleplay effect."}
  ],
  bio:`The first thing I learned to protect was not a person.

It was a shipment.

A crate of grain on a convoy route so old that half the nav beacons had gone dark.

Nobody remembers the grain. Nobody remembers the ship. Nobody remembers the crew that would have starved if it never arrived.

That is the thing about security. When you do your job well, people remember the cargo. Not you.

The company called us convoy security. Other people called us mercenaries. We called ourselves The Squad.

Then came the contract. It paid too well. That was the first warning.

The pirates hit us before the second jump point.

We held the line.

We called for reinforcements.

They never came.

Later, I understood. The convoy had been written off before we ever launched. The cargo was insured. The ships were replaceable. The crews were unfortunate. The security teams were expendable.

The Squad was not betrayed in anger.

That would have been easier.

We were betrayed by arithmetic.

I survived.

Most of them did not.

I do not tell stories about that day.

If someone asks, I say:

It was a long time ago.

Now I travel with the party.

They are not my employers.

They are not cargo.

They are not replaceable.

They are my people.

And no one gets left behind again.`,
  quotes:["I'd rather talk.","Violence is easy. Living with it isn't.","If weapons come out... let's make sure we're the ones who put them away.","They're my crew.","No one gets left behind.","Can we take them? Probably. The better question is: do we have to?"],
  rules:[
    {title:"Skill Rolls",body:"Roll the listed number of D. Add the total. Skills with +1 or +2 add that modifier after rolling."},
    {title:"Attack Rolls",body:"Roll the attack skill against a difficulty or the target's Dodge."},
    {title:"Damage",body:"If the attack hits, roll weapon damage. The target rolls Strength plus armor. Compare totals."},
    {title:"Wild Die",body:"Many Star Wars D6 tables use a Wild Die. Ask the GM. If used, one die can explode on 6 or cause complications on 1."},
    {title:"Multiple Actions",body:"Two actions in the same round usually gives -1D to both. More actions means more risk."},
    {title:"Character Points",body:"Used for advancement and sometimes emergency boosts. Save them unless the moment matters."},
    {title:"Force Points",body:"Big cinematic moments. Use only when the scene deserves it."},
    {title:"Security vs Computers",body:"Security handles locks, alarms, cameras, blast doors and access control. Computers handles terminals, code, software and data."},
    {title:"Search vs Perception",body:"Search is active and trained: checking exits, hands, compartments and traps. Perception is raw awareness."}
  ]
};
