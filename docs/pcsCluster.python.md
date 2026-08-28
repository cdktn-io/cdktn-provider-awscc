# `pcsCluster` Submodule <a name="`pcsCluster` Submodule" id="@cdktn/provider-awscc.pcsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcsCluster <a name="PcsCluster" id="@cdktn/provider-awscc.pcsCluster.PcsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster awscc_pcs_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  networking: PcsClusterNetworking,
  scheduler: PcsClusterScheduler,
  size: str,
  name: str = None,
  slurm_configuration: PcsClusterSlurmConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | The networking configuration for the cluster's control plane. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scheduler">scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | The cluster management and job scheduling software associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.size">size</a></code> | <code>str</code> | The size of the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | The name that identifies the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.slurmConfiguration">slurm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | 1 or more tags added to the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

The networking configuration for the cluster's control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#networking PcsCluster#networking}

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.scheduler"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

The cluster management and job scheduling software associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#scheduler PcsCluster#scheduler}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.size"></a>

- *Type:* str

The size of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#size PcsCluster#size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.name"></a>

- *Type:* str

The name that identifies the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#name PcsCluster#name}

---

##### `slurm_configuration`<sup>Optional</sup> <a name="slurm_configuration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.slurmConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_configuration PcsCluster#slurm_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#tags PcsCluster#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler">put_scheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration">put_slurm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration">reset_slurm_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_networking` <a name="put_networking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking"></a>

