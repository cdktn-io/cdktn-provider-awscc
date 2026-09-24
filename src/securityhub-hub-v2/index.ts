/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubHubV2Config extends cdktn.TerraformMetaArguments {
  /**
  * Configuration for the Network Scanning opt-in feature of Security Hub V2. Network Scanning is available in the AWS commercial partition only; specifying this property in another partition, such as AWS GovCloud (US) or China, fails. This property is desired state: if you remove it from a stack that previously set it, the feature is disabled. If a stack has never set it, the feature is left as-is, so a stack that does not manage Network Scanning will not disable it. Network Scanning requires Security Hub V2 to be enabled in the same account and Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2#network_scanning SecurityhubHubV2#network_scanning}
  */
  readonly networkScanning?: SecurityhubHubV2NetworkScanning;
  /**
  * A key-value pair to associate with the Security Hub V2 resource. You can specify a key that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2#tags SecurityhubHubV2#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SecurityhubHubV2NetworkScanning {
  /**
  * Whether the Network Scanning feature is enabled for this account and Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2#status SecurityhubHubV2#status}
  */
  readonly status?: string;
}

export function securityhubHubV2NetworkScanningToTerraform(struct?: SecurityhubHubV2NetworkScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function securityhubHubV2NetworkScanningToHclTerraform(struct?: SecurityhubHubV2NetworkScanning | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubHubV2NetworkScanningOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubHubV2NetworkScanning | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubHubV2NetworkScanning | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
    }
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2 awscc_securityhub_hub_v2}
*/
export class SecurityhubHubV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_hub_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubHubV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubHubV2 to import
  * @param importFromId The id of the existing SecurityhubHubV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubHubV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_hub_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/securityhub_hub_v2 awscc_securityhub_hub_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubHubV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityhubHubV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_hub_v2',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.103.0',
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
    this._networkScanning.internalValue = config.networkScanning;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hub_v2_arn - computed: true, optional: false, required: false
  public get hubV2Arn() {
    return this.getStringAttribute('hub_v2_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_scanning - computed: true, optional: true, required: false
  private _networkScanning = new SecurityhubHubV2NetworkScanningOutputReference(this, "network_scanning");
  public get networkScanning() {
    return this._networkScanning;
  }
  public putNetworkScanning(value: SecurityhubHubV2NetworkScanning) {
    this._networkScanning.internalValue = value;
  }
  public resetNetworkScanning() {
    this._networkScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkScanningInput() {
    return this._networkScanning.internalValue;
  }

  // subscribed_at - computed: true, optional: false, required: false
  public get subscribedAt() {
    return this.getStringAttribute('subscribed_at');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_scanning: securityhubHubV2NetworkScanningToTerraform(this._networkScanning.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_scanning: {
        value: securityhubHubV2NetworkScanningToHclTerraform(this._networkScanning.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubHubV2NetworkScanning",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
