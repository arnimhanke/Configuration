/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * configuration-service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:4568/api/configuration-api".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Error
 */
export interface Error {
    /**
     * 
     * @type {number}
     * @memberof Error
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof Error
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof Error
     */
    fields?: string;
}

/**
 * 
 * @export
 * @interface TimeseriesPresentationConfiguration
 */
export interface TimeseriesPresentationConfiguration {
    /**
     * 
     * @type {string}
     * @memberof TimeseriesPresentationConfiguration
     */
    zeitreihenKennung?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesPresentationConfiguration
     */
    databaseName?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeseriesPresentationConfiguration
     */
    farbe?: string;
}

/**
 * 
 * @export
 * @interface TimeseriesViewConfiguration
 */
export interface TimeseriesViewConfiguration {
    /**
     * 
     * @type {string}
     * @memberof TimeseriesViewConfiguration
     */
    name?: string;
    /**
     * 
     * @type {Array<TimeseriesPresentationConfiguration>}
     * @memberof TimeseriesViewConfiguration
     */
    timeseriesPresentationConfigurations?: Array<TimeseriesPresentationConfiguration>;
}

/**
 * 
 * @export
 * @interface ViewConfiguration
 */
export interface ViewConfiguration {
    
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    viewModel?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    tsConfigurationName?: string;
    /**
     * 
     * @type {string}
     * @memberof ViewConfiguration
     */
    parentConfiguration?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ViewConfiguration
     */
    subViewConfigurations?: Array<string>;
}



