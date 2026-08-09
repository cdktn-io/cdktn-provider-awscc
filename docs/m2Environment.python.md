# `m2Environment` Submodule <a name="`m2Environment` Submodule" id="@cdktn/provider-awscc.m2Environment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### M2Environment <a name="M2Environment" id="@cdktn/provider-awscc.m2Environment.M2Environment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment awscc_m2_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2Environment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_type: str,
  instance_type: str,
  name: str,
  description: str = None,
  engine_version: str = None,
  high_availability_config: M2EnvironmentHighAvailabilityConfig = None,
  kms_key_id: str = None,
  network_type: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  storage_configurations: IResolvable | typing.List[M2EnvironmentStorageConfigurations] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.engineType">engine_type</a></code> | <code>str</code> | The target platform for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The type of instance underlying the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | The version of the runtime engine for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.highAvailabilityConfig">high_availability_config</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | Defines the details of a high availability configuration. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Configures a desired maintenance window for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the environment is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The list of security groups for the VPC associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.storageConfigurations">storage_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]</code> | The storage configurations defined for the runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The unique identifiers of the subnets assigned to this runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags associated to this environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.engineType"></a>

- *Type:* str

The target platform for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.instanceType"></a>

- *Type:* str

The type of instance underlying the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.name"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#name M2Environment#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.description"></a>

- *Type:* str

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#description M2Environment#description}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.engineVersion"></a>

- *Type:* str

The version of the runtime engine for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}

---

##### `high_availability_config`<sup>Optional</sup> <a name="high_availability_config" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.highAvailabilityConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

Defines the details of a high availability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Configures a desired maintenance window for the environment.

If you do not provide a value, a random system-generated value will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.publiclyAccessible"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the environment is publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The list of security groups for the VPC associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}

---

##### `storage_configurations`<sup>Optional</sup> <a name="storage_configurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.storageConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]

The storage configurations defined for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#storage_configurations M2Environment#storage_configurations}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The unique identifiers of the subnets assigned to this runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.m2Environment.M2Environment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Tags associated to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#tags M2Environment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig">put_high_availability_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations">put_storage_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetHighAvailabilityConfig">reset_high_availability_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetStorageConfigurations">reset_storage_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2Environment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.m2Environment.M2Environment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.m2Environment.M2Environment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.m2Environment.M2Environment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.m2Environment.M2Environment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.m2Environment.M2Environment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.m2Environment.M2Environment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.m2Environment.M2Environment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.m2Environment.M2Environment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2Environment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.m2Environment.M2Environment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_high_availability_config` <a name="put_high_availability_config" id="@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig"></a>

```python
def put_high_availability_config(
  desired_capacity: typing.Union[int, float] = None
) -> None
```

###### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.m2Environment.M2Environment.putHighAvailabilityConfig.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}.

---

##### `put_storage_configurations` <a name="put_storage_configurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations"></a>

```python
def put_storage_configurations(
  value: IResolvable | typing.List[M2EnvironmentStorageConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.m2Environment.M2Environment.putStorageConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_high_availability_config` <a name="reset_high_availability_config" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetHighAvailabilityConfig"></a>

```python
def reset_high_availability_config() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_storage_configurations` <a name="reset_storage_configurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetStorageConfigurations"></a>

```python
def reset_storage_configurations() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.m2Environment.M2Environment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2Environment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.m2Environment.M2Environment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2Environment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2Environment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.m2Environment.M2Environment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2Environment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a M2Environment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the M2Environment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing M2Environment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the M2Environment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentArn">environment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfig">high_availability_config</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference">M2EnvironmentHighAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurations">storage_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList">M2EnvironmentStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineTypeInput">engine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfigInput">high_availability_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurationsInput">storage_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineType">engine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `environment_arn`<sup>Required</sup> <a name="environment_arn" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentArn"></a>

```python
environment_arn: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `high_availability_config`<sup>Required</sup> <a name="high_availability_config" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfig"></a>

```python
high_availability_config: M2EnvironmentHighAvailabilityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference">M2EnvironmentHighAvailabilityConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_configurations`<sup>Required</sup> <a name="storage_configurations" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurations"></a>

```python
storage_configurations: M2EnvironmentStorageConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList">M2EnvironmentStorageConfigurationsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_type_input`<sup>Optional</sup> <a name="engine_type_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineTypeInput"></a>

