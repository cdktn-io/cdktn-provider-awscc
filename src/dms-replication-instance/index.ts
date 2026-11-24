/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DmsReplicationInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * The amount of storage (in gigabytes) to be initially allocated for the replication instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allocated_storage DmsReplicationInstance#allocated_storage}
  */
  readonly allocatedStorage?: number;
  /**
  * Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.
  * 
  * This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}
  */
  readonly allowMajorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to `true`.
  * 
  * Default: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}
  */
  readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
  /**
  * The Availability Zone that the replication instance will be created in.
  * 
  * The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#availability_zone DmsReplicationInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: `"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#dns_name_servers DmsReplicationInstance#dns_name_servers}
  */
  readonly dnsNameServers?: string;
  /**
  * The engine version number of the replication instance.
  * 
  * If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#engine_version DmsReplicationInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * An AWS KMS key identifier that is used to encrypt the data on the replication instance.
  * 
  * If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
  * 
  * AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#kms_key_id DmsReplicationInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#multi_az DmsReplicationInstance#multi_az}
  */
  readonly multiAz?: boolean | cdktn.IResolvable;
  /**
  * The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#network_type DmsReplicationInstance#network_type}
  */
  readonly networkType?: string;
  /**
  * The weekly time range during which system maintenance can occur, in UTC.
  * 
  * Format: `ddd:hh24:mi-ddd:hh24:mi`
  * 
  * Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.
  * 
  * Valid days (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`
  * 
  * Constraints: Minimum 30-minute window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}
  */
  readonly preferredMaintenanceWindow?: string;
  /**
  * Specifies the accessibility options for the replication instance. A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#publicly_accessible DmsReplicationInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktn.IResolvable;
  /**
  * The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the AWS Database Migration Service User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_class DmsReplicationInstance#replication_instance_class}
  */
  readonly replicationInstanceClass: string;
  /**
  * The replication instance identifier. This parameter is stored as a lowercase string.
  * 
  * Constraints:
  * - Must contain 1-63 alphanumeric characters or hyphens.
  * - First character must be a letter.
  * - Can't end with a hyphen or contain two consecutive hyphens.
  * 
  * Example: `myrepinstance`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_instance_identifier DmsReplicationInstance#replication_instance_identifier}
  */
  readonly replicationInstanceIdentifier?: string;
  /**
  * A subnet group to associate with the replication instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#replication_subnet_group_identifier DmsReplicationInstance#replication_subnet_group_identifier}
  */
  readonly replicationSubnetGroupIdentifier?: string;
  /**
  * A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#resource_identifier DmsReplicationInstance#resource_identifier}
  */
  readonly resourceIdentifier?: string;
  /**
  * One or more tags to be assigned to the replication instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#tags DmsReplicationInstance#tags}
  */
  readonly tags?: DmsReplicationInstanceTags[] | cdktn.IResolvable;
  /**
  * Specifies the virtual private cloud (VPC) security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds?: string[];
}
export interface DmsReplicationInstanceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#key DmsReplicationInstance#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#value DmsReplicationInstance#value}
  */
  readonly value?: string;
}

