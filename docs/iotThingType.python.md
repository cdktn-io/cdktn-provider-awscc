# `iotThingType` Submodule <a name="`iotThingType` Submodule" id="@cdktn/provider-awscc.iotThingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingType <a name="IotThingType" id="@cdktn/provider-awscc.iotThingType.IotThingType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type awscc_iot_thing_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingType(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deprecate_thing_type: bool | IResolvable = None,
  tags: IResolvable | typing.List[IotThingTypeTags] = None,
  thing_type_name: str = None,
  thing_type_properties: IotThingTypeThingTypeProperties = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.deprecateThingType">deprecate_thing_type</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.thingTypeName">thing_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.thingTypeProperties">thing_type_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deprecate_thing_type`<sup>Optional</sup> <a name="deprecate_thing_type" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.deprecateThingType"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#tags IotThingType#tags}

---

##### `thing_type_name`<sup>Optional</sup> <a name="thing_type_name" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.thingTypeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}.

---

##### `thing_type_properties`<sup>Optional</sup> <a name="thing_type_properties" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.thingTypeProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties">put_thing_type_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetDeprecateThingType">reset_deprecate_thing_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeName">reset_thing_type_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeProperties">reset_thing_type_properties</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotThingType.IotThingType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotThingType.IotThingType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotThingType.IotThingType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotThingType.IotThingType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotThingType.IotThingType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotThingType.IotThingType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotThingType.IotThingType.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotThingTypeTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]

---

##### `put_thing_type_properties` <a name="put_thing_type_properties" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties"></a>

```python
def put_thing_type_properties(
  mqtt5_configuration: IotThingTypeThingTypePropertiesMqtt5Configuration = None,
  searchable_attributes: typing.List[str] = None,
  thing_type_description: str = None
) -> None
```

###### `mqtt5_configuration`<sup>Optional</sup> <a name="mqtt5_configuration" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties.parameter.mqtt5Configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#mqtt_5_configuration IotThingType#mqtt_5_configuration}.

---

###### `searchable_attributes`<sup>Optional</sup> <a name="searchable_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties.parameter.searchableAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}.

---

###### `thing_type_description`<sup>Optional</sup> <a name="thing_type_description" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties.parameter.thingTypeDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_description IotThingType#thing_type_description}.

---

##### `reset_deprecate_thing_type` <a name="reset_deprecate_thing_type" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetDeprecateThingType"></a>

```python
def reset_deprecate_thing_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_thing_type_name` <a name="reset_thing_type_name" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeName"></a>

```python
def reset_thing_type_name() -> None
```

##### `reset_thing_type_properties` <a name="reset_thing_type_properties" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeProperties"></a>

```python
def reset_thing_type_properties() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotThingType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotThingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotThingType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotThingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotThingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList">IotThingTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeId">thing_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeProperties">thing_type_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference">IotThingTypeThingTypePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingTypeInput">deprecate_thing_type_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeNameInput">thing_type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypePropertiesInput">thing_type_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingType">deprecate_thing_type</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeName">thing_type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tags"></a>

```python
tags: IotThingTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList">IotThingTypeTagsList</a>

---

##### `thing_type_id`<sup>Required</sup> <a name="thing_type_id" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeId"></a>

```python
thing_type_id: str
```

- *Type:* str

---

##### `thing_type_properties`<sup>Required</sup> <a name="thing_type_properties" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeProperties"></a>

```python
thing_type_properties: IotThingTypeThingTypePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference">IotThingTypeThingTypePropertiesOutputReference</a>

---

##### `deprecate_thing_type_input`<sup>Optional</sup> <a name="deprecate_thing_type_input" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingTypeInput"></a>

```python
deprecate_thing_type_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotThingTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]

---

##### `thing_type_name_input`<sup>Optional</sup> <a name="thing_type_name_input" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeNameInput"></a>

```python
thing_type_name_input: str
```

- *Type:* str

---

##### `thing_type_properties_input`<sup>Optional</sup> <a name="thing_type_properties_input" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypePropertiesInput"></a>

```python
thing_type_properties_input: IResolvable | IotThingTypeThingTypeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

---

##### `deprecate_thing_type`<sup>Required</sup> <a name="deprecate_thing_type" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingType"></a>

```python
deprecate_thing_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `thing_type_name`<sup>Required</sup> <a name="thing_type_name" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeName"></a>

