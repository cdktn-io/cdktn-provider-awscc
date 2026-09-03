# `iotwirelessServiceProfile` Submodule <a name="`iotwirelessServiceProfile` Submodule" id="@cdktn/provider-awscc.iotwirelessServiceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessServiceProfile <a name="IotwirelessServiceProfile" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile awscc_iotwireless_service_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  lo_ra_wan: IotwirelessServiceProfileLoRaWan = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessServiceProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]</code> | A list of key-value pairs that contain metadata for the service profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.loRaWan"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#lo_ra_wan IotwirelessServiceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.name"></a>

- *Type:* str

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#name IotwirelessServiceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]

A list of key-value pairs that contain metadata for the service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#tags IotwirelessServiceProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan">put_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetLoRaWan">reset_lo_ra_wan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_lo_ra_wan` <a name="put_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan"></a>

```python
def put_lo_ra_wan(
  add_gw_metadata: bool | IResolvable = None,
  pr_allowed: bool | IResolvable = None,
  ra_allowed: bool | IResolvable = None
) -> None
```

###### `add_gw_metadata`<sup>Optional</sup> <a name="add_gw_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan.parameter.addGwMetadata"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}.

---

###### `pr_allowed`<sup>Optional</sup> <a name="pr_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan.parameter.prAllowed"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#pr_allowed IotwirelessServiceProfile#pr_allowed}.

---

###### `ra_allowed`<sup>Optional</sup> <a name="ra_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putLoRaWan.parameter.raAllowed"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#ra_allowed IotwirelessServiceProfile#ra_allowed}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotwirelessServiceProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]

---

##### `reset_lo_ra_wan` <a name="reset_lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetLoRaWan"></a>

```python
def reset_lo_ra_wan() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotwirelessServiceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotwirelessServiceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotwirelessServiceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotwirelessServiceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessServiceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference">IotwirelessServiceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.serviceProfileId">service_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList">IotwirelessServiceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWanInput">lo_ra_wan_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessServiceProfileLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference">IotwirelessServiceProfileLoRaWanOutputReference</a>

---

##### `service_profile_id`<sup>Required</sup> <a name="service_profile_id" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.serviceProfileId"></a>

```python
service_profile_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tags"></a>

