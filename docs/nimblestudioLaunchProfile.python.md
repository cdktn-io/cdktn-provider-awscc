# `nimblestudioLaunchProfile` Submodule <a name="`nimblestudioLaunchProfile` Submodule" id="@cdktn/provider-awscc.nimblestudioLaunchProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioLaunchProfile <a name="NimblestudioLaunchProfile" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile awscc_nimblestudio_launch_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ec2_subnet_ids: typing.List[str],
  launch_profile_protocol_versions: typing.List[str],
  name: str,
  stream_configuration: NimblestudioLaunchProfileStreamConfiguration,
  studio_component_ids: typing.List[str],
  studio_id: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.ec2SubnetIds">ec2_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.launchProfileProtocolVersions">launch_profile_protocol_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.streamConfiguration">stream_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioComponentIds">studio_component_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_subnet_ids`<sup>Required</sup> <a name="ec2_subnet_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.ec2SubnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}.

---

##### `launch_profile_protocol_versions`<sup>Required</sup> <a name="launch_profile_protocol_versions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.launchProfileProtocolVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}.

---

##### `stream_configuration`<sup>Required</sup> <a name="stream_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.streamConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}.

---

##### `studio_component_ids`<sup>Required</sup> <a name="studio_component_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioComponentIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.studioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration">put_stream_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_stream_configuration` <a name="put_stream_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration"></a>

```python
def put_stream_configuration(
  clipboard_mode: str,
  ec2_instance_types: typing.List[str],
  streaming_image_ids: typing.List[str],
  automatic_termination_mode: str = None,
  max_session_length_in_minutes: typing.Union[int, float] = None,
  max_stopped_session_length_in_minutes: typing.Union[int, float] = None,
  session_backup: NimblestudioLaunchProfileStreamConfigurationSessionBackup = None,
  session_persistence_mode: str = None,
  session_storage: NimblestudioLaunchProfileStreamConfigurationSessionStorage = None,
  volume_configuration: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration = None
) -> None
```

###### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.clipboardMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}.

---

###### `ec2_instance_types`<sup>Required</sup> <a name="ec2_instance_types" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.ec2InstanceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}.

---

###### `streaming_image_ids`<sup>Required</sup> <a name="streaming_image_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.streamingImageIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}.

---

###### `automatic_termination_mode`<sup>Optional</sup> <a name="automatic_termination_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.automaticTerminationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}.

---

###### `max_session_length_in_minutes`<sup>Optional</sup> <a name="max_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.maxSessionLengthInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}.

---

###### `max_stopped_session_length_in_minutes`<sup>Optional</sup> <a name="max_stopped_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.maxStoppedSessionLengthInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}.

---

###### `session_backup`<sup>Optional</sup> <a name="session_backup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.sessionBackup"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}.

---

###### `session_persistence_mode`<sup>Optional</sup> <a name="session_persistence_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.sessionPersistenceMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}.

---

###### `session_storage`<sup>Optional</sup> <a name="session_storage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.sessionStorage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}.

---

###### `volume_configuration`<sup>Optional</sup> <a name="volume_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.putStreamConfiguration.parameter.volumeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NimblestudioLaunchProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NimblestudioLaunchProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NimblestudioLaunchProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioLaunchProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId">launch_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration">stream_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput">ec2_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput">launch_profile_protocol_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput">stream_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput">studio_component_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput">studio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds">ec2_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions">launch_profile_protocol_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds">studio_component_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_profile_id`<sup>Required</sup> <a name="launch_profile_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileId"></a>

```python
launch_profile_id: str
```

- *Type:* str

---

##### `stream_configuration`<sup>Required</sup> <a name="stream_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfiguration"></a>

```python
stream_configuration: NimblestudioLaunchProfileStreamConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ec2_subnet_ids_input`<sup>Optional</sup> <a name="ec2_subnet_ids_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIdsInput"></a>

```python
ec2_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_profile_protocol_versions_input`<sup>Optional</sup> <a name="launch_profile_protocol_versions_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersionsInput"></a>

```python
launch_profile_protocol_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stream_configuration_input`<sup>Optional</sup> <a name="stream_configuration_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.streamConfigurationInput"></a>

```python
stream_configuration_input: IResolvable | NimblestudioLaunchProfileStreamConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---

##### `studio_component_ids_input`<sup>Optional</sup> <a name="studio_component_ids_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIdsInput"></a>

```python
studio_component_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `studio_id_input`<sup>Optional</sup> <a name="studio_id_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioIdInput"></a>

```python
studio_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_subnet_ids`<sup>Required</sup> <a name="ec2_subnet_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.ec2SubnetIds"></a>

