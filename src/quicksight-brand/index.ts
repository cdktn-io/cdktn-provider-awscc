/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface QuicksightBrandConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#brand_definition QuicksightBrand#brand_definition}
  */
  readonly brandDefinition?: QuicksightBrandBrandDefinition;
  /**
  * The ID of the QuickSight brand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#brand_id QuicksightBrand#brand_id}
  */
  readonly brandId: string;
  /**
  * The tags for the brand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#tags QuicksightBrand#tags}
  */
  readonly tags?: QuicksightBrandTags[] | cdktn.IResolvable;
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette {
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#accent QuicksightBrand#accent}
  */
  readonly accent?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#danger QuicksightBrand#danger}
  */
  readonly danger?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#dimension QuicksightBrand#dimension}
  */
  readonly dimension?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#info QuicksightBrand#info}
  */
  readonly info?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#measure QuicksightBrand#measure}
  */
  readonly measure?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#primary QuicksightBrand#primary}
  */
  readonly primary?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#secondary QuicksightBrand#secondary}
  */
  readonly secondary?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#success QuicksightBrand#success}
  */
  readonly success?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#warning QuicksightBrand#warning}
  */
  readonly warning?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    accent: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToTerraform(struct!.accent),
    danger: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToTerraform(struct!.danger),
    dimension: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToTerraform(struct!.dimension),
    info: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToTerraform(struct!.info),
    measure: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToTerraform(struct!.measure),
    primary: quicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToTerraform(struct!.primary),
    secondary: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToTerraform(struct!.secondary),
    success: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToTerraform(struct!.success),
    warning: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToTerraform(struct!.warning),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    accent: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentToHclTerraform(struct!.accent),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent",
    },
    danger: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerToHclTerraform(struct!.danger),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger",
    },
    dimension: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionToHclTerraform(struct!.dimension),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension",
    },
    info: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoToHclTerraform(struct!.info),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo",
    },
    measure: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureToHclTerraform(struct!.measure),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure",
    },
    primary: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary",
    },
    secondary: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary",
    },
    success: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessToHclTerraform(struct!.success),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess",
    },
    warning: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningToHclTerraform(struct!.warning),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accent = this._accent?.internalValue;
    }
    if (this._danger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.danger = this._danger?.internalValue;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._measure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    if (this._success?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success?.internalValue;
    }
    if (this._warning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accent.internalValue = undefined;
      this._danger.internalValue = undefined;
      this._dimension.internalValue = undefined;
      this._info.internalValue = undefined;
      this._measure.internalValue = undefined;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
      this._success.internalValue = undefined;
      this._warning.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accent.internalValue = value.accent;
      this._danger.internalValue = value.danger;
      this._dimension.internalValue = value.dimension;
      this._info.internalValue = value.info;
      this._measure.internalValue = value.measure;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
      this._success.internalValue = value.success;
      this._warning.internalValue = value.warning;
    }
  }

  // accent - computed: true, optional: true, required: false
  private _accent = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(this, "accent");
  public get accent() {
    return this._accent;
  }
  public putAccent(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent) {
    this._accent.internalValue = value;
  }
  public resetAccent() {
    this._accent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accentInput() {
    return this._accent.internalValue;
  }

  // danger - computed: true, optional: true, required: false
  private _danger = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(this, "danger");
  public get danger() {
    return this._danger;
  }
  public putDanger(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger) {
    this._danger.internalValue = value;
  }
  public resetDanger() {
    this._danger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dangerInput() {
    return this._danger.internalValue;
  }

  // dimension - computed: true, optional: true, required: false
  private _dimension = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(this, "dimension");
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }

  // info - computed: true, optional: true, required: false
  private _info = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(this, "info");
  public get info() {
    return this._info;
  }
  public putInfo(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // measure - computed: true, optional: true, required: false
  private _measure = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(this, "measure");
  public get measure() {
    return this._measure;
  }
  public putMeasure(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure) {
    this._measure.internalValue = value;
  }
  public resetMeasure() {
    this._measure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure.internalValue;
  }

  // primary - computed: true, optional: true, required: false
  private _primary = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // success - computed: true, optional: true, required: false
  private _success = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }
  public putSuccess(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess) {
    this._success.internalValue = value;
  }
  public resetSuccess() {
    this._success.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success.internalValue;
  }

  // warning - computed: true, optional: true, required: false
  private _warning = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(this, "warning");
  public get warning() {
    return this._warning;
  }
  public putWarning(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning) {
    this._warning.internalValue = value;
  }
  public resetWarning() {
    this._warning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning.internalValue;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar {
  /**
  * The background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#background QuicksightBrand#background}
  */
  readonly background?: string;
  /**
  * The foreground color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#foreground QuicksightBrand#foreground}
  */
  readonly foreground?: string;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    background: cdktn.stringToTerraform(struct!.background),
    foreground: cdktn.stringToTerraform(struct!.foreground),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    background: {
      value: cdktn.stringToHclTerraform(struct!.background),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreground: {
      value: cdktn.stringToHclTerraform(struct!.foreground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._background !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background;
    }
    if (this._foreground !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreground = this._foreground;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._background = undefined;
      this._foreground = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._background = value.background;
      this._foreground = value.foreground;
    }
  }

  // background - computed: true, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // foreground - computed: true, optional: true, required: false
  private _foreground?: string; 
  public get foreground() {
    return this.getStringAttribute('foreground');
  }
  public set foreground(value: string) {
    this._foreground = value;
  }
  public resetForeground() {
    this._foreground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foregroundInput() {
    return this._foreground;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle {
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#contextual_navbar QuicksightBrand#contextual_navbar}
  */
  readonly contextualNavbar?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar;
  /**
  * The palette colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#global_navbar QuicksightBrand#global_navbar}
  */
  readonly globalNavbar?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contextual_navbar: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToTerraform(struct!.contextualNavbar),
    global_navbar: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToTerraform(struct!.globalNavbar),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contextual_navbar: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarToHclTerraform(struct!.contextualNavbar),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar",
    },
    global_navbar: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarToHclTerraform(struct!.globalNavbar),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextualNavbar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextualNavbar = this._contextualNavbar?.internalValue;
    }
    if (this._globalNavbar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNavbar = this._globalNavbar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextualNavbar.internalValue = undefined;
      this._globalNavbar.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextualNavbar.internalValue = value.contextualNavbar;
      this._globalNavbar.internalValue = value.globalNavbar;
    }
  }

  // contextual_navbar - computed: true, optional: true, required: false
  private _contextualNavbar = new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(this, "contextual_navbar");
  public get contextualNavbar() {
    return this._contextualNavbar;
  }
  public putContextualNavbar(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar) {
    this._contextualNavbar.internalValue = value;
  }
  public resetContextualNavbar() {
    this._contextualNavbar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextualNavbarInput() {
    return this._contextualNavbar.internalValue;
  }

  // global_navbar - computed: true, optional: true, required: false
  private _globalNavbar = new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(this, "global_navbar");
  public get globalNavbar() {
    return this._globalNavbar;
  }
  public putGlobalNavbar(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar) {
    this._globalNavbar.internalValue = value;
  }
  public resetGlobalNavbar() {
    this._globalNavbar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNavbarInput() {
    return this._globalNavbar.internalValue;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle {
  /**
  * The navigation bar style.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#navbar_style QuicksightBrand#navbar_style}
  */
  readonly navbarStyle?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle;
}

export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    navbar_style: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToTerraform(struct!.navbarStyle),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    navbar_style: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleToHclTerraform(struct!.navbarStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._navbarStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navbarStyle = this._navbarStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._navbarStyle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._navbarStyle.internalValue = value.navbarStyle;
    }
  }

  // navbar_style - computed: true, optional: true, required: false
  private _navbarStyle = new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(this, "navbar_style");
  public get navbarStyle() {
    return this._navbarStyle;
  }
  public putNavbarStyle(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle) {
    this._navbarStyle.internalValue = value;
  }
  public resetNavbarStyle() {
    this._navbarStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navbarStyleInput() {
    return this._navbarStyle.internalValue;
  }
}
export interface QuicksightBrandBrandDefinitionApplicationTheme {
  /**
  * The color palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#brand_color_palette QuicksightBrand#brand_color_palette}
  */
  readonly brandColorPalette?: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette;
  /**
  * The element style.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#brand_element_style QuicksightBrand#brand_element_style}
  */
  readonly brandElementStyle?: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle;
}

export function quicksightBrandBrandDefinitionApplicationThemeToTerraform(struct?: QuicksightBrandBrandDefinitionApplicationTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    brand_color_palette: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToTerraform(struct!.brandColorPalette),
    brand_element_style: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToTerraform(struct!.brandElementStyle),
  }
}


export function quicksightBrandBrandDefinitionApplicationThemeToHclTerraform(struct?: QuicksightBrandBrandDefinitionApplicationTheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    brand_color_palette: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteToHclTerraform(struct!.brandColorPalette),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette",
    },
    brand_element_style: {
      value: quicksightBrandBrandDefinitionApplicationThemeBrandElementStyleToHclTerraform(struct!.brandElementStyle),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionApplicationThemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinitionApplicationTheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brandColorPalette?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brandColorPalette = this._brandColorPalette?.internalValue;
    }
    if (this._brandElementStyle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.brandElementStyle = this._brandElementStyle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinitionApplicationTheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brandColorPalette.internalValue = undefined;
      this._brandElementStyle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brandColorPalette.internalValue = value.brandColorPalette;
      this._brandElementStyle.internalValue = value.brandElementStyle;
    }
  }

  // brand_color_palette - computed: true, optional: true, required: false
  private _brandColorPalette = new QuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(this, "brand_color_palette");
  public get brandColorPalette() {
    return this._brandColorPalette;
  }
  public putBrandColorPalette(value: QuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette) {
    this._brandColorPalette.internalValue = value;
  }
  public resetBrandColorPalette() {
    this._brandColorPalette.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandColorPaletteInput() {
    return this._brandColorPalette.internalValue;
  }

  // brand_element_style - computed: true, optional: true, required: false
  private _brandElementStyle = new QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(this, "brand_element_style");
  public get brandElementStyle() {
    return this._brandElementStyle;
  }
  public putBrandElementStyle(value: QuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle) {
    this._brandElementStyle.internalValue = value;
  }
  public resetBrandElementStyle() {
    this._brandElementStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandElementStyleInput() {
    return this._brandElementStyle.internalValue;
  }
}
export interface QuicksightBrandBrandDefinition {
  /**
  * The application theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#application_theme QuicksightBrand#application_theme}
  */
  readonly applicationTheme?: QuicksightBrandBrandDefinitionApplicationTheme;
  /**
  * The name of the brand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#brand_name QuicksightBrand#brand_name}
  */
  readonly brandName?: string;
  /**
  * The description of the brand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#description QuicksightBrand#description}
  */
  readonly description?: string;
}

export function quicksightBrandBrandDefinitionToTerraform(struct?: QuicksightBrandBrandDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_theme: quicksightBrandBrandDefinitionApplicationThemeToTerraform(struct!.applicationTheme),
    brand_name: cdktn.stringToTerraform(struct!.brandName),
    description: cdktn.stringToTerraform(struct!.description),
  }
}


export function quicksightBrandBrandDefinitionToHclTerraform(struct?: QuicksightBrandBrandDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_theme: {
      value: quicksightBrandBrandDefinitionApplicationThemeToHclTerraform(struct!.applicationTheme),
      isBlock: true,
      type: "struct",
      storageClassType: "QuicksightBrandBrandDefinitionApplicationTheme",
    },
    brand_name: {
      value: cdktn.stringToHclTerraform(struct!.brandName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandBrandDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightBrandBrandDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationTheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTheme = this._applicationTheme?.internalValue;
    }
    if (this._brandName !== undefined) {
      hasAnyValues = true;
      internalValueResult.brandName = this._brandName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandBrandDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationTheme.internalValue = undefined;
      this._brandName = undefined;
      this._description = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationTheme.internalValue = value.applicationTheme;
      this._brandName = value.brandName;
      this._description = value.description;
    }
  }

  // application_theme - computed: true, optional: true, required: false
  private _applicationTheme = new QuicksightBrandBrandDefinitionApplicationThemeOutputReference(this, "application_theme");
  public get applicationTheme() {
    return this._applicationTheme;
  }
  public putApplicationTheme(value: QuicksightBrandBrandDefinitionApplicationTheme) {
    this._applicationTheme.internalValue = value;
  }
  public resetApplicationTheme() {
    this._applicationTheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationThemeInput() {
    return this._applicationTheme.internalValue;
  }

  // brand_name - computed: true, optional: true, required: false
  private _brandName?: string; 
  public get brandName() {
    return this.getStringAttribute('brand_name');
  }
  public set brandName(value: string) {
    this._brandName = value;
  }
  public resetBrandName() {
    this._brandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandNameInput() {
    return this._brandName;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}
export interface QuicksightBrandTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#key QuicksightBrand#key}
  */
  readonly key?: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#value QuicksightBrand#value}
  */
  readonly value?: string;
}

export function quicksightBrandTagsToTerraform(struct?: QuicksightBrandTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function quicksightBrandTagsToHclTerraform(struct?: QuicksightBrandTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QuicksightBrandTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): QuicksightBrandTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightBrandTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class QuicksightBrandTagsList extends cdktn.ComplexList {
  public internalValue? : QuicksightBrandTags[] | cdktn.IResolvable

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
  public get(index: number): QuicksightBrandTagsOutputReference {
    return new QuicksightBrandTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand awscc_quicksight_brand}
*/
export class QuicksightBrand extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_quicksight_brand";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a QuicksightBrand resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightBrand to import
  * @param importFromId The id of the existing QuicksightBrand that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightBrand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_brand", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/quicksight_brand awscc_quicksight_brand} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightBrandConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightBrandConfig) {
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
    this._brandDefinition.internalValue = config.brandDefinition;
    this._brandId = config.brandId;
    this._tags.internalValue = config.tags;
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

  // brand_definition - computed: true, optional: true, required: false
  private _brandDefinition = new QuicksightBrandBrandDefinitionOutputReference(this, "brand_definition");
  public get brandDefinition() {
    return this._brandDefinition;
  }
  public putBrandDefinition(value: QuicksightBrandBrandDefinition) {
    this._brandDefinition.internalValue = value;
  }
  public resetBrandDefinition() {
    this._brandDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brandDefinitionInput() {
    return this._brandDefinition.internalValue;
  }

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // brand_status - computed: true, optional: false, required: false
  public get brandStatus() {
    return this.getStringAttribute('brand_status');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new QuicksightBrandTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: QuicksightBrandTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      brand_definition: quicksightBrandBrandDefinitionToTerraform(this._brandDefinition.internalValue),
      brand_id: cdktn.stringToTerraform(this._brandId),
      tags: cdktn.listMapper(quicksightBrandTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brand_definition: {
        value: quicksightBrandBrandDefinitionToHclTerraform(this._brandDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QuicksightBrandBrandDefinition",
      },
      brand_id: {
        value: cdktn.stringToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(quicksightBrandTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QuicksightBrandTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
