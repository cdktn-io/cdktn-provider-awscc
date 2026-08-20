# `mediaconnectRouterNetworkInterface` Submodule <a name="`mediaconnectRouterNetworkInterface` Submodule" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectRouterNetworkInterface <a name="MediaconnectRouterNetworkInterface" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: MediaconnectRouterNetworkInterfaceConfiguration,
  name: str,
  region_name: str = None,
  tags: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a></code> | The configuration settings for a router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.regionName">region_name</a></code> | <code>str</code> | The AWS Region for the router network interface. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]</code> | Key-value pairs that can be used to tag and organize this router network interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

The configuration settings for a router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#configuration MediaconnectRouterNetworkInterface#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.name"></a>

- *Type:* str

The name of the router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#name MediaconnectRouterNetworkInterface#name}

---

##### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.regionName"></a>

- *Type:* str

The AWS Region for the router network interface. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#region_name MediaconnectRouterNetworkInterface#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]

Key-value pairs that can be used to tag and organize this router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#tags MediaconnectRouterNetworkInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetRegionName">reset_region_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration"></a>

```python
def put_configuration(
  public: MediaconnectRouterNetworkInterfaceConfigurationPublic = None,
  vpc: MediaconnectRouterNetworkInterfaceConfigurationVpc = None
) -> None
```

###### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration.parameter.public"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

The configuration settings for a public router network interface, including the list of allowed CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#public MediaconnectRouterNetworkInterface#public}

---

###### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration.parameter.vpc"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#vpc MediaconnectRouterNetworkInterface#vpc}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]

---

##### `reset_region_name` <a name="reset_region_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetRegionName"></a>

```python
def reset_region_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectRouterNetworkInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectRouterNetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectRouterNetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedInputCount">associated_input_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedOutputCount">associated_output_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference">MediaconnectRouterNetworkInterfaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.networkInterfaceType">network_interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId">router_network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList">MediaconnectRouterNetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionNameInput">region_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `associated_input_count`<sup>Required</sup> <a name="associated_input_count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedInputCount"></a>

```python
associated_input_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `associated_output_count`<sup>Required</sup> <a name="associated_output_count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedOutputCount"></a>

```python
associated_output_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configuration"></a>

```python
configuration: MediaconnectRouterNetworkInterfaceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference">MediaconnectRouterNetworkInterfaceConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_interface_type`<sup>Required</sup> <a name="network_interface_type" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.networkInterfaceType"></a>

```python
network_interface_type: str
```

- *Type:* str

---

##### `router_network_interface_id`<sup>Required</sup> <a name="router_network_interface_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId"></a>

```python
router_network_interface_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tags"></a>

```python
tags: MediaconnectRouterNetworkInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList">MediaconnectRouterNetworkInterfaceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configurationInput"></a>

```python
configuration_input: IResolvable | MediaconnectRouterNetworkInterfaceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_name_input`<sup>Optional</sup> <a name="region_name_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionNameInput"></a>

```python
region_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectRouterNetworkInterfaceConfig <a name="MediaconnectRouterNetworkInterfaceConfig" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: MediaconnectRouterNetworkInterfaceConfiguration,
  name: str,
  region_name: str = None,
  tags: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a></code> | The configuration settings for a router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.name">name</a></code> | <code>str</code> | The name of the router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.regionName">region_name</a></code> | <code>str</code> | The AWS Region for the router network interface. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]</code> | Key-value pairs that can be used to tag and organize this router network interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.configuration"></a>

```python
configuration: MediaconnectRouterNetworkInterfaceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

The configuration settings for a router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#configuration MediaconnectRouterNetworkInterface#configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#name MediaconnectRouterNetworkInterface#name}

---

##### `region_name`<sup>Optional</sup> <a name="region_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

The AWS Region for the router network interface. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#region_name MediaconnectRouterNetworkInterface#region_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]

Key-value pairs that can be used to tag and organize this router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#tags MediaconnectRouterNetworkInterface#tags}

---

### MediaconnectRouterNetworkInterfaceConfiguration <a name="MediaconnectRouterNetworkInterfaceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration(
  public: MediaconnectRouterNetworkInterfaceConfigurationPublic = None,
  vpc: MediaconnectRouterNetworkInterfaceConfigurationVpc = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | The configuration settings for a public router network interface, including the list of allowed CIDR blocks. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID. |

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.public"></a>

```python
public: MediaconnectRouterNetworkInterfaceConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

The configuration settings for a public router network interface, including the list of allowed CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#public MediaconnectRouterNetworkInterface#public}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.vpc"></a>

```python
vpc: MediaconnectRouterNetworkInterfaceConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#vpc MediaconnectRouterNetworkInterface#vpc}