```python
engine_type_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `high_availability_config_input`<sup>Optional</sup> <a name="high_availability_config_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.highAvailabilityConfigInput"></a>

```python
high_availability_config_input: IResolvable | M2EnvironmentHighAvailabilityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_configurations_input`<sup>Optional</sup> <a name="storage_configurations_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.storageConfigurationsInput"></a>

```python
storage_configurations_input: IResolvable | typing.List[M2EnvironmentStorageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2Environment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.m2Environment.M2Environment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### M2EnvironmentConfig <a name="M2EnvironmentConfig" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  engine_type: str,
  instance_type: str,
  name: str,
  description: str = None,
  engine_version: str = None,
  high_availability_config: M2EnvironmentHighAvailabilityConfig = None,
  kms_key_id: str = None,
  network_type: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  storage_configurations: IResolvable | typing.List[M2EnvironmentStorageConfigurations] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineType">engine_type</a></code> | <code>str</code> | The target platform for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The type of instance underlying the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.description">description</a></code> | <code>str</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | The version of the runtime engine for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig">high_availability_config</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | Defines the details of a high availability configuration. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Configures a desired maintenance window for the environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the environment is publicly accessible. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The list of security groups for the VPC associated with this environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.storageConfigurations">storage_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]</code> | The storage configurations defined for the runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The unique identifiers of the subnets assigned to this runtime environment. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags associated to this environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `engine_type`<sup>Required</sup> <a name="engine_type" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineType"></a>

```python
engine_type: str
```

- *Type:* str

The target platform for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_type M2Environment#engine_type}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The type of instance underlying the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#instance_type M2Environment#instance_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#name M2Environment#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#description M2Environment#description}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

The version of the runtime engine for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#engine_version M2Environment#engine_version}

---

##### `high_availability_config`<sup>Optional</sup> <a name="high_availability_config" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.highAvailabilityConfig"></a>

```python
high_availability_config: M2EnvironmentHighAvailabilityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

Defines the details of a high availability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#high_availability_config M2Environment#high_availability_config}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting environment-related resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#kms_key_id M2Environment#kms_key_id}

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#network_type M2Environment#network_type}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Configures a desired maintenance window for the environment.

If you do not provide a value, a random system-generated value will be assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#preferred_maintenance_window M2Environment#preferred_maintenance_window}

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the environment is publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#publicly_accessible M2Environment#publicly_accessible}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of security groups for the VPC associated with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#security_group_ids M2Environment#security_group_ids}

---

##### `storage_configurations`<sup>Optional</sup> <a name="storage_configurations" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.storageConfigurations"></a>

```python
storage_configurations: IResolvable | typing.List[M2EnvironmentStorageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]

The storage configurations defined for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#storage_configurations M2Environment#storage_configurations}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The unique identifiers of the subnets assigned to this runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#subnet_ids M2Environment#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Tags associated to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#tags M2Environment#tags}

---

### M2EnvironmentHighAvailabilityConfig <a name="M2EnvironmentHighAvailabilityConfig" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentHighAvailabilityConfig(
  desired_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}. |

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#desired_capacity M2Environment#desired_capacity}.

---

### M2EnvironmentStorageConfigurations <a name="M2EnvironmentStorageConfigurations" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurations(
  efs: M2EnvironmentStorageConfigurationsEfs = None,
  fsx: M2EnvironmentStorageConfigurationsFsx = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.efs">efs</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | Defines the storage configuration for an Amazon EFS file system. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.fsx">fsx</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | Defines the storage configuration for an Amazon FSx file system. |

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.efs"></a>

```python
efs: M2EnvironmentStorageConfigurationsEfs
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

Defines the storage configuration for an Amazon EFS file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#efs M2Environment#efs}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations.property.fsx"></a>

```python
fsx: M2EnvironmentStorageConfigurationsFsx
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

Defines the storage configuration for an Amazon FSx file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#fsx M2Environment#fsx}

---

### M2EnvironmentStorageConfigurationsEfs <a name="M2EnvironmentStorageConfigurationsEfs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsEfs(
  file_system_id: str = None,
  mount_point: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The file system identifier. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.mountPoint">mount_point</a></code> | <code>str</code> | The mount point for the file system. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

### M2EnvironmentStorageConfigurationsFsx <a name="M2EnvironmentStorageConfigurationsFsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsFsx(
  file_system_id: str = None,
  mount_point: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.fileSystemId">file_system_id</a></code> | <code>str</code> | The file system identifier. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.mountPoint">mount_point</a></code> | <code>str</code> | The mount point for the file system. |

