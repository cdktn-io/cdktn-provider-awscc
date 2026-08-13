# `networkmanagerGlobalNetwork` Submodule <a name="`networkmanagerGlobalNetwork` Submodule" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerGlobalNetwork <a name="NetworkmanagerGlobalNetwork" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network awscc_networkmanager_global_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  created_at: str = None,
  description: str = None,
  state: str = None,
  tags: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.createdAt">created_at</a></code> | <code>str</code> | The date and time that the global network was created. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]</code> | The tags for the global network. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.createdAt"></a>

- *Type:* str

The date and time that the global network was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#created_at NetworkmanagerGlobalNetwork#created_at}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.description"></a>

- *Type:* str

The description of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#description NetworkmanagerGlobalNetwork#description}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.state"></a>

- *Type:* str

The state of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#state NetworkmanagerGlobalNetwork#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]

The tags for the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#tags NetworkmanagerGlobalNetwork#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]

---

##### `reset_created_at` <a name="reset_created_at" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerGlobalNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerGlobalNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerGlobalNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerGlobalNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerGlobalNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList">NetworkmanagerGlobalNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.createdAtInput">created_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tags"></a>

```python
tags: NetworkmanagerGlobalNetworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList">NetworkmanagerGlobalNetworkTagsList</a>

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.createdAtInput"></a>

```python
created_at_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerGlobalNetworkConfig <a name="NetworkmanagerGlobalNetworkConfig" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  created_at: str = None,
  description: str = None,
  state: str = None,
  tags: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.createdAt">created_at</a></code> | <code>str</code> | The date and time that the global network was created. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.description">description</a></code> | <code>str</code> | The description of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.state">state</a></code> | <code>str</code> | The state of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]</code> | The tags for the global network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

The date and time that the global network was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#created_at NetworkmanagerGlobalNetwork#created_at}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#description NetworkmanagerGlobalNetwork#description}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#state NetworkmanagerGlobalNetwork#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]

The tags for the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#tags NetworkmanagerGlobalNetwork#tags}

---

### NetworkmanagerGlobalNetworkTags <a name="NetworkmanagerGlobalNetworkTags" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#key NetworkmanagerGlobalNetwork#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_global_network#value NetworkmanagerGlobalNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerGlobalNetworkTagsList <a name="NetworkmanagerGlobalNetworkTagsList" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerGlobalNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerGlobalNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>]

---


### NetworkmanagerGlobalNetworkTagsOutputReference <a name="NetworkmanagerGlobalNetworkTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_global_network

networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerGlobalNetworkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerGlobalNetwork.NetworkmanagerGlobalNetworkTags">NetworkmanagerGlobalNetworkTags</a>

---



