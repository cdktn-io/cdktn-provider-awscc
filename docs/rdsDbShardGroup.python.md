# `rdsDbShardGroup` Submodule <a name="`rdsDbShardGroup` Submodule" id="@cdktn/provider-awscc.rdsDbShardGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbShardGroup <a name="RdsDbShardGroup" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group awscc_rds_db_shard_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_cluster_identifier: str,
  max_acu: typing.Union[int, float],
  compute_redundancy: typing.Union[int, float] = None,
  db_shard_group_identifier: str = None,
  min_acu: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[RdsDbShardGroupTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The name of the primary DB cluster for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.maxAcu">max_acu</a></code> | <code>typing.Union[int, float]</code> | The maximum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.computeRedundancy">compute_redundancy</a></code> | <code>typing.Union[int, float]</code> | Specifies whether to create standby standby DB data access shard for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbShardGroupIdentifier">db_shard_group_identifier</a></code> | <code>str</code> | The name of the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.minAcu">min_acu</a></code> | <code>typing.Union[int, float]</code> | The minimum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB shard group is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

The name of the primary DB cluster for the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#db_cluster_identifier RdsDbShardGroup#db_cluster_identifier}

---

##### `max_acu`<sup>Required</sup> <a name="max_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.maxAcu"></a>

- *Type:* typing.Union[int, float]

The maximum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#max_acu RdsDbShardGroup#max_acu}

---

##### `compute_redundancy`<sup>Optional</sup> <a name="compute_redundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.computeRedundancy"></a>

- *Type:* typing.Union[int, float]

Specifies whether to create standby standby DB data access shard for the DB shard group.

Valid values are the following:

* 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
* 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
* 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#compute_redundancy RdsDbShardGroup#compute_redundancy}

---

##### `db_shard_group_identifier`<sup>Optional</sup> <a name="db_shard_group_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.dbShardGroupIdentifier"></a>

- *Type:* str

The name of the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#db_shard_group_identifier RdsDbShardGroup#db_shard_group_identifier}

---

##### `min_acu`<sup>Optional</sup> <a name="min_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.minAcu"></a>

- *Type:* typing.Union[int, float]

The minimum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#min_acu RdsDbShardGroup#min_acu}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB shard group is publicly accessible.

When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.

If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#publicly_accessible RdsDbShardGroup#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#tags RdsDbShardGroup#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy">reset_compute_redundancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier">reset_db_shard_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu">reset_min_acu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbShardGroupTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]

---

##### `reset_compute_redundancy` <a name="reset_compute_redundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetComputeRedundancy"></a>

```python
def reset_compute_redundancy() -> None
```

##### `reset_db_shard_group_identifier` <a name="reset_db_shard_group_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetDbShardGroupIdentifier"></a>

```python
def reset_db_shard_group_identifier() -> None
```

##### `reset_min_acu` <a name="reset_min_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetMinAcu"></a>

```python
def reset_min_acu() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbShardGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbShardGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbShardGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbShardGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId">db_shard_group_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput">compute_redundancy_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput">db_shard_group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput">max_acu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput">min_acu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy">compute_redundancy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier">db_shard_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu">max_acu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu">min_acu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_shard_group_resource_id`<sup>Required</sup> <a name="db_shard_group_resource_id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupResourceId"></a>

```python
db_shard_group_resource_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tags"></a>

```python
tags: RdsDbShardGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList">RdsDbShardGroupTagsList</a>

---

##### `compute_redundancy_input`<sup>Optional</sup> <a name="compute_redundancy_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancyInput"></a>

```python
compute_redundancy_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `db_shard_group_identifier_input`<sup>Optional</sup> <a name="db_shard_group_identifier_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifierInput"></a>

```python
db_shard_group_identifier_input: str
```

- *Type:* str

---

##### `max_acu_input`<sup>Optional</sup> <a name="max_acu_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcuInput"></a>

```python
max_acu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_acu_input`<sup>Optional</sup> <a name="min_acu_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcuInput"></a>

```python
min_acu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbShardGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]

