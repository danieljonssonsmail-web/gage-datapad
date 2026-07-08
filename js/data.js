const GAGE={name:"Gage",type:"Merc (Former Convoy Security)",species:"Male / Barabel",age:"43",height:"2.08 m",weight:"142 kg",move:"10",quote:"Violence is easy. Living with it isn't.",role:"Security Chief / Gunner",attributes:{Dexterity:"4D",Perception:"3D",Knowledge:"2D",Strength:"4D",Mechanical:"2D+2",Technical:"3D"},skills:[{group:"Dexterity",name:"Blaster",dice:6,value:"6D",desc:"Firing blaster pistols, heavy blasters, carbines, and rifles.",examples:["Draw only when words fail.","Cover the party during retreat.","Disable a threat fast."]},{group:"Dexterity",name:"Dodge",dice:6,value:"6D",desc:"Avoiding blaster fire, grenades, and ranged attacks.",examples:["Crossing open ground.","Surviving ambushes.","Diving behind cover."]},{group:"Dexterity",name:"Melee Combat",dice:5,value:"5D",desc:"Attacking with a vibroblade, knife, staff, or other melee weapon.",examples:["Boarding actions.","Close quarters.","Last resort fighting."]},{group:"Dexterity",name:"Melee Parry",dice:5,value:"5D",desc:"Blocking melee weapons.",examples:["Vibro-axes.","Clubs.","Improvised weapons."]},{group:"Perception",name:"Search",dice:4,value:"4D",desc:"Spotting ambushes, weapons, traps, hidden doors, exits, and threats.",examples:["Hidden blasters.","Smuggler compartments.","Nervous hands.","Bottleneck exits."]},{group:"Perception",name:"Command",dice:4,value:"4D",desc:"Giving clear orders under pressure.",examples:["Behind me.","Hold fire.","Medic, move.","Cover the ramp."]},{group:"Mechanical",name:"Starship Gunnery",dice:4,value:"4D",desc:"Firing ship cannons, turrets, and weapon systems.",examples:["Turret fire.","Defensive fire.","Covering a jump."]},{group:"Technical",name:"Security",dice:4,value:"4D",desc:"Locks, alarms, cameras, doors, weapon lockers, and security systems.",examples:["Open a blast door.","Disable alarms.","Secure the ship.","Bypass a keypad."]},{group:"Technical",name:"First Aid",dice:4,value:"4D",desc:"Stabilizing injured allies until the medic takes over.",examples:["Stop bleeding.","Keep someone conscious.","Buy time."]},{group:"Strength",name:"Brawling",dice:4,value:"4D",desc:"Unarmed fighting: punches, kicks, holds, and grapples.",examples:["Non-lethal takedown.","Grapple someone reaching for a weapon."]},{group:"Strength",name:"Stamina",dice:4,value:"4D",desc:"Endurance, heat, cold, fatigue, poison, pain.",examples:["Long watch.","Marching wounded.","Staying standing."]}],weapons:[{name:"BlasTech DL-6H Heavy Blaster Pistol",damage:"5D",skill:"Blaster 6D",attackDice:6,damageDice:5,range:"3-10 / 30 / 120",ammo:"25",note:"Service weapon. Always holstered. Always maintained."},{name:"SoroSuub QuickSnap 36T Blaster Carbine",damage:"5D",skill:"Blaster 6D",attackDice:6,damageDice:5,range:"3-25 / 50 / 250",ammo:"100",note:"Primary boarding weapon. Compact and reliable."},{name:"Military Vibroblade",damage:"STR + bonus",skill:"Melee Combat 5D",attackDice:5,damageDice:6,range:"Melee",ammo:"—",note:"Usually a tool. If he fights with it, things have gone wrong."}],gear:[{name:"Comlink",tag:"Communication",desc:"Basic party communication. Gage always wants to know where the Captain and medic are."},{name:"Motion Tracker",tag:"Security",desc:"Detects movement in corridors, cargo holds, ruins, or derelicts. Gage's 'something is wrong' tool."},{name:"Macrobinoculars",tag:"Recon",desc:"Long-distance observation, watching meeting sites, and checking landing zones."},{name:"Smoke Grenades",tag:"Non-lethal",desc:"Creates cover for retreat, extraction, or protecting the Captain."},{name:"Medpac",tag:"Medical",desc:"First aid until the real medic takes over. Everyone comes home."},{name:"Binder Cuffs",tag:"Control",desc:"For ending problems without killing anyone. Gage prefers prisoners to bodies."},{name:"Breath Mask",tag:"Survival",desc:"Toxic atmosphere, smoke, gas, damaged ships. A veteran does not forget basic survival gear."},{name:"Power Packs",tag:"Ammo",desc:"Extra ammunition for blasters. No serious security chief runs dry."},{name:"Protective Combat Helmet",tag:"Armor",desc:"Practical protection, not intimidation. Function over style."},{name:"Personal token from The Squad",tag:"Memory",desc:"A small reminder from those who did not come home. No mechanical effect. Strong roleplay effect."}],bio:`The first thing I learned to protect was not a person.

It was a shipment.

A crate of grain on a convoy route so old that half the nav beacons had gone dark.

Nobody remembers the grain. Nobody remembers the ship. Nobody remembers the crew that would have starved if it never arrived.

That is the thing about security. When you do your job well, people remember the cargo. Not you.

I was not born a soldier. Barabels like stories about hunters, warriors, teeth and claws. Those stories are useful for children. They make violence sound clean. I learned later that violence is never clean. It gets into the walls. Into your hands. Into the way you sleep.

The company called us convoy security. Other people called us mercenaries. We called ourselves The Squad.

We were paid to move through bad space. Pirate lanes. Corporate disputes. Systems where law ended at the landing pad and started again when the local boss felt like it. Our orders were simple: make sure the cargo arrived, make sure the crew got home.

For a while, we did.

Then came the contract. It paid too well. That was the first warning.

We were told the convoy was routine. We were told reinforcements were close. We were told the employer valued every life aboard those ships.

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

I do not say their names to strangers.

I do not count the dead out loud.

If someone asks, I say:

It was a long time ago.

After that, I stopped working for corporations.

I drifted from freighter to freighter, port to port, contract to contract. I learned customs routines, pirate habits, cantina exits, false smiles, hidden weapons, bad captains, good mechanics, desperate passengers, and all the little sounds a ship makes before something goes wrong.

I learned that the best security officer is not the fastest draw.

The best security officer is the one who prevents weapons from being drawn at all.

Now I travel with the party.

They are not my employers.

They are not cargo.

They are not replaceable.

They are my people.

And no one gets left behind again.`,quotes:["I'd rather talk.","Violence is easy. Living with it isn't.","If weapons come out... let's make sure we're the ones who put them away.","They're my crew.","No one gets left behind.","Can we take them? Probably. The better question is: do we have to?"],rules:[{title:"Skill rolls",body:"Roll the listed number of D. Blaster 6D means six six-sided dice. Add the total."},{title:"Attack rolls",body:"Roll the attack skill against a difficulty or the target's Dodge."},{title:"Damage",body:"If the attack hits, roll weapon damage. The target rolls Strength plus armor. Compare totals."},{title:"Multiple actions",body:"Two actions in the same round usually gives -1D to both. More actions means more risk."},{title:"Character Points",body:"Used for advancement and sometimes emergency boosts. Save them unless the moment matters."},{title:"Force Points",body:"Big cinematic moments. Use only when the scene deserves it."},{title:"Security",body:"Use Security for locks, alarms, blast doors, cameras, weapon lockers, ship security, and keeping people out."},{title:"Search",body:"Use Search for ambushes, traps, hidden weapons, exits, nervous behavior, and hidden compartments."}]};
