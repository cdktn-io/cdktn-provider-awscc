# `mediatailorLiveSource` Submodule <a name="`mediatailorLiveSource` Submodule" id="@cdktn/provider-awscc.mediatailorLiveSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorLiveSource <a name="MediatailorLiveSource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source awscc_mediatailor_live_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSource(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_package_configurations: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations],
  live_source_name: str,
  source_location_name: str,
  tags: IResolvable | typing.List[MediatailorLiveSourceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.httpPackageConfigurations">http_package_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]</code> | <p>A list of HTTP package configuration parameters for this live source.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.liveSourceName">live_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#live_source_name MediatailorLiveSource#live_source_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.sourceLocationName">source_location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#source_location_name MediatailorLiveSource#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]</code> | The tags to assign to the live source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_package_configurations`<sup>Required</sup> <a name="http_package_configurations" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.httpPackageConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]

<p>A list of HTTP package configuration parameters for this live source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#http_package_configurations MediatailorLiveSource#http_package_configurations}

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.liveSourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#live_source_name MediatailorLiveSource#live_source_name}.

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.sourceLocationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#source_location_name MediatailorLiveSource#source_location_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]

The tags to assign to the live source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#tags MediatailorLiveSource#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putHttpPackageConfigurations">put_http_package_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_http_package_configurations` <a name="put_http_package_configurations" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putHttpPackageConfigurations"></a>

```python
def put_http_package_configurations(
  value: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putHttpPackageConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediatailorLiveSourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediatailorLiveSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isConstruct"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediatailorLiveSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediatailorLiveSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediatailorLiveSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorLiveSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.httpPackageConfigurations">http_package_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList">MediatailorLiveSourceHttpPackageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList">MediatailorLiveSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.httpPackageConfigurationsInput">http_package_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.liveSourceNameInput">live_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.liveSourceName">live_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `http_package_configurations`<sup>Required</sup> <a name="http_package_configurations" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.httpPackageConfigurations"></a>

```python
http_package_configurations: MediatailorLiveSourceHttpPackageConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList">MediatailorLiveSourceHttpPackageConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tags"></a>

```python
tags: MediatailorLiveSourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList">MediatailorLiveSourceTagsList</a>

---

##### `http_package_configurations_input`<sup>Optional</sup> <a name="http_package_configurations_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.httpPackageConfigurationsInput"></a>

```python
http_package_configurations_input: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]

---

##### `live_source_name_input`<sup>Optional</sup> <a name="live_source_name_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.liveSourceNameInput"></a>

```python
live_source_name_input: str
```

- *Type:* str

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediatailorLiveSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorLiveSourceConfig <a name="MediatailorLiveSourceConfig" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_package_configurations: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations],
  live_source_name: str,
  source_location_name: str,
  tags: IResolvable | typing.List[MediatailorLiveSourceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.httpPackageConfigurations">http_package_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]</code> | <p>A list of HTTP package configuration parameters for this live source.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.liveSourceName">live_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#live_source_name MediatailorLiveSource#live_source_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#source_location_name MediatailorLiveSource#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]</code> | The tags to assign to the live source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_package_configurations`<sup>Required</sup> <a name="http_package_configurations" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.httpPackageConfigurations"></a>

```python
http_package_configurations: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]

<p>A list of HTTP package configuration parameters for this live source.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#http_package_configurations MediatailorLiveSource#http_package_configurations}

---

##### `live_source_name`<sup>Required</sup> <a name="live_source_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.liveSourceName"></a>

```python
live_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#live_source_name MediatailorLiveSource#live_source_name}.

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#source_location_name MediatailorLiveSource#source_location_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediatailorLiveSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]

The tags to assign to the live source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#tags MediatailorLiveSource#tags}

---

### MediatailorLiveSourceHttpPackageConfigurations <a name="MediatailorLiveSourceHttpPackageConfigurations" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations(
  path: str,
  source_group: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.path">path</a></code> | <code>str</code> | <p>The relative path to the URL for this VOD source. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.sourceGroup">source_group</a></code> | <code>str</code> | <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#type MediatailorLiveSource#type}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.path"></a>

```python
path: str
```

- *Type:* str

<p>The relative path to the URL for this VOD source.

This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#path MediatailorLiveSource#path}

---

##### `source_group`<sup>Required</sup> <a name="source_group" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.sourceGroup"></a>

```python
source_group: str
```

- *Type:* str

<p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#source_group MediatailorLiveSource#source_group}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#type MediatailorLiveSource#type}.

---

### MediatailorLiveSourceTags <a name="MediatailorLiveSourceTags" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#key MediatailorLiveSource#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#value MediatailorLiveSource#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#key MediatailorLiveSource#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediatailor_live_source#value MediatailorLiveSource#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorLiveSourceHttpPackageConfigurationsList <a name="MediatailorLiveSourceHttpPackageConfigurationsList" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorLiveSourceHttpPackageConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorLiveSourceHttpPackageConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>]

---


### MediatailorLiveSourceHttpPackageConfigurationsOutputReference <a name="MediatailorLiveSourceHttpPackageConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.sourceGroupInput">source_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.sourceGroup">source_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `source_group_input`<sup>Optional</sup> <a name="source_group_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.sourceGroupInput"></a>

```python
source_group_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `source_group`<sup>Required</sup> <a name="source_group" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.sourceGroup"></a>

```python
source_group: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorLiveSourceHttpPackageConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceHttpPackageConfigurations">MediatailorLiveSourceHttpPackageConfigurations</a>

---


### MediatailorLiveSourceTagsList <a name="MediatailorLiveSourceTagsList" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorLiveSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorLiveSourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>]

---


### MediatailorLiveSourceTagsOutputReference <a name="MediatailorLiveSourceTagsOutputReference" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_live_source

mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorLiveSourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorLiveSource.MediatailorLiveSourceTags">MediatailorLiveSourceTags</a>

---



