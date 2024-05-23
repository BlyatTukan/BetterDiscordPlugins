/**
 * @name Experiments
 * @author Tiny Slime Studio
 * @description Unlock one-click access to Developer and Stuff Settings. 
 * Test Experiments containing future Discord features
 * @version 1.0.0
 * @source https://github.com/TheCommieAxolotl/BetterDiscord-Stuff/tree/main/BetterSyntax
 */

module.exports = meta => ({
    start() {
        let cache; webpackChunkdiscord_app.push([[Symbol()], {}, (e) => cache = e.c]); webpackChunkdiscord_app.pop();

        let user = Object.values(cache).find(x => x?.exports?.default?.getUser).exports.default
        nodes = Object.values(user._dispatcher._actionHandlers._dependencyGraph.nodes);
        userr = user.getCurrentUser();
        userr.flags = 1;
        userr.isStaff = () => true;
        userr.isStaffPersonal = () => true;
        
        try {
            nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: userr });
        } catch (error) {};
        
        user.getCurrentUser = user.getNonImpersonatedCurrentUser = () => (userr);
        
        nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
    },
    stop() {
        let cache; webpackChunkdiscord_app.push([[Symbol()], {}, (e) => cache = e.c]); webpackChunkdiscord_app.pop();

        let user = Object.values(cache).find(x => x?.exports?.default?.getUser).exports.default
        nodes = Object.values(user._dispatcher._actionHandlers._dependencyGraph.nodes);
        userr = user.getCurrentUser();
        userr.flags = 0;
        userr.isStaff = () => false;
        userr.isStaffPersonal = () => false;
        
        try {
            nodes.find(x => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: userr });
        } catch (error) {};
        
        user.getCurrentUser = user.getNonImpersonatedCurrentUser = () => (userr);
        
        nodes.find(x => x.name == "DeveloperExperimentStore").actionHandler["OVERLAY_INITIALIZE"]();
    }
});  