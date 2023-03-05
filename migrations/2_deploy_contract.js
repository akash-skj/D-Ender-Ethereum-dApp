const openDender = artifacts.require("openDender");
const selectiveDender = artifacts.require("selectiveDender");

module.exports = function(deployer) {
  deployer.deploy(openDender);
  deployer.deploy(selectiveDender);
};