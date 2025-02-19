import PluginManager from 'src/plugin-system/plugin.manager';
import SpeculationRulesPlugin from './plugin/speculation-rules/speculation-rules.plugin';
PluginManager.register('SpeculationRules', SpeculationRulesPlugin, '[data-speculation-rules]');