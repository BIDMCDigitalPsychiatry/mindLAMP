(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{199:function(e){e.exports=JSON.parse('{"operationId":"SensorSpec.view","summary":"View a SensorSpec.","description":"View a SensorSpec.","tags":["SensorSpec"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"transform","in":"query","schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"object","description":"The SensorSpec determines the parameters of generated SensorEvents.","properties":{"id":{"type":"string","description":"The name of the sensor.","example":"lamp.accelerometer"},"settings_schema":{"allOf":[{"type":"object","properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"type":"integer","minimum":0},"minLength":{"type":"integer","minimum":0,"default":0},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#/components/schemas/JSONSchema"},"items":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}}],"default":true},"maxItems":{"type":"integer","minimum":0},"minItems":{"type":"integer","minimum":0,"default":0},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#/components/schemas/JSONSchema"},"maxProperties":{"type":"integer","minimum":0},"minProperties":{"type":"integer","minimum":0,"default":0},"required":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]},"additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"definitions":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}]}},"propertyNames":{"$ref":"#/components/schemas/JSONSchema"},"enum":{"type":"array","items":{},"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"enum":["array","boolean","integer","null","number","object","string"]},{"type":"array","items":{"enum":["array","boolean","integer","null","number","object","string"]},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#/components/schemas/JSONSchema"},"then":{"$ref":"#/components/schemas/JSONSchema"},"else":{"$ref":"#/components/schemas/JSONSchema"},"allOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"anyOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"oneOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"not":{"$ref":"#/components/schemas/JSONSchema"}},"example":{"type":"object","additionalProperties":true}},{"description":"The settings definition of a SensorSpec.","example":{"type":"object","properties":{"frequency":{"title":"Sensor Collection Frequency","type":"integer","format":"int32","minimum":0,"maximum":10,"description":"The sensor collection frequency of the mobile device\'s accelerometer/device motion sensor.","example":5}}}}]},"data_schema":{"allOf":[{"type":"object","properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"type":"integer","minimum":0},"minLength":{"type":"integer","minimum":0,"default":0},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#/components/schemas/JSONSchema"},"items":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}}],"default":true},"maxItems":{"type":"integer","minimum":0},"minItems":{"type":"integer","minimum":0,"default":0},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#/components/schemas/JSONSchema"},"maxProperties":{"type":"integer","minimum":0},"minProperties":{"type":"integer","minimum":0,"default":0},"required":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]},"additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"definitions":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}]}},"propertyNames":{"$ref":"#/components/schemas/JSONSchema"},"enum":{"type":"array","items":{},"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"enum":["array","boolean","integer","null","number","object","string"]},{"type":"array","items":{"enum":["array","boolean","integer","null","number","object","string"]},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#/components/schemas/JSONSchema"},"then":{"$ref":"#/components/schemas/JSONSchema"},"else":{"$ref":"#/components/schemas/JSONSchema"},"allOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"anyOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"oneOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"not":{"$ref":"#/components/schemas/JSONSchema"}},"example":{"type":"object","additionalProperties":true}},{"description":"The data definition of a SensorSpec.","example":{"type":"object","properties":{"x":{"title":"X Coordinate","type":"number","format":"double","description":"The x coordinate of the accelerometer reading.","example":1.123},"y":{"title":"Y Coordinate","type":"number","format":"double","description":"The y coordinate of the accelerometer reading.","example":1.123},"z":{"title":"Z Coordinate","type":"number","format":"double","description":"The z coordinate of the accelerometer reading.","example":1.123}}}}]}},"required":["id"]},"maxLength":1}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"View a SensorSpec.","description":{"content":"View a SensorSpec.","type":"text/plain"},"url":{"path":["sensor_spec",":id"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"","type":"text/plain"},"key":"transform","value":"<string>"}],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/sensor_spec/{id}","hashId":"view-a-sensor-spec","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/view-a-sensor-spec","previous":{"title":"Delete a SensorSpec.","permalink":"/api/delete-a-sensor-spec"},"next":{"title":"Create a Researcher.","permalink":"/api/create-a-researcher"}}')}}]);