---

### MediaconnectRouterNetworkInterfaceConfigurationPublic <a name="MediaconnectRouterNetworkInterfaceConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic(
  allow_rules: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.property.allowRules">allow_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]</code> | The list of allowed CIDR blocks for the public router network interface. |

---

##### `allow_rules`<sup>Optional</sup> <a name="allow_rules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.property.allowRules"></a>

```python
allow_rules: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]

The list of allowed CIDR blocks for the public router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#allow_rules MediaconnectRouterNetworkInterface#allow_rules}

---

### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules(
  cidr: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.property.cidr">cidr</a></code> | <code>str</code> | The CIDR block that is allowed to access the public router network interface. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The CIDR block that is allowed to access the public router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#cidr MediaconnectRouterNetworkInterface#cidr}

---

### MediaconnectRouterNetworkInterfaceConfigurationVpc <a name="MediaconnectRouterNetworkInterfaceConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc(
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The IDs of the security groups to associate with the router network interface within the VPC. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet within the VPC to associate the router network interface with. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The IDs of the security groups to associate with the router network interface within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#security_group_ids MediaconnectRouterNetworkInterface#security_group_ids}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet within the VPC to associate the router network interface with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#subnet_id MediaconnectRouterNetworkInterface#subnet_id}

---

### MediaconnectRouterNetworkInterfaceTags <a name="MediaconnectRouterNetworkInterfaceTags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#key MediaconnectRouterNetworkInterface#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#value MediaconnectRouterNetworkInterface#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#key MediaconnectRouterNetworkInterface#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#value MediaconnectRouterNetworkInterface#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectRouterNetworkInterfaceConfigurationOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic">put_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc">put_vpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetPublic">reset_public</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetVpc">reset_vpc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public` <a name="put_public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic"></a>

```python
def put_public(
  allow_rules: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules] = None
) -> None
```

###### `allow_rules`<sup>Optional</sup> <a name="allow_rules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic.parameter.allowRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]

The list of allowed CIDR blocks for the public router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#allow_rules MediaconnectRouterNetworkInterface#allow_rules}

---

##### `put_vpc` <a name="put_vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc"></a>

```python
def put_vpc(
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The IDs of the security groups to associate with the router network interface within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#security_group_ids MediaconnectRouterNetworkInterface#security_group_ids}

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet within the VPC to associate the router network interface with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_router_network_interface#subnet_id MediaconnectRouterNetworkInterface#subnet_id}

---

##### `reset_public` <a name="reset_public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetPublic"></a>

```python
def reset_public() -> None
```

##### `reset_vpc` <a name="reset_vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetVpc"></a>

```python
def reset_vpc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public">public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.publicInput">public_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpcInput">vpc_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public"></a>

```python
public: MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc"></a>

```python
vpc: MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a>

---

##### `public_input`<sup>Optional</sup> <a name="public_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.publicInput"></a>

```python
public_input: IResolvable | MediaconnectRouterNetworkInterfaceConfigurationPublic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

---

##### `vpc_input`<sup>Optional</sup> <a name="vpc_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpcInput"></a>

```python
vpc_input: IResolvable | MediaconnectRouterNetworkInterfaceConfigurationVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectRouterNetworkInterfaceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resetCidr">reset_cidr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr` <a name="reset_cidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resetCidr"></a>

```python
def reset_cidr() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules">put_allow_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resetAllowRules">reset_allow_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow_rules` <a name="put_allow_rules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules"></a>

```python
def put_allow_rules(
  value: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]

---

##### `reset_allow_rules` <a name="reset_allow_rules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resetAllowRules"></a>

```python
def reset_allow_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules">allow_rules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRulesInput">allow_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_rules`<sup>Required</sup> <a name="allow_rules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules"></a>

```python
allow_rules: MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a>

---

##### `allow_rules_input`<sup>Optional</sup> <a name="allow_rules_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRulesInput"></a>

```python
allow_rules_input: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectRouterNetworkInterfaceConfigurationPublic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

---


### MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectRouterNetworkInterfaceConfigurationVpc
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

---


### MediaconnectRouterNetworkInterfaceTagsList <a name="MediaconnectRouterNetworkInterfaceTagsList" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectRouterNetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectRouterNetworkInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>]

---


### MediaconnectRouterNetworkInterfaceTagsOutputReference <a name="MediaconnectRouterNetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_router_network_interface

mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectRouterNetworkInterfaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags">MediaconnectRouterNetworkInterfaceTags</a>

---



