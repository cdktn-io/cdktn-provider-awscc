# `medialiveMultiplex` Submodule <a name="`medialiveMultiplex` Submodule" id="@cdktn/provider-awscc.medialiveMultiplex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveMultiplex <a name="MedialiveMultiplex" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex awscc_medialive_multiplex}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplex(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zones: typing.List[str],
  multiplex_settings: MedialiveMultiplexMultiplexSettings,
  name: str,
  destinations: IResolvable | typing.List[MedialiveMultiplexDestinations] = None,
  tags: IResolvable | typing.List[MedialiveMultiplexTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | A list of availability zones for the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.multiplexSettings">multiplex_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | Configuration for a multiplex event. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]</code> | A list of the multiplex output destinations. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]</code> | A collection of key-value pairs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

A list of availability zones for the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}

---

##### `multiplex_settings`<sup>Required</sup> <a name="multiplex_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.multiplexSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

Configuration for a multiplex event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.name"></a>

- *Type:* str

Name of multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.destinations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]

A list of the multiplex output destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings">put_multiplex_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[MedialiveMultiplexDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]

---

##### `put_multiplex_settings` <a name="put_multiplex_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings"></a>

```python
def put_multiplex_settings(
  transport_stream_bitrate: typing.Union[int, float],
  transport_stream_id: typing.Union[int, float],
  maximum_video_buffer_delay_milliseconds: typing.Union[int, float] = None,
  transport_stream_reserved_bitrate: typing.Union[int, float] = None
) -> None
```

###### `transport_stream_bitrate`<sup>Required</sup> <a name="transport_stream_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.transportStreamBitrate"></a>

- *Type:* typing.Union[int, float]

Transport stream bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}

---

###### `transport_stream_id`<sup>Required</sup> <a name="transport_stream_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.transportStreamId"></a>

- *Type:* typing.Union[int, float]

Transport stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}

---

###### `maximum_video_buffer_delay_milliseconds`<sup>Optional</sup> <a name="maximum_video_buffer_delay_milliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.maximumVideoBufferDelayMilliseconds"></a>

- *Type:* typing.Union[int, float]

Maximum video buffer delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}

---

###### `transport_stream_reserved_bitrate`<sup>Optional</sup> <a name="transport_stream_reserved_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putMultiplexSettings.parameter.transportStreamReservedBitrate"></a>

- *Type:* typing.Union[int, float]

Transport stream reserved bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MedialiveMultiplexTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MedialiveMultiplex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MedialiveMultiplex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MedialiveMultiplex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveMultiplex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId">multiplex_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings">multiplex_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount">pipelines_running_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount">program_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput">multiplex_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinations"></a>

```python
destinations: MedialiveMultiplexDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList">MedialiveMultiplexDestinationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multiplex_id`<sup>Required</sup> <a name="multiplex_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexId"></a>

```python
multiplex_id: str
```

- *Type:* str

---

##### `multiplex_settings`<sup>Required</sup> <a name="multiplex_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettings"></a>

```python
multiplex_settings: MedialiveMultiplexMultiplexSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference">MedialiveMultiplexMultiplexSettingsOutputReference</a>

---

##### `pipelines_running_count`<sup>Required</sup> <a name="pipelines_running_count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.pipelinesRunningCount"></a>

```python
pipelines_running_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `program_count`<sup>Required</sup> <a name="program_count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.programCount"></a>

```python
program_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tags"></a>

```python
tags: MedialiveMultiplexTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList">MedialiveMultiplexTagsList</a>

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[MedialiveMultiplexDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]

---

##### `multiplex_settings_input`<sup>Optional</sup> <a name="multiplex_settings_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.multiplexSettingsInput"></a>

```python
multiplex_settings_input: IResolvable | MedialiveMultiplexMultiplexSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MedialiveMultiplexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveMultiplexConfig <a name="MedialiveMultiplexConfig" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zones: typing.List[str],
  multiplex_settings: MedialiveMultiplexMultiplexSettings,
  name: str,
  destinations: IResolvable | typing.List[MedialiveMultiplexDestinations] = None,
  tags: IResolvable | typing.List[MedialiveMultiplexTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | A list of availability zones for the multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings">multiplex_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | Configuration for a multiplex event. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name">name</a></code> | <code>str</code> | Name of multiplex. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]</code> | A list of the multiplex output destinations. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]</code> | A collection of key-value pairs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

A list of availability zones for the multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#availability_zones MedialiveMultiplex#availability_zones}

---

##### `multiplex_settings`<sup>Required</sup> <a name="multiplex_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.multiplexSettings"></a>

```python
multiplex_settings: MedialiveMultiplexMultiplexSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

