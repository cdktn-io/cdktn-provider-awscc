# `dmsReplicationConfig` Submodule <a name="`dmsReplicationConfig` Submodule" id="@cdktn/provider-awscc.dmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationConfig <a name="DmsReplicationConfig" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config awscc_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compute_config: DmsReplicationConfigComputeConfig,
  replication_config_identifier: str,
  replication_type: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  replication_settings: str = None,
  resource_identifier: str = None,
  supplemental_settings: str = None,
  tags: IResolvable | typing.List[DmsReplicationConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.computeConfig">compute_config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | Configuration parameters for provisioning a AWS DMS Serverless replication. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | A unique identifier of replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationType">replication_type</a></code> | <code>str</code> | The type of AWS DMS Serverless replication to provision using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tableMappings">table_mappings</a></code> | <code>str</code> | JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationSettings">replication_settings</a></code> | <code>str</code> | JSON settings for Servereless replications that are provisioned using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | JSON settings for specifying supplemental data. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.computeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

Configuration parameters for provisioning a AWS DMS Serverless replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationConfigIdentifier"></a>

- *Type:* str

A unique identifier of replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationType"></a>

- *Type:* str

The type of AWS DMS Serverless replication to provision using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tableMappings"></a>

- *Type:* str

JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.targetEndpointArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}

---

##### `replication_settings`<sup>Optional</sup> <a name="replication_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationSettings"></a>

- *Type:* str

JSON settings for Servereless replications that are provisioned using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.resourceIdentifier"></a>

- *Type:* str

A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}

---

##### `supplemental_settings`<sup>Optional</sup> <a name="supplemental_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.supplementalSettings"></a>

- *Type:* str

JSON settings for specifying supplemental data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig">put_compute_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings">reset_replication_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings">reset_supplemental_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_config` <a name="put_compute_config" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig"></a>

```python
def put_compute_config(
  max_capacity_units: typing.Union[int, float],
  availability_zone: str = None,
  dns_name_servers: str = None,
  kms_key_id: str = None,
  min_capacity_units: typing.Union[int, float] = None,
  multi_az: bool | IResolvable = None,
  preferred_maintenance_window: str = None,
  replication_subnet_group_id: str = None,
  vpc_security_group_ids: typing.List[str] = None
) -> None
```

###### `max_capacity_units`<sup>Required</sup> <a name="max_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.maxCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

###### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.dnsNameServers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

###### `min_capacity_units`<sup>Optional</sup> <a name="min_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.minCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

###### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.multiAz"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

###### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

###### `replication_subnet_group_id`<sup>Optional</sup> <a name="replication_subnet_group_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.replicationSubnetGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

###### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DmsReplicationConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]

---

##### `reset_replication_settings` <a name="reset_replication_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings"></a>

```python
def reset_replication_settings() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```

##### `reset_supplemental_settings` <a name="reset_supplemental_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings"></a>

```python
def reset_supplemental_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DmsReplicationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DmsReplicationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsReplicationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig">compute_config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigArn">replication_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList">DmsReplicationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput">compute_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput">replication_config_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput">replication_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput">replication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput">source_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput">supplemental_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput">table_mappings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput">target_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings">replication_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationType">replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig"></a>

```python
compute_config: DmsReplicationConfigComputeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `replication_config_arn`<sup>Required</sup> <a name="replication_config_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigArn"></a>

```python
replication_config_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tags"></a>

```python
tags: DmsReplicationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList">DmsReplicationConfigTagsList</a>

---

##### `compute_config_input`<sup>Optional</sup> <a name="compute_config_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput"></a>

```python
compute_config_input: IResolvable | DmsReplicationConfigComputeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `replication_config_identifier_input`<sup>Optional</sup> <a name="replication_config_identifier_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput"></a>

```python
replication_config_identifier_input: str
```

- *Type:* str

---

##### `replication_settings_input`<sup>Optional</sup> <a name="replication_settings_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput"></a>

```python
replication_settings_input: str
```

- *Type:* str

---

##### `replication_type_input`<sup>Optional</sup> <a name="replication_type_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput"></a>

```python
replication_type_input: str
```

- *Type:* str

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `source_endpoint_arn_input`<sup>Optional</sup> <a name="source_endpoint_arn_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput"></a>

```python
source_endpoint_arn_input: str
```

- *Type:* str

---

##### `supplemental_settings_input`<sup>Optional</sup> <a name="supplemental_settings_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput"></a>

```python
supplemental_settings_input: str
```

- *Type:* str

---

##### `table_mappings_input`<sup>Optional</sup> <a name="table_mappings_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput"></a>

```python
table_mappings_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DmsReplicationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]

---

##### `target_endpoint_arn_input`<sup>Optional</sup> <a name="target_endpoint_arn_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput"></a>

