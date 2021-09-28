// @ts-nocheck

import HealthGridItem from './HealthGridItem';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelType,_getPropertyModel} from '@vaadin/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@vaadin/form';

/**
 * This module is generated from com.example.application.views.about.HealthGridItem.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file://C:\Users\nikol\Documents\my-app\src\main\java\com\example\application\views\about\HealthGridItem.java}
 */
export default class HealthGridItemModel<T extends HealthGridItem = HealthGridItem> extends ObjectModel<T> { 
  static createEmptyValue: () => HealthGridItem;

  get city(): StringModel {
    return this[_getPropertyModel]('city', StringModel, [false]);
  }

  get country(): StringModel {
    return this[_getPropertyModel]('country', StringModel, [false]);
  }

  get date(): StringModel {
    return this[_getPropertyModel]('date', StringModel, [false]);
  }

  get status(): StringModel {
    return this[_getPropertyModel]('status', StringModel, [false]);
  }

  get theme(): StringModel {
    return this[_getPropertyModel]('theme', StringModel, [false]);
  }
}