---

##### `compute_redundancy`<sup>Required</sup> <a name="compute_redundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.computeRedundancy"></a>

```python
compute_redundancy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `db_shard_group_identifier`<sup>Required</sup> <a name="db_shard_group_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.dbShardGroupIdentifier"></a>

```python
db_shard_group_identifier: str
```

- *Type:* str

---

##### `max_acu`<sup>Required</sup> <a name="max_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.maxAcu"></a>

```python
max_acu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_acu`<sup>Required</sup> <a name="min_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.minAcu"></a>

```python
min_acu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbShardGroupConfig <a name="RdsDbShardGroupConfig" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_cluster_identifier: str,
  max_acu: typing.Union[int, float],
  compute_redundancy: typing.Union[int, float] = None,
  db_shard_group_identifier: str = None,
  min_acu: typing.Union[int, float] = None,
  publicly_accessible: bool | IResolvable = None,
  tags: IResolvable | typing.List[RdsDbShardGroupTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The name of the primary DB cluster for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu">max_acu</a></code> | <code>typing.Union[int, float]</code> | The maximum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy">compute_redundancy</a></code> | <code>typing.Union[int, float]</code> | Specifies whether to create standby standby DB data access shard for the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier">db_shard_group_identifier</a></code> | <code>str</code> | The name of the DB shard group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu">min_acu</a></code> | <code>typing.Union[int, float]</code> | The minimum capacity of the DB shard group in Aurora capacity units (ACUs). |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the DB shard group is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

The name of the primary DB cluster for the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#db_cluster_identifier RdsDbShardGroup#db_cluster_identifier}

---

##### `max_acu`<sup>Required</sup> <a name="max_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.maxAcu"></a>

```python
max_acu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#max_acu RdsDbShardGroup#max_acu}

---

##### `compute_redundancy`<sup>Optional</sup> <a name="compute_redundancy" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.computeRedundancy"></a>

```python
compute_redundancy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies whether to create standby standby DB data access shard for the DB shard group.

Valid values are the following:

* 0 - Creates a DB shard group without a standby DB data access shard. This is the default value.
* 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ).
* 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#compute_redundancy RdsDbShardGroup#compute_redundancy}

---

##### `db_shard_group_identifier`<sup>Optional</sup> <a name="db_shard_group_identifier" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.dbShardGroupIdentifier"></a>

```python
db_shard_group_identifier: str
```

- *Type:* str

The name of the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#db_shard_group_identifier RdsDbShardGroup#db_shard_group_identifier}

---

##### `min_acu`<sup>Optional</sup> <a name="min_acu" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.minAcu"></a>

```python
min_acu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum capacity of the DB shard group in Aurora capacity units (ACUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#min_acu RdsDbShardGroup#min_acu}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the DB shard group is publicly accessible.

When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the default VPC in the target Region doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.

If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:

* If the subnets are part of a VPC that doesn?t have an internet gateway attached to it, the DB shard group is private.
* If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#publicly_accessible RdsDbShardGroup#publicly_accessible}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbShardGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#tags RdsDbShardGroup#tags}

---

### RdsDbShardGroupTags <a name="RdsDbShardGroupTags" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroupTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key">key</a></code> | <code>str</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value">value</a></code> | <code>str</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.key"></a>

```python
key: str
```

- *Type:* str

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#key RdsDbShardGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags.property.value"></a>

```python
value: str
```

- *Type:* str

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rds_db_shard_group#value RdsDbShardGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbShardGroupTagsList <a name="RdsDbShardGroupTagsList" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbShardGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbShardGroupTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>]

---


### RdsDbShardGroupTagsOutputReference <a name="RdsDbShardGroupTagsOutputReference" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_shard_group

rdsDbShardGroup.RdsDbShardGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbShardGroupTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbShardGroup.RdsDbShardGroupTags">RdsDbShardGroupTags</a>

---



