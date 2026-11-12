/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMedialiveInputConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#id DataAwsccMedialiveInput#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMedialiveInputDestinationsNetworkRoutes {
}

export function dataAwsccMedialiveInputDestinationsNetworkRoutesToTerraform(struct?: DataAwsccMedialiveInputDestinationsNetworkRoutes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputDestinationsNetworkRoutesToHclTerraform(struct?: DataAwsccMedialiveInputDestinationsNetworkRoutes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputDestinationsNetworkRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputDestinationsNetworkRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
}

export class DataAwsccMedialiveInputDestinationsNetworkRoutesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference {
    return new DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputDestinationsVpc {
}

export function dataAwsccMedialiveInputDestinationsVpcToTerraform(struct?: DataAwsccMedialiveInputDestinationsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputDestinationsVpcToHclTerraform(struct?: DataAwsccMedialiveInputDestinationsVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputDestinationsVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputDestinationsVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputDestinationsVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
}
export interface DataAwsccMedialiveInputDestinations {
}

export function dataAwsccMedialiveInputDestinationsToTerraform(struct?: DataAwsccMedialiveInputDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputDestinationsToHclTerraform(struct?: DataAwsccMedialiveInputDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_routes - computed: true, optional: false, required: false
  private _networkRoutes = new DataAwsccMedialiveInputDestinationsNetworkRoutesList(this, "network_routes", false);
  public get networkRoutes() {
    return this._networkRoutes;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // static_ip_address - computed: true, optional: false, required: false
  public get staticIpAddress() {
    return this.getStringAttribute('static_ip_address');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccMedialiveInputDestinationsVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
}

export class DataAwsccMedialiveInputDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputDestinationsOutputReference {
    return new DataAwsccMedialiveInputDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputInputDevices {
}

export function dataAwsccMedialiveInputInputDevicesToTerraform(struct?: DataAwsccMedialiveInputInputDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputInputDevicesToHclTerraform(struct?: DataAwsccMedialiveInputInputDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputInputDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputInputDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputInputDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAwsccMedialiveInputInputDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputInputDevicesOutputReference {
    return new DataAwsccMedialiveInputInputDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputMediaConnectFlows {
}

export function dataAwsccMedialiveInputMediaConnectFlowsToTerraform(struct?: DataAwsccMedialiveInputMediaConnectFlows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputMediaConnectFlowsToHclTerraform(struct?: DataAwsccMedialiveInputMediaConnectFlows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputMediaConnectFlowsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputMediaConnectFlows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputMediaConnectFlows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
}

export class DataAwsccMedialiveInputMediaConnectFlowsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputMediaConnectFlowsOutputReference {
    return new DataAwsccMedialiveInputMediaConnectFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputMulticastSettingsSources {
}

export function dataAwsccMedialiveInputMulticastSettingsSourcesToTerraform(struct?: DataAwsccMedialiveInputMulticastSettingsSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputMulticastSettingsSourcesToHclTerraform(struct?: DataAwsccMedialiveInputMulticastSettingsSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputMulticastSettingsSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputMulticastSettingsSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAwsccMedialiveInputMulticastSettingsSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference {
    return new DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputMulticastSettings {
}

export function dataAwsccMedialiveInputMulticastSettingsToTerraform(struct?: DataAwsccMedialiveInputMulticastSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputMulticastSettingsToHclTerraform(struct?: DataAwsccMedialiveInputMulticastSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputMulticastSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputMulticastSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputMulticastSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccMedialiveInputMulticastSettingsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
}
export interface DataAwsccMedialiveInputRouterSettingsDestinations {
}

export function dataAwsccMedialiveInputRouterSettingsDestinationsToTerraform(struct?: DataAwsccMedialiveInputRouterSettingsDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputRouterSettingsDestinationsToHclTerraform(struct?: DataAwsccMedialiveInputRouterSettingsDestinations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputRouterSettingsDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputRouterSettingsDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // router_output_arn - computed: true, optional: false, required: false
  public get routerOutputArn() {
    return this.getStringAttribute('router_output_arn');
  }
}

export class DataAwsccMedialiveInputRouterSettingsDestinationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference {
    return new DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputRouterSettings {
}

export function dataAwsccMedialiveInputRouterSettingsToTerraform(struct?: DataAwsccMedialiveInputRouterSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputRouterSettingsToHclTerraform(struct?: DataAwsccMedialiveInputRouterSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputRouterSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputRouterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputRouterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccMedialiveInputRouterSettingsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_index - computed: true, optional: false, required: false
  public get mediaIndex() {
    return this.getNumberAttribute('media_index');
  }

  // sdp_url - computed: true, optional: false, required: false
  public get sdpUrl() {
    return this.getStringAttribute('sdp_url');
  }
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference {
    return new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_index - computed: true, optional: false, required: false
  public get mediaIndex() {
    return this.getNumberAttribute('media_index');
  }

  // sdp_url - computed: true, optional: false, required: false
  public get sdpUrl() {
    return this.getStringAttribute('sdp_url');
  }
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference {
    return new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_index - computed: true, optional: false, required: false
  public get mediaIndex() {
    return this.getNumberAttribute('media_index');
  }

  // sdp_url - computed: true, optional: false, required: false
  public get sdpUrl() {
    return this.getStringAttribute('sdp_url');
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ancillary_sdps - computed: true, optional: false, required: false
  private _ancillarySdps = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(this, "ancillary_sdps", false);
  public get ancillarySdps() {
    return this._ancillarySdps;
  }

  // audio_sdps - computed: true, optional: false, required: false
  private _audioSdps = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(this, "audio_sdps", false);
  public get audioSdps() {
    return this._audioSdps;
  }

  // video_sdp - computed: true, optional: false, required: false
  private _videoSdp = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(this, "video_sdp");
  public get videoSdp() {
    return this._videoSdp;
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sdp_settings - computed: true, optional: false, required: false
  private _sdpSettings = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(this, "sdp_settings");
  public get sdpSettings() {
    return this._sdpSettings;
  }
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference {
    return new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings {
}

export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsToTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsToHclTerraform(struct?: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // smpte_2110_receiver_groups - computed: true, optional: false, required: false
  private _smpte2110ReceiverGroups = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(this, "smpte_2110_receiver_groups", false);
  public get smpte2110ReceiverGroups() {
    return this._smpte2110ReceiverGroups;
  }
}
export interface DataAwsccMedialiveInputSources {
}

export function dataAwsccMedialiveInputSourcesToTerraform(struct?: DataAwsccMedialiveInputSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSourcesToHclTerraform(struct?: DataAwsccMedialiveInputSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password_param - computed: true, optional: false, required: false
  public get passwordParam() {
    return this.getStringAttribute('password_param');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAwsccMedialiveInputSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputSourcesOutputReference {
    return new DataAwsccMedialiveInputSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption {
}

export function dataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionToTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionToHclTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // passphrase_secret_arn - computed: true, optional: false, required: false
  public get passphraseSecretArn() {
    return this.getStringAttribute('passphrase_secret_arn');
  }
}
export interface DataAwsccMedialiveInputSrtSettingsSrtCallerSources {
}

export function dataAwsccMedialiveInputSrtSettingsSrtCallerSourcesToTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtCallerSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSrtSettingsSrtCallerSourcesToHclTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtCallerSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMedialiveInputSrtSettingsSrtCallerSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSrtSettingsSrtCallerSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption - computed: true, optional: false, required: false
  private _decryption = new DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }

  // minimum_latency - computed: true, optional: false, required: false
  public get minimumLatency() {
    return this.getNumberAttribute('minimum_latency');
  }

  // srt_listener_address - computed: true, optional: false, required: false
  public get srtListenerAddress() {
    return this.getStringAttribute('srt_listener_address');
  }

  // srt_listener_port - computed: true, optional: false, required: false
  public get srtListenerPort() {
    return this.getStringAttribute('srt_listener_port');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}

export class DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference {
    return new DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption {
}

export function dataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionToTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionToHclTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // passphrase_secret_arn - computed: true, optional: false, required: false
  public get passphraseSecretArn() {
    return this.getStringAttribute('passphrase_secret_arn');
  }
}
export interface DataAwsccMedialiveInputSrtSettingsSrtListenerSettings {
}

export function dataAwsccMedialiveInputSrtSettingsSrtListenerSettingsToTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtListenerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSrtSettingsSrtListenerSettingsToHclTerraform(struct?: DataAwsccMedialiveInputSrtSettingsSrtListenerSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSrtSettingsSrtListenerSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSrtSettingsSrtListenerSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // decryption - computed: true, optional: false, required: false
  private _decryption = new DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }

  // minimum_latency - computed: true, optional: false, required: false
  public get minimumLatency() {
    return this.getNumberAttribute('minimum_latency');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
}
export interface DataAwsccMedialiveInputSrtSettings {
}

export function dataAwsccMedialiveInputSrtSettingsToTerraform(struct?: DataAwsccMedialiveInputSrtSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputSrtSettingsToHclTerraform(struct?: DataAwsccMedialiveInputSrtSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputSrtSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputSrtSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputSrtSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // srt_caller_sources - computed: true, optional: false, required: false
  private _srtCallerSources = new DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList(this, "srt_caller_sources", false);
  public get srtCallerSources() {
    return this._srtCallerSources;
  }

  // srt_listener_settings - computed: true, optional: false, required: false
  private _srtListenerSettings = new DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference(this, "srt_listener_settings");
  public get srtListenerSettings() {
    return this._srtListenerSettings;
  }
}
export interface DataAwsccMedialiveInputVpc {
}

export function dataAwsccMedialiveInputVpcToTerraform(struct?: DataAwsccMedialiveInputVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMedialiveInputVpcToHclTerraform(struct?: DataAwsccMedialiveInputVpc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMedialiveInputVpcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMedialiveInputVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMedialiveInputVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input awscc_medialive_input}
*/
export class DataAwsccMedialiveInput extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_medialive_input";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMedialiveInput resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMedialiveInput to import
  * @param importFromId The id of the existing DataAwsccMedialiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMedialiveInput to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_input", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input awscc_medialive_input} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMedialiveInputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMedialiveInputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_medialive_input',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
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

  // attached_channels - computed: true, optional: false, required: false
  public get attachedChannels() {
    return this.getListAttribute('attached_channels');
  }

  // destination_urls - computed: true, optional: false, required: false
  public get destinationUrls() {
    return this.getListAttribute('destination_urls');
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataAwsccMedialiveInputDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
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

  // input_class - computed: true, optional: false, required: false
  public get inputClass() {
    return this.getStringAttribute('input_class');
  }

  // input_devices - computed: true, optional: false, required: false
  private _inputDevices = new DataAwsccMedialiveInputInputDevicesList(this, "input_devices", false);
  public get inputDevices() {
    return this._inputDevices;
  }

  // input_id - computed: true, optional: false, required: false
  public get inputId() {
    return this.getStringAttribute('input_id');
  }

  // input_network_location - computed: true, optional: false, required: false
  public get inputNetworkLocation() {
    return this.getStringAttribute('input_network_location');
  }

  // input_partner_ids - computed: true, optional: false, required: false
  public get inputPartnerIds() {
    return this.getListAttribute('input_partner_ids');
  }

  // input_security_groups - computed: true, optional: false, required: false
  public get inputSecurityGroups() {
    return this.getListAttribute('input_security_groups');
  }

  // input_source_type - computed: true, optional: false, required: false
  public get inputSourceType() {
    return this.getStringAttribute('input_source_type');
  }

  // media_connect_flows - computed: true, optional: false, required: false
  private _mediaConnectFlows = new DataAwsccMedialiveInputMediaConnectFlowsList(this, "media_connect_flows", false);
  public get mediaConnectFlows() {
    return this._mediaConnectFlows;
  }

  // multicast_settings - computed: true, optional: false, required: false
  private _multicastSettings = new DataAwsccMedialiveInputMulticastSettingsOutputReference(this, "multicast_settings");
  public get multicastSettings() {
    return this._multicastSettings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // router_settings - computed: true, optional: false, required: false
  private _routerSettings = new DataAwsccMedialiveInputRouterSettingsOutputReference(this, "router_settings");
  public get routerSettings() {
    return this._routerSettings;
  }

  // sdi_sources - computed: true, optional: false, required: false
  public get sdiSources() {
    return this.getListAttribute('sdi_sources');
  }

  // security_groups - computed: true, optional: false, required: false
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }

  // smpte_2110_receiver_group_settings - computed: true, optional: false, required: false
  private _smpte2110ReceiverGroupSettings = new DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(this, "smpte_2110_receiver_group_settings");
  public get smpte2110ReceiverGroupSettings() {
    return this._smpte2110ReceiverGroupSettings;
  }

  // source_urls - computed: true, optional: false, required: false
  public get sourceUrls() {
    return this.getListAttribute('source_urls');
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataAwsccMedialiveInputSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // srt_settings - computed: true, optional: false, required: false
  private _srtSettings = new DataAwsccMedialiveInputSrtSettingsOutputReference(this, "srt_settings");
  public get srtSettings() {
    return this._srtSettings;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataAwsccMedialiveInputVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
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
