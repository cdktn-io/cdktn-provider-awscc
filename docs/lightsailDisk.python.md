# `lightsailDisk` Submodule <a name="`lightsailDisk` Submodule" id="@cdktn/provider-awscc.lightsailDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDisk <a name="LightsailDisk" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk awscc_lightsail_disk}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDisk(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disk_name: str,
  size_in_gb: typing.Union[int, float],
  add_ons: IResolvable | typing.List[LightsailDiskAddOns] = None,
  availability_zone: str = None,
  location: LightsailDiskLocation = None,
  tags: IResolvable | typing.List[LightsailDiskTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.diskName">disk_name</a></code> | <code>str</code> | The names to use for your new Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.addOns">add_ons</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]</code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.diskName"></a>

- *Type:* str

The names to use for your new Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#disk_name LightsailDisk#disk_name}

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.sizeInGb"></a>

- *Type:* typing.Union[int, float]

Size of the Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#size_in_gb LightsailDisk#size_in_gb}

---

##### `add_ons`<sup>Optional</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.addOns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#add_ons LightsailDisk#add_ons}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#availability_zone LightsailDisk#availability_zone}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#location LightsailDisk#location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#tags LightsailDisk#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putAddOns">put_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetAddOns">reset_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_add_ons` <a name="put_add_ons" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putAddOns"></a>

```python
def put_add_ons(
  value: IResolvable | typing.List[LightsailDiskAddOns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putAddOns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putLocation"></a>

```python
def put_location() -> None
```

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailDiskTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]

---

##### `reset_add_ons` <a name="reset_add_ons" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetAddOns"></a>

```python
def reset_add_ons() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailDisk resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDisk.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDisk.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDisk.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDisk.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailDisk resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailDisk to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.addOns">add_ons</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList">LightsailDiskAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.attachedTo">attached_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.attachmentState">attachment_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskArn">disk_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.isAttached">is_attached</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference">LightsailDiskLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.supportCode">support_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList">LightsailDiskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.addOnsInput">add_ons_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.sizeInGbInput">size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `add_ons`<sup>Required</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.addOns"></a>

```python
add_ons: LightsailDiskAddOnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList">LightsailDiskAddOnsList</a>

---

##### `attached_to`<sup>Required</sup> <a name="attached_to" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.attachedTo"></a>

```python
attached_to: str
```

- *Type:* str

---

##### `attachment_state`<sup>Required</sup> <a name="attachment_state" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.attachmentState"></a>

```python
attachment_state: str
```

- *Type:* str

---

##### `disk_arn`<sup>Required</sup> <a name="disk_arn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskArn"></a>

```python
disk_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_attached`<sup>Required</sup> <a name="is_attached" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.isAttached"></a>

```python
is_attached: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.location"></a>

```python
location: LightsailDiskLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference">LightsailDiskLocationOutputReference</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `support_code`<sup>Required</sup> <a name="support_code" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.supportCode"></a>

```python
support_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tags"></a>