export function dmsReplicationInstanceTagsToTerraform(struct?: DmsReplicationInstanceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function dmsReplicationInstanceTagsToHclTerraform(struct?: DmsReplicationInstanceTags | cdktn.IResolvable): any {
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

export class DmsReplicationInstanceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DmsReplicationInstanceTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DmsReplicationInstanceTags | cdktn.IResolvable | undefined) {
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

export class DmsReplicationInstanceTagsList extends cdktn.ComplexList {
  public internalValue? : DmsReplicationInstanceTags[] | cdktn.IResolvable

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
  public get(index: number): DmsReplicationInstanceTagsOutputReference {
    return new DmsReplicationInstanceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance awscc_dms_replication_instance}
*/
export class DmsReplicationInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_dms_replication_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DmsReplicationInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsReplicationInstance to import
  * @param importFromId The id of the existing DmsReplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsReplicationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_replication_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/dms_replication_instance awscc_dms_replication_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsReplicationInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_dms_replication_instance',
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
    this._allocatedStorage = config.allocatedStorage;
    this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
    this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
    this._availabilityZone = config.availabilityZone;
    this._dnsNameServers = config.dnsNameServers;
    this._engineVersion = config.engineVersion;
    this._kmsKeyId = config.kmsKeyId;
    this._multiAz = config.multiAz;
    this._networkType = config.networkType;
    this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
    this._publiclyAccessible = config.publiclyAccessible;
    this._replicationInstanceClass = config.replicationInstanceClass;
    this._replicationInstanceIdentifier = config.replicationInstanceIdentifier;
    this._replicationSubnetGroupIdentifier = config.replicationSubnetGroupIdentifier;
    this._resourceIdentifier = config.resourceIdentifier;
    this._tags.internalValue = config.tags;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: true, optional: true, required: false
  private _allocatedStorage?: number; 
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  public resetAllocatedStorage() {
    this._allocatedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage;
  }

  // allow_major_version_upgrade - computed: true, optional: true, required: false
  private _allowMajorVersionUpgrade?: boolean | cdktn.IResolvable; 
  public get allowMajorVersionUpgrade() {
    return this.getBooleanAttribute('allow_major_version_upgrade');
  }
  public set allowMajorVersionUpgrade(value: boolean | cdktn.IResolvable) {
    this._allowMajorVersionUpgrade = value;
  }
  public resetAllowMajorVersionUpgrade() {
    this._allowMajorVersionUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMajorVersionUpgradeInput() {
    return this._allowMajorVersionUpgrade;
  }

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

  // dns_name_servers - computed: true, optional: true, required: false
  private _dnsNameServers?: string; 
  public get dnsNameServers() {
    return this.getStringAttribute('dns_name_servers');
  }
  public set dnsNameServers(value: string) {
    this._dnsNameServers = value;
  }
  public resetDnsNameServers() {
    this._dnsNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktn.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktn.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktn.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // replication_instance_arn - computed: true, optional: false, required: false
  public get replicationInstanceArn() {
    return this.getStringAttribute('replication_instance_arn');
  }

  // replication_instance_class - computed: false, optional: false, required: true
  private _replicationInstanceClass?: string; 
  public get replicationInstanceClass() {
    return this.getStringAttribute('replication_instance_class');
  }
  public set replicationInstanceClass(value: string) {
    this._replicationInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceClassInput() {
    return this._replicationInstanceClass;
  }

  // replication_instance_identifier - computed: true, optional: true, required: false
  private _replicationInstanceIdentifier?: string; 
  public get replicationInstanceIdentifier() {
    return this.getStringAttribute('replication_instance_identifier');
  }
  public set replicationInstanceIdentifier(value: string) {
    this._replicationInstanceIdentifier = value;
  }
  public resetReplicationInstanceIdentifier() {
    this._replicationInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInstanceIdentifierInput() {
    return this._replicationInstanceIdentifier;
  }

  // replication_instance_private_ip_addresses - computed: true, optional: false, required: false
  public get replicationInstancePrivateIpAddresses() {
    return this.getStringAttribute('replication_instance_private_ip_addresses');
  }

  // replication_instance_public_ip_addresses - computed: true, optional: false, required: false
  public get replicationInstancePublicIpAddresses() {
    return this.getStringAttribute('replication_instance_public_ip_addresses');
  }

  // replication_subnet_group_identifier - computed: true, optional: true, required: false
  private _replicationSubnetGroupIdentifier?: string; 
  public get replicationSubnetGroupIdentifier() {
    return this.getStringAttribute('replication_subnet_group_identifier');
  }
  public set replicationSubnetGroupIdentifier(value: string) {
    this._replicationSubnetGroupIdentifier = value;
  }
  public resetReplicationSubnetGroupIdentifier() {
    this._replicationSubnetGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSubnetGroupIdentifierInput() {
    return this._replicationSubnetGroupIdentifier;
  }

  // resource_identifier - computed: true, optional: true, required: false
  private _resourceIdentifier?: string; 
  public get resourceIdentifier() {
    return this.getStringAttribute('resource_identifier');
  }
  public set resourceIdentifier(value: string) {
    this._resourceIdentifier = value;
  }
  public resetResourceIdentifier() {
    this._resourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdentifierInput() {
    return this._resourceIdentifier;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new DmsReplicationInstanceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DmsReplicationInstanceTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_security_group_ids - computed: true, optional: true, required: false
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return this.getListAttribute('vpc_security_group_ids');
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  public resetVpcSecurityGroupIds() {
    this._vpcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: cdktn.numberToTerraform(this._allocatedStorage),
      allow_major_version_upgrade: cdktn.booleanToTerraform(this._allowMajorVersionUpgrade),
      auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
      availability_zone: cdktn.stringToTerraform(this._availabilityZone),
      dns_name_servers: cdktn.stringToTerraform(this._dnsNameServers),
      engine_version: cdktn.stringToTerraform(this._engineVersion),
      kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
      multi_az: cdktn.booleanToTerraform(this._multiAz),
      network_type: cdktn.stringToTerraform(this._networkType),
      preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
      publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
      replication_instance_class: cdktn.stringToTerraform(this._replicationInstanceClass),
      replication_instance_identifier: cdktn.stringToTerraform(this._replicationInstanceIdentifier),
      replication_subnet_group_identifier: cdktn.stringToTerraform(this._replicationSubnetGroupIdentifier),
      resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
      tags: cdktn.listMapper(dmsReplicationInstanceTagsToTerraform, false)(this._tags.internalValue),
      vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_storage: {
        value: cdktn.numberToHclTerraform(this._allocatedStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_major_version_upgrade: {
        value: cdktn.booleanToHclTerraform(this._allowMajorVersionUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      dns_name_servers: {
        value: cdktn.stringToHclTerraform(this._dnsNameServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktn.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktn.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_az: {
        value: cdktn.booleanToHclTerraform(this._multiAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type: {
        value: cdktn.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_maintenance_window: {
        value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicly_accessible: {
        value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replication_instance_class: {
        value: cdktn.stringToHclTerraform(this._replicationInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_instance_identifier: {
        value: cdktn.stringToHclTerraform(this._replicationInstanceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_subnet_group_identifier: {
        value: cdktn.stringToHclTerraform(this._replicationSubnetGroupIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_identifier: {
        value: cdktn.stringToHclTerraform(this._resourceIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(dmsReplicationInstanceTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsReplicationInstanceTagsList",
      },
      vpc_security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
