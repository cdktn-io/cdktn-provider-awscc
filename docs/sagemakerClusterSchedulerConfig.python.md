# `sagemakerClusterSchedulerConfig` Submodule <a name="`sagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerClusterSchedulerConfig <a name="SagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_arn: str,
  name: str,
  scheduler_config: SagemakerClusterSchedulerConfigSchedulerConfig,
  description: str = None,
  tags: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.clusterArn">cluster_arn</a></code> | <code>str</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.schedulerConfig">scheduler_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]</code> | Tags of the cluster policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.clusterArn"></a>

- *Type:* str

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.name"></a>

- *Type:* str

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `scheduler_config`<sup>Required</sup> <a name="scheduler_config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.schedulerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.description"></a>

- *Type:* str

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig">put_scheduler_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scheduler_config` <a name="put_scheduler_config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig"></a>

```python
def put_scheduler_config(
  fair_share: str = None,
  idle_resource_sharing: str = None,
  priority_classes: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses] = None
) -> None
```

###### `fair_share`<sup>Optional</sup> <a name="fair_share" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.fairShare"></a>

- *Type:* str

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

###### `idle_resource_sharing`<sup>Optional</sup> <a name="idle_resource_sharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.idleResourceSharing"></a>

- *Type:* str

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

###### `priority_classes`<sup>Optional</sup> <a name="priority_classes" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.priorityClasses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">cluster_scheduler_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">cluster_scheduler_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">cluster_scheduler_config_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig">scheduler_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput">scheduler_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_scheduler_config_arn`<sup>Required</sup> <a name="cluster_scheduler_config_arn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```python
cluster_scheduler_config_arn: str
```

- *Type:* str

---

##### `cluster_scheduler_config_id`<sup>Required</sup> <a name="cluster_scheduler_config_id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```python
cluster_scheduler_config_id: str
```

- *Type:* str

---

##### `cluster_scheduler_config_version`<sup>Required</sup> <a name="cluster_scheduler_config_version" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```python
cluster_scheduler_config_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scheduler_config`<sup>Required</sup> <a name="scheduler_config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```python
scheduler_config: SagemakerClusterSchedulerConfigSchedulerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags"></a>

```python
tags: SagemakerClusterSchedulerConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a>

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scheduler_config_input`<sup>Optional</sup> <a name="scheduler_config_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput"></a>

```python
scheduler_config_input: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterSchedulerConfigConfig <a name="SagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_arn: str,
  name: str,
  scheduler_config: SagemakerClusterSchedulerConfigSchedulerConfig,
  description: str = None,
  tags: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn">cluster_arn</a></code> | <code>str</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name">name</a></code> | <code>str</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig">scheduler_config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description">description</a></code> | <code>str</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]</code> | Tags of the cluster policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `scheduler_config`<sup>Required</sup> <a name="scheduler_config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig"></a>

```python
scheduler_config: SagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

### SagemakerClusterSchedulerConfigSchedulerConfig <a name="SagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig(
  fair_share: str = None,
  idle_resource_sharing: str = None,
  priority_classes: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare">fair_share</a></code> | <code>str</code> | When enabled, entities borrow idle compute based on assigned FairShareWeight. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing">idle_resource_sharing</a></code> | <code>str</code> | Configuration for sharing idle compute resources across entities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses">priority_classes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]</code> | List of priority class configurations. |

---

##### `fair_share`<sup>Optional</sup> <a name="fair_share" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare"></a>

```python
fair_share: str
```

- *Type:* str

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

##### `idle_resource_sharing`<sup>Optional</sup> <a name="idle_resource_sharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing"></a>

```python
idle_resource_sharing: str
```

- *Type:* str

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

##### `priority_classes`<sup>Optional</sup> <a name="priority_classes" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses"></a>

```python
priority_classes: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses(
  name: str = None,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name">name</a></code> | <code>str</code> | Name of the priority class. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Weight of the priority class. Range 0-100, default 0. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the priority class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Weight of the priority class. Range 0-100, default 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}

---

### SagemakerClusterSchedulerConfigTags <a name="SagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses">put_priority_classes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare">reset_fair_share</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing">reset_idle_resource_sharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses">reset_priority_classes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_priority_classes` <a name="put_priority_classes" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses"></a>

```python
def put_priority_classes(
  value: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]

---

##### `reset_fair_share` <a name="reset_fair_share" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare"></a>

```python
def reset_fair_share() -> None
```

##### `reset_idle_resource_sharing` <a name="reset_idle_resource_sharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing"></a>

```python
def reset_idle_resource_sharing() -> None
```

##### `reset_priority_classes` <a name="reset_priority_classes" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses"></a>

```python
def reset_priority_classes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">priority_classes</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput">fair_share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput">idle_resource_sharing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput">priority_classes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">fair_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">idle_resource_sharing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `priority_classes`<sup>Required</sup> <a name="priority_classes" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```python
priority_classes: SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `fair_share_input`<sup>Optional</sup> <a name="fair_share_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput"></a>

```python
fair_share_input: str
```

- *Type:* str

---

##### `idle_resource_sharing_input`<sup>Optional</sup> <a name="idle_resource_sharing_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput"></a>

```python
idle_resource_sharing_input: str
```

- *Type:* str

---

##### `priority_classes_input`<sup>Optional</sup> <a name="priority_classes_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput"></a>

```python
priority_classes_input: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]

---

##### `fair_share`<sup>Required</sup> <a name="fair_share" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```python
fair_share: str
```

- *Type:* str

---

##### `idle_resource_sharing`<sup>Required</sup> <a name="idle_resource_sharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```python
idle_resource_sharing: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>]

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_weight` <a name="reset_weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### SagemakerClusterSchedulerConfigTagsList <a name="SagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SagemakerClusterSchedulerConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SagemakerClusterSchedulerConfigTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>]

---


### SagemakerClusterSchedulerConfigTagsOutputReference <a name="SagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import sagemaker_cluster_scheduler_config

sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SagemakerClusterSchedulerConfigTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>

---



