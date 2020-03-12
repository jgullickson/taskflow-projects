const TaskFlow = {
    _endpoints: {
        cache: {
            get: () => {
                let path = window.parent.location.href;

                let regex = new RegExp('Sessions/(.*)/Run');

                let session_id = regex.exec(path)[1];

                return window.parent.location.origin + '/rc/api/v1.0/sessions/' + session_id + '/cache/';
            }
        },
        configuration: {
            get: () => {
                return window.parent.location.href + '/UserConfiguration';
            }        
        },
        measure: {
            get: (measure_id) => {
                let path = window.parent.location.href;

                let regex = new RegExp('Sessions/(.*)/Run');

                let session_id = regex.exec(path)[1];

                return window.parent.location.origin + '/rc/api/v1.0/sessions/' + session_id + '/measures/' + measure_id;
            }
        }
    },
    Client: {
        Cache: {
            get: async (key) => {
                let endpoint = TaskFlow._endpoints.cache.get() + key;

                const response = await fetch(endpoint, {
                    method: 'GET',
                    cache: 'no-cache',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8;',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6'
                    }
                });

                return await response.json();
            },
            set: async (key, value) => {
                let endpoint = TaskFlow._endpoints.cache.get();

                let data = {
                    'Key': key,
                    'Value': value
                };

                const response = await fetch(endpoint, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8;',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6'
                    },
                    body: JSON.stringify(data)
                });

                if (response.status !== 200) {
                    throw new Error("Something went wrong...");
                }
            }
        },
        Configuration: {
            get: async () => {
                let endpoint = TaskFlow._endpoints.configuration.get();

                const response = await fetch(endpoint, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6'
                    },
                });

                if (response.status !== 200) {
                    throw new Error("Something went wrong..."); 
                }

                let result = await response.json();

                return result;
            },
            set: async (task_guid, key, value) => {
                let endpoint = TaskFlow._endpoints.configuration.get();

                let key_value = {
                    GUID: task_guid,
                    VALUE: value
                };

                let configuration_object = JSON.stringify({
                    KEY: key,
                    VALUE: JSON.stringify(key_value)
                });

                const response = await fetch(endpoint, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6'
                    },
                    body: JSON.stringify(configuration_object)
                });

                if (response.status !== 200) {
                    throw new Error("Something went wrong..."); 
                }
            }
        },
        Measure: { 
            end: () => {
                    let message = {
                        _channel: "CHANNELS.TASK",
                        _guid: "",
                        _topic: "TASK.TOPIC.TASK",
                        _type: "MESSAGETYPE.ACTION",
                        _value: ""
                    };
        
                    window.parent.postMessage(JSON.stringify(message), '*');
            },
            get: async () => {
                let _measure_id = await TaskFlow.Client.Cache.get("measure-current");
                
                let endpoint = TaskFlow._endpoints.measure.get(_measure_id);

                const response = await fetch(endpoint, {
                    method: 'GET',
                    cache: 'no-cache',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6' 
                    }
                });

                if (response.status !== 200) {
                    throw new Error("Something went wrong....");
                }

                return response.json();
            },
            set: async (data) => {
           		let _measure_id = await TaskFlow.Client.Cache.get("measure-current");
                
                let endpoint = TaskFlow._endpoints.measure.get(_measure_id);

                const response = await fetch(endpoint, {
                    method: 'PUT',
                    cache: 'no-cache',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'x-api-key': '7bae6e0e-7168-41ef-b02c-0706b4d2a5a6' 
                    },
                    body: JSON.stringify(data)
                });

                if (response.status !== 204) {
                    throw new Error("Something went wrong....");
                }
            }
        }
    }
};