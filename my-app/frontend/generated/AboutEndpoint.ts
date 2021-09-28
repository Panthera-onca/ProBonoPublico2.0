/**
 * The endpoint for the client-side Dashboard View.
 *
 * This module is generated from AboutEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file://C:\Users\nikol\Documents\my-app\src\main\java\com\example\application\views\about\AboutEndpoint.java}
 * @module AboutEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import ChartSeries from './com/example/application/views/about/ChartSeries';
import HealthGridItem from './com/example/application/views/about/HealthGridItem';

function _healthGridItems(): Promise<Array<HealthGridItem>> {
 return client.call('AboutEndpoint', 'healthGridItems');
}
export {_healthGridItems as healthGridItems};

function _monthlyVisitorsSeries(): Promise<Array<ChartSeries>> {
 return client.call('AboutEndpoint', 'monthlyVisitorsSeries');
}
export {_monthlyVisitorsSeries as monthlyVisitorsSeries};

function _responseTimesSeries(): Promise<Array<ChartSeries>> {
 return client.call('AboutEndpoint', 'responseTimesSeries');
}
export {_responseTimesSeries as responseTimesSeries};

export const AboutEndpoint = Object.freeze({
  healthGridItems: _healthGridItems,
  monthlyVisitorsSeries: _monthlyVisitorsSeries,
  responseTimesSeries: _responseTimesSeries,
});