Configuration for a multiplex event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_settings MedialiveMultiplex#multiplex_settings}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of multiplex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#name MedialiveMultiplex#name}

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.destinations"></a>

```python
destinations: IResolvable | typing.List[MedialiveMultiplexDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]

A list of the multiplex output destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#destinations MedialiveMultiplex#destinations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MedialiveMultiplexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#tags MedialiveMultiplex#tags}

---

### MedialiveMultiplexDestinations <a name="MedialiveMultiplexDestinations" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexDestinations(
  multiplex_media_connect_output_destination_settings: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings">multiplex_media_connect_output_destination_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | Multiplex MediaConnect output destination settings. |

---

##### `multiplex_media_connect_output_destination_settings`<sup>Optional</sup> <a name="multiplex_media_connect_output_destination_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations.property.multiplexMediaConnectOutputDestinationSettings"></a>

```python
multiplex_media_connect_output_destination_settings: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

Multiplex MediaConnect output destination settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#multiplex_media_connect_output_destination_settings MedialiveMultiplex#multiplex_media_connect_output_destination_settings}

---

### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings(
  entitlement_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | The MediaConnect entitlement ARN available as a Flow source. |

---

##### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

The MediaConnect entitlement ARN available as a Flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#entitlement_arn MedialiveMultiplex#entitlement_arn}

---

### MedialiveMultiplexMultiplexSettings <a name="MedialiveMultiplexMultiplexSettings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexMultiplexSettings(
  transport_stream_bitrate: typing.Union[int, float],
  transport_stream_id: typing.Union[int, float],
  maximum_video_buffer_delay_milliseconds: typing.Union[int, float] = None,
  transport_stream_reserved_bitrate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate">transport_stream_bitrate</a></code> | <code>typing.Union[int, float]</code> | Transport stream bit rate. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId">transport_stream_id</a></code> | <code>typing.Union[int, float]</code> | Transport stream ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds">maximum_video_buffer_delay_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Maximum video buffer delay in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate">transport_stream_reserved_bitrate</a></code> | <code>typing.Union[int, float]</code> | Transport stream reserved bit rate. |

---

##### `transport_stream_bitrate`<sup>Required</sup> <a name="transport_stream_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamBitrate"></a>

```python
transport_stream_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Transport stream bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_bitrate MedialiveMultiplex#transport_stream_bitrate}

---

##### `transport_stream_id`<sup>Required</sup> <a name="transport_stream_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamId"></a>

```python
transport_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Transport stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_id MedialiveMultiplex#transport_stream_id}

---

##### `maximum_video_buffer_delay_milliseconds`<sup>Optional</sup> <a name="maximum_video_buffer_delay_milliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.maximumVideoBufferDelayMilliseconds"></a>

```python
maximum_video_buffer_delay_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum video buffer delay in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#maximum_video_buffer_delay_milliseconds MedialiveMultiplex#maximum_video_buffer_delay_milliseconds}

---

##### `transport_stream_reserved_bitrate`<sup>Optional</sup> <a name="transport_stream_reserved_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings.property.transportStreamReservedBitrate"></a>

```python
transport_stream_reserved_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Transport stream reserved bit rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#transport_stream_reserved_bitrate MedialiveMultiplex#transport_stream_reserved_bitrate}

---

### MedialiveMultiplexTags <a name="MedialiveMultiplexTags" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#key MedialiveMultiplex#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#value MedialiveMultiplex#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveMultiplexDestinationsList <a name="MedialiveMultiplexDestinationsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveMultiplexDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>]

---


### MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference <a name="MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn">reset_entitlement_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entitlement_arn` <a name="reset_entitlement_arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.resetEntitlementArn"></a>

```python
def reset_entitlement_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput">entitlement_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn">entitlement_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entitlement_arn_input`<sup>Optional</sup> <a name="entitlement_arn_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArnInput"></a>

```python
entitlement_arn_input: str
```

- *Type:* str

---

##### `entitlement_arn`<sup>Required</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.entitlementArn"></a>

```python
entitlement_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---


### MedialiveMultiplexDestinationsOutputReference <a name="MedialiveMultiplexDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings">put_multiplex_media_connect_output_destination_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings">reset_multiplex_media_connect_output_destination_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multiplex_media_connect_output_destination_settings` <a name="put_multiplex_media_connect_output_destination_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings"></a>

