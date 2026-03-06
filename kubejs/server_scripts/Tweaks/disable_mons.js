ServerEvents.generateData('last', allthemons => {

  let mons = [
      "articuno", "mew", "mewtwo", "moltres", "zapdos", "celebi", "entei", "hooh", "lugia", "raikou", "suicune",
      "deoxys", "groudon", "jirachi", "kyogre", "latias", "latios", "rayquaza", "regice", "regirock", "registeel",
      "arceus", "azelf", "cresselia", "darkrai", "dialga", "giratina", "heatran", "manaphy", "mesprit", "palkia",
      "phione", "regigigas", "shaymin", "uxie", "cobalion", "genesect", "keldeo", "kyurem", "landorus", "meloetta",
      "reshiram", "terrakion", "thundurus", "tornadus", "victini", "virizion", "zekrom", "diancie", "hoopa",
      "volcanion", "xerneas", "yveltal", "zygarde", "blacephalon", "buzzwole", "celesteela", "cosmoem", "cosmog",
      "guzzlord", "kartana", "lunala", "magearna", "marshadow", "naganadel", "necrozma", "nihilego", "pheromosa",
      "poipole", "silvally", "solgaleo", "stakataka", "tapubulu", "tapufini", "tapukoko", "tapulele", "typenull",
      "xurkitree", "zeraora", "melmetal", "meltan", "calyrex", "eternatus", "glastrier", "kubfu", "regidrago",
      "regieleki", "spectrier", "urshifu", "zacian", "zamazenta", "zarude", "enamorus", "brutebonnet", "chienpao",
      "chiyu", "fezandipiti", "fluttermane", "gougingfire", "greattusk", "ironboulder", "ironbundle", "ironcrown",
      "ironhands", "ironjugulis", "ironleaves", "ironmoth", "ironthorns", "irontreads", "ironvaliant", "koraidon",
      "miraidon", "munkidori", "ogerpon", "okidogi", "pecharunt", "ragingbolt", "roaringmoon", "sandyshocks",
      "screamtail", "slitherwing", "terapagos", "tinglu", "walkingwake", "wochien"
  ]

  mons.forEach((mon) => {
      allthemons.json("cobblemon:spawn_pool_world/" + mon + ".json", {
        "enabled": true,
        "neededInstalledMods": [],
        "neededUninstalledMods": [],
        "spawns": []
      })
  })
  
})