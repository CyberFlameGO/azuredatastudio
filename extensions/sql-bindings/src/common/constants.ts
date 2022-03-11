/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vscode-nls';
import * as utils from '../common/utils';

const localize = nls.loadMessageBundle();

// Azure Functions
export const azureFunctionsExtensionName = 'ms-azuretools.vscode-azurefunctions';
export const sqlConnectionString = 'SqlConnectionString';
export const linkToAzureFunctionExtension = 'https://docs.microsoft.com/azure/azure-functions/functions-develop-vs-code';
export const sqlBindingsDoc = 'https://aka.ms/sqlbindings';
export const defaultSqlBindingTextLines =
	[
		'log.LogInformation(\"C# HTTP trigger function processed a request.\");',
		'string name = req.Query[\"name\"];',
		'string requestBody = await new StreamReader(req.Body).ReadToEndAsync();',
		'dynamic data = JsonConvert.DeserializeObject(requestBody);',
		'name = name ?? data?.name;',
		'string responseMessage = string.IsNullOrEmpty(name) ? \"This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.\" : $\"Hello, {name}. This HTTP triggered function executed successfully.\";'
	];
export const defaultBindingResult = 'return new OkObjectResult(responseMessage);';
export const sqlBindingResult = `return new OkObjectResult(result);`;
export const sqlExtensionPackageName = 'Microsoft.Azure.WebJobs.Extensions.Sql';
export const cmdCreateAzureFunction = 'sqlBindings.createAzureFunction';
export const functionNameTitle = localize('functionNameTitle', 'Function Name');
export const selectProject = localize('selectProject', 'Select the Azure Function project for the SQL Binding');
export const azureFunctionsExtensionNotFound = localize('azureFunctionsExtensionNotFound', 'The Azure Functions extension is required to create a new Azure Function with SQL binding but is not installed, install it now?');
export const install = localize('install', 'Install');
export const learnMore = localize('learnMore', 'Learn more');
export const doNotInstall = localize('doNotInstall', 'Do not install');
export const createProject = localize('createProject', 'Create Azure Function Project');
export const selectAzureFunctionProjFolder = localize('selectAzureFunctionProjFolder', 'Select folder for the Azure Function project');
export const timeoutExtensionError = localize('timeoutExtensionError', 'Timed out waiting for extension to install');
export const timeoutAzureFunctionFileError = localize('timeoutAzureFunctionFileError', 'Timed out waiting for Azure Function file to be created');
export const timeoutProjectError = localize('timeoutProjectError', 'Timed out waiting for project to be created');
export const errorNewAzureFunction = localize('errorNewAzureFunction', 'Error creating new Azure Function: {0}');
export const azureFunctionsExtensionNotInstalled = localize('azureFunctionsExtensionNotInstalled', 'Azure Functions extension must be installed in order to use this feature.');
export const azureFunctionsProjectMustBeOpened = localize('azureFunctionsProjectMustBeOpened', 'A C# Azure Functions project must be present in order to create a new Azure Function for this table.');

// Insert SQL binding
export const hostFileName = 'host.json';
export const placeHolderObject = '[dbo].[table1]';
export const sqlBindingsHelpLink = 'https://github.com/Azure/azure-functions-sql-extension/blob/main/README.md';
export const passwordPlaceholder = '******';
export const azureFunctionLocalSettingsFileName = 'local.settings.json';
export const vscodeOpenCommand = 'vscode.open';

export const nameMustNotBeEmpty = localize('nameMustNotBeEmpty', "Name must not be empty");
export const yesString = localize('yesString', "Yes");
export const noString = localize('noString', "No");
export const input = localize('input', "Input");
export const output = localize('output', "Output");
export const selectBindingType = localize('selectBindingType', "Select type of binding");
export const selectAzureFunction = localize('selectAzureFunction', "Select an Azure function in the current file to add SQL binding to");
export const sqlTableOrViewToQuery = localize('sqlTableOrViewToQuery', "SQL table or view to query");
export const sqlTabconstoUpsert = localize('sqlTabconstoUpsert', "SQL table to upsert into");
export const connectionStringSetting = localize('connectionStringSetting', "Connection string setting name");
export const selectSetting = localize('selectSetting', "Select SQL connection string setting from local.settings.json");
export const connectionStringSettingPlaceholder = localize('connectionStringSettingPlaceholder', "Connection string setting specified in \"local.settings.json\"");
export const noAzureFunctionsInFile = localize('noAzureFunctionsInFile', "No Azure functions in the current active file");
export const noAzureFunctionsProjectsInWorkspace = localize('noAzureFunctionsProjectsInWorkspace', "No Azure functions projects found in the workspace");
export const addPackage = localize('addPackage', "Add Package");
export const createNewLocalAppSetting = localize('createNewLocalAppSetting', 'Create new local app setting');
export const createNewLocalAppSettingWithIcon = `$(add) ${createNewLocalAppSetting}`;
export const sqlConnectionStringSetting = 'SqlConnectionString';
export const valueMustNotBeEmpty = localize('valueMustNotBeEmpty', "Value must not be empty");
export const enterConnectionStringSettingName = localize('enterConnectionStringSettingName', "Enter connection string setting name");
export const enterConnectionString = localize('enterConnectionString', "Enter connection string");
export const saveChangesInFile = localize('saveChangesInFile', "There are unsaved changes in the current file. Save now?");
export const save = localize('save', "Save");
export function settingAlreadyExists(settingName: string) { return localize('SettingAlreadyExists', 'Local app setting \'{0}\' already exists. Overwrite?', settingName); }
export function failedToParse(errorMessage: string) { return localize('failedToParse', 'Failed to parse "{0}": {1}.', azureFunctionLocalSettingsFileName, errorMessage); }
export function jsonParseError(error: string, line: number, column: number) { return localize('jsonParseError', '{0} near line "{1}", column "{2}"', error, line, column); }
export const moreInformation = localize('moreInformation', "More Information");
export const addPackageReferenceMessage = localize('addPackageReferenceMessage', 'To use SQL bindings, ensure your Azure Functions project has a reference to {0}', sqlExtensionPackageName);
export const addSqlBindingPackageError = localize('addSqlBindingPackageError', 'Error adding Sql Binding extension package to project');
export const failedToGetConnectionString = localize('failedToGetConnectionString', 'An error occurred generating the connection string for the selected connection');
export const connectionProfile = localize('connectionProfile', 'Select a connection profile');
export const userConnectionString = localize('userConnectionString', 'Enter connection string');
export const selectConnectionString = localize('selectConnectionString', 'Select SQL connection string method');
export const selectConnectionError = (err?: any) => err ? localize('selectConnectionError', "Failed to set connection string app setting: {0}", utils.getErrorMessage(err)) : localize('unableToSetConnectionString', "Failed to set connection string app setting");
export const includePassword = localize('includePassword', 'Do you want to include the password from this connection in your local.settings.json file?');
export const enterPasswordPrompt = localize('enterPasswordPrompt', 'Enter the password to be used for the connection string');
export const enterPasswordManually = localize('enterPasswordManually', 'Enter password or press escape to cancel');
export const userPasswordLater = localize('userPasswordLater', 'In order to user the SQL connection string later you will need to manually enter the password in your local.settings.json file.');
export const openFile = localize('openFile', "Open File");
export const closeButton = localize('closeButton', "Close");