```python
ec2_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_profile_protocol_versions`<sup>Required</sup> <a name="launch_profile_protocol_versions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.launchProfileProtocolVersions"></a>

```python
launch_profile_protocol_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `studio_component_ids`<sup>Required</sup> <a name="studio_component_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioComponentIds"></a>

```python
studio_component_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioLaunchProfileConfig <a name="NimblestudioLaunchProfileConfig" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ec2_subnet_ids: typing.List[str],
  launch_profile_protocol_versions: typing.List[str],
  name: str,
  stream_configuration: NimblestudioLaunchProfileStreamConfiguration,
  studio_component_ids: typing.List[str],
  studio_id: str,
  description: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds">ec2_subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions">launch_profile_protocol_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration">stream_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds">studio_component_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_subnet_ids`<sup>Required</sup> <a name="ec2_subnet_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.ec2SubnetIds"></a>

```python
ec2_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}.

---

##### `launch_profile_protocol_versions`<sup>Required</sup> <a name="launch_profile_protocol_versions" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.launchProfileProtocolVersions"></a>

```python
launch_profile_protocol_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#name NimblestudioLaunchProfile#name}.

---

##### `stream_configuration`<sup>Required</sup> <a name="stream_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.streamConfiguration"></a>

```python
stream_configuration: NimblestudioLaunchProfileStreamConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#stream_configuration NimblestudioLaunchProfile#stream_configuration}.

---

##### `studio_component_ids`<sup>Required</sup> <a name="studio_component_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioComponentIds"></a>

```python
studio_component_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#studio_id NimblestudioLaunchProfile#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#description NimblestudioLaunchProfile#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#tags NimblestudioLaunchProfile#tags}.

---

### NimblestudioLaunchProfileStreamConfiguration <a name="NimblestudioLaunchProfileStreamConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration(
  clipboard_mode: str,
  ec2_instance_types: typing.List[str],
  streaming_image_ids: typing.List[str],
  automatic_termination_mode: str = None,
  max_session_length_in_minutes: typing.Union[int, float] = None,
  max_stopped_session_length_in_minutes: typing.Union[int, float] = None,
  session_backup: NimblestudioLaunchProfileStreamConfigurationSessionBackup = None,
  session_persistence_mode: str = None,
  session_storage: NimblestudioLaunchProfileStreamConfigurationSessionStorage = None,
  volume_configuration: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes">ec2_instance_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds">streaming_image_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode">automatic_termination_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes">max_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes">max_stopped_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup">session_backup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode">session_persistence_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage">session_storage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration">volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}. |

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}.

---

##### `ec2_instance_types`<sup>Required</sup> <a name="ec2_instance_types" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.ec2InstanceTypes"></a>

```python
ec2_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}.

---

##### `streaming_image_ids`<sup>Required</sup> <a name="streaming_image_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.streamingImageIds"></a>

```python
streaming_image_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}.

---

##### `automatic_termination_mode`<sup>Optional</sup> <a name="automatic_termination_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.automaticTerminationMode"></a>

```python
automatic_termination_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#automatic_termination_mode NimblestudioLaunchProfile#automatic_termination_mode}.

---

##### `max_session_length_in_minutes`<sup>Optional</sup> <a name="max_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxSessionLengthInMinutes"></a>

```python
max_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}.

---

##### `max_stopped_session_length_in_minutes`<sup>Optional</sup> <a name="max_stopped_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.maxStoppedSessionLengthInMinutes"></a>

```python
max_stopped_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_stopped_session_length_in_minutes NimblestudioLaunchProfile#max_stopped_session_length_in_minutes}.

---

##### `session_backup`<sup>Optional</sup> <a name="session_backup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionBackup"></a>

```python
session_backup: NimblestudioLaunchProfileStreamConfigurationSessionBackup
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_backup NimblestudioLaunchProfile#session_backup}.

---

##### `session_persistence_mode`<sup>Optional</sup> <a name="session_persistence_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionPersistenceMode"></a>

```python
session_persistence_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_persistence_mode NimblestudioLaunchProfile#session_persistence_mode}.

---

##### `session_storage`<sup>Optional</sup> <a name="session_storage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.sessionStorage"></a>

```python
session_storage: NimblestudioLaunchProfileStreamConfigurationSessionStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#session_storage NimblestudioLaunchProfile#session_storage}.

---

##### `volume_configuration`<sup>Optional</sup> <a name="volume_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration.property.volumeConfiguration"></a>

```python
volume_configuration: NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#volume_configuration NimblestudioLaunchProfile#volume_configuration}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionBackup <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup(
  max_backups_to_retain: typing.Union[int, float] = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain">max_backups_to_retain</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |

---

##### `max_backups_to_retain`<sup>Optional</sup> <a name="max_backups_to_retain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.maxBackupsToRetain"></a>

