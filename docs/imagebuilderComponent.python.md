# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktn/provider-awscc.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component awscc_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  platform: str,
  version: str,
  change_description: str = None,
  data: str = None,
  description: str = None,
  kms_key_id: str = None,
  supported_os_versions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.platform">platform</a></code> | <code>str</code> | The platform of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.version">version</a></code> | <code>str</code> | The version of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.changeDescription">change_description</a></code> | <code>str</code> | The change description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.data">data</a></code> | <code>str</code> | The data of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key identifier used to encrypt the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | The operating system (OS) version supported by the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.uri">uri</a></code> | <code>str</code> | The uri of the component. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.name"></a>

- *Type:* str

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.platform"></a>

- *Type:* str

The platform of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.version"></a>

- *Type:* str

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}

---

##### `change_description`<sup>Optional</sup> <a name="change_description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.changeDescription"></a>

- *Type:* str

The change description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.data"></a>

- *Type:* str

The data of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.description"></a>

- *Type:* str

The description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The KMS key identifier used to encrypt the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}

---

##### `supported_os_versions`<sup>Optional</sup> <a name="supported_os_versions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.supportedOsVersions"></a>

- *Type:* typing.List[str]

The operating system (OS) version supported by the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.uri"></a>

- *Type:* str

The uri of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">reset_change_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">reset_supported_os_versions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri">reset_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_change_description` <a name="reset_change_description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```python
def reset_change_description() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_supported_os_versions` <a name="reset_supported_os_versions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```python
def reset_supported_os_versions() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```python
def reset_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderComponent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">change_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">supported_os_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">change_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion"></a>

```python
latest_version: ImagebuilderComponentLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `change_description_input`<sup>Optional</sup> <a name="change_description_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```python
change_description_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `supported_os_versions_input`<sup>Optional</sup> <a name="supported_os_versions_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```python
supported_os_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `change_description`<sup>Required</sup> <a name="change_description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```python
change_description: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `supported_os_versions`<sup>Required</sup> <a name="supported_os_versions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```python
supported_os_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  platform: str,
  version: str,
  change_description: str = None,
  data: str = None,
  description: str = None,
  kms_key_id: str = None,
  supported_os_versions: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name">name</a></code> | <code>str</code> | The name of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">platform</a></code> | <code>str</code> | The platform of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version">version</a></code> | <code>str</code> | The version of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">change_description</a></code> | <code>str</code> | The change description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data">data</a></code> | <code>str</code> | The data of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description">description</a></code> | <code>str</code> | The description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key identifier used to encrypt the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">supported_os_versions</a></code> | <code>typing.List[str]</code> | The operating system (OS) version supported by the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">uri</a></code> | <code>str</code> | The uri of the component. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}

---

##### `change_description`<sup>Optional</sup> <a name="change_description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```python
change_description: str
```

- *Type:* str

The change description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```python
data: str
```

- *Type:* str

The data of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS key identifier used to encrypt the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}

---

##### `supported_os_versions`<sup>Optional</sup> <a name="supported_os_versions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```python
supported_os_versions: typing.List[str]
```

- *Type:* typing.List[str]

The operating system (OS) version supported by the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

The uri of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}

---

### ImagebuilderComponentLatestVersion <a name="ImagebuilderComponentLatestVersion" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponentLatestVersion()
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderComponentLatestVersionOutputReference <a name="ImagebuilderComponentLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_component

imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major">major</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor">minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch">patch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major"></a>

```python
major: str
```

- *Type:* str

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor"></a>

```python
minor: str
```

- *Type:* str

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch"></a>

```python
patch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderComponentLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a>

---



