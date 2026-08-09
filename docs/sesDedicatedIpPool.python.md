# `sesDedicatedIpPool` Submodule <a name="`sesDedicatedIpPool` Submodule" id="@cdktn/provider-awscc.sesDedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesDedicatedIpPool <a name="SesDedicatedIpPool" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool awscc_ses_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pool_name: str = None,
  scaling_mode: str = None,
  tags: IResolvable | typing.List[SesDedicatedIpPoolTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.poolName">pool_name</a></code> | <code>str</code> | The name of the dedicated IP pool. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scalingMode">scaling_mode</a></code> | <code>str</code> | Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]</code> | The tags (keys and values) associated with the dedicated IP pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pool_name`<sup>Optional</sup> <a name="pool_name" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.poolName"></a>

- *Type:* str

The name of the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#pool_name SesDedicatedIpPool#pool_name}

---

##### `scaling_mode`<sup>Optional</sup> <a name="scaling_mode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.scalingMode"></a>

- *Type:* str

Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#scaling_mode SesDedicatedIpPool#scaling_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]

The tags (keys and values) associated with the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#tags SesDedicatedIpPool#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetPoolName">reset_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetScalingMode">reset_scaling_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SesDedicatedIpPoolTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]

---

##### `reset_pool_name` <a name="reset_pool_name" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetPoolName"></a>

```python
def reset_pool_name() -> None
```

##### `reset_scaling_mode` <a name="reset_scaling_mode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetScalingMode"></a>

```python
def reset_scaling_mode() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SesDedicatedIpPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SesDedicatedIpPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SesDedicatedIpPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SesDedicatedIpPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesDedicatedIpPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList">SesDedicatedIpPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolNameInput">pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingModeInput">scaling_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingMode">scaling_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tags"></a>

```python
tags: SesDedicatedIpPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList">SesDedicatedIpPoolTagsList</a>

---

##### `pool_name_input`<sup>Optional</sup> <a name="pool_name_input" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolNameInput"></a>

```python
pool_name_input: str
```

- *Type:* str

---

##### `scaling_mode_input`<sup>Optional</sup> <a name="scaling_mode_input" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingModeInput"></a>

```python
scaling_mode_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SesDedicatedIpPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `scaling_mode`<sup>Required</sup> <a name="scaling_mode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SesDedicatedIpPoolConfig <a name="SesDedicatedIpPoolConfig" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  pool_name: str = None,
  scaling_mode: str = None,
  tags: IResolvable | typing.List[SesDedicatedIpPoolTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.poolName">pool_name</a></code> | <code>str</code> | The name of the dedicated IP pool. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.scalingMode">scaling_mode</a></code> | <code>str</code> | Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]</code> | The tags (keys and values) associated with the dedicated IP pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `pool_name`<sup>Optional</sup> <a name="pool_name" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

The name of the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#pool_name SesDedicatedIpPool#pool_name}

---

##### `scaling_mode`<sup>Optional</sup> <a name="scaling_mode" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#scaling_mode SesDedicatedIpPool#scaling_mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SesDedicatedIpPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]

The tags (keys and values) associated with the dedicated IP pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#tags SesDedicatedIpPool#tags}

---

### SesDedicatedIpPoolTags <a name="SesDedicatedIpPoolTags" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.Initializer"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPoolTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#key SesDedicatedIpPool#key}. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#value SesDedicatedIpPool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#key SesDedicatedIpPool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_dedicated_ip_pool#value SesDedicatedIpPool#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesDedicatedIpPoolTagsList <a name="SesDedicatedIpPoolTagsList" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPoolTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SesDedicatedIpPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SesDedicatedIpPoolTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>]

---


### SesDedicatedIpPoolTagsOutputReference <a name="SesDedicatedIpPoolTagsOutputReference" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ses_dedicated_ip_pool

sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SesDedicatedIpPoolTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesDedicatedIpPool.SesDedicatedIpPoolTags">SesDedicatedIpPoolTags</a>

---



