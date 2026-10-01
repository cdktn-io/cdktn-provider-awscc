/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRedshiftRedshiftIdcApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#id DataAwsccRedshiftRedshiftIdcApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct {
}

export function dataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorized_audiences_list - computed: true, optional: false, required: false
  public get authorizedAudiencesList() {
    return this.getListAttribute('authorized_audiences_list');
  }

  // trusted_token_issuer_arn - computed: true, optional: false, required: false
  public get trustedTokenIssuerArn() {
    return this.getStringAttribute('trusted_token_issuer_arn');
  }
}

export class DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lake_formation_query - computed: true, optional: false, required: false
  private _lakeFormationQuery = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(this, "lake_formation_query");
  public get lakeFormationQuery() {
    return this._lakeFormationQuery;
  }
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect - computed: true, optional: false, required: false
  private _connect = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(this, "connect");
  public get connect() {
    return this._connect;
  }
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read_write_access - computed: true, optional: false, required: false
  private _readWriteAccess = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(this, "read_write_access");
  public get readWriteAccess() {
    return this._readWriteAccess;
  }
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations {
}

export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lake_formation - computed: true, optional: false, required: false
  private _lakeFormation = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(this, "lake_formation", false);
  public get lakeFormation() {
    return this._lakeFormation;
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }

  // s3_access_grants - computed: true, optional: false, required: false
  private _s3AccessGrants = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(this, "s3_access_grants", false);
  public get s3AccessGrants() {
    return this._s3AccessGrants;
  }
}

export class DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRedshiftRedshiftIdcApplicationTags {
}

export function dataAwsccRedshiftRedshiftIdcApplicationTagsToTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRedshiftRedshiftIdcApplicationTagsToHclTerraform(struct?: DataAwsccRedshiftRedshiftIdcApplicationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRedshiftRedshiftIdcApplicationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRedshiftRedshiftIdcApplicationTags | undefined) {
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

export class DataAwsccRedshiftRedshiftIdcApplicationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference {
    return new DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}
*/
export class DataAwsccRedshiftRedshiftIdcApplication extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_redshift_redshift_idc_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRedshiftRedshiftIdcApplication to import
  * @param importFromId The id of the existing DataAwsccRedshiftRedshiftIdcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRedshiftRedshiftIdcApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_redshift_idc_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRedshiftRedshiftIdcApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRedshiftRedshiftIdcApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_redshift_redshift_idc_application',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.104.0',
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

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // authorized_token_issuer_list - computed: true, optional: false, required: false
  private _authorizedTokenIssuerList = new DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(this, "authorized_token_issuer_list", false);
  public get authorizedTokenIssuerList() {
    return this._authorizedTokenIssuerList;
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
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

  // idc_display_name - computed: true, optional: false, required: false
  public get idcDisplayName() {
    return this.getStringAttribute('idc_display_name');
  }

  // idc_instance_arn - computed: true, optional: false, required: false
  public get idcInstanceArn() {
    return this.getStringAttribute('idc_instance_arn');
  }

  // idc_managed_application_arn - computed: true, optional: false, required: false
  public get idcManagedApplicationArn() {
    return this.getStringAttribute('idc_managed_application_arn');
  }

  // idc_onboard_status - computed: true, optional: false, required: false
  public get idcOnboardStatus() {
    return this.getStringAttribute('idc_onboard_status');
  }

  // identity_namespace - computed: true, optional: false, required: false
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }

  // redshift_idc_application_arn - computed: true, optional: false, required: false
  public get redshiftIdcApplicationArn() {
    return this.getStringAttribute('redshift_idc_application_arn');
  }

  // redshift_idc_application_name - computed: true, optional: false, required: false
  public get redshiftIdcApplicationName() {
    return this.getStringAttribute('redshift_idc_application_name');
  }

  // service_integrations - computed: true, optional: false, required: false
  private _serviceIntegrations = new DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList(this, "service_integrations", false);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }

  // sso_tag_keys - computed: true, optional: false, required: false
  public get ssoTagKeys() {
    return this.getListAttribute('sso_tag_keys');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRedshiftRedshiftIdcApplicationTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
