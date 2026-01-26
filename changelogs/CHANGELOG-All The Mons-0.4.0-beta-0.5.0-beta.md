# Changelog

# 📦 0.5.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Updated mod FastSuite to fix an issue with AE2 Jei Integration
- You can now interact with Trainers and Trainer Association in claimed chunks (Uncandango)
- Removed Oritech Oil Springs (Uncandango)
- Elite 4 and Cynthia rematches are now required to beat BDSP Series (Uncandango)
- Breeding vanilla animals will now get a vanilla baby animal (LobsterJonn)</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- AE2 JEI Integration (1.2.0)
- Cobblemon Repel NEOReforged (1.0.1)

</details>

<details open>
<summary>Updated (4)</summary>

- All The Mons (0.0.21) -> (0.0.22)
- Ars Creo (5.1.0) -> (5.2.0)
- Fast Suite (6.0.6) -> (6.0.7)
- Lootr (1.21.1-1.11.36.110) -> (1.21.1-1.11.36.114)

</details>

## 🍳 Recipes

<details open>
<summary>Added (4)</summary>
<blockquote>

<details>
<summary>almostunified/repelreforged</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "repelreforged"
+  recipes: [
+    "1$repel_block"
+    "1$repel_block_1"
+    "1$repel_block_2"
+  ]
+}

```


</details>

<details>
<summary>repelreforged/repel_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "RNR"
+    "IBI"
+    "IAI"
+  ]
+  key: {
+    A: {
+      tag: "cobblemon:apricorns"
+    }
+    N: {
+      tag: "c:nuggets/iron"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    B: {
+      item: "minecraft:poisonous_potato"
+    }
+    R: {
+      item: "minecraft:rotten_flesh"
+    }
+  }
+  result: {
+    id: "repelreforged:repel_block"
+  }
+}

```


</details>

<details>
<summary>repelreforged/repel_block_1</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "GCG"
+    "GRG"
+    "GCG"
+  ]
+  key: {
+    R: {
+      item: "repelreforged:repel_block"
+    }
+    G: {
+      tag: "c:ingots/gold"
+    }
+    C: {
+      item: "cobblemon:relic_coin_pouch"
+    }
+  }
+  result: {
+    id: "repelreforged:repel_block_1"
+  }
+}

```


</details>

<details>
<summary>repelreforged/repel_block_2</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "DED"
+    "DRD"
+    "DCD"
+  ]
+  key: {
+    R: {
+      item: "repelreforged:repel_block_1"
+    }
+    D: {
+      tag: "c:gems/diamond"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+    C: {
+      item: "cobblemon:relic_coin_sack"
+    }
+  }
+  result: {
+    id: "repelreforged:repel_block_2"
+  }
+}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>minecraft:entity_type/ftbchunks:entity_interact_whitelist</summary>

```diff
 [
   ... (1 entries)
+  "rctmod:trainer"
+  "rctmod:trainer_association"
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (29315 entries)
+  "repelreforged:repel_block"
+  "repelreforged:repel_block_1"
+  "repelreforged:repel_block_2"
   ... (3344 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (35579 entries)
+  "repelreforged:repel_block"
+  "repelreforged:repel_block_1"
+  "repelreforged:repel_block_2"
   ... (6262 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/repelreforged/blocks/repel_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "repelreforged:repel_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/repelreforged/blocks/repel_block_1</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "repelreforged:repel_block_1"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/repelreforged/blocks/repel_block_2</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "repelreforged:repel_block_2"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