```python
tags: LightsailDiskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList">LightsailDiskTagsList</a>

---

##### `add_ons_input`<sup>Optional</sup> <a name="add_ons_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.addOnsInput"></a>

```python
add_ons_input: IResolvable | typing.List[LightsailDiskAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.locationInput"></a>

```python
location_input: IResolvable | LightsailDiskLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a>

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.sizeInGbInput"></a>

```python
size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailDiskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDisk.LightsailDisk.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDiskAddOns <a name="LightsailDiskAddOns" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskAddOns(
  add_on_type: str = None,
  auto_snapshot_add_on_request: LightsailDiskAddOnsAutoSnapshotAddOnRequest = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.addOnType">add_on_type</a></code> | <code>str</code> | The add-on type. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.autoSnapshotAddOnRequest">auto_snapshot_add_on_request</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a></code> | An object that represents additional parameters when enabling or modifying the automatic snapshot add-on. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.status">status</a></code> | <code>str</code> | Status of the Addon. |

---

##### `add_on_type`<sup>Optional</sup> <a name="add_on_type" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.addOnType"></a>

```python
add_on_type: str
```

- *Type:* str

The add-on type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#add_on_type LightsailDisk#add_on_type}

---

##### `auto_snapshot_add_on_request`<sup>Optional</sup> <a name="auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.autoSnapshotAddOnRequest"></a>

```python
auto_snapshot_add_on_request: LightsailDiskAddOnsAutoSnapshotAddOnRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a>

An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#auto_snapshot_add_on_request LightsailDisk#auto_snapshot_add_on_request}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#status LightsailDisk#status}

---

### LightsailDiskAddOnsAutoSnapshotAddOnRequest <a name="LightsailDiskAddOnsAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest(
  snapshot_time_of_day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay">snapshot_time_of_day</a></code> | <code>str</code> | The daily time when an automatic snapshot will be created. |

---

##### `snapshot_time_of_day`<sup>Optional</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay"></a>

```python
snapshot_time_of_day: str
```

- *Type:* str

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#snapshot_time_of_day LightsailDisk#snapshot_time_of_day}

---

### LightsailDiskConfig <a name="LightsailDiskConfig" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  disk_name: str,
  size_in_gb: typing.Union[int, float],
  add_ons: IResolvable | typing.List[LightsailDiskAddOns] = None,
  availability_zone: str = None,
  location: LightsailDiskLocation = None,
  tags: IResolvable | typing.List[LightsailDiskTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.diskName">disk_name</a></code> | <code>str</code> | The names to use for your new Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.sizeInGb">size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.addOns">add_ons</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]</code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

The names to use for your new Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#disk_name LightsailDisk#disk_name}

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.sizeInGb"></a>

```python
size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#size_in_gb LightsailDisk#size_in_gb}

---

##### `add_ons`<sup>Optional</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.addOns"></a>

```python
add_ons: IResolvable | typing.List[LightsailDiskAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#add_ons LightsailDisk#add_ons}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#availability_zone LightsailDisk#availability_zone}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.location"></a>

```python
location: LightsailDiskLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#location LightsailDisk#location}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailDiskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#tags LightsailDisk#tags}

---

### LightsailDiskLocation <a name="LightsailDiskLocation" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskLocation()
```


### LightsailDiskTags <a name="LightsailDiskTags" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#key LightsailDisk#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#value LightsailDisk#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference <a name="LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay">reset_snapshot_time_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_snapshot_time_of_day` <a name="reset_snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay"></a>

```python
def reset_snapshot_time_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput">snapshot_time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay">snapshot_time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_time_of_day_input`<sup>Optional</sup> <a name="snapshot_time_of_day_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput"></a>

```python
snapshot_time_of_day_input: str
```

- *Type:* str

---

##### `snapshot_time_of_day`<sup>Required</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay"></a>

```python
snapshot_time_of_day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDiskAddOnsAutoSnapshotAddOnRequest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a>

---


### LightsailDiskAddOnsList <a name="LightsailDiskAddOnsList" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskAddOnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDiskAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDiskAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>]

---


### LightsailDiskAddOnsOutputReference <a name="LightsailDiskAddOnsOutputReference" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskAddOnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.putAutoSnapshotAddOnRequest">put_auto_snapshot_add_on_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetAddOnType">reset_add_on_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetAutoSnapshotAddOnRequest">reset_auto_snapshot_add_on_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_snapshot_add_on_request` <a name="put_auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.putAutoSnapshotAddOnRequest"></a>

```python
def put_auto_snapshot_add_on_request(
  snapshot_time_of_day: str = None
) -> None
```

###### `snapshot_time_of_day`<sup>Optional</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.putAutoSnapshotAddOnRequest.parameter.snapshotTimeOfDay"></a>

- *Type:* str

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_disk#snapshot_time_of_day LightsailDisk#snapshot_time_of_day}

---

##### `reset_add_on_type` <a name="reset_add_on_type" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetAddOnType"></a>

```python
def reset_add_on_type() -> None
```

##### `reset_auto_snapshot_add_on_request` <a name="reset_auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetAutoSnapshotAddOnRequest"></a>

```python
def reset_auto_snapshot_add_on_request() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.autoSnapshotAddOnRequest">auto_snapshot_add_on_request</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.addOnTypeInput">add_on_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.autoSnapshotAddOnRequestInput">auto_snapshot_add_on_request_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.addOnType">add_on_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_snapshot_add_on_request`<sup>Required</sup> <a name="auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.autoSnapshotAddOnRequest"></a>

```python
auto_snapshot_add_on_request: LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailDiskAddOnsAutoSnapshotAddOnRequestOutputReference</a>

---

##### `add_on_type_input`<sup>Optional</sup> <a name="add_on_type_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.addOnTypeInput"></a>

```python
add_on_type_input: str
```

- *Type:* str

---

##### `auto_snapshot_add_on_request_input`<sup>Optional</sup> <a name="auto_snapshot_add_on_request_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.autoSnapshotAddOnRequestInput"></a>

```python
auto_snapshot_add_on_request_input: IResolvable | LightsailDiskAddOnsAutoSnapshotAddOnRequest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsAutoSnapshotAddOnRequest">LightsailDiskAddOnsAutoSnapshotAddOnRequest</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `add_on_type`<sup>Required</sup> <a name="add_on_type" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.addOnType"></a>

```python
add_on_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDiskAddOns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskAddOns">LightsailDiskAddOns</a>

---


### LightsailDiskLocationOutputReference <a name="LightsailDiskLocationOutputReference" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDiskLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskLocation">LightsailDiskLocation</a>

---


### LightsailDiskTagsList <a name="LightsailDiskTagsList" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailDiskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailDiskTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>]

---


### LightsailDiskTagsOutputReference <a name="LightsailDiskTagsOutputReference" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_disk

lightsailDisk.LightsailDiskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailDisk.LightsailDiskTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailDiskTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDisk.LightsailDiskTags">LightsailDiskTags</a>

---



