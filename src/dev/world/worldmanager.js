Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
       for (let x = 0; x <= 16; x++) {
            for (let z = 0; z <= 16; z++) {
                for (let y = 0; y <= 255; y++) {
                    if (World.getBlock(x, y, z).id == VanillaBlockID.grass) {
                        World.setBlock(x, y, z, IDRegistry.genBlockID("tgrass_block"));
                    }

                    if (World.getBlock(x, y, z).id == VanillaBlockID.dirt) {
                        World.setBlock(x, y, z, IDRegistry.genBlockID("tdirt_block"));
                    }

                    if (World.getBlock(x, y, z).id == VanillaBlockID.stone) {
                        World.setBlock(x, y, z, IDRegistry.genBlockID("tstone_block"));
                    }
                }
            } 
       }
});