/// <reference path="../TypeScriptDefinetions/require.d.ts" />

requirejs.config({
	paths: {
		'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
		'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
		'knockout': '//cdnjs.cloudflare.com/ajax/libs/knockout/3.1.0/knockout-min',
		'bootstrap': '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min',
		'routie': '../Lib/Routie/routie.min',
		'knockout-amd-helpers': '../Lib/knockout-amd-helpers/knockout-amd-helpers.min',
	},
	shim: {
		jquery: {
			exports: '$'
		},
		bootstrap: {
			deps: ['jquery']
		},
		routie: {
			exports: 'routie'
		}
	},
	waitSeconds: 20,
	urlArgs: "bust=" + CacheBuster
});

declare var CacheBuster: number;

require(['ViewModels/Shell', 'knockout', 'bootstrap', 'knockout-amd-helpers'], (shell: any, knockout: any) =>
{
	knockout.amdTemplateEngine.defaultPath = "Views";
	knockout.amdTemplateEngine.defaultSuffix = ".html";
	knockout.amdTemplateEngine.defaultRequireTextPluginName = "text";
	knockout.bindingHandlers.module.baseDir = "ViewModels";

	knockout.applyBindings(new shell());
});