```python
tags: IotwirelessServiceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList">IotwirelessServiceProfileTagsList</a>

---

##### `lo_ra_wan_input`<sup>Optional</sup> <a name="lo_ra_wan_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.loRaWanInput"></a>

```python
lo_ra_wan_input: IResolvable | IotwirelessServiceProfileLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotwirelessServiceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessServiceProfileConfig <a name="IotwirelessServiceProfileConfig" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  lo_ra_wan: IotwirelessServiceProfileLoRaWan = None,
  name: str = None,
  tags: IResolvable | typing.List[IotwirelessServiceProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.name">name</a></code> | <code>str</code> | Name of service profile. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]</code> | A list of key-value pairs that contain metadata for the service profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `lo_ra_wan`<sup>Optional</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.loRaWan"></a>

```python
lo_ra_wan: IotwirelessServiceProfileLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#lo_ra_wan IotwirelessServiceProfile#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#name IotwirelessServiceProfile#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotwirelessServiceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]

A list of key-value pairs that contain metadata for the service profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#tags IotwirelessServiceProfile#tags}

---

### IotwirelessServiceProfileLoRaWan <a name="IotwirelessServiceProfileLoRaWan" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan(
  add_gw_metadata: bool | IResolvable = None,
  pr_allowed: bool | IResolvable = None,
  ra_allowed: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.addGwMetadata">add_gw_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.prAllowed">pr_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#pr_allowed IotwirelessServiceProfile#pr_allowed}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.raAllowed">ra_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#ra_allowed IotwirelessServiceProfile#ra_allowed}. |

---

##### `add_gw_metadata`<sup>Optional</sup> <a name="add_gw_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.addGwMetadata"></a>

```python
add_gw_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#add_gw_metadata IotwirelessServiceProfile#add_gw_metadata}.

---

##### `pr_allowed`<sup>Optional</sup> <a name="pr_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.prAllowed"></a>

```python
pr_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#pr_allowed IotwirelessServiceProfile#pr_allowed}.

---

##### `ra_allowed`<sup>Optional</sup> <a name="ra_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan.property.raAllowed"></a>

```python
ra_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#ra_allowed IotwirelessServiceProfile#ra_allowed}.

---

### IotwirelessServiceProfileTags <a name="IotwirelessServiceProfileTags" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#key IotwirelessServiceProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#value IotwirelessServiceProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#key IotwirelessServiceProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotwireless_service_profile#value IotwirelessServiceProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessServiceProfileLoRaWanOutputReference <a name="IotwirelessServiceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetAddGwMetadata">reset_add_gw_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetPrAllowed">reset_pr_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetRaAllowed">reset_ra_allowed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_add_gw_metadata` <a name="reset_add_gw_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetAddGwMetadata"></a>

```python
def reset_add_gw_metadata() -> None
```

##### `reset_pr_allowed` <a name="reset_pr_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetPrAllowed"></a>

```python
def reset_pr_allowed() -> None
```

##### `reset_ra_allowed` <a name="reset_ra_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.resetRaAllowed"></a>

```python
def reset_ra_allowed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.channelMask">channel_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq">dev_status_req_freq</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize">dl_bucket_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRate">dl_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy">dl_rate_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMax">dr_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMin">dr_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed">hr_allowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity">min_gw_diversity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc">nwk_geo_loc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery">report_dev_status_battery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin">report_dev_status_margin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.targetPer">target_per</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize">ul_bucket_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRate">ul_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy">ul_rate_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadataInput">add_gw_metadata_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowedInput">pr_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowedInput">ra_allowed_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata">add_gw_metadata</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed">pr_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed">ra_allowed</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_mask`<sup>Required</sup> <a name="channel_mask" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.channelMask"></a>

```python
channel_mask: str
```

- *Type:* str

---

##### `dev_status_req_freq`<sup>Required</sup> <a name="dev_status_req_freq" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq"></a>

```python
dev_status_req_freq: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_bucket_size`<sup>Required</sup> <a name="dl_bucket_size" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize"></a>

```python
dl_bucket_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_rate`<sup>Required</sup> <a name="dl_rate" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRate"></a>

```python
dl_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_rate_policy`<sup>Required</sup> <a name="dl_rate_policy" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy"></a>

```python
dl_rate_policy: str
```

- *Type:* str

---

##### `dr_max`<sup>Required</sup> <a name="dr_max" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMax"></a>

```python
dr_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dr_min`<sup>Required</sup> <a name="dr_min" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.drMin"></a>

```python
dr_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hr_allowed`<sup>Required</sup> <a name="hr_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed"></a>

```python
hr_allowed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `min_gw_diversity`<sup>Required</sup> <a name="min_gw_diversity" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity"></a>

```python
min_gw_diversity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nwk_geo_loc`<sup>Required</sup> <a name="nwk_geo_loc" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc"></a>

```python
nwk_geo_loc: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `report_dev_status_battery`<sup>Required</sup> <a name="report_dev_status_battery" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery"></a>

```python
report_dev_status_battery: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `report_dev_status_margin`<sup>Required</sup> <a name="report_dev_status_margin" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin"></a>

```python
report_dev_status_margin: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `target_per`<sup>Required</sup> <a name="target_per" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.targetPer"></a>

```python
target_per: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_bucket_size`<sup>Required</sup> <a name="ul_bucket_size" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize"></a>

```python
ul_bucket_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_rate`<sup>Required</sup> <a name="ul_rate" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRate"></a>

```python
ul_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_rate_policy`<sup>Required</sup> <a name="ul_rate_policy" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy"></a>

```python
ul_rate_policy: str
```

- *Type:* str

---

##### `add_gw_metadata_input`<sup>Optional</sup> <a name="add_gw_metadata_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadataInput"></a>

```python
add_gw_metadata_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pr_allowed_input`<sup>Optional</sup> <a name="pr_allowed_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowedInput"></a>

```python
pr_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ra_allowed_input`<sup>Optional</sup> <a name="ra_allowed_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowedInput"></a>

```python
ra_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `add_gw_metadata`<sup>Required</sup> <a name="add_gw_metadata" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata"></a>

```python
add_gw_metadata: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `pr_allowed`<sup>Required</sup> <a name="pr_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed"></a>

```python
pr_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ra_allowed`<sup>Required</sup> <a name="ra_allowed" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed"></a>

```python
ra_allowed: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessServiceProfileLoRaWan
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileLoRaWan">IotwirelessServiceProfileLoRaWan</a>

---


### IotwirelessServiceProfileTagsList <a name="IotwirelessServiceProfileTagsList" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotwirelessServiceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotwirelessServiceProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>]

---


### IotwirelessServiceProfileTagsOutputReference <a name="IotwirelessServiceProfileTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotwireless_service_profile

iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotwirelessServiceProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessServiceProfile.IotwirelessServiceProfileTags">IotwirelessServiceProfileTags</a>

---