```python
def put_networking(
  network_type: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking.parameter.networkType"></a>

- *Type:* str

The IP of the cluster (IPV4 or IPV6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#network_type PcsCluster#network_type}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#security_group_ids PcsCluster#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putNetworking.parameter.subnetIds"></a>

- *Type:* typing.List[str]

The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources.

The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#subnet_ids PcsCluster#subnet_ids}

---

##### `put_scheduler` <a name="put_scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler"></a>

```python
def put_scheduler(
  type: str,
  version: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler.parameter.type"></a>

- *Type:* str

The software AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#type PcsCluster#type}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putScheduler.parameter.version"></a>

- *Type:* str

The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#version PcsCluster#version}

---

##### `put_slurm_configuration` <a name="put_slurm_configuration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration"></a>

```python
def put_slurm_configuration(
  accounting: PcsClusterSlurmConfigurationAccounting = None,
  auth_key: PcsClusterSlurmConfigurationAuthKey = None,
  cgroup_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings] = None,
  jwt_auth: PcsClusterSlurmConfigurationJwtAuth = None,
  scale_down_idle_time_in_seconds: typing.Union[int, float] = None,
  slurm_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings] = None,
  slurmdbd_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings] = None,
  slurm_rest: PcsClusterSlurmConfigurationSlurmRest = None
) -> None
```

###### `accounting`<sup>Optional</sup> <a name="accounting" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.accounting"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

The accounting configuration includes configurable settings for Slurm accounting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#accounting PcsCluster#accounting}

---

###### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.authKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

The shared Slurm key for authentication, also known as the cluster secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#auth_key PcsCluster#auth_key}

---

###### `cgroup_custom_settings`<sup>Optional</sup> <a name="cgroup_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.cgroupCustomSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]

Additional cgroup-specific configuration that directly maps to cgroup.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#cgroup_custom_settings PcsCluster#cgroup_custom_settings}

---

###### `jwt_auth`<sup>Optional</sup> <a name="jwt_auth" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.jwtAuth"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

JWT authentication configuration for Slurm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#jwt_auth PcsCluster#jwt_auth}

---

###### `scale_down_idle_time_in_seconds`<sup>Optional</sup> <a name="scale_down_idle_time_in_seconds" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.scaleDownIdleTimeInSeconds"></a>

- *Type:* typing.Union[int, float]

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds PcsCluster#scale_down_idle_time_in_seconds}

---

###### `slurm_custom_settings`<sup>Optional</sup> <a name="slurm_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.slurmCustomSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_custom_settings PcsCluster#slurm_custom_settings}

---

###### `slurmdbd_custom_settings`<sup>Optional</sup> <a name="slurmdbd_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.slurmdbdCustomSettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]

Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurmdbd_custom_settings PcsCluster#slurmdbd_custom_settings}

---

###### `slurm_rest`<sup>Optional</sup> <a name="slurm_rest" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.putSlurmConfiguration.parameter.slurmRest"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

The SlurmRest configuration includes configurable settings for Slurm Rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_rest PcsCluster#slurm_rest}

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_slurm_configuration` <a name="reset_slurm_configuration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetSlurmConfiguration"></a>

```python
def reset_slurm_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PcsCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PcsCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PcsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo">error_info</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler">scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration">slurm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput">networking_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput">scheduler_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput">slurm_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.endpoints"></a>

```python
endpoints: PcsClusterEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList">PcsClusterEndpointsList</a>

---

##### `error_info`<sup>Required</sup> <a name="error_info" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.errorInfo"></a>

```python
error_info: PcsClusterErrorInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList">PcsClusterErrorInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networking"></a>

```python
networking: PcsClusterNetworkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference">PcsClusterNetworkingOutputReference</a>

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.scheduler"></a>

```python
scheduler: PcsClusterSchedulerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference">PcsClusterSchedulerOutputReference</a>

---

##### `slurm_configuration`<sup>Required</sup> <a name="slurm_configuration" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfiguration"></a>

```python
slurm_configuration: PcsClusterSlurmConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference">PcsClusterSlurmConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.networkingInput"></a>

```python
networking_input: IResolvable | PcsClusterNetworking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---

##### `scheduler_input`<sup>Optional</sup> <a name="scheduler_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.schedulerInput"></a>

```python
scheduler_input: IResolvable | PcsClusterScheduler
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `slurm_configuration_input`<sup>Optional</sup> <a name="slurm_configuration_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.slurmConfigurationInput"></a>

```python
slurm_configuration_input: IResolvable | PcsClusterSlurmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcsCluster.PcsCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PcsClusterConfig <a name="PcsClusterConfig" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  networking: PcsClusterNetworking,
  scheduler: PcsClusterScheduler,
  size: str,
  name: str = None,
  slurm_configuration: PcsClusterSlurmConfiguration = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | The networking configuration for the cluster's control plane. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler">scheduler</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | The cluster management and job scheduling software associated with the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size">size</a></code> | <code>str</code> | The size of the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name">name</a></code> | <code>str</code> | The name that identifies the cluster. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration">slurm_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | Additional options related to the Slurm scheduler. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | 1 or more tags added to the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.networking"></a>

```python
networking: PcsClusterNetworking
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

The networking configuration for the cluster's control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#networking PcsCluster#networking}

---

##### `scheduler`<sup>Required</sup> <a name="scheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.scheduler"></a>

```python
scheduler: PcsClusterScheduler
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

The cluster management and job scheduling software associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#scheduler PcsCluster#scheduler}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.size"></a>

```python
size: str
```

- *Type:* str

The size of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#size PcsCluster#size}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name that identifies the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#name PcsCluster#name}

---

##### `slurm_configuration`<sup>Optional</sup> <a name="slurm_configuration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.slurmConfiguration"></a>

```python
slurm_configuration: PcsClusterSlurmConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

Additional options related to the Slurm scheduler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_configuration PcsCluster#slurm_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcsCluster.PcsClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

1 or more tags added to the resource.

Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#tags PcsCluster#tags}

---

### PcsClusterEndpoints <a name="PcsClusterEndpoints" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterEndpoints()
```


### PcsClusterErrorInfo <a name="PcsClusterErrorInfo" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterErrorInfo()
```


### PcsClusterNetworking <a name="PcsClusterNetworking" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterNetworking(
  network_type: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType">network_type</a></code> | <code>str</code> | The IP of the cluster (IPV4 or IPV6). |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. |

---

##### `network_type`<sup>Optional</sup> <a name="network_type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

The IP of the cluster (IPV4 or IPV6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#network_type PcsCluster#network_type}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#security_group_ids PcsCluster#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources.

The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#subnet_ids PcsCluster#subnet_ids}

---

### PcsClusterScheduler <a name="PcsClusterScheduler" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterScheduler(
  type: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type">type</a></code> | <code>str</code> | The software AWS PCS uses to manage cluster scaling and job scheduling. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version">version</a></code> | <code>str</code> | The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.type"></a>

```python
type: str
```

- *Type:* str

The software AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#type PcsCluster#type}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#version PcsCluster#version}

---

### PcsClusterSlurmConfiguration <a name="PcsClusterSlurmConfiguration" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfiguration(
  accounting: PcsClusterSlurmConfigurationAccounting = None,
  auth_key: PcsClusterSlurmConfigurationAuthKey = None,
  cgroup_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings] = None,
  jwt_auth: PcsClusterSlurmConfigurationJwtAuth = None,
  scale_down_idle_time_in_seconds: typing.Union[int, float] = None,
  slurm_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings] = None,
  slurmdbd_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings] = None,
  slurm_rest: PcsClusterSlurmConfigurationSlurmRest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting">accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | The accounting configuration includes configurable settings for Slurm accounting. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey">auth_key</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | The shared Slurm key for authentication, also known as the cluster secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings">cgroup_custom_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]</code> | Additional cgroup-specific configuration that directly maps to cgroup.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth">jwt_auth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | JWT authentication configuration for Slurm. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds">scale_down_idle_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | The time before an idle node is scaled down. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings">slurm_custom_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]</code> | Additional Slurm-specific configuration that directly maps to Slurm settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings">slurmdbd_custom_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]</code> | Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest">slurm_rest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | The SlurmRest configuration includes configurable settings for Slurm Rest. |

---

##### `accounting`<sup>Optional</sup> <a name="accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.accounting"></a>

```python
accounting: PcsClusterSlurmConfigurationAccounting
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

The accounting configuration includes configurable settings for Slurm accounting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#accounting PcsCluster#accounting}

---

##### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.authKey"></a>

```python
auth_key: PcsClusterSlurmConfigurationAuthKey
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

The shared Slurm key for authentication, also known as the cluster secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#auth_key PcsCluster#auth_key}

---

##### `cgroup_custom_settings`<sup>Optional</sup> <a name="cgroup_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.cgroupCustomSettings"></a>

```python
cgroup_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]

