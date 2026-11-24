/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DocdbDbInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}
  */
  readonly caCertificateIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}
  */
  readonly certificateRotationRestart?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}
  */
  readonly dbInstanceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}
  */
  readonly enablePerformanceInsights?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}
  */
  readonly tags?: DocdbDbInstanceTags[] | cdktn.IResolvable;
}
export interface DocdbDbInstanceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#key DocdbDbInstance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#value DocdbDbInstance#value}
  */
  readonly value?: string;
}

export function docdbDbInstanceTagsToTerraform(struct?: DocdbDbInstanceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function docdbDbInstanceTagsToHclTerraform(struct?: DocdbDbInstanceTags | cdktn.IResolvable): any {
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

export class DocdbDbInstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DocdbDbInstanceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DocdbDbInstanceTags | cdktn.IResolvable | undefined) {
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

export class DocdbDbInstanceTagsList extends cdktn.ComplexList {
  public internalValue? : DocdbDbInstanceTags[] | cdktn.IResolvable

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
  public get(index: number): DocdbDbInstanceTagsOutputReference {
    return new DocdbDbInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance awscc_docdb_db_instance}
*/
export class DocdbDbInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_docdb_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DocdbDbInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocdbDbInstance to import
  * @param importFromId The id of the existing DocdbDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocdbDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_docdb_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance awscc_docdb_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocdbDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DocdbDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_docdb_db_instance',
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
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._caCertificateIdentifier = config.caCertificateIdentifier;
    this._certificateRotationRestart = config.certificateRotationRestart;
    this._dbClusterIdentifier = config.dbClusterIdentifier;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceIdentifier = config.dbInstanceIdentifier;
    this._enablePerformanceInsights = config.enablePerformanceInsights;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_minor_version_upgrade - computed: true, optional: true, required: false
  private _autoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get autoMinorVersionUpgrade() {
    return this.getBooleanAttribute('auto_minor_version_upgrade');
  }
  public set autoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._autoMinorVersionUpgrade = value;
  }
  public resetAutoMinorVersionUpgrade() {
    this._autoMinorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMinorVersionUpgradeInput() {
    return this._autoMinorVersionUpgrade;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // ca_certificate_identifier - computed: true, optional: true, required: false
  private _caCertificateIdentifier?: string; 
  public get caCertificateIdentifier() {
    return this.getStringAttribute('ca_certificate_identifier');
  }
  public set caCertificateIdentifier(value: string) {
    this._caCertificateIdentifier = value;
  }
  public resetCaCertificateIdentifier() {
    this._caCertificateIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdentifierInput() {
    return this._caCertificateIdentifier;
  }

  // certificate_rotation_restart - computed: true, optional: true, required: false
  private _certificateRotationRestart?: boolean | cdktn.IResolvable; 
  public get certificateRotationRestart() {
    return this.getBooleanAttribute('certificate_rotation_restart');
  }
  public set certificateRotationRestart(value: boolean | cdktn.IResolvable) {
    this._certificateRotationRestart = value;
  }
  public resetCertificateRotationRestart() {
    this._certificateRotationRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRotationRestartInput() {
    return this._certificateRotationRestart;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_identifier - computed: true, optional: true, required: false
  private _dbInstanceIdentifier?: string; 
  public get dbInstanceIdentifier() {
    return this.getStringAttribute('db_instance_identifier');
  }
  public set dbInstanceIdentifier(value: string) {
    this._dbInstanceIdentifier = value;
  }
  public resetDbInstanceIdentifier() {
    this._dbInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdentifierInput() {
    return this._dbInstanceIdentifier;
  }

  // enable_performance_insights - computed: true, optional: true, required: false
  private _enablePerformanceInsights?: boolean | cdktn.IResolvable; 
  public get enablePerformanceInsights() {
    return this.getBooleanAttribute('enable_performance_insights');
  }
  public set enablePerformanceInsights(value: boolean | cdktn.IResolvable) {
    this._enablePerformanceInsights = value;
  }
  public resetEnablePerformanceInsights() {
    this._enablePerformanceInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerformanceInsightsInput() {
    return this._enablePerformanceInsights;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // preferred_maintenance_window - computed: true, optional: true, required: false
  private _preferredMaintenanceWindow?: string; 
  public get preferredMaintenanceWindow() {
    return this.getStringAttribute('preferred_maintenance_window');
  }
  public set preferredMaintenanceWindow(value: string) {
    this._preferredMaintenanceWindow = value;
  }
  public resetPreferredMaintenanceWindow() {
    this._preferredMaintenanceWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceWindowInput() {
    return this._preferredMaintenanceWindow;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DocdbDbInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DocdbDbInstanceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      ca_certificate_identifier: cdktn.stringToTerraform(this._caCertificateIdentifier),
      certificate_rotation_restart: cdktn.booleanToTerraform(this._certificateRotationRestart),
      db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
      db_instance_class: cdktn.stringToTerraform(this._dbInstanceClass),
      db_instance_identifier: cdktn.stringToTerraform(this._dbInstanceIdentifier),
      enable_performance_insights: cdktn.booleanToTerraform(this._enablePerformanceInsights),
      preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
      tags: cdktn.listMapper(docdbDbInstanceTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_minor_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_zone: {
        value: cdktn.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_identifier: {
        value: cdktn.stringToHclTerraform(this._caCertificateIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_rotation_restart: {
        value: cdktn.booleanToHclTerraform(this._certificateRotationRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_cluster_identifier: {
        value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_class: {
        value: cdktn.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_identifier: {
        value: cdktn.stringToHclTerraform(this._dbInstanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_performance_insights: {
        value: cdktn.booleanToHclTerraform(this._enablePerformanceInsights),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preferred_maintenance_window: {
        value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(docdbDbInstanceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DocdbDbInstanceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