```python
max_backups_to_retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorage <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage(
  mode: typing.List[str] = None,
  root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode">mode</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.mode"></a>

```python
mode: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

##### `root`<sup>Optional</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage.property.root"></a>

```python
root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}.

---

### NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot(
  linux: str = None,
  windows: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux">linux</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows">windows</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}. |

---

##### `linux`<sup>Optional</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.linux"></a>

```python
linux: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}.

---

##### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot.property.windows"></a>

```python
windows: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}.

---

### NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration(
  iops: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioLaunchProfileStreamConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup">put_session_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage">put_session_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration">put_volume_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode">reset_automatic_termination_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes">reset_max_session_length_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes">reset_max_stopped_session_length_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup">reset_session_backup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode">reset_session_persistence_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage">reset_session_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration">reset_volume_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_session_backup` <a name="put_session_backup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup"></a>

```python
def put_session_backup(
  max_backups_to_retain: typing.Union[int, float] = None,
  mode: str = None
) -> None
```

###### `max_backups_to_retain`<sup>Optional</sup> <a name="max_backups_to_retain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup.parameter.maxBackupsToRetain"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#max_backups_to_retain NimblestudioLaunchProfile#max_backups_to_retain}.

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionBackup.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

##### `put_session_storage` <a name="put_session_storage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage"></a>

```python
def put_session_storage(
  mode: typing.List[str] = None,
  root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage.parameter.mode"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#mode NimblestudioLaunchProfile#mode}.

---

###### `root`<sup>Optional</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putSessionStorage.parameter.root"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#root NimblestudioLaunchProfile#root}.

---

##### `put_volume_configuration` <a name="put_volume_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration"></a>

```python
def put_volume_configuration(
  iops: typing.Union[int, float] = None,
  size: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None
) -> None
```

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#iops NimblestudioLaunchProfile#iops}.

---

###### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#size NimblestudioLaunchProfile#size}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.putVolumeConfiguration.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#throughput NimblestudioLaunchProfile#throughput}.

---

##### `reset_automatic_termination_mode` <a name="reset_automatic_termination_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetAutomaticTerminationMode"></a>

```python
def reset_automatic_termination_mode() -> None
```

##### `reset_max_session_length_in_minutes` <a name="reset_max_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxSessionLengthInMinutes"></a>

```python
def reset_max_session_length_in_minutes() -> None
```

##### `reset_max_stopped_session_length_in_minutes` <a name="reset_max_stopped_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetMaxStoppedSessionLengthInMinutes"></a>

```python
def reset_max_stopped_session_length_in_minutes() -> None
```

##### `reset_session_backup` <a name="reset_session_backup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionBackup"></a>

```python
def reset_session_backup() -> None
```

##### `reset_session_persistence_mode` <a name="reset_session_persistence_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionPersistenceMode"></a>

```python
def reset_session_persistence_mode() -> None
```

##### `reset_session_storage` <a name="reset_session_storage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetSessionStorage"></a>

```python
def reset_session_storage() -> None
```

##### `reset_volume_configuration` <a name="reset_volume_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.resetVolumeConfiguration"></a>

```python
def reset_volume_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup">session_backup</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage">session_storage</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration">volume_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput">automatic_termination_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput">clipboard_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput">ec2_instance_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput">max_session_length_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput">max_stopped_session_length_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput">session_backup_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput">session_persistence_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput">session_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput">streaming_image_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput">volume_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode">automatic_termination_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes">ec2_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes">max_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes">max_stopped_session_length_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode">session_persistence_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds">streaming_image_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `session_backup`<sup>Required</sup> <a name="session_backup" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackup"></a>

```python
session_backup: NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference</a>

---

##### `session_storage`<sup>Required</sup> <a name="session_storage" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorage"></a>

```python
session_storage: NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference</a>

---

##### `volume_configuration`<sup>Required</sup> <a name="volume_configuration" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfiguration"></a>

```python
volume_configuration: NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference">NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference</a>

---

##### `automatic_termination_mode_input`<sup>Optional</sup> <a name="automatic_termination_mode_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationModeInput"></a>

```python
automatic_termination_mode_input: str
```

- *Type:* str

---

##### `clipboard_mode_input`<sup>Optional</sup> <a name="clipboard_mode_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardModeInput"></a>

```python
clipboard_mode_input: str
```

- *Type:* str

---

##### `ec2_instance_types_input`<sup>Optional</sup> <a name="ec2_instance_types_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypesInput"></a>

```python
ec2_instance_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_session_length_in_minutes_input`<sup>Optional</sup> <a name="max_session_length_in_minutes_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutesInput"></a>

```python
max_session_length_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stopped_session_length_in_minutes_input`<sup>Optional</sup> <a name="max_stopped_session_length_in_minutes_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutesInput"></a>

```python
max_stopped_session_length_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_backup_input`<sup>Optional</sup> <a name="session_backup_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionBackupInput"></a>

```python
session_backup_input: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionBackup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---