---

##### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

##### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

## Classes <a name="Classes" id="Classes"></a>

### M2EnvironmentHighAvailabilityConfigOutputReference <a name="M2EnvironmentHighAvailabilityConfigOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | M2EnvironmentHighAvailabilityConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentHighAvailabilityConfig">M2EnvironmentHighAvailabilityConfig</a>

---


### M2EnvironmentStorageConfigurationsEfsOutputReference <a name="M2EnvironmentStorageConfigurationsEfsOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | M2EnvironmentStorageConfigurationsEfs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

---


### M2EnvironmentStorageConfigurationsFsxOutputReference <a name="M2EnvironmentStorageConfigurationsFsxOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetFileSystemId">reset_file_system_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetMountPoint">reset_mount_point</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_system_id` <a name="reset_file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetFileSystemId"></a>

```python
def reset_file_system_id() -> None
```

##### `reset_mount_point` <a name="reset_mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.resetMountPoint"></a>

```python
def reset_mount_point() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPointInput">mount_point_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPoint">mount_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `mount_point_input`<sup>Optional</sup> <a name="mount_point_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPointInput"></a>

```python
mount_point_input: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `mount_point`<sup>Required</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.mountPoint"></a>

```python
mount_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | M2EnvironmentStorageConfigurationsFsx
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

---


### M2EnvironmentStorageConfigurationsList <a name="M2EnvironmentStorageConfigurationsList" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> M2EnvironmentStorageConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[M2EnvironmentStorageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>]

---


### M2EnvironmentStorageConfigurationsOutputReference <a name="M2EnvironmentStorageConfigurationsOutputReference" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import m2_environment

m2Environment.M2EnvironmentStorageConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs">put_efs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx">put_fsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetEfs">reset_efs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetFsx">reset_fsx</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_efs` <a name="put_efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs"></a>

```python
def put_efs(
  file_system_id: str = None,
  mount_point: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs.parameter.fileSystemId"></a>

- *Type:* str

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

###### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putEfs.parameter.mountPoint"></a>

- *Type:* str

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

##### `put_fsx` <a name="put_fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx"></a>

```python
def put_fsx(
  file_system_id: str = None,
  mount_point: str = None
) -> None
```

###### `file_system_id`<sup>Optional</sup> <a name="file_system_id" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx.parameter.fileSystemId"></a>

- *Type:* str

The file system identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#file_system_id M2Environment#file_system_id}

---

###### `mount_point`<sup>Optional</sup> <a name="mount_point" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.putFsx.parameter.mountPoint"></a>

- *Type:* str

The mount point for the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/m2_environment#mount_point M2Environment#mount_point}

---

##### `reset_efs` <a name="reset_efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetEfs"></a>

```python
def reset_efs() -> None
```

##### `reset_fsx` <a name="reset_fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.resetFsx"></a>

```python
def reset_fsx() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efs">efs</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference">M2EnvironmentStorageConfigurationsEfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsx">fsx</a></code> | <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference">M2EnvironmentStorageConfigurationsFsxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efsInput">efs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsxInput">fsx_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `efs`<sup>Required</sup> <a name="efs" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efs"></a>

```python
efs: M2EnvironmentStorageConfigurationsEfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfsOutputReference">M2EnvironmentStorageConfigurationsEfsOutputReference</a>

---

##### `fsx`<sup>Required</sup> <a name="fsx" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsx"></a>

```python
fsx: M2EnvironmentStorageConfigurationsFsxOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsxOutputReference">M2EnvironmentStorageConfigurationsFsxOutputReference</a>

---

##### `efs_input`<sup>Optional</sup> <a name="efs_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.efsInput"></a>

```python
efs_input: IResolvable | M2EnvironmentStorageConfigurationsEfs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsEfs">M2EnvironmentStorageConfigurationsEfs</a>

---

##### `fsx_input`<sup>Optional</sup> <a name="fsx_input" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.fsxInput"></a>

```python
fsx_input: IResolvable | M2EnvironmentStorageConfigurationsFsx
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsFsx">M2EnvironmentStorageConfigurationsFsx</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | M2EnvironmentStorageConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.m2Environment.M2EnvironmentStorageConfigurations">M2EnvironmentStorageConfigurations</a>

---



