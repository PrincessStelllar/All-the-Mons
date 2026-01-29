let $Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags")
let $HealingMachineBlock = Java.loadClass("com.cobblemon.mod.common.block.HealingMachineBlock")

let machinesTag = $Tags.block("cobblemon:machines")
NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$BreakSpeed", event => {
  if (event.state["is(net.minecraft.tags.TagKey)"](machinesTag)) {
	  event.state.getOptionalValue($HealingMachineBlock.Companion.NATURAL).ifPresent(value => {if (value) event.setCanceled(true)})
  }
})