##### `session_persistence_mode_input`<sup>Optional</sup> <a name="session_persistence_mode_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceModeInput"></a>

```python
session_persistence_mode_input: str
```

- *Type:* str

---

##### `session_storage_input`<sup>Optional</sup> <a name="session_storage_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionStorageInput"></a>

```python
session_storage_input: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---

##### `streaming_image_ids_input`<sup>Optional</sup> <a name="streaming_image_ids_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIdsInput"></a>

```python
streaming_image_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volume_configuration_input`<sup>Optional</sup> <a name="volume_configuration_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.volumeConfigurationInput"></a>

```python
volume_configuration_input: IResolvable | NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---

##### `automatic_termination_mode`<sup>Required</sup> <a name="automatic_termination_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.automaticTerminationMode"></a>

```python
automatic_termination_mode: str
```

- *Type:* str

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

---

##### `ec2_instance_types`<sup>Required</sup> <a name="ec2_instance_types" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.ec2InstanceTypes"></a>

```python
ec2_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_session_length_in_minutes`<sup>Required</sup> <a name="max_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxSessionLengthInMinutes"></a>

```python
max_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stopped_session_length_in_minutes`<sup>Required</sup> <a name="max_stopped_session_length_in_minutes" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.maxStoppedSessionLengthInMinutes"></a>

```python
max_stopped_session_length_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_persistence_mode`<sup>Required</sup> <a name="session_persistence_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.sessionPersistenceMode"></a>

```python
session_persistence_mode: str
```

- *Type:* str

---

##### `streaming_image_ids`<sup>Required</sup> <a name="streaming_image_ids" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.streamingImageIds"></a>

```python
streaming_image_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioLaunchProfileStreamConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfiguration">NimblestudioLaunchProfileStreamConfiguration</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain">reset_max_backups_to_retain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_backups_to_retain` <a name="reset_max_backups_to_retain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMaxBackupsToRetain"></a>

```python
def reset_max_backups_to_retain() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput">max_backups_to_retain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain">max_backups_to_retain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_backups_to_retain_input`<sup>Optional</sup> <a name="max_backups_to_retain_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetainInput"></a>

```python
max_backups_to_retain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `max_backups_to_retain`<sup>Required</sup> <a name="max_backups_to_retain" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.maxBackupsToRetain"></a>

```python
max_backups_to_retain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionBackup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionBackup">NimblestudioLaunchProfileStreamConfigurationSessionBackup</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot">put_root</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot">reset_root</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_root` <a name="put_root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot"></a>

```python
def put_root(
  linux: str = None,
  windows: str = None
) -> None
```

###### `linux`<sup>Optional</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot.parameter.linux"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#linux NimblestudioLaunchProfile#linux}.

---

###### `windows`<sup>Optional</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.putRoot.parameter.windows"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/nimblestudio_launch_profile#windows NimblestudioLaunchProfile#windows}.

---

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_root` <a name="reset_root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.resetRoot"></a>

```python
def reset_root() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root">root</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput">mode_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput">root_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode">mode</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root`<sup>Required</sup> <a name="root" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.root"></a>

```python
root: NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference">NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.modeInput"></a>

```python
mode_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `root_input`<sup>Optional</sup> <a name="root_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.rootInput"></a>

```python
root_input: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.mode"></a>

```python
mode: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorage">NimblestudioLaunchProfileStreamConfigurationSessionStorage</a>

---


### NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux">reset_linux</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows">reset_windows</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_linux` <a name="reset_linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetLinux"></a>

```python
def reset_linux() -> None
```

##### `reset_windows` <a name="reset_windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.resetWindows"></a>

```python
def reset_windows() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput">linux_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput">windows_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux">linux</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows">windows</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux_input`<sup>Optional</sup> <a name="linux_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linuxInput"></a>

```python
linux_input: str
```

- *Type:* str

---

##### `windows_input`<sup>Optional</sup> <a name="windows_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windowsInput"></a>

```python
windows_input: str
```

- *Type:* str

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.linux"></a>

```python
linux: str
```

- *Type:* str

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.windows"></a>

```python
windows: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRootOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot">NimblestudioLaunchProfileStreamConfigurationSessionStorageRoot</a>

---


### NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference <a name="NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_launch_profile

nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.nimblestudioLaunchProfile.NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration">NimblestudioLaunchProfileStreamConfigurationVolumeConfiguration</a>

---