/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Removes Timeseries Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTimeseriesConfigurationByName(configurationName: string, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling deleteTimeseriesConfigurationByName.');
            }
            const localVarPath = `/configuration/timeseries/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Removes View Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteViewConfigurationByName(configurationName: string, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling deleteViewConfigurationByName.');
            }
            const localVarPath = `/configuration/app/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'DELETE' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all View Timeseries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTimeseriesConfigurations(options: any = {}): FetchArgs {
            const localVarPath = `/configuration/timeseries/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all View Configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllViewConfigurations(options: any = {}): FetchArgs {
            const localVarPath = `/configuration/app/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Timeseries Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTimeseriesConfigurationByName(configurationName: string, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling getTimeseriesConfigurationByName.');
            }
            const localVarPath = `/configuration/timeseries/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an View Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getViewConfigurationByName(configurationName: string, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling getViewConfigurationByName.');
            }
            const localVarPath = `/configuration/app/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add or edit the given Timesries Configuration
         * @param {string} configurationName 
         * @param {TimeseriesViewConfiguration} [persistenceParametersValuesDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTimeseriesConfigurationByName(configurationName: string, persistenceParametersValuesDto?: TimeseriesViewConfiguration, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling putTimeseriesConfigurationByName.');
            }
            const localVarPath = `/configuration/timeseries/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"TimeseriesViewConfiguration" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(persistenceParametersValuesDto || {}) : (persistenceParametersValuesDto || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Add or edit the given View Configuration
         * @param {string} configurationName 
         * @param {ViewConfiguration} [viewConfiguration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putViewConfigurationByName(configurationName: string, viewConfiguration?: ViewConfiguration, options: any = {}): FetchArgs {
            // verify required parameter 'configurationName' is not null or undefined
            if (configurationName === null || configurationName === undefined) {
                throw new RequiredError('configurationName', 'Required parameter configurationName was null or undefined when calling putViewConfigurationByName.');
            }
            const localVarPath = `/configuration/app/{configurationName}`
                .replace(`{${"configurationName"}}`, encodeURIComponent(String(configurationName)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarHeaderParameter['Accept'] = 'application/json';
            localVarHeaderParameter['Authorization'] = 'bearer ' + configuration.accessToken;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ViewConfiguration" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(viewConfiguration || {}) : (viewConfiguration || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Removes Timeseries Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTimeseriesConfigurationByName(configurationName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).deleteTimeseriesConfigurationByName(configurationName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Removes View Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteViewConfigurationByName(configurationName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).deleteViewConfigurationByName(configurationName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get all View Timeseries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTimeseriesConfigurations(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<TimeseriesViewConfiguration>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getAllTimeseriesConfigurations(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get all View Configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllViewConfigurations(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<ViewConfiguration>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getAllViewConfigurations(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get Timeseries Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTimeseriesConfigurationByName(configurationName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TimeseriesViewConfiguration> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getTimeseriesConfigurationByName(configurationName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Get an View Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getViewConfigurationByName(configurationName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ViewConfiguration> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getViewConfigurationByName(configurationName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Add or edit the given Timesries Configuration
         * @param {string} configurationName 
         * @param {TimeseriesViewConfiguration} [persistenceParametersValuesDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTimeseriesConfigurationByName(configurationName: string, persistenceParametersValuesDto?: TimeseriesViewConfiguration, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<TimeseriesViewConfiguration> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).putTimeseriesConfigurationByName(configurationName, persistenceParametersValuesDto, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Add or edit the given View Configuration
         * @param {string} configurationName 
         * @param {ViewConfiguration} [viewConfiguration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putViewConfigurationByName(configurationName: string, viewConfiguration?: ViewConfiguration, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ViewConfiguration> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).putViewConfigurationByName(configurationName, viewConfiguration, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Removes Timeseries Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTimeseriesConfigurationByName(configurationName: string, options?: any) {
            return DefaultApiFp(configuration).deleteTimeseriesConfigurationByName(configurationName, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Removes View Configuration by Name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteViewConfigurationByName(configurationName: string, options?: any) {
            return DefaultApiFp(configuration).deleteViewConfigurationByName(configurationName, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get all View Timeseries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllTimeseriesConfigurations(options?: any) {
            return DefaultApiFp(configuration).getAllTimeseriesConfigurations(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get all View Configurations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllViewConfigurations(options?: any) {
            return DefaultApiFp(configuration).getAllViewConfigurations(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get Timeseries Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTimeseriesConfigurationByName(configurationName: string, options?: any) {
            return DefaultApiFp(configuration).getTimeseriesConfigurationByName(configurationName, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Get an View Configuration by name
         * @param {string} configurationName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getViewConfigurationByName(configurationName: string, options?: any) {
            return DefaultApiFp(configuration).getViewConfigurationByName(configurationName, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Add or edit the given Timesries Configuration
         * @param {string} configurationName 
         * @param {TimeseriesViewConfiguration} [persistenceParametersValuesDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTimeseriesConfigurationByName(configurationName: string, persistenceParametersValuesDto?: TimeseriesViewConfiguration, options?: any) {
            return DefaultApiFp(configuration).putTimeseriesConfigurationByName(configurationName, persistenceParametersValuesDto, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Add or edit the given View Configuration
         * @param {string} configurationName 
         * @param {ViewConfiguration} [viewConfiguration] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putViewConfigurationByName(configurationName: string, viewConfiguration?: ViewConfiguration, options?: any) {
            return DefaultApiFp(configuration).putViewConfigurationByName(configurationName, viewConfiguration, options)(fetch, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Removes Timeseries Configuration by Name
     * @param {string} configurationName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteTimeseriesConfigurationByName(configurationName: string, options?: any) {
        return DefaultApiFp(this.configuration).deleteTimeseriesConfigurationByName(configurationName, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Removes View Configuration by Name
     * @param {string} configurationName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteViewConfigurationByName(configurationName: string, options?: any) {
        return DefaultApiFp(this.configuration).deleteViewConfigurationByName(configurationName, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get all View Timeseries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getAllTimeseriesConfigurations(options?: any) {
        return DefaultApiFp(this.configuration).getAllTimeseriesConfigurations(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get all View Configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getAllViewConfigurations(options?: any) {
        return DefaultApiFp(this.configuration).getAllViewConfigurations(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get Timeseries Configuration by name
     * @param {string} configurationName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTimeseriesConfigurationByName(configurationName: string, options?: any) {
        return DefaultApiFp(this.configuration).getTimeseriesConfigurationByName(configurationName, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Get an View Configuration by name
     * @param {string} configurationName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getViewConfigurationByName(configurationName: string, options?: any) {
        return DefaultApiFp(this.configuration).getViewConfigurationByName(configurationName, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Add or edit the given Timesries Configuration
     * @param {string} configurationName 
     * @param {TimeseriesViewConfiguration} [persistenceParametersValuesDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public putTimeseriesConfigurationByName(configurationName: string, persistenceParametersValuesDto?: TimeseriesViewConfiguration, options?: any) {
        return DefaultApiFp(this.configuration).putTimeseriesConfigurationByName(configurationName, persistenceParametersValuesDto, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Add or edit the given View Configuration
     * @param {string} configurationName 
     * @param {ViewConfiguration} [viewConfiguration] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public putViewConfigurationByName(configurationName: string, viewConfiguration?: ViewConfiguration, options?: any) {
        return DefaultApiFp(this.configuration).putViewConfigurationByName(configurationName, viewConfiguration, options)(this.fetch, this.basePath);
    }

}

