# `ec2Volume` Submodule <a name="`ec2Volume` Submodule" id="@cdktn/provider-awscc.ec2Volume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Volume <a name="Ec2Volume" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume awscc_ec2_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2Volume(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_enable_io: bool | IResolvable = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  multi_attach_enabled: bool | IResolvable = None,
  outpost_arn: str = None,
  size: typing.Union[int, float] = None,
  snapshot_id: str = None,
  source_volume_id: str = None,
  tags: IResolvable | typing.List[Ec2VolumeTags] = None,
  throughput: typing.Union[int, float] = None,
  volume_initialization_rate: typing.Union[int, float] = None,
  volume_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.autoEnableIo">auto_enable_io</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume is auto-enabled for I/O operations. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier of the kms-key-long to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.multiAttachEnabled">multi_attach_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether Amazon EBS Multi-Attach is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Outpost on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.sourceVolumeId">source_volume_id</a></code> | <code>str</code> | The ID of the source EBS volume to copy. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]</code> | The tags to apply to the volume during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | The throughput to provision for a volume, with a maximum of 2,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.volumeInitializationRate">volume_initialization_rate</a></code> | <code>typing.Union[int, float]</code> | Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.volumeType">volume_type</a></code> | <code>str</code> | The volume type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_enable_io`<sup>Optional</sup> <a name="auto_enable_io" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.autoEnableIo"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume is auto-enabled for I/O operations.

By default, EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#auto_enable_io Ec2Volume#auto_enable_io}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The ID of the Availability Zone in which to create the volume.

For example, `us-east-1a`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone Ec2Volume#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

The ID of the Availability Zone in which to create the volume.

For example, `use1-az1`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone_id Ec2Volume#availability_zone_id}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume should be encrypted.

The effect of setting the encryption state to `true` depends on the volume origin (new, from a snapshot, or from an existing volume), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the *Amazon EBS User Guide*.
If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#encrypted Ec2Volume#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.iops"></a>

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS) to provision for the volume.

Required for `io1` and `io2` volumes. Optional for `gp3` volumes. Omit for all other volume types.
Valid ranges:

* gp3: `3,000`(*default*)`- 80,000` IOPS
* io1: `100 - 64,000` IOPS
* io2: `100 - 256,000` IOPS

[Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#iops Ec2Volume#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The identifier of the kms-key-long to use for Amazon EBS encryption.

If `KmsKeyId` is specified, the encrypted state must be `true`.
If you omit this property and your account is enabled for encryption by default, or *Encrypted* is set to `true`, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.
Alternatively, if you want to specify a different key, you can specify one of the following:

* Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
* Key alias. Specify the alias for the key, prefixed with `alias/`. For example, for a key with the alias `my_cmk`, use `alias/my_cmk`. Or to specify the aws-managed-key, use `alias/aws/ebs`.
* Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
* Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.

If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#kms_key_id Ec2Volume#kms_key_id}

---

##### `multi_attach_enabled`<sup>Optional</sup> <a name="multi_attach_enabled" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.multiAttachEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether Amazon EBS Multi-Attach is enabled.

CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#multi_attach_enabled Ec2Volume#multi_attach_enabled}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.outpostArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Outpost on which to create the volume.

If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an AWS Region with an instance on an AWS outpost, or the other way around.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#outpost_arn Ec2Volume#outpost_arn}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the volume, in GiBs.

* Required for new empty volumes.
* Optional for volumes created from snapshots and volume copies. In this case, the size defaults to the size of the snapshot or source volume. You can optionally specify a size that is equal to or larger than the size of the source snapshot or volume.

Supported volume sizes:

* gp2: `1 - 16,384` GiB
* gp3: `1 - 65,536` GiB
* io1: `4 - 16,384` GiB
* io2: `4 - 65,536` GiB
* st1 and sc1: `125 - 16,384` GiB
* standard: `1 - 1024` GiB

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#size Ec2Volume#size}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.snapshotId"></a>

- *Type:* str

The snapshot from which to create the volume.

Only specify to create a volume from a snapshot. To create a new empty volume, omit this parameter and specify a value for `Size` instead. To create a volume copy, omit this parameter and specify `SourceVolumeId` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#snapshot_id Ec2Volume#snapshot_id}

---

##### `source_volume_id`<sup>Optional</sup> <a name="source_volume_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.sourceVolumeId"></a>

- *Type:* str

The ID of the source EBS volume to copy.

When specified, the volume is created as an exact copy of the specified volume. Only specify to create a volume copy. To create a new empty volume or to create a volume from a snapshot, omit this parameter,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#source_volume_id Ec2Volume#source_volume_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]

The tags to apply to the volume during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#tags Ec2Volume#tags}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

The throughput to provision for a volume, with a maximum of 2,000 MiB/s.

This parameter is valid only for `gp3` volumes. The default value is 125.
Valid Range: Minimum value of 125. Maximum value of 2000.
The maximum ratio of throughput to IOPS is 0.25 MiB/s per IOPS. For example, a volume with 3,000 IOPS can have a maximum throughput of 750 MiB/s (3,000 x 0.25).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#throughput Ec2Volume#throughput}

---

##### `volume_initialization_rate`<sup>Optional</sup> <a name="volume_initialization_rate" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.volumeInitializationRate"></a>

- *Type:* typing.Union[int, float]

Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume.

This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
This parameter is supported only for volumes created from snapshots. Omit this parameter if:

* You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
  If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
* You want to create a volume that is initialized at the default rate.

For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
Valid range: 100 - 300 MiB/s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_initialization_rate Ec2Volume#volume_initialization_rate}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.Initializer.parameter.volumeType"></a>

- *Type:* str

The volume type.

This parameter can be one of the following values:

* General Purpose SSD: `gp2` | `gp3`
* Provisioned IOPS SSD: `io1` | `io2`
* Throughput Optimized HDD: `st1`
* Cold HDD: `sc1`
* Magnetic: `standard`

Throughput Optimized HDD (`st1`) and Cold HDD (`sc1`) volumes can't be used as boot volumes.
For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
Default: `gp2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_type Ec2Volume#volume_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAutoEnableIo">reset_auto_enable_io</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetMultiAttachEnabled">reset_multi_attach_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSourceVolumeId">reset_source_volume_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeInitializationRate">reset_volume_initialization_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VolumeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]

---

##### `reset_auto_enable_io` <a name="reset_auto_enable_io" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAutoEnableIo"></a>

```python
def reset_auto_enable_io() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_multi_attach_enabled` <a name="reset_multi_attach_enabled" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetMultiAttachEnabled"></a>

```python
def reset_multi_attach_enabled() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_source_volume_id` <a name="reset_source_volume_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetSourceVolumeId"></a>

```python
def reset_source_volume_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_initialization_rate` <a name="reset_volume_initialization_rate" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeInitializationRate"></a>

```python
def reset_volume_initialization_rate() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Volume resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2Volume.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2Volume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2Volume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2Volume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Volume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Volume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Volume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Volume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList">Ec2VolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIoInput">auto_enable_io_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabledInput">multi_attach_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeIdInput">source_volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRateInput">volume_initialization_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIo">auto_enable_io</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabled">multi_attach_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeId">source_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRate">volume_initialization_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tags"></a>

```python
tags: Ec2VolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList">Ec2VolumeTagsList</a>

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `auto_enable_io_input`<sup>Optional</sup> <a name="auto_enable_io_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIoInput"></a>

```python
auto_enable_io_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `multi_attach_enabled_input`<sup>Optional</sup> <a name="multi_attach_enabled_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabledInput"></a>

```python
multi_attach_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `source_volume_id_input`<sup>Optional</sup> <a name="source_volume_id_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeIdInput"></a>

```python
source_volume_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_initialization_rate_input`<sup>Optional</sup> <a name="volume_initialization_rate_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRateInput"></a>

```python
volume_initialization_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `auto_enable_io`<sup>Required</sup> <a name="auto_enable_io" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.autoEnableIo"></a>

```python
auto_enable_io: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `multi_attach_enabled`<sup>Required</sup> <a name="multi_attach_enabled" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.multiAttachEnabled"></a>

```python
multi_attach_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `source_volume_id`<sup>Required</sup> <a name="source_volume_id" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.sourceVolumeId"></a>

```python
source_volume_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_initialization_rate`<sup>Required</sup> <a name="volume_initialization_rate" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeInitializationRate"></a>

```python
volume_initialization_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Volume.Ec2Volume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VolumeConfig <a name="Ec2VolumeConfig" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2VolumeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_enable_io: bool | IResolvable = None,
  availability_zone: str = None,
  availability_zone_id: str = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  multi_attach_enabled: bool | IResolvable = None,
  outpost_arn: str = None,
  size: typing.Union[int, float] = None,
  snapshot_id: str = None,
  source_volume_id: str = None,
  tags: IResolvable | typing.List[Ec2VolumeTags] = None,
  throughput: typing.Union[int, float] = None,
  volume_initialization_rate: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.autoEnableIo">auto_enable_io</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume is auto-enabled for I/O operations. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | The ID of the Availability Zone in which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | The number of I/O operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The identifier of the kms-key-long to use for Amazon EBS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.multiAttachEnabled">multi_attach_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether Amazon EBS Multi-Attach is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Outpost on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the volume, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot from which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.sourceVolumeId">source_volume_id</a></code> | <code>str</code> | The ID of the source EBS volume to copy. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]</code> | The tags to apply to the volume during creation. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | The throughput to provision for a volume, with a maximum of 2,000 MiB/s. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeInitializationRate">volume_initialization_rate</a></code> | <code>typing.Union[int, float]</code> | Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeType">volume_type</a></code> | <code>str</code> | The volume type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_enable_io`<sup>Optional</sup> <a name="auto_enable_io" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.autoEnableIo"></a>

```python
auto_enable_io: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume is auto-enabled for I/O operations.

By default, EBS disables I/O to the volume from attached EC2 instances when it determines that a volume's data is potentially inconsistent. If the consistency of the volume is not a concern, and you prefer that the volume be made available immediately if it's impaired, you can configure the volume to automatically enable I/O.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#auto_enable_io Ec2Volume#auto_enable_io}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The ID of the Availability Zone in which to create the volume.

For example, `us-east-1a`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone Ec2Volume#availability_zone}

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

The ID of the Availability Zone in which to create the volume.

For example, `use1-az1`.
Either `AvailabilityZone` or `AvailabilityZoneId` must be specified, but not both.
If you are creating a volume copy, omit this parameter. The volume copy is created in the same Availability Zone as the source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#availability_zone_id Ec2Volume#availability_zone_id}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the volume should be encrypted.

The effect of setting the encryption state to `true` depends on the volume origin (new, from a snapshot, or from an existing volume), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/ebs/latest/userguide/work-with-ebs-encr.html#encryption-by-default) in the *Amazon EBS User Guide*.
If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#encrypted Ec2Volume#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of I/O operations per second (IOPS) to provision for the volume.

Required for `io1` and `io2` volumes. Optional for `gp3` volumes. Omit for all other volume types.
Valid ranges:

* gp3: `3,000`(*default*)`- 80,000` IOPS
* io1: `100 - 64,000` IOPS
* io2: `100 - 256,000` IOPS

[Instances built on the Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html) can support up to 256,000 IOPS. Other instances can support up to 32,000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#iops Ec2Volume#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The identifier of the kms-key-long to use for Amazon EBS encryption.

If `KmsKeyId` is specified, the encrypted state must be `true`.
If you omit this property and your account is enabled for encryption by default, or *Encrypted* is set to `true`, then the volume is encrypted using the default key specified for your account. If your account does not have a default key, then the volume is encrypted using the aws-managed-key.
Alternatively, if you want to specify a different key, you can specify one of the following:

* Key ID. For example, 1234abcd-12ab-34cd-56ef-1234567890ab.
* Key alias. Specify the alias for the key, prefixed with `alias/`. For example, for a key with the alias `my_cmk`, use `alias/my_cmk`. Or to specify the aws-managed-key, use `alias/aws/ebs`.
* Key ARN. For example, arn:aws:kms:us-east-1:012345678910:key/1234abcd-12ab-34cd-56ef-1234567890ab.
* Alias ARN. For example, arn:aws:kms:us-east-1:012345678910:alias/ExampleAlias.

If you are creating a volume copy, omit this parameter. The volume is automatically encrypted with the same KMS key as the source volume. You can't copy unencrypted volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#kms_key_id Ec2Volume#kms_key_id}

---

##### `multi_attach_enabled`<sup>Optional</sup> <a name="multi_attach_enabled" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.multiAttachEnabled"></a>

```python
multi_attach_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether Amazon EBS Multi-Attach is enabled.

CFNlong does not currently support updating a single-attach volume to be multi-attach enabled, updating a multi-attach enabled volume to be single-attach, or updating the size or number of I/O operations per second (IOPS) of a multi-attach enabled volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#multi_attach_enabled Ec2Volume#multi_attach_enabled}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Outpost on which to create the volume.

If you intend to use a volume with an instance running on an outpost, then you must create the volume on the same outpost as the instance. You can't use a volume created in an AWS Region with an instance on an AWS outpost, or the other way around.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#outpost_arn Ec2Volume#outpost_arn}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the volume, in GiBs.

* Required for new empty volumes.
* Optional for volumes created from snapshots and volume copies. In this case, the size defaults to the size of the snapshot or source volume. You can optionally specify a size that is equal to or larger than the size of the source snapshot or volume.

Supported volume sizes:

* gp2: `1 - 16,384` GiB
* gp3: `1 - 65,536` GiB
* io1: `4 - 16,384` GiB
* io2: `4 - 65,536` GiB
* st1 and sc1: `125 - 16,384` GiB
* standard: `1 - 1024` GiB

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#size Ec2Volume#size}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot from which to create the volume.

Only specify to create a volume from a snapshot. To create a new empty volume, omit this parameter and specify a value for `Size` instead. To create a volume copy, omit this parameter and specify `SourceVolumeId` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#snapshot_id Ec2Volume#snapshot_id}

---

##### `source_volume_id`<sup>Optional</sup> <a name="source_volume_id" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.sourceVolumeId"></a>

```python
source_volume_id: str
```

- *Type:* str

The ID of the source EBS volume to copy.

When specified, the volume is created as an exact copy of the specified volume. Only specify to create a volume copy. To create a new empty volume or to create a volume from a snapshot, omit this parameter,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#source_volume_id Ec2Volume#source_volume_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]

The tags to apply to the volume during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#tags Ec2Volume#tags}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The throughput to provision for a volume, with a maximum of 2,000 MiB/s.

This parameter is valid only for `gp3` volumes. The default value is 125.
Valid Range: Minimum value of 125. Maximum value of 2000.
The maximum ratio of throughput to IOPS is 0.25 MiB/s per IOPS. For example, a volume with 3,000 IOPS can have a maximum throughput of 750 MiB/s (3,000 x 0.25).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#throughput Ec2Volume#throughput}

---

##### `volume_initialization_rate`<sup>Optional</sup> <a name="volume_initialization_rate" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeInitializationRate"></a>

```python
volume_initialization_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Amazon EBS Provisioned Rate for Volume Initialization (volume initialization rate), in MiB/s, at which to download the snapshot blocks from Amazon S3 to the volume.

This is also known as *volume initialization*. Specifying a volume initialization rate ensures that the volume is initialized at a predictable and consistent rate after creation.
This parameter is supported only for volumes created from snapshots. Omit this parameter if:

* You want to create the volume using fast snapshot restore. You must specify a snapshot that is enabled for fast snapshot restore. In this case, the volume is fully initialized at creation.
  If you specify a snapshot that is enabled for fast snapshot restore and a volume initialization rate, the volume will be initialized at the specified rate instead of fast snapshot restore.
* You want to create a volume that is initialized at the default rate.

For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EC2 User Guide*.
Valid range: 100 - 300 MiB/s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_initialization_rate Ec2Volume#volume_initialization_rate}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeConfig.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

The volume type.

This parameter can be one of the following values:

* General Purpose SSD: `gp2` | `gp3`
* Provisioned IOPS SSD: `io1` | `io2`
* Throughput Optimized HDD: `st1`
* Cold HDD: `sc1`
* Magnetic: `standard`

Throughput Optimized HDD (`st1`) and Cold HDD (`sc1`) volumes can't be used as boot volumes.
For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
Default: `gp2`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#volume_type Ec2Volume#volume_type}

---

### Ec2VolumeTags <a name="Ec2VolumeTags" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2VolumeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#key Ec2Volume#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_volume#value Ec2Volume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VolumeTagsList <a name="Ec2VolumeTagsList" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2VolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VolumeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>]

---


### Ec2VolumeTagsOutputReference <a name="Ec2VolumeTagsOutputReference" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_volume

ec2Volume.Ec2VolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Volume.Ec2VolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VolumeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Volume.Ec2VolumeTags">Ec2VolumeTags</a>

---



