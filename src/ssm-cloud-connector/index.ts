/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SsmCloudConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the AWS Config connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#config_connector_arn SsmCloudConnector#config_connector_arn}
  */
  readonly configConnectorArn: string;
  /**
  * The configuration for the cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#configuration SsmCloudConnector#configuration}
  */
  readonly configuration: SsmCloudConnectorConfiguration;
  /**
  * The description of the cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#description SsmCloudConnector#description}
  */
  readonly description?: string;
  /**
  * The display name of the cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}
  */
  readonly displayName: string;
  /**
  * The IAM role ARN used by the cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#role_arn SsmCloudConnector#role_arn}
  */
  readonly roleArn: string;
  /**
  * Tags to apply to the cloud connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#tags SsmCloudConnector#tags}
  */
  readonly tags?: SsmCloudConnectorTags[] | cdktn.IResolvable;
}
export interface SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions {
  /**
  * The display name of the Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#display_name SsmCloudConnector#display_name}
  */
  readonly displayName?: string;
  /**
  * The Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#id SsmCloudConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function ssmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsToTerraform(struct?: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function ssmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsToHclTerraform(struct?: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList extends cdktn.ComplexList {
  public internalValue? : SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] | cdktn.IResolvable

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
  public get(index: number): SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference {
    return new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmCloudConnectorConfigurationAzureConfigurationTargets {
  /**
  * List of Azure subscriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#subscriptions SsmCloudConnector#subscriptions}
  */
  readonly subscriptions?: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] | cdktn.IResolvable;
}

export function ssmCloudConnectorConfigurationAzureConfigurationTargetsToTerraform(struct?: SsmCloudConnectorConfigurationAzureConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    subscriptions: cdktn.listMapper(ssmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsToTerraform, false)(struct!.subscriptions),
  }
}


export function ssmCloudConnectorConfigurationAzureConfigurationTargetsToHclTerraform(struct?: SsmCloudConnectorConfigurationAzureConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    subscriptions: {
      value: cdktn.listMapperHcl(ssmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsToHclTerraform, false)(struct!.subscriptions),
      isBlock: true,
      type: "list",
      storageClassType: "SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmCloudConnectorConfigurationAzureConfigurationTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptions = this._subscriptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationAzureConfigurationTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subscriptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subscriptions.internalValue = value.subscriptions;
    }
  }

  // subscriptions - computed: true, optional: true, required: false
  private _subscriptions = new SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: SsmCloudConnectorConfigurationAzureConfigurationTargetsSubscriptions[] | cdktn.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }
}
export interface SsmCloudConnectorConfigurationAzureConfiguration {
  /**
  * The display name of the Azure AD application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#application_display_name SsmCloudConnector#application_display_name}
  */
  readonly applicationDisplayName?: string;
  /**
  * The Azure AD application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#application_id SsmCloudConnector#application_id}
  */
  readonly applicationId?: string;
  /**
  * The targets for the cloud connector. If omitted, the entire tenant is targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#targets SsmCloudConnector#targets}
  */
  readonly targets?: SsmCloudConnectorConfigurationAzureConfigurationTargets;
  /**
  * The display name of the Azure AD tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#tenant_display_name SsmCloudConnector#tenant_display_name}
  */
  readonly tenantDisplayName?: string;
  /**
  * The Azure AD tenant ID. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#tenant_id SsmCloudConnector#tenant_id}
  */
  readonly tenantId?: string;
}

