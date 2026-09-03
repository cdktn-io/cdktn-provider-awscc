# `bedrockDataAutomationLibrary` Submodule <a name="`bedrockDataAutomationLibrary` Submodule" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockDataAutomationLibrary <a name="BedrockDataAutomationLibrary" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library awscc_bedrock_data_automation_library}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibrary(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  library_name: str,
  encryption_configuration: BedrockDataAutomationLibraryEncryptionConfiguration = None,
  library_description: str = None,
  tags: IResolvable | typing.List[BedrockDataAutomationLibraryTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryName">library_name</a></code> | <code>str</code> | Name of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | KMS Encryption Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryDescription">library_description</a></code> | <code>str</code> | Description of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]</code> | List of tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `library_name`<sup>Required</sup> <a name="library_name" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryName"></a>

- *Type:* str

Name of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#library_name BedrockDataAutomationLibrary#library_name}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

KMS Encryption Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#encryption_configuration BedrockDataAutomationLibrary#encryption_configuration}

---

##### `library_description`<sup>Optional</sup> <a name="library_description" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryDescription"></a>

- *Type:* str

Description of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#library_description BedrockDataAutomationLibrary#library_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#tags BedrockDataAutomationLibrary#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetLibraryDescription">reset_library_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_encryption_context: typing.Mapping[str] = None,
  kms_key_id: str = None
) -> None
```

###### `kms_encryption_context`<sup>Optional</sup> <a name="kms_encryption_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration.parameter.kmsEncryptionContext"></a>

- *Type:* typing.Mapping[str]

KMS Encryption Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#kms_encryption_context BedrockDataAutomationLibrary#kms_encryption_context}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration.parameter.kmsKeyId"></a>

- *Type:* str

KMS Key Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#kms_key_id BedrockDataAutomationLibrary#kms_key_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[BedrockDataAutomationLibraryTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_library_description` <a name="reset_library_description" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetLibraryDescription"></a>

```python
def reset_library_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockDataAutomationLibrary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockDataAutomationLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockDataAutomationLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference">BedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList">BedrockDataAutomationLibraryEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryArn">library_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList">BedrockDataAutomationLibraryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescriptionInput">library_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryNameInput">library_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescription">library_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryName">library_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfiguration"></a>

```python
encryption_configuration: BedrockDataAutomationLibraryEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference">BedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a>

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.entityTypes"></a>

```python
entity_types: BedrockDataAutomationLibraryEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList">BedrockDataAutomationLibraryEntityTypesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `library_arn`<sup>Required</sup> <a name="library_arn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryArn"></a>

```python
library_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tags"></a>

```python
tags: BedrockDataAutomationLibraryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList">BedrockDataAutomationLibraryTagsList</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | BedrockDataAutomationLibraryEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

---

##### `library_description_input`<sup>Optional</sup> <a name="library_description_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescriptionInput"></a>

```python
library_description_input: str
```

- *Type:* str

---

##### `library_name_input`<sup>Optional</sup> <a name="library_name_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryNameInput"></a>

```python
library_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[BedrockDataAutomationLibraryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]

---

##### `library_description`<sup>Required</sup> <a name="library_description" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescription"></a>

```python
library_description: str
```

- *Type:* str

---

##### `library_name`<sup>Required</sup> <a name="library_name" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryName"></a>

```python
library_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockDataAutomationLibraryConfig <a name="BedrockDataAutomationLibraryConfig" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  library_name: str,
  encryption_configuration: BedrockDataAutomationLibraryEncryptionConfiguration = None,
  library_description: str = None,
  tags: IResolvable | typing.List[BedrockDataAutomationLibraryTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryName">library_name</a></code> | <code>str</code> | Name of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | KMS Encryption Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryDescription">library_description</a></code> | <code>str</code> | Description of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]</code> | List of tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `library_name`<sup>Required</sup> <a name="library_name" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryName"></a>

```python
library_name: str
```

- *Type:* str

Name of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#library_name BedrockDataAutomationLibrary#library_name}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: BedrockDataAutomationLibraryEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

KMS Encryption Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#encryption_configuration BedrockDataAutomationLibrary#encryption_configuration}

---

##### `library_description`<sup>Optional</sup> <a name="library_description" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryDescription"></a>

```python
library_description: str
```

- *Type:* str

Description of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#library_description BedrockDataAutomationLibrary#library_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[BedrockDataAutomationLibraryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#tags BedrockDataAutomationLibrary#tags}

---

### BedrockDataAutomationLibraryEncryptionConfiguration <a name="BedrockDataAutomationLibraryEncryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration(
  kms_encryption_context: typing.Mapping[str] = None,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsEncryptionContext">kms_encryption_context</a></code> | <code>typing.Mapping[str]</code> | KMS Encryption Context. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | KMS Key Identifier. |

---

##### `kms_encryption_context`<sup>Optional</sup> <a name="kms_encryption_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsEncryptionContext"></a>

```python
kms_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

KMS Encryption Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#kms_encryption_context BedrockDataAutomationLibrary#kms_encryption_context}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

KMS Key Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#kms_key_id BedrockDataAutomationLibrary#kms_key_id}

---

### BedrockDataAutomationLibraryEntityTypes <a name="BedrockDataAutomationLibraryEntityTypes" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes()
```


### BedrockDataAutomationLibraryTags <a name="BedrockDataAutomationLibraryTags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.key">key</a></code> | <code>str</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.value">value</a></code> | <code>str</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.key"></a>

```python
key: str
```

- *Type:* str

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#key BedrockDataAutomationLibrary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.value"></a>

```python
value: str
```

- *Type:* str

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrock_data_automation_library#value BedrockDataAutomationLibrary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockDataAutomationLibraryEncryptionConfigurationOutputReference <a name="BedrockDataAutomationLibraryEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsEncryptionContext">reset_kms_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_encryption_context` <a name="reset_kms_encryption_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsEncryptionContext"></a>

```python
def reset_kms_encryption_context() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContextInput">kms_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext">kms_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_encryption_context_input`<sup>Optional</sup> <a name="kms_encryption_context_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContextInput"></a>

```python
kms_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_encryption_context`<sup>Required</sup> <a name="kms_encryption_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext"></a>

```python
kms_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockDataAutomationLibraryEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

---


### BedrockDataAutomationLibraryEntityTypesList <a name="BedrockDataAutomationLibraryEntityTypesList" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockDataAutomationLibraryEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BedrockDataAutomationLibraryEntityTypesOutputReference <a name="BedrockDataAutomationLibraryEntityTypesOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata">entity_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes">BedrockDataAutomationLibraryEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_metadata`<sup>Required</sup> <a name="entity_metadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata"></a>

```python
entity_metadata: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: BedrockDataAutomationLibraryEntityTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes">BedrockDataAutomationLibraryEntityTypes</a>

---


### BedrockDataAutomationLibraryTagsList <a name="BedrockDataAutomationLibraryTagsList" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockDataAutomationLibraryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockDataAutomationLibraryTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>]

---


### BedrockDataAutomationLibraryTagsOutputReference <a name="BedrockDataAutomationLibraryTagsOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrock_data_automation_library

bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockDataAutomationLibraryTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>

---



