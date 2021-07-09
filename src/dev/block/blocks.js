IDRegistry.genBlockID("tgrass_block");
IDRegistry.genBlockID("tdirt_block");
IDRegistry.genBlockID("tstone_block");
IDRegistry.genBlockID("copper_ore");

Block.createBlock("tgrass_block", [{
    name: "Grass Block",
    texture :  [ 
        [ "tdirt" ,  0],  // bottom 
        [ "tgrass_top" ,  0 ],  // top 
        [ "tgrass_side" ,  0 ],  // back 
        [ "tgrass_side" ,  0 ],  // front 
        [ "tgrass_side" ,  0 ],  // left 
        [ "tgrass_side" ,  0 ]   // right 
    ],
    inCreative: true
}]);
Block.createBlock("tdirt_block", [{
    name: "Dirt Block",
    texture :  [ 
        [ "tdirt" ,  0],  // bottom 
        [ "tdirt" ,  0 ],  // top 
        [ "tdirt" ,  0 ],  // back 
        [ "tdirt" ,  0 ],  // front 
        [ "tdirt" ,  0 ],  // left 
        [ "tdirt" ,  0 ]   // right 
    ],
    inCreative: true
}]);

Block.createBlock("tstone_block", [{
    name: "Stone Block",
    texture :  [ 
        [ "tstone" ,  0],  // bottom 
        [ "tstone" ,  0 ],  // top 
        [ "tstone" ,  0 ],  // back 
        [ "tstone" ,  0 ],  // front 
        [ "tstone" ,  0 ],  // left 
        [ "tstone" ,  0 ]   // right 
    ],
    inCreative: true
}]);

Block.createBlock("copper_ore", [{
    name: "Copper Ore",
    texture :  [ 
        [ "copper_ore" ,  0],  // bottom 
        [ "copper_ore" ,  0 ],  // top 
        [ "copper_ore" ,  0 ],  // back 
        [ "copper_ore" ,  0 ],  // front 
        [ "copper_ore" ,  0 ],  // left 
        [ "copper_ore" ,  0 ]   // right 
    ],
    inCreative: true
}]);