/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EksCertificateAuthorityConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the EKS cluster that the certificate authority belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_certificate_authority#cluster_name EksCertificateAuthority#cluster_name}
  */
  readonly clusterName: string;
}
export interface EksCertificateAuthorityScheduledEvents {
}

export function eksCertificateAuthorityScheduledEventsToTerraform(struct?: EksCertificateAuthorityScheduledEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eksCertificateAuthorityScheduledEventsToHclTerraform(struct?: EksCertificateAuthorityScheduledEvents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EksCertificateAuthorityScheduledEventsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCertificateAuthorityScheduledEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCertificateAuthorityScheduledEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // final_auto_activation - computed: true, optional: false, required: false
  public get finalAutoActivation() {
    return this.getStringAttribute('final_auto_activation');
  }

  // first_auto_activation - computed: true, optional: false, required: false
  public get firstAutoActivation() {
    return this.getStringAttribute('first_auto_activation');
  }
}
export interface EksCertificateAuthorityValidity {
}

export function eksCertificateAuthorityValidityToTerraform(struct?: EksCertificateAuthorityValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function eksCertificateAuthorityValidityToHclTerraform(struct?: EksCertificateAuthorityValidity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class EksCertificateAuthorityValidityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EksCertificateAuthorityValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EksCertificateAuthorityValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_certificate_authority awscc_eks_certificate_authority}
*/
export class EksCertificateAuthority extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_eks_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EksCertificateAuthority resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EksCertificateAuthority to import
  * @param importFromId The id of the existing EksCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EksCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_eks_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_certificate_authority awscc_eks_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: EksCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_eks_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.98.0',
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
    this._clusterName = config.clusterName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_at - computed: true, optional: false, required: false
  public get activatedAt() {
    return this.getStringAttribute('activated_at');
  }

  // activated_by - computed: true, optional: false, required: false
  public get activatedBy() {
    return this.getStringAttribute('activated_by');
  }

  // certificate_authority_id - computed: true, optional: false, required: false
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // distribution_status - computed: true, optional: false, required: false
  public get distributionStatus() {
    return this.getStringAttribute('distribution_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rollback_available - computed: true, optional: false, required: false
  public get rollbackAvailable() {
    return this.getBooleanAttribute('rollback_available');
  }

  // scheduled_events - computed: true, optional: false, required: false
  private _scheduledEvents = new EksCertificateAuthorityScheduledEventsOutputReference(this, "scheduled_events");
  public get scheduledEvents() {
    return this._scheduledEvents;
  }

  // signing_status - computed: true, optional: false, required: false
  public get signingStatus() {
    return this.getStringAttribute('signing_status');
  }

  // validity - computed: true, optional: false, required: false
  private _validity = new EksCertificateAuthorityValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktn.stringToTerraform(this._clusterName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
