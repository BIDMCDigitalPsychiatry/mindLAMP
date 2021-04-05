(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{183:function(e){e.exports=JSON.parse('{"operationId":"ActivitySpec.update","summary":"Update an ActivitySpec.","description":"Update an ActivitySpec.","tags":["ActivitySpec"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"The ActivitySpec determines the parameters and properties of an Activity and its corresponding generated ActivityEvents.","properties":{"id":{"type":"string","readOnly":true,"description":"The name of the activity spec.","example":"lamp.survey"},"help_contents":{"type":"string","description":"Either a binary blob containing a document or video, or a string containing  instructional aid about the Activity."},"script_contents":{"type":"string","description":"The WebView-compatible script that provides this Activity on mobile or desktop (IFrame) clients."},"static_data_schema":{"allOf":[{"type":"object","properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"type":"integer","minimum":0},"minLength":{"type":"integer","minimum":0,"default":0},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#/components/schemas/JSONSchema"},"items":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}}],"default":true},"maxItems":{"type":"integer","minimum":0},"minItems":{"type":"integer","minimum":0,"default":0},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#/components/schemas/JSONSchema"},"maxProperties":{"type":"integer","minimum":0},"minProperties":{"type":"integer","minimum":0,"default":0},"required":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]},"additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"definitions":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}]}},"propertyNames":{"$ref":"#/components/schemas/JSONSchema"},"enum":{"type":"array","items":{},"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"enum":["array","boolean","integer","null","number","object","string"]},{"type":"array","items":{"enum":["array","boolean","integer","null","number","object","string"]},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#/components/schemas/JSONSchema"},"then":{"$ref":"#/components/schemas/JSONSchema"},"else":{"$ref":"#/components/schemas/JSONSchema"},"allOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"anyOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"oneOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"not":{"$ref":"#/components/schemas/JSONSchema"}},"example":{"type":"object","additionalProperties":true}},{"description":"The static data definition of an ActivitySpec.","example":{"type":"object","properties":{"jewel_count":{"title":"Difficulty Level","type":"string","enum":["beginner","intermediate","advanced","expert"],"description":"The difficulty level that will be experienced by the participant when playing the game.","example":"expert"}}}}]},"temporal_event_schema":{"allOf":[{"type":"object","properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"type":"integer","minimum":0},"minLength":{"type":"integer","minimum":0,"default":0},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#/components/schemas/JSONSchema"},"items":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}}],"default":true},"maxItems":{"type":"integer","minimum":0},"minItems":{"type":"integer","minimum":0,"default":0},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#/components/schemas/JSONSchema"},"maxProperties":{"type":"integer","minimum":0},"minProperties":{"type":"integer","minimum":0,"default":0},"required":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]},"additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"definitions":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}]}},"propertyNames":{"$ref":"#/components/schemas/JSONSchema"},"enum":{"type":"array","items":{},"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"enum":["array","boolean","integer","null","number","object","string"]},{"type":"array","items":{"enum":["array","boolean","integer","null","number","object","string"]},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#/components/schemas/JSONSchema"},"then":{"$ref":"#/components/schemas/JSONSchema"},"else":{"$ref":"#/components/schemas/JSONSchema"},"allOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"anyOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"oneOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"not":{"$ref":"#/components/schemas/JSONSchema"}},"example":{"type":"object","additionalProperties":true}},{"description":"The temporal event data definition of an ActivitySpec.","example":{"type":"object","properties":{"item":{"title":"Question","type":"string","description":"The survey question text.","example":"What day is it today?"},"value":{"title":"Response","type":["string","integer"],"description":"The question response chosen by the participant.","example":"The sky is blue."},"type":{"title":"Unused","type":"object","nullable":true,"example":null},"level":{"title":"Unused","type":"object","nullable":true,"example":null},"duration":{"title":"Time Taken","type":"integer","format":"int64","description":"The number of milliseconds taken by the participant to answer this questtion.","example":8473}}}}]},"settings_schema":{"allOf":[{"type":"object","properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":{}},"multipleOf":{"type":"number","minimum":0,"exclusiveMinimum":true},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"type":"integer","minimum":0},"minLength":{"type":"integer","minimum":0,"default":0},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#/components/schemas/JSONSchema"},"items":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}}],"default":true},"maxItems":{"type":"integer","minimum":0},"minItems":{"type":"integer","minimum":0,"default":0},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#/components/schemas/JSONSchema"},"maxProperties":{"type":"integer","minimum":0},"minProperties":{"type":"integer","minimum":0,"default":0},"required":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]},"additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"definitions":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#/components/schemas/JSONSchema"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#/components/schemas/JSONSchema"},{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}]}},"propertyNames":{"$ref":"#/components/schemas/JSONSchema"},"enum":{"type":"array","items":{},"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"enum":["array","boolean","integer","null","number","object","string"]},{"type":"array","items":{"enum":["array","boolean","integer","null","number","object","string"]},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#/components/schemas/JSONSchema"},"then":{"$ref":"#/components/schemas/JSONSchema"},"else":{"$ref":"#/components/schemas/JSONSchema"},"allOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"anyOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"oneOf":{"type":"array","minItems":1,"items":{"$ref":"#/components/schemas/JSONSchema"}},"not":{"$ref":"#/components/schemas/JSONSchema"}},"example":{"type":"object","additionalProperties":true}},{"description":"The Activity settings definition of an ActivitySpec.","example":{"type":"object","properties":{"jewel_count":{"title":"Number of Jewels Displayed","type":"integer","format":"int32","description":"The number of Jewels to display on the screen; if using Jewels variant B, this number is effectively half to account for the two types of Jewels for a participant to tap on.","example":20},"max_duration":{"title":"Maximum Duration for a Jewels Game","type":"number","format":"float","description":"The number of seconds to cut a participant off when playing Jewels, if they have not already finished the game.","example":120}}}}]}},"required":["id"]}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"Update an ActivitySpec.","description":{"content":"Update an ActivitySpec.","type":"text/plain"},"url":{"path":["activity_spec",":id"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"PUT","body":{"mode":"raw","raw":"{\\n    \\"help_contents\\": \\"<string>\\",\\n    \\"script_contents\\": \\"<string>\\",\\n    \\"static_data_schema\\": {\\n        \\"$id\\": \\"<uri-reference>\\",\\n        \\"$schema\\": \\"<uri>\\",\\n        \\"$ref\\": \\"<uri-reference>\\",\\n        \\"$comment\\": \\"<string>\\",\\n        \\"title\\": \\"<string>\\",\\n        \\"description\\": \\"<string>\\",\\n        \\"readOnly\\": false,\\n        \\"examples\\": [\\n            \\"schema type not provided\\",\\n            \\"schema type not provided\\"\\n        ],\\n        \\"multipleOf\\": \\"<number>\\",\\n        \\"maximum\\": \\"<number>\\",\\n        \\"exclusiveMaximum\\": \\"<number>\\",\\n        \\"minimum\\": \\"<number>\\",\\n        \\"exclusiveMinimum\\": \\"<number>\\",\\n        \\"maxLength\\": \\"<integer>\\",\\n        \\"minLength\\": 0,\\n        \\"pattern\\": \\"<regex>\\",\\n        \\"additionalItems\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"items\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxItems\\": \\"<integer>\\",\\n        \\"minItems\\": 0,\\n        \\"uniqueItems\\": false,\\n        \\"contains\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxProperties\\": \\"<integer>\\",\\n        \\"minProperties\\": 0,\\n        \\"additionalProperties\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"definitions\\": {\\n            \\"type\\": \\"object\\",\\n            \\"additionalProperties\\": {},\\n            \\"default\\": \\"<object>\\"\\n        },\\n        \\"properties\\": \\"<object>\\",\\n        \\"patternProperties\\": \\"<object>\\",\\n        \\"dependencies\\": \\"<object>\\",\\n        \\"propertyNames\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"enum\\": [\\n            \\"schema type not provided\\"\\n        ],\\n        \\"type\\": \\"velit in commodo\\",\\n        \\"format\\": \\"<string>\\",\\n        \\"contentMediaType\\": \\"<string>\\",\\n        \\"contentEncoding\\": \\"<string>\\",\\n        \\"if\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"then\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"else\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"allOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"anyOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"oneOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ]\\n    },\\n    \\"temporal_event_schema\\": {\\n        \\"$id\\": \\"<uri-reference>\\",\\n        \\"$schema\\": \\"<uri>\\",\\n        \\"$ref\\": \\"<uri-reference>\\",\\n        \\"$comment\\": \\"<string>\\",\\n        \\"title\\": \\"<string>\\",\\n        \\"description\\": \\"<string>\\",\\n        \\"readOnly\\": false,\\n        \\"examples\\": [\\n            \\"schema type not provided\\",\\n            \\"schema type not provided\\"\\n        ],\\n        \\"multipleOf\\": \\"<number>\\",\\n        \\"maximum\\": \\"<number>\\",\\n        \\"exclusiveMaximum\\": \\"<number>\\",\\n        \\"minimum\\": \\"<number>\\",\\n        \\"exclusiveMinimum\\": \\"<number>\\",\\n        \\"maxLength\\": \\"<integer>\\",\\n        \\"minLength\\": 0,\\n        \\"pattern\\": \\"<regex>\\",\\n        \\"additionalItems\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"items\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxItems\\": \\"<integer>\\",\\n        \\"minItems\\": 0,\\n        \\"uniqueItems\\": false,\\n        \\"contains\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxProperties\\": \\"<integer>\\",\\n        \\"minProperties\\": 0,\\n        \\"additionalProperties\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"definitions\\": {\\n            \\"type\\": \\"object\\",\\n            \\"additionalProperties\\": {},\\n            \\"default\\": \\"<object>\\"\\n        },\\n        \\"properties\\": \\"<object>\\",\\n        \\"patternProperties\\": \\"<object>\\",\\n        \\"dependencies\\": \\"<object>\\",\\n        \\"propertyNames\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"enum\\": [\\n            \\"schema type not provided\\"\\n        ],\\n        \\"type\\": \\"ea eu\\",\\n        \\"format\\": \\"<string>\\",\\n        \\"contentMediaType\\": \\"<string>\\",\\n        \\"contentEncoding\\": \\"<string>\\",\\n        \\"if\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"then\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"else\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"allOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"anyOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"oneOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ]\\n    },\\n    \\"settings_schema\\": {\\n        \\"$id\\": \\"<uri-reference>\\",\\n        \\"$schema\\": \\"<uri>\\",\\n        \\"$ref\\": \\"<uri-reference>\\",\\n        \\"$comment\\": \\"<string>\\",\\n        \\"title\\": \\"<string>\\",\\n        \\"description\\": \\"<string>\\",\\n        \\"readOnly\\": false,\\n        \\"examples\\": [\\n            \\"schema type not provided\\",\\n            \\"schema type not provided\\"\\n        ],\\n        \\"multipleOf\\": \\"<number>\\",\\n        \\"maximum\\": \\"<number>\\",\\n        \\"exclusiveMaximum\\": \\"<number>\\",\\n        \\"minimum\\": \\"<number>\\",\\n        \\"exclusiveMinimum\\": \\"<number>\\",\\n        \\"maxLength\\": \\"<integer>\\",\\n        \\"minLength\\": 0,\\n        \\"pattern\\": \\"<regex>\\",\\n        \\"additionalItems\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"items\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxItems\\": \\"<integer>\\",\\n        \\"minItems\\": 0,\\n        \\"uniqueItems\\": false,\\n        \\"contains\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"maxProperties\\": \\"<integer>\\",\\n        \\"minProperties\\": 0,\\n        \\"additionalProperties\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"definitions\\": {\\n            \\"type\\": \\"object\\",\\n            \\"additionalProperties\\": {},\\n            \\"default\\": \\"<object>\\"\\n        },\\n        \\"properties\\": \\"<object>\\",\\n        \\"patternProperties\\": \\"<object>\\",\\n        \\"dependencies\\": \\"<object>\\",\\n        \\"propertyNames\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"enum\\": [\\n            \\"schema type not provided\\"\\n        ],\\n        \\"type\\": \\"esse sit incididunt\\",\\n        \\"format\\": \\"<string>\\",\\n        \\"contentMediaType\\": \\"<string>\\",\\n        \\"contentEncoding\\": \\"<string>\\",\\n        \\"if\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"then\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"else\\": {\\n            \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n        },\\n        \\"allOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"anyOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ],\\n        \\"oneOf\\": [\\n            {\\n                \\"value\\": \\"<Circular reference to #/components/schemas/JSONSchema detected>\\"\\n            }\\n        ]\\n    }\\n}"},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"put","path":"/activity_spec/{id}","hashId":"update-an-activity-spec","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/update-an-activity-spec","previous":{"title":"List all ActivitySpecs.","permalink":"/api/list-all-activity-specs"},"next":{"title":"Delete an ActivitySpec.","permalink":"/api/delete-an-activity-spec"},"jsonRequestBodyExample":{"id":"lamp.survey","help_contents":"string","script_contents":"string"}}')}}]);