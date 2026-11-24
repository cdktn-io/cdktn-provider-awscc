/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CognitoUserPoolSessionConfigurationAttachmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Token session settings that apply to every app client in the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#token_session CognitoUserPoolSessionConfigurationAttachment#token_session}
  */
  readonly tokenSession: CognitoUserPoolSessionConfigurationAttachmentTokenSession;
  /**
  * The ID of the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_pool_id CognitoUserPoolSessionConfigurationAttachment#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * Whether server-side user session tracking is enabled for the user pool. Requires the ESSENTIALS or PLUS feature plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#user_session_tracking CognitoUserPoolSessionConfigurationAttachment#user_session_tracking}
  */
  readonly userSessionTracking: string;
}
export interface CognitoUserPoolSessionConfigurationAttachmentTokenSession {
  /**
  * The maximum number of concurrent token sessions per user across all app clients. When a new session would exceed this number, the least recently used session ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#max_per_user CognitoUserPoolSessionConfigurationAttachment#max_per_user}
  */
  readonly maxPerUser: number;
}

export function cognitoUserPoolSessionConfigurationAttachmentTokenSessionToTerraform(struct?: CognitoUserPoolSessionConfigurationAttachmentTokenSession | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_per_user: cdktn.numberToTerraform(struct!.maxPerUser),
  }
}


export function cognitoUserPoolSessionConfigurationAttachmentTokenSessionToHclTerraform(struct?: CognitoUserPoolSessionConfigurationAttachmentTokenSession | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_per_user: {
      value: cdktn.numberToHclTerraform(struct!.maxPerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CognitoUserPoolSessionConfigurationAttachmentTokenSession | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPerUser = this._maxPerUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CognitoUserPoolSessionConfigurationAttachmentTokenSession | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPerUser = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPerUser = value.maxPerUser;
    }
  }

  // max_per_user - computed: false, optional: false, required: true
  private _maxPerUser?: number; 
  public get maxPerUser() {
    return this.getNumberAttribute('max_per_user');
  }
  public set maxPerUser(value: number) {
    this._maxPerUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPerUserInput() {
    return this._maxPerUser;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}
*/
export class CognitoUserPoolSessionConfigurationAttachment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_cognito_user_pool_session_configuration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CognitoUserPoolSessionConfigurationAttachment to import
  * @param importFromId The id of the existing CognitoUserPoolSessionConfigurationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CognitoUserPoolSessionConfigurationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_session_configuration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolSessionConfigurationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolSessionConfigurationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cognito_user_pool_session_configuration_attachment',
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
    this._tokenSession.internalValue = config.tokenSession;
    this._userPoolId = config.userPoolId;
    this._userSessionTracking = config.userSessionTracking;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // token_session - computed: false, optional: false, required: true
  private _tokenSession = new CognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(this, "token_session");
  public get tokenSession() {
    return this._tokenSession;
  }
  public putTokenSession(value: CognitoUserPoolSessionConfigurationAttachmentTokenSession) {
    this._tokenSession.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSessionInput() {
    return this._tokenSession.internalValue;
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

  // user_session_tracking - computed: false, optional: false, required: true
  private _userSessionTracking?: string; 
  public get userSessionTracking() {
    return this.getStringAttribute('user_session_tracking');
  }
  public set userSessionTracking(value: string) {
    this._userSessionTracking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionTrackingInput() {
    return this._userSessionTracking;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      token_session: cognitoUserPoolSessionConfigurationAttachmentTokenSessionToTerraform(this._tokenSession.internalValue),
      user_pool_id: cdktn.stringToTerraform(this._userPoolId),
      user_session_tracking: cdktn.stringToTerraform(this._userSessionTracking),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      token_session: {
        value: cognitoUserPoolSessionConfigurationAttachmentTokenSessionToHclTerraform(this._tokenSession.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CognitoUserPoolSessionConfigurationAttachmentTokenSession",
      },
      user_pool_id: {
        value: cdktn.stringToHclTerraform(this._userPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_session_tracking: {
        value: cdktn.stringToHclTerraform(this._userSessionTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