Additional cgroup-specific configuration that directly maps to cgroup.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#cgroup_custom_settings PcsCluster#cgroup_custom_settings}

---

##### `jwt_auth`<sup>Optional</sup> <a name="jwt_auth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.jwtAuth"></a>

```python
jwt_auth: PcsClusterSlurmConfigurationJwtAuth
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

JWT authentication configuration for Slurm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#jwt_auth PcsCluster#jwt_auth}

---

##### `scale_down_idle_time_in_seconds`<sup>Optional</sup> <a name="scale_down_idle_time_in_seconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.scaleDownIdleTimeInSeconds"></a>

```python
scale_down_idle_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time before an idle node is scaled down.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#scale_down_idle_time_in_seconds PcsCluster#scale_down_idle_time_in_seconds}

---

##### `slurm_custom_settings`<sup>Optional</sup> <a name="slurm_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmCustomSettings"></a>

```python
slurm_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]

Additional Slurm-specific configuration that directly maps to Slurm settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_custom_settings PcsCluster#slurm_custom_settings}

---

##### `slurmdbd_custom_settings`<sup>Optional</sup> <a name="slurmdbd_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmdbdCustomSettings"></a>

```python
slurmdbd_custom_settings: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]

Additional slurmdbd-specific configuration that directly maps to slurmdbd.conf settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurmdbd_custom_settings PcsCluster#slurmdbd_custom_settings}

---

##### `slurm_rest`<sup>Optional</sup> <a name="slurm_rest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration.property.slurmRest"></a>

