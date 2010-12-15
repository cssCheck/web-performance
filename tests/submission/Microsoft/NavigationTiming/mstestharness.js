﻿//
// Helper Functions for NavigationTiming W3C tests
//

var performanceNamespace = window.performance;

function test_namespace(child_name)
{
    var msg = 'window.performance is defined';
    test(function() { assert_true(performanceNamespace !== undefined, msg); }, msg);
    
    if (child_name !== null) {
        var msg2 = 'window.performance.' + child_name + ' is defined';
        test(function() { assert_true(performanceNamespace[child_name] !== undefined, msg2); }, msg2);
    }
}

function test_true(value, msg)
{
    test(function() { assert_true(value, msg); }, msg);
}

function test_equals(value, equals, msg)
{
    test(function() { assert_equals(value, equals, msg); }, msg);
}

function test_greater_than(value, greater_than, msg)
{
    test(function() { assert_true(value >= greater_than, msg); }, msg);
}

function test_attribute_exists(parent_name, attribute_name)
{
    var msg = 'window.performance.' + parent_name + '.' + attribute_name + ' is defined.';
    test(function() { assert_true(performanceNamespace[parent_name][attribute_name] !== undefined, msg); }, msg);
}

function test_enum(parent_name, enum_name, value)
{
    var msg = 'window.performance.' + parent_name + '.' + enum_name + ' is defined.';
    test(function() { assert_true(performanceNamespace[parent_name][enum_name] !== undefined, msg); }, msg);

    msg = 'window.performance.' + parent_name + '.' + enum_name + ' = ' + value;
    test(function() { assert_equals(performanceNamespace[parent_name][enum_name], value, msg); }, msg);
}

function test_timing_order(attribute_name, greater_than_attribute)
{
    // ensure it's not 0 first
    var msg = "window.performance.timing." + attribute_name + " > 0";
    test(function() { assert_true(performanceNamespace.timing[attribute_name] > 0, msg); }, msg);

    // ensure it's in the right order
    msg = "window.performance.timing." + attribute_name + " >= window.performance.timing." + greater_than_attribute;
    test(function() { assert_true(performanceNamespace.timing[attribute_name] >= performanceNamespace.timing[greater_than_attribute], msg); }, msg);
}

function test_timing_greater_than(attribute_name, greater_than)
{
    var msg = "window.performance.timing." + attribute_name + " >= " + greater_than;
    test_greater_than(performanceNamespace.timing[attribute_name], greater_than, msg);
}

function test_timing_equals(attribute_name, equals, msg)
{
    var test_msg = msg || "window.performance.timing." + attribute_name + " == " + equals;
    test_equals(performanceNamespace.timing[attribute_name], equals, test_msg);
}