export function ssmCloudConnectorConfigurationAzureConfigurationToTerraform(struct?: SsmCloudConnectorConfigurationAzureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_display_name: cdktn.stringToTerraform(struct!.applicationDisplayName),
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    targets: ssmCloudConnectorConfigurationAzureConfigurationTargetsToTerraform(struct!.targets),
    tenant_display_name: cdktn.stringToTerraform(struct!.tenantDisplayName),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function ssmCloudConnectorConfigurationAzureConfigurationToHclTerraform(struct?: SsmCloudConnectorConfigurationAzureConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_display_name: {
      value: cdktn.stringToHclTerraform(struct!.applicationDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: ssmCloudConnectorConfigurationAzureConfigurationTargetsToHclTerraform(struct!.targets),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmCloudConnectorConfigurationAzureConfigurationTargets",
    },
    tenant_display_name: {
      value: cdktn.stringToHclTerraform(struct!.tenantDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationAzureConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmCloudConnectorConfigurationAzureConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationDisplayName = this._applicationDisplayName;
    }
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._tenantDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantDisplayName = this._tenantDisplayName;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationAzureConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationDisplayName = undefined;
      this._applicationId = undefined;
      this._targets.internalValue = undefined;
      this._tenantDisplayName = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationDisplayName = value.applicationDisplayName;
      this._applicationId = value.applicationId;
      this._targets.internalValue = value.targets;
      this._tenantDisplayName = value.tenantDisplayName;
      this._tenantId = value.tenantId;
    }
  }

  // application_display_name - computed: true, optional: true, required: false
  private _applicationDisplayName?: string; 
  public get applicationDisplayName() {
    return this.getStringAttribute('application_display_name');
  }
  public set applicationDisplayName(value: string) {
    this._applicationDisplayName = value;
  }
  public resetApplicationDisplayName() {
    this._applicationDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDisplayNameInput() {
    return this._applicationDisplayName;
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new SsmCloudConnectorConfigurationAzureConfigurationTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmCloudConnectorConfigurationAzureConfigurationTargets) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // tenant_display_name - computed: true, optional: true, required: false
  private _tenantDisplayName?: string; 
  public get tenantDisplayName() {
    return this.getStringAttribute('tenant_display_name');
  }
  public set tenantDisplayName(value: string) {
    this._tenantDisplayName = value;
  }
  public resetTenantDisplayName() {
    this._tenantDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDisplayNameInput() {
    return this._tenantDisplayName;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects {
  /**
  * The display name of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#project_display_name SsmCloudConnector#project_display_name}
  */
  readonly projectDisplayName?: string;
  /**
  * The GCP project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#project_id SsmCloudConnector#project_id}
  */
  readonly projectId?: string;
}

export function ssmCloudConnectorConfigurationGcpConfigurationTargetsProjectsToTerraform(struct?: SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    project_display_name: cdktn.stringToTerraform(struct!.projectDisplayName),
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function ssmCloudConnectorConfigurationGcpConfigurationTargetsProjectsToHclTerraform(struct?: SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    project_display_name: {
      value: cdktn.stringToHclTerraform(struct!.projectDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectDisplayName = this._projectDisplayName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectDisplayName = undefined;
      this._projectId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectDisplayName = value.projectDisplayName;
      this._projectId = value.projectId;
    }
  }

  // project_display_name - computed: true, optional: true, required: false
  private _projectDisplayName?: string; 
  public get projectDisplayName() {
    return this.getStringAttribute('project_display_name');
  }
  public set projectDisplayName(value: string) {
    this._projectDisplayName = value;
  }
  public resetProjectDisplayName() {
    this._projectDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDisplayNameInput() {
    return this._projectDisplayName;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsList extends cdktn.ComplexList {
  public internalValue? : SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects[] | cdktn.IResolvable

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
  public get(index: number): SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsOutputReference {
    return new SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmCloudConnectorConfigurationGcpConfigurationTargets {
  /**
  * List of GCP projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#projects SsmCloudConnector#projects}
  */
  readonly projects?: SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects[] | cdktn.IResolvable;
}

export function ssmCloudConnectorConfigurationGcpConfigurationTargetsToTerraform(struct?: SsmCloudConnectorConfigurationGcpConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    projects: cdktn.listMapper(ssmCloudConnectorConfigurationGcpConfigurationTargetsProjectsToTerraform, false)(struct!.projects),
  }
}


export function ssmCloudConnectorConfigurationGcpConfigurationTargetsToHclTerraform(struct?: SsmCloudConnectorConfigurationGcpConfigurationTargets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    projects: {
      value: cdktn.listMapperHcl(ssmCloudConnectorConfigurationGcpConfigurationTargetsProjectsToHclTerraform, false)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationGcpConfigurationTargetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmCloudConnectorConfigurationGcpConfigurationTargets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationGcpConfigurationTargets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projects.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projects.internalValue = value.projects;
    }
  }

  // projects - computed: true, optional: true, required: false
  private _projects = new SsmCloudConnectorConfigurationGcpConfigurationTargetsProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: SsmCloudConnectorConfigurationGcpConfigurationTargetsProjects[] | cdktn.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface SsmCloudConnectorConfigurationGcpConfiguration {
  /**
  * The GCP organization ID. Required when Targets is omitted, which targets the entire organization. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#organization_id SsmCloudConnector#organization_id}
  */
  readonly organizationId?: string;
  /**
  * The GCP service account the connector impersonates. Its project is the connector's management project. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#service_account_email SsmCloudConnector#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The targets for the cloud connector. If omitted, the entire organization is targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#targets SsmCloudConnector#targets}
  */
  readonly targets?: SsmCloudConnectorConfigurationGcpConfigurationTargets;
  /**
  * The resource name of the workload identity pool provider that trusts the connector's IAM role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#workload_identity_pool_provider SsmCloudConnector#workload_identity_pool_provider}
  */
  readonly workloadIdentityPoolProvider?: string;
}

export function ssmCloudConnectorConfigurationGcpConfigurationToTerraform(struct?: SsmCloudConnectorConfigurationGcpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    organization_id: cdktn.stringToTerraform(struct!.organizationId),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    targets: ssmCloudConnectorConfigurationGcpConfigurationTargetsToTerraform(struct!.targets),
    workload_identity_pool_provider: cdktn.stringToTerraform(struct!.workloadIdentityPoolProvider),
  }
}


export function ssmCloudConnectorConfigurationGcpConfigurationToHclTerraform(struct?: SsmCloudConnectorConfigurationGcpConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    organization_id: {
      value: cdktn.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targets: {
      value: ssmCloudConnectorConfigurationGcpConfigurationTargetsToHclTerraform(struct!.targets),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmCloudConnectorConfigurationGcpConfigurationTargets",
    },
    workload_identity_pool_provider: {
      value: cdktn.stringToHclTerraform(struct!.workloadIdentityPoolProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationGcpConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmCloudConnectorConfigurationGcpConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._workloadIdentityPoolProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadIdentityPoolProvider = this._workloadIdentityPoolProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfigurationGcpConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationId = undefined;
      this._serviceAccountEmail = undefined;
      this._targets.internalValue = undefined;
      this._workloadIdentityPoolProvider = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationId = value.organizationId;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._targets.internalValue = value.targets;
      this._workloadIdentityPoolProvider = value.workloadIdentityPoolProvider;
    }
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // targets - computed: true, optional: true, required: false
  private _targets = new SsmCloudConnectorConfigurationGcpConfigurationTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmCloudConnectorConfigurationGcpConfigurationTargets) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // workload_identity_pool_provider - computed: true, optional: true, required: false
  private _workloadIdentityPoolProvider?: string; 
  public get workloadIdentityPoolProvider() {
    return this.getStringAttribute('workload_identity_pool_provider');
  }
  public set workloadIdentityPoolProvider(value: string) {
    this._workloadIdentityPoolProvider = value;
  }
  public resetWorkloadIdentityPoolProvider() {
    this._workloadIdentityPoolProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolProviderInput() {
    return this._workloadIdentityPoolProvider;
  }
}
export interface SsmCloudConnectorConfiguration {
  /**
  * Configuration for connecting to Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#azure_configuration SsmCloudConnector#azure_configuration}
  */
  readonly azureConfiguration?: SsmCloudConnectorConfigurationAzureConfiguration;
  /**
  * Configuration for connecting to Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#gcp_configuration SsmCloudConnector#gcp_configuration}
  */
  readonly gcpConfiguration?: SsmCloudConnectorConfigurationGcpConfiguration;
}

export function ssmCloudConnectorConfigurationToTerraform(struct?: SsmCloudConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    azure_configuration: ssmCloudConnectorConfigurationAzureConfigurationToTerraform(struct!.azureConfiguration),
    gcp_configuration: ssmCloudConnectorConfigurationGcpConfigurationToTerraform(struct!.gcpConfiguration),
  }
}


export function ssmCloudConnectorConfigurationToHclTerraform(struct?: SsmCloudConnectorConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    azure_configuration: {
      value: ssmCloudConnectorConfigurationAzureConfigurationToHclTerraform(struct!.azureConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmCloudConnectorConfigurationAzureConfiguration",
    },
    gcp_configuration: {
      value: ssmCloudConnectorConfigurationGcpConfigurationToHclTerraform(struct!.gcpConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SsmCloudConnectorConfigurationGcpConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsmCloudConnectorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SsmCloudConnectorConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureConfiguration = this._azureConfiguration?.internalValue;
    }
    if (this._gcpConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpConfiguration = this._gcpConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmCloudConnectorConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureConfiguration.internalValue = undefined;
      this._gcpConfiguration.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureConfiguration.internalValue = value.azureConfiguration;
      this._gcpConfiguration.internalValue = value.gcpConfiguration;
    }
  }

  // azure_configuration - computed: true, optional: true, required: false
  private _azureConfiguration = new SsmCloudConnectorConfigurationAzureConfigurationOutputReference(this, "azure_configuration");
  public get azureConfiguration() {
    return this._azureConfiguration;
  }
  public putAzureConfiguration(value: SsmCloudConnectorConfigurationAzureConfiguration) {
    this._azureConfiguration.internalValue = value;
  }
  public resetAzureConfiguration() {
    this._azureConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigurationInput() {
    return this._azureConfiguration.internalValue;
  }

  // gcp_configuration - computed: true, optional: true, required: false
  private _gcpConfiguration = new SsmCloudConnectorConfigurationGcpConfigurationOutputReference(this, "gcp_configuration");
  public get gcpConfiguration() {
    return this._gcpConfiguration;
  }
  public putGcpConfiguration(value: SsmCloudConnectorConfigurationGcpConfiguration) {
    this._gcpConfiguration.internalValue = value;
  }
  public resetGcpConfiguration() {
    this._gcpConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConfigurationInput() {
    return this._gcpConfiguration.internalValue;
  }
}
export interface SsmCloudConnectorTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#key SsmCloudConnector#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#value SsmCloudConnector#value}
  */
  readonly value?: string;
}

export function ssmCloudConnectorTagsToTerraform(struct?: SsmCloudConnectorTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ssmCloudConnectorTagsToHclTerraform(struct?: SsmCloudConnectorTags | cdktn.IResolvable): any {
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

export class SsmCloudConnectorTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SsmCloudConnectorTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SsmCloudConnectorTags | cdktn.IResolvable | undefined) {
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

export class SsmCloudConnectorTagsList extends cdktn.ComplexList {
  public internalValue? : SsmCloudConnectorTags[] | cdktn.IResolvable

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
  public get(index: number): SsmCloudConnectorTagsOutputReference {
    return new SsmCloudConnectorTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector}
*/
export class SsmCloudConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ssm_cloud_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SsmCloudConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsmCloudConnector to import
  * @param importFromId The id of the existing SsmCloudConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsmCloudConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ssm_cloud_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_cloud_connector awscc_ssm_cloud_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmCloudConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: SsmCloudConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_cloud_connector',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.111.0',
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
    this._configConnectorArn = config.configConnectorArn;
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._displayName = config.displayName;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_connector_arn - computed: true, optional: false, required: false
  public get cloudConnectorArn() {
    return this.getStringAttribute('cloud_connector_arn');
  }

  // cloud_connector_id - computed: true, optional: false, required: false
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }

  // config_connector_arn - computed: false, optional: false, required: true
  private _configConnectorArn?: string; 
  public get configConnectorArn() {
    return this.getStringAttribute('config_connector_arn');
  }
  public set configConnectorArn(value: string) {
    this._configConnectorArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configConnectorArnInput() {
    return this._configConnectorArn;
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SsmCloudConnectorConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SsmCloudConnectorConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new SsmCloudConnectorTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SsmCloudConnectorTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_connector_arn: cdktn.stringToTerraform(this._configConnectorArn),
      configuration: ssmCloudConnectorConfigurationToTerraform(this._configuration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(ssmCloudConnectorTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_connector_arn: {
        value: cdktn.stringToHclTerraform(this._configConnectorArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: ssmCloudConnectorConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SsmCloudConnectorConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(ssmCloudConnectorTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsmCloudConnectorTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