```python
slurm_rest: PcsClusterSlurmConfigurationSlurmRest
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

The SlurmRest configuration includes configurable settings for Slurm Rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#slurm_rest PcsCluster#slurm_rest}

---

### PcsClusterSlurmConfigurationAccounting <a name="PcsClusterSlurmConfigurationAccounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationAccounting(
  default_purge_time_in_days: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays">default_purge_time_in_days</a></code> | <code>typing.Union[int, float]</code> | The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode">mode</a></code> | <code>str</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled. |

---

##### `default_purge_time_in_days`<sup>Optional</sup> <a name="default_purge_time_in_days" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.defaultPurgeTimeInDays"></a>

```python
default_purge_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#default_purge_time_in_days PcsCluster#default_purge_time_in_days}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting.property.mode"></a>

```python
mode: str
```

- *Type:* str

The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

### PcsClusterSlurmConfigurationAuthKey <a name="PcsClusterSlurmConfigurationAuthKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationAuthKey(
  secret_arn: str = None,
  secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the the shared Slurm key. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion">secret_version</a></code> | <code>str</code> | The version of the shared Slurm key. |

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The version of the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationCgroupCustomSettings <a name="PcsClusterSlurmConfigurationCgroupCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName">parameter_name</a></code> | <code>str</code> | The cgroup.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue">parameter_value</a></code> | <code>str</code> | The value for the cgroup.conf parameter. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The cgroup.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The value for the cgroup.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationJwtAuth <a name="PcsClusterSlurmConfigurationJwtAuth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationJwtAuth(
  jwt_key: PcsClusterSlurmConfigurationJwtAuthJwtKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey">jwt_key</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | JWT key configuration. |

---

##### `jwt_key`<sup>Optional</sup> <a name="jwt_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth.property.jwtKey"></a>

```python
jwt_key: PcsClusterSlurmConfigurationJwtAuthJwtKey
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

JWT key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#jwt_key PcsCluster#jwt_key}

---

### PcsClusterSlurmConfigurationJwtAuthJwtKey <a name="PcsClusterSlurmConfigurationJwtAuthJwtKey" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey(
  secret_arn: str = None,
  secret_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the JWT key secret. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion">secret_version</a></code> | <code>str</code> | The version of the JWT key secret. |

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

##### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The version of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

### PcsClusterSlurmConfigurationSlurmCustomSettings <a name="PcsClusterSlurmConfigurationSlurmCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName">parameter_name</a></code> | <code>str</code> | AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue">parameter_value</a></code> | <code>str</code> | The value for the configured Slurm setting. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The value for the configured Slurm setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmdbdCustomSettings <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings(
  parameter_name: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName">parameter_name</a></code> | <code>str</code> | The slurmdbd.conf parameter name. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue">parameter_value</a></code> | <code>str</code> | The value for the slurmdbd.conf parameter. |

---

##### `parameter_name`<sup>Optional</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

The slurmdbd.conf parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_name PcsCluster#parameter_name}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The value for the slurmdbd.conf parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#parameter_value PcsCluster#parameter_value}

---

### PcsClusterSlurmConfigurationSlurmRest <a name="PcsClusterSlurmConfigurationSlurmRest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmRest(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode">mode</a></code> | <code>str</code> | The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest.property.mode"></a>

```python
mode: str
```

- *Type:* str

The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### PcsClusterEndpointsList <a name="PcsClusterEndpointsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PcsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PcsClusterEndpointsOutputReference <a name="PcsClusterEndpointsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: PcsClusterEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterEndpoints">PcsClusterEndpoints</a>

---


### PcsClusterErrorInfoList <a name="PcsClusterErrorInfoList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterErrorInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PcsClusterErrorInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### PcsClusterErrorInfoOutputReference <a name="PcsClusterErrorInfoOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterErrorInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfoOutputReference.property.internalValue"></a>

```python
internal_value: PcsClusterErrorInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterErrorInfo">PcsClusterErrorInfo</a>

---


### PcsClusterNetworkingOutputReference <a name="PcsClusterNetworkingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType">reset_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_type` <a name="reset_network_type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetNetworkType"></a>

```python
def reset_network_type() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterNetworking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterNetworking">PcsClusterNetworking</a>

---


### PcsClusterSchedulerOutputReference <a name="PcsClusterSchedulerOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSchedulerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSchedulerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterScheduler
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterScheduler">PcsClusterScheduler</a>

---


### PcsClusterSlurmConfigurationAccountingOutputReference <a name="PcsClusterSlurmConfigurationAccountingOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays">reset_default_purge_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_purge_time_in_days` <a name="reset_default_purge_time_in_days" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetDefaultPurgeTimeInDays"></a>

```python
def reset_default_purge_time_in_days() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput">default_purge_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays">default_purge_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_purge_time_in_days_input`<sup>Optional</sup> <a name="default_purge_time_in_days_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDaysInput"></a>

```python
default_purge_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `default_purge_time_in_days`<sup>Required</sup> <a name="default_purge_time_in_days" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.defaultPurgeTimeInDays"></a>

```python
default_purge_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationAccounting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---


### PcsClusterSlurmConfigurationAuthKeyOutputReference <a name="PcsClusterSlurmConfigurationAuthKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationAuthKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsList <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]

---


### PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationCgroupCustomSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>

---


### PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion">reset_secret_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_secret_version` <a name="reset_secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.resetSecretVersion"></a>

```python
def reset_secret_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationJwtAuthJwtKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---


### PcsClusterSlurmConfigurationJwtAuthOutputReference <a name="PcsClusterSlurmConfigurationJwtAuthOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey">put_jwt_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey">reset_jwt_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jwt_key` <a name="put_jwt_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey"></a>

```python
def put_jwt_key(
  secret_arn: str = None,
  secret_version: str = None
) -> None
```

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey.parameter.secretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.putJwtKey.parameter.secretVersion"></a>

- *Type:* str

The version of the JWT key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

##### `reset_jwt_key` <a name="reset_jwt_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.resetJwtKey"></a>

```python
def reset_jwt_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey">jwt_key</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput">jwt_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jwt_key`<sup>Required</sup> <a name="jwt_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKey"></a>

```python
jwt_key: PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference">PcsClusterSlurmConfigurationJwtAuthJwtKeyOutputReference</a>

---

##### `jwt_key_input`<sup>Optional</sup> <a name="jwt_key_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.jwtKeyInput"></a>

```python
jwt_key_input: IResolvable | PcsClusterSlurmConfigurationJwtAuthJwtKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationJwtAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---


### PcsClusterSlurmConfigurationOutputReference <a name="PcsClusterSlurmConfigurationOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting">put_accounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey">put_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings">put_cgroup_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth">put_jwt_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings">put_slurm_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings">put_slurmdbd_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest">put_slurm_rest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting">reset_accounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey">reset_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings">reset_cgroup_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth">reset_jwt_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds">reset_scale_down_idle_time_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings">reset_slurm_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings">reset_slurmdbd_custom_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest">reset_slurm_rest</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_accounting` <a name="put_accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting"></a>

```python
def put_accounting(
  default_purge_time_in_days: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `default_purge_time_in_days`<sup>Optional</sup> <a name="default_purge_time_in_days" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting.parameter.defaultPurgeTimeInDays"></a>

- *Type:* typing.Union[int, float]

The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html). The default value is `-1`. A value of `-1` means there is no purge time and records persist as long as the cluster exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#default_purge_time_in_days PcsCluster#default_purge_time_in_days}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAccounting.parameter.mode"></a>

- *Type:* str

The default value is `NONE`. A value of `STANDARD` means that Slurm accounting is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

##### `put_auth_key` <a name="put_auth_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey"></a>

```python
def put_auth_key(
  secret_arn: str = None,
  secret_version: str = None
) -> None
```

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey.parameter.secretArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_arn PcsCluster#secret_arn}

---

###### `secret_version`<sup>Optional</sup> <a name="secret_version" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putAuthKey.parameter.secretVersion"></a>

- *Type:* str

The version of the shared Slurm key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#secret_version PcsCluster#secret_version}

---

##### `put_cgroup_custom_settings` <a name="put_cgroup_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings"></a>

```python
def put_cgroup_custom_settings(
  value: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putCgroupCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]

---

##### `put_jwt_auth` <a name="put_jwt_auth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth"></a>

```python
def put_jwt_auth(
  jwt_key: PcsClusterSlurmConfigurationJwtAuthJwtKey = None
) -> None
```

###### `jwt_key`<sup>Optional</sup> <a name="jwt_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putJwtAuth.parameter.jwtKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthJwtKey">PcsClusterSlurmConfigurationJwtAuthJwtKey</a>

JWT key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#jwt_key PcsCluster#jwt_key}

---

##### `put_slurm_custom_settings` <a name="put_slurm_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings"></a>

```python
def put_slurm_custom_settings(
  value: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]

---

##### `put_slurmdbd_custom_settings` <a name="put_slurmdbd_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings"></a>

```python
def put_slurmdbd_custom_settings(
  value: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmdbdCustomSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]

---

##### `put_slurm_rest` <a name="put_slurm_rest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest"></a>

```python
def put_slurm_rest(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.putSlurmRest.parameter.mode"></a>

- *Type:* str

The default value is `NONE`. A value of `STANDARD` means that Slurm Rest is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcs_cluster#mode PcsCluster#mode}

---

##### `reset_accounting` <a name="reset_accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAccounting"></a>

```python
def reset_accounting() -> None
```

##### `reset_auth_key` <a name="reset_auth_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetAuthKey"></a>

```python
def reset_auth_key() -> None
```

##### `reset_cgroup_custom_settings` <a name="reset_cgroup_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetCgroupCustomSettings"></a>

```python
def reset_cgroup_custom_settings() -> None
```

##### `reset_jwt_auth` <a name="reset_jwt_auth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetJwtAuth"></a>

```python
def reset_jwt_auth() -> None
```

##### `reset_scale_down_idle_time_in_seconds` <a name="reset_scale_down_idle_time_in_seconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetScaleDownIdleTimeInSeconds"></a>

```python
def reset_scale_down_idle_time_in_seconds() -> None
```

##### `reset_slurm_custom_settings` <a name="reset_slurm_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmCustomSettings"></a>

```python
def reset_slurm_custom_settings() -> None
```

##### `reset_slurmdbd_custom_settings` <a name="reset_slurmdbd_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmdbdCustomSettings"></a>

```python
def reset_slurmdbd_custom_settings() -> None
```

##### `reset_slurm_rest` <a name="reset_slurm_rest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.resetSlurmRest"></a>

```python
def reset_slurm_rest() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting">accounting</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey">auth_key</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings">cgroup_custom_settings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth">jwt_auth</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings">slurm_custom_settings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings">slurmdbd_custom_settings</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest">slurm_rest</a></code> | <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput">accounting_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput">auth_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput">cgroup_custom_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput">jwt_auth_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput">scale_down_idle_time_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput">slurm_custom_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput">slurmdbd_custom_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput">slurm_rest_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds">scale_down_idle_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accounting`<sup>Required</sup> <a name="accounting" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accounting"></a>

```python
accounting: PcsClusterSlurmConfigurationAccountingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccountingOutputReference">PcsClusterSlurmConfigurationAccountingOutputReference</a>

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKey"></a>

```python
auth_key: PcsClusterSlurmConfigurationAuthKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKeyOutputReference">PcsClusterSlurmConfigurationAuthKeyOutputReference</a>

---

##### `cgroup_custom_settings`<sup>Required</sup> <a name="cgroup_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettings"></a>

```python
cgroup_custom_settings: PcsClusterSlurmConfigurationCgroupCustomSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettingsList">PcsClusterSlurmConfigurationCgroupCustomSettingsList</a>

---

##### `jwt_auth`<sup>Required</sup> <a name="jwt_auth" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuth"></a>

```python
jwt_auth: PcsClusterSlurmConfigurationJwtAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuthOutputReference">PcsClusterSlurmConfigurationJwtAuthOutputReference</a>

---

##### `slurm_custom_settings`<sup>Required</sup> <a name="slurm_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettings"></a>

```python
slurm_custom_settings: PcsClusterSlurmConfigurationSlurmCustomSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList">PcsClusterSlurmConfigurationSlurmCustomSettingsList</a>

---

##### `slurmdbd_custom_settings`<sup>Required</sup> <a name="slurmdbd_custom_settings" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettings"></a>

```python
slurmdbd_custom_settings: PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList">PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList</a>

---

##### `slurm_rest`<sup>Required</sup> <a name="slurm_rest" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRest"></a>

```python
slurm_rest: PcsClusterSlurmConfigurationSlurmRestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference">PcsClusterSlurmConfigurationSlurmRestOutputReference</a>

---

##### `accounting_input`<sup>Optional</sup> <a name="accounting_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.accountingInput"></a>

```python
accounting_input: IResolvable | PcsClusterSlurmConfigurationAccounting
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAccounting">PcsClusterSlurmConfigurationAccounting</a>

---

##### `auth_key_input`<sup>Optional</sup> <a name="auth_key_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.authKeyInput"></a>

```python
auth_key_input: IResolvable | PcsClusterSlurmConfigurationAuthKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationAuthKey">PcsClusterSlurmConfigurationAuthKey</a>

---

##### `cgroup_custom_settings_input`<sup>Optional</sup> <a name="cgroup_custom_settings_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.cgroupCustomSettingsInput"></a>

```python
cgroup_custom_settings_input: IResolvable | typing.List[PcsClusterSlurmConfigurationCgroupCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationCgroupCustomSettings">PcsClusterSlurmConfigurationCgroupCustomSettings</a>]

---

##### `jwt_auth_input`<sup>Optional</sup> <a name="jwt_auth_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.jwtAuthInput"></a>

```python
jwt_auth_input: IResolvable | PcsClusterSlurmConfigurationJwtAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationJwtAuth">PcsClusterSlurmConfigurationJwtAuth</a>

---

##### `scale_down_idle_time_in_seconds_input`<sup>Optional</sup> <a name="scale_down_idle_time_in_seconds_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSecondsInput"></a>

```python
scale_down_idle_time_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `slurm_custom_settings_input`<sup>Optional</sup> <a name="slurm_custom_settings_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmCustomSettingsInput"></a>

```python
slurm_custom_settings_input: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]

