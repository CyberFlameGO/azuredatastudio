/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import AdsTelemetryReporter from '@microsoft/ads-extension-telemetry';
import { getPackageInfo } from './utils';

const packageInfo = getPackageInfo()!;

export const TelemetryReporter = new AdsTelemetryReporter(packageInfo.name, packageInfo.version, packageInfo.aiKey);

export enum TelemetryViews {
	SqlBindingsQuickPick = 'SqlBindingsQuickPick'
}

export enum TelemetryActions {
	startAddSqlBinding = 'startAddSqlBinding',
	finishAddSqlBinding = 'finishAddSqlBinding'
}