```python
def put_multiplex_media_connect_output_destination_settings(
  entitlement_arn: str = None
) -> None
```

###### `entitlement_arn`<sup>Optional</sup> <a name="entitlement_arn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.putMultiplexMediaConnectOutputDestinationSettings.parameter.entitlementArn"></a>

- *Type:* str

The MediaConnect entitlement ARN available as a Flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/medialive_multiplex#entitlement_arn MedialiveMultiplex#entitlement_arn}

---

##### `reset_multiplex_media_connect_output_destination_settings` <a name="reset_multiplex_media_connect_output_destination_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.resetMultiplexMediaConnectOutputDestinationSettings"></a>

```python
def reset_multiplex_media_connect_output_destination_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings">multiplex_media_connect_output_destination_settings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput">multiplex_media_connect_output_destination_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multiplex_media_connect_output_destination_settings`<sup>Required</sup> <a name="multiplex_media_connect_output_destination_settings" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettings"></a>

```python
multiplex_media_connect_output_destination_settings: MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettingsOutputReference</a>

---

##### `multiplex_media_connect_output_destination_settings_input`<sup>Optional</sup> <a name="multiplex_media_connect_output_destination_settings_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.multiplexMediaConnectOutputDestinationSettingsInput"></a>

```python
multiplex_media_connect_output_destination_settings_input: IResolvable | MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings">MedialiveMultiplexDestinationsMultiplexMediaConnectOutputDestinationSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveMultiplexDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexDestinations">MedialiveMultiplexDestinations</a>

---


### MedialiveMultiplexMultiplexSettingsOutputReference <a name="MedialiveMultiplexMultiplexSettingsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds">reset_maximum_video_buffer_delay_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate">reset_transport_stream_reserved_bitrate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_video_buffer_delay_milliseconds` <a name="reset_maximum_video_buffer_delay_milliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetMaximumVideoBufferDelayMilliseconds"></a>

```python
def reset_maximum_video_buffer_delay_milliseconds() -> None
```

##### `reset_transport_stream_reserved_bitrate` <a name="reset_transport_stream_reserved_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.resetTransportStreamReservedBitrate"></a>

```python
def reset_transport_stream_reserved_bitrate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput">maximum_video_buffer_delay_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput">transport_stream_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput">transport_stream_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput">transport_stream_reserved_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds">maximum_video_buffer_delay_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate">transport_stream_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId">transport_stream_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate">transport_stream_reserved_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maximum_video_buffer_delay_milliseconds_input`<sup>Optional</sup> <a name="maximum_video_buffer_delay_milliseconds_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMillisecondsInput"></a>

```python
maximum_video_buffer_delay_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_bitrate_input`<sup>Optional</sup> <a name="transport_stream_bitrate_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrateInput"></a>

```python
transport_stream_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_id_input`<sup>Optional</sup> <a name="transport_stream_id_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamIdInput"></a>

```python
transport_stream_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_reserved_bitrate_input`<sup>Optional</sup> <a name="transport_stream_reserved_bitrate_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrateInput"></a>

```python
transport_stream_reserved_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_video_buffer_delay_milliseconds`<sup>Required</sup> <a name="maximum_video_buffer_delay_milliseconds" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.maximumVideoBufferDelayMilliseconds"></a>

```python
maximum_video_buffer_delay_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_bitrate`<sup>Required</sup> <a name="transport_stream_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamBitrate"></a>

```python
transport_stream_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_id`<sup>Required</sup> <a name="transport_stream_id" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamId"></a>

```python
transport_stream_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_stream_reserved_bitrate`<sup>Required</sup> <a name="transport_stream_reserved_bitrate" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.transportStreamReservedBitrate"></a>

```python
transport_stream_reserved_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveMultiplexMultiplexSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexMultiplexSettings">MedialiveMultiplexMultiplexSettings</a>

---


### MedialiveMultiplexTagsList <a name="MedialiveMultiplexTagsList" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveMultiplexTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MedialiveMultiplexTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>]

---


### MedialiveMultiplexTagsOutputReference <a name="MedialiveMultiplexTagsOutputReference" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import medialive_multiplex

medialiveMultiplex.MedialiveMultiplexTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MedialiveMultiplexTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.medialiveMultiplex.MedialiveMultiplexTags">MedialiveMultiplexTags</a>

---



