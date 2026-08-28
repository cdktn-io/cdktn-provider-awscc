# `vpclatticeServiceNetwork` Submodule <a name="`vpclatticeServiceNetwork` Submodule" id="@cdktn/provider-awscc.vpclatticeServiceNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetwork <a name="VpclatticeServiceNetwork" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network awscc_vpclattice_service_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetwork(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str = None,
  name: str = None,
  sharing_config: VpclatticeServiceNetworkSharingConfig = None,
  tags: IResolvable | typing.List[VpclatticeServiceNetworkTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#auth_type VpclatticeServiceNetwork#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#name VpclatticeServiceNetwork#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.sharingConfig">sharing_config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#sharing_config VpclatticeServiceNetwork#sharing_config}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#tags VpclatticeServiceNetwork#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#auth_type VpclatticeServiceNetwork#auth_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#name VpclatticeServiceNetwork#name}.

---

##### `sharing_config`<sup>Optional</sup> <a name="sharing_config" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.sharingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#sharing_config VpclatticeServiceNetwork#sharing_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#tags VpclatticeServiceNetwork#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putSharingConfig">put_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetSharingConfig">reset_sharing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sharing_config` <a name="put_sharing_config" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putSharingConfig"></a>

```python
def put_sharing_config(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putSharingConfig.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#enabled VpclatticeServiceNetwork#enabled}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[VpclatticeServiceNetworkTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]

---

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sharing_config` <a name="reset_sharing_config" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetSharingConfig"></a>

```python
def reset_sharing_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isConstruct"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformElement"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformResource"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VpclatticeServiceNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpclatticeServiceNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpclatticeServiceNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.serviceNetworkId">service_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.sharingConfig">sharing_config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference">VpclatticeServiceNetworkSharingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList">VpclatticeServiceNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.sharingConfigInput">sharing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `service_network_id`<sup>Required</sup> <a name="service_network_id" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.serviceNetworkId"></a>

```python
service_network_id: str
```

- *Type:* str

---

##### `sharing_config`<sup>Required</sup> <a name="sharing_config" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.sharingConfig"></a>

```python
sharing_config: VpclatticeServiceNetworkSharingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference">VpclatticeServiceNetworkSharingConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tags"></a>

```python
tags: VpclatticeServiceNetworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList">VpclatticeServiceNetworkTagsList</a>

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sharing_config_input`<sup>Optional</sup> <a name="sharing_config_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.sharingConfigInput"></a>

```python
sharing_config_input: IResolvable | VpclatticeServiceNetworkSharingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[VpclatticeServiceNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkConfig <a name="VpclatticeServiceNetworkConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auth_type: str = None,
  name: str = None,
  sharing_config: VpclatticeServiceNetworkSharingConfig = None,
  tags: IResolvable | typing.List[VpclatticeServiceNetworkTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#auth_type VpclatticeServiceNetwork#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#name VpclatticeServiceNetwork#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.sharingConfig">sharing_config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#sharing_config VpclatticeServiceNetwork#sharing_config}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#tags VpclatticeServiceNetwork#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#auth_type VpclatticeServiceNetwork#auth_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#name VpclatticeServiceNetwork#name}.

---

##### `sharing_config`<sup>Optional</sup> <a name="sharing_config" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.sharingConfig"></a>

```python
sharing_config: VpclatticeServiceNetworkSharingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#sharing_config VpclatticeServiceNetwork#sharing_config}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[VpclatticeServiceNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#tags VpclatticeServiceNetwork#tags}.

---

### VpclatticeServiceNetworkSharingConfig <a name="VpclatticeServiceNetworkSharingConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#enabled VpclatticeServiceNetwork#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#enabled VpclatticeServiceNetwork#enabled}.

---

### VpclatticeServiceNetworkTags <a name="VpclatticeServiceNetworkTags" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#key VpclatticeServiceNetwork#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#value VpclatticeServiceNetwork#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#key VpclatticeServiceNetwork#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network#value VpclatticeServiceNetwork#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkSharingConfigOutputReference <a name="VpclatticeServiceNetworkSharingConfigOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeServiceNetworkSharingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkSharingConfig">VpclatticeServiceNetworkSharingConfig</a>

---


### VpclatticeServiceNetworkTagsList <a name="VpclatticeServiceNetworkTagsList" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpclatticeServiceNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VpclatticeServiceNetworkTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>]

---


### VpclatticeServiceNetworkTagsOutputReference <a name="VpclatticeServiceNetworkTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import vpclattice_service_network

vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VpclatticeServiceNetworkTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetwork.VpclatticeServiceNetworkTags">VpclatticeServiceNetworkTags</a>

---