```python
thing_type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingTypeConfig <a name="IotThingTypeConfig" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deprecate_thing_type: bool | IResolvable = None,
  tags: IResolvable | typing.List[IotThingTypeTags] = None,
  thing_type_name: str = None,
  thing_type_properties: IotThingTypeThingTypeProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.deprecateThingType">deprecate_thing_type</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeName">thing_type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeProperties">thing_type_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deprecate_thing_type`<sup>Optional</sup> <a name="deprecate_thing_type" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.deprecateThingType"></a>

```python
deprecate_thing_type: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotThingTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#tags IotThingType#tags}

---

##### `thing_type_name`<sup>Optional</sup> <a name="thing_type_name" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeName"></a>

```python
thing_type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}.

---

##### `thing_type_properties`<sup>Optional</sup> <a name="thing_type_properties" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeProperties"></a>

```python
thing_type_properties: IotThingTypeThingTypeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}.

---

### IotThingTypeTags <a name="IotThingTypeTags" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.key">key</a></code> | <code>str</code> | Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.value">value</a></code> | <code>str</code> | Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#key IotThingType#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#value IotThingType#value}

---

### IotThingTypeThingTypeProperties <a name="IotThingTypeThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypeProperties(
  mqtt5_configuration: IotThingTypeThingTypePropertiesMqtt5Configuration = None,
  searchable_attributes: typing.List[str] = None,
  thing_type_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.mqtt5Configuration">mqtt5_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#mqtt_5_configuration IotThingType#mqtt_5_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.searchableAttributes">searchable_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.thingTypeDescription">thing_type_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_description IotThingType#thing_type_description}. |

---

##### `mqtt5_configuration`<sup>Optional</sup> <a name="mqtt5_configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.mqtt5Configuration"></a>

```python
mqtt5_configuration: IotThingTypeThingTypePropertiesMqtt5Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#mqtt_5_configuration IotThingType#mqtt_5_configuration}.

---

##### `searchable_attributes`<sup>Optional</sup> <a name="searchable_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.searchableAttributes"></a>

```python
searchable_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}.

---

##### `thing_type_description`<sup>Optional</sup> <a name="thing_type_description" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.thingTypeDescription"></a>

```python
thing_type_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_type_description IotThingType#thing_type_description}.

---

### IotThingTypeThingTypePropertiesMqtt5Configuration <a name="IotThingTypeThingTypePropertiesMqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration(
  propagating_attributes: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.property.propagatingAttributes">propagating_attributes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#propagating_attributes IotThingType#propagating_attributes}. |

---

##### `propagating_attributes`<sup>Optional</sup> <a name="propagating_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.property.propagatingAttributes"></a>

```python
propagating_attributes: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#propagating_attributes IotThingType#propagating_attributes}.

---

### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes(
  connection_attribute: str = None,
  thing_attribute: str = None,
  user_property_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.connectionAttribute">connection_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#connection_attribute IotThingType#connection_attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.thingAttribute">thing_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_attribute IotThingType#thing_attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.userPropertyKey">user_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#user_property_key IotThingType#user_property_key}. |

---

##### `connection_attribute`<sup>Optional</sup> <a name="connection_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.connectionAttribute"></a>

```python
connection_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#connection_attribute IotThingType#connection_attribute}.

---

##### `thing_attribute`<sup>Optional</sup> <a name="thing_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.thingAttribute"></a>

```python
thing_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#thing_attribute IotThingType#thing_attribute}.

---

##### `user_property_key`<sup>Optional</sup> <a name="user_property_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.userPropertyKey"></a>

```python
user_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#user_property_key IotThingType#user_property_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotThingTypeTagsList <a name="IotThingTypeTagsList" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotThingTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotThingTypeTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>]

---


### IotThingTypeTagsOutputReference <a name="IotThingTypeTagsOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotThingTypeTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags">IotThingTypeTags</a>

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes">put_propagating_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resetPropagatingAttributes">reset_propagating_attributes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_propagating_attributes` <a name="put_propagating_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes"></a>

```python
def put_propagating_attributes(
  value: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]

---

##### `reset_propagating_attributes` <a name="reset_propagating_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resetPropagatingAttributes"></a>

```python
def reset_propagating_attributes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributes">propagating_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributesInput">propagating_attributes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `propagating_attributes`<sup>Required</sup> <a name="propagating_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributes"></a>

```python
propagating_attributes: IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList</a>