---

##### `slurmdbd_custom_settings_input`<sup>Optional</sup> <a name="slurmdbd_custom_settings_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmdbdCustomSettingsInput"></a>

```python
slurmdbd_custom_settings_input: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]

---

##### `slurm_rest_input`<sup>Optional</sup> <a name="slurm_rest_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.slurmRestInput"></a>

```python
slurm_rest_input: IResolvable | PcsClusterSlurmConfigurationSlurmRest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---

##### `scale_down_idle_time_in_seconds`<sup>Required</sup> <a name="scale_down_idle_time_in_seconds" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.scaleDownIdleTimeInSeconds"></a>

```python
scale_down_idle_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfiguration">PcsClusterSlurmConfiguration</a>

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>]

---


### PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationSlurmCustomSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmCustomSettings">PcsClusterSlurmConfigurationSlurmCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PcsClusterSlurmConfigurationSlurmdbdCustomSettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>]

---


### PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference <a name="PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName">reset_parameter_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_name` <a name="reset_parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterName"></a>

```python
def reset_parameter_name() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationSlurmdbdCustomSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmdbdCustomSettings">PcsClusterSlurmConfigurationSlurmdbdCustomSettings</a>

---


### PcsClusterSlurmConfigurationSlurmRestOutputReference <a name="PcsClusterSlurmConfigurationSlurmRestOutputReference" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcs_cluster

pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRestOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcsClusterSlurmConfigurationSlurmRest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcsCluster.PcsClusterSlurmConfigurationSlurmRest">PcsClusterSlurmConfigurationSlurmRest</a>

---



