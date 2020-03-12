/**
 * Adds hours to a datetime object.
 */
Date.prototype.addHours = function(hours) {
    this.setHours(this.getHours() + hours);
    return this;
};

/**
 * Adds mintues to a datetime object.
 */
Date.prototype.addMinutes = function(minutes) {
    this.setMinutes(this.getMinutes() + minutes);
    return this;
}

/**
 * Sorts configuration key values by Id.
 * @param {Array<Object>} configuration 
 */
let process_configuration = (configuration) => {
    configuration.sort((a, b) => {
        return b["Id"] - a["Id"];
    });

    let properties = configuration.map((element) => {
        let value = JSON.parse(element["Value"]);

        if (value === null) {
            return null;
        }

        let property = {
            Id: element["Id"],
            Key: element["Key"],
            GUID: value["GUID"],
            Value: value["VALUE"]
        };

        return property;
    });

    return properties.filter((element) => {
        if (element !== null) {
            return element["Key"] === "Level" && element["GUID"] === GLOBAL_CONFIGURATION.GUID;
        }
    });
};

/**
 * Gets level from the server.
 */
let get_level = async () => {
    let server_configuration;

    try {
        server_configuration = await TaskFlow.Client.Configuration.get();
    } catch (error) {
        console.log("Can't retrieve configuration from server...");
    }

    levels = process_configuration(server_configuration);

    if (levels.length === 0) {
        return null;
    }
    
    return parseInt(levels[0]["Value"]);
};

/**
 * Generates a unique user id.
 */
let uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

      return v.toString(16);
    });
  }