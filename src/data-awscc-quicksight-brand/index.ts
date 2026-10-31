/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccQuicksightBrandConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_brand#id DataAwsccQuicksightBrand#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accent - computed: true, optional: false, required: false
  private _accent = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(this, "accent");
  public get accent() {
    return this._accent;
  }

  // danger - computed: true, optional: false, required: false
  private _danger = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(this, "danger");
  public get danger() {
    return this._danger;
  }

  // dimension - computed: true, optional: false, required: false
  private _dimension = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }

  // info - computed: true, optional: false, required: false
  private _info = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }

  // measure - computed: true, optional: false, required: false
  private _measure = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(this, "measure");
  public get measure() {
    return this._measure;
  }

  // primary - computed: true, optional: false, required: false
  private _primary = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }

  // secondary - computed: true, optional: false, required: false
  private _secondary = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }

  // success - computed: true, optional: false, required: false
  private _success = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }

  // warning - computed: true, optional: false, required: false
  private _warning = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background - computed: true, optional: false, required: false
  public get background() {
    return this.getStringAttribute('background');
  }

  // foreground - computed: true, optional: false, required: false
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // contextual_navbar - computed: true, optional: false, required: false
  private _contextualNavbar = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(this, "contextual_navbar");
  public get contextualNavbar() {
    return this._contextualNavbar;
  }

  // global_navbar - computed: true, optional: false, required: false
  private _globalNavbar = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(this, "global_navbar");
  public get globalNavbar() {
    return this._globalNavbar;
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // navbar_style - computed: true, optional: false, required: false
  private _navbarStyle = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(this, "navbar_style");
  public get navbarStyle() {
    return this._navbarStyle;
  }
}
export interface DataAwsccQuicksightBrandBrandDefinitionApplicationTheme {
}

export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionApplicationThemeToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinitionApplicationTheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinitionApplicationTheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinitionApplicationTheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brand_color_palette - computed: true, optional: false, required: false
  private _brandColorPalette = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(this, "brand_color_palette");
  public get brandColorPalette() {
    return this._brandColorPalette;
  }

  // brand_element_style - computed: true, optional: false, required: false
  private _brandElementStyle = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(this, "brand_element_style");
  public get brandElementStyle() {
    return this._brandElementStyle;
  }
}
export interface DataAwsccQuicksightBrandBrandDefinition {
}

export function dataAwsccQuicksightBrandBrandDefinitionToTerraform(struct?: DataAwsccQuicksightBrandBrandDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandBrandDefinitionToHclTerraform(struct?: DataAwsccQuicksightBrandBrandDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandBrandDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccQuicksightBrandBrandDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandBrandDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_theme - computed: true, optional: false, required: false
  private _applicationTheme = new DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference(this, "application_theme");
  public get applicationTheme() {
    return this._applicationTheme;
  }

  // brand_name - computed: true, optional: false, required: false
  public get brandName() {
    return this.getStringAttribute('brand_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}
export interface DataAwsccQuicksightBrandTags {
}

export function dataAwsccQuicksightBrandTagsToTerraform(struct?: DataAwsccQuicksightBrandTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccQuicksightBrandTagsToHclTerraform(struct?: DataAwsccQuicksightBrandTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccQuicksightBrandTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsccQuicksightBrandTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccQuicksightBrandTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccQuicksightBrandTagsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsccQuicksightBrandTagsOutputReference {
    return new DataAwsccQuicksightBrandTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_brand awscc_quicksight_brand}
*/
export class DataAwsccQuicksightBrand extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_brand";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccQuicksightBrand to import
  * @param importFromId The id of the existing DataAwsccQuicksightBrand that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_brand#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccQuicksightBrand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_brand", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_brand awscc_quicksight_brand} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccQuicksightBrandConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccQuicksightBrandConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_quicksight_brand',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.108.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // brand_definition - computed: true, optional: false, required: false
  private _brandDefinition = new DataAwsccQuicksightBrandBrandDefinitionOutputReference(this, "brand_definition");
  public get brandDefinition() {
    return this._brandDefinition;
  }

  // brand_id - computed: true, optional: false, required: false
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }

  // brand_status - computed: true, optional: false, required: false
  public get brandStatus() {
    return this.getStringAttribute('brand_status');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccQuicksightBrandTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // version_status - computed: true, optional: false, required: false
  public get versionStatus() {
    return this.getStringAttribute('version_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
