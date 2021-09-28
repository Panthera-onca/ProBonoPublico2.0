// @ts-nocheck

import ChartSeries from './ChartSeries';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelType,_getPropertyModel} from '@vaadin/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@vaadin/form';

/**
 * This module is generated from com.example.application.views.about.ChartSeries.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file://C:\Users\nikol\Documents\my-app\src\main\java\com\example\application\views\about\ChartSeries.java}
 */
export default class ChartSeriesModel<T extends ChartSeries = ChartSeries> extends ObjectModel<T> { 
  static createEmptyValue: () => ChartSeries;

  get data(): ArrayModel<number, NumberModel> {
    return this[_getPropertyModel]('data', ArrayModel, [false, NumberModel, [false]]);
  }

  get name(): StringModel {
    return this[_getPropertyModel]('name', StringModel, [false]);
  }
}
