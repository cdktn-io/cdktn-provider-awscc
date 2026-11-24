/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoUserPoolClientSessionConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the app client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#client_id CognitoUserPoolClientSessionConfigurationAttachment#client_id}
  */
  readonly clientId: string;
  /**
  * Managed login single sign-on session settings for the app client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#sso_session CognitoUserPoolClientSessionConfigurationAttachment#sso_session}
  */
  readonly ssoSession: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession;
  /**
  * The ID of the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#user_pool_id CognitoUserPoolClientSessionConfigurationAttachment#user_pool_id}
  */
  readonly userPoolId: string;
}
export interface CognitoUserPoolClientSessionConfigurationAttachmentSsoSession {
  /**
  * The maximum time in minutes since the last authentication during which this app client can reuse an existing managed login SSO session without asking the user to sign in again. 0 means the app client always asks the user to sign in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#max_validity_minutes CognitoUserPoolClientSessionConfigurationAttachment#max_validity_minutes}
  */
  readonly maxValidityMinutes: number;
}

export function cognitoUserPoolClientSessionConfigurationAttachmentSsoSessionToTerraform(struct?: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_validity_minutes: cdktn.numberToTerraform(struct!.maxValidityMinutes),
  }
}


export function cognitoUserPoolClientSessionConfigurationAttachmentSsoSessionToHclTerraform(struct?: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_validity_minutes: {
      value: cdktn.numberToHclTerraform(struct!.maxValidityMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolClientSessionConfigurationAttachmentSsoSession | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValidityMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValidityMinutes = this._maxValidityMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxValidityMinutes = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxValidityMinutes = value.maxValidityMinutes;
    }
  }

  // max_validity_minutes - computed: false, optional: false, required: true
  private _maxValidityMinutes?: number; 
  public get maxValidityMinutes() {
    return this.getNumberAttribute('max_validity_minutes');
  }
  public set maxValidityMinutes(value: number) {
    this._maxValidityMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValidityMinutesInput() {
    return this._maxValidityMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment}
*/
export class CognitoUserPoolClientSessionConfigurationAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_client_session_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoUserPoolClientSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolClientSessionConfigurationAttachment to import
  * @param importFromId The id of the existing CognitoUserPoolClientSessionConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolClientSessionConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_client_session_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_client_session_configuration_attachment awscc_cognito_user_pool_client_session_configuration_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolClientSessionConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolClientSessionConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_client_session_configuration_attachment',
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
    this._clientId = config.clientId;
    this._ssoSession.internalValue = config.ssoSession;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sso_session - computed: false, optional: false, required: true
  private _ssoSession = new CognitoUserPoolClientSessionConfigurationAttachmentSsoSessionOutputReference(this, "sso_session");
  public get ssoSession() {
    return this._ssoSession;
  }
  public putSsoSession(value: CognitoUserPoolClientSessionConfigurationAttachmentSsoSession) {
    this._ssoSession.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSessionInput() {
    return this._ssoSession.internalValue;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktn.stringToTerraform(this._clientId),
      sso_session: cognitoUserPoolClientSessionConfigurationAttachmentSsoSessionToTerraform(this._ssoSession.internalValue),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_session: {
        value: cognitoUserPoolClientSessionConfigurationAttachmentSsoSessionToHclTerraform(this._ssoSession.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolClientSessionConfigurationAttachmentSsoSession",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
