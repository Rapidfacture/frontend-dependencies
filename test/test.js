"use strict";

var assert = require("assert");
var frontendDependencies = require("../index.js");
var shell = require("shelljs");

shell.config.fatal = true;
shell.cd("test");

describe("frontend-dependencies testCase 1", function () {
    describe("when there are node modules", function () {
        this.timeout(15000);
        before(function (done) {
            shell.cd("test1");
            frontendDependencies();
            done();
        });

        after(function () {
            shell.rm("-rf", ["node_modules", "static/build/*"]);
            shell.cd("..");
        });

        it("should have copied desired jquery files to static/build/", function () {
            assert.ok(shell.test("-d", "static/build/jquery"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.js"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.slim.js"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.slim.min.map"));
        });

        it("shoult not have copied undesired jquery files to static/build", function () {
            assert.ok(!shell.test("-d", "static/build/jquery/src"));
        });

        it("should not have copied shelljs", function () {
            assert.ok(!shell.test("-d", "static/build/shelljs"));
        });

        it("should have copied turbolinks desired files only", function () {
            assert.ok(shell.test("-d", "static/build/turbo/src"));
            assert.ok(shell.test("-f", "static/build/turbo/LICENSE"));
            assert.ok(!shell.test("-f", "static/build/turbo/dist"));
        });
    });
});


describe("frontend-dependencies testCase 2", function () {
    describe("when there are node modules", function () {
        this.timeout(15000);
        before(function (done) {
            shell.cd("test2");
            frontendDependencies();
            done();
        });

        after(function () {
            shell.rm("-rf", ["node_modules", "static/build/*"]);
            shell.cd("..");
        });

        it("should have copied desired jquery files to static/build/", function () {
            assert.ok(shell.test("-d", "static/build/jquery"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.js"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.slim.js"));
            assert.ok(shell.test("-f", "static/build/jquery/jquery.slim.min.map"));
        });

        it("shoult not have copied undesired jquery files to static/build", function () {
            assert.ok(!shell.test("-d", "static/build/jquery/src"));
        });

        it("should not have copied shelljs", function () {
            assert.ok(!shell.test("-d", "static/build/shelljs"));
        });

        it("should have copied turbolinks desired files only", function () {
            assert.ok(shell.test("-d", "static/build/turbo/src"));
            assert.ok(shell.test("-f", "static/build/turbo/LICENSE"));
            assert.ok(!shell.test("-f", "static/build/turbo/dist"));
        });
    });
});