```python
target_endpoint_arn_input: str
```

- *Type:* str

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier"></a>

```python
replication_config_identifier: str
```

- *Type:* str

---

##### `replication_settings`<sup>Required</sup> <a name="replication_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings"></a>

```python
replication_settings: str
```

- *Type:* str

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

---

##### `supplemental_settings`<sup>Required</sup> <a name="supplemental_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings"></a>

```python
supplemental_settings: str
```

- *Type:* str

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationConfigComputeConfig <a name="DmsReplicationConfigComputeConfig" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigComputeConfig(
  max_capacity_units: typing.Union[int, float],
  availability_zone: str = None,
  dns_name_servers: str = None,
  kms_key_id: str = None,
  min_capacity_units: typing.Union[int, float] = None,
  multi_az: bool | IResolvable = None,
  preferred_maintenance_window: str = None,
  replication_subnet_group_id: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits">max_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits">min_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}. |

---

##### `max_capacity_units`<sup>Required</sup> <a name="max_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits"></a>

```python
max_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

##### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

##### `min_capacity_units`<sup>Optional</sup> <a name="min_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits"></a>

```python
min_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

##### `replication_subnet_group_id`<sup>Optional</sup> <a name="replication_subnet_group_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

### DmsReplicationConfigConfig <a name="DmsReplicationConfigConfig" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  compute_config: DmsReplicationConfigComputeConfig,
  replication_config_identifier: str,
  replication_type: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  replication_settings: str = None,
  resource_identifier: str = None,
  supplemental_settings: str = None,
  tags: IResolvable | typing.List[DmsReplicationConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig">compute_config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | Configuration parameters for provisioning a AWS DMS Serverless replication. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | A unique identifier of replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType">replication_type</a></code> | <code>str</code> | The type of AWS DMS Serverless replication to provision using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings">replication_settings</a></code> | <code>str</code> | JSON settings for Servereless replications that are provisioned using this replication configuration. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | JSON settings for specifying supplemental data. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig"></a>

```python
compute_config: DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

Configuration parameters for provisioning a AWS DMS Serverless replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier"></a>

```python
replication_config_identifier: str
```

- *Type:* str

A unique identifier of replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

The type of AWS DMS Serverless replication to provision using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}

---

##### `replication_settings`<sup>Optional</sup> <a name="replication_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings"></a>

```python
replication_settings: str
```

- *Type:* str

JSON settings for Servereless replications that are provisioned using this replication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}

---

##### `supplemental_settings`<sup>Optional</sup> <a name="supplemental_settings" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings"></a>

```python
supplemental_settings: str
```

- *Type:* str

JSON settings for specifying supplemental data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DmsReplicationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}

---

### DmsReplicationConfigTags <a name="DmsReplicationConfigTags" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#key DmsReplicationConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_replication_config#value DmsReplicationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationConfigComputeConfigOutputReference <a name="DmsReplicationConfigComputeConfigOutputReference" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers">reset_dns_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits">reset_min_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetReplicationSubnetGroupId">reset_replication_subnet_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_dns_name_servers` <a name="reset_dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers"></a>

```python
def reset_dns_name_servers() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_min_capacity_units` <a name="reset_min_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits"></a>

```python
def reset_min_capacity_units() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_replication_subnet_group_id` <a name="reset_replication_subnet_group_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetReplicationSubnetGroupId"></a>

```python
def reset_replication_subnet_group_id() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput">dns_name_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput">max_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput">min_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput">multi_az_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput">replication_subnet_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">max_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">min_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz">multi_az</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `dns_name_servers_input`<sup>Optional</sup> <a name="dns_name_servers_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput"></a>

```python
dns_name_servers_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `max_capacity_units_input`<sup>Optional</sup> <a name="max_capacity_units_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput"></a>

```python
max_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_units_input`<sup>Optional</sup> <a name="min_capacity_units_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput"></a>

```python
min_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput"></a>

```python
multi_az_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `replication_subnet_group_id_input`<sup>Optional</sup> <a name="replication_subnet_group_id_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput"></a>

```python
replication_subnet_group_id_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `dns_name_servers`<sup>Required</sup> <a name="dns_name_servers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `max_capacity_units`<sup>Required</sup> <a name="max_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```python
max_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_units`<sup>Required</sup> <a name="min_capacity_units" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```python
min_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```python
multi_az: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsReplicationConfigComputeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---


### DmsReplicationConfigTagsList <a name="DmsReplicationConfigTagsList" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DmsReplicationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DmsReplicationConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>]

---


### DmsReplicationConfigTagsOutputReference <a name="DmsReplicationConfigTagsOutputReference" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DmsReplicationConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsReplicationConfig.DmsReplicationConfigTags">DmsReplicationConfigTags</a>

---



