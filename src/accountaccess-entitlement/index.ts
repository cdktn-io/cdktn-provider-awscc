/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AccountaccessEntitlementConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ARN of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#application_arn AccountaccessEntitlement#application_arn}
  */
  readonly applicationArn: string;
  /**
  * The entitlement details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#entitlement AccountaccessEntitlement#entitlement}
  */
  readonly entitlement: AccountaccessEntitlementEntitlement;
}
export interface AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter {
  /**
  * The ID of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#group_id AccountaccessEntitlement#group_id}
  */
  readonly groupId?: string;
  /**
  * The ID of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#user_id AccountaccessEntitlement#user_id}
  */
  readonly userId?: string;
}

export function accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_id: cdktn.stringToTerraform(struct!.groupId),
    user_id: cdktn.stringToTerraform(struct!.userId),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktn.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._userId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._userId = value.userId;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AccountaccessEntitlementEntitlementPrincipalRolePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#identity_center AccountaccessEntitlement#identity_center}
  */
  readonly identityCenter: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter;
}

export function accountaccessEntitlementEntitlementPrincipalRolePrincipalToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_center: accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToTerraform(struct!.identityCenter),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRolePrincipalToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_center: {
      value: accountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterToHclTerraform(struct!.identityCenter),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityCenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCenter = this._identityCenter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityCenter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityCenter.internalValue = value.identityCenter;
    }
  }

  // identity_center - computed: false, optional: false, required: true
  private _identityCenter = new AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(this, "identity_center");
  public get identityCenter() {
    return this._identityCenter;
  }
  public putIdentityCenter(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipalIdentityCenter) {
    this._identityCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCenterInput() {
    return this._identityCenter.internalValue;
  }
}
export interface AccountaccessEntitlementEntitlementPrincipalRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal AccountaccessEntitlement#principal}
  */
  readonly principal: AccountaccessEntitlementEntitlementPrincipalRolePrincipal;
  /**
  * The ARN of the IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#role_arn AccountaccessEntitlement#role_arn}
  */
  readonly roleArn: string;
}

export function accountaccessEntitlementEntitlementPrincipalRoleToTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal: accountaccessEntitlementEntitlementPrincipalRolePrincipalToTerraform(struct!.principal),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
  }
}


export function accountaccessEntitlementEntitlementPrincipalRoleToHclTerraform(struct?: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal: {
      value: accountaccessEntitlementEntitlementPrincipalRolePrincipalToHclTerraform(struct!.principal),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRolePrincipal",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementPrincipalRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountaccessEntitlementEntitlementPrincipalRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principal.internalValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principal.internalValue = value.principal;
      this._roleArn = value.roleArn;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // principal - computed: false, optional: false, required: true
  private _principal = new AccountaccessEntitlementEntitlementPrincipalRolePrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: AccountaccessEntitlementEntitlementPrincipalRolePrincipal) {
    this._principal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
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
}
export interface AccountaccessEntitlementEntitlement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#principal_role AccountaccessEntitlement#principal_role}
  */
  readonly principalRole: AccountaccessEntitlementEntitlementPrincipalRole;
}

export function accountaccessEntitlementEntitlementToTerraform(struct?: AccountaccessEntitlementEntitlement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    principal_role: accountaccessEntitlementEntitlementPrincipalRoleToTerraform(struct!.principalRole),
  }
}


export function accountaccessEntitlementEntitlementToHclTerraform(struct?: AccountaccessEntitlementEntitlement | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    principal_role: {
      value: accountaccessEntitlementEntitlementPrincipalRoleToHclTerraform(struct!.principalRole),
      isBlock: true,
      type: "struct",
      storageClassType: "AccountaccessEntitlementEntitlementPrincipalRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountaccessEntitlementEntitlementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountaccessEntitlementEntitlement | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principalRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalRole = this._principalRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountaccessEntitlementEntitlement | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principalRole.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principalRole.internalValue = value.principalRole;
    }
  }

  // principal_role - computed: false, optional: false, required: true
  private _principalRole = new AccountaccessEntitlementEntitlementPrincipalRoleOutputReference(this, "principal_role");
  public get principalRole() {
    return this._principalRole;
  }
  public putPrincipalRole(value: AccountaccessEntitlementEntitlementPrincipalRole) {
    this._principalRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalRoleInput() {
    return this._principalRole.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement awscc_accountaccess_entitlement}
*/
export class AccountaccessEntitlement extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_accountaccess_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AccountaccessEntitlement resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountaccessEntitlement to import
  * @param importFromId The id of the existing AccountaccessEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountaccessEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_accountaccess_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/accountaccess_entitlement awscc_accountaccess_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountaccessEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: AccountaccessEntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_accountaccess_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.99.0',
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
    this._applicationArn = config.applicationArn;
    this._entitlement.internalValue = config.entitlement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // entitlement - computed: false, optional: false, required: true
  private _entitlement = new AccountaccessEntitlementEntitlementOutputReference(this, "entitlement");
  public get entitlement() {
    return this._entitlement;
  }
  public putEntitlement(value: AccountaccessEntitlementEntitlement) {
    this._entitlement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementInput() {
    return this._entitlement.internalValue;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktn.stringToTerraform(this._applicationArn),
      entitlement: accountaccessEntitlementEntitlementToTerraform(this._entitlement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktn.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitlement: {
        value: accountaccessEntitlementEntitlementToHclTerraform(this._entitlement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountaccessEntitlementEntitlement",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