---

##### `propagating_attributes_input`<sup>Optional</sup> <a name="propagating_attributes_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributesInput"></a>

```python
propagating_attributes_input: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotThingTypeThingTypePropertiesMqtt5Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetConnectionAttribute">reset_connection_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetThingAttribute">reset_thing_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetUserPropertyKey">reset_user_property_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_attribute` <a name="reset_connection_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetConnectionAttribute"></a>

```python
def reset_connection_attribute() -> None
```

##### `reset_thing_attribute` <a name="reset_thing_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetThingAttribute"></a>

```python
def reset_thing_attribute() -> None
```

##### `reset_user_property_key` <a name="reset_user_property_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetUserPropertyKey"></a>

```python
def reset_user_property_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttributeInput">connection_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttributeInput">thing_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKeyInput">user_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttribute">connection_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttribute">thing_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKey">user_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_attribute_input`<sup>Optional</sup> <a name="connection_attribute_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttributeInput"></a>

```python
connection_attribute_input: str
```

- *Type:* str

---

##### `thing_attribute_input`<sup>Optional</sup> <a name="thing_attribute_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttributeInput"></a>

```python
thing_attribute_input: str
```

- *Type:* str

---

##### `user_property_key_input`<sup>Optional</sup> <a name="user_property_key_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKeyInput"></a>

```python
user_property_key_input: str
```

- *Type:* str

---

##### `connection_attribute`<sup>Required</sup> <a name="connection_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttribute"></a>

```python
connection_attribute: str
```

- *Type:* str

---

##### `thing_attribute`<sup>Required</sup> <a name="thing_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttribute"></a>

```python
thing_attribute: str
```

- *Type:* str

---

##### `user_property_key`<sup>Required</sup> <a name="user_property_key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKey"></a>

```python
user_property_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>

---


### IotThingTypeThingTypePropertiesOutputReference <a name="IotThingTypeThingTypePropertiesOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iot_thing_type

iotThingType.IotThingTypeThingTypePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration">put_mqtt5_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetMqtt5Configuration">reset_mqtt5_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetSearchableAttributes">reset_searchable_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetThingTypeDescription">reset_thing_type_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mqtt5_configuration` <a name="put_mqtt5_configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration"></a>

```python
def put_mqtt5_configuration(
  propagating_attributes: IResolvable | typing.List[IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes] = None
) -> None
```

###### `propagating_attributes`<sup>Optional</sup> <a name="propagating_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration.parameter.propagatingAttributes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_thing_type#propagating_attributes IotThingType#propagating_attributes}.

---

##### `reset_mqtt5_configuration` <a name="reset_mqtt5_configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetMqtt5Configuration"></a>

```python
def reset_mqtt5_configuration() -> None
```

##### `reset_searchable_attributes` <a name="reset_searchable_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetSearchableAttributes"></a>

```python
def reset_searchable_attributes() -> None
```

##### `reset_thing_type_description` <a name="reset_thing_type_description" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetThingTypeDescription"></a>

```python
def reset_thing_type_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5Configuration">mqtt5_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference">IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5ConfigurationInput">mqtt5_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributesInput">searchable_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescriptionInput">thing_type_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributes">searchable_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescription">thing_type_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqtt5_configuration`<sup>Required</sup> <a name="mqtt5_configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5Configuration"></a>

```python
mqtt5_configuration: IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference">IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference</a>

---

##### `mqtt5_configuration_input`<sup>Optional</sup> <a name="mqtt5_configuration_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5ConfigurationInput"></a>

```python
mqtt5_configuration_input: IResolvable | IotThingTypeThingTypePropertiesMqtt5Configuration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

---

##### `searchable_attributes_input`<sup>Optional</sup> <a name="searchable_attributes_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributesInput"></a>

```python
searchable_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thing_type_description_input`<sup>Optional</sup> <a name="thing_type_description_input" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescriptionInput"></a>

```python
thing_type_description_input: str
```

- *Type:* str

---

##### `searchable_attributes`<sup>Required</sup> <a name="searchable_attributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributes"></a>

```python
searchable_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `thing_type_description`<sup>Required</sup> <a name="thing_type_description" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescription"></a>

```python
thing_type_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotThingTypeThingTypeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

---



