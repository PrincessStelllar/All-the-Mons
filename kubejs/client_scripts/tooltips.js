// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium
    allthemods.add('allthemodium:teleport_pad',[
        Text.of('Place the pad down in the specified Dimension'),
        Text.of('Sneak Right Click with both hands empty to teleport'),
        Text.of('§aOverworld TO Mining Dimension'),
        Text.of('§cThe Nether TO The Other'),
        Text.of('§bThe End TO The Beyond')
    ])

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7Needs at least Netherite to be mined'),
        Text.of('§6Found in the Deep Dark Biome and will always spawn air exposed'),
        Text.of('§6Also found in the Deep Slate Layer of Mining Dimension')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7Needs at least AllTheModium to be mined'),
        Text.of('§bFound in any Nether biome'),
        Text.of('§bAlso found in The Other')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7Needs at least Vibranium to be mined'),
        Text.of('§dFound in the End Highlands')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Allthemodium Plate]")
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Vibranium Plate]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Unobtainium Plate]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6Found in Suspicious Clay in Ancient Cities')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§bFound in Suspicious Soul Sand in Bastions')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§dDropped by the Trial Spawner in the Library of the Dungeon within The Other')
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:hephaestus_forge_tier_1',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lSmithing Table§r§c with §lMundabitur Dust"),
        Text.of("§c█ = Gilded Chiseled Polished Darkstone with Smithing Table on top"),
        Text.of("§7█ = Polished Darkstone"),
        Text.of("§5█§7 = Gilded Chiseled Polished Darkstone"),
        Text.of("§6█§7 = Chiseled Arcane Polished Darkstone"),
        Text.of("§0███§7███§0███"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§7████§6█§7████"),
        Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
        Text.of("§7████§6█§7████"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0███§7███§0███")

    ])
    allthemods.add('forbidden_arcanus:clibano_core',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lClibano Core§r§c with §c§lMundabitur Dust"),
        Text.of("§5█§7 = Polished Darkstone"),
        Text.of("§7█ = Polished Darkstone Bricks"),
        Text.of("§6█§7 = Clibano Core"),
        Text.of("§7Right to Left -> Bottom to Top"),
        Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
        Text.of("§7███§0█§7█§0█§7█§0█§7███"),
        Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    allthemods.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4Obtainable from the Wandering Trader"),
        Text.of("§4Or by using a Corrupt Soul on an Oak Sapling"),
    ])
    allthemods.add('forbidden_arcanus:magnetized_darkstone_pedestal',[
        Text.of("§7Use Ferrognetic Mixture on the Darkstone Pedesta"),
    ])
    allthemods.add('forbidden_arcanus:soul',[
        Text.of("§7Use a Soul Extractor on Soul Sand"),
        Text.of("§7Rarely spawns in world"),
    ])
    allthemods.add('forbidden_arcanus:enchanted_soul',[
        Text.of("§7Use a Splash Aureal Bottle on a normal soul")
    ])
    allthemods.add('forbidden_arcanus:corrupt_soul',[
        Text.of("§7Rarely spawns when killing mobs")
    ])
    allthemods.add('forbidden_arcanus:blood_test_tube',[
        Text.of("§7Hold a test tube in your off-hand and then kill mobs")
    ])
    allthemods.add('forbidden_arcanus:xpetrified_orb',[
        Text.of("§7Only obtainable via the Black Hole"),
        Text.of("§7To make a Black Hole throw Dark Matter together with Corrupti Dust on the ground"),
        Text.of("§7Feed it enough xp to make it spit out an Xpetrified Orb")
    ])
    allthemods.add('forbidden_arcanus:dragon_scale',[
        Text.of("§7Dropped by the Ender Dragon")
    ])
    allthemods.add('forbidden_arcanus:stella_arcanum',[
        Text.of("§7Very rarely spawns between Y -44 and Y 42"),
        Text.of("§cWill explode when you mine it!")
    ])
    allthemods.add(/forbidden_arcanus:runic_[sd]/,[
        Text.of("§7Spawns at the bottom of the world up to Y 2"),
    ])
    allthemods.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'],[
        Text.of("§7Very rarely spawns between Y -40 and Y 14"),
        Text.of("§7Most common at Y -13")
    ])
    allthemods.add('forbidden_arcanus:artisan_relic',[
        Text.of("§aFound in the Armorer, Toolsmith, or Weaponsmith villager buildings"),
    ])
    allthemods.add('forbidden_arcanus:crescent_moon',[
        Text.of("§cUnobtainable"),
    ])
    allthemods.add('forbidden_arcanus:crimson_stone',[
        Text.of("§aFound in Pillager Outposts"),
    ])
    allthemods.add('forbidden_arcanus:soul_crimson_stone',[
        Text.of("§cWill turn into a Crimson Stone after 1 use"),
    ])
    allthemods.add('forbidden_arcanus:elementarium',[
        Text.of("§aFound in Jungle Temples, Desert Pyramids, and Underwater Ruins"),
    ])
    allthemods.add('forbidden_arcanus:divine_pact',[
        Text.of("§aFound in the Village and Pyramid in The Other"),
    ])
    allthemods.add('forbidden_arcanus:maledictus_pact',[
        Text.of("§aFound in Treasure Bastions"),
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/,[
        Text.of("§cDisabled for Fake Player"),
        Text.of("§c(Blocks like Modular Routers, Clickers, etc)")
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aRight click with job site block to put it inside and allow trade restocking")
    ])

	//Eternal Starlight
    allthemods.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
        Text.of('This loot bag is from the \"Lunar Monstrosity\".')
    ])
	
	//Cobblemon and extras with é in the name
	allthemods.add('allthemons:token', [
        Text.of('Also known as PokeToken.')
    ])
	allthemods.add('allthemons:valuable_token', [
        Text.of('Also known as Slightly More Valuable PokeToken.')
    ])
	allthemods.add('berrypouch:pokeball_gun', [
        Text.of('Also known as Pokeball Launcher.')
    ])
	allthemods.add('cobblemon:poke_ball', [
        Text.of('Also known as Poke Ball.')
    ])
	allthemods.add('cobblemon:poke_cake', [
        Text.of('Also known as Poke Cake.')
    ])
	allthemods.add('cobblemon:poke_snack', [
        Text.of('Also known as Poke Snack.')
    ])
	allthemods.add('cobblefurnies:poke_ball_desk', [
        Text.of('Also known as Poke Ball Desk.')
    ])
	allthemods.add('cobblefurnies:poke_ball_chair', [
        Text.of('Also known as Poke Ball Chair.')
    ])
	allthemods.add('cobblenav:pokenav_item_base', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblenav:pokenav_item_gholdengo', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblenav:pokenav_item_wanderer', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblenav:pokenav_item_old', [
		Text.of('Also known as PokeNav.')		
	])
	allthemods.add('pkgbadges:poke_fashion_workshop', [
		Text.of('Also known as PokeFashion Workshop.')		
	])
	allthemods.add('cobblemon_utility:poketreat', [
		Text.of('Also known as Poke Treat.')		
	])
	allthemods.add('cobblemon_utility:stalepoketreat', [
		Text.of('Also known as Stale Poke Treat.')		
	])
	//Color variants here. I dont know how to make it in JS, so I just made one by one.
	//If someone is to refactor this, remember there are less colors of PokeDex and PokeFinders
	//Colors here: ['white','light_gray','gray','black','brown','red','orange','yellow','lime','green','cyan','light_blue','blue','purple','magenta','pink']
	allthemods.add('cobblefurnies:white_poke_wool', [
		Text.of('Also known as White Poke Wool.')
	])
	allthemods.add('cobblefurnies:white_poke_wool_carpet', [
		Text.of('Also known as White Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_white', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:light_gray_poke_wool', [
		Text.of('Also known as Light gray Poke Wool.')
	])
	allthemods.add('cobblefurnies:light_gray_poke_wool_carpet', [
		Text.of('Also known as Light gray Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_light_gray', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:gray_poke_wool', [
		Text.of('Also known as Gray Poke Wool.')
	])
	allthemods.add('cobblefurnies:gray_poke_wool_carpet', [
		Text.of('Also known as Gray Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_gray', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:black_poke_wool', [
		Text.of('Also known as Black Poke Wool.')
	])
	allthemods.add('cobblefurnies:black_poke_wool_carpet', [
		Text.of('Also known as Black Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_black', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:brown_poke_wool', [
		Text.of('Also known as Brown Poke Wool.')
	])
	allthemods.add('cobblefurnies:brown_poke_wool_carpet', [
		Text.of('Also known as Brown Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_brown', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:red_poke_wool', [
		Text.of('Also known as Red Poke Wool.')
	])
	allthemods.add('cobblefurnies:red_poke_wool_carpet', [
		Text.of('Also known as Red Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_red', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:orange_poke_wool', [
		Text.of('Also known as Orange Poke Wool.')
	])
	allthemods.add('cobblefurnies:orange_poke_wool_carpet', [
		Text.of('Also known as Orange Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_orange', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:yellow_poke_wool', [
		Text.of('Also known as Yellow Poke Wool.')
	])
	allthemods.add('cobblefurnies:yellow_poke_wool_carpet', [
		Text.of('Also known as Yellow Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_yellow', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:lime_poke_wool', [
		Text.of('Also known as Lime Poke Wool.')
	])
	allthemods.add('cobblefurnies:lime_poke_wool_carpet', [
		Text.of('Also known as Lime Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_lime', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:green_poke_wool', [
		Text.of('Also known as Green Poke Wool.')
	])
	allthemods.add('cobblefurnies:green_poke_wool_carpet', [
		Text.of('Also known as Green Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_green', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:cyan_poke_wool', [
		Text.of('Also known as Cyan Poke Wool.')
	])
	allthemods.add('cobblefurnies:cyan_poke_wool_carpet', [
		Text.of('Also known as Cyan Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_cyan', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:light_blue_poke_wool', [
		Text.of('Also known as Light blue Poke Wool.')
	])
	allthemods.add('cobblefurnies:light_blue_poke_wool_carpet', [
		Text.of('Also known as Light blue Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_light_blue', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:blue_poke_wool', [
		Text.of('Also known as Blue Poke Wool.')
	])
	allthemods.add('cobblefurnies:blue_poke_wool_carpet', [
		Text.of('Also known as Blue Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_blue', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:purple_poke_wool', [
		Text.of('Also known as Purple Poke Wool.')
	])
	allthemods.add('cobblefurnies:purple_poke_wool_carpet', [
		Text.of('Also known as Purple Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_purple', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:magenta_poke_wool', [
		Text.of('Also known as Magenta Poke Wool.')
	])
	allthemods.add('cobblefurnies:magenta_poke_wool_carpet', [
		Text.of('Also known as Magenta Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_magenta', [
		Text.of('Also known as PokeNav.')
	])
	allthemods.add('cobblefurnies:pink_poke_wool', [
		Text.of('Also known as Pink Poke Wool.')
	])
	allthemods.add('cobblefurnies:pink_poke_wool_carpet', [
		Text.of('Also known as Pink Poke Wool Carpet.')
	])
	allthemods.add('cobblenav:pokenav_item_pink', [
		Text.of('Also known as PokeNav.')
	])
	//Colors here ['white','black','red','yellow','green','blue','pink']
	allthemods.add('cobblemon:pokedex_white', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_white', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_black', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_black', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_red', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_red', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_yellow', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_yellow', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_green', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_green', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_blue', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_blue', [
		Text.of('Also known as PokeFinder.')
	])
	allthemods.add('cobblemon:pokedex_pink', [
		Text.of('Also known as Pokedex.')
	])
	allthemods.add('cobblenav:pokefinder_item_pink', [
		Text.of('Also known as PokeFinder.')
	])
	//Rod Variants
	//For refactor, consider these:
	//['poke','citrine','verdant','azure','roseate','slate','premier','great','ultra','safari','fast','level','lure','heavy','love','friend','moon','sport',
    //'park','net','dive','nest','repeat','timer','luxury','dusk','heal','quick','dream','beast','master','cherish','ancient_poke','ancient_citrine','ancient_verdant','ancient_azure',
    // 'ancient_roseate','ancient_slate','ancient_ivory','ancient_great','ancient_ultra','ancient_feather','ancient_wing','ancient_jet','ancient_heavy','ancient_leaden','ancient_gigaton','ancient_origin']
	allthemods.add('cobblemon:citrine_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:citrine_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:verdant_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:azure_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:roseate_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:slate_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:premier_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:great_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ultra_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:safari_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:fast_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:level_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:lure_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:heavy_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:love_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:friend_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:moon_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:sport_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:park_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:net_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:dive_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:nest_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:repeat_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:timer_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:luxury_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:dusk_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:heal_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:quick_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:dream_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:beast_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:master_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:cherish_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_poke_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_citrine_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_verdant_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_azure_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_roseate_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_slate_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_ivory_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_great_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_ultra_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_feather_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_wing_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_jet_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_heavy_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_leaden_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_gigaton_rod', [
		Text.of('Also known as Poke Rod.')
	])
	allthemods.add('cobblemon:ancient_origin_rod', [
		Text.of('Also known as Poke Rod.')
	])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
