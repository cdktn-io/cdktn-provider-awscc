# `nimblestudioStreamingImage` Submodule <a name="`nimblestudioStreamingImage` Submodule" id="@cdktn/provider-awscc.nimblestudioStreamingImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStreamingImage <a name="NimblestudioStreamingImage" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ec2_image_id: str,
  name: str,
  studio_id: str,
  description: str = None,
  encryption_configuration_key_arn: str = None,
  encryption_configuration_key_type: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.ec2ImageId">ec2_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyArn">encryption_configuration_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyType">encryption_configuration_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_image_id`<sup>Required</sup> <a name="ec2_image_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.ec2ImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.studioId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}.

---

##### `encryption_configuration_key_arn`<sup>Optional</sup> <a name="encryption_configuration_key_arn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}.

---

##### `encryption_configuration_key_type`<sup>Optional</sup> <a name="encryption_configuration_key_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn">reset_encryption_configuration_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType">reset_encryption_configuration_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration_key_arn` <a name="reset_encryption_configuration_key_arn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn"></a>

```python
def reset_encryption_configuration_key_arn() -> None
```

##### `reset_encryption_configuration_key_type` <a name="reset_encryption_configuration_key_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType"></a>

```python
def reset_encryption_configuration_key_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NimblestudioStreamingImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NimblestudioStreamingImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStreamingImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds">eula_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId">streaming_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput">ec2_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput">encryption_configuration_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput">encryption_configuration_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput">studio_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId">ec2_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn">encryption_configuration_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType">encryption_configuration_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId">studio_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration"></a>

```python
encryption_configuration: NimblestudioStreamingImageEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a>

---

##### `eula_ids`<sup>Required</sup> <a name="eula_ids" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds"></a>

```python
eula_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `streaming_image_id`<sup>Required</sup> <a name="streaming_image_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId"></a>

```python
streaming_image_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `ec2_image_id_input`<sup>Optional</sup> <a name="ec2_image_id_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput"></a>

```python
ec2_image_id_input: str
```

- *Type:* str

---

##### `encryption_configuration_key_arn_input`<sup>Optional</sup> <a name="encryption_configuration_key_arn_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput"></a>

```python
encryption_configuration_key_arn_input: str
```

- *Type:* str

---

##### `encryption_configuration_key_type_input`<sup>Optional</sup> <a name="encryption_configuration_key_type_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput"></a>

```python
encryption_configuration_key_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `studio_id_input`<sup>Optional</sup> <a name="studio_id_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput"></a>

```python
studio_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ec2_image_id`<sup>Required</sup> <a name="ec2_image_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId"></a>

```python
ec2_image_id: str
```

- *Type:* str

---

##### `encryption_configuration_key_arn`<sup>Required</sup> <a name="encryption_configuration_key_arn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn"></a>

```python
encryption_configuration_key_arn: str
```

- *Type:* str

---

##### `encryption_configuration_key_type`<sup>Required</sup> <a name="encryption_configuration_key_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType"></a>

```python
encryption_configuration_key_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStreamingImageConfig <a name="NimblestudioStreamingImageConfig" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ec2_image_id: str,
  name: str,
  studio_id: str,
  description: str = None,
  encryption_configuration_key_arn: str = None,
  encryption_configuration_key_type: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId">ec2_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId">studio_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn">encryption_configuration_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType">encryption_configuration_key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ec2_image_id`<sup>Required</sup> <a name="ec2_image_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId"></a>

```python
ec2_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}.

---

##### `studio_id`<sup>Required</sup> <a name="studio_id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId"></a>

```python
studio_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}.

---

##### `encryption_configuration_key_arn`<sup>Optional</sup> <a name="encryption_configuration_key_arn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn"></a>

```python
encryption_configuration_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}.

---

##### `encryption_configuration_key_type`<sup>Optional</sup> <a name="encryption_configuration_key_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType"></a>

```python
encryption_configuration_key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}.

---

### NimblestudioStreamingImageEncryptionConfiguration <a name="NimblestudioStreamingImageEncryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStreamingImageEncryptionConfigurationOutputReference <a name="NimblestudioStreamingImageEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import nimblestudio_streaming_image

nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: NimblestudioStreamingImageEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a>

---



